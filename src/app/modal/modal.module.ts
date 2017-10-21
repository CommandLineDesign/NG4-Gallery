import { NgModule } from '@angular/core';

import { SuiModule } from 'ng2-semantic-ui';
import { ModalComponent } from "./modal.component";

@NgModule({
    bootstrap: [ModalComponent],
    declarations: [ModalComponent],
    imports: [SuiModule],
    entryComponents: [ModalComponent]
})

export class ModalModule {};