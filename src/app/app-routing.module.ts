import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
/*import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { AngularNotesSvcRoutingComponent } from './angular-notes/angular-notes-svc-routing.component';
import { AngularNotesFormsComponent } from './angular-notes/angular-notes-forms.component';
import { AngularNotesDynamicComponent } from './angular-notes/angular-notes-dynamic.component';
import { DynamicNotesComponent } from './angular-notes/dynamic-notes.component';
import { AngularNotesHttpComponent } from './angular-notes/angular-notes-http.component';
import { AngularNotesAuthComponent } from './angular-notes/angular-notes-auth.component';
import { AngularNotesModulesComponent } from './angular-notes/angular-notes-modules.component';
import { AngularNotesSomeMoreComponent } from './angular-notes/angular-notes-somemore.component';
*/
//import { ReactNotesComponent } from './react-notes/react-notes.component';

import { ReadBackComponent } from './other-fun/read-back.component';
import {MemoryCardsComponent } from './other-fun/memory-cards.component';
import {WhyComponent } from './other-fun/why.component';

//import { ForCanActivate } from './shared/forCanActivate.service';
//import { ForCanDeActivate } from './shared/forCanActivate.service';
import {NotFoundComponent} from './other-fun/not-found.component';

import {AddSplittingComponent} from './math-kids/pages/add-splitting.component';
import {ArraysComponent} from './math-kids/pages/arrays.component';
import {BalanceEquationComponent} from './math-kids/pages/balance-equation.component';
import {Carry1Component} from './math-kids/pages/carry1.component';
import {ClockComponent} from './math-kids/pages/clock.component';
import {ConceptComponent} from './math-kids/pages/concept.component';
import {CountByComponent} from './math-kids/pages/count-by.component';
import {DoublesComponent} from './math-kids/pages/doubles.component';
import {NumberChartComponent} from './math-kids/pages/number-chart.component';
import {PlusMinusComponent} from './math-kids/pages/plus-minus.component';
import {SubCountUpComponent} from './math-kids/pages/sub-count-up.component';
//import {SubtalliesComponent} from './math-kids/pages/subtallies.component';
import {SubtractTo10Component} from './math-kids/pages/subtract-to-10.component';

//prefer to have the components on their own and not in a module
import {TablesComponent} from './math-kids3/pages/tables.component';
import {RoundingComponent} from './math-kids3/pages/rounding.component'
import {TwoStepProblemComponent} from './math-kids3/pages/2StepProblem.component'


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'addSplitting', component: AddSplittingComponent, pathMatch: 'full' },
  { path: 'arrays', component: ArraysComponent, pathMatch: 'full' },
  { path: 'balanceEquation', component: BalanceEquationComponent, pathMatch: 'full' },
  { path: 'carry1', component: Carry1Component, pathMatch: 'full' },
  { path: 'clock', component: ClockComponent, pathMatch: 'full' },
  { path: 'concept', component: ConceptComponent, pathMatch: 'full' },
  { path: 'countBy', component: CountByComponent, pathMatch: 'full' },
  { path: 'doubles', component: DoublesComponent, pathMatch: 'full' },
  { path: 'number-chart', component: NumberChartComponent, pathMatch: 'full' },
  { path: 'plus-minus', component: PlusMinusComponent, pathMatch: 'full' },
  { path: 'sub-count-up', component: SubCountUpComponent, pathMatch: 'full' },
 // { path: 'subtallies', component: SubtalliesComponent, pathMatch: 'full' },
  { path: 'subtract-to-10', component: SubtractTo10Component, pathMatch: 'full' },

  { path: 'tables', component: TablesComponent, pathMatch: 'full' },
  { path: 'rounding', component: RoundingComponent, pathMatch: 'full' },
  { path: '2StepProblem', component: TwoStepProblemComponent, pathMatch: 'full' },

  //{path: 'csharp', loadChildren: () => import('./csharp/csharp.module').then(m => m.CSharpModule)},
  //{path: 'javascript', loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule)},
  //{path: 'node', loadChildren: () => import('./node/node.module').then(m => m.NodeModule)},
 // {path: 'sql', loadChildren: () => import('./sql/sql.module').then(m => m.SQLModule)},
  {path: 'kidsmath', loadChildren: () => import('./math-kids/kidsmath.module').then(m => m.KidsMathModule)},
  {path: 'kidsmath3', loadChildren: () => import('./math-kids3/kidsmath3.module').then(m => m.KidsMath3Module)},
  //{path: 'git', loadChildren: () => import('./git-notes/git.module').then(m => m.GitModule)},
  {path: 'angular', loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)},

  /*
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
  { path: 'angular-notes-somemore', component: AngularNotesSomeMoreComponent, pathMatch: 'full' },  
*/

 // { path: 'react-notes', component: ReactNotesComponent, pathMatch: 'full' },  

  { path: 'read-back', component: ReadBackComponent, pathMatch: 'full' },
  { path: 'memory-cards', component: MemoryCardsComponent, pathMatch: 'full' },  
  { path: 'why', component: WhyComponent, pathMatch: 'full' },  

  { path: 'not-found', component:NotFoundComponent, pathMatch:'full', data:{message:"I AM THE MESSAGE FROM not-found!!!!"}},
  
  { path: '**', redirectTo:'not-found'},

];

const routerOptions :ExtraOptions ={ anchorScrolling:"enabled", scrollPositionRestoration:"enabled", onSameUrlNavigation: "reload"}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions ), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

