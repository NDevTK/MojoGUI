// Auto-generated MojoJS binding
// Source: chromium_src/pdf/mojom/pdf.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Enum: SaveRequestType
pdf.mojom.mojom.SaveRequestType = {
  kAnnotation: 0,
  kOriginal: 1,
  kEdited: 2,
  kSearchified: 3,
};
pdf.mojom.mojom.SaveRequestTypeSpec = { $: mojo.internal.Enum() };

// Enum: GetPdfBytesStatus
pdf.mojom.mojom.GetPdfBytesStatus = {
  kSuccess: 0,
  kSizeLimitExceeded: 1,
  kFailed: 2,
};
pdf.mojom.mojom.GetPdfBytesStatusSpec = { $: mojo.internal.Enum() };

// Struct: SaveDataBufferHandlerGetResult
pdf.mojom.mojom.SaveDataBufferHandlerGetResultSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.SaveDataBufferHandlerGetResult',
      packedSize: 24,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(pdf.mojom.SaveDataBufferHandlerRemote), nullable: false, minVersion: 0 },
        { name: 'total_file_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: SaveDataBufferHandler
pdf.mojom.mojom.SaveDataBufferHandler = {};

pdf.mojom.mojom.SaveDataBufferHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.mojom.SaveDataBufferHandlerRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.SaveDataBufferHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.mojom.SaveDataBufferHandlerPendingReceiver,
      handle);
    this.$ = new pdf.mojom.mojom.SaveDataBufferHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.mojom.SaveDataBufferHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read(offset, block_size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.mojom.SaveDataBufferHandler_Read_ParamsSpec,
      pdf.mojom.mojom.SaveDataBufferHandler_Read_ResponseParamsSpec,
      [offset, block_size]);
  }

};

pdf.mojom.mojom.SaveDataBufferHandler.getRemote = function() {
  let remote = new pdf.mojom.mojom.SaveDataBufferHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.SaveDataBufferHandler',
    'context');
  return remote.$;
};

// ParamsSpec for Read
pdf.mojom.mojom.SaveDataBufferHandler_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.SaveDataBufferHandler.Read_Params',
      packedSize: 16,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'block_size', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

pdf.mojom.mojom.SaveDataBufferHandler_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.SaveDataBufferHandler.Read_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'block', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
pdf.mojom.mojom.SaveDataBufferHandlerPtr = pdf.mojom.mojom.SaveDataBufferHandlerRemote;
pdf.mojom.mojom.SaveDataBufferHandlerRequest = pdf.mojom.mojom.SaveDataBufferHandlerPendingReceiver;


// Interface: PdfListener
pdf.mojom.mojom.PdfListener = {};

pdf.mojom.mojom.PdfListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.mojom.PdfListenerRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.mojom.PdfListenerPendingReceiver,
      handle);
    this.$ = new pdf.mojom.mojom.PdfListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.mojom.PdfListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setCaretPosition(position) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.mojom.PdfListener_SetCaretPosition_ParamsSpec,
      null,
      [position]);
  }

  moveRangeSelectionExtent(extent) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec,
      null,
      [extent]);
  }

  setSelectionBounds(base, extent) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      pdf.mojom.mojom.PdfListener_SetSelectionBounds_ParamsSpec,
      null,
      [base, extent]);
  }

  getPdfBytes(size_limit) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      pdf.mojom.mojom.PdfListener_GetPdfBytes_ParamsSpec,
      pdf.mojom.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec,
      [size_limit]);
  }

  getPageText(page_index) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      pdf.mojom.mojom.PdfListener_GetPageText_ParamsSpec,
      pdf.mojom.mojom.PdfListener_GetPageText_ResponseParamsSpec,
      [page_index]);
  }

  getMostVisiblePageIndex() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      pdf.mojom.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec,
      pdf.mojom.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec,
      []);
  }

  getSaveDataBufferHandlerForDrive(request_type) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      pdf.mojom.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec,
      pdf.mojom.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec,
      [request_type]);
  }

};

pdf.mojom.mojom.PdfListener.getRemote = function() {
  let remote = new pdf.mojom.mojom.PdfListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfListener',
    'context');
  return remote.$;
};

