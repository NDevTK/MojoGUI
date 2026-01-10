// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/inner_html.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: InnerHtmlAgent
blink.mojom.mojom.InnerHtmlAgent = {};

blink.mojom.mojom.InnerHtmlAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.InnerHtmlAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.InnerHtmlAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.InnerHtmlAgentPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.InnerHtmlAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.InnerHtmlAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInnerHtml() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.InnerHtmlAgent_GetInnerHtml_ParamsSpec,
      blink.mojom.mojom.InnerHtmlAgent_GetInnerHtml_ResponseParamsSpec,
      []);
  }

};

blink.mojom.mojom.InnerHtmlAgent.getRemote = function() {
  let remote = new blink.mojom.mojom.InnerHtmlAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.InnerHtmlAgent',
    'context');
  return remote.$;
};

// ParamsSpec for GetInnerHtml
blink.mojom.mojom.InnerHtmlAgent_GetInnerHtml_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InnerHtmlAgent.GetInnerHtml_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.InnerHtmlAgent_GetInnerHtml_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InnerHtmlAgent.GetInnerHtml_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'inner_html', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.InnerHtmlAgentPtr = blink.mojom.mojom.InnerHtmlAgentRemote;
blink.mojom.mojom.InnerHtmlAgentRequest = blink.mojom.mojom.InnerHtmlAgentPendingReceiver;

