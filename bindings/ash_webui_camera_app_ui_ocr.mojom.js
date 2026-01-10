// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/ocr.mojom
// Module: ash.camera_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.camera_app = ash.camera_app || {};
ash.camera_app.mojom = ash.camera_app.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

ash.camera_app.mojom.WordDirectionSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.OcrResultSpec = { $: {} };
ash.camera_app.mojom.LineSpec = { $: {} };
ash.camera_app.mojom.WordSpec = { $: {} };

// Enum: WordDirection
ash.camera_app.mojom.WordDirection = {
  kLeftToRight: 0,
  kRightToLeft: 1,
};

// Struct: OcrResult
mojo.internal.Struct(
    ash.camera_app.mojom.OcrResultSpec, 'ash.camera_app.mojom.OcrResult', [
      mojo.internal.StructField('lines', 0, 0, mojo.internal.Array(ash.camera_app.mojom.LineSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Line
mojo.internal.Struct(
    ash.camera_app.mojom.LineSpec, 'ash.camera_app.mojom.Line', [
      mojo.internal.StructField('words', 0, 0, mojo.internal.Array(ash.camera_app.mojom.WordSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bounding_box', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('language', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bounding_box_angle', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('confidence', 36, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Word
mojo.internal.Struct(
    ash.camera_app.mojom.WordSpec, 'ash.camera_app.mojom.Word', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bounding_box', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('direction', 16, 0, ash.camera_app.mojom.WordDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounding_box_angle', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);
