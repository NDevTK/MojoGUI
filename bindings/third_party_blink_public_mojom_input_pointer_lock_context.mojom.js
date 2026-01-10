// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/pointer_lock_context.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

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
      mojo.internal.StructField('result', 0, 0, blink.mojom.PointerLockResultSpec.$, null, false, 0, undefined),
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
      [unadjusted_movement],
      false);
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

blink.mojom.PointerLockContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.PointerLockContext_RequestMouseLockChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestMouseLockChange(params.unadjusted_movement);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PointerLockContext_RequestMouseLockChange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

blink.mojom.PointerLockContextReceiver = blink.mojom.PointerLockContextReceiver;

blink.mojom.PointerLockContextPtr = blink.mojom.PointerLockContextRemote;
blink.mojom.PointerLockContextRequest = blink.mojom.PointerLockContextPendingReceiver;

