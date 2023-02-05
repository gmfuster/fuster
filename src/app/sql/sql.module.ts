import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SQLRoutingModule } from './sql-routing.module';
import { SQLComponent } from './sql.component';

import { SQLBasicsComponent } from '../sql-notes/sql-basics.component';

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    SQLComponent,
    SQLBasicsComponent
  ],
  imports: [
    CommonModule,
    SQLRoutingModule,
    SharedModule
  ]
})
export class SQLModule { }
