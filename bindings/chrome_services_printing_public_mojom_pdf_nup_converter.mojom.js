// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_nup_converter.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};

printing.mojom.StatusSpec = { $: mojo.internal.Enum() };
printing.mojom.PdfNupConverter = {};
printing.mojom.PdfNupConverter.$interfaceName = 'printing.mojom.PdfNupConverter';
printing.mojom.PdfNupConverter_NupPageConvert_ParamsSpec = { $: {} };
printing.mojom.PdfNupConverter_NupPageConvert_ResponseParamsSpec = { $: {} };
printing.mojom.PdfNupConverter_NupDocumentConvert_ParamsSpec = { $: {} };
printing.mojom.PdfNupConverter_NupDocumentConvert_ResponseParamsSpec = { $: {} };
printing.mojom.PdfNupConverter_SetWebContentsURL_ParamsSpec = { $: {} };
printing.mojom.PdfNupConverter_SetUseSkiaRendererPolicy_ParamsSpec = { $: {} };

// Enum: Status
printing.mojom.Status = {
  SUCCESS: 0,
  CONVERSION_FAILURE: 1,
  HANDLE_MAP_ERROR: 2,
};

// Interface: PdfNupConverter
mojo.internal.Struct(
    printing.mojom.PdfNupConverter_NupPageConvert_ParamsSpec, 'printing.mojom.PdfNupConverter_NupPageConvert_Params', [
      mojo.internal.StructField('page_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('printable_area', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pdf_page_regions', 16, 0, mojo.internal.Array(mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pages_per_sheet', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    printing.mojom.PdfNupConverter_NupPageConvert_ResponseParamsSpec, 'printing.mojom.PdfNupConverter_NupPageConvert_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, printing.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pdf_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PdfNupConverter_NupDocumentConvert_ParamsSpec, 'printing.mojom.PdfNupConverter_NupDocumentConvert_Params', [
      mojo.internal.StructField('page_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('printable_area', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('src_pdf_region', 16, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pages_per_sheet', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    printing.mojom.PdfNupConverter_NupDocumentConvert_ResponseParamsSpec, 'printing.mojom.PdfNupConverter_NupDocumentConvert_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, printing.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pdf_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PdfNupConverter_SetWebContentsURL_ParamsSpec, 'printing.mojom.PdfNupConverter_SetWebContentsURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PdfNupConverter_SetUseSkiaRendererPolicy_ParamsSpec, 'printing.mojom.PdfNupConverter_SetUseSkiaRendererPolicy_Params', [
      mojo.internal.StructField('use_skia', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [pages_per_sheet, page_size, printable_area, pdf_page_regions],
      false);
  }

  nupDocumentConvert(pages_per_sheet, page_size, printable_area, src_pdf_region) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PdfNupConverter_NupDocumentConvert_ParamsSpec,
      printing.mojom.PdfNupConverter_NupDocumentConvert_ResponseParamsSpec,
      [pages_per_sheet, page_size, printable_area, src_pdf_region],
      false);
  }

  setWebContentsURL(url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      printing.mojom.PdfNupConverter_SetWebContentsURL_ParamsSpec,
      null,
      [url],
      false);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      printing.mojom.PdfNupConverter_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia],
      false);
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

printing.mojom.PdfNupConverterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: NupPageConvert
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PdfNupConverter_NupPageConvert_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NupPageConvert (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NupDocumentConvert
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PdfNupConverter_NupDocumentConvert_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NupDocumentConvert (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetWebContentsURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PdfNupConverter_SetWebContentsURL_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWebContentsURL (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetUseSkiaRendererPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PdfNupConverter_SetUseSkiaRendererPolicy_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUseSkiaRendererPolicy (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(printing.mojom.PdfNupConverter_NupPageConvert_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.nupPageConvert');
          const result = this.impl.nupPageConvert(params.pages_per_sheet, params.page_size, params.printable_area, params.pdf_page_regions);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PdfNupConverter_NupPageConvert_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PdfNupConverter_NupDocumentConvert_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.nupDocumentConvert');
          const result = this.impl.nupDocumentConvert(params.pages_per_sheet, params.page_size, params.printable_area, params.src_pdf_region);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PdfNupConverter_NupDocumentConvert_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PdfNupConverter_SetWebContentsURL_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setWebContentsURL');
          const result = this.impl.setWebContentsURL(params.url);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PdfNupConverter_SetUseSkiaRendererPolicy_ParamsSpec.$);
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

printing.mojom.PdfNupConverterReceiver = printing.mojom.PdfNupConverterReceiver;

printing.mojom.PdfNupConverterPtr = printing.mojom.PdfNupConverterRemote;
printing.mojom.PdfNupConverterRequest = printing.mojom.PdfNupConverterPendingReceiver;

