import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitRoutingModule } from './git-routing.module';
import { GitComponent } from './git.component';

//import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    GitRoutingModule,
    //SharedModule
  ]
})
export class GitModule { }
