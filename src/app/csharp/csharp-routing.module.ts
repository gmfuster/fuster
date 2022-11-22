import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CSharpComponent } from './csharp.component';

const routes: Routes = [{ path: '', component: CSharpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CSharpRoutingModule { }
