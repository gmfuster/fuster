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
import { HeaderImageComponent } from './header-image/header-image.component';
import { FooterComponent } from './footer/footer.component';
import { LandingDescriptionsComponent } from './landing-descriptions/landing-descriptions.component';

@NgModule({
  declarations: [    
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AngularNotesComponent,
    HeaderImageComponent,
    LandingDescriptionsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
