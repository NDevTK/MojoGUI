// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/text.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


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
lens.mojom.TextSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Text',
      packedSize: 24,
      fields: [
        { name: 'text_layout', packedOffset: 0, packedBitOffset: 0, type: lens.mojom.TextLayoutSpec, nullable: true },
        { name: 'content_language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextLayout
lens.mojom.TextLayoutSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.TextLayout',
      packedSize: 16,
      fields: [
        { name: 'paragraphs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Word
lens.mojom.WordSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Word',
      packedSize: 48,
      fields: [
        { name: 'plain_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text_separator', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'geometry', packedOffset: 16, packedBitOffset: 0, type: lens.mojom.GeometrySpec, nullable: true },
        { name: 'writing_direction', packedOffset: 24, packedBitOffset: 0, type: lens.mojom.WritingDirectionSpec, nullable: true },
        { name: 'formula_metadata', packedOffset: 32, packedBitOffset: 0, type: lens.mojom.FormulaMetadataSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Line
lens.mojom.LineSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Line',
      packedSize: 24,
      fields: [
        { name: 'words', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'geometry', packedOffset: 8, packedBitOffset: 0, type: lens.mojom.GeometrySpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BackgroundImageData
lens.mojom.BackgroundImageDataSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.BackgroundImageData',
      packedSize: 40,
      fields: [
        { name: 'background_image', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
        { name: 'image_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'vertical_padding', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'horizontal_padding', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'text_mask', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TranslatedLine
lens.mojom.TranslatedLineSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.TranslatedLine',
      packedSize: 56,
      fields: [
        { name: 'words', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'translation', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text_color', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
        { name: 'background_primary_color', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false },
        { name: 'background_image_data', packedOffset: 32, packedBitOffset: 0, type: lens.mojom.BackgroundImageDataSpec, nullable: true },
        { name: 'geometry', packedOffset: 40, packedBitOffset: 0, type: lens.mojom.GeometrySpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TranslatedParagraph
lens.mojom.TranslatedParagraphSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.TranslatedParagraph',
      packedSize: 48,
      fields: [
        { name: 'lines', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'resized_bitmap_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'alignment', packedOffset: 16, packedBitOffset: 0, type: lens.mojom.AlignmentSpec, nullable: true },
        { name: 'writing_direction', packedOffset: 24, packedBitOffset: 0, type: lens.mojom.WritingDirectionSpec, nullable: true },
        { name: 'content_language', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Paragraph
lens.mojom.ParagraphSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Paragraph',
      packedSize: 48,
      fields: [
        { name: 'lines', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'translation', packedOffset: 8, packedBitOffset: 0, type: lens.mojom.TranslatedParagraphSpec, nullable: true },
        { name: 'geometry', packedOffset: 16, packedBitOffset: 0, type: lens.mojom.GeometrySpec, nullable: true },
        { name: 'writing_direction', packedOffset: 24, packedBitOffset: 0, type: lens.mojom.WritingDirectionSpec, nullable: true },
        { name: 'content_language', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FormulaMetadata
lens.mojom.FormulaMetadataSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.FormulaMetadata',
      packedSize: 16,
      fields: [
        { name: 'latex', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
