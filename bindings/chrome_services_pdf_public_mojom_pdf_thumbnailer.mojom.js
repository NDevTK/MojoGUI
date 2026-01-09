// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_thumbnailer.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};


// Struct: ThumbParams
pdf.mojom.ThumbParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.ThumbParams',
      packedSize: 16,
      fields: [
        { name: 'keep_aspect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PdfThumbnailer
pdf.mojom.PdfThumbnailer = {};

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
      [params, pdf_region]);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia]);
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

// ParamsSpec for GetThumbnail
pdf.mojom.PdfThumbnailer_GetThumbnail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfThumbnailer.GetThumbnail_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pdf_region', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

pdf.mojom.PdfThumbnailer_GetThumbnail_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfThumbnailer.GetThumbnail_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bitmap', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetUseSkiaRendererPolicy
pdf.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfThumbnailer.SetUseSkiaRendererPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'use_skia', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
pdf.mojom.PdfThumbnailerPtr = pdf.mojom.PdfThumbnailerRemote;
pdf.mojom.PdfThumbnailerRequest = pdf.mojom.PdfThumbnailerPendingReceiver;

