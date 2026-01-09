// Auto-generated MojoJS binding
// Source: chromium_src/components/global_media_controls/public/mojom/device_service.mojom
// Module: global_media_controls.mojom

'use strict';

// Module namespace
var global_media_controls = global_media_controls || {};
global_media_controls.mojom = global_media_controls.mojom || {};


// Enum: IconType
global_media_controls.mojom.IconType = {
  kUnknown: 0,
  kThrobber: 1,
  kInfo: 2,
  kTv: 3,
  kSpeaker: 4,
  kSpeakerGroup: 5,
};

// Struct: Device
global_media_controls.mojom.Device = class {
  constructor(values = {}) {
    this.icon@3 = values.icon@3 !== undefined ? values.icon@3 : "";
  }
};

// Interface: DeviceListHost
global_media_controls.mojom.DeviceListHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'global_media_controls.mojom.DeviceListHost';
  }

  0(device_id) {
    // Method: 0
    // Call: 0(device_id)
  }

};

global_media_controls.mojom.DeviceListHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DeviceListClient
global_media_controls.mojom.DeviceListClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'global_media_controls.mojom.DeviceListClient';
  }

  0(devices) {
    // Method: 0
    // Call: 0(devices)
  }

  1() {
    // Method: 1
    // Call: 1()
  }

};

global_media_controls.mojom.DeviceListClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DeviceService
global_media_controls.mojom.DeviceServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'global_media_controls.mojom.DeviceService';
  }

  0(session_id, host_receiver, client_remote) {
    // Method: 0
    // Call: 0(session_id, host_receiver, client_remote)
  }

  presentationRequest(a) {
    // Method: PresentationRequest
    // Call: PresentationRequest(a)
  }

  observeDeviceListHostForSession() {
    // Method: ObserveDeviceListHostForSession
    // Call: ObserveDeviceListHostForSession()
  }

  1(host_receiver, client_remote) {
    // Method: 1
    // Call: 1(host_receiver, client_remote)
  }

  2(provider_remote) {
    // Method: 2
    // Call: 2(provider_remote)
  }

};

global_media_controls.mojom.DeviceServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DevicePickerProvider
global_media_controls.mojom.DevicePickerProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'global_media_controls.mojom.DevicePickerProvider';
  }

  0(source_id) {
    // Method: 0
    // Call: 0(source_id)
  }

  createItem() {
    // Method: CreateItem
    // Call: CreateItem()
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  createItem() {
    // Method: CreateItem
    // Call: CreateItem()
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  deleteItem() {
    // Method: DeleteItem
    // Call: DeleteItem()
  }

  showItem() {
    // Method: ShowItem
    // Call: ShowItem()
  }

  createItem() {
    // Method: CreateItem
    // Call: CreateItem()
  }

  3() {
    // Method: 3
    // Call: 3()
  }

  4(metadata) {
    // Method: 4
    // Call: 4(metadata)
  }

  5(artwork_image) {
    // Method: 5
    // Call: 5(artwork_image)
  }

  6(favicon_image) {
    // Method: 6
    // Call: 6(favicon_image)
  }

  7(observer) {
    // Method: 7
    // Call: 7(observer)
  }

  8() {
    // Method: 8
    // Call: 8()
  }

};

global_media_controls.mojom.DevicePickerProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DevicePickerObserver
global_media_controls.mojom.DevicePickerObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'global_media_controls.mojom.DevicePickerObserver';
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

global_media_controls.mojom.DevicePickerObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
