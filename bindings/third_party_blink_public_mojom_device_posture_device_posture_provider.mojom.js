// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/device_posture/device_posture_provider.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: DevicePostureType
blink.mojom.DevicePostureType = {
  kContinuous: 0,
  kFolded: 1,
};

// Interface: DevicePostureProvider
blink.mojom.DevicePostureProvider = {};

blink.mojom.DevicePostureProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevicePostureProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevicePostureProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevicePostureProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevicePostureProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevicePostureProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addListenerAndGetCurrentPosture(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ParamsSpec,
      blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParamsSpec,
      [client]);
  }

  overrideDevicePostureForEmulation(posture) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_ParamsSpec,
      null,
      [posture]);
  }

  disableDevicePostureOverrideForEmulation() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DevicePostureProvider_DisableDevicePostureOverrideForEmulation_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.DevicePostureProvider.getRemote = function() {
  let remote = new blink.mojom.DevicePostureProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevicePostureProvider',
    'context');
  return remote.$;
};

// ParamsSpec for AddListenerAndGetCurrentPosture
blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevicePostureProvider.AddListenerAndGetCurrentPosture_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevicePostureProvider.AddListenerAndGetCurrentPosture_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'posture', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DevicePostureTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OverrideDevicePostureForEmulation
blink.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevicePostureProvider.OverrideDevicePostureForEmulation_Params',
      packedSize: 16,
      fields: [
        { name: 'posture', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DevicePostureTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DisableDevicePostureOverrideForEmulation
blink.mojom.DevicePostureProvider_DisableDevicePostureOverrideForEmulation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevicePostureProvider.DisableDevicePostureOverrideForEmulation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DevicePostureProviderPtr = blink.mojom.DevicePostureProviderRemote;
blink.mojom.DevicePostureProviderRequest = blink.mojom.DevicePostureProviderPendingReceiver;


// Interface: DevicePostureClient
blink.mojom.DevicePostureClient = {};

blink.mojom.DevicePostureClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevicePostureClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevicePostureClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevicePostureClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevicePostureClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevicePostureClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPostureChanged(posture) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DevicePostureClient_OnPostureChanged_ParamsSpec,
      null,
      [posture]);
  }

};

blink.mojom.DevicePostureClient.getRemote = function() {
  let remote = new blink.mojom.DevicePostureClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevicePostureClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnPostureChanged
blink.mojom.DevicePostureClient_OnPostureChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevicePostureClient.OnPostureChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'posture', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DevicePostureTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DevicePostureClientPtr = blink.mojom.DevicePostureClientRemote;
blink.mojom.DevicePostureClientRequest = blink.mojom.DevicePostureClientPendingReceiver;

