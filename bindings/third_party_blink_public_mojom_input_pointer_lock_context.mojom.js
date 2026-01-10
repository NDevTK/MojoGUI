// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/pointer_lock_context.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};

blink.mojom.PointerLockContext = {};
blink.mojom.PointerLockContext.$interfaceName = 'blink.mojom.PointerLockContext';
blink.mojom.PointerLockContext_RequestMouseLockChange_ParamsSpec = { $: {} };
blink.mojom.PointerLockContext_RequestMouseLockChange_ResponseParamsSpec = { $: {} };

// Interface: PointerLockContext
mojo.internal.Struct(
    blink.mojom.PointerLockContext_RequestMouseLockChange_ParamsSpec, 'blink.mojom.PointerLockContext_RequestMouseLockChange_Params', [
      mojo.internal.StructField('unadjusted_movement', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PointerLockContext_RequestMouseLockChange_ResponseParamsSpec, 'blink.mojom.PointerLockContext_RequestMouseLockChange_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.PointerLockResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.PointerLockContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PointerLockContextRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PointerLockContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PointerLockContextPendingReceiver,
      handle);
    this.$ = new blink.mojom.PointerLockContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PointerLockContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestMouseLockChange(unadjusted_movement) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PointerLockContext_RequestMouseLockChange_ParamsSpec,
      blink.mojom.PointerLockContext_RequestMouseLockChange_ResponseParamsSpec,
      [unadjusted_movement]);
  }

};

blink.mojom.PointerLockContext.getRemote = function() {
  let remote = new blink.mojom.PointerLockContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PointerLockContext',
    'context');
  return remote.$;
};

blink.mojom.PointerLockContextPtr = blink.mojom.PointerLockContextRemote;
blink.mojom.PointerLockContextRequest = blink.mojom.PointerLockContextPendingReceiver;

