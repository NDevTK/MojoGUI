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


// Enum: WritingDirection
lens.mojom.mojom.WritingDirection = {
  kLeftToRight: 0,
  kRightToLeft: 1,
  kTopToBottom: 2,
};
lens.mojom.mojom.WritingDirectionSpec = { $: mojo.internal.Enum() };

// Enum: Alignment
lens.mojom.mojom.Alignment = {
  kDefaultLeftAlgined: 0,
  kRightAligned: 1,
  kCenterAligned: 2,
};
lens.mojom.mojom.AlignmentSpec = { $: mojo.internal.Enum() };

// Struct: Text
lens.mojom.mojom.TextSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Text',
      packedSize: 24,
      fields: [
        { name: 'text_layout', packedOffset: 0, packedBitOffset: 0, type: lens.mojom.TextLayoutSpec, nullable: true, minVersion: 0 },
        { name: 'content_language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TextLayout
lens.mojom.mojom.TextLayoutSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.TextLayout',
      packedSize: 16,
      fields: [
        { name: 'paragraphs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(lens.mojom.ParagraphSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Word
lens.mojom.mojom.WordSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Word',
      packedSize: 48,
      fields: [
        { name: 'plain_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_separator', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'geometry', packedOffset: 16, packedBitOffset: 0, type: lens.mojom.GeometrySpec, nullable: true, minVersion: 0 },
        { name: 'writing_direction', packedOffset: 32, packedBitOffset: 0, type: lens.mojom.WritingDirectionSpec, nullable: true, minVersion: 0 },
        { name: 'formula_metadata', packedOffset: 24, packedBitOffset: 0, type: lens.mojom.FormulaMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: Line
lens.mojom.mojom.LineSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Line',
      packedSize: 24,
      fields: [
        { name: 'words', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(lens.mojom.WordSpec, false), nullable: false, minVersion: 0 },
        { name: 'geometry', packedOffset: 8, packedBitOffset: 0, type: lens.mojom.GeometrySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BackgroundImageData
lens.mojom.mojom.BackgroundImageDataSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.BackgroundImageData',
      packedSize: 56,
      fields: [
        { name: 'background_image', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
        { name: 'image_size', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'vertical_padding', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'horizontal_padding', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'text_mask', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: TranslatedLine
lens.mojom.mojom.TranslatedLineSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.TranslatedLine',
      packedSize: 56,
      fields: [
        { name: 'words', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(lens.mojom.WordSpec, false), nullable: false, minVersion: 0 },
        { name: 'translation', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_color', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'background_primary_color', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'background_image_data', packedOffset: 32, packedBitOffset: 0, type: lens.mojom.BackgroundImageDataSpec, nullable: true, minVersion: 0 },
        { name: 'geometry', packedOffset: 40, packedBitOffset: 0, type: lens.mojom.GeometrySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: TranslatedParagraph
lens.mojom.mojom.TranslatedParagraphSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.TranslatedParagraph',
      packedSize: 40,
      fields: [
        { name: 'lines', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(lens.mojom.TranslatedLineSpec, false), nullable: false, minVersion: 0 },
        { name: 'resized_bitmap_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'alignment', packedOffset: 24, packedBitOffset: 0, type: lens.mojom.AlignmentSpec, nullable: true, minVersion: 0 },
        { name: 'writing_direction', packedOffset: 28, packedBitOffset: 0, type: lens.mojom.WritingDirectionSpec, nullable: true, minVersion: 0 },
        { name: 'content_language', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Paragraph
lens.mojom.mojom.ParagraphSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Paragraph',
      packedSize: 48,
      fields: [
        { name: 'lines', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(lens.mojom.LineSpec, false), nullable: false, minVersion: 0 },
        { name: 'translation', packedOffset: 8, packedBitOffset: 0, type: lens.mojom.TranslatedParagraphSpec, nullable: true, minVersion: 0 },
        { name: 'geometry', packedOffset: 16, packedBitOffset: 0, type: lens.mojom.GeometrySpec, nullable: true, minVersion: 0 },
        { name: 'writing_direction', packedOffset: 32, packedBitOffset: 0, type: lens.mojom.WritingDirectionSpec, nullable: true, minVersion: 0 },
        { name: 'content_language', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: FormulaMetadata
lens.mojom.mojom.FormulaMetadataSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.FormulaMetadata',
      packedSize: 16,
      fields: [
        { name: 'latex', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
