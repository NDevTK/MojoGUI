// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/signin/batch_upload/batch_upload.mojom
// Module: batch_upload.mojom

'use strict';

// Module namespace
var batch_upload = batch_upload || {};
batch_upload.mojom = batch_upload.mojom || {};


// Struct: DataItem
batch_upload.mojom.mojom.DataItemSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.DataItem',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'icon_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'subtitle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DataContainer
batch_upload.mojom.mojom.DataContainerSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.DataContainer',
      packedSize: 32,
      fields: [
        { name: 'section_title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data_items', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(batch_upload.mojom.DataItemSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_theme', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: BatchUploadAccountInfo
batch_upload.mojom.mojom.BatchUploadAccountInfoSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.BatchUploadAccountInfo',
      packedSize: 24,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data_picture_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BatchUploadData
batch_upload.mojom.mojom.BatchUploadDataSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.BatchUploadData',
      packedSize: 32,
      fields: [
        { name: 'account_info', packedOffset: 0, packedBitOffset: 0, type: batch_upload.mojom.BatchUploadAccountInfoSpec, nullable: false, minVersion: 0 },
        { name: 'dialog_subtitle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data_containers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(batch_upload.mojom.DataContainerSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: PageHandlerFactory
batch_upload.mojom.mojom.PageHandlerFactory = {};

batch_upload.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'batch_upload.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new batch_upload.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createBatchUploadHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      batch_upload.mojom.mojom.PageHandlerFactory_CreateBatchUploadHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

batch_upload.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new batch_upload.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateBatchUploadHandler
batch_upload.mojom.mojom.PageHandlerFactory_CreateBatchUploadHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.PageHandlerFactory.CreateBatchUploadHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
batch_upload.mojom.mojom.PageHandlerFactoryPtr = batch_upload.mojom.mojom.PageHandlerFactoryRemote;
batch_upload.mojom.mojom.PageHandlerFactoryRequest = batch_upload.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
batch_upload.mojom.mojom.PageHandler = {};

batch_upload.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'batch_upload.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new batch_upload.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateViewHeight(height) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      batch_upload.mojom.mojom.PageHandler_UpdateViewHeight_ParamsSpec,
      null,
      [height]);
  }

  saveToAccount(idsToMove) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      batch_upload.mojom.mojom.PageHandler_SaveToAccount_ParamsSpec,
      null,
      [idsToMove]);
  }

  close() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      batch_upload.mojom.mojom.PageHandler_Close_ParamsSpec,
      null,
      []);
  }

};

batch_upload.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new batch_upload.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateViewHeight
batch_upload.mojom.mojom.PageHandler_UpdateViewHeight_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.PageHandler.UpdateViewHeight_Params',
      packedSize: 16,
      fields: [
        { name: 'height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SaveToAccount
batch_upload.mojom.mojom.PageHandler_SaveToAccount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.PageHandler.SaveToAccount_Params',
      packedSize: 16,
      fields: [
        { name: 'idsToMove', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(mojo.internal.Int32, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Close
batch_upload.mojom.mojom.PageHandler_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.PageHandler.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
batch_upload.mojom.mojom.PageHandlerPtr = batch_upload.mojom.mojom.PageHandlerRemote;
batch_upload.mojom.mojom.PageHandlerRequest = batch_upload.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
batch_upload.mojom.mojom.Page = {};

batch_upload.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'batch_upload.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new batch_upload.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendBatchUploadData(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      batch_upload.mojom.mojom.Page_SendBatchUploadData_ParamsSpec,
      null,
      [data]);
  }

};

batch_upload.mojom.mojom.Page.getRemote = function() {
  let remote = new batch_upload.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SendBatchUploadData
batch_upload.mojom.mojom.Page_SendBatchUploadData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload.mojom.Page.SendBatchUploadData_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: batch_upload.mojom.BatchUploadDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
batch_upload.mojom.mojom.PagePtr = batch_upload.mojom.mojom.PageRemote;
batch_upload.mojom.mojom.PageRequest = batch_upload.mojom.mojom.PagePendingReceiver;

