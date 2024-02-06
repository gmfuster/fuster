import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NodeRoutingModule } from './node-routing.module';
import {NodeComponent } from './node.component';
import { NodeNotesComponent } from '.././node-notes/node-notes.component';
import { NodeNotesExpressComponent } from '.././node-notes/node-notes-express.component';
import { NodeNotesMVCComponent } from '.././node-notes/node-notes-mvc.component';
import { NodeNotesDBComponent } from '.././node-notes/node-notes-db.component';
import { NodeNotesGraphQLComponent } from '.././node-notes/node-notes-graphql.component';


@NgModule({
  declarations: [
    NodeComponent,
    NodeNotesComponent,
    NodeNotesExpressComponent,
    NodeNotesMVCComponent,
    NodeNotesDBComponent,   
    NodeNotesGraphQLComponent 
  ],
  imports: [
    CommonModule,
    NodeRoutingModule
  ]
})
export class NodeModule { }
