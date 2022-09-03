import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HeaderImageComponent } from './header-image/header-image.component';
import { FooterComponent } from './footer/footer.component';
import { LandingDescriptionsComponent } from './landing-descriptions/landing-descriptions.component';

import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { AngularNotesSvcRoutingComponent } from './angular-notes/angular-notes-svc-routing.component';
import { AngularNotesFormsComponent } from './angular-notes/angular-notes-forms.component';
import { DynamicNotesComponent } from './angular-notes/dynamic-notes.component';

import { ProbabilityNotesComponent } from './math-notes/probability-notes.component';

import { JavaScriptNotesComponent } from './javascript-notes/javascript-notes.component';
import { JavaScriptNotesAsyncComponent } from './javascript-notes/javascript-notes-async.component';
import { JavaScriptNotesObjectsComponent } from './javascript-notes/javascript-notes-objects.component';

import { CSharpThreadingComponent } from './csharp-notes/csharp-threading.component';

import { SomeChildComponentComponent } from './some-child-component/some-child-component.component';
import { SomeDirectiveDirective } from './some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective2 } from './some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective3 } from './some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective4 } from './some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective5 } from './some-directive-directive/some-directive-directive.directive';
import { appSomeDirectiveDirectiveSTR } from './some-directive-directive/some-directive-directive.directive';

import { DropdownDirective } from './shared/dropdown-directive';
import { OtherServices } from './shared/forexamples.service';
import { ForCanActivate } from './shared/forCanActivate.service';
import { ForCanDeActivate } from './shared/forCanActivate.service';

import { NotFoundComponent } from './other-fun/not-found.component';

import { ReadBackComponent } from './other-fun/read-back.component';
import { MapItComponent } from './other-fun/map-it.component';

import { DoublesComponent } from './math-kids/doubles.component';
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
    JavaScriptNotesComponent,
    DynamicNotesComponent,
    ProbabilityNotesComponent,
    HeaderImageComponent,
    LandingDescriptionsComponent,
    FooterComponent,
    SomeChildComponentComponent,
    SomeDirectiveDirective,
    SomeDirectiveDirective2,
    SomeDirectiveDirective3,
    SomeDirectiveDirective4,
    SomeDirectiveDirective5,
    appSomeDirectiveDirectiveSTR,
    DropdownDirective,
    ReadBackComponent,
    MapItComponent,
    NotFoundComponent,
    CSharpThreadingComponent,
    JavaScriptNotesAsyncComponent,
    JavaScriptNotesObjectsComponent,
    DoublesComponent,
    MyOwnPipePipe,
    MyOwnPipeParamsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [OtherServices, ForCanActivate, ForCanDeActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
