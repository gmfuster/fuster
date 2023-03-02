import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KidsMathComponent } from './kidsmath.component';

const routes: Routes = [{ path: '', component: KidsMathComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsMathRoutingModule { }
