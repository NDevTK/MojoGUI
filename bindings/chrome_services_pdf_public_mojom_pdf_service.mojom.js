// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_service.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};


// Interface: Ocr
pdf.mojom.OcrPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.OcrRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.Ocr';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.OcrPendingReceiver,
      handle);
    this.$ = new pdf.mojom.OcrRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.OcrRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  performOcr(image) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.Ocr_PerformOcr_ParamsSpec.$,
      pdf.mojom.Ocr_PerformOcr_ResponseParamsSpec.$,
      [image]);
  }

};

pdf.mojom.Ocr.getRemote = function() {
  let remote = new pdf.mojom.OcrRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.Ocr',
    'context');
  return remote.$;
}};

// ParamsSpec for PerformOcr
pdf.mojom.Ocr_PerformOcr_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.Ocr.PerformOcr_Params',
      packedSize: 16,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

pdf.mojom.Ocr_PerformOcr_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.Ocr.PerformOcr_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'visual_annotation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
pdf.mojom.OcrPtr = pdf.mojom.OcrRemote;
pdf.mojom.OcrRequest = pdf.mojom.OcrPendingReceiver;


// Interface: PdfService
pdf.mojom.PdfServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.PdfServiceRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.PdfServicePendingReceiver,
      handle);
    this.$ = new pdf.mojom.PdfServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.PdfServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindPdfProgressiveSearchifier(receiver, ocr) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.PdfService_BindPdfProgressiveSearchifier_ParamsSpec.$,
      null,
      [receiver, ocr]);
  }

  bindPdfSearchifier(receiver, ocr) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.PdfService_BindPdfSearchifier_ParamsSpec.$,
      null,
      [receiver, ocr]);
  }

  bindPdfThumbnailer(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      pdf.mojom.PdfService_BindPdfThumbnailer_ParamsSpec.$,
      null,
      [receiver]);
  }

};

pdf.mojom.PdfService.getRemote = function() {
  let remote = new pdf.mojom.PdfServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfService',
    'context');
  return remote.$;
}};

// ParamsSpec for BindPdfProgressiveSearchifier
pdf.mojom.PdfService_BindPdfProgressiveSearchifier_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfService.BindPdfProgressiveSearchifier_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ocr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BindPdfSearchifier
pdf.mojom.PdfService_BindPdfSearchifier_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfService.BindPdfSearchifier_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ocr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for BindPdfThumbnailer
pdf.mojom.PdfService_BindPdfThumbnailer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfService.BindPdfThumbnailer_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
pdf.mojom.PdfServicePtr = pdf.mojom.PdfServiceRemote;
pdf.mojom.PdfServiceRequest = pdf.mojom.PdfServicePendingReceiver;

