// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/people/mojom/graduation_handler.mojom
// Module: ash.settings.graduation.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.graduation = ash.settings.graduation || {};
ash.settings.graduation.mojom = ash.settings.graduation.mojom || {};

ash.settings.graduation.mojom.GraduationHandler = {};
ash.settings.graduation.mojom.GraduationHandler.$interfaceName = 'ash.settings.graduation.mojom.GraduationHandler';
ash.settings.graduation.mojom.GraduationHandler_LaunchGraduationApp_ParamsSpec = { $: {} };
ash.settings.graduation.mojom.GraduationHandler_AddObserver_ParamsSpec = { $: {} };
ash.settings.graduation.mojom.GraduationObserver = {};
ash.settings.graduation.mojom.GraduationObserver.$interfaceName = 'ash.settings.graduation.mojom.GraduationObserver';
ash.settings.graduation.mojom.GraduationObserver_OnGraduationAppUpdated_ParamsSpec = { $: {} };

// Interface: GraduationHandler
mojo.internal.Struct(
    ash.settings.graduation.mojom.GraduationHandler_LaunchGraduationApp_ParamsSpec, 'ash.settings.graduation.mojom.GraduationHandler_LaunchGraduationApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.graduation.mojom.GraduationHandler_AddObserver_ParamsSpec, 'ash.settings.graduation.mojom.GraduationHandler_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.graduation.mojom.GraduationObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.graduation.mojom.GraduationHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.graduation.mojom.GraduationHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.graduation.mojom.GraduationHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.graduation.mojom.GraduationHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.graduation.mojom.GraduationHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  launchGraduationApp() {
    return this.$.launchGraduationApp();
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
};

ash.settings.graduation.mojom.GraduationHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GraduationHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  launchGraduationApp() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.graduation.mojom.GraduationHandler_LaunchGraduationApp_ParamsSpec,
      null,
      [],
      false);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.settings.graduation.mojom.GraduationHandler_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

ash.settings.graduation.mojom.GraduationHandler.getRemote = function() {
  let remote = new ash.settings.graduation.mojom.GraduationHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.graduation.mojom.GraduationHandler',
    'context');
  return remote.$;
};

ash.settings.graduation.mojom.GraduationHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GraduationHandler', [
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
             decoder.decodeStructInline(ash.settings.graduation.mojom.GraduationHandler_LaunchGraduationApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.graduation.mojom.GraduationHandler_AddObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.graduation.mojom.GraduationHandler_LaunchGraduationApp_ParamsSpec.$.structSpec);
          const result = this.impl.launchGraduationApp();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.graduation.mojom.GraduationHandler_AddObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addObserver(params.observer);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.settings.graduation.mojom.GraduationHandlerReceiver = ash.settings.graduation.mojom.GraduationHandlerReceiver;

ash.settings.graduation.mojom.GraduationHandlerPtr = ash.settings.graduation.mojom.GraduationHandlerRemote;
ash.settings.graduation.mojom.GraduationHandlerRequest = ash.settings.graduation.mojom.GraduationHandlerPendingReceiver;


// Interface: GraduationObserver
mojo.internal.Struct(
    ash.settings.graduation.mojom.GraduationObserver_OnGraduationAppUpdated_ParamsSpec, 'ash.settings.graduation.mojom.GraduationObserver_OnGraduationAppUpdated_Params', [
      mojo.internal.StructField('is_app_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.graduation.mojom.GraduationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.graduation.mojom.GraduationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.graduation.mojom.GraduationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.graduation.mojom.GraduationObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.graduation.mojom.GraduationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onGraduationAppUpdated(is_app_enabled) {
    return this.$.onGraduationAppUpdated(is_app_enabled);
  }
};

ash.settings.graduation.mojom.GraduationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GraduationObserver', [
      { explicit: null },
    ]);
  }

  onGraduationAppUpdated(is_app_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.graduation.mojom.GraduationObserver_OnGraduationAppUpdated_ParamsSpec,
      null,
      [is_app_enabled],
      false);
  }

};

ash.settings.graduation.mojom.GraduationObserver.getRemote = function() {
  let remote = new ash.settings.graduation.mojom.GraduationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.graduation.mojom.GraduationObserver',
    'context');
  return remote.$;
};

ash.settings.graduation.mojom.GraduationObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GraduationObserver', [
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
             decoder.decodeStructInline(ash.settings.graduation.mojom.GraduationObserver_OnGraduationAppUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.graduation.mojom.GraduationObserver_OnGraduationAppUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onGraduationAppUpdated(params.is_app_enabled);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.settings.graduation.mojom.GraduationObserverReceiver = ash.settings.graduation.mojom.GraduationObserverReceiver;

ash.settings.graduation.mojom.GraduationObserverPtr = ash.settings.graduation.mojom.GraduationObserverRemote;
ash.settings.graduation.mojom.GraduationObserverRequest = ash.settings.graduation.mojom.GraduationObserverPendingReceiver;

