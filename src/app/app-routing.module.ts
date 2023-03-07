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
import { AngularNotesSomeMoreComponent } from './angular-notes/angular-notes-somemore.component';

import { ReactNotesComponent } from './react-notes/react-notes.component';

import { ReadBackComponent } from './other-fun/read-back.component';
import {MemoryCardsComponent } from './other-fun/memory-cards.component';

import { ForCanActivate } from './shared/forCanActivate.service';
import { ForCanDeActivate } from './shared/forCanActivate.service';
import {NotFoundComponent} from './other-fun/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  {path: 'csharp', loadChildren: () => import('./csharp/csharp.module').then(m => m.CSharpModule)},
  {path: 'javascript', loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule)},
  {path: 'node', loadChildren: () => import('./node/node.module').then(m => m.NodeModule)},
  {path: 'sql', loadChildren: () => import('./sql/sql.module').then(m => m.SQLModule)},
  {path: 'kidsmath', loadChildren: () => import('./math-kids/kidsmath.module').then(m => m.KidsMathModule)},
  {path: 'git', loadChildren: () => import('./git-notes/git.module').then(m => m.GitModule)},

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

  { path: 'react-notes', component: ReactNotesComponent, pathMatch: 'full' },  


  { path: 'read-back', component: ReadBackComponent, pathMatch: 'full' },
  { path: 'memory-cards', component: MemoryCardsComponent, pathMatch: 'full' },  

  { path: 'not-found', component:NotFoundComponent, pathMatch:'full', data:{message:"I AM THE MESSAGE FROM not-found!!!!"}},
  
  { path: '**', redirectTo:'not-found'},

];

const routerOptions :ExtraOptions ={ anchorScrolling:"enabled", scrollPositionRestoration:"enabled", onSameUrlNavigation: "reload"}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions ), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
