import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Znippets } from "../znippets/znippets";
import { LandingRouting } from "./landing.routing";

import { LandingHome } from "./landing-home";

const modules = [CommonModule, LandingRouting, Znippets];

const components = [LandingHome];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class Landing {}
