// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_flattener.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var mojo_base = mojo_base || {};

printing.mojom.FlattenPdfResultSpec = { $: {} };
printing.mojom.PdfFlattener = {};
printing.mojom.PdfFlattener.$interfaceName = 'printing.mojom.PdfFlattener';
printing.mojom.PdfFlattener_FlattenPdf_ParamsSpec = { $: {} };
printing.mojom.PdfFlattener_FlattenPdf_ResponseParamsSpec = { $: {} };
printing.mojom.PdfFlattener_SetUseSkiaRendererPolicy_ParamsSpec = { $: {} };

// Struct: FlattenPdfResult
mojo.internal.Struct(
    printing.mojom.FlattenPdfResultSpec, 'printing.mojom.FlattenPdfResult', [
      mojo.internal.StructField('flattened_pdf_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PdfFlattener
mojo.internal.Struct(
    printing.mojom.PdfFlattener_FlattenPdf_ParamsSpec, 'printing.mojom.PdfFlattener_FlattenPdf_Params', [
      mojo.internal.StructField('src_pdf_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PdfFlattener_FlattenPdf_ResponseParamsSpec, 'printing.mojom.PdfFlattener_FlattenPdf_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, printing.mojom.FlattenPdfResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    printing.mojom.PdfFlattener_SetUseSkiaRendererPolicy_ParamsSpec, 'printing.mojom.PdfFlattener_SetUseSkiaRendererPolicy_Params', [
      mojo.internal.StructField('use_skia', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

printing.mojom.PdfFlattenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

printing.mojom.PdfFlattenerRemote = class {
  static get $interfaceName() {
    return 'printing.mojom.PdfFlattener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      printing.mojom.PdfFlattenerPendingReceiver,
      handle);
    this.$ = new printing.mojom.PdfFlattenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

printing.mojom.PdfFlattenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  flattenPdf(src_pdf_region) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      printing.mojom.PdfFlattener_FlattenPdf_ParamsSpec,
      printing.mojom.PdfFlattener_FlattenPdf_ResponseParamsSpec,
      [src_pdf_region],
      false);
  }

  setUseSkiaRendererPolicy(use_skia) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      printing.mojom.PdfFlattener_SetUseSkiaRendererPolicy_ParamsSpec,
      null,
      [use_skia],
      false);
  }

};

printing.mojom.PdfFlattener.getRemote = function() {
  let remote = new printing.mojom.PdfFlattenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'printing.mojom.PdfFlattener',
    'context');
  return remote.$;
};

printing.mojom.PdfFlattenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = printing.mojom.PdfFlattener_FlattenPdf_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flattenPdf(params.src_pdf_region);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, printing.mojom.PdfFlattener_FlattenPdf_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = printing.mojom.PdfFlattener_SetUseSkiaRendererPolicy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setUseSkiaRendererPolicy(params.use_skia);
          break;
        }
      }
    });
  }
};

printing.mojom.PdfFlattenerReceiver = printing.mojom.PdfFlattenerReceiver;

printing.mojom.PdfFlattenerPtr = printing.mojom.PdfFlattenerRemote;
printing.mojom.PdfFlattenerRequest = printing.mojom.PdfFlattenerPendingReceiver;

