import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import * as actions from "@store/garage.actions";

@Component({
  selector: "garage",
  templateUrl: "./garage.html",
  styles: ["./"],
})
export class Garage implements OnInit {
  constructor(private store: Store) {}

  async ngOnInit() {
    let version = "1.0.0.3";
    let gversion = await this.store.selectSnapshot(
      (state) => state.garagestate.version
    );
    let garages = await typeof this.store.selectSnapshot(
      (state) => state.garagestate.garages
    );
    if (gversion !== version || garages !== "object") {
      this.store.dispatch(new actions.GetGarages());
      this.store.dispatch(new actions.Versionize(version));
    }
  }
}
