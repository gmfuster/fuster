import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KidsMath3Component } from './kidsmath3.component';

const routes: Routes = [{ path: '', component: KidsMath3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsMath3RoutingModule { }
