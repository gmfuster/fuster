import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
/*import { HeaderImageComponent } from './header-image/header-image.component';*/
import { FooterComponent } from './footer/footer.component';
import { LandingDescriptionsComponent } from './landing-descriptions/landing-descriptions.component';

import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { AngularNotesSvcRoutingComponent } from './angular-notes/angular-notes-svc-routing.component';
import { AngularNotesFormsComponent } from './angular-notes/angular-notes-forms.component';
import { DynamicNotesComponent } from './angular-notes/dynamic-notes.component';
import { AngularNotesHttpComponent } from './angular-notes/angular-notes-http.component';
import { AngularNotesAuthComponent } from './angular-notes/angular-notes-auth.component';
import { AngularNotesDynamicComponent } from './angular-notes/angular-notes-dynamic.component';
import { AngularNotesModulesComponent } from './angular-notes/angular-notes-modules.component';

import { ReactNotesComponent } from './react-notes/react-notes.component';

import { SomeChildComponentComponent } from './some-child-component/some-child-component.component';
import { SomeDirectiveDirective } from './some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective2 } from './some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective3 } from './some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective4 } from './some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective5 } from './some-directive-directive/some-directive-directive.directive';
import { appSomeDirectiveDirectiveSTR } from './some-directive-directive/some-directive-directive.directive';
import { LeftLinksComponent } from './shared/left-links.component';

import { SharedModule } from "./shared/shared.module";

import { DropdownDirective } from './shared/dropdown-directive';
import { PlaceholderDirective } from './shared/directives';
import { HeadingSubTopicDirective } from './shared/directives';
import { OtherServices } from './shared/forexamples.service';
import { ForCanActivate } from './shared/forCanActivate.service';
import { ForCanDeActivate } from './shared/forCanActivate.service';
import { SomePopupComponent } from './shared/some-popup.component';

import { NotFoundComponent } from './other-fun/not-found.component';

import { ReadBackComponent } from './other-fun/read-back.component';
/*import { MapItComponent } from './other-fun/map-it.component';*/

import { MyOwnPipePipe } from './angular-notes/angular-notes.component';
import { MyOwnPipeParamsPipe } from './angular-notes/angular-notes.component';

@NgModule({
  declarations: [    
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AngularNotesComponent,
    AngularNotesSvcRoutingComponent,
    AngularNotesFormsComponent,
    AngularNotesHttpComponent,
    AngularNotesAuthComponent,
    AngularNotesDynamicComponent,
    AngularNotesModulesComponent,    
    DynamicNotesComponent,

    LandingDescriptionsComponent,
    FooterComponent,
    SomeChildComponentComponent,
    SomeDirectiveDirective,
    SomeDirectiveDirective2,
    SomeDirectiveDirective3,
    SomeDirectiveDirective4,
    SomeDirectiveDirective5,
    PlaceholderDirective,
    SomePopupComponent,
    appSomeDirectiveDirectiveSTR,
    DropdownDirective,
    ReadBackComponent,    
    NotFoundComponent,        

    MyOwnPipePipe,
    MyOwnPipeParamsPipe,
    LeftLinksComponent,
    HeadingSubTopicDirective   ,
    
    ReactNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,   
    SharedModule ,
    BsDropdownModule.forRoot()
  ],
  providers: [OtherServices, ForCanActivate, ForCanDeActivate],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
