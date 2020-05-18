interface ResponseInfo {
  totalrecordsperquery: number;
  totalrecords: number;
  pages: number;
  page: number;
  next: string;
}

interface CommonResponse<T> {
  info: ResponseInfo;
  records: T[];
}

interface PeopleRecord {
  dateend: number;
  alphasort: string;
  displaydate: number;
  url: string;
  deathplace: number;
  id: number; 
  objectcount: number;
  lastupdate: string;
  datebegin: number;
  birthplace: number;
  personid: number;
  gender: string;
  culture: any;
  displayname: string;
}
