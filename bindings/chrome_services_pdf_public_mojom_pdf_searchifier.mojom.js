// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_searchifier.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};


// Interface: PdfSearchifier
pdf.mojom.mojom.PdfSearchifier = {};

pdf.mojom.mojom.PdfSearchifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.mojom.PdfSearchifierRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfSearchifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.mojom.PdfSearchifierPendingReceiver,
      handle);
    this.$ = new pdf.mojom.mojom.PdfSearchifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.mojom.PdfSearchifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  searchify(pdf) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.mojom.PdfSearchifier_Searchify_ParamsSpec,
      pdf.mojom.mojom.PdfSearchifier_Searchify_ResponseParamsSpec,
      [pdf]);
  }

};

pdf.mojom.mojom.PdfSearchifier.getRemote = function() {
  let remote = new pdf.mojom.mojom.PdfSearchifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfSearchifier',
    'context');
  return remote.$;
};

// ParamsSpec for Searchify
pdf.mojom.mojom.PdfSearchifier_Searchify_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfSearchifier.Searchify_Params',
      packedSize: 16,
      fields: [
        { name: 'pdf', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

pdf.mojom.mojom.PdfSearchifier_Searchify_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfSearchifier.Searchify_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'searchified_pdf', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
pdf.mojom.mojom.PdfSearchifierPtr = pdf.mojom.mojom.PdfSearchifierRemote;
pdf.mojom.mojom.PdfSearchifierRequest = pdf.mojom.mojom.PdfSearchifierPendingReceiver;

