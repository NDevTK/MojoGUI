// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_to_pwg_raster_converter.mojom
// Module: printing.mojom

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var mojo_base = mojo_base || {};

printing.mojom.TransformTypeSpec = { $: mojo.internal.Enum() };
printing.mojom.DuplexModeSpec = { $: mojo.internal.Enum() };
printing.mojom.PwgRasterSettingsSpec = { $: {} };
printing.mojom.PdfToPwgRasterConverter = {};
printing.mojom.PdfToPwgRasterConverter.$interfaceName = 'printing.mojom.PdfToPwgRasterConverter';
printing.mojom.PdfToPwgRasterConverter_Convert_ParamsSpec = { $: {} };
printing.mojom.PdfToPwgRasterConverter_Convert_ResponseParamsSpec = { $: {} };
printing.mojom.PdfToPwgRasterConverter_SetUseSkiaRendererPolicy_ParamsSpec = { $: {} };

// Enum: TransformType
printing.mojom.TransformType = {
  TRANSFORM_NORMAL: 0,
  TRANSFORM_ROTATE_180: 1,
  TRANSFORM_FLIP_HORIZONTAL: 2,
  TRANSFORM_FLIP_VERTICAL: 3,
};

// Enum: DuplexMode
printing.mojom.DuplexMode = {
  SIMPLEX: 0,
  LONG_EDGE: 1,
  SHORT_EDGE: 2,
};

// Struct: PwgRasterSettings
mojo.internal.Struct(
    printing.mojom.PwgRasterSettingsSpec, 'printing.mojom.PwgRasterSettings', [
      mojo.internal.StructField('TRANSFORM_NORMAL', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PdfToPwgRasterConverter
mojo.internal.Struct(
    printing.mojom.PdfToPwgRasterConverter_Convert_ParamsSpec, 'printing.mojom.PdfToPwgRasterConverter_Convert_Params', [
      mojo.internal.StructField('pdf_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pdf_settings', 8, 0, printing.mojom.PdfRenderSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pwg_raster_settings', 16, 0, printing.mojom.PwgRasterSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    printing.mojom.PdfToPwgRasterConverter_Convert_ResponseParamsSpec, 'printing.mojom.PdfToPwgRasterConverter_Convert_ResponseParams', [
      mojo.internal.StructField('pwg_raster_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('page_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    printing.mojom.PdfToPwgRasterConverter_SetUseSkiaRendererPolicy_ParamsSpec, 'printing.mojom.PdfToPwgRasterConverter_SetUseSkiaRendererPolicy_Params', [
      mojo.internal.StructField('use_skia', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

printing.mojom.PdfToPwgRasterConverterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PdfToPwgRasterConverterRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PdfToPwgRasterConverter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PdfToPwgRasterConverterPendingReceiver,
      handle);
    this.$ = new printing.mojom.PdfToPwgRasterConverterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  convert(pdf_region, pdf_settings, pwg_raster_settings) {
    return this.$.convert(pdf_region, pdf_settings, pwg_raster_settings);
  }
  setUseSkiaRendererPolicy(use_skia) {
    return this.$.setUseSkiaRendererPolicy(use_skia);
  }
};

printing.mojom.PdfToPwgRasterConverterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PdfToPwgRasterConverter', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  convert(pdf_region, pdf_settings, pwg_raster_settings) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      printing.mojom.PdfToPwgRasterConverter_Convert_ParamsSpec,
      printing.mojom.PdfToPwgRasterConverter_Convert_ResponseParamsSpec,
      [pdf_region, pdf_settings, pwg_raster_settings],
      false);
  }

  setUseSkiaRendererPolicy(use_skia) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      printing.mojom.PdfToPwgRasterConverter_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia],
      false);
  }

};

printing.mojom.PdfToPwgRasterConverter.getRemote = function() {
  let remote = new printing.mojom.PdfToPwgRasterConverterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PdfToPwgRasterConverter',
    'context');
  return remote.$;
};

printing.mojom.PdfToPwgRasterConverterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PdfToPwgRasterConverter', [
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
             decoder.decodeStructInline(printing.mojom.PdfToPwgRasterConverter_Convert_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(printing.mojom.PdfToPwgRasterConverter_SetUseSkiaRendererPolicy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PdfToPwgRasterConverter_Convert_ParamsSpec.$.structSpec);
          const result = this.impl.convert(params.pdf_region, params.pdf_settings, params.pwg_raster_settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PdfToPwgRasterConverter_Convert_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(printing.mojom.PdfToPwgRasterConverter_SetUseSkiaRendererPolicy_ParamsSpec.$.structSpec);
          const result = this.impl.setUseSkiaRendererPolicy(params.use_skia);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

printing.mojom.PdfToPwgRasterConverterReceiver = printing.mojom.PdfToPwgRasterConverterReceiver;

printing.mojom.PdfToPwgRasterConverterPtr = printing.mojom.PdfToPwgRasterConverterRemote;
printing.mojom.PdfToPwgRasterConverterRequest = printing.mojom.PdfToPwgRasterConverterPendingReceiver;

