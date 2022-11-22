import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { AngularNotesSvcRoutingComponent } from './angular-notes/angular-notes-svc-routing.component';
import { AngularNotesFormsComponent } from './angular-notes/angular-notes-forms.component';
import { AngularNotesDynamicComponent } from './angular-notes/angular-notes-dynamic.component';
import { DynamicNotesComponent } from './angular-notes/dynamic-notes.component';
import { AngularNotesHttpComponent } from './angular-notes/angular-notes-http.component';
import { AngularNotesAuthComponent } from './angular-notes/angular-notes-auth.component';
import { AngularNotesModulesComponent } from './angular-notes/angular-notes-modules.component';

/*import { ProbabilityNotesComponent } from './math-notes/probability-notes.component';*/
import { CSharpModule } from './csharp/csharp.module';
/*
import { CSharpArticlesComponent } from './csharp-notes/csharp-articles.component';
import { CSharpBasicsComponent } from './csharp-notes/csharp-basics.component';
import { CSharpDelegatesetcComponent } from './csharp-notes/csharp-delegatesetc.component';
import { CSharpThreadingComponent } from './csharp-notes/csharp-threading.component';
import { CSharpInterfacesComponent } from './csharp-notes/csharp-interfaces.component';
import { CSharpEFComponent } from './csharp-notes/csharp-ef.component';
import { CSharpLinqComponent } from './csharp-notes/csharp-linq.component';
import { CSharpMVCComponent } from './csharp-notes/csharp-mvc.component';*/

import { JavaScriptNotesComponent } from './javascript-notes/javascript-notes.component';
import { JavaScriptNotesAsyncComponent } from './javascript-notes/javascript-notes-async.component';
import { JavaScriptNotesObjectsComponent } from './javascript-notes/javascript-notes-objects.component';

import { NodeNotesComponent } from './node-notes/node-notes.component';
import { NodeNotesExpressComponent } from './node-notes/node-notes-express.component';
import { NodeNotesMVCComponent } from './node-notes/node-notes-mvc.component';
import { NodeNotesDBComponent } from './node-notes/node-notes-db.component';
import { ReadBackComponent } from './other-fun/read-back.component';

import {MemoryCardsComponent } from './other-fun/memory-cards.component';
/*import {MapItComponent } from './other-fun/map-it.component';*/

import { ForCanActivate } from './shared/forCanActivate.service';
import { ForCanDeActivate } from './shared/forCanActivate.service';
import {NotFoundComponent} from './other-fun/not-found.component';

import {DoublesComponent} from './math-kids/doubles.component';
import {NumberChartComponent} from './math-kids/number-chart.component';
import {CountByComponent} from './math-kids/count-by.component';
import {SubtractTo10Component} from './math-kids/subtract-to-10.component';
import {ConceptComponent} from './math-kids/concept.component';
import {ArraysComponent} from './math-kids/arrays.component';
import {AddSplittingComponent} from './math-kids/add-splitting.component';
import {BalanceEquationComponent} from './math-kids/balance-equation.component';
import {Carry1Component} from './math-kids/carry1.component';
import {SubtalliesComponent} from './math-kids/subtallies.component';
import {SubCountUpComponent} from './math-kids/sub-count-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  {path: 'csharp', loadChildren: () => import('./csharp/csharp.module').then(m => m.CSharpModule)},

  { path: 'angular-notes', component: AngularNotesComponent, pathMatch: 'full' },
  { path: 'angular-notes', component: AngularNotesComponent, pathMatch: 'full' },
  { path: 'angular-notes-svc-routing', component: AngularNotesSvcRoutingComponent, pathMatch: 'full' },  
  { path: 'angular-notes-forms', component: AngularNotesFormsComponent, pathMatch: 'full' },  
  { path: 'dynamic-notes/:id', component: DynamicNotesComponent, pathMatch: 'full' },  
  { path: 'angular-notes-noactivate', component: AngularNotesComponent, canActivate:[ForCanActivate], canDeactivate:[ForCanDeActivate], pathMatch: 'full' },  
  { path: 'angular-notes-http', component: AngularNotesHttpComponent, pathMatch: 'full' },  
  { path: 'angular-notes-auth', component: AngularNotesAuthComponent, pathMatch: 'full' },  
  { path: 'angular-notes-dynamic', component: AngularNotesDynamicComponent, pathMatch: 'full' },  
  { path: 'angular-notes-modules', component: AngularNotesModulesComponent, pathMatch: 'full' },  

  /*{ path: 'probability-notes', component: ProbabilityNotesComponent, pathMatch: 'full' },*/
