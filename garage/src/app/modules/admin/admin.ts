import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Znippets } from "../znippets/znippets";
import { AdminRouting } from "./admin.routing";

@NgModule({
  declarations: [],
  imports: [CommonModule, Znippets, AdminRouting],
})
export class Admin {}
