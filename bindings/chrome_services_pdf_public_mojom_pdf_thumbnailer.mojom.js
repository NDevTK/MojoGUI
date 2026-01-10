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


pdf.mojom.mojom.kMaxWidthPixels = 512;

pdf.mojom.mojom.kMaxHeightPixels = 512;

// Struct: ThumbParams
pdf.mojom.mojom.ThumbParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.ThumbParams',
      packedSize: 32,
      fields: [
        { name: 'size_px', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'dpi', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'stretch', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'keep_aspect', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: PdfThumbnailer
pdf.mojom.mojom.PdfThumbnailer = {};

pdf.mojom.mojom.PdfThumbnailerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.mojom.PdfThumbnailerRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfThumbnailer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.mojom.PdfThumbnailerPendingReceiver,
      handle);
    this.$ = new pdf.mojom.mojom.PdfThumbnailerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.mojom.PdfThumbnailerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getThumbnail(params, pdf_region) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.mojom.PdfThumbnailer_GetThumbnail_ParamsSpec,
      pdf.mojom.mojom.PdfThumbnailer_GetThumbnail_ResponseParamsSpec,
      [params, pdf_region]);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia]);
  }

};

pdf.mojom.mojom.PdfThumbnailer.getRemote = function() {
  let remote = new pdf.mojom.mojom.PdfThumbnailerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfThumbnailer',
    'context');
  return remote.$;
};

// ParamsSpec for GetThumbnail
pdf.mojom.mojom.PdfThumbnailer_GetThumbnail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfThumbnailer.GetThumbnail_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: pdf.mojom.ThumbParamsSpec, nullable: false, minVersion: 0 },
        { name: 'pdf_region', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

pdf.mojom.mojom.PdfThumbnailer_GetThumbnail_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfThumbnailer.GetThumbnail_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bitmap', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUseSkiaRendererPolicy
pdf.mojom.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfThumbnailer.SetUseSkiaRendererPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'use_skia', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
pdf.mojom.mojom.PdfThumbnailerPtr = pdf.mojom.mojom.PdfThumbnailerRemote;
pdf.mojom.mojom.PdfThumbnailerRequest = pdf.mojom.mojom.PdfThumbnailerPendingReceiver;

