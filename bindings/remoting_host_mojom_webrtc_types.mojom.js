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
      packedSize: 16,
      fields: [
        { name: 'allow_directx_capturer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'capturer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'bottom', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'y', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'hotspot', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
