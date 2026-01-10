// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/keyboard_lock/keyboard_lock.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.KeyboardLockRequestResultSpec = { $: mojo.internal.Enum() };
blink.mojom.GetKeyboardLayoutMapStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.GetKeyboardLayoutMapResultSpec = { $: {} };
blink.mojom.KeyboardLockService = {};
blink.mojom.KeyboardLockService.$interfaceName = 'blink.mojom.KeyboardLockService';
blink.mojom.KeyboardLockService_RequestKeyboardLock_ParamsSpec = { $: {} };
blink.mojom.KeyboardLockService_RequestKeyboardLock_ResponseParamsSpec = { $: {} };
blink.mojom.KeyboardLockService_CancelKeyboardLock_ParamsSpec = { $: {} };
blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_ParamsSpec = { $: {} };
blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_ResponseParamsSpec = { $: {} };

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

// Struct: GetKeyboardLayoutMapResult
mojo.internal.Struct(
    blink.mojom.GetKeyboardLayoutMapResultSpec, 'blink.mojom.GetKeyboardLayoutMapResult', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.GetKeyboardLayoutMapStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('layout_map', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: KeyboardLockService
mojo.internal.Struct(
    blink.mojom.KeyboardLockService_RequestKeyboardLock_ParamsSpec, 'blink.mojom.KeyboardLockService_RequestKeyboardLock_Params', [
      mojo.internal.StructField('key_codes', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.KeyboardLockService_RequestKeyboardLock_ResponseParamsSpec, 'blink.mojom.KeyboardLockService_RequestKeyboardLock_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.KeyboardLockRequestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.KeyboardLockService_CancelKeyboardLock_ParamsSpec, 'blink.mojom.KeyboardLockService_CancelKeyboardLock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_ParamsSpec, 'blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_ResponseParamsSpec, 'blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.GetKeyboardLayoutMapResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      blink.mojom.KeyboardLockService_RequestKeyboardLock_ParamsSpec,
      blink.mojom.KeyboardLockService_RequestKeyboardLock_ResponseParamsSpec,
      [key_codes],
      false);
  }

  cancelKeyboardLock() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.KeyboardLockService_CancelKeyboardLock_ParamsSpec,
      null,
      [],
      false);
  }

  getKeyboardLayoutMap() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_ParamsSpec,
      blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_ResponseParamsSpec,
      [],
      false);
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

blink.mojom.KeyboardLockServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.KeyboardLockService_RequestKeyboardLock_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestKeyboardLock(params.key_codes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.KeyboardLockService_RequestKeyboardLock_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = blink.mojom.KeyboardLockService_CancelKeyboardLock_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelKeyboardLock();
          break;
        }
        case 2: {
          const params = blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getKeyboardLayoutMap();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.KeyboardLockService_GetKeyboardLayoutMap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

blink.mojom.KeyboardLockServiceReceiver = blink.mojom.KeyboardLockServiceReceiver;

blink.mojom.KeyboardLockServicePtr = blink.mojom.KeyboardLockServiceRemote;
blink.mojom.KeyboardLockServiceRequest = blink.mojom.KeyboardLockServicePendingReceiver;

