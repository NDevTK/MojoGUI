// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/suggest_internals/suggest_internals.mojom
// Module: suggest_internals.mojom

// Module namespace
var suggest_internals = suggest_internals || {};
suggest_internals.mojom = suggest_internals.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

suggest_internals.mojom.RequestStatusSpec = { $: mojo.internal.Enum() };
suggest_internals.mojom.RequestSpec = { $: {} };
suggest_internals.mojom.PageHandler = {};
suggest_internals.mojom.PageHandler.$interfaceName = 'suggest_internals.mojom.PageHandler';
suggest_internals.mojom.PageHandler_SetPage_ParamsSpec = { $: {} };
suggest_internals.mojom.PageHandler_HardcodeResponse_ParamsSpec = { $: {} };
suggest_internals.mojom.PageHandler_HardcodeResponse_ResponseParamsSpec = { $: {} };
suggest_internals.mojom.Page = {};
suggest_internals.mojom.Page.$interfaceName = 'suggest_internals.mojom.Page';
suggest_internals.mojom.Page_OnRequestCreated_ParamsSpec = { $: {} };
suggest_internals.mojom.Page_OnRequestStarted_ParamsSpec = { $: {} };
suggest_internals.mojom.Page_OnRequestCompleted_ParamsSpec = { $: {} };

// Enum: RequestStatus
suggest_internals.mojom.RequestStatus = {
  kHardcoded: 0,
  kCreated: 1,
  kSent: 2,
  kSucceeded: 3,
  kFailed: 4,
};

// Struct: Request
mojo.internal.Struct(
    suggest_internals.mojom.RequestSpec, 'suggest_internals.mojom.Request', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('status', 24, 0, suggest_internals.mojom.RequestStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_time', 32, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end_time', 40, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response', 48, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: PageHandler
mojo.internal.Struct(
    suggest_internals.mojom.PageHandler_SetPage_ParamsSpec, 'suggest_internals.mojom.PageHandler_SetPage_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(suggest_internals.mojom.PageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    suggest_internals.mojom.PageHandler_HardcodeResponse_ParamsSpec, 'suggest_internals.mojom.PageHandler_HardcodeResponse_Params', [
      mojo.internal.StructField('response', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('delay', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    suggest_internals.mojom.PageHandler_HardcodeResponse_ResponseParamsSpec, 'suggest_internals.mojom.PageHandler_HardcodeResponse_ResponseParams', [
      mojo.internal.StructField('request', 0, 0, suggest_internals.mojom.RequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

suggest_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

suggest_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'suggest_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      suggest_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new suggest_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setPage(page) {
    return this.$.setPage(page);
  }
  hardcodeResponse(response, delay) {
    return this.$.hardcodeResponse(response, delay);
  }
};

suggest_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setPage(page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      suggest_internals.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page],
      false);
  }

  hardcodeResponse(response, delay) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      suggest_internals.mojom.PageHandler_HardcodeResponse_ParamsSpec,
      suggest_internals.mojom.PageHandler_HardcodeResponse_ResponseParamsSpec,
      [response, delay],
      false);
  }

};

suggest_internals.mojom.PageHandler.getRemote = function() {
  let remote = new suggest_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'suggest_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

suggest_internals.mojom.PageHandlerReceiver = class {
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(suggest_internals.mojom.PageHandler_SetPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(suggest_internals.mojom.PageHandler_HardcodeResponse_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(suggest_internals.mojom.PageHandler_SetPage_ParamsSpec.$.structSpec);
          const result = this.impl.setPage(params.page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(suggest_internals.mojom.PageHandler_HardcodeResponse_ParamsSpec.$.structSpec);
          const result = this.impl.hardcodeResponse(params.response, params.delay);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, suggest_internals.mojom.PageHandler_HardcodeResponse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

suggest_internals.mojom.PageHandlerReceiver = suggest_internals.mojom.PageHandlerReceiver;

suggest_internals.mojom.PageHandlerPtr = suggest_internals.mojom.PageHandlerRemote;
suggest_internals.mojom.PageHandlerRequest = suggest_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    suggest_internals.mojom.Page_OnRequestCreated_ParamsSpec, 'suggest_internals.mojom.Page_OnRequestCreated_Params', [
      mojo.internal.StructField('request', 0, 0, suggest_internals.mojom.RequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    suggest_internals.mojom.Page_OnRequestStarted_ParamsSpec, 'suggest_internals.mojom.Page_OnRequestStarted_Params', [
      mojo.internal.StructField('request', 0, 0, suggest_internals.mojom.RequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    suggest_internals.mojom.Page_OnRequestCompleted_ParamsSpec, 'suggest_internals.mojom.Page_OnRequestCompleted_Params', [
      mojo.internal.StructField('request', 0, 0, suggest_internals.mojom.RequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

suggest_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

suggest_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'suggest_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      suggest_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new suggest_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onRequestCreated(request) {
    return this.$.onRequestCreated(request);
  }
  onRequestStarted(request) {
    return this.$.onRequestStarted(request);
  }
  onRequestCompleted(request) {
    return this.$.onRequestCompleted(request);
  }
};

suggest_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onRequestCreated(request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      suggest_internals.mojom.Page_OnRequestCreated_ParamsSpec,
      null,
      [request],
      false);
  }

  onRequestStarted(request) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      suggest_internals.mojom.Page_OnRequestStarted_ParamsSpec,
      null,
      [request],
      false);
  }

  onRequestCompleted(request) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      suggest_internals.mojom.Page_OnRequestCompleted_ParamsSpec,
      null,
      [request],
      false);
  }

};

suggest_internals.mojom.Page.getRemote = function() {
  let remote = new suggest_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'suggest_internals.mojom.Page',
    'context');
  return remote.$;
};

suggest_internals.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(suggest_internals.mojom.Page_OnRequestCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(suggest_internals.mojom.Page_OnRequestStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(suggest_internals.mojom.Page_OnRequestCompleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(suggest_internals.mojom.Page_OnRequestCreated_ParamsSpec.$.structSpec);
          const result = this.impl.onRequestCreated(params.request);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(suggest_internals.mojom.Page_OnRequestStarted_ParamsSpec.$.structSpec);
          const result = this.impl.onRequestStarted(params.request);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(suggest_internals.mojom.Page_OnRequestCompleted_ParamsSpec.$.structSpec);
          const result = this.impl.onRequestCompleted(params.request);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

suggest_internals.mojom.PageReceiver = suggest_internals.mojom.PageReceiver;

suggest_internals.mojom.PagePtr = suggest_internals.mojom.PageRemote;
suggest_internals.mojom.PageRequest = suggest_internals.mojom.PagePendingReceiver;

