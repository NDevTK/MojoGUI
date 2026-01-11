// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/files/mojom/google_drive_handler.mojom
// Module: ash.settings.google_drive.mojom

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.google_drive = ash.settings.google_drive || {};
ash.settings.google_drive.mojom = ash.settings.google_drive.mojom || {};
var drivefs = drivefs || {};

ash.settings.google_drive.mojom.StatusSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandlerFactory = {};
ash.settings.google_drive.mojom.PageHandlerFactory.$interfaceName = 'ash.settings.google_drive.mojom.PageHandlerFactory';
ash.settings.google_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandler = {};
ash.settings.google_drive.mojom.PageHandler.$interfaceName = 'ash.settings.google_drive.mojom.PageHandler';
ash.settings.google_drive.mojom.PageHandler_CalculateRequiredSpace_ParamsSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ParamsSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ResponseParamsSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ParamsSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ResponseParamsSpec = { $: {} };
ash.settings.google_drive.mojom.PageHandler_RecordBulkPinningEnabledMetric_ParamsSpec = { $: {} };
ash.settings.google_drive.mojom.Page = {};
ash.settings.google_drive.mojom.Page.$interfaceName = 'ash.settings.google_drive.mojom.Page';
ash.settings.google_drive.mojom.Page_OnServiceUnavailable_ParamsSpec = { $: {} };
ash.settings.google_drive.mojom.Page_OnProgress_ParamsSpec = { $: {} };

// Struct: Status
mojo.internal.Struct(
    ash.settings.google_drive.mojom.StatusSpec, 'ash.settings.google_drive.mojom.Status', [
      mojo.internal.StructField('required_space', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('free_space', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stage', 16, 0, drivefs.pinning_manager_types.mojom.StageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listed_files', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('is_error', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.settings.google_drive.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.settings.google_drive.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.settings.google_drive.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.settings.google_drive.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.google_drive.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.settings.google_drive.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.google_drive.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.settings.google_drive.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

ash.settings.google_drive.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.google_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

ash.settings.google_drive.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.google_drive.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.google_drive.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.settings.google_drive.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(ash.settings.google_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.google_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.settings.google_drive.mojom.PageHandlerFactoryReceiver = ash.settings.google_drive.mojom.PageHandlerFactoryReceiver;

ash.settings.google_drive.mojom.PageHandlerFactoryPtr = ash.settings.google_drive.mojom.PageHandlerFactoryRemote;
ash.settings.google_drive.mojom.PageHandlerFactoryRequest = ash.settings.google_drive.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandler_CalculateRequiredSpace_ParamsSpec, 'ash.settings.google_drive.mojom.PageHandler_CalculateRequiredSpace_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ParamsSpec, 'ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ResponseParamsSpec, 'ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ResponseParams', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ParamsSpec, 'ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ResponseParamsSpec, 'ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.google_drive.mojom.PageHandler_RecordBulkPinningEnabledMetric_ParamsSpec, 'ash.settings.google_drive.mojom.PageHandler_RecordBulkPinningEnabledMetric_Params', [
    ],
    [[0, 8]]);

ash.settings.google_drive.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.google_drive.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.google_drive.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.google_drive.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.google_drive.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  calculateRequiredSpace() {
    return this.$.calculateRequiredSpace();
  }
  getContentCacheSize() {
    return this.$.getContentCacheSize();
  }
  clearPinnedFiles() {
    return this.$.clearPinnedFiles();
  }
  recordBulkPinningEnabledMetric() {
    return this.$.recordBulkPinningEnabledMetric();
  }
};

ash.settings.google_drive.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  calculateRequiredSpace() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.google_drive.mojom.PageHandler_CalculateRequiredSpace_ParamsSpec,
      null,
      [],
      false);
  }

  getContentCacheSize() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ParamsSpec,
      ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ResponseParamsSpec,
      [],
      false);
  }

  clearPinnedFiles() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ParamsSpec,
      ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ResponseParamsSpec,
      [],
      false);
  }

  recordBulkPinningEnabledMetric() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.settings.google_drive.mojom.PageHandler_RecordBulkPinningEnabledMetric_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.settings.google_drive.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.google_drive.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.google_drive.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.settings.google_drive.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(ash.settings.google_drive.mojom.PageHandler_CalculateRequiredSpace_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.google_drive.mojom.PageHandler_RecordBulkPinningEnabledMetric_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.google_drive.mojom.PageHandler_CalculateRequiredSpace_ParamsSpec.$.structSpec);
          const result = this.impl.calculateRequiredSpace();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ParamsSpec.$.structSpec);
          const result = this.impl.getContentCacheSize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.google_drive.mojom.PageHandler_GetContentCacheSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ParamsSpec.$.structSpec);
          const result = this.impl.clearPinnedFiles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.google_drive.mojom.PageHandler_ClearPinnedFiles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.google_drive.mojom.PageHandler_RecordBulkPinningEnabledMetric_ParamsSpec.$.structSpec);
          const result = this.impl.recordBulkPinningEnabledMetric();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.settings.google_drive.mojom.PageHandlerReceiver = ash.settings.google_drive.mojom.PageHandlerReceiver;

ash.settings.google_drive.mojom.PageHandlerPtr = ash.settings.google_drive.mojom.PageHandlerRemote;
ash.settings.google_drive.mojom.PageHandlerRequest = ash.settings.google_drive.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    ash.settings.google_drive.mojom.Page_OnServiceUnavailable_ParamsSpec, 'ash.settings.google_drive.mojom.Page_OnServiceUnavailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.google_drive.mojom.Page_OnProgress_ParamsSpec, 'ash.settings.google_drive.mojom.Page_OnProgress_Params', [
      mojo.internal.StructField('status', 0, 0, ash.settings.google_drive.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.google_drive.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.google_drive.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.settings.google_drive.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.google_drive.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.settings.google_drive.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onServiceUnavailable() {
    return this.$.onServiceUnavailable();
  }
  onProgress(status) {
    return this.$.onProgress(status);
  }
};

ash.settings.google_drive.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onServiceUnavailable() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.google_drive.mojom.Page_OnServiceUnavailable_ParamsSpec,
      null,
      [],
      false);
  }

  onProgress(status) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.settings.google_drive.mojom.Page_OnProgress_ParamsSpec,
      null,
      [status],
      false);
  }

};

ash.settings.google_drive.mojom.Page.getRemote = function() {
  let remote = new ash.settings.google_drive.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.google_drive.mojom.Page',
    'context');
  return remote.$;
};

ash.settings.google_drive.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
             decoder.decodeStructInline(ash.settings.google_drive.mojom.Page_OnServiceUnavailable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.google_drive.mojom.Page_OnProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.google_drive.mojom.Page_OnServiceUnavailable_ParamsSpec.$.structSpec);
          const result = this.impl.onServiceUnavailable();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.google_drive.mojom.Page_OnProgress_ParamsSpec.$.structSpec);
          const result = this.impl.onProgress(params.status);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.settings.google_drive.mojom.PageReceiver = ash.settings.google_drive.mojom.PageReceiver;

ash.settings.google_drive.mojom.PagePtr = ash.settings.google_drive.mojom.PageRemote;
ash.settings.google_drive.mojom.PageRequest = ash.settings.google_drive.mojom.PagePendingReceiver;

