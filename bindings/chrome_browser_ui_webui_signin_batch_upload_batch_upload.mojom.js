// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/signin/batch_upload/batch_upload.mojom
// Module: batch_upload.mojom

'use strict';

// Module namespace
var batch_upload = batch_upload || {};
batch_upload.mojom = batch_upload.mojom || {};


// Struct: DataItem
batch_upload.mojom.DataItemSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.DataItem',
      packedSize: 16,
      fields: [
        { name: 'subtitle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DataContainer
batch_upload.mojom.DataContainerSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.DataContainer',
      packedSize: 16,
      fields: [
        { name: 'is_theme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BatchUploadAccountInfo
batch_upload.mojom.BatchUploadAccountInfoSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.BatchUploadAccountInfo',
      packedSize: 16,
      fields: [
        { name: 'data_picture_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BatchUploadData
batch_upload.mojom.BatchUploadDataSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.BatchUploadData',
      packedSize: 16,
      fields: [
        { name: 'data_containers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandlerFactory
batch_upload.mojom.PageHandlerFactory = {};

batch_upload.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'batch_upload.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new batch_upload.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createBatchUploadHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

batch_upload.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new batch_upload.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateBatchUploadHandler
batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.PageHandlerFactory.CreateBatchUploadHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
batch_upload.mojom.PageHandlerFactoryPtr = batch_upload.mojom.PageHandlerFactoryRemote;
batch_upload.mojom.PageHandlerFactoryRequest = batch_upload.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
batch_upload.mojom.PageHandler = {};

batch_upload.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'batch_upload.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new batch_upload.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateViewHeight(height) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      batch_upload.mojom.PageHandler_UpdateViewHeight_ParamsSpec,
      null,
      [height]);
  }

  saveToAccount(idsToMove) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      batch_upload.mojom.PageHandler_SaveToAccount_ParamsSpec,
      null,
      [idsToMove]);
  }

  close() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      batch_upload.mojom.PageHandler_Close_ParamsSpec,
      null,
      []);
  }

};

batch_upload.mojom.PageHandler.getRemote = function() {
  let remote = new batch_upload.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateViewHeight
batch_upload.mojom.PageHandler_UpdateViewHeight_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.PageHandler.UpdateViewHeight_Params',
      packedSize: 16,
      fields: [
        { name: 'height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SaveToAccount
batch_upload.mojom.PageHandler_SaveToAccount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.PageHandler.SaveToAccount_Params',
      packedSize: 16,
      fields: [
        { name: 'idsToMove', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Close
batch_upload.mojom.PageHandler_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.PageHandler.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
batch_upload.mojom.PageHandlerPtr = batch_upload.mojom.PageHandlerRemote;
batch_upload.mojom.PageHandlerRequest = batch_upload.mojom.PageHandlerPendingReceiver;


// Interface: Page
batch_upload.mojom.Page = {};

batch_upload.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'batch_upload.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload.mojom.PagePendingReceiver,
      handle);
    this.$ = new batch_upload.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendBatchUploadData(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      batch_upload.mojom.Page_SendBatchUploadData_ParamsSpec,
      null,
      [data]);
  }

};

batch_upload.mojom.Page.getRemote = function() {
  let remote = new batch_upload.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SendBatchUploadData
batch_upload.mojom.Page_SendBatchUploadData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.Page.SendBatchUploadData_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
batch_upload.mojom.PagePtr = batch_upload.mojom.PageRemote;
batch_upload.mojom.PageRequest = batch_upload.mojom.PagePendingReceiver;

