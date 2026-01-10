// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/batch_upload_promo/batch_upload_promo.mojom
// Module: batch_upload_promo.mojom

'use strict';

// Module namespace
var batch_upload_promo = batch_upload_promo || {};
batch_upload_promo.mojom = batch_upload_promo.mojom || {};

batch_upload_promo.mojom.PageHandlerFactory = {};
batch_upload_promo.mojom.PageHandlerFactory.$interfaceName = 'batch_upload_promo.mojom.PageHandlerFactory';
batch_upload_promo.mojom.PageHandlerFactory_CreateBatchUploadPromoHandler_ParamsSpec = { $: {} };
batch_upload_promo.mojom.PageHandler = {};
batch_upload_promo.mojom.PageHandler.$interfaceName = 'batch_upload_promo.mojom.PageHandler';
batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ParamsSpec = { $: {} };
batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ResponseParamsSpec = { $: {} };
batch_upload_promo.mojom.PageHandler_OnBatchUploadPromoClicked_ParamsSpec = { $: {} };
batch_upload_promo.mojom.Page = {};
batch_upload_promo.mojom.Page.$interfaceName = 'batch_upload_promo.mojom.Page';
batch_upload_promo.mojom.Page_OnLocalDataCountChanged_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    batch_upload_promo.mojom.PageHandlerFactory_CreateBatchUploadPromoHandler_ParamsSpec, 'batch_upload_promo.mojom.PageHandlerFactory_CreateBatchUploadPromoHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(batch_upload_promo.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(batch_upload_promo.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

batch_upload_promo.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload_promo.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'batch_upload_promo.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload_promo.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new batch_upload_promo.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload_promo.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createBatchUploadPromoHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      batch_upload_promo.mojom.PageHandlerFactory_CreateBatchUploadPromoHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

batch_upload_promo.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new batch_upload_promo.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload_promo.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

batch_upload_promo.mojom.PageHandlerFactoryReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateBatchUploadPromoHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(batch_upload_promo.mojom.PageHandlerFactory_CreateBatchUploadPromoHandler_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateBatchUploadPromoHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(batch_upload_promo.mojom.PageHandlerFactory_CreateBatchUploadPromoHandler_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createBatchUploadPromoHandler');
          const result = this.impl.createBatchUploadPromoHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

batch_upload_promo.mojom.PageHandlerFactoryReceiver = batch_upload_promo.mojom.PageHandlerFactoryReceiver;

batch_upload_promo.mojom.PageHandlerFactoryPtr = batch_upload_promo.mojom.PageHandlerFactoryRemote;
batch_upload_promo.mojom.PageHandlerFactoryRequest = batch_upload_promo.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ParamsSpec, 'batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ResponseParamsSpec, 'batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ResponseParams', [
      mojo.internal.StructField('local_data_count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    batch_upload_promo.mojom.PageHandler_OnBatchUploadPromoClicked_ParamsSpec, 'batch_upload_promo.mojom.PageHandler_OnBatchUploadPromoClicked_Params', [
    ],
    [[0, 8]]);

batch_upload_promo.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload_promo.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'batch_upload_promo.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload_promo.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new batch_upload_promo.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload_promo.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBatchUploadPromoLocalDataCount() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ParamsSpec,
      batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ResponseParamsSpec,
      [],
      false);
  }

  onBatchUploadPromoClicked() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      batch_upload_promo.mojom.PageHandler_OnBatchUploadPromoClicked_ParamsSpec,
      null,
      [],
      false);
  }

};

batch_upload_promo.mojom.PageHandler.getRemote = function() {
  let remote = new batch_upload_promo.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload_promo.mojom.PageHandler',
    'context');
  return remote.$;
};

batch_upload_promo.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetBatchUploadPromoLocalDataCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBatchUploadPromoLocalDataCount (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnBatchUploadPromoClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(batch_upload_promo.mojom.PageHandler_OnBatchUploadPromoClicked_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBatchUploadPromoClicked (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getBatchUploadPromoLocalDataCount');
          const result = this.impl.getBatchUploadPromoLocalDataCount();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(batch_upload_promo.mojom.PageHandler_OnBatchUploadPromoClicked_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onBatchUploadPromoClicked');
          const result = this.impl.onBatchUploadPromoClicked();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

batch_upload_promo.mojom.PageHandlerReceiver = batch_upload_promo.mojom.PageHandlerReceiver;

batch_upload_promo.mojom.PageHandlerPtr = batch_upload_promo.mojom.PageHandlerRemote;
batch_upload_promo.mojom.PageHandlerRequest = batch_upload_promo.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    batch_upload_promo.mojom.Page_OnLocalDataCountChanged_ParamsSpec, 'batch_upload_promo.mojom.Page_OnLocalDataCountChanged_Params', [
      mojo.internal.StructField('local_data_count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

batch_upload_promo.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

batch_upload_promo.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'batch_upload_promo.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      batch_upload_promo.mojom.PagePendingReceiver,
      handle);
    this.$ = new batch_upload_promo.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

batch_upload_promo.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLocalDataCountChanged(local_data_count) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      batch_upload_promo.mojom.Page_OnLocalDataCountChanged_ParamsSpec,
      null,
      [local_data_count],
      false);
  }

};

batch_upload_promo.mojom.Page.getRemote = function() {
  let remote = new batch_upload_promo.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'batch_upload_promo.mojom.Page',
    'context');
  return remote.$;
};

batch_upload_promo.mojom.PageReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnLocalDataCountChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(batch_upload_promo.mojom.Page_OnLocalDataCountChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLocalDataCountChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(batch_upload_promo.mojom.Page_OnLocalDataCountChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onLocalDataCountChanged');
          const result = this.impl.onLocalDataCountChanged(params.local_data_count);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

batch_upload_promo.mojom.PageReceiver = batch_upload_promo.mojom.PageReceiver;

batch_upload_promo.mojom.PagePtr = batch_upload_promo.mojom.PageRemote;
batch_upload_promo.mojom.PageRequest = batch_upload_promo.mojom.PagePendingReceiver;

