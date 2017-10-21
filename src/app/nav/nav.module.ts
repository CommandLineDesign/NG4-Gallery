import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { NavComponent } from "./nav.component";

@NgModule({
    imports: [
      NavComponent
    ],
    declarations: [ NavComponent ],
    bootstrap: [ NavComponent ],
    entryComponents: [ NavComponent ]
})
export class NavModule {}