/*
  { path: 'csharp-articles', component: CSharpArticlesComponent, pathMatch: 'full' },
  { path: 'csharp-basics', component: CSharpBasicsComponent, pathMatch: 'full' },
  { path: 'csharp-delegatesetc', component: CSharpDelegatesetcComponent, pathMatch: 'full' },
  { path: 'csharp-threading', component: CSharpThreadingComponent, pathMatch: 'full' },
  { path: 'csharp-interfaces', component: CSharpInterfacesComponent, pathMatch: 'full' },
  { path: 'csharp-ef', component: CSharpEFComponent, pathMatch: 'full' },
  { path: 'csharp-linq', component: CSharpLinqComponent, pathMatch: 'full' },
  { path: 'csharp-mvc', component: CSharpMVCComponent, pathMatch: 'full' },
*/

  { path: 'read-back', component: ReadBackComponent, pathMatch: 'full' },
  { path: 'memory-cards', component: MemoryCardsComponent, pathMatch: 'full' },
 /* { path: 'map-it', component: MapItComponent, pathMatch: 'full' },  */

  { path: 'javascript-notes', component: JavaScriptNotesComponent, pathMatch: 'full' }, //basics
  { path: 'javascript-notes-async', component: JavaScriptNotesAsyncComponent, pathMatch: 'full' }, 
  { path: 'javascript-notes-objects', component: JavaScriptNotesObjectsComponent, pathMatch: 'full' }, 

  /*
  { path: 'node-notes', component: NodeNotesComponent, pathMatch: 'full' }, //basics
  { path: 'node-notes-express', component: NodeNotesExpressComponent, pathMatch: 'full' }, //Express
  { path: 'node-notes-mvc', component: NodeNotesMVCComponent, pathMatch: 'full' }, //Express
  { path: 'node-notes-db', component: NodeNotesDBComponent, pathMatch: 'full' }, //Express
  */

  { path: 'doubles', component: DoublesComponent, pathMatch: 'full' }, //kids math
  { path: 'number-chart', component: NumberChartComponent, pathMatch: 'full' }, //kids math
  { path: 'count-by', component: CountByComponent, pathMatch: 'full' }, //kids math
  { path: 'subtract-to-10', component: SubtractTo10Component, pathMatch: 'full' }, //kids math
  { path: 'concept', component: ConceptComponent, pathMatch: 'full' }, //kids math
  { path: 'arrays', component: ArraysComponent, pathMatch: 'full' }, //kids math
  { path: 'add-splitting', component:AddSplittingComponent, pathMatch: 'full' }, //kids math
  { path: 'balance-equation', component:BalanceEquationComponent, pathMatch: 'full' }, //kids math
  { path: 'carry1', component:Carry1Component, pathMatch: 'full' }, //kids math
  { path: 'subtallies', component:SubtalliesComponent, pathMatch: 'full' }, //kids math
  { path: 'sub-count-up', component:SubCountUpComponent, pathMatch: 'full' }, //kids math


  { path: 'not-found', component:NotFoundComponent, pathMatch:'full', data:{message:"I AM THE MESSAGE FROM not-found!!!!"}},
  
  { path: '**', redirectTo:'not-found'},

];

const routerOptions :ExtraOptions ={ anchorScrolling:"enabled", scrollPositionRestoration:"enabled", onSameUrlNavigation: "reload"}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions ), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
