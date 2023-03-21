import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsMathRoutingModule } from './kidsmath-routing.module';
import { KidsMathComponent } from './kidsmath.component';

import { DoublesComponent } from './pages/doubles.component';
import { NumberChartComponent } from './pages/number-chart.component';
import { CountByComponent } from './pages/count-by.component';
import { SubtractTo10Component } from './pages/subtract-to-10.component';
import { ArraysComponent } from './pages/arrays.component';
import { AddSplittingComponent } from './pages/add-splitting.component';
import { BalanceEquationComponent } from './pages/balance-equation.component';
import { Carry1Component } from './pages/carry1.component';
import { SubtalliesComponent } from './pages/subtallies.component';
import { SubCountUpComponent } from './pages/sub-count-up.component';
import { PlusMinusComponent } from './pages//plus-minus.component';
import { ConceptComponent } from './pages//concept.component';
import { ClockComponent } from './pages//clock.component';

import { SharedModule } from "../shared/shared.module";
//import { RouteReuseStrategy } from '@angular/router';
//import {KidsMathStrategy} from "../shared/kidsMathStrategy";

@NgModule({
  declarations: [
    KidsMathComponent,
    DoublesComponent,
    NumberChartComponent,
    CountByComponent,
    SubtractTo10Component,
    ArraysComponent,
    AddSplittingComponent,
    BalanceEquationComponent,
    Carry1Component,
    SubtalliesComponent,
    SubCountUpComponent,
    PlusMinusComponent,
    ConceptComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    KidsMathRoutingModule,
    SharedModule
  ],
  //providers:[{provide: RouteReuseStrategy, useClass: KidsMathStrategy}]
})
export class KidsMathModule { }
