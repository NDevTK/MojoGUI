// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_nup_converter.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Enum: Status
printing.mojom.Status = {
  SUCCESS: 0,
  CONVERSION_FAILURE: 1,
  HANDLE_MAP_ERROR: 2,
};

// Interface: PdfNupConverter
printing.mojom.PdfNupConverter = {};

printing.mojom.PdfNupConverterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PdfNupConverterRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PdfNupConverter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PdfNupConverterPendingReceiver,
      handle);
    this.$ = new printing.mojom.PdfNupConverterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PdfNupConverterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  nupPageConvert(pages_per_sheet, page_size, printable_area, pdf_page_regions) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PdfNupConverter_NupPageConvert_ParamsSpec,
      printing.mojom.PdfNupConverter_NupPageConvert_ResponseParamsSpec,
      [pages_per_sheet, page_size, printable_area, pdf_page_regions]);
  }

  nupDocumentConvert(pages_per_sheet, page_size, printable_area, src_pdf_region) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PdfNupConverter_NupDocumentConvert_ParamsSpec,
      printing.mojom.PdfNupConverter_NupDocumentConvert_ResponseParamsSpec,
      [pages_per_sheet, page_size, printable_area, src_pdf_region]);
  }

  setWebContentsURL(url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PdfNupConverter_SetWebContentsURL_ParamsSpec,
      null,
      [url]);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.PdfNupConverter_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia]);
  }

};

printing.mojom.PdfNupConverter.getRemote = function() {
  let remote = new printing.mojom.PdfNupConverterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PdfNupConverter',
    'context');
  return remote.$;
};

// ParamsSpec for NupPageConvert
printing.mojom.PdfNupConverter_NupPageConvert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfNupConverter.NupPageConvert_Params',
      packedSize: 40,
      fields: [
        { name: 'pages_per_sheet', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'page_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'printable_area', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pdf_page_regions', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PdfNupConverter_NupPageConvert_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfNupConverter.NupPageConvert_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pdf_region', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NupDocumentConvert
printing.mojom.PdfNupConverter_NupDocumentConvert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfNupConverter.NupDocumentConvert_Params',
      packedSize: 40,
      fields: [
        { name: 'pages_per_sheet', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'page_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'printable_area', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'src_pdf_region', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PdfNupConverter_NupDocumentConvert_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfNupConverter.NupDocumentConvert_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pdf_region', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetWebContentsURL
printing.mojom.PdfNupConverter_SetWebContentsURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfNupConverter.SetWebContentsURL_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetUseSkiaRendererPolicy
printing.mojom.PdfNupConverter_SetUseSkiaRendererPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfNupConverter.SetUseSkiaRendererPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'use_skia', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
printing.mojom.PdfNupConverterPtr = printing.mojom.PdfNupConverterRemote;
printing.mojom.PdfNupConverterRequest = printing.mojom.PdfNupConverterPendingReceiver;

