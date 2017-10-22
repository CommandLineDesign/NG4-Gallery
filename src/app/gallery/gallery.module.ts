import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CoreModule } from "../core/core.module";

@NgModule({
    imports: [CoreModule, CommonModule]
})
export class GalleryModule {}