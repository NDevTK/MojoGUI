// Auto-generated MojoJS binding
// Source: chromium_src/components/webapps/common/web_page_metadata_agent.mojom
// Module: webapps.mojom

'use strict';

// Module namespace
var webapps = webapps || {};
webapps.mojom = webapps.mojom || {};

webapps.mojom.WebPageMetadataAgent = {};
webapps.mojom.WebPageMetadataAgent.$interfaceName = 'webapps.mojom.WebPageMetadataAgent';
webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ParamsSpec = { $: {} };
webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ResponseParamsSpec = { $: {} };

// Interface: WebPageMetadataAgent
mojo.internal.Struct(
    webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ParamsSpec, 'webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ResponseParamsSpec, 'webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ResponseParams', [
      mojo.internal.StructField('web_page_metadata', 0, 0, webapps.mojom.WebPageMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

webapps.mojom.WebPageMetadataAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webapps.mojom.WebPageMetadataAgentRemote = class {
  static get $interfaceName() {
    return 'webapps.mojom.WebPageMetadataAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webapps.mojom.WebPageMetadataAgentPendingReceiver,
      handle);
    this.$ = new webapps.mojom.WebPageMetadataAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webapps.mojom.WebPageMetadataAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWebPageMetadata() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ParamsSpec,
      webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ResponseParamsSpec,
      [],
      false);
  }

};

webapps.mojom.WebPageMetadataAgent.getRemote = function() {
  let remote = new webapps.mojom.WebPageMetadataAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webapps.mojom.WebPageMetadataAgent',
    'context');
  return remote.$;
};

webapps.mojom.WebPageMetadataAgentReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetWebPageMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWebPageMetadata (0)');
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
          const params = decoder.decodeStructInline(webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getWebPageMetadata');
          const result = this.impl.getWebPageMetadata();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ResponseParamsSpec);
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

webapps.mojom.WebPageMetadataAgentReceiver = webapps.mojom.WebPageMetadataAgentReceiver;

webapps.mojom.WebPageMetadataAgentPtr = webapps.mojom.WebPageMetadataAgentRemote;
webapps.mojom.WebPageMetadataAgentRequest = webapps.mojom.WebPageMetadataAgentPendingReceiver;

