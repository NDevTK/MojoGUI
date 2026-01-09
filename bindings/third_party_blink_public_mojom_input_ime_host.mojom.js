// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/ime_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: EditorBoundsInfo
blink.mojom.EditorBoundsInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EditorBoundsInfo',
      packedSize: 24,
      fields: [
        { name: 'editor_bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'handwriting_bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextAppearanceInfo
blink.mojom.TextAppearanceInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextAppearanceInfo',
      packedSize: 16,
      fields: [
        { name: 'text_color', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InputCursorAnchorInfo
blink.mojom.InputCursorAnchorInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InputCursorAnchorInfo',
      packedSize: 56,
      fields: [
        { name: 'character_bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'editor_bounds_info', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.EditorBoundsInfoSpec, nullable: false },
        { name: 'text_appearance_info', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.TextAppearanceInfoSpec, nullable: false },
        { name: 'visible_line_bounds', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'insertion_marker', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true },
        { name: 'requested', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ImeRenderWidgetHost
blink.mojom.ImeRenderWidgetHost = {};

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
      blink.mojom.ImeRenderWidgetHost_UpdateCursorAnchorInfo_ParamsSpec,
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
};

// ParamsSpec for UpdateCursorAnchorInfo
blink.mojom.ImeRenderWidgetHost_UpdateCursorAnchorInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ImeRenderWidgetHost.UpdateCursorAnchorInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'cursor_anchor_info', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.InputCursorAnchorInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ImeRenderWidgetHostPtr = blink.mojom.ImeRenderWidgetHostRemote;
blink.mojom.ImeRenderWidgetHostRequest = blink.mojom.ImeRenderWidgetHostPendingReceiver;

