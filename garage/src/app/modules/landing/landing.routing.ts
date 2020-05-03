import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingHome } from "./landing-home";
import { LoginGuard } from "@services/guard.service";
import { Login } from "../znippets/login/login";

const routes: Routes = [
  {
    path: "",
    component: LandingHome,
  },
  {
    path: "login",
    component: Login,
    canActivate: [LoginGuard],
    data: {
      title: "Login | Garage Guide",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRouting {}
