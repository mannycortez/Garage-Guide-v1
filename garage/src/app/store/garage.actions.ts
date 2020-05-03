export class GetGarages {
  static readonly type = "[Garages] GetGarages";
}

export class SyncGarages {
  static readonly type = "[Garages] SyncGarages";
}

export class AddGarage {
  static readonly type = "[Garage] AddGarage";
  constructor(public garage: any) {}
}

export class DelGarage {
  static readonly type = "[Garage] DelGarage";
  constructor(public garage: any) {}
}

export class ChangeTheme {
  static readonly type = "[Theme] ChangeTheme";
  constructor(public theme: string) {}
}

export class Versionize {
  static readonly type = "[Version] Versionize";
  constructor(public version: any) {}
}

export class ClearStore {
  static readonly type = "[Store] ClearStore";
}
