// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/batch_upload_promo/batch_upload_promo.mojom
// Module: batch_upload_promo.mojom

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(batch_upload_promo.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(batch_upload_promo.mojom.PageHandlerRemote), null, false, 0, undefined),
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
  createBatchUploadPromoHandler(page, handler) {
    return this.$.createBatchUploadPromoHandler(page, handler);
  }
};

batch_upload_promo.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createBatchUploadPromoHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(batch_upload_promo.mojom.PageHandlerFactory_CreateBatchUploadPromoHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(batch_upload_promo.mojom.PageHandlerFactory_CreateBatchUploadPromoHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createBatchUploadPromoHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
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
  getBatchUploadPromoLocalDataCount() {
    return this.$.getBatchUploadPromoLocalDataCount();
  }
  onBatchUploadPromoClicked() {
    return this.$.onBatchUploadPromoClicked();
  }
};

batch_upload_promo.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getBatchUploadPromoLocalDataCount() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ParamsSpec,
      batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ResponseParamsSpec,
      [],
      false);
  }

  onBatchUploadPromoClicked() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(batch_upload_promo.mojom.PageHandler_OnBatchUploadPromoClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(batch_upload_promo.mojom.PageHandler_GetBatchUploadPromoLocalDataCount_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(batch_upload_promo.mojom.PageHandler_OnBatchUploadPromoClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onBatchUploadPromoClicked();
          break;
        }
      }
      } catch (err) {}
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
  onLocalDataCountChanged(local_data_count) {
    return this.$.onLocalDataCountChanged(local_data_count);
  }
};

batch_upload_promo.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
    ]);
  }

  onLocalDataCountChanged(local_data_count) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(batch_upload_promo.mojom.Page_OnLocalDataCountChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(batch_upload_promo.mojom.Page_OnLocalDataCountChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onLocalDataCountChanged(params.local_data_count);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

batch_upload_promo.mojom.PageReceiver = batch_upload_promo.mojom.PageReceiver;

batch_upload_promo.mojom.PagePtr = batch_upload_promo.mojom.PageRemote;
batch_upload_promo.mojom.PageRequest = batch_upload_promo.mojom.PagePendingReceiver;

