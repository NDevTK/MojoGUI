// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/public/mojom/gesture_properties_service.mojom
// Module: ui.ozone.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};


// Enum: SetGesturePropErrorCode
ui.ozone.mojom.SetGesturePropErrorCode = {
  SUCCESS: 0,
  UNKNOWN_ERROR: 1,
};

// Interface: GesturePropertiesService
ui.ozone.mojom.GesturePropertiesServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ui.ozone.mojom.GesturePropertiesService';
  }

  listDevices() {
    // Method: ListDevices
    return new Promise((resolve) => {
      // Call: ListDevices()
      resolve({});
    });
  }

  listProperties(device_id) {
    // Method: ListProperties
    return new Promise((resolve) => {
      // Call: ListProperties(device_id)
      resolve({});
    });
  }

  getProperty(device_id, name) {
    // Method: GetProperty
    return new Promise((resolve) => {
      // Call: GetProperty(device_id, name)
      resolve({});
    });
  }

  setProperty(device_id, name, value) {
    // Method: SetProperty
    return new Promise((resolve) => {
      // Call: SetProperty(device_id, name, value)
      resolve({});
    });
  }

};

ui.ozone.mojom.GesturePropertiesServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
