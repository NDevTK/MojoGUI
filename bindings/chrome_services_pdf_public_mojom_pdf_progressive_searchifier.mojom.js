// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_progressive_searchifier.mojom
// Module: pdf.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};
var skia = skia || {};

pdf.mojom.PdfProgressiveSearchifier = {};
pdf.mojom.PdfProgressiveSearchifier.$interfaceName = 'pdf.mojom.PdfProgressiveSearchifier';
pdf.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec = { $: {} };
pdf.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec = { $: {} };
pdf.mojom.PdfProgressiveSearchifier_Save_ParamsSpec = { $: {} };
pdf.mojom.PdfProgressiveSearchifier_Save_ResponseParamsSpec = { $: {} };

// Interface: PdfProgressiveSearchifier
mojo.internal.Struct(
    pdf.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec, 'pdf.mojom.PdfProgressiveSearchifier_AddPage_Params', [
      mojo.internal.StructField('image', 0, 0, skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    pdf.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec, 'pdf.mojom.PdfProgressiveSearchifier_DeletePage_Params', [
      mojo.internal.StructField('page_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfProgressiveSearchifier_Save_ParamsSpec, 'pdf.mojom.PdfProgressiveSearchifier_Save_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    pdf.mojom.PdfProgressiveSearchifier_Save_ResponseParamsSpec, 'pdf.mojom.PdfProgressiveSearchifier_Save_ResponseParams', [
      mojo.internal.StructField('searchified_pdf', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

pdf.mojom.PdfProgressiveSearchifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.PdfProgressiveSearchifierRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfProgressiveSearchifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.PdfProgressiveSearchifierPendingReceiver,
      handle);
    this.$ = new pdf.mojom.PdfProgressiveSearchifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addPage(image, page_index) {
    return this.$.addPage(image, page_index);
  }
  deletePage(page_index) {
    return this.$.deletePage(page_index);
  }
  save() {
    return this.$.save();
  }
};

pdf.mojom.PdfProgressiveSearchifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PdfProgressiveSearchifier', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addPage(image, page_index) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      pdf.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec,
      null,
      [image, page_index],
      false);
  }

  deletePage(page_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      pdf.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec,
      null,
      [page_index],
      false);
  }

  save() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      pdf.mojom.PdfProgressiveSearchifier_Save_ParamsSpec,
      pdf.mojom.PdfProgressiveSearchifier_Save_ResponseParamsSpec,
      [],
      false);
  }

};

pdf.mojom.PdfProgressiveSearchifier.getRemote = function() {
  let remote = new pdf.mojom.PdfProgressiveSearchifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfProgressiveSearchifier',
    'context');
  return remote.$;
};

pdf.mojom.PdfProgressiveSearchifierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PdfProgressiveSearchifier', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfProgressiveSearchifier_Save_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec.$.structSpec);
          const result = this.impl.addPage(params.image, params.page_index);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec.$.structSpec);
          const result = this.impl.deletePage(params.page_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfProgressiveSearchifier_Save_ParamsSpec.$.structSpec);
          const result = this.impl.save();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfProgressiveSearchifier_Save_ResponseParamsSpec);
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

pdf.mojom.PdfProgressiveSearchifierReceiver = pdf.mojom.PdfProgressiveSearchifierReceiver;

pdf.mojom.PdfProgressiveSearchifierPtr = pdf.mojom.PdfProgressiveSearchifierRemote;
pdf.mojom.PdfProgressiveSearchifierRequest = pdf.mojom.PdfProgressiveSearchifierPendingReceiver;

