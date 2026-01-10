// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/signin/batch_upload/batch_upload.mojom
// Module: batch_upload.mojom

'use strict';

// Module namespace
var batch_upload = batch_upload || {};
batch_upload.mojom = batch_upload.mojom || {};

batch_upload.mojom.DataItemSpec = { $: {} };
batch_upload.mojom.DataContainerSpec = { $: {} };
batch_upload.mojom.BatchUploadAccountInfoSpec = { $: {} };
batch_upload.mojom.BatchUploadDataSpec = { $: {} };
batch_upload.mojom.PageHandlerFactory = {};
batch_upload.mojom.PageHandlerFactory.$interfaceName = 'batch_upload.mojom.PageHandlerFactory';
batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_ParamsSpec = { $: {} };
batch_upload.mojom.PageHandler = {};
batch_upload.mojom.PageHandler.$interfaceName = 'batch_upload.mojom.PageHandler';
batch_upload.mojom.PageHandler_UpdateViewHeight_ParamsSpec = { $: {} };
batch_upload.mojom.PageHandler_SaveToAccount_ParamsSpec = { $: {} };
batch_upload.mojom.PageHandler_Close_ParamsSpec = { $: {} };
batch_upload.mojom.Page = {};
batch_upload.mojom.Page.$interfaceName = 'batch_upload.mojom.Page';
batch_upload.mojom.Page_SendBatchUploadData_ParamsSpec = { $: {} };

// Struct: DataItem
mojo.internal.Struct(
    batch_upload.mojom.DataItemSpec, 'batch_upload.mojom.DataItem', [
      mojo.internal.StructField('id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('icon_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('subtitle', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DataContainer
mojo.internal.Struct(
    batch_upload.mojom.DataContainerSpec, 'batch_upload.mojom.DataContainer', [
      mojo.internal.StructField('section_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data_items', 8, 0, mojo.internal.Array(batch_upload.mojom.DataItemSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('is_theme', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BatchUploadAccountInfo
mojo.internal.Struct(
    batch_upload.mojom.BatchUploadAccountInfoSpec, 'batch_upload.mojom.BatchUploadAccountInfo', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data_picture_url', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BatchUploadData
mojo.internal.Struct(
    batch_upload.mojom.BatchUploadDataSpec, 'batch_upload.mojom.BatchUploadData', [
      mojo.internal.StructField('account_info', 0, 0, batch_upload.mojom.BatchUploadAccountInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('dialog_subtitle', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data_containers', 16, 0, mojo.internal.Array(batch_upload.mojom.DataContainerSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_ParamsSpec, 'batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(batch_upload.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(batch_upload.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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

batch_upload.mojom.PageHandlerFactoryPtr = batch_upload.mojom.PageHandlerFactoryRemote;
batch_upload.mojom.PageHandlerFactoryRequest = batch_upload.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    batch_upload.mojom.PageHandler_UpdateViewHeight_ParamsSpec, 'batch_upload.mojom.PageHandler_UpdateViewHeight_Params', [
      mojo.internal.StructField('height', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    batch_upload.mojom.PageHandler_SaveToAccount_ParamsSpec, 'batch_upload.mojom.PageHandler_SaveToAccount_Params', [
      mojo.internal.StructField('idsToMove', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Int32, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    batch_upload.mojom.PageHandler_Close_ParamsSpec, 'batch_upload.mojom.PageHandler_Close_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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

batch_upload.mojom.PageHandlerPtr = batch_upload.mojom.PageHandlerRemote;
batch_upload.mojom.PageHandlerRequest = batch_upload.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    batch_upload.mojom.Page_SendBatchUploadData_ParamsSpec, 'batch_upload.mojom.Page_SendBatchUploadData_Params', [
      mojo.internal.StructField('data', 0, 0, batch_upload.mojom.BatchUploadDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

batch_upload.mojom.PagePtr = batch_upload.mojom.PageRemote;
batch_upload.mojom.PageRequest = batch_upload.mojom.PagePendingReceiver;

