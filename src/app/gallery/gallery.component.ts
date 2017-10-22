import { Component, OnInit } from '@angular/core';

import { ImageService } from '../shared/services/image.service';
import { Image } from '../shared/services/image.model';

@Component({
  selector: 'responsive-gallery',
  styles: [ require("./gallery.component.scss")],
  template: require("./gallery.component.html"),
  providers: [ImageService]
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.getImages()
      .then(images => this.images = images);
  }
}