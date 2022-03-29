import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { AngularNotesSvcRoutingComponent } from './angular-notes/angular-notes-svc-routing.component';
import { DynamicNotesComponent } from './angular-notes/dynamic-notes.component';
import { ProbabilityNotesComponent } from './math-notes/probability-notes.component';
import { CSharpArticlesComponent } from './csharp-notes/csharp-articles.component';
import { CSharpBasicsComponent } from './csharp-notes/csharp-basics.component';
import { CSharpDelegatesetcComponent } from './csharp-notes/csharp-delegatesetc.component';
import { CSharpThreadingComponent } from './csharp-notes/csharp-threading.component';
import { JavaScriptNotesComponent } from './javascript-notes/javascript-notes.component';
import { JavaScriptNotesAsyncComponent } from './javascript-notes/javascript-notes-async.component';
import { JavaScriptNotesObjectsComponent } from './javascript-notes/javascript-notes-objects.component';
import { NodeNotesComponent } from './node-notes/node-notes.component';
import { NodeNotesExpressComponent } from './node-notes/node-notes-express.component';
import { ReadBackComponent } from './other-fun/read-back.component';
import {MemoryCardsComponent } from './other-fun/memory-cards.component';
import {MapItComponent } from './other-fun/map-it.component';
import { ForCanActivate } from './shared/forCanActivate.service';
import { ForCanDeActivate } from './shared/forCanActivate.service';
import {NotFoundComponent} from './other-fun/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'angular-notes', component: AngularNotesComponent, pathMatch: 'full' },
  { path: 'angular-notes-svc-routing', component: AngularNotesSvcRoutingComponent, pathMatch: 'full' },  
  { path: 'dynamic-notes/:id', component: DynamicNotesComponent, pathMatch: 'full' },  
  { path: 'angular-notes-noactivate', component: AngularNotesComponent, canActivate:[ForCanActivate], canDeactivate:[ForCanDeActivate], pathMatch: 'full' },  

  { path: 'probability-notes', component: ProbabilityNotesComponent, pathMatch: 'full' },

  { path: 'csharp-articles', component: CSharpArticlesComponent, pathMatch: 'full' },
  { path: 'csharp-basics', component: CSharpBasicsComponent, pathMatch: 'full' },
  { path: 'csharp-delegatesetc', component: CSharpDelegatesetcComponent, pathMatch: 'full' },
  { path: 'csharp-threading', component: CSharpThreadingComponent, pathMatch: 'full' },

  { path: 'read-back', component: ReadBackComponent, pathMatch: 'full' },
  { path: 'memory-cards', component: MemoryCardsComponent, pathMatch: 'full' },
  { path: 'map-it', component: MapItComponent, pathMatch: 'full' },  

  { path: 'javascript-notes', component: JavaScriptNotesComponent, pathMatch: 'full' }, //basics
  { path: 'javascript-notes-async', component: JavaScriptNotesAsyncComponent, pathMatch: 'full' }, 
  { path: 'javascript-notes-objects', component: JavaScriptNotesObjectsComponent, pathMatch: 'full' }, 

  { path: 'node-notes', component: NodeNotesComponent, pathMatch: 'full' }, //basics
  { path: 'node-notes-express', component: NodeNotesExpressComponent, pathMatch: 'full' }, //Express


  { path: 'not-found', component:NotFoundComponent, pathMatch:'full', data:{message:"I AM THE MESSAGE FROM not-found!!!!"}},
  { path: '**', redirectTo:'not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
