// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_thumbnailer.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var gfx = gfx || {};

pdf.mojom.ThumbParamsSpec = { $: {} };
pdf.mojom.PdfThumbnailer = {};
pdf.mojom.PdfThumbnailer.$interfaceName = 'pdf.mojom.PdfThumbnailer';
pdf.mojom.PdfThumbnailer_GetThumbnail_ParamsSpec = { $: {} };
pdf.mojom.PdfThumbnailer_GetThumbnail_ResponseParamsSpec = { $: {} };
pdf.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_ParamsSpec = { $: {} };

pdf.mojom.kMaxWidthPixels = 512;

pdf.mojom.kMaxHeightPixels = 512;

// Struct: ThumbParams
mojo.internal.Struct(
    pdf.mojom.ThumbParamsSpec, 'pdf.mojom.ThumbParams', [
      mojo.internal.StructField('size_px', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dpi', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('stretch', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('keep_aspect', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PdfThumbnailer
mojo.internal.Struct(
    pdf.mojom.PdfThumbnailer_GetThumbnail_ParamsSpec, 'pdf.mojom.PdfThumbnailer_GetThumbnail_Params', [
      mojo.internal.StructField('params', 0, 0, pdf.mojom.ThumbParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pdf_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    pdf.mojom.PdfThumbnailer_GetThumbnail_ResponseParamsSpec, 'pdf.mojom.PdfThumbnailer_GetThumbnail_ResponseParams', [
      mojo.internal.StructField('bitmap', 0, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_ParamsSpec, 'pdf.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_Params', [
      mojo.internal.StructField('use_skia', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

pdf.mojom.PdfThumbnailerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.PdfThumbnailerRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfThumbnailer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.PdfThumbnailerPendingReceiver,
      handle);
    this.$ = new pdf.mojom.PdfThumbnailerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.PdfThumbnailerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getThumbnail(params, pdf_region) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.PdfThumbnailer_GetThumbnail_ParamsSpec,
      pdf.mojom.PdfThumbnailer_GetThumbnail_ResponseParamsSpec,
      [params, pdf_region],
      false);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia],
      false);
  }

};

pdf.mojom.PdfThumbnailer.getRemote = function() {
  let remote = new pdf.mojom.PdfThumbnailerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfThumbnailer',
    'context');
  return remote.$;
};

pdf.mojom.PdfThumbnailerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetThumbnail
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(pdf.mojom.PdfThumbnailer_GetThumbnail_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetThumbnail (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetUseSkiaRendererPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(pdf.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUseSkiaRendererPolicy (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(pdf.mojom.PdfThumbnailer_GetThumbnail_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getThumbnail');
          const result = this.impl.getThumbnail(params.params, params.pdf_region);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfThumbnailer_GetThumbnail_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(pdf.mojom.PdfThumbnailer_SetUseSkiaRendererPolicy_ParamsSpec.$, message.header.headerSize);
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

pdf.mojom.PdfThumbnailerReceiver = pdf.mojom.PdfThumbnailerReceiver;

pdf.mojom.PdfThumbnailerPtr = pdf.mojom.PdfThumbnailerRemote;
pdf.mojom.PdfThumbnailerRequest = pdf.mojom.PdfThumbnailerPendingReceiver;

