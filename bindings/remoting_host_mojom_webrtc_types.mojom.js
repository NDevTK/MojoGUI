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

// Struct: DesktopCaptureOptions
remoting.mojom.DesktopCaptureOptionsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopCaptureOptions',
      packedSize: 24,
      fields: [
        { name: 'use_update_notifications', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'detect_updated_region', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_directx_capturer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'shared_buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'stride', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: remoting.mojom.DesktopSizeSpec, nullable: false },
        { name: 'dirty_region', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'capture_time_ms', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'dpi', packedOffset: 40, packedBitOffset: 0, type: remoting.mojom.DesktopVectorSpec, nullable: false },
        { name: 'capturer_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'left', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'top', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'right', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'bottom', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'x', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'y', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'image_size', packedOffset: 8, packedBitOffset: 0, type: remoting.mojom.DesktopSizeSpec, nullable: false },
        { name: 'image_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'hotspot', packedOffset: 24, packedBitOffset: 0, type: remoting.mojom.DesktopVectorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
