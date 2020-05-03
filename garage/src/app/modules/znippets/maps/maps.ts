import {
  Component,
  Input,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { MapInfoWindow, MapMarker, GoogleMap } from "@angular/google-maps";
import { Select, Store } from "@ngxs/store";
import { GarageState } from "@store/garage.state";
import { darkStyle, goldStyle } from "./mapStyles";
import * as actions from "@store/garage.actions";

@Component({
  selector: "maps",
  templateUrl: "./maps.html",
  styleUrls: ["./maps.scss"],
})
export class Maps implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @Output() selecter = new EventEmitter<any>();
  @Select(GarageState.getGarages) garages;

  markers = {};
  markersdef = {};
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: "roadmap",
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    maxZoom: 18,
    minZoom: 8,
    clickableIcons: false,
    controlSize: 20,
    streetViewControl: false,
    mapTypeControl: false,
    // styles: goldStyle,
  };

  constructor(private store: Store) {}

  ngOnInit() {
    this.center = {
      lat: 37.7762589,
      lng: -122.4457261,
    };
    this.getL();
  }

  openInfo(marker) {
    this.senter(marker);
    this.selecter.emit(marker);
  }

  getL() {
    this.garages.subscribe((x) => {
      let re = /\d+.\d+..\d+.\d+/;
      for (let i in x) {
        this.addMarker(x[i].name, x[i].image, x[i].gmapUrl.match(re)[0]);
      }
      this.markersdef = { ...this.markers };
    });
  }

  addMarker(name, image, loc) {
    let loco = loc.split(",").map(Number);
    this.markers[name] = {
      position: {
        lat: loco[0],
        lng: loco[1],
      },
      title: name,
      info: name,
      infoPic: image,
      options: {
        icon: "assets/marker.png",
      },
    };
  }

  resetV() {
    this.center = {
      lat: 37.7762589,
      lng: -122.4457261,
    };
    this.zoom = 12;
    // this.store.dispatch(new actions.ClearStore());
  }

  async senter(marker) {
    this.markers = await JSON.parse(JSON.stringify(this.markersdef));
    let mak = await this.markers[marker];
    mak.options.icon = "assets/amarker.png";
    await delete this.markers[marker];
    this.zoom = 16;
    let position = {
      lat: mak.position.lat,
      lng: mak.position.lng,
    };

    this.markers[marker] = await { ...mak };
    this.map.panTo(position);
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }
}
