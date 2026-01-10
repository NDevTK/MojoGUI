// Auto-generated MojoJS binding
// Source: chromium_src/pdf/mojom/pdf.mojom
// Module: pdf.mojom

'use strict';

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
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceProxy(pdf.mojom.SaveDataBufferHandlerSpec), null, false, 0, undefined),
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
};

pdf.mojom.SaveDataBufferHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read(offset, block_size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = pdf.mojom.SaveDataBufferHandler_Read_ParamsSpec.$.decode(message.payload);
          const result = this.impl.read(params.offset, params.block_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.SaveDataBufferHandler_Read_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
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
};

pdf.mojom.PdfListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setCaretPosition(position) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.PdfListener_SetCaretPosition_ParamsSpec,
      null,
      [position],
      false);
  }

  moveRangeSelectionExtent(extent) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec,
      null,
      [extent],
      false);
  }

  setSelectionBounds(base, extent) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec,
      null,
      [base, extent],
      false);
  }

  getPdfBytes(size_limit) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec,
      pdf.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec,
      [size_limit],
      false);
  }

  getPageText(page_index) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      pdf.mojom.PdfListener_GetPageText_ParamsSpec,
      pdf.mojom.PdfListener_GetPageText_ResponseParamsSpec,
      [page_index],
      false);
  }

  getMostVisiblePageIndex() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec,
      pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec,
      [],
      false);
  }

  getSaveDataBufferHandlerForDrive(request_type) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = pdf.mojom.PdfListener_SetCaretPosition_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCaretPosition(params.position);
          break;
        }
        case 1: {
          const params = pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.moveRangeSelectionExtent(params.extent);
          break;
        }
        case 2: {
          const params = pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSelectionBounds(params.base, params.extent);
          break;
        }
        case 3: {
          const params = pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPdfBytes(params.size_limit);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = pdf.mojom.PdfListener_GetPageText_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPageText(params.page_index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfListener_GetPageText_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 5: {
          const params = pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getMostVisiblePageIndex();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 6: {
          const params = pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSaveDataBufferHandlerForDrive(params.request_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

pdf.mojom.PdfListenerReceiver = pdf.mojom.PdfListenerReceiver;

pdf.mojom.PdfListenerPtr = pdf.mojom.PdfListenerRemote;
pdf.mojom.PdfListenerRequest = pdf.mojom.PdfListenerPendingReceiver;


// Interface: PdfHost
mojo.internal.Struct(
    pdf.mojom.PdfHost_SetListener_ParamsSpec, 'pdf.mojom.PdfHost_SetListener_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(pdf.mojom.PdfListenerSpec), null, false, 0, undefined),
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
};

pdf.mojom.PdfHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setListener(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.PdfHost_SetListener_ParamsSpec,
      null,
      [client],
      false);
  }

  onDocumentLoadComplete() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec,
      null,
      [],
      false);
  }

  updateContentRestrictions(restrictions) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec,
      null,
      [restrictions],
      false);
  }

  saveUrlAs(url, policy) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec,
      null,
      [url, policy],
      false);
  }

  selectionChanged(left, left_height, right, right_height) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      pdf.mojom.PdfHost_SelectionChanged_ParamsSpec,
      null,
      [left, left_height, right, right_height],
      false);
  }

  setPluginCanSave(can_save) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec,
      null,
      [can_save],
      false);
  }

  onSearchifyStarted() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = pdf.mojom.PdfHost_SetListener_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setListener(params.client);
          break;
        }
        case 1: {
          const params = pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDocumentLoadComplete();
          break;
        }
        case 2: {
          const params = pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateContentRestrictions(params.restrictions);
          break;
        }
        case 3: {
          const params = pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.saveUrlAs(params.url, params.policy);
          break;
        }
        case 4: {
          const params = pdf.mojom.PdfHost_SelectionChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectionChanged(params.left, params.left_height, params.right, params.right_height);
          break;
        }
        case 5: {
          const params = pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPluginCanSave(params.can_save);
          break;
        }
        case 6: {
          const params = pdf.mojom.PdfHost_OnSearchifyStarted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSearchifyStarted();
          break;
        }
      }
    });
  }
};

pdf.mojom.PdfHostReceiver = pdf.mojom.PdfHostReceiver;

pdf.mojom.PdfHostPtr = pdf.mojom.PdfHostRemote;
pdf.mojom.PdfHostRequest = pdf.mojom.PdfHostPendingReceiver;

