// Auto-generated MojoJS binding
// Source: chromium_src/components/webapps/common/web_page_metadata_agent.mojom
// Module: webapps.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  getWebPageMetadata() {
    return this.$.getWebPageMetadata();
  }
};

webapps.mojom.WebPageMetadataAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebPageMetadataAgent', [
      { explicit: null },
    ]);
  }

  getWebPageMetadata() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('WebPageMetadataAgent', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
  }
};

webapps.mojom.WebPageMetadataAgentReceiver = webapps.mojom.WebPageMetadataAgentReceiver;

webapps.mojom.WebPageMetadataAgentPtr = webapps.mojom.WebPageMetadataAgentRemote;
webapps.mojom.WebPageMetadataAgentRequest = webapps.mojom.WebPageMetadataAgentPendingReceiver;

