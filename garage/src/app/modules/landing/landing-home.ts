import { Component } from "@angular/core";

@Component({
  selector: "landing-home",
  template: `
    <div id="page">
      <top-nav></top-nav>
      <div class="topp"></div>
      <garage-list></garage-list>
      <router-outlet></router-outlet>
      <div class="bottom"></div>
      <feeter></feeter>
    </div>
  `,
  styles: [""],
})
export class LandingHome {
  constructor() {}
}
