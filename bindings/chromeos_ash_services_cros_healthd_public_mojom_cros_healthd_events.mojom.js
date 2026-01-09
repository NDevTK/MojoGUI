// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_events.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};


// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: DeviceType
ash.cros_healthd.mojom.DeviceType = {
  should: 0,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: InputTouchButton
ash.cros_healthd.mojom.InputTouchButton = {
  should: 0,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  should: 0,
};

// Enum: CrashType
ash.cros_healthd.mojom.CrashType = {
  kKernel: 0,
  kEmbeddedController: 1,
};

// Enum: EventCategoryEnum
ash.cros_healthd.mojom.EventCategoryEnum = {
  should: 0,
  kUsb: 1,
  kThunderbolt: 2,
  kLid: 3,
  kBluetooth: 4,
  kPower: 5,
  kAudio: 6,
};

// Struct: UsbEventInfo
ash.cros_healthd.mojom.UsbEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ThunderboltEventInfo
ash.cros_healthd.mojom.ThunderboltEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: LidEventInfo
ash.cros_healthd.mojom.LidEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: BluetoothEventInfo
ash.cros_healthd.mojom.BluetoothEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: PowerEventInfo
ash.cros_healthd.mojom.PowerEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: AudioEventInfo
ash.cros_healthd.mojom.AudioEventInfo = class {
  constructor(values = {}) {
  }
};

// Struct: AudioJackEventInfo
ash.cros_healthd.mojom.AudioJackEventInfo = class {
  constructor(values = {}) {
    this.kUnmappedEnumField = values.kUnmappedEnumField !== undefined ? values.kUnmappedEnumField : null;
  }
};

// Struct: SdCardEventInfo
ash.cros_healthd.mojom.SdCardEventInfo = class {
  constructor(values = {}) {
    this.kUnmappedEnumField = values.kUnmappedEnumField !== undefined ? values.kUnmappedEnumField : null;
  }
};

// Struct: TouchpadButtonEvent
ash.cros_healthd.mojom.TouchpadButtonEvent = class {
  constructor(values = {}) {
  }
};

// Struct: TouchPointInfo
ash.cros_healthd.mojom.TouchPointInfo = class {
  constructor(values = {}) {
  }
};

// Struct: TouchpadTouchEvent
ash.cros_healthd.mojom.TouchpadTouchEvent = class {
  constructor(values = {}) {
  }
};

// Struct: TouchpadConnectedEvent
ash.cros_healthd.mojom.TouchpadConnectedEvent = class {
  constructor(values = {}) {
  }
};

// Struct: ExternalDisplayEventInfo
ash.cros_healthd.mojom.ExternalDisplayEventInfo = class {
  constructor(values = {}) {
    this.kUnmappedEnumField = values.kUnmappedEnumField !== undefined ? values.kUnmappedEnumField : null;
  }
};

// Struct: TouchscreenTouchEvent
ash.cros_healthd.mojom.TouchscreenTouchEvent = class {
  constructor(values = {}) {
  }
};

// Struct: TouchscreenConnectedEvent
ash.cros_healthd.mojom.TouchscreenConnectedEvent = class {
  constructor(values = {}) {
  }
};

// Struct: StylusGarageEventInfo
ash.cros_healthd.mojom.StylusGarageEventInfo = class {
  constructor(values = {}) {
    this.kUnmappedEnumField = values.kUnmappedEnumField !== undefined ? values.kUnmappedEnumField : null;
  }
};

// Struct: StylusTouchPointInfo
ash.cros_healthd.mojom.StylusTouchPointInfo = class {
  constructor(values = {}) {
  }
};

// Struct: StylusTouchEvent
ash.cros_healthd.mojom.StylusTouchEvent = class {
  constructor(values = {}) {
  }
};

// Struct: StylusConnectedEvent
ash.cros_healthd.mojom.StylusConnectedEvent = class {
  constructor(values = {}) {
  }
};

// Struct: CrashUploadInfo
ash.cros_healthd.mojom.CrashUploadInfo = class {
  constructor(values = {}) {
  }
};

// Struct: CrashEventInfo
ash.cros_healthd.mojom.CrashEventInfo = class {
  constructor(values = {}) {
    this.kChrome = values.kChrome !== undefined ? values.kChrome : null;
  }
};

// Interface: CrosHealthdBluetoothObserver
ash.cros_healthd.mojom.CrosHealthdBluetoothObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver';
  }

};

ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosHealthdLidObserver
ash.cros_healthd.mojom.CrosHealthdLidObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.CrosHealthdLidObserver';
  }

};

ash.cros_healthd.mojom.CrosHealthdLidObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosHealthdPowerObserver
ash.cros_healthd.mojom.CrosHealthdPowerObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.CrosHealthdPowerObserver';
  }

};

ash.cros_healthd.mojom.CrosHealthdPowerObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosHealthdAudioObserver
ash.cros_healthd.mojom.CrosHealthdAudioObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.CrosHealthdAudioObserver';
  }

};

ash.cros_healthd.mojom.CrosHealthdAudioObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosHealthdThunderboltObserver
ash.cros_healthd.mojom.CrosHealthdThunderboltObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.CrosHealthdThunderboltObserver';
  }

};

ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosHealthdUsbObserver
ash.cros_healthd.mojom.CrosHealthdUsbObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.CrosHealthdUsbObserver';
  }

};

ash.cros_healthd.mojom.CrosHealthdUsbObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosHealthdSdCardObserver
ash.cros_healthd.mojom.CrosHealthdSdCardObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.CrosHealthdSdCardObserver';
  }

};

ash.cros_healthd.mojom.CrosHealthdSdCardObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: EventObserver
ash.cros_healthd.mojom.EventObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.EventObserver';
  }

};

ash.cros_healthd.mojom.EventObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
