// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/keyboard_lock/keyboard_lock.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: KeyboardLockRequestResult
blink.mojom.KeyboardLockRequestResult = {
  kSuccess: 0,
  kFrameDetachedError: 1,
  kNoValidKeyCodesError: 2,
  kChildFrameError: 3,
  kRequestFailedError: 4,
};

// Enum: GetKeyboardLayoutMapStatus
blink.mojom.GetKeyboardLayoutMapStatus = {
  kSuccess: 0,
  kFail: 1,
  kDenied: 2,
};

// Interface: KeyboardLockService
blink.mojom.KeyboardLockServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.KeyboardLockServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.KeyboardLockService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.KeyboardLockServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.KeyboardLockServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.KeyboardLockServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestKeyboardLock(key_codes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.KeyboardLockService_RequestKeyboardLock_ParamsSpec.$,
      blink.mojom.KeyboardLockService_RequestKeyboardLock_ResponseParamsSpec.$,
      [key_codes]);
  }

  cancelKeyboardLock() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.KeyboardLockService_CancelKeyboardLock_ParamsSpec.$,
      null,
      []);
  }

  getKeyboardLayoutMap() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_ParamsSpec.$,
      blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_ResponseParamsSpec.$,
      []);
  }

};

blink.mojom.KeyboardLockService.getRemote = function() {
  let remote = new blink.mojom.KeyboardLockServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.KeyboardLockService',
    'context');
  return remote.$;
};

// ParamsSpec for RequestKeyboardLock
blink.mojom.KeyboardLockService_RequestKeyboardLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.KeyboardLockService.RequestKeyboardLock_Params',
      packedSize: 16,
      fields: [
        { name: 'key_codes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.KeyboardLockService_RequestKeyboardLock_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.KeyboardLockService.RequestKeyboardLock_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelKeyboardLock
blink.mojom.KeyboardLockService_CancelKeyboardLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.KeyboardLockService.CancelKeyboardLock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetKeyboardLayoutMap
blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.KeyboardLockService.GetKeyboardLayoutMap_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.KeyboardLockService.GetKeyboardLayoutMap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.KeyboardLockServicePtr = blink.mojom.KeyboardLockServiceRemote;
blink.mojom.KeyboardLockServiceRequest = blink.mojom.KeyboardLockServicePendingReceiver;

