// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/demo_mode_app_ui/mojom/demo_mode_app_untrusted_ui.mojom
// Module: ash.mojom.demo_mode

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.demo_mode = ash.mojom.demo_mode || {};

ash.mojom.demo_mode.UntrustedPageHandlerFactory = {};
ash.mojom.demo_mode.UntrustedPageHandlerFactory.$interfaceName = 'ash.mojom.demo_mode.UntrustedPageHandlerFactory';
ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.mojom.demo_mode.UntrustedPageHandler = {};
ash.mojom.demo_mode.UntrustedPageHandler.$interfaceName = 'ash.mojom.demo_mode.UntrustedPageHandler';
ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec = { $: {} };
ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec = { $: {} };

// Interface: UntrustedPageHandlerFactory
mojo.internal.Struct(
    ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.mojom.demo_mode.UntrustedPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.mojom.demo_mode.UntrustedPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.demo_mode.UntrustedPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.demo_mode.UntrustedPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(handler) {
    return this.$.createPageHandler(handler);
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

ash.mojom.demo_mode.UntrustedPageHandlerFactory.getRemote = function() {
  let remote = new ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.demo_mode.UntrustedPageHandlerFactory',
    'context');
  return remote.$;
};

ash.mojom.demo_mode.UntrustedPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedPageHandlerFactory', [
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
             decoder.decodeStructInline(ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerFactoryReceiver = ash.mojom.demo_mode.UntrustedPageHandlerFactoryReceiver;

ash.mojom.demo_mode.UntrustedPageHandlerFactoryPtr = ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemote;
ash.mojom.demo_mode.UntrustedPageHandlerFactoryRequest = ash.mojom.demo_mode.UntrustedPageHandlerFactoryPendingReceiver;


// Interface: UntrustedPageHandler
mojo.internal.Struct(
    ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec, 'ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec, 'ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.mojom.demo_mode.UntrustedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.demo_mode.UntrustedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.demo_mode.UntrustedPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mojom.demo_mode.UntrustedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  toggleFullscreen() {
    return this.$.toggleFullscreen();
  }
  launchApp(app_id) {
    return this.$.launchApp(app_id);
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedPageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  toggleFullscreen() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec,
      null,
      [],
      false);
  }

  launchApp(app_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec,
      null,
      [app_id],
      false);
  }

};

ash.mojom.demo_mode.UntrustedPageHandler.getRemote = function() {
  let remote = new ash.mojom.demo_mode.UntrustedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.demo_mode.UntrustedPageHandler',
    'context');
  return remote.$;
};

ash.mojom.demo_mode.UntrustedPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedPageHandler', [
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
             decoder.decodeStructInline(ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec.$.structSpec);
          const result = this.impl.toggleFullscreen();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec.$.structSpec);
          const result = this.impl.launchApp(params.app_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerReceiver = ash.mojom.demo_mode.UntrustedPageHandlerReceiver;

ash.mojom.demo_mode.UntrustedPageHandlerPtr = ash.mojom.demo_mode.UntrustedPageHandlerRemote;
ash.mojom.demo_mode.UntrustedPageHandlerRequest = ash.mojom.demo_mode.UntrustedPageHandlerPendingReceiver;

