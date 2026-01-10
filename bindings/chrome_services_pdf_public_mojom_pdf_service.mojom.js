// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_service.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var skia = skia || {};

pdf.mojom.Ocr = {};
pdf.mojom.Ocr.$interfaceName = 'pdf.mojom.Ocr';
pdf.mojom.Ocr_PerformOcr_ParamsSpec = { $: {} };
pdf.mojom.Ocr_PerformOcr_ResponseParamsSpec = { $: {} };
pdf.mojom.PdfService = {};
pdf.mojom.PdfService.$interfaceName = 'pdf.mojom.PdfService';
pdf.mojom.PdfService_BindPdfProgressiveSearchifier_ParamsSpec = { $: {} };
pdf.mojom.PdfService_BindPdfSearchifier_ParamsSpec = { $: {} };
pdf.mojom.PdfService_BindPdfThumbnailer_ParamsSpec = { $: {} };

// Interface: Ocr
mojo.internal.Struct(
    pdf.mojom.Ocr_PerformOcr_ParamsSpec, 'pdf.mojom.Ocr_PerformOcr_Params', [
      mojo.internal.StructField('image', 0, 0, skia.mojom.BitmapN32Spec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.Ocr_PerformOcr_ResponseParamsSpec, 'pdf.mojom.Ocr_PerformOcr_ResponseParams', [
      mojo.internal.StructField('visual_annotation', 0, 0, screen_ai.mojom.VisualAnnotationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      pdf.mojom.Ocr_PerformOcr_ParamsSpec,
      pdf.mojom.Ocr_PerformOcr_ResponseParamsSpec,
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
};

pdf.mojom.OcrPtr = pdf.mojom.OcrRemote;
pdf.mojom.OcrRequest = pdf.mojom.OcrPendingReceiver;


// Interface: PdfService
mojo.internal.Struct(
    pdf.mojom.PdfService_BindPdfProgressiveSearchifier_ParamsSpec, 'pdf.mojom.PdfService_BindPdfProgressiveSearchifier_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(pdf.mojom.PdfProgressiveSearchifierRemote), null, false, 0, undefined),
      mojo.internal.StructField('ocr', 8, 0, mojo.internal.InterfaceProxy(pdf.mojom.OcrRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    pdf.mojom.PdfService_BindPdfSearchifier_ParamsSpec, 'pdf.mojom.PdfService_BindPdfSearchifier_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(pdf.mojom.PdfSearchifierRemote), null, false, 0, undefined),
      mojo.internal.StructField('ocr', 8, 0, mojo.internal.InterfaceProxy(pdf.mojom.OcrRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    pdf.mojom.PdfService_BindPdfThumbnailer_ParamsSpec, 'pdf.mojom.PdfService_BindPdfThumbnailer_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(pdf.mojom.PdfThumbnailerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      pdf.mojom.PdfService_BindPdfProgressiveSearchifier_ParamsSpec,
      null,
      [receiver, ocr]);
  }

  bindPdfSearchifier(receiver, ocr) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.PdfService_BindPdfSearchifier_ParamsSpec,
      null,
      [receiver, ocr]);
  }

  bindPdfThumbnailer(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      pdf.mojom.PdfService_BindPdfThumbnailer_ParamsSpec,
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
};

pdf.mojom.PdfServicePtr = pdf.mojom.PdfServiceRemote;
pdf.mojom.PdfServiceRequest = pdf.mojom.PdfServicePendingReceiver;

