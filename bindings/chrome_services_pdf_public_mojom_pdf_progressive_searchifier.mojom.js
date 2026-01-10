// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_progressive_searchifier.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};
var skia = skia || {};

pdf.mojom.PdfProgressiveSearchifier = {};
pdf.mojom.PdfProgressiveSearchifier.$interfaceName = 'pdf.mojom.PdfProgressiveSearchifier';
pdf.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec = { $: {} };
pdf.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec = { $: {} };
pdf.mojom.PdfProgressiveSearchifier_Save_ParamsSpec = { $: {} };
pdf.mojom.PdfProgressiveSearchifier_Save_ResponseParamsSpec = { $: {} };

// Interface: PdfProgressiveSearchifier
mojo.internal.Struct(
    pdf.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec, 'pdf.mojom.PdfProgressiveSearchifier_AddPage_Params', [
      mojo.internal.StructField('image', 0, 0, skia.mojom.BitmapN32Spec, null, false, 0, undefined),
      mojo.internal.StructField('page_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    pdf.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec, 'pdf.mojom.PdfProgressiveSearchifier_DeletePage_Params', [
      mojo.internal.StructField('page_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfProgressiveSearchifier_Save_ParamsSpec, 'pdf.mojom.PdfProgressiveSearchifier_Save_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    pdf.mojom.PdfProgressiveSearchifier_Save_ResponseParamsSpec, 'pdf.mojom.PdfProgressiveSearchifier_Save_ResponseParams', [
      mojo.internal.StructField('searchified_pdf', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

pdf.mojom.PdfProgressiveSearchifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.PdfProgressiveSearchifierRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfProgressiveSearchifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.PdfProgressiveSearchifierPendingReceiver,
      handle);
    this.$ = new pdf.mojom.PdfProgressiveSearchifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.PdfProgressiveSearchifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addPage(image, page_index) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec,
      null,
      [image, page_index],
      false);
  }

  deletePage(page_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec,
      null,
      [page_index],
      false);
  }

  save() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      pdf.mojom.PdfProgressiveSearchifier_Save_ParamsSpec,
      pdf.mojom.PdfProgressiveSearchifier_Save_ResponseParamsSpec,
      [],
      false);
  }

};

pdf.mojom.PdfProgressiveSearchifier.getRemote = function() {
  let remote = new pdf.mojom.PdfProgressiveSearchifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfProgressiveSearchifier',
    'context');
  return remote.$;
};

pdf.mojom.PdfProgressiveSearchifierPtr = pdf.mojom.PdfProgressiveSearchifierRemote;
pdf.mojom.PdfProgressiveSearchifierRequest = pdf.mojom.PdfProgressiveSearchifierPendingReceiver;

