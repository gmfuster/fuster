import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { AngularNotesSvcRoutingComponent } from './angular-notes/angular-notes-svc-routing.component';
import { ProbabilityNotesComponent } from './math-notes/probability-notes.component';
import { CSharpArticlesComponent } from './csharp-notes/csharp-articles.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'angular-notes', component: AngularNotesComponent, pathMatch: 'full' },
  { path: 'angular-notes-svc-routing', component: AngularNotesSvcRoutingComponent, pathMatch: 'full' },  

  { path: 'probability-notes', component: ProbabilityNotesComponent, pathMatch: 'full' },

  { path: 'csharp-articles', component: CSharpArticlesComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
