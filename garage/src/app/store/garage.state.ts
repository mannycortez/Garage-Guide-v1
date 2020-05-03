import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { tap, take } from "rxjs/operators";

import { patch, removeItem } from "@ngxs/store/operators";
import * as actions from "./garage.actions";
import { CrudService } from "@services/crud.service";

export interface GarageFace {
  garages: any;
  version: string;
  theme: string;
}

let defx = {
  garages: "",
  version: "",
  theme: "light-theme",
};

@State<GarageFace>({
  name: "garagestate",
  defaults: defx,
})
@Injectable()
export class GarageState {
  constructor(private crud: CrudService) {}

  /* ********************
    S E L E C T O R S
  ********************* */
  @Selector()
  static getGarages(state: GarageFace) {
    return state.garages;
  }

  @Selector()
  static getTheme(state: GarageFace) {
    return state.theme;
  }

  /* **************************
         A C T I O N S
  *************************** */

  @Action(actions.GetGarages)
  GetGarages(ctx: StateContext<GarageFace>, action: actions.GetGarages) {
    return this.crud.readGarages().pipe(
      take(1),
      tap((res) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          garages: res,
        });
      })
    );
  }

  @Action(actions.SyncGarages)
  SyncGarages(ctx: StateContext<GarageFace>, action: actions.SyncGarages) {
    const state = ctx.getState();
    this.crud.syncGarages(state.garages);
  }

  @Action(actions.AddGarage)
  AddGarage(ctx: StateContext<GarageFace>, action: actions.AddGarage) {
    const state = ctx.getState();
    ctx.setState(
      patch({
        garages: patch(action.garage),
      })
    );
  }

  @Action(actions.DelGarage)
  DelGarage(ctx: StateContext<GarageFace>, action: actions.DelGarage) {
    const state = ctx.getState();
    delete state.garages[action.garage];
    ctx.setState({
      ...state,
      garages: { ...state.garages },
    });
  }

  @Action(actions.ChangeTheme)
  ChangeTheme(ctx: StateContext<GarageFace>, action: actions.ChangeTheme) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      theme: action.theme,
    });
  }

  @Action(actions.Versionize)
  Versionize(ctx: StateContext<GarageFace>, action: actions.Versionize) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      version: action.version,
    });
  }

  @Action(actions.ClearStore)
  ClearStore(ctx: StateContext<GarageFace>, action: actions.ClearStore) {
    ctx.setState({
      ...defx,
    });
  }
}
