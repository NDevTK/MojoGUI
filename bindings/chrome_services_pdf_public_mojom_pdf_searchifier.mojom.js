// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_searchifier.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};

pdf.mojom.PdfSearchifier = {};
pdf.mojom.PdfSearchifier.$interfaceName = 'pdf.mojom.PdfSearchifier';
pdf.mojom.PdfSearchifier_Searchify_ParamsSpec = { $: {} };
pdf.mojom.PdfSearchifier_Searchify_ResponseParamsSpec = { $: {} };

// Interface: PdfSearchifier
mojo.internal.Struct(
    pdf.mojom.PdfSearchifier_Searchify_ParamsSpec, 'pdf.mojom.PdfSearchifier_Searchify_Params', [
      mojo.internal.StructField('pdf', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfSearchifier_Searchify_ResponseParamsSpec, 'pdf.mojom.PdfSearchifier_Searchify_ResponseParams', [
      mojo.internal.StructField('searchified_pdf', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

pdf.mojom.PdfSearchifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.PdfSearchifierRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfSearchifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.PdfSearchifierPendingReceiver,
      handle);
    this.$ = new pdf.mojom.PdfSearchifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.PdfSearchifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  searchify(pdf) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.PdfSearchifier_Searchify_ParamsSpec,
      pdf.mojom.PdfSearchifier_Searchify_ResponseParamsSpec,
      [pdf],
      false);
  }

};

pdf.mojom.PdfSearchifier.getRemote = function() {
  let remote = new pdf.mojom.PdfSearchifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfSearchifier',
    'context');
  return remote.$;
};

pdf.mojom.PdfSearchifierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = pdf.mojom.PdfSearchifier_Searchify_ParamsSpec.$.decode(message.payload);
          const result = this.impl.searchify(params.pdf);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfSearchifier_Searchify_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

pdf.mojom.PdfSearchifierReceiver = pdf.mojom.PdfSearchifierReceiver;

pdf.mojom.PdfSearchifierPtr = pdf.mojom.PdfSearchifierRemote;
pdf.mojom.PdfSearchifierRequest = pdf.mojom.PdfSearchifierPendingReceiver;

