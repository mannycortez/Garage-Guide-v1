import { Component, OnInit } from "@angular/core";
import { AuthService } from "@services/auth.service";

@Component({
  selector: "dash",
  templateUrl: "./dash.html",
  styleUrls: ["./dash.scss"],
})
export class Dash implements OnInit {
  isExpanded = true;
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
