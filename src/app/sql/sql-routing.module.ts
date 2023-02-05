import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SQLComponent } from './sql.component';

const routes: Routes = [{ path: '', component: SQLComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SQLRoutingModule { }
