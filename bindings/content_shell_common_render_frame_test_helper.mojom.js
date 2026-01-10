// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/render_frame_test_helper.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var blink = blink || {};

content.mojom.RenderFrameTestHelper = {};
content.mojom.RenderFrameTestHelper.$interfaceName = 'content.mojom.RenderFrameTestHelper';
content.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec = { $: {} };
content.mojom.RenderFrameTestHelper_GetDocumentToken_ResponseParamsSpec = { $: {} };

// Interface: RenderFrameTestHelper
mojo.internal.Struct(
    content.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec, 'content.mojom.RenderFrameTestHelper_GetDocumentToken_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.RenderFrameTestHelper_GetDocumentToken_ResponseParamsSpec, 'content.mojom.RenderFrameTestHelper_GetDocumentToken_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.RenderFrameTestHelperPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.RenderFrameTestHelperRemote = class {
  static get $interfaceName() {
    return 'content.mojom.RenderFrameTestHelper';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.RenderFrameTestHelperPendingReceiver,
      handle);
    this.$ = new content.mojom.RenderFrameTestHelperRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.RenderFrameTestHelperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDocumentToken() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec,
      content.mojom.RenderFrameTestHelper_GetDocumentToken_ResponseParamsSpec,
      [],
      false);
  }

};

content.mojom.RenderFrameTestHelper.getRemote = function() {
  let remote = new content.mojom.RenderFrameTestHelperRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.RenderFrameTestHelper',
    'context');
  return remote.$;
};

content.mojom.RenderFrameTestHelperReceiver = class {
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
        
        // Try Method 0: GetDocumentToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDocumentToken (0)');
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
          const params = decoder.decodeStruct(content.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDocumentToken');
          const result = this.impl.getDocumentToken();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.RenderFrameTestHelper_GetDocumentToken_ResponseParamsSpec);
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

content.mojom.RenderFrameTestHelperReceiver = content.mojom.RenderFrameTestHelperReceiver;

content.mojom.RenderFrameTestHelperPtr = content.mojom.RenderFrameTestHelperRemote;
content.mojom.RenderFrameTestHelperRequest = content.mojom.RenderFrameTestHelperPendingReceiver;

