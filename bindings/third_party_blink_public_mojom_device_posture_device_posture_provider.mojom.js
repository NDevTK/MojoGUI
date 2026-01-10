// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/device_posture/device_posture_provider.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: DevicePostureType
blink.mojom.mojom.DevicePostureType = {
  kContinuous: 0,
  kFolded: 1,
};
blink.mojom.mojom.DevicePostureTypeSpec = { $: mojo.internal.Enum() };

// Interface: DevicePostureProvider
blink.mojom.mojom.DevicePostureProvider = {};

blink.mojom.mojom.DevicePostureProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DevicePostureProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevicePostureProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DevicePostureProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DevicePostureProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DevicePostureProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addListenerAndGetCurrentPosture(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ParamsSpec,
      blink.mojom.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParamsSpec,
      [client]);
  }

  overrideDevicePostureForEmulation(posture) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_ParamsSpec,
      null,
      [posture]);
  }

  disableDevicePostureOverrideForEmulation() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.DevicePostureProvider_DisableDevicePostureOverrideForEmulation_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.DevicePostureProvider.getRemote = function() {
  let remote = new blink.mojom.mojom.DevicePostureProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevicePostureProvider',
    'context');
  return remote.$;
};

// ParamsSpec for AddListenerAndGetCurrentPosture
blink.mojom.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevicePostureProvider.AddListenerAndGetCurrentPosture_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.DevicePostureClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevicePostureProvider.AddListenerAndGetCurrentPosture_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'posture', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DevicePostureTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OverrideDevicePostureForEmulation
blink.mojom.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevicePostureProvider.OverrideDevicePostureForEmulation_Params',
      packedSize: 16,
      fields: [
        { name: 'posture', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DevicePostureTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisableDevicePostureOverrideForEmulation
blink.mojom.mojom.DevicePostureProvider_DisableDevicePostureOverrideForEmulation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevicePostureProvider.DisableDevicePostureOverrideForEmulation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DevicePostureProviderPtr = blink.mojom.mojom.DevicePostureProviderRemote;
blink.mojom.mojom.DevicePostureProviderRequest = blink.mojom.mojom.DevicePostureProviderPendingReceiver;


// Interface: DevicePostureClient
blink.mojom.mojom.DevicePostureClient = {};

blink.mojom.mojom.DevicePostureClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DevicePostureClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevicePostureClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DevicePostureClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DevicePostureClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DevicePostureClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPostureChanged(posture) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DevicePostureClient_OnPostureChanged_ParamsSpec,
      null,
      [posture]);
  }

};

blink.mojom.mojom.DevicePostureClient.getRemote = function() {
  let remote = new blink.mojom.mojom.DevicePostureClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevicePostureClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnPostureChanged
blink.mojom.mojom.DevicePostureClient_OnPostureChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevicePostureClient.OnPostureChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'posture', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DevicePostureTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DevicePostureClientPtr = blink.mojom.mojom.DevicePostureClientRemote;
blink.mojom.mojom.DevicePostureClientRequest = blink.mojom.mojom.DevicePostureClientPendingReceiver;

