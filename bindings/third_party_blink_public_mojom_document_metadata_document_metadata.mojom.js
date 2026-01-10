// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/document_metadata/document_metadata.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var schema_org = schema_org || {};
var url = url || {};

blink.mojom.WebPageSpec = { $: {} };
blink.mojom.DocumentMetadata = {};
blink.mojom.DocumentMetadata.$interfaceName = 'blink.mojom.DocumentMetadata';
blink.mojom.DocumentMetadata_GetEntities_ParamsSpec = { $: {} };
blink.mojom.DocumentMetadata_GetEntities_ResponseParamsSpec = { $: {} };

// Struct: WebPage
mojo.internal.Struct(
    blink.mojom.WebPageSpec, 'blink.mojom.WebPage', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('entities', 16, 0, mojo.internal.Array(schema_org.mojom.EntitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: DocumentMetadata
mojo.internal.Struct(
    blink.mojom.DocumentMetadata_GetEntities_ParamsSpec, 'blink.mojom.DocumentMetadata_GetEntities_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DocumentMetadata_GetEntities_ResponseParamsSpec, 'blink.mojom.DocumentMetadata_GetEntities_ResponseParams', [
      mojo.internal.StructField('page', 0, 0, blink.mojom.WebPageSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.DocumentMetadataPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DocumentMetadataRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DocumentMetadata';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DocumentMetadataPendingReceiver,
      handle);
    this.$ = new blink.mojom.DocumentMetadataRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DocumentMetadataRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getEntities() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DocumentMetadata_GetEntities_ParamsSpec,
      blink.mojom.DocumentMetadata_GetEntities_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.DocumentMetadata.getRemote = function() {
  let remote = new blink.mojom.DocumentMetadataRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DocumentMetadata',
    'context');
  return remote.$;
};

blink.mojom.DocumentMetadataReceiver = class {
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
        
        // Try Method 0: GetEntities
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DocumentMetadata_GetEntities_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEntities (0)');
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
          const params = decoder.decodeStruct(blink.mojom.DocumentMetadata_GetEntities_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getEntities');
          const result = this.impl.getEntities();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DocumentMetadata_GetEntities_ResponseParamsSpec);
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

blink.mojom.DocumentMetadataReceiver = blink.mojom.DocumentMetadataReceiver;

blink.mojom.DocumentMetadataPtr = blink.mojom.DocumentMetadataRemote;
blink.mojom.DocumentMetadataRequest = blink.mojom.DocumentMetadataPendingReceiver;

