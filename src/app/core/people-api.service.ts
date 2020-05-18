import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOSTNAME, API_KEY } from './const';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleApiService {

  constructor(private httpClient: HttpClient) { }

  getHostName(): string { return HOSTNAME; }
  getResourceName(): string { return 'person'; }
  getProtocol(): string { return 'https'; }
  getApiKey(): string { return API_KEY; }

  getInvididualResourceUrl(): string {
    return this.getProtocol() + '://' + this.getHostName() + '/' + this.getResourceName();
  }

  addApiKey(resourceGetter: () => string): string {
    return resourceGetter() + '?apikey=' + this.getApiKey();
  }

  fetchPeopleList(): Observable<any> {
    return this.httpClient.get(this.addApiKey(this.getInvididualResourceUrl.bind(this)));
  }
}
