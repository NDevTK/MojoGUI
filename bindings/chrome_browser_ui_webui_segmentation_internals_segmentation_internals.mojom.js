// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/segmentation_internals/segmentation_internals.mojom
// Module: segmentation_internals.mojom

// Module namespace
var segmentation_internals = segmentation_internals || {};
segmentation_internals.mojom = segmentation_internals.mojom || {};
var mojo_base = mojo_base || {};

segmentation_internals.mojom.ServiceStatusSpec = { $: {} };
segmentation_internals.mojom.SegmentInfoSpec = { $: {} };
segmentation_internals.mojom.ClientInfoSpec = { $: {} };
segmentation_internals.mojom.PageHandlerFactory = {};
segmentation_internals.mojom.PageHandlerFactory.$interfaceName = 'segmentation_internals.mojom.PageHandlerFactory';
segmentation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
segmentation_internals.mojom.PageHandler = {};
segmentation_internals.mojom.PageHandler.$interfaceName = 'segmentation_internals.mojom.PageHandler';
segmentation_internals.mojom.PageHandler_GetServiceStatus_ParamsSpec = { $: {} };
segmentation_internals.mojom.PageHandler_ExecuteModel_ParamsSpec = { $: {} };
segmentation_internals.mojom.PageHandler_OverwriteResult_ParamsSpec = { $: {} };
segmentation_internals.mojom.PageHandler_SetSelected_ParamsSpec = { $: {} };
segmentation_internals.mojom.Page = {};
segmentation_internals.mojom.Page.$interfaceName = 'segmentation_internals.mojom.Page';
segmentation_internals.mojom.Page_OnServiceStatusChanged_ParamsSpec = { $: {} };
segmentation_internals.mojom.Page_OnClientInfoAvailable_ParamsSpec = { $: {} };

