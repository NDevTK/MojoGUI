// Auto-generated MojoJS binding
// Source: chromium_src/components/webapps/common/web_page_metadata_agent.mojom
// Module: webapps.mojom

'use strict';

// Module namespace
var webapps = webapps || {};
webapps.mojom = webapps.mojom || {};


// Interface: WebPageMetadataAgent
webapps.mojom.WebPageMetadataAgent = {};

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
      []);
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

// ParamsSpec for GetWebPageMetadata
webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webapps.mojom.WebPageMetadataAgent.GetWebPageMetadata_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

webapps.mojom.WebPageMetadataAgent_GetWebPageMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webapps.mojom.WebPageMetadataAgent.GetWebPageMetadata_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'web_page_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
webapps.mojom.WebPageMetadataAgentPtr = webapps.mojom.WebPageMetadataAgentRemote;
webapps.mojom.WebPageMetadataAgentRequest = webapps.mojom.WebPageMetadataAgentPendingReceiver;

