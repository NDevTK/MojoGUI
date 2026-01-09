// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/memory_pressure.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: MemoryPressureController
chromecast.mojom.MemoryPressureControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.MemoryPressureController';
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

};

chromecast.mojom.MemoryPressureControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MemoryPressureObserver
chromecast.mojom.MemoryPressureObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.MemoryPressureObserver';
  }

  memoryPressureLevelChanged(pressure_level) {
    // Method: MemoryPressureLevelChanged
    // Call: MemoryPressureLevelChanged(pressure_level)
  }

};

chromecast.mojom.MemoryPressureObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
