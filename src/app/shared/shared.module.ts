import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//import { SharedRoutingModule } from "./shared-routing.module";
import { TopLinksComponent } from "./top-links.component";
import {HeadingSubTopicDir} from "./directives";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [TopLinksComponent, HeadingSubTopicDir],  
    exports: [TopLinksComponent, HeadingSubTopicDir, CommonModule, FormsModule, RouterModule]
})
export class SharedModule {}