// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/render_frame_test_helper.mojom
// Module: content.mojom

'use strict';

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
};

content.mojom.RenderFrameTestHelperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDocumentToken() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

content.mojom.RenderFrameTestHelperReceiver = content.mojom.RenderFrameTestHelperReceiver;

content.mojom.RenderFrameTestHelperPtr = content.mojom.RenderFrameTestHelperRemote;
content.mojom.RenderFrameTestHelperRequest = content.mojom.RenderFrameTestHelperPendingReceiver;

