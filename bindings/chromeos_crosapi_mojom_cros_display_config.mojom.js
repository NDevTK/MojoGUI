// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/cros_display_config.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: DisplayConfigResult
crosapi.mojom.DisplayConfigResult = {
};

// Enum: DisplayLayoutMode
crosapi.mojom.DisplayLayoutMode = {
  a: 0,
  the: 1,
  or: 2,
};

// Enum: DisplayLayoutPosition
crosapi.mojom.DisplayLayoutPosition = {
  kRight: 0,
  kBottom: 1,
  kLeft: 2,
};

// Enum: DisplayConfigOperation
crosapi.mojom.DisplayConfigOperation = {
};

// Enum: DisplayConfigSource
crosapi.mojom.DisplayConfigSource = {
};

// Enum: DisplayRotationOptions
crosapi.mojom.DisplayRotationOptions = {
  enables: 0,
  it: 1,
  Sets: 2,
  it: 3,
  Sets: 4,
  it: 5,
  Sets: 6,
  it: 7,
  Sets: 8,
  it: 9,
};

// Struct: TouchCalibrationPair
crosapi.mojom.TouchCalibrationPair = class {
  constructor(values = {}) {
    this.touch_point@1 = values.touch_point@1 !== undefined ? values.touch_point@1 : 0;
  }
};

// Struct: TouchCalibration
crosapi.mojom.TouchCalibration = class {
  constructor(values = {}) {
    this.bounds@1 = values.bounds@1 !== undefined ? values.bounds@1 : [];
  }
};

// Struct: DisplayLayout
crosapi.mojom.DisplayLayout = class {
  constructor(values = {}) {
    this.offset@3 = values.offset@3 !== undefined ? values.offset@3 : 0;
  }
};

// Struct: DisplayLayoutInfo
crosapi.mojom.DisplayLayoutInfo = class {
  constructor(values = {}) {
    this.layout_mode@0 = values.layout_mode@0 !== undefined ? values.layout_mode@0 : null;
    this.provided = values.provided !== undefined ? values.provided : null;
    this.mirror_source_id@1 = values.mirror_source_id@1 !== undefined ? values.mirror_source_id@1 : "";
    this.provided = values.provided !== undefined ? values.provided : null;
    this.layouts@3 = values.layouts@3 !== undefined ? values.layouts@3 : "";
  }
};

// Struct: Edid
crosapi.mojom.Edid = class {
  constructor(values = {}) {
    this.manufacturer_id@0 = values.manufacturer_id@0 !== undefined ? values.manufacturer_id@0 : "";
    this.year_of_manufacture@2 = values.year_of_manufacture@2 !== undefined ? values.year_of_manufacture@2 : 0;
  }
};

// Struct: DisplayRotation
crosapi.mojom.DisplayRotation = class {
  constructor(values = {}) {
    this.rotation@0 = values.rotation@0 !== undefined ? values.rotation@0 : null;
  }
};

// Struct: DisplayMode
crosapi.mojom.DisplayMode = class {
  constructor(values = {}) {
    this.is_interlaced@5 = values.is_interlaced@5 !== undefined ? values.is_interlaced@5 : 0;
  }
};

// Struct: DisplayUnitInfo
crosapi.mojom.DisplayUnitInfo = class {
  constructor(values = {}) {
    this.overscan@13 = values.overscan@13 !== undefined ? values.overscan@13 : 0;
    this.available_display_modes@16 = values.available_display_modes@16 !== undefined ? values.available_display_modes@16 : 0;
    this.is_detected@19 = values.is_detected@19 !== undefined ? values.is_detected@19 : 0;
  }
};

// Struct: DisplayConfigProperties
crosapi.mojom.DisplayConfigProperties = class {
  constructor(values = {}) {
    this.set_primary@0 = values.set_primary@0 !== undefined ? values.set_primary@0 : false;
    this.overscan@1 = values.overscan@1 !== undefined ? values.overscan@1 : null;
    this.is = values.is !== undefined ? values.is : null;
    this.rotation = values.rotation !== undefined ? values.rotation : null;
    this.rotation@2 = values.rotation@2 !== undefined ? values.rotation@2 : null;
    this.when = values.when !== undefined ? values.when : null;
    this.bounds_origin@3 = values.bounds_origin@3 !== undefined ? values.bounds_origin@3 : 0;
    this.display_mode@5 = values.display_mode@5 !== undefined ? values.display_mode@5 : 0;
  }
};

// Interface: CrosDisplayConfigController
crosapi.mojom.CrosDisplayConfigControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.CrosDisplayConfigController';
  }

  0(observer) {
    // Method: 0
    // Call: 0(observer)
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  2(info) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(info)
      resolve({});
    });
  }

  3(single_unified) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(single_unified)
      resolve({});
    });
  }

  4(id, properties, source) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(id, properties, source)
      resolve({});
    });
  }

  5(enabled) {
    // Method: 5
    // Call: 5(enabled)
  }

  6(display_id, op, delta) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(display_id, op, delta)
      resolve({});
    });
  }

  7(display_id, op, calibration) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(display_id, op, calibration)
      resolve({});
    });
  }

  8(id) {
    // Method: 8
    // Call: 8(id)
  }

  dragDisplayDelta() {
    // Method: DragDisplayDelta
    // Call: DragDisplayDelta()
  }

  9(display_id, delta_x, delta_y) {
    // Method: 9
    // Call: 9(display_id, delta_x, delta_y)
  }

};

crosapi.mojom.CrosDisplayConfigControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosDisplayConfigObserver
crosapi.mojom.CrosDisplayConfigObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.CrosDisplayConfigObserver';
  }

  0() {
    // Method: 0
    // Call: 0()
  }

};

crosapi.mojom.CrosDisplayConfigObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
