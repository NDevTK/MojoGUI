// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/sensor/web_sensor_provider.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WebSensorProvider
blink.mojom.WebSensorProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebSensorProvider';
  }

  getSensor() {
    // Method: GetSensor
    // Call: GetSensor()
  }

  getSensor(type) {
    // Method: GetSensor
    return new Promise((resolve) => {
      // Call: GetSensor(type)
      resolve({});
    });
  }

};

blink.mojom.WebSensorProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
