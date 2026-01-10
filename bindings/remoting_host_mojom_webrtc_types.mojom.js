// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/webrtc_types.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Enum: DesktopCaptureResult
remoting.mojom.DesktopCaptureResult = {
  kSuccess: 0,
  kErrorTemporary: 1,
  kErrorPermanent: 2,
};
remoting.mojom.DesktopCaptureResultSpec = { $: mojo.internal.Enum() };

// Struct: DesktopCaptureOptions
remoting.mojom.DesktopCaptureOptionsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopCaptureOptions',
      packedSize: 16,
      fields: [
        { name: 'use_update_notifications', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'detect_updated_region', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_directx_capturer', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DesktopFrame
remoting.mojom.DesktopFrameSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopFrame',
      packedSize: 56,
      fields: [
        { name: 'shared_buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'stride', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: remoting.mojom.DesktopSizeSpec, nullable: false, minVersion: 0 },
        { name: 'dirty_region', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(remoting.mojom.DesktopRectSpec, false), nullable: false, minVersion: 0 },
        { name: 'capture_time_ms', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'dpi', packedOffset: 32, packedBitOffset: 0, type: remoting.mojom.DesktopVectorSpec, nullable: false, minVersion: 0 },
        { name: 'capturer_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: DesktopRect
remoting.mojom.DesktopRectSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopRect',
      packedSize: 24,
      fields: [
        { name: 'left', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'top', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'right', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bottom', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DesktopSize
remoting.mojom.DesktopSizeSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSize',
      packedSize: 16,
      fields: [
        { name: 'width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DesktopVector
remoting.mojom.DesktopVectorSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopVector',
      packedSize: 16,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: MouseCursor
remoting.mojom.MouseCursorSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.MouseCursor',
      packedSize: 32,
      fields: [
        { name: 'image_size', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.DesktopSizeSpec, nullable: false, minVersion: 0 },
        { name: 'image_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'hotspot', packedOffset: 16, packedBitOffset: 0, type: remoting.mojom.DesktopVectorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
