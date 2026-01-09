// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/system_event_monitor.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: LidState
cros.mojom.LidState = {
  kOpen: 0,
};

// Enum: DeviceType
cros.mojom.DeviceType = {
  kAudio: 0,
  e: 1,
  microphone: 2,
  e: 3,
  webcam: 4,
};

// Enum: ClockwiseRotation
cros.mojom.ClockwiseRotation = {
  kRotate0: 0,
  kRotate90: 1,
  kRotate180: 2,
  kRotate270: 3,
};

// Interface: CrosDisplayObserver
cros.mojom.CrosDisplayObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CrosDisplayObserver';
  }

};

cros.mojom.CrosDisplayObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosLidObserver
cros.mojom.CrosLidObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CrosLidObserver';
  }

};

cros.mojom.CrosLidObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosPowerObserver
cros.mojom.CrosPowerObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CrosPowerObserver';
  }

};

cros.mojom.CrosPowerObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosSystemEventMonitor
cros.mojom.CrosSystemEventMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CrosSystemEventMonitor';
  }

};

cros.mojom.CrosSystemEventMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
