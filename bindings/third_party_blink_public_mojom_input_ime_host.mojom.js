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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: UpdateCursorAnchorInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ImeRenderWidgetHost_UpdateCursorAnchorInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateCursorAnchorInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ImeRenderWidgetHost_UpdateCursorAnchorInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateCursorAnchorInfo');
          const result = this.impl.updateCursorAnchorInfo(params.cursor_anchor_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ImeRenderWidgetHostReceiver = blink.mojom.ImeRenderWidgetHostReceiver;

blink.mojom.ImeRenderWidgetHostPtr = blink.mojom.ImeRenderWidgetHostRemote;
blink.mojom.ImeRenderWidgetHostRequest = blink.mojom.ImeRenderWidgetHostPendingReceiver;

