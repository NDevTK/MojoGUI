// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_service.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};
var skia = skia || {};


// Interface: Ocr
pdf.mojom.mojom.Ocr = {};

pdf.mojom.mojom.OcrPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.mojom.OcrRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.Ocr';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.mojom.OcrPendingReceiver,
      handle);
    this.$ = new pdf.mojom.mojom.OcrRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.mojom.OcrRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  performOcr(image) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.mojom.Ocr_PerformOcr_ParamsSpec,
      pdf.mojom.mojom.Ocr_PerformOcr_ResponseParamsSpec,
      [image]);
  }

};

pdf.mojom.mojom.Ocr.getRemote = function() {
  let remote = new pdf.mojom.mojom.OcrRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.Ocr',
    'context');
  return remote.$;
};

// ParamsSpec for PerformOcr
pdf.mojom.mojom.Ocr_PerformOcr_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.Ocr.PerformOcr_Params',
      packedSize: 16,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

pdf.mojom.mojom.Ocr_PerformOcr_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.Ocr.PerformOcr_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'visual_annotation', packedOffset: 0, packedBitOffset: 0, type: screen_ai.mojom.VisualAnnotationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
pdf.mojom.mojom.OcrPtr = pdf.mojom.mojom.OcrRemote;
pdf.mojom.mojom.OcrRequest = pdf.mojom.mojom.OcrPendingReceiver;


// Interface: PdfService
pdf.mojom.mojom.PdfService = {};

pdf.mojom.mojom.PdfServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.mojom.PdfServiceRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.mojom.PdfServicePendingReceiver,
      handle);
    this.$ = new pdf.mojom.mojom.PdfServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.mojom.PdfServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindPdfProgressiveSearchifier(receiver, ocr) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.mojom.PdfService_BindPdfProgressiveSearchifier_ParamsSpec,
      null,
      [receiver, ocr]);
  }

  bindPdfSearchifier(receiver, ocr) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.mojom.PdfService_BindPdfSearchifier_ParamsSpec,
      null,
      [receiver, ocr]);
  }

  bindPdfThumbnailer(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      pdf.mojom.mojom.PdfService_BindPdfThumbnailer_ParamsSpec,
      null,
      [receiver]);
  }

};

pdf.mojom.mojom.PdfService.getRemote = function() {
  let remote = new pdf.mojom.mojom.PdfServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfService',
    'context');
  return remote.$;
};

// ParamsSpec for BindPdfProgressiveSearchifier
pdf.mojom.mojom.PdfService_BindPdfProgressiveSearchifier_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfService.BindPdfProgressiveSearchifier_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(pdf.mojom.PdfProgressiveSearchifierRemote), nullable: false, minVersion: 0 },
        { name: 'ocr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(pdf.mojom.OcrRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BindPdfSearchifier
pdf.mojom.mojom.PdfService_BindPdfSearchifier_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfService.BindPdfSearchifier_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(pdf.mojom.PdfSearchifierRemote), nullable: false, minVersion: 0 },
        { name: 'ocr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(pdf.mojom.OcrRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BindPdfThumbnailer
pdf.mojom.mojom.PdfService_BindPdfThumbnailer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfService.BindPdfThumbnailer_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(pdf.mojom.PdfThumbnailerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
pdf.mojom.mojom.PdfServicePtr = pdf.mojom.mojom.PdfServiceRemote;
pdf.mojom.mojom.PdfServiceRequest = pdf.mojom.mojom.PdfServicePendingReceiver;

