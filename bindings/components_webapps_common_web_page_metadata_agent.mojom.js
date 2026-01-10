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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

webapps.mojom.WebPageMetadataAgentReceiver = webapps.mojom.WebPageMetadataAgentReceiver;

webapps.mojom.WebPageMetadataAgentPtr = webapps.mojom.WebPageMetadataAgentRemote;
webapps.mojom.WebPageMetadataAgentRequest = webapps.mojom.WebPageMetadataAgentPendingReceiver;

