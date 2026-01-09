// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/render_frame_test_helper.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: RenderFrameTestHelper
content.mojom.RenderFrameTestHelper = {};

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
      []);
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

// ParamsSpec for GetDocumentToken
content.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RenderFrameTestHelper.GetDocumentToken_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.RenderFrameTestHelper_GetDocumentToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RenderFrameTestHelper.GetDocumentToken_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.RenderFrameTestHelperPtr = content.mojom.RenderFrameTestHelperRemote;
content.mojom.RenderFrameTestHelperRequest = content.mojom.RenderFrameTestHelperPendingReceiver;

