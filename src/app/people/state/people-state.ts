import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { PeopleApiService } from 'src/app/core/people-api.service';
import { FetchPeopleAction, UpdatePeopleAction } from '../action';

export interface PeopleStateModel {
  info: {
    currentPage: number,
    itemPerPage: number,
  };
  records: PeopleRecord[];
}

@State<PeopleStateModel>({
  name: 'people',
  defaults: {
    info: { currentPage: 1, itemPerPage: 10 },
    records: []
  }
})
@Injectable()
export class PeopleState {

  constructor(private peopleService: PeopleApiService) {}

  @Selector()
  static info(state: PeopleStateModel) {
    return state.info;
  }

  @Selector()
  static records(state: PeopleStateModel) {
    return state.records;
  }

  @Action(FetchPeopleAction)
  fetchPeople(ctx: StateContext<PeopleStateModel>) {
    return this.peopleService.fetchPeopleList().pipe(tap((res: CommonResponse<PeopleRecord>) => {
      ctx.dispatch(new UpdatePeopleAction(res));
    }));
  }

  @Action(UpdatePeopleAction)
  updatePeople(ctx: StateContext<PeopleStateModel>, action: UpdatePeopleAction) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      records: action.responseData.records || [],
      info: {
        currentPage: action.responseData.info.page,
        itemPerPage: action.responseData.info.totalrecordsperquery
      }
    });
  }

}
