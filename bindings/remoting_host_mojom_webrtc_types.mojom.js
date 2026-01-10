// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/webrtc_types.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};

remoting.mojom.DesktopCaptureResultSpec = { $: mojo.internal.Enum() };
remoting.mojom.DesktopCaptureOptionsSpec = { $: {} };
remoting.mojom.DesktopFrameSpec = { $: {} };
remoting.mojom.DesktopRectSpec = { $: {} };
remoting.mojom.DesktopSizeSpec = { $: {} };
remoting.mojom.DesktopVectorSpec = { $: {} };
remoting.mojom.MouseCursorSpec = { $: {} };

// Enum: DesktopCaptureResult
remoting.mojom.DesktopCaptureResult = {
  kSuccess: 0,
  kErrorTemporary: 1,
  kErrorPermanent: 2,
};

// Struct: DesktopCaptureOptions
mojo.internal.Struct(
    remoting.mojom.DesktopCaptureOptionsSpec, 'remoting.mojom.DesktopCaptureOptions', [
      mojo.internal.StructField('use_update_notifications', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('detect_updated_region', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_directx_capturer', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DesktopFrame
mojo.internal.Struct(
    remoting.mojom.DesktopFrameSpec, 'remoting.mojom.DesktopFrame', [
      mojo.internal.StructField('shared_buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('stride', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, remoting.mojom.DesktopSizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('dirty_region', 16, 0, mojo.internal.Array(remoting.mojom.DesktopRectSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('capture_time_ms', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('dpi', 32, 0, remoting.mojom.DesktopVectorSpec, null, false, 0, undefined),
      mojo.internal.StructField('capturer_id', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: DesktopRect
mojo.internal.Struct(
    remoting.mojom.DesktopRectSpec, 'remoting.mojom.DesktopRect', [
      mojo.internal.StructField('left', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('top', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('right', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bottom', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DesktopSize
mojo.internal.Struct(
    remoting.mojom.DesktopSizeSpec, 'remoting.mojom.DesktopSize', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DesktopVector
mojo.internal.Struct(
    remoting.mojom.DesktopVectorSpec, 'remoting.mojom.DesktopVector', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MouseCursor
mojo.internal.Struct(
    remoting.mojom.MouseCursorSpec, 'remoting.mojom.MouseCursor', [
      mojo.internal.StructField('image_size', 0, 0, remoting.mojom.DesktopSizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('image_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('hotspot', 16, 0, remoting.mojom.DesktopVectorSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);
