// Auto-generated MojoJS binding
// Source: chromium_src/pdf/mojom/pdf.mojom
// Module: pdf.mojom

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var gfx = gfx || {};
var url = url || {};

pdf.mojom.SaveRequestTypeSpec = { $: mojo.internal.Enum() };
pdf.mojom.GetPdfBytesStatusSpec = { $: mojo.internal.Enum() };
pdf.mojom.SaveDataBufferHandlerGetResultSpec = { $: {} };
pdf.mojom.SaveDataBufferHandler = {};
pdf.mojom.SaveDataBufferHandler.$interfaceName = 'pdf.mojom.SaveDataBufferHandler';
pdf.mojom.SaveDataBufferHandler_Read_ParamsSpec = { $: {} };
pdf.mojom.SaveDataBufferHandler_Read_ResponseParamsSpec = { $: {} };
pdf.mojom.PdfListener = {};
pdf.mojom.PdfListener.$interfaceName = 'pdf.mojom.PdfListener';
pdf.mojom.PdfListener_SetCaretPosition_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetPageText_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetPageText_ResponseParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec = { $: {} };
pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec = { $: {} };
pdf.mojom.PdfHost = {};
pdf.mojom.PdfHost.$interfaceName = 'pdf.mojom.PdfHost';
pdf.mojom.PdfHost_SetListener_ParamsSpec = { $: {} };
pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec = { $: {} };
pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec = { $: {} };
pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec = { $: {} };
pdf.mojom.PdfHost_SelectionChanged_ParamsSpec = { $: {} };
pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec = { $: {} };
pdf.mojom.PdfHost_OnSearchifyStarted_ParamsSpec = { $: {} };

// Enum: SaveRequestType
pdf.mojom.SaveRequestType = {
  kAnnotation: 0,
  kOriginal: 1,
  kEdited: 2,
  kSearchified: 3,
};

// Enum: GetPdfBytesStatus
pdf.mojom.GetPdfBytesStatus = {
  kSuccess: 0,
  kSizeLimitExceeded: 1,
  kFailed: 2,
};

// Struct: SaveDataBufferHandlerGetResult
mojo.internal.Struct(
    pdf.mojom.SaveDataBufferHandlerGetResultSpec, 'pdf.mojom.SaveDataBufferHandlerGetResult', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceProxy(pdf.mojom.SaveDataBufferHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('total_file_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SaveDataBufferHandler
mojo.internal.Struct(
    pdf.mojom.SaveDataBufferHandler_Read_ParamsSpec, 'pdf.mojom.SaveDataBufferHandler_Read_Params', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('block_size', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.SaveDataBufferHandler_Read_ResponseParamsSpec, 'pdf.mojom.SaveDataBufferHandler_Read_ResponseParams', [
      mojo.internal.StructField('block', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

pdf.mojom.SaveDataBufferHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.SaveDataBufferHandlerRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.SaveDataBufferHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.SaveDataBufferHandlerPendingReceiver,
      handle);
    this.$ = new pdf.mojom.SaveDataBufferHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  read(offset, block_size) {
    return this.$.read(offset, block_size);
  }
};

pdf.mojom.SaveDataBufferHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SaveDataBufferHandler', [
      { explicit: null },
    ]);
  }

  read(offset, block_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      pdf.mojom.SaveDataBufferHandler_Read_ParamsSpec,
      pdf.mojom.SaveDataBufferHandler_Read_ResponseParamsSpec,
      [offset, block_size],
      false);
  }

};

pdf.mojom.SaveDataBufferHandler.getRemote = function() {
  let remote = new pdf.mojom.SaveDataBufferHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.SaveDataBufferHandler',
    'context');
  return remote.$;
};

pdf.mojom.SaveDataBufferHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SaveDataBufferHandler', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(pdf.mojom.SaveDataBufferHandler_Read_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.SaveDataBufferHandler_Read_ParamsSpec.$.structSpec);
          const result = this.impl.read(params.offset, params.block_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.SaveDataBufferHandler_Read_ResponseParamsSpec);
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

pdf.mojom.SaveDataBufferHandlerReceiver = pdf.mojom.SaveDataBufferHandlerReceiver;

pdf.mojom.SaveDataBufferHandlerPtr = pdf.mojom.SaveDataBufferHandlerRemote;
pdf.mojom.SaveDataBufferHandlerRequest = pdf.mojom.SaveDataBufferHandlerPendingReceiver;


