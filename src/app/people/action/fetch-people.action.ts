export class FetchPeopleAction {
  static readonly type = '[People] FetchPeople';

  constructor(public currentPage: number, public itemPerPage: number) {}
}
