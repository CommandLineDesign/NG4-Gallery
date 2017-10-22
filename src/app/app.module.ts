import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { NgBoxModule } from 'ngbox/ngbox.module';
import { NgBoxService } from 'ngbox/ngbox.service';
import { CommonModule } from '@angular/common';

import { CoreModule } from "./core/core.module";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { TitleComponent } from "./title/title.component";
import { GalleryComponent } from "./gallery/gallery.component";

@NgModule({
    imports: [
      BrowserModule,
      NgBoxModule,
      BrowserModule,
      CommonModule
    ],
    declarations: [
      AppComponent,
      NavComponent,
      TitleComponent,
      GalleryComponent
    ],
    providers: [ NgBoxService ],
    bootstrap: [ AppComponent],
    entryComponents: [ AppComponent ]
})
export class AppModule {}
