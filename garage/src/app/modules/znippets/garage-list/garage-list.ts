import {
  Component,
  TemplateRef,
  ViewChild,
  OnInit,
  ElementRef,
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Router } from "@angular/router";
import { Select, Store } from "@ngxs/store";
import { GarageState } from "@store/garage.state";
import * as actions from "@store/garage.actions";
import { Maps } from "../maps/maps";

@Component({
  selector: "garage-list",
  templateUrl: "./garage-list.html",
  styleUrls: ["./garage-list.scss"],
})
export class GarageList implements OnInit {
  @ViewChild(Maps) maps: Maps;
  @ViewChild("garagesRef") garagesRef: ElementRef;

  @Select(GarageState.getGarages) garages;
  addModal: BsModalRef;
  admin = false;
  curr;
  currCard = "";
  term;

  constructor(
    private modal: BsModalService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    this.admin = this.router.url.includes("admin");
  }

  openModal(template: TemplateRef<any>) {
    this.addModal = this.modal.show(template, {
      animated: false,
    });
  }

  selGarage(garage) {
    this.maps.openInfo(garage.name);
    this.currCard = garage.name;
  }

  async mapEmit(ev) {
    this.currCard = ev;
    let id =
      (await "#") +
      ev
        .toLowerCase()
        .replace(/[^A-Za-z]/g, " ")
        .replace(/ +/g, "_");
    this.garagesRef.nativeElement
      .querySelector(id)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  }

  delGarage(garage) {
    this.store.dispatch(new actions.DelGarage(garage));
  }

  refresh() {
    this.store.dispatch(new actions.GetGarages());
  }

  sync() {
    this.store.dispatch(new actions.SyncGarages());
  }
}
