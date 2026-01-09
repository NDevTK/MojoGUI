// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_flattener.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Struct: FlattenPdfResult
printing.mojom.FlattenPdfResultSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.FlattenPdfResult',
      packedSize: 24,
      fields: [
        { name: 'flattened_pdf_region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'page_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PdfFlattener
printing.mojom.PdfFlattener = {};

printing.mojom.PdfFlattenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PdfFlattenerRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PdfFlattener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PdfFlattenerPendingReceiver,
      handle);
    this.$ = new printing.mojom.PdfFlattenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PdfFlattenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  flattenPdf(src_pdf_region) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PdfFlattener_FlattenPdf_ParamsSpec,
      printing.mojom.PdfFlattener_FlattenPdf_ResponseParamsSpec,
      [src_pdf_region]);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PdfFlattener_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia]);
  }

};

printing.mojom.PdfFlattener.getRemote = function() {
  let remote = new printing.mojom.PdfFlattenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PdfFlattener',
    'context');
  return remote.$;
};

// ParamsSpec for FlattenPdf
printing.mojom.PdfFlattener_FlattenPdf_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfFlattener.FlattenPdf_Params',
      packedSize: 16,
      fields: [
        { name: 'src_pdf_region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PdfFlattener_FlattenPdf_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfFlattener.FlattenPdf_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetUseSkiaRendererPolicy
printing.mojom.PdfFlattener_SetUseSkiaRendererPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfFlattener.SetUseSkiaRendererPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'use_skia', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
printing.mojom.PdfFlattenerPtr = printing.mojom.PdfFlattenerRemote;
printing.mojom.PdfFlattenerRequest = printing.mojom.PdfFlattenerPendingReceiver;

