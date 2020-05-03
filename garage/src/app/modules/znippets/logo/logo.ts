import { Component, Input } from "@angular/core";

@Component({
  selector: "logo",
  templateUrl: "./logo.html",
  styleUrls: ["./logo.scss"],
})
export class Logo {
  @Input()
  size = 100;

  @Input()
  inverse = false;

  constructor() {}
}
