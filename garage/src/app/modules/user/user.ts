import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Znippets } from "../znippets/znippets";
import { UserRouting } from "./user.routing";

@NgModule({
  declarations: [],
  imports: [CommonModule, Znippets, UserRouting],
})
export class User {}
