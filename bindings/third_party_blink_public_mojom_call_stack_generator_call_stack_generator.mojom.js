// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/call_stack_generator/call_stack_generator.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.CallStackGeneratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  collectJavaScriptCallStack() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.CallStackGenerator_CollectJavaScriptCallStack_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.collectJavaScriptCallStack');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.CallStackGeneratorReceiver = blink.mojom.CallStackGeneratorReceiver;

blink.mojom.CallStackGeneratorPtr = blink.mojom.CallStackGeneratorRemote;
blink.mojom.CallStackGeneratorRequest = blink.mojom.CallStackGeneratorPendingReceiver;

