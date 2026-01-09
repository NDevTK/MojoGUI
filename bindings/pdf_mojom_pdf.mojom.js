// Auto-generated MojoJS binding
// Source: chromium_src/pdf/mojom/pdf.mojom
// Module: pdf.mojom

'use strict';

// Module namespace
var pdf = pdf || {};
pdf.mojom = pdf.mojom || {};


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

// Interface: SaveDataBufferHandler
pdf.mojom.SaveDataBufferHandler = {};

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
      pdf.mojom.SaveDataBufferHandler_Read_ResponseParamsSpec,
      [offset, block_size],
      undefined,
      undefined
    );
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

// ParamsSpec for Read
pdf.mojom.SaveDataBufferHandler_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.SaveDataBufferHandler.Read_Params',
      packedSize: 24,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'block_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

pdf.mojom.SaveDataBufferHandler_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.SaveDataBufferHandler.Read_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'block', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
pdf.mojom.SaveDataBufferHandlerPtr = pdf.mojom.SaveDataBufferHandlerRemote;
pdf.mojom.SaveDataBufferHandlerRequest = pdf.mojom.SaveDataBufferHandlerPendingReceiver;


// Interface: PdfListener
pdf.mojom.PdfListener = {};

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
      null,
      [position],
      undefined,
      undefined
    );
  }

  moveRangeSelectionExtent(extent) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec,
      null,
      null,
      [extent],
      undefined,
      undefined
    );
  }

  setSelectionBounds(base, extent) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec,
      null,
      null,
      [base, extent],
      undefined,
      undefined
    );
  }

  getPdfBytes(size_limit) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec,
      pdf.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec,
      pdf.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec,
      [size_limit],
      undefined,
      undefined
    );
  }

  getPageText(page_index) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      pdf.mojom.PdfListener_GetPageText_ParamsSpec,
      pdf.mojom.PdfListener_GetPageText_ResponseParamsSpec,
      pdf.mojom.PdfListener_GetPageText_ResponseParamsSpec,
      [page_index],
      undefined,
      undefined
    );
  }

  getMostVisiblePageIndex() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec,
      pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec,
      pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getSaveDataBufferHandlerForDrive(request_type) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec,
      pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec,
      pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec,
      [request_type],
      undefined,
      undefined
    );
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

// ParamsSpec for SetCaretPosition
pdf.mojom.PdfListener_SetCaretPosition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.SetCaretPosition_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MoveRangeSelectionExtent
pdf.mojom.PdfListener_MoveRangeSelectionExtent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.MoveRangeSelectionExtent_Params',
      packedSize: 16,
      fields: [
        { name: 'extent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSelectionBounds
pdf.mojom.PdfListener_SetSelectionBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.SetSelectionBounds_Params',
      packedSize: 24,
      fields: [
        { name: 'base', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'extent', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetPdfBytes
pdf.mojom.PdfListener_GetPdfBytes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetPdfBytes_Params',
      packedSize: 16,
      fields: [
        { name: 'size_limit', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

pdf.mojom.PdfListener_GetPdfBytes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetPdfBytes_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'page_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetPageText
pdf.mojom.PdfListener_GetPageText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetPageText_Params',
      packedSize: 16,
      fields: [
        { name: 'page_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

pdf.mojom.PdfListener_GetPageText_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetPageText_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMostVisiblePageIndex
pdf.mojom.PdfListener_GetMostVisiblePageIndex_ParamsSpec = {
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

pdf.mojom.PdfListener_GetMostVisiblePageIndex_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetMostVisiblePageIndex_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'page_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSaveDataBufferHandlerForDrive
pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetSaveDataBufferHandlerForDrive_Params',
      packedSize: 16,
      fields: [
        { name: 'request_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

pdf.mojom.PdfListener_GetSaveDataBufferHandlerForDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfListener.GetSaveDataBufferHandlerForDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
pdf.mojom.PdfListenerPtr = pdf.mojom.PdfListenerRemote;
pdf.mojom.PdfListenerRequest = pdf.mojom.PdfListenerPendingReceiver;


// Interface: PdfHost
pdf.mojom.PdfHost = {};

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
      null,
      [client],
      undefined,
      undefined
    );
  }

  onDocumentLoadComplete() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  updateContentRestrictions(restrictions) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec,
      null,
      null,
      [restrictions],
      undefined,
      undefined
    );
  }

  saveUrlAs(url, policy) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec,
      null,
      null,
      [url, policy],
      undefined,
      undefined
    );
  }

  selectionChanged(left, left_height, right, right_height) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      pdf.mojom.PdfHost_SelectionChanged_ParamsSpec,
      null,
      null,
      [left, left_height, right, right_height],
      undefined,
      undefined
    );
  }

  setPluginCanSave(can_save) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec,
      null,
      null,
      [can_save],
      undefined,
      undefined
    );
  }

  onSearchifyStarted() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      pdf.mojom.PdfHost_OnSearchifyStarted_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for SetListener
pdf.mojom.PdfHost_SetListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfHost.SetListener_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDocumentLoadComplete
pdf.mojom.PdfHost_OnDocumentLoadComplete_ParamsSpec = {
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
pdf.mojom.PdfHost_UpdateContentRestrictions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfHost.UpdateContentRestrictions_Params',
      packedSize: 16,
      fields: [
        { name: 'restrictions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SaveUrlAs
pdf.mojom.PdfHost_SaveUrlAs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfHost.SaveUrlAs_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'policy', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SelectionChanged
pdf.mojom.PdfHost_SelectionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfHost.SelectionChanged_Params',
      packedSize: 40,
      fields: [
        { name: 'left', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'left_height', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'right', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'right_height', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for SetPluginCanSave
pdf.mojom.PdfHost_SetPluginCanSave_ParamsSpec = {
  $: {
    structSpec: {
      name: 'pdf.mojom.PdfHost.SetPluginCanSave_Params',
      packedSize: 16,
      fields: [
        { name: 'can_save', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSearchifyStarted
pdf.mojom.PdfHost_OnSearchifyStarted_ParamsSpec = {
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
pdf.mojom.PdfHostPtr = pdf.mojom.PdfHostRemote;
pdf.mojom.PdfHostRequest = pdf.mojom.PdfHostPendingReceiver;

