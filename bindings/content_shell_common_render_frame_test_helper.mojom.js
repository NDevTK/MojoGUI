// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/render_frame_test_helper.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var blink = blink || {};

content.mojom.RenderFrameTestHelper = {};
content.mojom.RenderFrameTestHelper.$interfaceName = 'content.mojom.RenderFrameTestHelper';
content.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec = { $: {} };
content.mojom.RenderFrameTestHelper_GetDocumentToken_ResponseParamsSpec = { $: {} };

// Interface: RenderFrameTestHelper
mojo.internal.Struct(
    content.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec, 'content.mojom.RenderFrameTestHelper_GetDocumentToken_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.RenderFrameTestHelper_GetDocumentToken_ResponseParamsSpec, 'content.mojom.RenderFrameTestHelper_GetDocumentToken_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.RenderFrameTestHelperPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.RenderFrameTestHelperRemote = class {
  static get $interfaceName() {
    return 'content.mojom.RenderFrameTestHelper';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.RenderFrameTestHelperPendingReceiver,
      handle);
    this.$ = new content.mojom.RenderFrameTestHelperRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDocumentToken() {
    return this.$.getDocumentToken();
  }
};

content.mojom.RenderFrameTestHelperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RenderFrameTestHelper', [
      { explicit: null },
    ]);
  }

  getDocumentToken() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec,
      content.mojom.RenderFrameTestHelper_GetDocumentToken_ResponseParamsSpec,
      [],
      false);
  }

};

content.mojom.RenderFrameTestHelper.getRemote = function() {
  let remote = new content.mojom.RenderFrameTestHelperRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.RenderFrameTestHelper',
    'context');
  return remote.$;
};

content.mojom.RenderFrameTestHelperReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RenderFrameTestHelper', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(content.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec.$.structSpec);
          const result = this.impl.getDocumentToken();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.RenderFrameTestHelper_GetDocumentToken_ResponseParamsSpec);
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

content.mojom.RenderFrameTestHelperReceiver = content.mojom.RenderFrameTestHelperReceiver;

content.mojom.RenderFrameTestHelperPtr = content.mojom.RenderFrameTestHelperRemote;
content.mojom.RenderFrameTestHelperRequest = content.mojom.RenderFrameTestHelperPendingReceiver;

