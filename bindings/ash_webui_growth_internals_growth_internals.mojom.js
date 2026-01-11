// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/growth_internals/growth_internals.mojom
// Module: ash.growth.mojom

// Module namespace
var ash = ash || {};
ash.growth = ash.growth || {};
ash.growth.mojom = ash.growth.mojom || {};

ash.growth.mojom.PageHandler = {};
ash.growth.mojom.PageHandler.$interfaceName = 'ash.growth.mojom.PageHandler';
ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec = { $: {} };
ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec = { $: {} };
ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec = { $: {} };

// Interface: PageHandler
mojo.internal.Struct(
    ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec, 'ash.growth.mojom.PageHandler_GetCampaignsLogs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec, 'ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParams', [
      mojo.internal.StructField('logs', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec, 'ash.growth.mojom.PageHandler_ClearAllEvents_Params', [
    ],
    [[0, 8]]);

ash.growth.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.growth.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.growth.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.growth.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.growth.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getCampaignsLogs() {
    return this.$.getCampaignsLogs();
  }
  clearAllEvents() {
    return this.$.clearAllEvents();
  }
};

ash.growth.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getCampaignsLogs() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec,
      ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec,
      [],
      false);
  }

  clearAllEvents() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.growth.mojom.PageHandler.getRemote = function() {
  let remote = new ash.growth.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.growth.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.growth.mojom.PageHandlerReceiver = class {
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
             decoder.decodeStructInline(ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec.$.structSpec);
          const result = this.impl.getCampaignsLogs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec.$.structSpec);
          const result = this.impl.clearAllEvents();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.growth.mojom.PageHandlerReceiver = ash.growth.mojom.PageHandlerReceiver;

ash.growth.mojom.PageHandlerPtr = ash.growth.mojom.PageHandlerRemote;
ash.growth.mojom.PageHandlerRequest = ash.growth.mojom.PageHandlerPendingReceiver;

