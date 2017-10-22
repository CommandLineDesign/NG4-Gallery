import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CoreModule } from "./core/core.module";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { TitleComponent } from "./title/title.component";
import { GalleryComponent } from "./gallery/gallery.component";

@NgModule({
    imports: [
      BrowserModule,
    ],
    declarations: [
      AppComponent,
      NavComponent,
      TitleComponent,
      GalleryComponent
   ],
    bootstrap: [ AppComponent],
    entryComponents: [ AppComponent ]
})
export class AppModule {}
