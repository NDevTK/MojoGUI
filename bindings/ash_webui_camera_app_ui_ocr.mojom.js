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
      packedSize: 48,
      fields: [
        { name: 'words', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'bounding_box', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'language', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'bounding_box_angle', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'confidence', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
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
      packedSize: 40,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'bounding_box', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'direction', packedOffset: 16, packedBitOffset: 0, type: ash.camera_app.mojom.WordDirectionSpec, nullable: false },
        { name: 'bounding_box_angle', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
