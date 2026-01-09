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
    this.vendor@0 = values.vendor@0 !== undefined ? values.vendor@0 : "";
    this.{ = values.{ !== undefined ? values.{ : 0;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: ThunderboltEventInfo
ash.cros_healthd.mojom.ThunderboltEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
    this.3 = values.3 !== undefined ? values.3 : null;
    this.4 = values.4 !== undefined ? values.4 : null;
  }
};

// Struct: LidEventInfo
ash.cros_healthd.mojom.LidEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: BluetoothEventInfo
ash.cros_healthd.mojom.BluetoothEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
    this.3 = values.3 !== undefined ? values.3 : null;
    this.4 = values.4 !== undefined ? values.4 : null;
    this.5 = values.5 !== undefined ? values.5 : null;
    this.6 = values.6 !== undefined ? values.6 : null;
  }
};

// Struct: PowerEventInfo
ash.cros_healthd.mojom.PowerEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
    this.3 = values.3 !== undefined ? values.3 : null;
    this.4 = values.4 !== undefined ? values.4 : null;
  }
};

// Struct: AudioEventInfo
ash.cros_healthd.mojom.AudioEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.0 = values.0 !== undefined ? values.0 : {};
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: AudioJackEventInfo
ash.cros_healthd.mojom.AudioJackEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.kUnmappedEnumField = values.kUnmappedEnumField !== undefined ? values.kUnmappedEnumField : null;
  }
};

// Struct: SdCardEventInfo
ash.cros_healthd.mojom.SdCardEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.kUnmappedEnumField = values.kUnmappedEnumField !== undefined ? values.kUnmappedEnumField : null;
  }
};

// Struct: TouchpadButtonEvent
ash.cros_healthd.mojom.TouchpadButtonEvent = class {
  constructor(values = {}) {
    this.pressed@1 = values.pressed@1 !== undefined ? values.pressed@1 : false;
  }
};

// Struct: TouchPointInfo
ash.cros_healthd.mojom.TouchPointInfo = class {
  constructor(values = {}) {
    this.touch_minor@5 = values.touch_minor@5 !== undefined ? values.touch_minor@5 : 0;
  }
};

// Struct: TouchpadTouchEvent
ash.cros_healthd.mojom.TouchpadTouchEvent = class {
  constructor(values = {}) {
    this.touch_points@0 = values.touch_points@0 !== undefined ? values.touch_points@0 : 0;
  }
};

// Struct: TouchpadConnectedEvent
ash.cros_healthd.mojom.TouchpadConnectedEvent = class {
  constructor(values = {}) {
    this.max_y@1 = values.max_y@1 !== undefined ? values.max_y@1 : 0;
    this.buttons@3 = values.buttons@3 !== undefined ? values.buttons@3 : 0;
  }
};

// Struct: ExternalDisplayEventInfo
ash.cros_healthd.mojom.ExternalDisplayEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.kUnmappedEnumField = values.kUnmappedEnumField !== undefined ? values.kUnmappedEnumField : null;
  }
};

// Struct: TouchscreenTouchEvent
ash.cros_healthd.mojom.TouchscreenTouchEvent = class {
  constructor(values = {}) {
    this.touch_points@0 = values.touch_points@0 !== undefined ? values.touch_points@0 : 0;
  }
};

// Struct: TouchscreenConnectedEvent
ash.cros_healthd.mojom.TouchscreenConnectedEvent = class {
  constructor(values = {}) {
    this.max_y@1 = values.max_y@1 !== undefined ? values.max_y@1 : 0;
    this.max_pressure@2 = values.max_pressure@2 !== undefined ? values.max_pressure@2 : 0;
  }
};

// Struct: StylusGarageEventInfo
ash.cros_healthd.mojom.StylusGarageEventInfo = class {
  constructor(values = {}) {
    this.{ = values.{ !== undefined ? values.{ : null;
    this.kUnmappedEnumField = values.kUnmappedEnumField !== undefined ? values.kUnmappedEnumField : null;
  }
};

// Struct: StylusTouchPointInfo
ash.cros_healthd.mojom.StylusTouchPointInfo = class {
  constructor(values = {}) {
    this.pressure@2 = values.pressure@2 !== undefined ? values.pressure@2 : 0;
  }
};

// Struct: StylusTouchEvent
ash.cros_healthd.mojom.StylusTouchEvent = class {
  constructor(values = {}) {
    this.touch_point@0 = values.touch_point@0 !== undefined ? values.touch_point@0 : 0;
  }
};

// Struct: StylusConnectedEvent
ash.cros_healthd.mojom.StylusConnectedEvent = class {
  constructor(values = {}) {
    this.max_y@1 = values.max_y@1 !== undefined ? values.max_y@1 : 0;
    this.max_pressure@2 = values.max_pressure@2 !== undefined ? values.max_pressure@2 : 0;
  }
};

// Struct: CrashUploadInfo
ash.cros_healthd.mojom.CrashUploadInfo = class {
  constructor(values = {}) {
    this.offset@2 = values.offset@2 !== undefined ? values.offset@2 : 0;
  }
};

// Struct: CrashEventInfo
ash.cros_healthd.mojom.CrashEventInfo = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : null;
    this.kChrome = values.kChrome !== undefined ? values.kChrome : null;
  }
};

// Interface: CrosHealthdBluetoothObserver
ash.cros_healthd.mojom.CrosHealthdBluetoothObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver';
  }

  0() {
    // Method: 0
    // Call: 0()
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  3() {
    // Method: 3
    // Call: 3()
  }

  4() {
    // Method: 4
    // Call: 4()
  }

  5() {
    // Method: 5
    // Call: 5()
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

  0() {
    // Method: 0
    // Call: 0()
  }

  1() {
    // Method: 1
    // Call: 1()
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

  0() {
    // Method: 0
    // Call: 0()
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  3() {
    // Method: 3
    // Call: 3()
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

  0() {
    // Method: 0
    // Call: 0()
  }

  1() {
    // Method: 1
    // Call: 1()
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

  0() {
    // Method: 0
    // Call: 0()
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  3() {
    // Method: 3
    // Call: 3()
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

  0(info) {
    // Method: 0
    // Call: 0(info)
  }

  1(info) {
    // Method: 1
    // Call: 1(info)
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

  0() {
    // Method: 0
    // Call: 0()
  }

  1() {
    // Method: 1
    // Call: 1()
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

  0(info) {
    // Method: 0
    // Call: 0(info)
  }

};

ash.cros_healthd.mojom.EventObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
