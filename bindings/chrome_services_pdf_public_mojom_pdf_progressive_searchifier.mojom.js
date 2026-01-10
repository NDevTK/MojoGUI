// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/pdf/public/mojom/pdf_progressive_searchifier.mojom
// Module: pdf.mojom

'use strict';

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
};

pdf.mojom.PdfProgressiveSearchifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addPage(image, page_index) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec,
      null,
      [image, page_index],
      false);
  }

  deletePage(page_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec,
      null,
      [page_index],
      false);
  }

  save() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: AddPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(pdf.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DeletePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(pdf.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeletePage (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Save
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(pdf.mojom.PdfProgressiveSearchifier_Save_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Save (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(pdf.mojom.PdfProgressiveSearchifier_AddPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addPage');
          const result = this.impl.addPage(params.image, params.page_index);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(pdf.mojom.PdfProgressiveSearchifier_DeletePage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deletePage');
          const result = this.impl.deletePage(params.page_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(pdf.mojom.PdfProgressiveSearchifier_Save_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.save');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

pdf.mojom.PdfProgressiveSearchifierReceiver = pdf.mojom.PdfProgressiveSearchifierReceiver;

pdf.mojom.PdfProgressiveSearchifierPtr = pdf.mojom.PdfProgressiveSearchifierRemote;
pdf.mojom.PdfProgressiveSearchifierRequest = pdf.mojom.PdfProgressiveSearchifierPendingReceiver;

