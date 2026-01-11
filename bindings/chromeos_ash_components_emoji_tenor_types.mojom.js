// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/emoji/tenor_types.mojom
// Module: tenor.mojom

// Module namespace
var tenor = tenor || {};
tenor.mojom = tenor.mojom || {};
var url = url || {};
var gfx = gfx || {};

tenor.mojom.StatusSpec = { $: mojo.internal.Enum() };
tenor.mojom.GifUrlsSpec = { $: {} };
tenor.mojom.GifResponseSpec = { $: {} };
tenor.mojom.PaginatedGifResponsesSpec = { $: {} };

// Enum: Status
tenor.mojom.Status = {
  kHttpOk: 0,
  kNetError: 1,
  kHttpError: 2,
};

// Struct: GifUrls
mojo.internal.Struct(
    tenor.mojom.GifUrlsSpec, 'tenor.mojom.GifUrls', [
      mojo.internal.StructField('full', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preview', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preview_image', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GifResponse
mojo.internal.Struct(
    tenor.mojom.GifResponseSpec, 'tenor.mojom.GifResponse', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, tenor.mojom.GifUrlsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preview_size', 24, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('full_size', 32, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PaginatedGifResponses
mojo.internal.Struct(
    tenor.mojom.PaginatedGifResponsesSpec, 'tenor.mojom.PaginatedGifResponses', [
      mojo.internal.StructField('next', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('results', 8, 0, mojo.internal.Array(tenor.mojom.GifResponseSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
