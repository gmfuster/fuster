import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { AngularNotesSvcRoutingComponent } from './angular-notes/angular-notes-svc-routing.component';
import { DynamicNotesComponent } from './angular-notes/dynamic-notes.component';
import { ProbabilityNotesComponent } from './math-notes/probability-notes.component';
import { CSharpArticlesComponent } from './csharp-notes/csharp-articles.component';
import { JavaScriptNotesComponent } from './javascript-notes/javascript-notes.component';
import { ReadBackComponent } from './other-fun/read-back.component';
import {MemoryCardsComponent } from './other-fun/memory-cards.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'angular-notes', component: AngularNotesComponent, pathMatch: 'full' },
  { path: 'angular-notes-svc-routing', component: AngularNotesSvcRoutingComponent, pathMatch: 'full' },  
  { path: 'dynamic-notes/:id', component: DynamicNotesComponent, pathMatch: 'full' },  

  { path: 'probability-notes', component: ProbabilityNotesComponent, pathMatch: 'full' },

  { path: 'csharp-articles', component: CSharpArticlesComponent, pathMatch: 'full' },

  { path: 'read-back', component: ReadBackComponent, pathMatch: 'full' },
  { path: 'memory-cards', component: MemoryCardsComponent, pathMatch: 'full' },
  { path: 'javascript-notes', component: JavaScriptNotesComponent, pathMatch: 'full' }, //basics

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
