import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchPeopleAction } from '../action';
import { PeopleState } from '../state/people-state';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  @Select(PeopleState.records) people$: Observable<PeopleRecord[]>;
  @Select(PeopleState.info) info$: Observable<{ currentPage: number, itemPerPage: number }>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchPeopleAction(1, 10));
  }

}
