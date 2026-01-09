// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/emoji/tenor_types.mojom
// Module: tenor.mojom

'use strict';

// Module namespace
var tenor = tenor || {};
tenor.mojom = tenor.mojom || {};


// Enum: Status
tenor.mojom.Status = {
  kHttpOk: 0,
  kNetError: 1,
  kHttpError: 2,
};

// Struct: GifUrls
tenor.mojom.GifUrlsSpec = {
  $: {
    structSpec: {
      name: 'tenor.mojom.GifUrls',
      packedSize: 16,
      fields: [
        { name: 'preview_image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GifResponse
tenor.mojom.GifResponseSpec = {
  $: {
    structSpec: {
      name: 'tenor.mojom.GifResponse',
      packedSize: 16,
      fields: [
        { name: 'full_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaginatedGifResponses
tenor.mojom.PaginatedGifResponsesSpec = {
  $: {
    structSpec: {
      name: 'tenor.mojom.PaginatedGifResponses',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
