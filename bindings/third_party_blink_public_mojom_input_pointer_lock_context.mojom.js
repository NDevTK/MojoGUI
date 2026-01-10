// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/pointer_lock_context.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Interface: PointerLockContext
blink.mojom.mojom.PointerLockContext = {};

blink.mojom.mojom.PointerLockContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.PointerLockContextRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PointerLockContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.PointerLockContextPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.PointerLockContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.PointerLockContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestMouseLockChange(unadjusted_movement) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.PointerLockContext_RequestMouseLockChange_ParamsSpec,
      blink.mojom.mojom.PointerLockContext_RequestMouseLockChange_ResponseParamsSpec,
      [unadjusted_movement]);
  }

};

blink.mojom.mojom.PointerLockContext.getRemote = function() {
  let remote = new blink.mojom.mojom.PointerLockContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PointerLockContext',
    'context');
  return remote.$;
};

// ParamsSpec for RequestMouseLockChange
blink.mojom.mojom.PointerLockContext_RequestMouseLockChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PointerLockContext.RequestMouseLockChange_Params',
      packedSize: 16,
      fields: [
        { name: 'unadjusted_movement', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.PointerLockContext_RequestMouseLockChange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PointerLockContext.RequestMouseLockChange_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PointerLockResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.PointerLockContextPtr = blink.mojom.mojom.PointerLockContextRemote;
blink.mojom.mojom.PointerLockContextRequest = blink.mojom.mojom.PointerLockContextPendingReceiver;

