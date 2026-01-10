// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_flattener.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Struct: FlattenPdfResult
printing.mojom.mojom.FlattenPdfResultSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.FlattenPdfResult',
      packedSize: 24,
      fields: [
        { name: 'flattened_pdf_region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'page_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: PdfFlattener
printing.mojom.mojom.PdfFlattener = {};

printing.mojom.mojom.PdfFlattenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.mojom.PdfFlattenerRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PdfFlattener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.mojom.PdfFlattenerPendingReceiver,
      handle);
    this.$ = new printing.mojom.mojom.PdfFlattenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.mojom.PdfFlattenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  flattenPdf(src_pdf_region) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.mojom.PdfFlattener_FlattenPdf_ParamsSpec,
      printing.mojom.mojom.PdfFlattener_FlattenPdf_ResponseParamsSpec,
      [src_pdf_region]);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.mojom.PdfFlattener_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia]);
  }

};

printing.mojom.mojom.PdfFlattener.getRemote = function() {
  let remote = new printing.mojom.mojom.PdfFlattenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PdfFlattener',
    'context');
  return remote.$;
};

// ParamsSpec for FlattenPdf
printing.mojom.mojom.PdfFlattener_FlattenPdf_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfFlattener.FlattenPdf_Params',
      packedSize: 16,
      fields: [
        { name: 'src_pdf_region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.mojom.PdfFlattener_FlattenPdf_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfFlattener.FlattenPdf_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: printing.mojom.FlattenPdfResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUseSkiaRendererPolicy
printing.mojom.mojom.PdfFlattener_SetUseSkiaRendererPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfFlattener.SetUseSkiaRendererPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'use_skia', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
printing.mojom.mojom.PdfFlattenerPtr = printing.mojom.mojom.PdfFlattenerRemote;
printing.mojom.mojom.PdfFlattenerRequest = printing.mojom.mojom.PdfFlattenerPendingReceiver;

