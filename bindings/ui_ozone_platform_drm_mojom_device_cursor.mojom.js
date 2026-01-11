// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/drm/mojom/device_cursor.mojom
// Module: ui.ozone.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  setCursor(window, bitmaps, point, frame_delay) {
    return this.$.setCursor(window, bitmaps, point, frame_delay);
  }
  moveCursor(window, point) {
    return this.$.moveCursor(window, point);
  }
};

ui.ozone.mojom.DeviceCursorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceCursor', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setCursor(window, bitmaps, point, frame_delay) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ui.ozone.mojom.DeviceCursor_SetCursor_ParamsSpec,
      null,
      [window, bitmaps, point, frame_delay],
      false);
  }

  moveCursor(window, point) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DeviceCursor', [
      { explicit: null },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DeviceCursor_SetCursor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DeviceCursor_MoveCursor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DeviceCursor_SetCursor_ParamsSpec.$.structSpec);
          const result = this.impl.setCursor(params.window, params.bitmaps, params.point, params.frame_delay);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DeviceCursor_MoveCursor_ParamsSpec.$.structSpec);
          const result = this.impl.moveCursor(params.window, params.point);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ui.ozone.mojom.DeviceCursorReceiver = ui.ozone.mojom.DeviceCursorReceiver;

ui.ozone.mojom.DeviceCursorPtr = ui.ozone.mojom.DeviceCursorRemote;
ui.ozone.mojom.DeviceCursorRequest = ui.ozone.mojom.DeviceCursorPendingReceiver;

