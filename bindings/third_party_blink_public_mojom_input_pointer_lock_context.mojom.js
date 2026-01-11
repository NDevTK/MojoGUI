// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/pointer_lock_context.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  requestMouseLockChange(unadjusted_movement) {
    return this.$.requestMouseLockChange(unadjusted_movement);
  }
};

blink.mojom.PointerLockContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PointerLockContext', [
      { explicit: null },
    ]);
  }

  requestMouseLockChange(unadjusted_movement) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PointerLockContext', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PointerLockContext_RequestMouseLockChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PointerLockContext_RequestMouseLockChange_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

blink.mojom.PointerLockContextReceiver = blink.mojom.PointerLockContextReceiver;

blink.mojom.PointerLockContextPtr = blink.mojom.PointerLockContextRemote;
blink.mojom.PointerLockContextRequest = blink.mojom.PointerLockContextPendingReceiver;

