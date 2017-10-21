import { NgModule, Input } from "@angular/core";
import { SlideshowModule } from 'ng-simple-slideshow';
import { CarouselComponent } from './carousel.component';
import { GalleryComponent } from '../gallery/gallery.component';


@NgModule({
    bootstrap: [CarouselComponent],
    declarations: [CarouselComponent],
    imports: [SlideshowModule, CarouselComponent]
})

export class CarouselModule {

  slideOptions = {};
}
