// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/inner_html.mojom
// Module: blink.mojom

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
  getInnerHtml() {
    return this.$.getInnerHtml();
  }
};

blink.mojom.InnerHtmlAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InnerHtmlAgent', [
      { explicit: null },
    ]);
  }

  getInnerHtml() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InnerHtmlAgent', [
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
             decoder.decodeStructInline(blink.mojom.InnerHtmlAgent_GetInnerHtml_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.InnerHtmlAgent_GetInnerHtml_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

blink.mojom.InnerHtmlAgentReceiver = blink.mojom.InnerHtmlAgentReceiver;

blink.mojom.InnerHtmlAgentPtr = blink.mojom.InnerHtmlAgentRemote;
blink.mojom.InnerHtmlAgentRequest = blink.mojom.InnerHtmlAgentPendingReceiver;

