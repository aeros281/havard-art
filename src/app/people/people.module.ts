import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {environment} from 'src/environments/environment';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { NgxsModule } from '@ngxs/store';
import {PeopleState} from './state/people-state';


@NgModule({
  declarations: [PeopleComponent, PeopleListComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    NgxsModule.forFeature([PeopleState])
  ]
})
export class PeopleModule { }
