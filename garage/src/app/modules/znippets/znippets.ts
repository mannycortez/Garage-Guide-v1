// MODULES
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Mat } from "./material";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { GoogleMapsModule } from "@angular/google-maps";
import { Ng2SearchPipeModule, Ng2SearchPipe } from "ng2-search-filter";
//COMPONENTS
import { GarageList } from "./garage-list/garage-list";
import { Login } from "./login/login";
import { TopNav } from "./top-nav/top-nav";
import { Feeter } from "./feeter/feeter";
import { AddGarage } from "./addGarage/addGarage";
import { Logo } from "./logo/logo";
import { Dash } from "./dash/dash";
import { Maps } from "./maps/maps";
//SERVICES
import { AuthService } from "@services/auth.service";
import { CrudService } from "@services/crud.service";
import { LoginGuard, AdminGuard } from "@services/guard.service";

const modules = [
  CommonModule,
  RouterModule,
  Mat,
  FormsModule,
  ReactiveFormsModule,
  CollapseModule,
  BsDropdownModule,
  GoogleMapsModule,
  Ng2SearchPipeModule,
];

const components = [
  Login,
  TopNav,
  Feeter,
  AddGarage,
  GarageList,
  Logo,
  Dash,
  Maps,
];

const services = [
  AuthService,
  CrudService,
  LoginGuard,
  AdminGuard,
  Ng2SearchPipe,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
  providers: [...services],
})
export class Znippets {}
