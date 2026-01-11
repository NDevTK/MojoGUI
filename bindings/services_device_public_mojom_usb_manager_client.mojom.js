// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager_client.mojom
// Module: device.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.UsbDeviceManagerClient = {};
device.mojom.UsbDeviceManagerClient.$interfaceName = 'device.mojom.UsbDeviceManagerClient';
device.mojom.UsbDeviceManagerClient_OnDeviceAdded_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerClient_OnDeviceRemoved_ParamsSpec = { $: {} };

// Interface: UsbDeviceManagerClient
mojo.internal.Struct(
    device.mojom.UsbDeviceManagerClient_OnDeviceAdded_ParamsSpec, 'device.mojom.UsbDeviceManagerClient_OnDeviceAdded_Params', [
      mojo.internal.StructField('device_info', 0, 0, device.mojom.UsbDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerClient_OnDeviceRemoved_ParamsSpec, 'device.mojom.UsbDeviceManagerClient_OnDeviceRemoved_Params', [
      mojo.internal.StructField('device_info', 0, 0, device.mojom.UsbDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.UsbDeviceManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.UsbDeviceManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.UsbDeviceManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.UsbDeviceManagerClientPendingReceiver,
      handle);
    this.$ = new device.mojom.UsbDeviceManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDeviceAdded(device_info) {
    return this.$.onDeviceAdded(device_info);
  }
  onDeviceRemoved(device_info) {
    return this.$.onDeviceRemoved(device_info);
  }
};

device.mojom.UsbDeviceManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UsbDeviceManagerClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDeviceAdded(device_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.UsbDeviceManagerClient_OnDeviceAdded_ParamsSpec,
      null,
      [device_info],
      false);
  }

  onDeviceRemoved(device_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.UsbDeviceManagerClient_OnDeviceRemoved_ParamsSpec,
      null,
      [device_info],
      false);
  }

};

device.mojom.UsbDeviceManagerClient.getRemote = function() {
  let remote = new device.mojom.UsbDeviceManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.UsbDeviceManagerClient',
    'context');
  return remote.$;
};

device.mojom.UsbDeviceManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UsbDeviceManagerClient', [
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
             decoder.decodeStructInline(device.mojom.UsbDeviceManagerClient_OnDeviceAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManagerClient_OnDeviceRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManagerClient_OnDeviceAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onDeviceAdded(params.device_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManagerClient_OnDeviceRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.onDeviceRemoved(params.device_info);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

device.mojom.UsbDeviceManagerClientReceiver = device.mojom.UsbDeviceManagerClientReceiver;

device.mojom.UsbDeviceManagerClientPtr = device.mojom.UsbDeviceManagerClientRemote;
device.mojom.UsbDeviceManagerClientRequest = device.mojom.UsbDeviceManagerClientPendingReceiver;

