// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/system_info.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Interface: SystemInfo
audio.mojom.SystemInfoPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'audio.mojom.SystemInfo';
  }

  getInputStreamParameters(device_id) {
    // Method: GetInputStreamParameters
    return new Promise((resolve) => {
      // Call: GetInputStreamParameters(device_id)
      resolve({});
    });
  }

  getOutputStreamParameters(device_id) {
    // Method: GetOutputStreamParameters
    return new Promise((resolve) => {
      // Call: GetOutputStreamParameters(device_id)
      resolve({});
    });
  }

  hasInputDevices() {
    // Method: HasInputDevices
    return new Promise((resolve) => {
      // Call: HasInputDevices()
      resolve({});
    });
  }

  hasOutputDevices() {
    // Method: HasOutputDevices
    return new Promise((resolve) => {
      // Call: HasOutputDevices()
      resolve({});
    });
  }

  getInputDeviceDescriptions() {
    // Method: GetInputDeviceDescriptions
    return new Promise((resolve) => {
      // Call: GetInputDeviceDescriptions()
      resolve({});
    });
  }

  getOutputDeviceDescriptions() {
    // Method: GetOutputDeviceDescriptions
    return new Promise((resolve) => {
      // Call: GetOutputDeviceDescriptions()
      resolve({});
    });
  }

  getAssociatedOutputDeviceID(input_device_id) {
    // Method: GetAssociatedOutputDeviceID
    return new Promise((resolve) => {
      // Call: GetAssociatedOutputDeviceID(input_device_id)
      resolve({});
    });
  }

  getInputDeviceInfo(input_device_id) {
    // Method: GetInputDeviceInfo
    return new Promise((resolve) => {
      // Call: GetInputDeviceInfo(input_device_id)
      resolve({});
    });
  }

};

audio.mojom.SystemInfoRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
