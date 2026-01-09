// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/inner_html.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: InnerHtmlAgent
blink.mojom.InnerHtmlAgent = {};

blink.mojom.InnerHtmlAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.InnerHtmlAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.InnerHtmlAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.InnerHtmlAgentPendingReceiver,
      handle);
    this.$ = new blink.mojom.InnerHtmlAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.InnerHtmlAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInnerHtml() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.InnerHtmlAgent_GetInnerHtml_ParamsSpec,
      blink.mojom.InnerHtmlAgent_GetInnerHtml_ResponseParamsSpec,
      []);
  }

};

blink.mojom.InnerHtmlAgent.getRemote = function() {
  let remote = new blink.mojom.InnerHtmlAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.InnerHtmlAgent',
    'context');
  return remote.$;
};

// ParamsSpec for GetInnerHtml
blink.mojom.InnerHtmlAgent_GetInnerHtml_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InnerHtmlAgent.GetInnerHtml_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.InnerHtmlAgent_GetInnerHtml_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InnerHtmlAgent.GetInnerHtml_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'inner_html', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.InnerHtmlAgentPtr = blink.mojom.InnerHtmlAgentRemote;
blink.mojom.InnerHtmlAgentRequest = blink.mojom.InnerHtmlAgentPendingReceiver;

