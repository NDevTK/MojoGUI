// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/hid/hid.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var device = device || {};

blink.mojom.DeviceIdFilterSpec = { $: {} };
blink.mojom.UsageFilterSpec = { $: {} };
blink.mojom.VendorAndProductSpec = { $: {} };
blink.mojom.HidDeviceFilterSpec = { $: {} };
blink.mojom.HidService = {};
blink.mojom.HidService.$interfaceName = 'blink.mojom.HidService';
blink.mojom.HidService_RegisterClient_ParamsSpec = { $: {} };
blink.mojom.HidService_GetDevices_ParamsSpec = { $: {} };
blink.mojom.HidService_GetDevices_ResponseParamsSpec = { $: {} };
blink.mojom.HidService_RequestDevice_ParamsSpec = { $: {} };
blink.mojom.HidService_RequestDevice_ResponseParamsSpec = { $: {} };
blink.mojom.HidService_Connect_ParamsSpec = { $: {} };
blink.mojom.HidService_Connect_ResponseParamsSpec = { $: {} };
blink.mojom.HidService_Forget_ParamsSpec = { $: {} };
blink.mojom.HidService_Forget_ResponseParamsSpec = { $: {} };

// Union: DeviceIdFilter
mojo.internal.Union(
    blink.mojom.DeviceIdFilterSpec, 'blink.mojom.DeviceIdFilter', {
      'vendor': {
        'ordinal': 0,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'vendor_and_product': {
        'ordinal': 1,
        'type': blink.mojom.VendorAndProductSpec.$,
        'nullable': false,
      },
    });

// Union: UsageFilter
mojo.internal.Union(
    blink.mojom.UsageFilterSpec, 'blink.mojom.UsageFilter', {
      'page': {
        'ordinal': 0,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'usage_and_page': {
        'ordinal': 1,
        'type': device.mojom.HidUsageAndPageSpec.$,
        'nullable': false,
      },
    });

// Struct: VendorAndProduct
mojo.internal.Struct(
    blink.mojom.VendorAndProductSpec, 'blink.mojom.VendorAndProduct', [
      mojo.internal.StructField('vendor', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('product', 2, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: HidDeviceFilter
mojo.internal.Struct(
    blink.mojom.HidDeviceFilterSpec, 'blink.mojom.HidDeviceFilter', [
      mojo.internal.StructField('device_ids', 0, 0, blink.mojom.DeviceIdFilterSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('usage', 8, 0, blink.mojom.UsageFilterSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: HidService
mojo.internal.Struct(
    blink.mojom.HidService_RegisterClient_ParamsSpec, 'blink.mojom.HidService_RegisterClient_Params', [
      mojo.internal.StructField('client', 0, 0, pending_associated_remote<device.mojom.HidManagerClient>Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.HidService_GetDevices_ParamsSpec, 'blink.mojom.HidService_GetDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.HidService_GetDevices_ResponseParamsSpec, 'blink.mojom.HidService_GetDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(device.mojom.HidDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.HidService_RequestDevice_ParamsSpec, 'blink.mojom.HidService_RequestDevice_Params', [
      mojo.internal.StructField('filters', 0, 0, mojo.internal.Array(blink.mojom.HidDeviceFilterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('exclusion_filters', 8, 0, mojo.internal.Array(blink.mojom.HidDeviceFilterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.HidService_RequestDevice_ResponseParamsSpec, 'blink.mojom.HidService_RequestDevice_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(device.mojom.HidDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.HidService_Connect_ParamsSpec, 'blink.mojom.HidService_Connect_Params', [
      mojo.internal.StructField('device_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(device.mojom.HidConnectionClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.HidService_Connect_ResponseParamsSpec, 'blink.mojom.HidService_Connect_ResponseParams', [
      mojo.internal.StructField('connection', 0, 0, mojo.internal.InterfaceProxy(device.mojom.HidConnectionRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.HidService_Forget_ParamsSpec, 'blink.mojom.HidService_Forget_Params', [
      mojo.internal.StructField('device_info', 0, 0, device.mojom.HidDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.HidService_Forget_ResponseParamsSpec, 'blink.mojom.HidService_Forget_ResponseParams', [
    ],
    [[0, 8]]);

blink.mojom.HidServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.HidServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.HidService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.HidServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.HidServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  registerClient(client) {
    return this.$.registerClient(client);
  }
  getDevices() {
    return this.$.getDevices();
  }
  requestDevice(filters, exclusion_filters) {
    return this.$.requestDevice(filters, exclusion_filters);
  }
  connect(device_guid, client) {
    return this.$.connect(device_guid, client);
  }
  forget(device_info) {
    return this.$.forget(device_info);
  }
};

blink.mojom.HidServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HidService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  registerClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.HidService_RegisterClient_ParamsSpec,
      null,
      [client],
      false);
  }

  getDevices() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.HidService_GetDevices_ParamsSpec,
      blink.mojom.HidService_GetDevices_ResponseParamsSpec,
      [],
      false);
  }

  requestDevice(filters, exclusion_filters) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.HidService_RequestDevice_ParamsSpec,
      blink.mojom.HidService_RequestDevice_ResponseParamsSpec,
      [filters, exclusion_filters],
      false);
  }

  connect(device_guid, client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.HidService_Connect_ParamsSpec,
      blink.mojom.HidService_Connect_ResponseParamsSpec,
      [device_guid, client],
      false);
  }

  forget(device_info) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.HidService_Forget_ParamsSpec,
      blink.mojom.HidService_Forget_ResponseParamsSpec,
      [device_info],
      false);
  }

};

blink.mojom.HidService.getRemote = function() {
  let remote = new blink.mojom.HidServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.HidService',
    'context');
  return remote.$;
};

blink.mojom.HidServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HidService', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.HidService_RegisterClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.HidService_GetDevices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.HidService_RequestDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.HidService_Connect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.HidService_Forget_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.HidService_RegisterClient_ParamsSpec.$.structSpec);
          const result = this.impl.registerClient(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.HidService_GetDevices_ParamsSpec.$.structSpec);
          const result = this.impl.getDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.HidService_GetDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.HidService_RequestDevice_ParamsSpec.$.structSpec);
          const result = this.impl.requestDevice(params.filters, params.exclusion_filters);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.HidService_RequestDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.HidService_Connect_ParamsSpec.$.structSpec);
          const result = this.impl.connect(params.device_guid, params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.HidService_Connect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.HidService_Forget_ParamsSpec.$.structSpec);
          const result = this.impl.forget(params.device_info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.HidService_Forget_ResponseParamsSpec);
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

blink.mojom.HidServiceReceiver = blink.mojom.HidServiceReceiver;

blink.mojom.HidServicePtr = blink.mojom.HidServiceRemote;
blink.mojom.HidServiceRequest = blink.mojom.HidServicePendingReceiver;

