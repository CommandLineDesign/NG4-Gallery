import {Component, Input} from "@angular/core";

@Component({
    selector: "page-title",
    styles: [ require("./title.component.scss")],
    template: require("./title.component.html")
})

export class TitleComponent {
  @Input() brand = '';
  title = 'Pocket Bunny';
}