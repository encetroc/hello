import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  timeZones = ["Europe/Andorra", "Asia/Dubai", "Asia/Kabul"];
  interval;
  times = ["", "", ""];

  getCurrentDate() {
    this.interval = setInterval(() => {
      const date = new Date();
      this.times = this.timeZones.map((timezone) => {
        return date.toLocaleString("en-US", { timeZone: `${timezone}` });
      });
    }, 1000);
  }

  ngOnInit() {
    this.getCurrentDate();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