// Interface: PdfListener
mojo.internal.Struct(
    pdf.mojom.PdfListener_SetCaretPosition_ParamsSpec, 'pdf.mojom.PdfListener_SetCaretPosition_Params', [
      mojo.internal.StructField('position', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec, 'pdf.mojom.PdfListener_MoveRangeSelectionExtent_Params', [
      mojo.internal.StructField('extent', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec, 'pdf.mojom.PdfListener_SetSelectionBounds_Params', [
      mojo.internal.StructField('base', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extent', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec, 'pdf.mojom.PdfListener_GetPdfBytes_Params', [
      mojo.internal.StructField('size_limit', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec, 'pdf.mojom.PdfListener_GetPdfBytes_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, pdf.mojom.GetPdfBytesStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bytes', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('page_count', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetPageText_ParamsSpec, 'pdf.mojom.PdfListener_GetPageText_Params', [
      mojo.internal.StructField('page_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetPageText_ResponseParamsSpec, 'pdf.mojom.PdfListener_GetPageText_ResponseParams', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec, 'pdf.mojom.PdfListener_GetMostVisiblePageIndex_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec, 'pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParams', [
      mojo.internal.StructField('page_index_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'page_index_$flag', originalFieldName: 'page_index' }),
      mojo.internal.StructField('page_index_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'page_index_$value', originalFieldName: 'page_index' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec, 'pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_Params', [
      mojo.internal.StructField('request_type', 0, 0, pdf.mojom.SaveRequestTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec, 'pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, pdf.mojom.SaveDataBufferHandlerGetResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

pdf.mojom.PdfListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.PdfListenerRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.PdfListenerPendingReceiver,
      handle);
    this.$ = new pdf.mojom.PdfListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setCaretPosition(position) {
    return this.$.setCaretPosition(position);
  }
  moveRangeSelectionExtent(extent) {
    return this.$.moveRangeSelectionExtent(extent);
  }
  setSelectionBounds(base, extent) {
    return this.$.setSelectionBounds(base, extent);
  }
  getPdfBytes(size_limit) {
    return this.$.getPdfBytes(size_limit);
  }
  getPageText(page_index) {
    return this.$.getPageText(page_index);
  }
  getMostVisiblePageIndex() {
    return this.$.getMostVisiblePageIndex();
  }
  getSaveDataBufferHandlerForDrive(request_type) {
    return this.$.getSaveDataBufferHandlerForDrive(request_type);
  }
};

pdf.mojom.PdfListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PdfListener', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setCaretPosition(position) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      pdf.mojom.PdfListener_SetCaretPosition_ParamsSpec,
      null,
      [position],
      false);
  }

  moveRangeSelectionExtent(extent) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec,
      null,
      [extent],
      false);
  }

  setSelectionBounds(base, extent) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec,
      null,
      [base, extent],
      false);
  }

  getPdfBytes(size_limit) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec,
      pdf.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec,
      [size_limit],
      false);
  }

  getPageText(page_index) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      pdf.mojom.PdfListener_GetPageText_ParamsSpec,
      pdf.mojom.PdfListener_GetPageText_ResponseParamsSpec,
      [page_index],
      false);
  }

  getMostVisiblePageIndex() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec,
      pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec,
      [],
      false);
  }

  getSaveDataBufferHandlerForDrive(request_type) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec,
      pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec,
      [request_type],
      false);
  }

};

pdf.mojom.PdfListener.getRemote = function() {
  let remote = new pdf.mojom.PdfListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfListener',
    'context');
  return remote.$;
};

pdf.mojom.PdfListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PdfListener', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(pdf.mojom.PdfListener_SetCaretPosition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfListener_GetPageText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_SetCaretPosition_ParamsSpec.$.structSpec);
          const result = this.impl.setCaretPosition(params.position);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec.$.structSpec);
          const result = this.impl.moveRangeSelectionExtent(params.extent);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec.$.structSpec);
          const result = this.impl.setSelectionBounds(params.base, params.extent);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec.$.structSpec);
          const result = this.impl.getPdfBytes(params.size_limit);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_GetPageText_ParamsSpec.$.structSpec);
          const result = this.impl.getPageText(params.page_index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfListener_GetPageText_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec.$.structSpec);
          const result = this.impl.getMostVisiblePageIndex();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec.$.structSpec);
          const result = this.impl.getSaveDataBufferHandlerForDrive(params.request_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec);
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

