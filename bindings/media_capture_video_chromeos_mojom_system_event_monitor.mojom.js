// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/system_event_monitor.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: LidState
cros.mojom.LidState = {
};

// Enum: DeviceType
cros.mojom.DeviceType = {
};

// Enum: ClockwiseRotation
cros.mojom.ClockwiseRotation = {
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
