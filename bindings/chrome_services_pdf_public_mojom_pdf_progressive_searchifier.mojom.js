// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_progressive_searchifier.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};
var skia = skia || {};


// Interface: PdfProgressiveSearchifier
pdf.mojom.mojom.PdfProgressiveSearchifier = {};

pdf.mojom.mojom.PdfProgressiveSearchifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.mojom.PdfProgressiveSearchifierRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfProgressiveSearchifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.mojom.PdfProgressiveSearchifierPendingReceiver,
      handle);
    this.$ = new pdf.mojom.mojom.PdfProgressiveSearchifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.mojom.PdfProgressiveSearchifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addPage(image, page_index) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec,
      null,
      [image, page_index]);
  }

  deletePage(page_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec,
      null,
      [page_index]);
  }

  save() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      pdf.mojom.mojom.PdfProgressiveSearchifier_Save_ParamsSpec,
      pdf.mojom.mojom.PdfProgressiveSearchifier_Save_ResponseParamsSpec,
      []);
  }

};

pdf.mojom.mojom.PdfProgressiveSearchifier.getRemote = function() {
  let remote = new pdf.mojom.mojom.PdfProgressiveSearchifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfProgressiveSearchifier',
    'context');
  return remote.$;
};

// ParamsSpec for AddPage
pdf.mojom.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfProgressiveSearchifier.AddPage_Params',
      packedSize: 24,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: false, minVersion: 0 },
        { name: 'page_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeletePage
pdf.mojom.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfProgressiveSearchifier.DeletePage_Params',
      packedSize: 16,
      fields: [
        { name: 'page_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Save
pdf.mojom.mojom.PdfProgressiveSearchifier_Save_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfProgressiveSearchifier.Save_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

pdf.mojom.mojom.PdfProgressiveSearchifier_Save_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfProgressiveSearchifier.Save_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'searchified_pdf', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
pdf.mojom.mojom.PdfProgressiveSearchifierPtr = pdf.mojom.mojom.PdfProgressiveSearchifierRemote;
pdf.mojom.mojom.PdfProgressiveSearchifierRequest = pdf.mojom.mojom.PdfProgressiveSearchifierPendingReceiver;

