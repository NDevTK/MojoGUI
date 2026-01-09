// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/xu_camera.mojom
// Module: ash.cfm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cfm = ash.cfm || {};
ash.cfm.mojom = ash.cfm.mojom || {};


// Enum: GetFn
ash.cfm.mojom.GetFn = {
};

// Struct: MenuInfo
ash.cfm.mojom.MenuInfo = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : 0;
  }
};

// Struct: MenuEntries
ash.cfm.mojom.MenuEntries = class {
  constructor(values = {}) {
    this.menu_info = values.menu_info !== undefined ? values.menu_info : [];
  }
};

// Struct: ControlMapping
ash.cfm.mojom.ControlMapping = class {
  constructor(values = {}) {
    this.menu_entries = values.menu_entries !== undefined ? values.menu_entries : 0;
  }
};

// Struct: ControlQuery
ash.cfm.mojom.ControlQuery = class {
  constructor(values = {}) {
    this.selector = values.selector !== undefined ? values.selector : 0;
  }
};

// Interface: XuCamera
ash.cfm.mojom.XuCameraPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cfm.mojom.XuCamera';
  }

  getUnitId(id, guid) {
    // Method: GetUnitId
    return new Promise((resolve) => {
      // Call: GetUnitId(id, guid)
      resolve({});
    });
  }

  mapCtrl(id, mapping_ctrl) {
    // Method: MapCtrl
    return new Promise((resolve) => {
      // Call: MapCtrl(id, mapping_ctrl)
      resolve({});
    });
  }

  getCtrl(id, ctrl, fn) {
    // Method: GetCtrl
    return new Promise((resolve) => {
      // Call: GetCtrl(id, ctrl, fn)
      resolve({});
    });
  }

  setCtrl(id, ctrl, data) {
    // Method: SetCtrl
    return new Promise((resolve) => {
      // Call: SetCtrl(id, ctrl, data)
      resolve({});
    });
  }

};

ash.cfm.mojom.XuCameraRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
