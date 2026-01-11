// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_searchifier.mojom
// Module: pdf.mojom

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
  searchify(pdf) {
    return this.$.searchify(pdf);
  }
};

pdf.mojom.PdfSearchifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PdfSearchifier', [
      { explicit: null },
    ]);
  }

  searchify(pdf) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PdfSearchifier', [
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
             decoder.decodeStructInline(pdf.mojom.PdfSearchifier_Searchify_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfSearchifier_Searchify_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

pdf.mojom.PdfSearchifierReceiver = pdf.mojom.PdfSearchifierReceiver;

pdf.mojom.PdfSearchifierPtr = pdf.mojom.PdfSearchifierRemote;
pdf.mojom.PdfSearchifierRequest = pdf.mojom.PdfSearchifierPendingReceiver;

