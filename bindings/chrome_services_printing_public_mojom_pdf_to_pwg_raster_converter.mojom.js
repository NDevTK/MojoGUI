// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_to_pwg_raster_converter.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


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

// Interface: PdfToPwgRasterConverter
printing.mojom.PdfToPwgRasterConverter = {};

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
      [pdf_region, pdf_settings, pwg_raster_settings]);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PdfToPwgRasterConverter_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia]);
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

// ParamsSpec for Convert
printing.mojom.PdfToPwgRasterConverter_Convert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToPwgRasterConverter.Convert_Params',
      packedSize: 32,
      fields: [
        { name: 'pdf_region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pdf_settings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pwg_raster_settings', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

printing.mojom.PdfToPwgRasterConverter_Convert_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToPwgRasterConverter.Convert_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'pwg_raster_region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'page_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetUseSkiaRendererPolicy
printing.mojom.PdfToPwgRasterConverter_SetUseSkiaRendererPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfToPwgRasterConverter.SetUseSkiaRendererPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'use_skia', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
printing.mojom.PdfToPwgRasterConverterPtr = printing.mojom.PdfToPwgRasterConverterRemote;
printing.mojom.PdfToPwgRasterConverterRequest = printing.mojom.PdfToPwgRasterConverterPendingReceiver;

