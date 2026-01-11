// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/glic/fre/glic_fre.mojom
// Module: glic.mojom

// Module namespace
var glic = glic || {};
glic.mojom = glic.mojom || {};
var url = url || {};

glic.mojom.FreWebUiStateSpec = { $: mojo.internal.Enum() };
glic.mojom.FrePageHandlerFactory = {};
glic.mojom.FrePageHandlerFactory.$interfaceName = 'glic.mojom.FrePageHandlerFactory';
glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler = {};
glic.mojom.FrePageHandler.$interfaceName = 'glic.mojom.FrePageHandler';
glic.mojom.FrePageHandler_AcceptFre_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_RejectFre_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_DismissFre_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_FreReloaded_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_PrepareForClient_ResponseParamsSpec = { $: {} };
glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec = { $: {} };

// Enum: FreWebUiState
glic.mojom.FreWebUiState = {
  kUninitialized: 0,
  kBeginLoading: 1,
  kShowLoading: 2,
  kHoldLoading: 3,
  kFinishLoading: 4,
  kError: 5,
  kOffline: 6,
  kReady: 7,
  kDisabledByAdmin: 8,
};

// Interface: FrePageHandlerFactory
mojo.internal.Struct(
    glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec, 'glic.mojom.FrePageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(glic.mojom.FrePageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

glic.mojom.FrePageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.FrePageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.FrePageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.FrePageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new glic.mojom.FrePageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(receiver) {
    return this.$.createPageHandler(receiver);
  }
};

glic.mojom.FrePageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrePageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

glic.mojom.FrePageHandlerFactory.getRemote = function() {
  let remote = new glic.mojom.FrePageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.FrePageHandlerFactory',
    'context');
  return remote.$;
};

glic.mojom.FrePageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrePageHandlerFactory', [
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
             decoder.decodeStructInline(glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

glic.mojom.FrePageHandlerFactoryReceiver = glic.mojom.FrePageHandlerFactoryReceiver;

glic.mojom.FrePageHandlerFactoryPtr = glic.mojom.FrePageHandlerFactoryRemote;
glic.mojom.FrePageHandlerFactoryRequest = glic.mojom.FrePageHandlerFactoryPendingReceiver;


// Interface: FrePageHandler
mojo.internal.Struct(
    glic.mojom.FrePageHandler_AcceptFre_ParamsSpec, 'glic.mojom.FrePageHandler_AcceptFre_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_RejectFre_ParamsSpec, 'glic.mojom.FrePageHandler_RejectFre_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_DismissFre_ParamsSpec, 'glic.mojom.FrePageHandler_DismissFre_Params', [
      mojo.internal.StructField('panel', 0, 0, glic.mojom.FreWebUiStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_FreReloaded_ParamsSpec, 'glic.mojom.FrePageHandler_FreReloaded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec, 'glic.mojom.FrePageHandler_PrepareForClient_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_PrepareForClient_ResponseParamsSpec, 'glic.mojom.FrePageHandler_PrepareForClient_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec, 'glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec, 'glic.mojom.FrePageHandler_WebUiStateChanged_Params', [
      mojo.internal.StructField('new_state', 0, 0, glic.mojom.FreWebUiStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec, 'glic.mojom.FrePageHandler_ExceededTimeoutError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec, 'glic.mojom.FrePageHandler_LogWebUiLoadComplete_Params', [
    ],
    [[0, 8]]);

glic.mojom.FrePageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.FrePageHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.FrePageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.FrePageHandlerPendingReceiver,
      handle);
    this.$ = new glic.mojom.FrePageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  acceptFre() {
    return this.$.acceptFre();
  }
  rejectFre() {
    return this.$.rejectFre();
  }
  dismissFre(panel) {
    return this.$.dismissFre(panel);
  }
  freReloaded() {
    return this.$.freReloaded();
  }
  prepareForClient() {
    return this.$.prepareForClient();
  }
  validateAndOpenLinkInNewTab(url) {
    return this.$.validateAndOpenLinkInNewTab(url);
  }
  webUiStateChanged(new_state) {
    return this.$.webUiStateChanged(new_state);
  }
  exceededTimeoutError() {
    return this.$.exceededTimeoutError();
  }
  logWebUiLoadComplete() {
    return this.$.logWebUiLoadComplete();
  }
};

glic.mojom.FrePageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrePageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  acceptFre() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      glic.mojom.FrePageHandler_AcceptFre_ParamsSpec,
      null,
      [],
      false);
  }

  rejectFre() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      glic.mojom.FrePageHandler_RejectFre_ParamsSpec,
      null,
      [],
      false);
  }

  dismissFre(panel) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      glic.mojom.FrePageHandler_DismissFre_ParamsSpec,
      null,
      [panel],
      false);
  }

  freReloaded() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      glic.mojom.FrePageHandler_FreReloaded_ParamsSpec,
      null,
      [],
      false);
  }

  prepareForClient() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec,
      glic.mojom.FrePageHandler_PrepareForClient_ResponseParamsSpec,
      [],
      false);
  }

  validateAndOpenLinkInNewTab(url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec,
      null,
      [url],
      false);
  }

  webUiStateChanged(new_state) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec,
      null,
      [new_state],
      false);
  }

  exceededTimeoutError() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec,
      null,
      [],
      false);
  }

  logWebUiLoadComplete() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec,
      null,
      [],
      false);
  }

};

glic.mojom.FrePageHandler.getRemote = function() {
  let remote = new glic.mojom.FrePageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.FrePageHandler',
    'context');
  return remote.$;
};

glic.mojom.FrePageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrePageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(glic.mojom.FrePageHandler_AcceptFre_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.FrePageHandler_RejectFre_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.FrePageHandler_DismissFre_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.FrePageHandler_FreReloaded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.FrePageHandler_AcceptFre_ParamsSpec.$.structSpec);
          const result = this.impl.acceptFre();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.FrePageHandler_RejectFre_ParamsSpec.$.structSpec);
          const result = this.impl.rejectFre();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.FrePageHandler_DismissFre_ParamsSpec.$.structSpec);
          const result = this.impl.dismissFre(params.panel);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.FrePageHandler_FreReloaded_ParamsSpec.$.structSpec);
          const result = this.impl.freReloaded();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec.$.structSpec);
          const result = this.impl.prepareForClient();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.FrePageHandler_PrepareForClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec.$.structSpec);
          const result = this.impl.validateAndOpenLinkInNewTab(params.url);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.webUiStateChanged(params.new_state);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec.$.structSpec);
          const result = this.impl.exceededTimeoutError();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec.$.structSpec);
          const result = this.impl.logWebUiLoadComplete();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

glic.mojom.FrePageHandlerReceiver = glic.mojom.FrePageHandlerReceiver;

glic.mojom.FrePageHandlerPtr = glic.mojom.FrePageHandlerRemote;
glic.mojom.FrePageHandlerRequest = glic.mojom.FrePageHandlerPendingReceiver;

