import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CSharpRoutingModule } from './csharp-routing.module';
import { CSharpComponent } from './csharp.component';

import { CSharpArticlesComponent } from '.././csharp-notes/csharp-articles.component';
import { CSharpThreadingComponent } from '.././csharp-notes/csharp-threading.component';
import { CSharpEFComponent } from '.././csharp-notes/csharp-ef.component';
import { CSharpBasicsComponent } from '.././csharp-notes/csharp-basics.component';
import { CSharpInterfacesComponent } from '.././csharp-notes/csharp-interfaces.component';
import { CSharpDelegatesetcComponent } from '.././csharp-notes/csharp-delegatesetc.component';
import { CSharpLinqComponent } from '.././csharp-notes/csharp-linq.component';
import { CSharpMVCComponent } from '.././csharp-notes/csharp-mvc.component';

@NgModule({
  declarations: [
    CSharpComponent,
    CSharpThreadingComponent,
    CSharpEFComponent,
    CSharpBasicsComponent,
    CSharpInterfacesComponent,
    CSharpDelegatesetcComponent,
    CSharpLinqComponent,
    CSharpMVCComponent,
    CSharpArticlesComponent
  ],
  imports: [
    CommonModule,
    CSharpRoutingModule
  ]
})
export class CSharpModule { }
