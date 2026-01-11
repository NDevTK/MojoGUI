// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_nup_converter.mojom
// Module: printing.mojom

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
  nupPageConvert(pages_per_sheet, page_size, printable_area, pdf_page_regions) {
    return this.$.nupPageConvert(pages_per_sheet, page_size, printable_area, pdf_page_regions);
  }
  nupDocumentConvert(pages_per_sheet, page_size, printable_area, src_pdf_region) {
    return this.$.nupDocumentConvert(pages_per_sheet, page_size, printable_area, src_pdf_region);
  }
  setWebContentsURL(url) {
    return this.$.setWebContentsURL(url);
  }
  setUseSkiaRendererPolicy(use_skia) {
    return this.$.setUseSkiaRendererPolicy(use_skia);
  }
};

printing.mojom.PdfNupConverterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PdfNupConverter', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  nupPageConvert(pages_per_sheet, page_size, printable_area, pdf_page_regions) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      printing.mojom.PdfNupConverter_NupPageConvert_ParamsSpec,
      printing.mojom.PdfNupConverter_NupPageConvert_ResponseParamsSpec,
      [pages_per_sheet, page_size, printable_area, pdf_page_regions],
      false);
  }

  nupDocumentConvert(pages_per_sheet, page_size, printable_area, src_pdf_region) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      printing.mojom.PdfNupConverter_NupDocumentConvert_ParamsSpec,
      printing.mojom.PdfNupConverter_NupDocumentConvert_ResponseParamsSpec,
      [pages_per_sheet, page_size, printable_area, src_pdf_region],
      false);
  }

  setWebContentsURL(url) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      printing.mojom.PdfNupConverter_SetWebContentsURL_ParamsSpec,
      null,
      [url],
      false);
  }

  setUseSkiaRendererPolicy(use_skia) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PdfNupConverter', [
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(printing.mojom.PdfNupConverter_NupPageConvert_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PdfNupConverter_NupDocumentConvert_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PdfNupConverter_SetWebContentsURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PdfNupConverter_SetUseSkiaRendererPolicy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PdfNupConverter_NupPageConvert_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(printing.mojom.PdfNupConverter_NupDocumentConvert_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(printing.mojom.PdfNupConverter_SetWebContentsURL_ParamsSpec.$.structSpec);
          const result = this.impl.setWebContentsURL(params.url);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PdfNupConverter_SetUseSkiaRendererPolicy_ParamsSpec.$.structSpec);
          const result = this.impl.setUseSkiaRendererPolicy(params.use_skia);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

printing.mojom.PdfNupConverterReceiver = printing.mojom.PdfNupConverterReceiver;

printing.mojom.PdfNupConverterPtr = printing.mojom.PdfNupConverterRemote;
printing.mojom.PdfNupConverterRequest = printing.mojom.PdfNupConverterPendingReceiver;

