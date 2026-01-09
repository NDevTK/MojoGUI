// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/ime_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ImeRenderWidgetHost
blink.mojom.ImeRenderWidgetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ImeRenderWidgetHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ImeRenderWidgetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ImeRenderWidgetHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.ImeRenderWidgetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ImeRenderWidgetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateCursorAnchorInfo(cursor_anchor_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ImeRenderWidgetHost_UpdateCursorAnchorInfo_ParamsSpec.$,
      null,
      [cursor_anchor_info]);
  }

};

blink.mojom.ImeRenderWidgetHost.getRemote = function() {
  let remote = new blink.mojom.ImeRenderWidgetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ImeRenderWidgetHost',
    'context');
  return remote.$;
}};

// ParamsSpec for UpdateCursorAnchorInfo
blink.mojom.ImeRenderWidgetHost_UpdateCursorAnchorInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ImeRenderWidgetHost.UpdateCursorAnchorInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'cursor_anchor_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
blink.mojom.ImeRenderWidgetHostPtr = blink.mojom.ImeRenderWidgetHostRemote;
blink.mojom.ImeRenderWidgetHostRequest = blink.mojom.ImeRenderWidgetHostPendingReceiver;

