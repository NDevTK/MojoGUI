// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/main_frame_counter_test.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.MainFrameCounterTest = {};
content.mojom.MainFrameCounterTest.$interfaceName = 'content.mojom.MainFrameCounterTest';
content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec = { $: {} };
content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParamsSpec = { $: {} };

// Interface: MainFrameCounterTest
mojo.internal.Struct(
    content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec, 'content.mojom.MainFrameCounterTest_HasMainFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParamsSpec, 'content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParams', [
      mojo.internal.StructField('has_main_frame', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.MainFrameCounterTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.MainFrameCounterTestRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MainFrameCounterTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.MainFrameCounterTestPendingReceiver,
      handle);
    this.$ = new content.mojom.MainFrameCounterTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.MainFrameCounterTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  hasMainFrame() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec,
      content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParamsSpec,
      [],
      false);
  }

};

content.mojom.MainFrameCounterTest.getRemote = function() {
  let remote = new content.mojom.MainFrameCounterTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MainFrameCounterTest',
    'context');
  return remote.$;
};

content.mojom.MainFrameCounterTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: HasMainFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasMainFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.MainFrameCounterTest_HasMainFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasMainFrame');
          const result = this.impl.hasMainFrame();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MainFrameCounterTest_HasMainFrame_ResponseParamsSpec);
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

content.mojom.MainFrameCounterTestReceiver = content.mojom.MainFrameCounterTestReceiver;

content.mojom.MainFrameCounterTestPtr = content.mojom.MainFrameCounterTestRemote;
content.mojom.MainFrameCounterTestRequest = content.mojom.MainFrameCounterTestPendingReceiver;