// Struct: ServiceStatus
mojo.internal.Struct(
    segmentation_internals.mojom.ServiceStatusSpec, 'segmentation_internals.mojom.ServiceStatus', [
      mojo.internal.StructField('intialization_status', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_initialized', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SegmentInfo
mojo.internal.Struct(
    segmentation_internals.mojom.SegmentInfoSpec, 'segmentation_internals.mojom.SegmentInfo', [
      mojo.internal.StructField('segment_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('segment_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('prediction_result', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('prediction_timestamp', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('segment_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('can_execute_segment', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ClientInfo
mojo.internal.Struct(
    segmentation_internals.mojom.ClientInfoSpec, 'segmentation_internals.mojom.ClientInfo', [
      mojo.internal.StructField('segmentation_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('selected_segment', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('segment_info', 16, 0, mojo.internal.Array(segmentation_internals.mojom.SegmentInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    segmentation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'segmentation_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(segmentation_internals.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(segmentation_internals.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

segmentation_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

segmentation_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'segmentation_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      segmentation_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new segmentation_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

segmentation_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      segmentation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

segmentation_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new segmentation_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'segmentation_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

segmentation_internals.mojom.PageHandlerFactoryReceiver = class {
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(segmentation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(segmentation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

segmentation_internals.mojom.PageHandlerFactoryReceiver = segmentation_internals.mojom.PageHandlerFactoryReceiver;

segmentation_internals.mojom.PageHandlerFactoryPtr = segmentation_internals.mojom.PageHandlerFactoryRemote;
segmentation_internals.mojom.PageHandlerFactoryRequest = segmentation_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    segmentation_internals.mojom.PageHandler_GetServiceStatus_ParamsSpec, 'segmentation_internals.mojom.PageHandler_GetServiceStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    segmentation_internals.mojom.PageHandler_ExecuteModel_ParamsSpec, 'segmentation_internals.mojom.PageHandler_ExecuteModel_Params', [
      mojo.internal.StructField('segment_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    segmentation_internals.mojom.PageHandler_OverwriteResult_ParamsSpec, 'segmentation_internals.mojom.PageHandler_OverwriteResult_Params', [
      mojo.internal.StructField('segment_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('result', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    segmentation_internals.mojom.PageHandler_SetSelected_ParamsSpec, 'segmentation_internals.mojom.PageHandler_SetSelected_Params', [
      mojo.internal.StructField('segmentation_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('optimization_target', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

segmentation_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

segmentation_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'segmentation_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      segmentation_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new segmentation_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getServiceStatus() {
    return this.$.getServiceStatus();
  }
  executeModel(segment_id) {
    return this.$.executeModel(segment_id);
  }
  overwriteResult(segment_id, result) {
    return this.$.overwriteResult(segment_id, result);
  }
  setSelected(segmentation_key, optimization_target) {
    return this.$.setSelected(segmentation_key, optimization_target);
  }
};

segmentation_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getServiceStatus() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      segmentation_internals.mojom.PageHandler_GetServiceStatus_ParamsSpec,
      null,
      [],
      false);
  }

  executeModel(segment_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      segmentation_internals.mojom.PageHandler_ExecuteModel_ParamsSpec,
      null,
      [segment_id],
      false);
  }

  overwriteResult(segment_id, result) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      segmentation_internals.mojom.PageHandler_OverwriteResult_ParamsSpec,
      null,
      [segment_id, result],
      false);
  }

  setSelected(segmentation_key, optimization_target) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      segmentation_internals.mojom.PageHandler_SetSelected_ParamsSpec,
      null,
      [segmentation_key, optimization_target],
      false);
  }

};

segmentation_internals.mojom.PageHandler.getRemote = function() {
  let remote = new segmentation_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'segmentation_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

segmentation_internals.mojom.PageHandlerReceiver = class {
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(segmentation_internals.mojom.PageHandler_GetServiceStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(segmentation_internals.mojom.PageHandler_ExecuteModel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(segmentation_internals.mojom.PageHandler_OverwriteResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(segmentation_internals.mojom.PageHandler_SetSelected_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(segmentation_internals.mojom.PageHandler_GetServiceStatus_ParamsSpec.$.structSpec);
          const result = this.impl.getServiceStatus();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(segmentation_internals.mojom.PageHandler_ExecuteModel_ParamsSpec.$.structSpec);
          const result = this.impl.executeModel(params.segment_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(segmentation_internals.mojom.PageHandler_OverwriteResult_ParamsSpec.$.structSpec);
          const result = this.impl.overwriteResult(params.segment_id, params.result);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(segmentation_internals.mojom.PageHandler_SetSelected_ParamsSpec.$.structSpec);
          const result = this.impl.setSelected(params.segmentation_key, params.optimization_target);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

segmentation_internals.mojom.PageHandlerReceiver = segmentation_internals.mojom.PageHandlerReceiver;

segmentation_internals.mojom.PageHandlerPtr = segmentation_internals.mojom.PageHandlerRemote;
segmentation_internals.mojom.PageHandlerRequest = segmentation_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    segmentation_internals.mojom.Page_OnServiceStatusChanged_ParamsSpec, 'segmentation_internals.mojom.Page_OnServiceStatusChanged_Params', [
      mojo.internal.StructField('status_flag', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_initialized', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    segmentation_internals.mojom.Page_OnClientInfoAvailable_ParamsSpec, 'segmentation_internals.mojom.Page_OnClientInfoAvailable_Params', [
      mojo.internal.StructField('client_info', 0, 0, mojo.internal.Array(segmentation_internals.mojom.ClientInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

segmentation_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

segmentation_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'segmentation_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      segmentation_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new segmentation_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onServiceStatusChanged(is_initialized, status_flag) {
    return this.$.onServiceStatusChanged(is_initialized, status_flag);
  }
  onClientInfoAvailable(client_info) {
    return this.$.onClientInfoAvailable(client_info);
  }
};

segmentation_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onServiceStatusChanged(is_initialized, status_flag) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      segmentation_internals.mojom.Page_OnServiceStatusChanged_ParamsSpec,
      null,
      [is_initialized, status_flag],
      false);
  }

  onClientInfoAvailable(client_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      segmentation_internals.mojom.Page_OnClientInfoAvailable_ParamsSpec,
      null,
      [client_info],
      false);
  }

};

segmentation_internals.mojom.Page.getRemote = function() {
  let remote = new segmentation_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'segmentation_internals.mojom.Page',
    'context');
  return remote.$;
};

segmentation_internals.mojom.PageReceiver = class {
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(segmentation_internals.mojom.Page_OnServiceStatusChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(segmentation_internals.mojom.Page_OnClientInfoAvailable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(segmentation_internals.mojom.Page_OnServiceStatusChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onServiceStatusChanged(params.is_initialized, params.status_flag);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(segmentation_internals.mojom.Page_OnClientInfoAvailable_ParamsSpec.$.structSpec);
          const result = this.impl.onClientInfoAvailable(params.client_info);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

segmentation_internals.mojom.PageReceiver = segmentation_internals.mojom.PageReceiver;

segmentation_internals.mojom.PagePtr = segmentation_internals.mojom.PageRemote;
segmentation_internals.mojom.PageRequest = segmentation_internals.mojom.PagePendingReceiver;

