import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptComponent } from './javascript.component';
import { JavaScriptNotesComponent } from '../javascript-notes/javascript-notes.component';
import { JavaScriptNotesAsyncComponent } from '../javascript-notes/javascript-notes-async.component';
import { JavaScriptNotesObjectsComponent } from '../javascript-notes/javascript-notes-objects.component';

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    JavascriptComponent,
    JavaScriptNotesComponent,
    JavaScriptNotesAsyncComponent,
    JavaScriptNotesObjectsComponent    
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule,
    SharedModule
  ]
})
export class JavascriptModule { }
