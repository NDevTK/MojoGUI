// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_event_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: State
crosapi.mojom.State = {
  should: 0,
};

// Enum: DeviceType
crosapi.mojom.DeviceType = {
  should: 0,
};

// Enum: State
crosapi.mojom.State = {
  should: 0,
};

// Enum: State
crosapi.mojom.State = {
  should: 0,
};

// Enum: State
crosapi.mojom.State = {
  should: 0,
};

// Enum: State
crosapi.mojom.State = {
  should: 0,
};

// Enum: State
crosapi.mojom.State = {
  should: 0,
  i: 1,
};

// Enum: State
crosapi.mojom.State = {
  should: 0,
};

// Enum: TelemetryInputTouchButton
crosapi.mojom.TelemetryInputTouchButton = {
  should: 0,
};

// Enum: State
crosapi.mojom.State = {
  should: 0,
};

// Enum: TelemetryEventCategoryEnum
crosapi.mojom.TelemetryEventCategoryEnum = {
  should: 0,
  kAudioJack: 1,
};

// Struct: TelemetryAudioJackEventInfo
crosapi.mojom.TelemetryAudioJackEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: TelemetryLidEventInfo
crosapi.mojom.TelemetryLidEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: TelemetryUsbEventInfo
crosapi.mojom.TelemetryUsbEventInfo = class {
  constructor(values = {}) {
    this.vendor@0 = values.vendor@0 !== undefined ? values.vendor@0 : "";
    this.{ = values.{ !== undefined ? values.{ : 0;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: TelemetryExternalDisplayEventInfo
crosapi.mojom.TelemetryExternalDisplayEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: TelemetrySdCardEventInfo
crosapi.mojom.TelemetrySdCardEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: TelemetryPowerEventInfo
crosapi.mojom.TelemetryPowerEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
    this.3 = values.3 !== undefined ? values.3 : null;
    this.4 = values.4 !== undefined ? values.4 : null;
  }
};

// Struct: TelemetryStylusGarageEventInfo
crosapi.mojom.TelemetryStylusGarageEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
  }
};

// Struct: TelemetryTouchpadButtonEventInfo
crosapi.mojom.TelemetryTouchpadButtonEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: TelemetryTouchPointInfo
crosapi.mojom.TelemetryTouchPointInfo = class {
  constructor(values = {}) {
    this.touch_minor@5 = values.touch_minor@5 !== undefined ? values.touch_minor@5 : 0;
  }
};

// Struct: TelemetryTouchpadTouchEventInfo
crosapi.mojom.TelemetryTouchpadTouchEventInfo = class {
  constructor(values = {}) {
    this.touch_points@0 = values.touch_points@0 !== undefined ? values.touch_points@0 : 0;
  }
};

// Struct: TelemetryTouchpadConnectedEventInfo
crosapi.mojom.TelemetryTouchpadConnectedEventInfo = class {
  constructor(values = {}) {
    this.max_y@1 = values.max_y@1 !== undefined ? values.max_y@1 : 0;
    this.buttons@3 = values.buttons@3 !== undefined ? values.buttons@3 : 0;
  }
};

// Struct: TelemetryTouchscreenTouchEventInfo
crosapi.mojom.TelemetryTouchscreenTouchEventInfo = class {
  constructor(values = {}) {
    this.touch_points@0 = values.touch_points@0 !== undefined ? values.touch_points@0 : 0;
  }
};

// Struct: TelemetryTouchscreenConnectedEventInfo
crosapi.mojom.TelemetryTouchscreenConnectedEventInfo = class {
  constructor(values = {}) {
    this.max_y@1 = values.max_y@1 !== undefined ? values.max_y@1 : 0;
    this.max_pressure@2 = values.max_pressure@2 !== undefined ? values.max_pressure@2 : 0;
  }
};

// Struct: TelemetryStylusTouchPointInfo
crosapi.mojom.TelemetryStylusTouchPointInfo = class {
  constructor(values = {}) {
    this.pressure@2 = values.pressure@2 !== undefined ? values.pressure@2 : 0;
  }
};

// Struct: TelemetryStylusTouchEventInfo
crosapi.mojom.TelemetryStylusTouchEventInfo = class {
  constructor(values = {}) {
    this.touch_point@0 = values.touch_point@0 !== undefined ? values.touch_point@0 : 0;
  }
};

// Struct: TelemetryStylusConnectedEventInfo
crosapi.mojom.TelemetryStylusConnectedEventInfo = class {
  constructor(values = {}) {
    this.max_y@1 = values.max_y@1 !== undefined ? values.max_y@1 : 0;
    this.max_pressure@2 = values.max_pressure@2 !== undefined ? values.max_pressure@2 : 0;
  }
};

// Interface: TelemetryEventObserver
crosapi.mojom.TelemetryEventObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.TelemetryEventObserver';
  }

};

crosapi.mojom.TelemetryEventObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TelemetryEventService
crosapi.mojom.TelemetryEventServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.TelemetryEventService';
  }

};

crosapi.mojom.TelemetryEventServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