pdf.mojom.PdfListenerReceiver = pdf.mojom.PdfListenerReceiver;

pdf.mojom.PdfListenerPtr = pdf.mojom.PdfListenerRemote;
pdf.mojom.PdfListenerRequest = pdf.mojom.PdfListenerPendingReceiver;


// Interface: PdfHost
mojo.internal.Struct(
    pdf.mojom.PdfHost_SetListener_ParamsSpec, 'pdf.mojom.PdfHost_SetListener_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(pdf.mojom.PdfListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec, 'pdf.mojom.PdfHost_OnDocumentLoadComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec, 'pdf.mojom.PdfHost_UpdateContentRestrictions_Params', [
      mojo.internal.StructField('restrictions', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec, 'pdf.mojom.PdfHost_SaveUrlAs_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('policy', 8, 0, network.mojom.ReferrerPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    pdf.mojom.PdfHost_SelectionChanged_ParamsSpec, 'pdf.mojom.PdfHost_SelectionChanged_Params', [
      mojo.internal.StructField('left', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('right', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('left_height', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('right_height', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec, 'pdf.mojom.PdfHost_SetPluginCanSave_Params', [
      mojo.internal.StructField('can_save', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    pdf.mojom.PdfHost_OnSearchifyStarted_ParamsSpec, 'pdf.mojom.PdfHost_OnSearchifyStarted_Params', [
    ],
    [[0, 8]]);

pdf.mojom.PdfHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.PdfHostRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.PdfHostPendingReceiver,
      handle);
    this.$ = new pdf.mojom.PdfHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setListener(client) {
    return this.$.setListener(client);
  }
  onDocumentLoadComplete() {
    return this.$.onDocumentLoadComplete();
  }
  updateContentRestrictions(restrictions) {
    return this.$.updateContentRestrictions(restrictions);
  }
  saveUrlAs(url, policy) {
    return this.$.saveUrlAs(url, policy);
  }
  selectionChanged(left, left_height, right, right_height) {
    return this.$.selectionChanged(left, left_height, right, right_height);
  }
  setPluginCanSave(can_save) {
    return this.$.setPluginCanSave(can_save);
  }
  onSearchifyStarted() {
    return this.$.onSearchifyStarted();
  }
};

pdf.mojom.PdfHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PdfHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setListener(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      pdf.mojom.PdfHost_SetListener_ParamsSpec,
      null,
      [client],
      false);
  }

  onDocumentLoadComplete() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec,
      null,
      [],
      false);
  }

  updateContentRestrictions(restrictions) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec,
      null,
      [restrictions],
      false);
  }

  saveUrlAs(url, policy) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec,
      null,
      [url, policy],
      false);
  }

  selectionChanged(left, left_height, right, right_height) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      pdf.mojom.PdfHost_SelectionChanged_ParamsSpec,
      null,
      [left, left_height, right, right_height],
      false);
  }

  setPluginCanSave(can_save) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec,
      null,
      [can_save],
      false);
  }

  onSearchifyStarted() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      pdf.mojom.PdfHost_OnSearchifyStarted_ParamsSpec,
      null,
      [],
      false);
  }

};

pdf.mojom.PdfHost.getRemote = function() {
  let remote = new pdf.mojom.PdfHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfHost',
    'context');
  return remote.$;
};

pdf.mojom.PdfHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PdfHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(pdf.mojom.PdfHost_SetListener_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfHost_SelectionChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(pdf.mojom.PdfHost_OnSearchifyStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_SetListener_ParamsSpec.$.structSpec);
          const result = this.impl.setListener(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onDocumentLoadComplete();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec.$.structSpec);
          const result = this.impl.updateContentRestrictions(params.restrictions);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec.$.structSpec);
          const result = this.impl.saveUrlAs(params.url, params.policy);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_SelectionChanged_ParamsSpec.$.structSpec);
          const result = this.impl.selectionChanged(params.left, params.left_height, params.right, params.right_height);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec.$.structSpec);
          const result = this.impl.setPluginCanSave(params.can_save);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(pdf.mojom.PdfHost_OnSearchifyStarted_ParamsSpec.$.structSpec);
          const result = this.impl.onSearchifyStarted();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

pdf.mojom.PdfHostReceiver = pdf.mojom.PdfHostReceiver;

pdf.mojom.PdfHostPtr = pdf.mojom.PdfHostRemote;
pdf.mojom.PdfHostRequest = pdf.mojom.PdfHostPendingReceiver;

