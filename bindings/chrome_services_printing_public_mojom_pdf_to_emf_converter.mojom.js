// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_to_emf_converter.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var url = url || {};


// Interface: PdfToEmfConverter
printing.mojom.mojom.PdfToEmfConverter = {};

printing.mojom.mojom.PdfToEmfConverterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.mojom.PdfToEmfConverterRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PdfToEmfConverter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.mojom.PdfToEmfConverterPendingReceiver,
      handle);
    this.$ = new printing.mojom.mojom.PdfToEmfConverterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.mojom.PdfToEmfConverterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  convertPage(page_index) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.mojom.PdfToEmfConverter_ConvertPage_ParamsSpec,
      printing.mojom.mojom.PdfToEmfConverter_ConvertPage_ResponseParamsSpec,
      [page_index]);
  }

  setWebContentsURL(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.mojom.PdfToEmfConverter_SetWebContentsURL_ParamsSpec,
      null,
      [url]);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.mojom.PdfToEmfConverter_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia]);
  }

};

printing.mojom.mojom.PdfToEmfConverter.getRemote = function() {
  let remote = new printing.mojom.mojom.PdfToEmfConverterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PdfToEmfConverter',
    'context');
  return remote.$;
};

// ParamsSpec for ConvertPage
printing.mojom.mojom.PdfToEmfConverter_ConvertPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToEmfConverter.ConvertPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

printing.mojom.mojom.PdfToEmfConverter_ConvertPage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToEmfConverter.ConvertPage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'emf_region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: true, minVersion: 0 },
        { name: 'scale_factor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetWebContentsURL
printing.mojom.mojom.PdfToEmfConverter_SetWebContentsURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToEmfConverter.SetWebContentsURL_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUseSkiaRendererPolicy
printing.mojom.mojom.PdfToEmfConverter_SetUseSkiaRendererPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToEmfConverter.SetUseSkiaRendererPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'use_skia', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
printing.mojom.mojom.PdfToEmfConverterPtr = printing.mojom.mojom.PdfToEmfConverterRemote;
printing.mojom.mojom.PdfToEmfConverterRequest = printing.mojom.mojom.PdfToEmfConverterPendingReceiver;


// Interface: PdfToEmfConverterFactory
printing.mojom.mojom.PdfToEmfConverterFactory = {};

printing.mojom.mojom.PdfToEmfConverterFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.mojom.PdfToEmfConverterFactoryRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PdfToEmfConverterFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.mojom.PdfToEmfConverterFactoryPendingReceiver,
      handle);
    this.$ = new printing.mojom.mojom.PdfToEmfConverterFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.mojom.PdfToEmfConverterFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createConverter(pdf_region, render_settings) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.mojom.PdfToEmfConverterFactory_CreateConverter_ParamsSpec,
      printing.mojom.mojom.PdfToEmfConverterFactory_CreateConverter_ResponseParamsSpec,
      [pdf_region, render_settings]);
  }

};

printing.mojom.mojom.PdfToEmfConverterFactory.getRemote = function() {
  let remote = new printing.mojom.mojom.PdfToEmfConverterFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PdfToEmfConverterFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateConverter
printing.mojom.mojom.PdfToEmfConverterFactory_CreateConverter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToEmfConverterFactory.CreateConverter_Params',
      packedSize: 24,
      fields: [
        { name: 'pdf_region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'render_settings', packedOffset: 8, packedBitOffset: 0, type: printing.mojom.PdfRenderSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

printing.mojom.mojom.PdfToEmfConverterFactory_CreateConverter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToEmfConverterFactory.CreateConverter_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'converter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(printing.mojom.PdfToEmfConverterRemote), nullable: false, minVersion: 0 },
        { name: 'page_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
printing.mojom.mojom.PdfToEmfConverterFactoryPtr = printing.mojom.mojom.PdfToEmfConverterFactoryRemote;
printing.mojom.mojom.PdfToEmfConverterFactoryRequest = printing.mojom.mojom.PdfToEmfConverterFactoryPendingReceiver;

