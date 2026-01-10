// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_thumbnailer.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};

pdf.mojom.ThumbParamsSpec = { $: {} };
pdf.mojom.PdfThumbnailer = {};
pdf.mojom.PdfThumbnailer.$interfaceName = 'pdf.mojom.PdfThumbnailer';
pdf.mojom.PdfThumbnailer_GetThumbnail_ParamsSpec = { $: {} };
pdf.mojom.PdfThumbnailer_GetThumbnail_ResponseParamsSpec = { $: {} };
pdf.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_ParamsSpec = { $: {} };

pdf.mojom.kMaxWidthPixels = 512;

pdf.mojom.kMaxHeightPixels = 512;

// Struct: ThumbParams
mojo.internal.Struct(
    pdf.mojom.ThumbParamsSpec, 'pdf.mojom.ThumbParams', [
      mojo.internal.StructField('size_px', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('dpi', 8, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('stretch', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('keep_aspect', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PdfThumbnailer
mojo.internal.Struct(
    pdf.mojom.PdfThumbnailer_GetThumbnail_ParamsSpec, 'pdf.mojom.PdfThumbnailer_GetThumbnail_Params', [
      mojo.internal.StructField('params', 0, 0, pdf.mojom.ThumbParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('pdf_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    pdf.mojom.PdfThumbnailer_GetThumbnail_ResponseParamsSpec, 'pdf.mojom.PdfThumbnailer_GetThumbnail_ResponseParams', [
      mojo.internal.StructField('bitmap', 0, 0, skia.mojom.BitmapN32Spec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_ParamsSpec, 'pdf.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_Params', [
      mojo.internal.StructField('use_skia', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

pdf.mojom.PdfThumbnailerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.PdfThumbnailerRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfThumbnailer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.PdfThumbnailerPendingReceiver,
      handle);
    this.$ = new pdf.mojom.PdfThumbnailerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.PdfThumbnailerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getThumbnail(params, pdf_region) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.PdfThumbnailer_GetThumbnail_ParamsSpec,
      pdf.mojom.PdfThumbnailer_GetThumbnail_ResponseParamsSpec,
      [params, pdf_region],
      false);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia],
      false);
  }

};

pdf.mojom.PdfThumbnailer.getRemote = function() {
  let remote = new pdf.mojom.PdfThumbnailerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfThumbnailer',
    'context');
  return remote.$;
};

pdf.mojom.PdfThumbnailerPtr = pdf.mojom.PdfThumbnailerRemote;
pdf.mojom.PdfThumbnailerRequest = pdf.mojom.PdfThumbnailerPendingReceiver;

