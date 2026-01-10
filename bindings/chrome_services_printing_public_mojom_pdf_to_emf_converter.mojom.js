// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_to_emf_converter.mojom
// Module: printing.mojom

'use strict';

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

printing.mojom.PdfToEmfConverterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ConvertPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(printing.mojom.PdfToEmfConverter_ConvertPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConvertPage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetWebContentsURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(printing.mojom.PdfToEmfConverter_SetWebContentsURL_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWebContentsURL (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetUseSkiaRendererPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(printing.mojom.PdfToEmfConverter_SetUseSkiaRendererPolicy_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUseSkiaRendererPolicy (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PdfToEmfConverter_ConvertPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.convertPage');
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
          const params = decoder.decodeStruct(printing.mojom.PdfToEmfConverter_SetWebContentsURL_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setWebContentsURL');
          const result = this.impl.setWebContentsURL(params.url);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PdfToEmfConverter_SetUseSkiaRendererPolicy_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setUseSkiaRendererPolicy');
          const result = this.impl.setUseSkiaRendererPolicy(params.use_skia);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      mojo.internal.StructField('converter', 0, 0, mojo.internal.InterfaceProxy(printing.mojom.PdfToEmfConverterSpec), null, false, 0, undefined),
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

printing.mojom.PdfToEmfConverterFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateConverter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(printing.mojom.PdfToEmfConverterFactory_CreateConverter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateConverter (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(printing.mojom.PdfToEmfConverterFactory_CreateConverter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createConverter');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

printing.mojom.PdfToEmfConverterFactoryReceiver = printing.mojom.PdfToEmfConverterFactoryReceiver;

printing.mojom.PdfToEmfConverterFactoryPtr = printing.mojom.PdfToEmfConverterFactoryRemote;
printing.mojom.PdfToEmfConverterFactoryRequest = printing.mojom.PdfToEmfConverterFactoryPendingReceiver;

