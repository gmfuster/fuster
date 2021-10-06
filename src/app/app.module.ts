import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { ProbabilityNotesComponent } from './math-notes/probability-notes.component';
import { HeaderImageComponent } from './header-image/header-image.component';
import { FooterComponent } from './footer/footer.component';
import { LandingDescriptionsComponent } from './landing-descriptions/landing-descriptions.component';
import { SomeChildComponentComponent } from './some-child-component/some-child-component.component';
import { SomeDirectiveDirective } from './some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective2 } from './some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective3 } from './some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective4 } from './some-directive-directive/some-directive-directive.directive';
import { SomeDirectiveDirective5 } from './some-directive-directive/some-directive-directive.directive';
import { appSomeDirectiveDirectiveSTR } from './some-directive-directive/some-directive-directive.directive';
import { ReadBackComponent } from './other-fun/read-back.component';
import { DropdownDirective } from './shared/dropdown-directive';
import { OtherServices } from './shared/forexamples.service';

@NgModule({
  declarations: [    
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AngularNotesComponent,
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
    ReadBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [OtherServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
