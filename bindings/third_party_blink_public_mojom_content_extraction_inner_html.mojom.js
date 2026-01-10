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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.InnerHtmlAgent',
    'context');
  return remote.$;
};

blink.mojom.InnerHtmlAgentReceiver = class {
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
          const params = blink.mojom.InnerHtmlAgent_GetInnerHtml_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getInnerHtml();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.InnerHtmlAgent_GetInnerHtml_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

blink.mojom.InnerHtmlAgentReceiver = blink.mojom.InnerHtmlAgentReceiver;

blink.mojom.InnerHtmlAgentPtr = blink.mojom.InnerHtmlAgentRemote;
blink.mojom.InnerHtmlAgentRequest = blink.mojom.InnerHtmlAgentPendingReceiver;

