import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
// NGXS STORE
import { NgxsModule } from "@ngxs/store";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsSelectSnapshotModule } from "@ngxs-labs/select-snapshot";
import { GarageState } from "./store/garage.state";
//MODULES
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { Znippets } from "./modules/znippets/znippets";
import { GarageRouting } from "./garage.routing";
import { ModalModule } from "ngx-bootstrap/modal";
//ENV
import { environment } from "../environments/environment";
//COMPONENTS
import { Garage } from "./garage";

@NgModule({
  declarations: [Garage],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    Znippets,
    ModalModule.forRoot(),
    GarageRouting,
    NgxsModule.forRoot([GarageState]),
    NgxsStoragePluginModule.forRoot({
      key: ["garagestate"],
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsSelectSnapshotModule.forRoot(),
  ],
  providers: [],
  bootstrap: [Garage],
})
export class GarageModule {}
