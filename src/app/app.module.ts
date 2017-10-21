import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CoreModule } from "./core/core.module";

import { AppComponent } from "./app.component";

import { NavComponent } from "./nav/nav.component";
import { GalleryModule } from "./gallery/gallery.module";
import { GalleryComponent } from "./gallery/gallery.component";

@NgModule({
    imports: [
      BrowserModule,
      GalleryModule
    ],
    declarations: [
      AppComponent,
      GalleryComponent,
      NavComponent
   ],
    bootstrap: [ AppComponent, GalleryComponent, NavComponent],
    entryComponents: [ AppComponent ]
})
export class AppModule {}
