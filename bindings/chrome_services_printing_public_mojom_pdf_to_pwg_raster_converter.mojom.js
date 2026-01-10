// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_to_pwg_raster_converter.mojom
// Module: printing.mojom

'use strict';

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
};

printing.mojom.PdfToPwgRasterConverterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  convert(pdf_region, pdf_settings, pwg_raster_settings) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PdfToPwgRasterConverter_Convert_ParamsSpec,
      printing.mojom.PdfToPwgRasterConverter_Convert_ResponseParamsSpec,
      [pdf_region, pdf_settings, pwg_raster_settings],
      false);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = printing.mojom.PdfToPwgRasterConverter_Convert_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.convert');
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
          const params = printing.mojom.PdfToPwgRasterConverter_SetUseSkiaRendererPolicy_ParamsSpec.$.decode(message.payload);
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

printing.mojom.PdfToPwgRasterConverterReceiver = printing.mojom.PdfToPwgRasterConverterReceiver;

printing.mojom.PdfToPwgRasterConverterPtr = printing.mojom.PdfToPwgRasterConverterRemote;
printing.mojom.PdfToPwgRasterConverterRequest = printing.mojom.PdfToPwgRasterConverterPendingReceiver;

