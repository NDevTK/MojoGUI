// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/color_change_listener/color_change_listener.mojom
// Module: color_change_listener.mojom

// Module namespace
var color_change_listener = color_change_listener || {};
color_change_listener.mojom = color_change_listener.mojom || {};

color_change_listener.mojom.PageHandler = {};
color_change_listener.mojom.PageHandler.$interfaceName = 'color_change_listener.mojom.PageHandler';
color_change_listener.mojom.PageHandler_SetPage_ParamsSpec = { $: {} };
color_change_listener.mojom.Page = {};
color_change_listener.mojom.Page.$interfaceName = 'color_change_listener.mojom.Page';
color_change_listener.mojom.Page_OnColorProviderChanged_ParamsSpec = { $: {} };

// Interface: PageHandler
mojo.internal.Struct(
    color_change_listener.mojom.PageHandler_SetPage_ParamsSpec, 'color_change_listener.mojom.PageHandler_SetPage_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(color_change_listener.mojom.PageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

color_change_listener.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

color_change_listener.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'color_change_listener.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      color_change_listener.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new color_change_listener.mojom.PageHandlerRemoteCallHandler(this.proxy);
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
};

color_change_listener.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
    ]);
  }

  setPage(page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      color_change_listener.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page],
      false);
  }

};

color_change_listener.mojom.PageHandler.getRemote = function() {
  let remote = new color_change_listener.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'color_change_listener.mojom.PageHandler',
    'context');
  return remote.$;
};

color_change_listener.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
             decoder.decodeStructInline(color_change_listener.mojom.PageHandler_SetPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(color_change_listener.mojom.PageHandler_SetPage_ParamsSpec.$.structSpec);
          const result = this.impl.setPage(params.page);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

color_change_listener.mojom.PageHandlerReceiver = color_change_listener.mojom.PageHandlerReceiver;

color_change_listener.mojom.PageHandlerPtr = color_change_listener.mojom.PageHandlerRemote;
color_change_listener.mojom.PageHandlerRequest = color_change_listener.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    color_change_listener.mojom.Page_OnColorProviderChanged_ParamsSpec, 'color_change_listener.mojom.Page_OnColorProviderChanged_Params', [
    ],
    [[0, 8]]);

color_change_listener.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

color_change_listener.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'color_change_listener.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      color_change_listener.mojom.PagePendingReceiver,
      handle);
    this.$ = new color_change_listener.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onColorProviderChanged() {
    return this.$.onColorProviderChanged();
  }
};

color_change_listener.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
    ]);
  }

  onColorProviderChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      color_change_listener.mojom.Page_OnColorProviderChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

color_change_listener.mojom.Page.getRemote = function() {
  let remote = new color_change_listener.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'color_change_listener.mojom.Page',
    'context');
  return remote.$;
};

color_change_listener.mojom.PageReceiver = class {
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
             decoder.decodeStructInline(color_change_listener.mojom.Page_OnColorProviderChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(color_change_listener.mojom.Page_OnColorProviderChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onColorProviderChanged();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

color_change_listener.mojom.PageReceiver = color_change_listener.mojom.PageReceiver;

color_change_listener.mojom.PagePtr = color_change_listener.mojom.PageRemote;
color_change_listener.mojom.PageRequest = color_change_listener.mojom.PagePendingReceiver;

