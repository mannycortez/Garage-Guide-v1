import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  garages: any;

  constructor(private afs: AngularFirestore) {
    this.garages = this.afs.doc("garages/garagedoc");
  }

  readGarages() {
    return this.garages.valueChanges();
  }

  syncGarages(garagez) {
    this.garages.set(garagez);
  }

  addGarage(garage) {
    this.garages.update(garage);
  }

  updateGarage(garage) {}

  delGarage(garage) {
    this.garages.update({
      [garage]: firebase.firestore.FieldValue.delete(),
    });
  }
}
