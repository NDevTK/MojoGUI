// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/emoji/tenor_types.mojom
// Module: tenor.mojom

'use strict';

// Module namespace
var tenor = tenor || {};
tenor.mojom = tenor.mojom || {};
var url = url || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: Status
tenor.mojom.Status = {
  kHttpOk: 0,
  kNetError: 1,
  kHttpError: 2,
};
tenor.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Struct: GifUrls
tenor.mojom.GifUrlsSpec = {
  $: {
    structSpec: {
      name: 'tenor.mojom.GifUrls',
      packedSize: 32,
      fields: [
        { name: 'full', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'preview', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'preview_image', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: GifResponse
tenor.mojom.GifResponseSpec = {
  $: {
    structSpec: {
      name: 'tenor.mojom.GifResponse',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'content_description', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: tenor.mojom.GifUrlsSpec, nullable: false, minVersion: 0 },
        { name: 'preview_size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'full_size', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: PaginatedGifResponses
tenor.mojom.PaginatedGifResponsesSpec = {
  $: {
    structSpec: {
      name: 'tenor.mojom.PaginatedGifResponses',
      packedSize: 24,
      fields: [
        { name: 'next', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(tenor.mojom.GifResponseSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
