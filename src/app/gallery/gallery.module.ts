import { NgModule } from "@angular/core";

import { CoreModule } from "../core/core.module";
import { GalleryComponent } from './gallery.component';

@NgModule({
    imports: [
      CoreModule
    ],
    declarations: [ GalleryComponent ],
    bootstrap: [ GalleryComponent ]
})
export class GalleryModule {}