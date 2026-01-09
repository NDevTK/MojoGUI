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
      packedSize: 16,
      fields: [
        { name: 'content_language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'formula_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'geometry', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'text_mask', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'geometry', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'content_language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'content_language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
