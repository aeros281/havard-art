export class UpdatePeopleAction {
    static readonly type = '[People] UpdatePeople';

    constructor(public responseData: CommonResponse<PeopleRecord>) {}
}