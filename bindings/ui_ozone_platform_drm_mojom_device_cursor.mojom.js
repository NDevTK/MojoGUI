// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/drm/mojom/device_cursor.mojom
// Module: ui.ozone.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: DeviceCursor
ui.ozone.mojom.DeviceCursor = {};

ui.ozone.mojom.DeviceCursor_SetCursor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DeviceCursor_SetCursor_Params',
      packedSize: 40,
      fields: [
        { name: 'window', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.AcceleratedWidgetSpec, nullable: false, minVersion: 0 },
        { name: 'bitmaps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(skia.mojom.BitmapN32Spec, false), nullable: false, minVersion: 0 },
        { name: 'point', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: true, minVersion: 0 },
        { name: 'frame_delay', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

ui.ozone.mojom.DeviceCursor_MoveCursor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DeviceCursor_MoveCursor_Params',
      packedSize: 24,
      fields: [
        { name: 'window', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.AcceleratedWidgetSpec, nullable: false, minVersion: 0 },
        { name: 'point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [window, bitmaps, point, frame_delay]);
  }

  moveCursor(window, point) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ui.ozone.mojom.DeviceCursor_MoveCursor_ParamsSpec,
      null,
      [window, point]);
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

// ParamsSpec for SetCursor
ui.ozone.mojom.DeviceCursor_SetCursor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DeviceCursor.SetCursor_Params',
      packedSize: 40,
      fields: [
        { name: 'window', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.AcceleratedWidgetSpec, nullable: false, minVersion: 0 },
        { name: 'bitmaps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(skia.mojom.BitmapN32Spec, false), nullable: false, minVersion: 0 },
        { name: 'point', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: true, minVersion: 0 },
        { name: 'frame_delay', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for MoveCursor
ui.ozone.mojom.DeviceCursor_MoveCursor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.DeviceCursor.MoveCursor_Params',
      packedSize: 24,
      fields: [
        { name: 'window', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.AcceleratedWidgetSpec, nullable: false, minVersion: 0 },
        { name: 'point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ui.ozone.mojom.DeviceCursorPtr = ui.ozone.mojom.DeviceCursorRemote;
ui.ozone.mojom.DeviceCursorRequest = ui.ozone.mojom.DeviceCursorPendingReceiver;

