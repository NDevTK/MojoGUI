// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/hid/hid.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.HidServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.HidService_RegisterClient_ParamsSpec,
      null,
      [client],
      false);
  }

  getDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.HidService_GetDevices_ParamsSpec,
      blink.mojom.HidService_GetDevices_ResponseParamsSpec,
      [],
      false);
  }

  requestDevice(filters, exclusion_filters) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.HidService_RequestDevice_ParamsSpec,
      blink.mojom.HidService_RequestDevice_ResponseParamsSpec,
      [filters, exclusion_filters],
      false);
  }

  connect(device_guid, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.HidService_Connect_ParamsSpec,
      blink.mojom.HidService_Connect_ResponseParamsSpec,
      [device_guid, client],
      false);
  }

  forget(device_info) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.HidService_RegisterClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerClient(params.client);
          break;
        }
        case 1: {
          const params = blink.mojom.HidService_GetDevices_ParamsSpec.$.decode(message.payload);
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
          const params = blink.mojom.HidService_RequestDevice_ParamsSpec.$.decode(message.payload);
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
          const params = blink.mojom.HidService_Connect_ParamsSpec.$.decode(message.payload);
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
          const params = blink.mojom.HidService_Forget_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

blink.mojom.HidServiceReceiver = blink.mojom.HidServiceReceiver;

blink.mojom.HidServicePtr = blink.mojom.HidServiceRemote;
blink.mojom.HidServiceRequest = blink.mojom.HidServicePendingReceiver;

