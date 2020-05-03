import { Component, OnInit } from "@angular/core";
import { AuthService } from "@services/auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.html",
  styleUrls: ["./login.scss"],
})
export class Login implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
