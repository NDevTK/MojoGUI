// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager_test.mojom
// Module: device.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var url = url || {};

device.mojom.TestDeviceInfoSpec = { $: {} };
device.mojom.UsbDeviceManagerTest = {};
device.mojom.UsbDeviceManagerTest.$interfaceName = 'device.mojom.UsbDeviceManagerTest';
device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec = { $: {} };

// Struct: TestDeviceInfo
mojo.internal.Struct(
    device.mojom.TestDeviceInfoSpec, 'device.mojom.TestDeviceInfo', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serial_number', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('landing_page', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: UsbDeviceManagerTest
mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec, 'device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serial_number', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('landing_page', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec, 'device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec, 'device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsSpec, 'device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec, 'device.mojom.UsbDeviceManagerTest_GetTestDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec, 'device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(device.mojom.TestDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.UsbDeviceManagerTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.UsbDeviceManagerTestRemote = class {
  static get $interfaceName() {
    return 'device.mojom.UsbDeviceManagerTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.UsbDeviceManagerTestPendingReceiver,
      handle);
    this.$ = new device.mojom.UsbDeviceManagerTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addDeviceForTesting(name, serial_number, landing_page) {
    return this.$.addDeviceForTesting(name, serial_number, landing_page);
  }
  removeDeviceForTesting(guid) {
    return this.$.removeDeviceForTesting(guid);
  }
  getTestDevices() {
    return this.$.getTestDevices();
  }
};

device.mojom.UsbDeviceManagerTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UsbDeviceManagerTest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addDeviceForTesting(name, serial_number, landing_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec,
      device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec,
      [name, serial_number, landing_page],
      false);
  }

  removeDeviceForTesting(guid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec,
      device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsSpec,
      [guid],
      false);
  }

  getTestDevices() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec,
      device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec,
      [],
      false);
  }

};

device.mojom.UsbDeviceManagerTest.getRemote = function() {
  let remote = new device.mojom.UsbDeviceManagerTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.UsbDeviceManagerTest',
    'context');
  return remote.$;
};

device.mojom.UsbDeviceManagerTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UsbDeviceManagerTest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec.$.structSpec);
          const result = this.impl.addDeviceForTesting(params.name, params.serial_number, params.landing_page);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec.$.structSpec);
          const result = this.impl.removeDeviceForTesting(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec.$.structSpec);
          const result = this.impl.getTestDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

device.mojom.UsbDeviceManagerTestReceiver = device.mojom.UsbDeviceManagerTestReceiver;

device.mojom.UsbDeviceManagerTestPtr = device.mojom.UsbDeviceManagerTestRemote;
device.mojom.UsbDeviceManagerTestRequest = device.mojom.UsbDeviceManagerTestPendingReceiver;

