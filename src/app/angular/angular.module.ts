import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';

import { AngularNotesAuthComponent } from '../angular-notes/angular-notes-auth.component';
import { AngularNotesDynamicComponent } from '../angular-notes/angular-notes-dynamic.component';
import { AngularNotesFormsComponent } from '../angular-notes/angular-notes-forms.component';
import { AngularNotesHttpComponent } from '../angular-notes/angular-notes-http.component';
import { AngularNotesModulesComponent } from '../angular-notes/angular-notes-modules.component';
import { AngularNotesSomeMoreComponent } from '../angular-notes/angular-notes-somemore.component';
import { AngularNotesSvcRoutingComponent } from '../angular-notes/angular-notes-svc-routing.component';
import { AngularNotesComponent } from '../angular-notes/angular-notes.component';
import { DynamicNotesComponent } from '../angular-notes/dynamic-notes.component';

import { SomePopupComponent } from '../shared/some-popup.component';
import { MyOwnPipePipe } from '../angular-notes/angular-notes.component';
import { MyOwnPipeParamsPipe } from '../angular-notes/angular-notes.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { SomeChildComponentComponent } from '../some-child-component/some-child-component.component';
import { SomeDirectiveDirective } from '../some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective2 } from '../some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective3 } from '../some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective4 } from '../some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective5 } from '../some-directive-directive/some-directive-directive.directive';
import { appSomeDirectiveDirectiveSTR } from '../some-directive-directive/some-directive-directive.directive';

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    AngularComponent,
    AngularNotesAuthComponent,
    AngularNotesDynamicComponent,
    AngularNotesFormsComponent,
    AngularNotesHttpComponent,
    AngularNotesModulesComponent,
    AngularNotesSomeMoreComponent,
    AngularNotesSvcRoutingComponent,
    AngularNotesComponent,
    DynamicNotesComponent,
    MyOwnPipePipe,
    MyOwnPipeParamsPipe,
    SomePopupComponent,
    SomeChildComponentComponent,
    SomeDirectiveDirective,
    SomeDirectiveDirective2,
    SomeDirectiveDirective3,
    SomeDirectiveDirective4,
    SomeDirectiveDirective5,
    appSomeDirectiveDirectiveSTR

  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    SharedModule   ,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AngularModule { }
