// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/hid/hid.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Union: DeviceIdFilter
blink.mojom.DeviceIdFilterSpec = { $: mojo.internal.Union(
    'blink.mojom.DeviceIdFilter', {
      'vendor': {
        'ordinal': 0,
        'type': mojo.internal.Uint16,
      }},
      'vendor_and_product': {
        'ordinal': 1,
        'type': blink.mojom.VendorAndProductSpec,
      }},
    })
};

// Union: UsageFilter
blink.mojom.UsageFilterSpec = { $: mojo.internal.Union(
    'blink.mojom.UsageFilter', {
      'page': {
        'ordinal': 0,
        'type': mojo.internal.Uint16,
      }},
      'usage_and_page': {
        'ordinal': 1,
        'type': device.mojom.HidUsageAndPageSpec,
      }},
    })
};

// Struct: VendorAndProduct
blink.mojom.VendorAndProductSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.VendorAndProduct',
      packedSize: 16,
      fields: [
        { name: 'vendor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'product', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: HidDeviceFilter
blink.mojom.HidDeviceFilterSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HidDeviceFilter',
      packedSize: 40,
      fields: [
        { name: 'device_ids', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DeviceIdFilterSpec, nullable: true, minVersion: 0 },
        { name: 'usage', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.UsageFilterSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: HidService
blink.mojom.HidService = {};

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
      [client]);
  }

  getDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.HidService_GetDevices_ParamsSpec,
      blink.mojom.HidService_GetDevices_ResponseParamsSpec,
      []);
  }

  requestDevice(filters, exclusion_filters) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.HidService_RequestDevice_ParamsSpec,
      blink.mojom.HidService_RequestDevice_ResponseParamsSpec,
      [filters, exclusion_filters]);
  }

  connect(device_guid, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.HidService_Connect_ParamsSpec,
      blink.mojom.HidService_Connect_ResponseParamsSpec,
      [device_guid, client]);
  }

  forget(device_info) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.HidService_Forget_ParamsSpec,
      null,
      [device_info]);
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

// ParamsSpec for RegisterClient
blink.mojom.HidService_RegisterClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HidService.RegisterClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDevices
blink.mojom.HidService_GetDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HidService.GetDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.HidService_GetDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HidService.GetDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidDeviceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestDevice
blink.mojom.HidService_RequestDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HidService.RequestDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'filters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.HidDeviceFilterSpec, false), nullable: false, minVersion: 0 },
        { name: 'exclusion_filters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.HidDeviceFilterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.HidService_RequestDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HidService.RequestDevice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.HidDeviceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Connect
blink.mojom.HidService_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HidService.Connect_Params',
      packedSize: 24,
      fields: [
        { name: 'device_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.HidService_Connect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HidService.Connect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'connection', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Forget
blink.mojom.HidService_Forget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HidService.Forget_Params',
      packedSize: 16,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.HidDeviceInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.HidServicePtr = blink.mojom.HidServiceRemote;
blink.mojom.HidServiceRequest = blink.mojom.HidServicePendingReceiver;

