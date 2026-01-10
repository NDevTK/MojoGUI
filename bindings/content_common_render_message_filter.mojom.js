// Auto-generated MojoJS binding
// Source: chromium_src/content/common/render_message_filter.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var mojo_base = mojo_base || {};
var blink = blink || {};

content.mojom.FrameRoutingInfoSpec = { $: {} };
content.mojom.RenderMessageFilter = {};
content.mojom.RenderMessageFilter.$interfaceName = 'content.mojom.RenderMessageFilter';
content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ParamsSpec = { $: {} };
content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ResponseParamsSpec = { $: {} };
content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ParamsSpec = { $: {} };
content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParamsSpec = { $: {} };

// Struct: FrameRoutingInfo
mojo.internal.Struct(
    content.mojom.FrameRoutingInfoSpec, 'content.mojom.FrameRoutingInfo', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_frame_token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_token', 16, 0, blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('routing_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: RenderMessageFilter
mojo.internal.Struct(
    content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ParamsSpec, 'content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ResponseParamsSpec, 'content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, content.mojom.FrameRoutingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ParamsSpec, 'content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParamsSpec, 'content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParams', [
      mojo.internal.StructField('info_array', 0, 0, mojo.internal.Array(content.mojom.FrameRoutingInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.RenderMessageFilterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.RenderMessageFilterRemote = class {
  static get $interfaceName() {
    return 'content.mojom.RenderMessageFilter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.RenderMessageFilterPendingReceiver,
      handle);
    this.$ = new content.mojom.RenderMessageFilterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.RenderMessageFilterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  generateSingleFrameRoutingInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ParamsSpec,
      content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ResponseParamsSpec,
      [],
      false);
  }

  generateFrameRoutingInfos() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ParamsSpec,
      content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParamsSpec,
      [],
      false);
  }

};

content.mojom.RenderMessageFilter.getRemote = function() {
  let remote = new content.mojom.RenderMessageFilterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.RenderMessageFilter',
    'context');
  return remote.$;
};

content.mojom.RenderMessageFilterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GenerateSingleFrameRoutingInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateSingleFrameRoutingInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GenerateFrameRoutingInfos
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateFrameRoutingInfos (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.generateSingleFrameRoutingInfo');
          const result = this.impl.generateSingleFrameRoutingInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.RenderMessageFilter_GenerateSingleFrameRoutingInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.generateFrameRoutingInfos');
          const result = this.impl.generateFrameRoutingInfos();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.RenderMessageFilter_GenerateFrameRoutingInfos_ResponseParamsSpec);
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

content.mojom.RenderMessageFilterReceiver = content.mojom.RenderMessageFilterReceiver;

content.mojom.RenderMessageFilterPtr = content.mojom.RenderMessageFilterRemote;
content.mojom.RenderMessageFilterRequest = content.mojom.RenderMessageFilterPendingReceiver;

