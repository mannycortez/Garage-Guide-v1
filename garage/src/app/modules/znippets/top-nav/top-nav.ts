import { Component, OnInit } from "@angular/core";

@Component({
  selector: "top-nav",
  templateUrl: "./top-nav.html",
  styleUrls: ["./top-nav.scss"],
})
export class TopNav implements OnInit {
  isCollapsed = true;
  ngOnInit() {}
}
