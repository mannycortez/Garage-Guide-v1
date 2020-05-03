import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Dash } from "../znippets/dash/dash";
import { GarageList } from "../znippets/garage-list/garage-list";

const routes: Routes = [
  {
    path: "",
    component: Dash,
    children: [
      {
        path: "",
        redirectTo: "garagelist",
        pathMatch: "full",
      },
      {
        path: "garagelist",
        component: GarageList,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRouting {}
