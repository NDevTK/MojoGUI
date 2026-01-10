// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/text.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var skia = skia || {};

lens.mojom.WritingDirectionSpec = { $: mojo.internal.Enum() };
lens.mojom.AlignmentSpec = { $: mojo.internal.Enum() };
lens.mojom.TextSpec = { $: {} };
lens.mojom.TextLayoutSpec = { $: {} };
lens.mojom.WordSpec = { $: {} };
lens.mojom.LineSpec = { $: {} };
lens.mojom.BackgroundImageDataSpec = { $: {} };
lens.mojom.TranslatedLineSpec = { $: {} };
lens.mojom.TranslatedParagraphSpec = { $: {} };
lens.mojom.ParagraphSpec = { $: {} };
lens.mojom.FormulaMetadataSpec = { $: {} };

// Enum: WritingDirection
lens.mojom.WritingDirection = {
  kLeftToRight: 0,
  kRightToLeft: 1,
  kTopToBottom: 2,
};

// Enum: Alignment
lens.mojom.Alignment = {
  kDefaultLeftAlgined: 0,
  kRightAligned: 1,
  kCenterAligned: 2,
};

// Struct: Text
mojo.internal.Struct(
    lens.mojom.TextSpec, 'lens.mojom.Text', [
      mojo.internal.StructField('text_layout', 0, 0, lens.mojom.TextLayoutSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('content_language', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextLayout
mojo.internal.Struct(
    lens.mojom.TextLayoutSpec, 'lens.mojom.TextLayout', [
      mojo.internal.StructField('paragraphs', 0, 0, mojo.internal.Array(lens.mojom.ParagraphSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Word
mojo.internal.Struct(
    lens.mojom.WordSpec, 'lens.mojom.Word', [
      mojo.internal.StructField('plain_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_separator', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('geometry', 16, 0, lens.mojom.GeometrySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('writing_direction', 24, 0, lens.mojom.WritingDirectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('formula_metadata', 32, 0, lens.mojom.FormulaMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Line
mojo.internal.Struct(
    lens.mojom.LineSpec, 'lens.mojom.Line', [
      mojo.internal.StructField('words', 0, 0, mojo.internal.Array(lens.mojom.WordSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('geometry', 8, 0, lens.mojom.GeometrySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BackgroundImageData
mojo.internal.Struct(
    lens.mojom.BackgroundImageDataSpec, 'lens.mojom.BackgroundImageData', [
      mojo.internal.StructField('background_image', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_mask', 16, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('vertical_padding', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('horizontal_padding', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TranslatedLine
mojo.internal.Struct(
    lens.mojom.TranslatedLineSpec, 'lens.mojom.TranslatedLine', [
      mojo.internal.StructField('words', 0, 0, mojo.internal.Array(lens.mojom.WordSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('translation', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_color', 16, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('background_primary_color', 24, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('background_image_data', 32, 0, lens.mojom.BackgroundImageDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('geometry', 40, 0, lens.mojom.GeometrySpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TranslatedParagraph
mojo.internal.Struct(
    lens.mojom.TranslatedParagraphSpec, 'lens.mojom.TranslatedParagraph', [
      mojo.internal.StructField('lines', 0, 0, mojo.internal.Array(lens.mojom.TranslatedLineSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('resized_bitmap_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alignment', 16, 0, lens.mojom.AlignmentSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('writing_direction', 24, 0, lens.mojom.WritingDirectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('content_language', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Paragraph
mojo.internal.Struct(
    lens.mojom.ParagraphSpec, 'lens.mojom.Paragraph', [
      mojo.internal.StructField('lines', 0, 0, mojo.internal.Array(lens.mojom.LineSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('translation', 8, 0, lens.mojom.TranslatedParagraphSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('geometry', 16, 0, lens.mojom.GeometrySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('writing_direction', 24, 0, lens.mojom.WritingDirectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('content_language', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: FormulaMetadata
mojo.internal.Struct(
    lens.mojom.FormulaMetadataSpec, 'lens.mojom.FormulaMetadata', [
      mojo.internal.StructField('latex', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);
