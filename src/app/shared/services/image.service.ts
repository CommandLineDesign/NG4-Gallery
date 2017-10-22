import { Injectable } from '@angular/core';

import { IMAGES } from './mock-images';

@Injectable()
export class ImageService {
  getImages() {
      return Promise.resolve(IMAGES);
  }
}
