// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_to_emf_converter.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Interface: PdfToEmfConverter
printing.mojom.PdfToEmfConverter = {};

printing.mojom.PdfToEmfConverterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PdfToEmfConverterRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PdfToEmfConverter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PdfToEmfConverterPendingReceiver,
      handle);
    this.$ = new printing.mojom.PdfToEmfConverterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PdfToEmfConverterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  convertPage(page_index) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PdfToEmfConverter_ConvertPage_ParamsSpec,
      printing.mojom.PdfToEmfConverter_ConvertPage_ResponseParamsSpec,
      [page_index]);
  }

  setWebContentsURL(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PdfToEmfConverter_SetWebContentsURL_ParamsSpec,
      null,
      [url]);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PdfToEmfConverter_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia]);
  }

};

printing.mojom.PdfToEmfConverter.getRemote = function() {
  let remote = new printing.mojom.PdfToEmfConverterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PdfToEmfConverter',
    'context');
  return remote.$;
};

// ParamsSpec for ConvertPage
printing.mojom.PdfToEmfConverter_ConvertPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToEmfConverter.ConvertPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PdfToEmfConverter_ConvertPage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToEmfConverter.ConvertPage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'emf_region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: true },
        { name: 'scale_factor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetWebContentsURL
printing.mojom.PdfToEmfConverter_SetWebContentsURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToEmfConverter.SetWebContentsURL_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetUseSkiaRendererPolicy
printing.mojom.PdfToEmfConverter_SetUseSkiaRendererPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToEmfConverter.SetUseSkiaRendererPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'use_skia', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
printing.mojom.PdfToEmfConverterPtr = printing.mojom.PdfToEmfConverterRemote;
printing.mojom.PdfToEmfConverterRequest = printing.mojom.PdfToEmfConverterPendingReceiver;


// Interface: PdfToEmfConverterFactory
printing.mojom.PdfToEmfConverterFactory = {};

printing.mojom.PdfToEmfConverterFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PdfToEmfConverterFactoryRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PdfToEmfConverterFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PdfToEmfConverterFactoryPendingReceiver,
      handle);
    this.$ = new printing.mojom.PdfToEmfConverterFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PdfToEmfConverterFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createConverter(pdf_region, render_settings) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PdfToEmfConverterFactory_CreateConverter_ParamsSpec,
      printing.mojom.PdfToEmfConverterFactory_CreateConverter_ResponseParamsSpec,
      [pdf_region, render_settings]);
  }

};

printing.mojom.PdfToEmfConverterFactory.getRemote = function() {
  let remote = new printing.mojom.PdfToEmfConverterFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PdfToEmfConverterFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateConverter
printing.mojom.PdfToEmfConverterFactory_CreateConverter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToEmfConverterFactory.CreateConverter_Params',
      packedSize: 24,
      fields: [
        { name: 'pdf_region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false },
        { name: 'render_settings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PdfToEmfConverterFactory_CreateConverter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToEmfConverterFactory.CreateConverter_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'converter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'page_count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
printing.mojom.PdfToEmfConverterFactoryPtr = printing.mojom.PdfToEmfConverterFactoryRemote;
printing.mojom.PdfToEmfConverterFactoryRequest = printing.mojom.PdfToEmfConverterFactoryPendingReceiver;

