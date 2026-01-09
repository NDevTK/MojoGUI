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
};

// Enum: DisplayLayoutPosition
crosapi.mojom.DisplayLayoutPosition = {
};

// Enum: DisplayConfigOperation
crosapi.mojom.DisplayConfigOperation = {
};

// Enum: DisplayConfigSource
crosapi.mojom.DisplayConfigSource = {
};

// Enum: DisplayRotationOptions
crosapi.mojom.DisplayRotationOptions = {
  S: 0,
  S: 1,
  S: 2,
  S: 3,
};

// Struct: TouchCalibrationPair
crosapi.mojom.TouchCalibrationPair = class {
  constructor(values = {}) {
  }
};

// Struct: TouchCalibration
crosapi.mojom.TouchCalibration = class {
  constructor(values = {}) {
  }
};

// Struct: DisplayLayout
crosapi.mojom.DisplayLayout = class {
  constructor(values = {}) {
  }
};

// Struct: DisplayLayoutInfo
crosapi.mojom.DisplayLayoutInfo = class {
  constructor(values = {}) {
    this.provided = values.provided !== undefined ? values.provided : null;
    this.provided = values.provided !== undefined ? values.provided : null;
  }
};

// Struct: Edid
crosapi.mojom.Edid = class {
  constructor(values = {}) {
  }
};

// Struct: DisplayRotation
crosapi.mojom.DisplayRotation = class {
  constructor(values = {}) {
  }
};

// Struct: DisplayMode
crosapi.mojom.DisplayMode = class {
  constructor(values = {}) {
  }
};

// Struct: DisplayUnitInfo
crosapi.mojom.DisplayUnitInfo = class {
  constructor(values = {}) {
  }
};

// Struct: DisplayConfigProperties
crosapi.mojom.DisplayConfigProperties = class {
  constructor(values = {}) {
    this.is = values.is !== undefined ? values.is : null;
    this.rotation = values.rotation !== undefined ? values.rotation : null;
    this.when = values.when !== undefined ? values.when : null;
  }
};

// Interface: CrosDisplayConfigController
crosapi.mojom.CrosDisplayConfigControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.CrosDisplayConfigController';
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

};

crosapi.mojom.CrosDisplayConfigObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
