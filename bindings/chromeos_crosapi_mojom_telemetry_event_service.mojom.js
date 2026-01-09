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
  }
};

// Struct: TelemetryLidEventInfo
crosapi.mojom.TelemetryLidEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryUsbEventInfo
crosapi.mojom.TelemetryUsbEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryExternalDisplayEventInfo
crosapi.mojom.TelemetryExternalDisplayEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetrySdCardEventInfo
crosapi.mojom.TelemetrySdCardEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryPowerEventInfo
crosapi.mojom.TelemetryPowerEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryStylusGarageEventInfo
crosapi.mojom.TelemetryStylusGarageEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryTouchpadButtonEventInfo
crosapi.mojom.TelemetryTouchpadButtonEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryTouchPointInfo
crosapi.mojom.TelemetryTouchPointInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryTouchpadTouchEventInfo
crosapi.mojom.TelemetryTouchpadTouchEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryTouchpadConnectedEventInfo
crosapi.mojom.TelemetryTouchpadConnectedEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryTouchscreenTouchEventInfo
crosapi.mojom.TelemetryTouchscreenTouchEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryTouchscreenConnectedEventInfo
crosapi.mojom.TelemetryTouchscreenConnectedEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryStylusTouchPointInfo
crosapi.mojom.TelemetryStylusTouchPointInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryStylusTouchEventInfo
crosapi.mojom.TelemetryStylusTouchEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TelemetryStylusConnectedEventInfo
crosapi.mojom.TelemetryStylusConnectedEventInfo = class {
  constructor(values = {}) {
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
