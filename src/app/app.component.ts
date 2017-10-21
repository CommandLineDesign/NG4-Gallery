
import { Component } from "@angular/core";

@Component({
  selector: "memebox-app",
  styles: [ require("./app.component.scss")],
  template: require("./app.component.html"),
})
export class AppComponent {
  message = 'App component';

}