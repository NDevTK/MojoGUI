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
      mojo.internal.StructField('icon_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('subtitle', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DataContainer
mojo.internal.Struct(
    batch_upload.mojom.DataContainerSpec, 'batch_upload.mojom.DataContainer', [
      mojo.internal.StructField('section_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data_items', 8, 0, mojo.internal.Array(batch_upload.mojom.DataItemSpec.$, false), null, false, 0, undefined),
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
      mojo.internal.StructField('account_info', 0, 0, batch_upload.mojom.BatchUploadAccountInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dialog_subtitle', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data_containers', 16, 0, mojo.internal.Array(batch_upload.mojom.DataContainerSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_ParamsSpec, 'batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(batch_upload.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(batch_upload.mojom.PageHandlerSpec), null, false, 0, undefined),
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
      [page, handler],
      false);
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

batch_upload.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(batch_upload.mojom.PageHandlerFactory_CreateBatchUploadHandler_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createBatchUploadHandler');
          const result = this.impl.createBatchUploadHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

batch_upload.mojom.PageHandlerFactoryReceiver = batch_upload.mojom.PageHandlerFactoryReceiver;

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
    [[0, 8]]);

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
      [height],
      false);
  }

  saveToAccount(idsToMove) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      batch_upload.mojom.PageHandler_SaveToAccount_ParamsSpec,
      null,
      [idsToMove],
      false);
  }

  close() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      batch_upload.mojom.PageHandler_Close_ParamsSpec,
      null,
      [],
      false);
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

batch_upload.mojom.PageHandlerReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(batch_upload.mojom.PageHandler_UpdateViewHeight_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.updateViewHeight');
          const result = this.impl.updateViewHeight(params.height);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(batch_upload.mojom.PageHandler_SaveToAccount_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.saveToAccount');
          const result = this.impl.saveToAccount(params.idsToMove);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(batch_upload.mojom.PageHandler_Close_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

batch_upload.mojom.PageHandlerReceiver = batch_upload.mojom.PageHandlerReceiver;

batch_upload.mojom.PageHandlerPtr = batch_upload.mojom.PageHandlerRemote;
batch_upload.mojom.PageHandlerRequest = batch_upload.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    batch_upload.mojom.Page_SendBatchUploadData_ParamsSpec, 'batch_upload.mojom.Page_SendBatchUploadData_Params', [
      mojo.internal.StructField('data', 0, 0, batch_upload.mojom.BatchUploadDataSpec.$, null, false, 0, undefined),
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
      [data],
      false);
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

batch_upload.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(batch_upload.mojom.Page_SendBatchUploadData_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.sendBatchUploadData');
          const result = this.impl.sendBatchUploadData(params.data);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

batch_upload.mojom.PageReceiver = batch_upload.mojom.PageReceiver;

batch_upload.mojom.PagePtr = batch_upload.mojom.PageRemote;
batch_upload.mojom.PageRequest = batch_upload.mojom.PagePendingReceiver;

