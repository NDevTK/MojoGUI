// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_progressive_searchifier.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};


// Interface: PdfProgressiveSearchifier
pdf.mojom.PdfProgressiveSearchifier = {};

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
      [image, page_index]);
  }

  deletePage(page_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec,
      null,
      [page_index]);
  }

  save() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      pdf.mojom.PdfProgressiveSearchifier_Save_ParamsSpec,
      pdf.mojom.PdfProgressiveSearchifier_Save_ResponseParamsSpec,
      []);
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

// ParamsSpec for AddPage
pdf.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfProgressiveSearchifier.AddPage_Params',
      packedSize: 24,
      fields: [
        { name: 'image', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: false },
        { name: 'page_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeletePage
pdf.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfProgressiveSearchifier.DeletePage_Params',
      packedSize: 16,
      fields: [
        { name: 'page_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Save
pdf.mojom.PdfProgressiveSearchifier_Save_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfProgressiveSearchifier.Save_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

pdf.mojom.PdfProgressiveSearchifier_Save_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfProgressiveSearchifier.Save_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'searchified_pdf', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
pdf.mojom.PdfProgressiveSearchifierPtr = pdf.mojom.PdfProgressiveSearchifierRemote;
pdf.mojom.PdfProgressiveSearchifierRequest = pdf.mojom.PdfProgressiveSearchifierPendingReceiver;

