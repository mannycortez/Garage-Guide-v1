import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AdminGuard } from "./services/guard.service";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./modules/landing/landing#Landing",
    data: {},
  },
  {
    path: "admin",
    loadChildren: "./modules/admin/admin#Admin",
    canActivate: [AdminGuard],
    data: {
      title: "Admin | Garage Guide",
    },
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class GarageRouting {}
