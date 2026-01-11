// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/call_stack_generator/call_stack_generator.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.CallStackGenerator = {};
blink.mojom.CallStackGenerator.$interfaceName = 'blink.mojom.CallStackGenerator';
blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ParamsSpec = { $: {} };
blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ResponseParamsSpec = { $: {} };

// Interface: CallStackGenerator
mojo.internal.Struct(
    blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ParamsSpec, 'blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ResponseParamsSpec, 'blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ResponseParams', [
      mojo.internal.StructField('javascript_call_stack', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frame_token', 8, 0, blink.mojom.LocalFrameTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.CallStackGeneratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.CallStackGeneratorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CallStackGenerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.CallStackGeneratorPendingReceiver,
      handle);
    this.$ = new blink.mojom.CallStackGeneratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  collectJavaScriptCallStack() {
    return this.$.collectJavaScriptCallStack();
  }
};

blink.mojom.CallStackGeneratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CallStackGenerator', [
      { explicit: null },
    ]);
  }

  collectJavaScriptCallStack() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ParamsSpec,
      blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.CallStackGenerator.getRemote = function() {
  let remote = new blink.mojom.CallStackGeneratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CallStackGenerator',
    'context');
  return remote.$;
};

blink.mojom.CallStackGeneratorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CallStackGenerator', [
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
             decoder.decodeStructInline(blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ParamsSpec.$.structSpec);
          const result = this.impl.collectJavaScriptCallStack();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ResponseParamsSpec);
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

blink.mojom.CallStackGeneratorReceiver = blink.mojom.CallStackGeneratorReceiver;

blink.mojom.CallStackGeneratorPtr = blink.mojom.CallStackGeneratorRemote;
blink.mojom.CallStackGeneratorRequest = blink.mojom.CallStackGeneratorPendingReceiver;

