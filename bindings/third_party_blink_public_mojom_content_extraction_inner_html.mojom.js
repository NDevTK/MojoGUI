// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/inner_html.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.InnerHtmlAgent = {};
blink.mojom.InnerHtmlAgent.$interfaceName = 'blink.mojom.InnerHtmlAgent';
blink.mojom.InnerHtmlAgent_GetInnerHtml_ParamsSpec = { $: {} };
blink.mojom.InnerHtmlAgent_GetInnerHtml_ResponseParamsSpec = { $: {} };

// Interface: InnerHtmlAgent
mojo.internal.Struct(
    blink.mojom.InnerHtmlAgent_GetInnerHtml_ParamsSpec, 'blink.mojom.InnerHtmlAgent_GetInnerHtml_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.InnerHtmlAgent_GetInnerHtml_ResponseParamsSpec, 'blink.mojom.InnerHtmlAgent_GetInnerHtml_ResponseParams', [
      mojo.internal.StructField('inner_html', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

};

blink.mojom.InnerHtmlAgent.getRemote = function() {
  let remote = new blink.mojom.InnerHtmlAgentRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.InnerHtmlAgent',
    'context');
  return remote.$;
};

blink.mojom.InnerHtmlAgentPtr = blink.mojom.InnerHtmlAgentRemote;
blink.mojom.InnerHtmlAgentRequest = blink.mojom.InnerHtmlAgentPendingReceiver;

