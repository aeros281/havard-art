import { Component, OnInit } from '@angular/core';
import {PeopleApiService } from '../../core/people-api.service';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public people$: Observable<any>;

  constructor(private peopleApiService: PeopleApiService) { }

  ngOnInit(): void {
    this.people$ = this.peopleApiService.fetchPeopleList().pipe(
      map((res) => res.records)
    );
  }

}
