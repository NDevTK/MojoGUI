// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/ime_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var gfx = gfx || {};

blink.mojom.EditorBoundsInfoSpec = { $: {} };
blink.mojom.TextAppearanceInfoSpec = { $: {} };
blink.mojom.InputCursorAnchorInfoSpec = { $: {} };
blink.mojom.ImeRenderWidgetHost = {};
blink.mojom.ImeRenderWidgetHost.$interfaceName = 'blink.mojom.ImeRenderWidgetHost';
blink.mojom.ImeRenderWidgetHost_UpdateCursorAnchorInfo_ParamsSpec = { $: {} };

// Struct: EditorBoundsInfo
mojo.internal.Struct(
    blink.mojom.EditorBoundsInfoSpec, 'blink.mojom.EditorBoundsInfo', [
      mojo.internal.StructField('editor_bounds', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handwriting_bounds', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextAppearanceInfo
mojo.internal.Struct(
    blink.mojom.TextAppearanceInfoSpec, 'blink.mojom.TextAppearanceInfo', [
      mojo.internal.StructField('text_color', 0, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: InputCursorAnchorInfo
mojo.internal.Struct(
    blink.mojom.InputCursorAnchorInfoSpec, 'blink.mojom.InputCursorAnchorInfo', [
      mojo.internal.StructField('character_bounds', 0, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('editor_bounds_info', 8, 0, blink.mojom.EditorBoundsInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_appearance_info', 16, 0, blink.mojom.TextAppearanceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_line_bounds', 24, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('insertion_marker', 32, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('requested', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: ImeRenderWidgetHost
mojo.internal.Struct(
    blink.mojom.ImeRenderWidgetHost_UpdateCursorAnchorInfo_ParamsSpec, 'blink.mojom.ImeRenderWidgetHost_UpdateCursorAnchorInfo_Params', [
      mojo.internal.StructField('cursor_anchor_info', 0, 0, blink.mojom.InputCursorAnchorInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [cursor_anchor_info],
      false);
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

blink.mojom.ImeRenderWidgetHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ImeRenderWidgetHost_UpdateCursorAnchorInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateCursorAnchorInfo(params.cursor_anchor_info);
          break;
        }
      }
    }});
  }
};

blink.mojom.ImeRenderWidgetHostReceiver = blink.mojom.ImeRenderWidgetHostReceiver;

blink.mojom.ImeRenderWidgetHostPtr = blink.mojom.ImeRenderWidgetHostRemote;
blink.mojom.ImeRenderWidgetHostRequest = blink.mojom.ImeRenderWidgetHostPendingReceiver;

