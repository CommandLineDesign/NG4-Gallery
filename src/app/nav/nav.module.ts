import { NgModule } from '@angular/core';

import { NavComponent } from "./nav.component";

@NgModule({
    imports: [NavComponent],
    bootstrap: [NavComponent],
    entryComponents: [NavComponent]
})
export class NavModule {}