import {Component, Input} from "@angular/core";


@Component({
  selector: "memebox-slideshow",
  styles: [ require("./carousel.component.scss")],
  template: require("./carousel.component.html"),
})

export class CarouselComponent {
  items: Array<any> = []

  constructor() {
    this.items = [
      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' },
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb4.png' },
      { name: 'assets/images/thumb5.png' },
      { name: 'assets/images/thumb6.png' },
      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' },
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb4.png' },
      { name: 'assets/images/thumb5.png' },
      { name: 'assets/images/thumb6.png' },
    ]
  }
}