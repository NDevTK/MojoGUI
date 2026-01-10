// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_to_emf_converter.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var services = services || {};
var url = url || {};

printing.mojom.PdfToEmfConverter = {};
printing.mojom.PdfToEmfConverter.$interfaceName = 'printing.mojom.PdfToEmfConverter';
printing.mojom.PdfToEmfConverter_ConvertPage_ParamsSpec = { $: {} };
printing.mojom.PdfToEmfConverter_ConvertPage_ResponseParamsSpec = { $: {} };
printing.mojom.PdfToEmfConverter_SetWebContentsURL_ParamsSpec = { $: {} };
printing.mojom.PdfToEmfConverter_SetUseSkiaRendererPolicy_ParamsSpec = { $: {} };
printing.mojom.PdfToEmfConverterFactory = {};
printing.mojom.PdfToEmfConverterFactory.$interfaceName = 'printing.mojom.PdfToEmfConverterFactory';
printing.mojom.PdfToEmfConverterFactory_CreateConverter_ParamsSpec = { $: {} };
printing.mojom.PdfToEmfConverterFactory_CreateConverter_ResponseParamsSpec = { $: {} };

// Interface: PdfToEmfConverter
mojo.internal.Struct(
    printing.mojom.PdfToEmfConverter_ConvertPage_ParamsSpec, 'printing.mojom.PdfToEmfConverter_ConvertPage_Params', [
      mojo.internal.StructField('page_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PdfToEmfConverter_ConvertPage_ResponseParamsSpec, 'printing.mojom.PdfToEmfConverter_ConvertPage_ResponseParams', [
      mojo.internal.StructField('emf_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('scale_factor', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PdfToEmfConverter_SetWebContentsURL_ParamsSpec, 'printing.mojom.PdfToEmfConverter_SetWebContentsURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PdfToEmfConverter_SetUseSkiaRendererPolicy_ParamsSpec, 'printing.mojom.PdfToEmfConverter_SetUseSkiaRendererPolicy_Params', [
      mojo.internal.StructField('use_skia', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [page_index],
      false);
  }

  setWebContentsURL(url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PdfToEmfConverter_SetWebContentsURL_ParamsSpec,
      null,
      [url],
      false);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PdfToEmfConverter_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia],
      false);
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

printing.mojom.PdfToEmfConverterPtr = printing.mojom.PdfToEmfConverterRemote;
printing.mojom.PdfToEmfConverterRequest = printing.mojom.PdfToEmfConverterPendingReceiver;


// Interface: PdfToEmfConverterFactory
mojo.internal.Struct(
    printing.mojom.PdfToEmfConverterFactory_CreateConverter_ParamsSpec, 'printing.mojom.PdfToEmfConverterFactory_CreateConverter_Params', [
      mojo.internal.StructField('pdf_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('render_settings', 8, 0, printing.mojom.PdfRenderSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PdfToEmfConverterFactory_CreateConverter_ResponseParamsSpec, 'printing.mojom.PdfToEmfConverterFactory_CreateConverter_ResponseParams', [
      mojo.internal.StructField('converter', 0, 0, mojo.internal.InterfaceProxy(printing.mojom.PdfToEmfConverterRemote), null, false, 0, undefined),
      mojo.internal.StructField('page_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [pdf_region, render_settings],
      false);
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

printing.mojom.PdfToEmfConverterFactoryPtr = printing.mojom.PdfToEmfConverterFactoryRemote;
printing.mojom.PdfToEmfConverterFactoryRequest = printing.mojom.PdfToEmfConverterFactoryPendingReceiver;

