// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_to_emf_converter.mojom
// Module: printing.mojom

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var mojo_base = mojo_base || {};
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
  convertPage(page_index) {
    return this.$.convertPage(page_index);
  }
  setWebContentsURL(url) {
    return this.$.setWebContentsURL(url);
  }
  setUseSkiaRendererPolicy(use_skia) {
    return this.$.setUseSkiaRendererPolicy(use_skia);
  }
};

printing.mojom.PdfToEmfConverterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PdfToEmfConverter', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  convertPage(page_index) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      printing.mojom.PdfToEmfConverter_ConvertPage_ParamsSpec,
      printing.mojom.PdfToEmfConverter_ConvertPage_ResponseParamsSpec,
      [page_index],
      false);
  }

  setWebContentsURL(url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      printing.mojom.PdfToEmfConverter_SetWebContentsURL_ParamsSpec,
      null,
      [url],
      false);
  }

  setUseSkiaRendererPolicy(use_skia) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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

printing.mojom.PdfToEmfConverterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PdfToEmfConverter', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PdfToEmfConverter_ConvertPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PdfToEmfConverter_SetWebContentsURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PdfToEmfConverter_SetUseSkiaRendererPolicy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PdfToEmfConverter_ConvertPage_ParamsSpec.$.structSpec);
          const result = this.impl.convertPage(params.page_index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PdfToEmfConverter_ConvertPage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PdfToEmfConverter_SetWebContentsURL_ParamsSpec.$.structSpec);
          const result = this.impl.setWebContentsURL(params.url);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PdfToEmfConverter_SetUseSkiaRendererPolicy_ParamsSpec.$.structSpec);
          const result = this.impl.setUseSkiaRendererPolicy(params.use_skia);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

printing.mojom.PdfToEmfConverterReceiver = printing.mojom.PdfToEmfConverterReceiver;

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
  createConverter(pdf_region, render_settings) {
    return this.$.createConverter(pdf_region, render_settings);
  }
};

printing.mojom.PdfToEmfConverterFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PdfToEmfConverterFactory', [
      { explicit: null },
    ]);
  }

  createConverter(pdf_region, render_settings) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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

printing.mojom.PdfToEmfConverterFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PdfToEmfConverterFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PdfToEmfConverterFactory_CreateConverter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PdfToEmfConverterFactory_CreateConverter_ParamsSpec.$.structSpec);
          const result = this.impl.createConverter(params.pdf_region, params.render_settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PdfToEmfConverterFactory_CreateConverter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

printing.mojom.PdfToEmfConverterFactoryReceiver = printing.mojom.PdfToEmfConverterFactoryReceiver;

printing.mojom.PdfToEmfConverterFactoryPtr = printing.mojom.PdfToEmfConverterFactoryRemote;
printing.mojom.PdfToEmfConverterFactoryRequest = printing.mojom.PdfToEmfConverterFactoryPendingReceiver;

