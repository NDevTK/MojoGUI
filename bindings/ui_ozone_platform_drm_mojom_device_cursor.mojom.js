// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/drm/mojom/device_cursor.mojom
// Module: ui.ozone.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var gfx = gfx || {};

ui.ozone.mojom.DeviceCursor = {};
ui.ozone.mojom.DeviceCursor.$interfaceName = 'ui.ozone.mojom.DeviceCursor';
ui.ozone.mojom.DeviceCursor_SetCursor_ParamsSpec = { $: {} };
ui.ozone.mojom.DeviceCursor_MoveCursor_ParamsSpec = { $: {} };

// Interface: DeviceCursor
mojo.internal.Struct(
    ui.ozone.mojom.DeviceCursor_SetCursor_ParamsSpec, 'ui.ozone.mojom.DeviceCursor_SetCursor_Params', [
      mojo.internal.StructField('window', 0, 0, gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bitmaps', 8, 0, mojo.internal.Array(skia.mojom.BitmapN32Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('point', 16, 0, gfx.mojom.PointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('frame_delay', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ui.ozone.mojom.DeviceCursor_MoveCursor_ParamsSpec, 'ui.ozone.mojom.DeviceCursor_MoveCursor_Params', [
      mojo.internal.StructField('window', 0, 0, gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('point', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

ui.ozone.mojom.DeviceCursorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ui.ozone.mojom.DeviceCursorRemote = class {
  static get $interfaceName() {
    return 'ui.ozone.mojom.DeviceCursor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ui.ozone.mojom.DeviceCursorPendingReceiver,
      handle);
    this.$ = new ui.ozone.mojom.DeviceCursorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ui.ozone.mojom.DeviceCursorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setCursor(window, bitmaps, point, frame_delay) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ui.ozone.mojom.DeviceCursor_SetCursor_ParamsSpec,
      null,
      [window, bitmaps, point, frame_delay],
      false);
  }

  moveCursor(window, point) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ui.ozone.mojom.DeviceCursor_MoveCursor_ParamsSpec,
      null,
      [window, point],
      false);
  }

};

ui.ozone.mojom.DeviceCursor.getRemote = function() {
  let remote = new ui.ozone.mojom.DeviceCursorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.ozone.mojom.DeviceCursor',
    'context');
  return remote.$;
};

ui.ozone.mojom.DeviceCursorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: SetCursor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ui.ozone.mojom.DeviceCursor_SetCursor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCursor (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: MoveCursor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ui.ozone.mojom.DeviceCursor_MoveCursor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveCursor (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ui.ozone.mojom.DeviceCursor_SetCursor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCursor');
          const result = this.impl.setCursor(params.window, params.bitmaps, params.point, params.frame_delay);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.DeviceCursor_MoveCursor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.moveCursor');
          const result = this.impl.moveCursor(params.window, params.point);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ui.ozone.mojom.DeviceCursorReceiver = ui.ozone.mojom.DeviceCursorReceiver;

ui.ozone.mojom.DeviceCursorPtr = ui.ozone.mojom.DeviceCursorRemote;
ui.ozone.mojom.DeviceCursorRequest = ui.ozone.mojom.DeviceCursorPendingReceiver;

