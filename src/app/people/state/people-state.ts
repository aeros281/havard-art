import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

export interface PeopleRecords {
  currentPage: number;
  itemPerPage: number;
  records: any[];
}

@State<PeopleRecords>({
  name: 'people',
  defaults: {
    currentPage: 1,
    itemPerPage: 10,
    records: [
      1, 2, 3, 4, 5
    ]
  }
})
@Injectable()
export class PeopleState {
}
