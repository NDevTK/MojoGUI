// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/lock_screen/lock_screen.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: LockScreenServiceStatus
blink.mojom.LockScreenServiceStatus = {
  kSuccess: 0,
  kNotAllowedFromContext: 1,
  kWriteError: 2,
};
blink.mojom.LockScreenServiceStatusSpec = { $: mojo.internal.Enum() };

// Interface: LockScreenService
blink.mojom.LockScreenService = {};

blink.mojom.LockScreenServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LockScreenServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LockScreenService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LockScreenServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.LockScreenServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LockScreenServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getKeys() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.LockScreenService_GetKeys_ParamsSpec,
      blink.mojom.LockScreenService_GetKeys_ResponseParamsSpec,
      []);
  }

  setData(key, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.LockScreenService_SetData_ParamsSpec,
      blink.mojom.LockScreenService_SetData_ResponseParamsSpec,
      [key, data]);
  }

};

blink.mojom.LockScreenService.getRemote = function() {
  let remote = new blink.mojom.LockScreenServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LockScreenService',
    'context');
  return remote.$;
};

// ParamsSpec for GetKeys
blink.mojom.LockScreenService_GetKeys_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockScreenService.GetKeys_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.LockScreenService_GetKeys_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockScreenService.GetKeys_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetData
blink.mojom.LockScreenService_SetData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockScreenService.SetData_Params',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.LockScreenService_SetData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LockScreenService.SetData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LockScreenServiceStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.LockScreenServicePtr = blink.mojom.LockScreenServiceRemote;
blink.mojom.LockScreenServiceRequest = blink.mojom.LockScreenServicePendingReceiver;

