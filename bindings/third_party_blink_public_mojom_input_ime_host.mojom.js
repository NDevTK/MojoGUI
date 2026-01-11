// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/ime_host.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  updateCursorAnchorInfo(cursor_anchor_info) {
    return this.$.updateCursorAnchorInfo(cursor_anchor_info);
  }
};

blink.mojom.ImeRenderWidgetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImeRenderWidgetHost', [
      { explicit: null },
    ]);
  }

  updateCursorAnchorInfo(cursor_anchor_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImeRenderWidgetHost', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ImeRenderWidgetHost_UpdateCursorAnchorInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ImeRenderWidgetHost_UpdateCursorAnchorInfo_ParamsSpec.$.structSpec);
          const result = this.impl.updateCursorAnchorInfo(params.cursor_anchor_info);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ImeRenderWidgetHostReceiver = blink.mojom.ImeRenderWidgetHostReceiver;

blink.mojom.ImeRenderWidgetHostPtr = blink.mojom.ImeRenderWidgetHostRemote;
blink.mojom.ImeRenderWidgetHostRequest = blink.mojom.ImeRenderWidgetHostPendingReceiver;

