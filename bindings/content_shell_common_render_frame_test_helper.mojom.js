// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/render_frame_test_helper.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var blink = blink || {};
var blink = blink || {};


// Interface: RenderFrameTestHelper
content.mojom.mojom.RenderFrameTestHelper = {};

content.mojom.mojom.RenderFrameTestHelperPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.RenderFrameTestHelperRemote = class {
  static get $interfaceName() {
    return 'content.mojom.RenderFrameTestHelper';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.RenderFrameTestHelperPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.RenderFrameTestHelperRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.RenderFrameTestHelperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDocumentToken() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec,
      content.mojom.mojom.RenderFrameTestHelper_GetDocumentToken_ResponseParamsSpec,
      []);
  }

};

content.mojom.mojom.RenderFrameTestHelper.getRemote = function() {
  let remote = new content.mojom.mojom.RenderFrameTestHelperRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.RenderFrameTestHelper',
    'context');
  return remote.$;
};

// ParamsSpec for GetDocumentToken
content.mojom.mojom.RenderFrameTestHelper_GetDocumentToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RenderFrameTestHelper.GetDocumentToken_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.mojom.mojom.RenderFrameTestHelper_GetDocumentToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RenderFrameTestHelper.GetDocumentToken_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.RenderFrameTestHelperPtr = content.mojom.mojom.RenderFrameTestHelperRemote;
content.mojom.mojom.RenderFrameTestHelperRequest = content.mojom.mojom.RenderFrameTestHelperPendingReceiver;

