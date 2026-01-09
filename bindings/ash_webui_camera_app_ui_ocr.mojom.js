// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/ocr.mojom
// Module: ash.camera_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.camera_app = ash.camera_app || {};
ash.camera_app.mojom = ash.camera_app.mojom || {};


// Enum: WordDirection
ash.camera_app.mojom.WordDirection = {
  kLeftToRight: 0,
  kRightToLeft: 1,
};

// Struct: OcrResult
ash.camera_app.mojom.OcrResultSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.OcrResult',
      packedSize: 16,
      fields: [
        { name: 'lines', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Line
ash.camera_app.mojom.LineSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.Line',
      packedSize: 16,
      fields: [
        { name: 'confidence', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Word
ash.camera_app.mojom.WordSpec = {
  $: {
    structSpec: {
      name: 'ash.camera_app.mojom.Word',
      packedSize: 16,
      fields: [
        { name: 'direction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
