import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsMath3RoutingModule } from './kidsmath3-routing.module';
import { KidsMath3Component } from './kidsmath3.component';

import { TablesComponent } from './pages/tables.component';
import { RoundingComponent } from './pages/rounding.component';

import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    KidsMath3Component,
    TablesComponent,
    RoundingComponent
  ],
  imports: [
    CommonModule,
    KidsMath3RoutingModule,
    SharedModule
  ],
  //providers:[{provide: RouteReuseStrategy, useClass: KidsMathStrategy}]
})
export class KidsMath3Module { }
