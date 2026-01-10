// Auto-generated MojoJS binding
// Source: chromium_src/pdf/mojom/pdf.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};
var services = services || {};
var ui = ui || {};
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'pdf.mojom.SaveDataBufferHandler',
    'context');
  return remote.$;
};

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
      mojo.internal.StructField('page_index_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'page_index_$value', originalFieldName: 'page_index' }),
      mojo.internal.StructField('page_index_$value', 4, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'page_index_$flag', originalFieldName: 'page_index' }),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'pdf.mojom.PdfListener',
    'context');
  return remote.$;
};

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
      mojo.internal.StructField('left_height', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('right', 16, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('right_height', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'pdf.mojom.PdfHost',
    'context');
  return remote.$;
};

pdf.mojom.PdfHostPtr = pdf.mojom.PdfHostRemote;
pdf.mojom.PdfHostRequest = pdf.mojom.PdfHostPendingReceiver;

