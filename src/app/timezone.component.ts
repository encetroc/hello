import { Component, Input } from "@angular/core";

@Component({
  selector: "app-timezone",
  template: "<h1>time in {{timezone}} is {{time}}</h1>",
  styles: ["h1 { font-weight: normal; }"]
})
export class ComponentTimezone {
  @Input() time = "";
  @Input() timezone = "";
}
