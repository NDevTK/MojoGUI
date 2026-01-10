// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/batch_upload_promo/batch_upload_promo.mojom
// Module: batch_upload_promo.mojom

'use strict';

// Module namespace
var batch_upload_promo = batch_upload_promo || {};
batch_upload_promo.mojom = batch_upload_promo.mojom || {};


// Interface: PageHandlerFactory
batch_upload_promo.mojom.mojom.PageHandlerFactory = {};

batch_upload_promo.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload_promo.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'batch_upload_promo.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload_promo.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new batch_upload_promo.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload_promo.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createBatchUploadPromoHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      batch_upload_promo.mojom.mojom.PageHandlerFactory_CreateBatchUploadPromoHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

batch_upload_promo.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new batch_upload_promo.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload_promo.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateBatchUploadPromoHandler
batch_upload_promo.mojom.mojom.PageHandlerFactory_CreateBatchUploadPromoHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload_promo.mojom.PageHandlerFactory.CreateBatchUploadPromoHandler_Params',
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
batch_upload_promo.mojom.mojom.PageHandlerFactoryPtr = batch_upload_promo.mojom.mojom.PageHandlerFactoryRemote;
batch_upload_promo.mojom.mojom.PageHandlerFactoryRequest = batch_upload_promo.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
batch_upload_promo.mojom.mojom.PageHandler = {};

batch_upload_promo.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload_promo.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'batch_upload_promo.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload_promo.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new batch_upload_promo.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload_promo.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBatchUploadPromoLocalDataCount() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      batch_upload_promo.mojom.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ParamsSpec,
      batch_upload_promo.mojom.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ResponseParamsSpec,
      []);
  }

  onBatchUploadPromoClicked() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      batch_upload_promo.mojom.mojom.PageHandler_OnBatchUploadPromoClicked_ParamsSpec,
      null,
      []);
  }

};

batch_upload_promo.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new batch_upload_promo.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload_promo.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetBatchUploadPromoLocalDataCount
batch_upload_promo.mojom.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload_promo.mojom.PageHandler.GetBatchUploadPromoLocalDataCount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

batch_upload_promo.mojom.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload_promo.mojom.PageHandler.GetBatchUploadPromoLocalDataCount_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'local_data_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBatchUploadPromoClicked
batch_upload_promo.mojom.mojom.PageHandler_OnBatchUploadPromoClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload_promo.mojom.PageHandler.OnBatchUploadPromoClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
batch_upload_promo.mojom.mojom.PageHandlerPtr = batch_upload_promo.mojom.mojom.PageHandlerRemote;
batch_upload_promo.mojom.mojom.PageHandlerRequest = batch_upload_promo.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
batch_upload_promo.mojom.mojom.Page = {};

batch_upload_promo.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload_promo.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'batch_upload_promo.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload_promo.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new batch_upload_promo.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload_promo.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLocalDataCountChanged(local_data_count) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      batch_upload_promo.mojom.mojom.Page_OnLocalDataCountChanged_ParamsSpec,
      null,
      [local_data_count]);
  }

};

batch_upload_promo.mojom.mojom.Page.getRemote = function() {
  let remote = new batch_upload_promo.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload_promo.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnLocalDataCountChanged
batch_upload_promo.mojom.mojom.Page_OnLocalDataCountChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'batch_upload_promo.mojom.Page.OnLocalDataCountChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'local_data_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
batch_upload_promo.mojom.mojom.PagePtr = batch_upload_promo.mojom.mojom.PageRemote;
batch_upload_promo.mojom.mojom.PageRequest = batch_upload_promo.mojom.mojom.PagePendingReceiver;