// ParamsSpec for SetCaretPosition
pdf.mojom.mojom.PdfListener_SetCaretPosition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.SetCaretPosition_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MoveRangeSelectionExtent
pdf.mojom.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.MoveRangeSelectionExtent_Params',
      packedSize: 16,
      fields: [
        { name: 'extent', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSelectionBounds
pdf.mojom.mojom.PdfListener_SetSelectionBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.SetSelectionBounds_Params',
      packedSize: 24,
      fields: [
        { name: 'base', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'extent', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetPdfBytes
pdf.mojom.mojom.PdfListener_GetPdfBytes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetPdfBytes_Params',
      packedSize: 16,
      fields: [
        { name: 'size_limit', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

pdf.mojom.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetPdfBytes_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: pdf.mojom.GetPdfBytesStatusSpec, nullable: false, minVersion: 0 },
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'page_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetPageText
pdf.mojom.mojom.PdfListener_GetPageText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetPageText_Params',
      packedSize: 16,
      fields: [
        { name: 'page_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

pdf.mojom.mojom.PdfListener_GetPageText_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetPageText_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMostVisiblePageIndex
pdf.mojom.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetMostVisiblePageIndex_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

pdf.mojom.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetMostVisiblePageIndex_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'page_index_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'page_index_$value', originalFieldName: 'page_index' } },
        { name: 'page_index_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'page_index_$flag', originalFieldName: 'page_index' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSaveDataBufferHandlerForDrive
pdf.mojom.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetSaveDataBufferHandlerForDrive_Params',
      packedSize: 16,
      fields: [
        { name: 'request_type', packedOffset: 0, packedBitOffset: 0, type: pdf.mojom.SaveRequestTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

pdf.mojom.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetSaveDataBufferHandlerForDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: pdf.mojom.SaveDataBufferHandlerGetResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
pdf.mojom.mojom.PdfListenerPtr = pdf.mojom.mojom.PdfListenerRemote;
pdf.mojom.mojom.PdfListenerRequest = pdf.mojom.mojom.PdfListenerPendingReceiver;


// Interface: PdfHost
pdf.mojom.mojom.PdfHost = {};

pdf.mojom.mojom.PdfHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

pdf.mojom.mojom.PdfHostRemote = class {
  static get $interfaceName() {
    return 'pdf.mojom.PdfHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      pdf.mojom.mojom.PdfHostPendingReceiver,
      handle);
    this.$ = new pdf.mojom.mojom.PdfHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

pdf.mojom.mojom.PdfHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setListener(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      pdf.mojom.mojom.PdfHost_SetListener_ParamsSpec,
      null,
      [client]);
  }

  onDocumentLoadComplete() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec,
      null,
      []);
  }

  updateContentRestrictions(restrictions) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      pdf.mojom.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec,
      null,
      [restrictions]);
  }

  saveUrlAs(url, policy) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      pdf.mojom.mojom.PdfHost_SaveUrlAs_ParamsSpec,
      null,
      [url, policy]);
  }

  selectionChanged(left, left_height, right, right_height) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      pdf.mojom.mojom.PdfHost_SelectionChanged_ParamsSpec,
      null,
      [left, left_height, right, right_height]);
  }

  setPluginCanSave(can_save) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      pdf.mojom.mojom.PdfHost_SetPluginCanSave_ParamsSpec,
      null,
      [can_save]);
  }

  onSearchifyStarted() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      pdf.mojom.mojom.PdfHost_OnSearchifyStarted_ParamsSpec,
      null,
      []);
  }

};

pdf.mojom.mojom.PdfHost.getRemote = function() {
  let remote = new pdf.mojom.mojom.PdfHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'pdf.mojom.PdfHost',
    'context');
  return remote.$;
};

// ParamsSpec for SetListener
pdf.mojom.mojom.PdfHost_SetListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfHost.SetListener_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(pdf.mojom.PdfListenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDocumentLoadComplete
pdf.mojom.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfHost.OnDocumentLoadComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateContentRestrictions
pdf.mojom.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfHost.UpdateContentRestrictions_Params',
      packedSize: 16,
      fields: [
        { name: 'restrictions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SaveUrlAs
pdf.mojom.mojom.PdfHost_SaveUrlAs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfHost.SaveUrlAs_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'policy', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ReferrerPolicySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SelectionChanged
pdf.mojom.mojom.PdfHost_SelectionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfHost.SelectionChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'left', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'left_height', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'right', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'right_height', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetPluginCanSave
pdf.mojom.mojom.PdfHost_SetPluginCanSave_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfHost.SetPluginCanSave_Params',
      packedSize: 16,
      fields: [
        { name: 'can_save', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSearchifyStarted
pdf.mojom.mojom.PdfHost_OnSearchifyStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfHost.OnSearchifyStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
pdf.mojom.mojom.PdfHostPtr = pdf.mojom.mojom.PdfHostRemote;
pdf.mojom.mojom.PdfHostRequest = pdf.mojom.mojom.PdfHostPendingReceiver;

