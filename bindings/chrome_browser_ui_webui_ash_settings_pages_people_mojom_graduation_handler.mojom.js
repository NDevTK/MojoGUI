// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/people/mojom/graduation_handler.mojom
// Module: ash.settings.graduation.mojom

'use strict';

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
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.graduation.mojom.GraduationObserverSpec), null, false, 0, undefined),
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
};

ash.settings.graduation.mojom.GraduationHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  launchGraduationApp() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.graduation.mojom.GraduationHandler_LaunchGraduationApp_ParamsSpec,
      null,
      [],
      false);
  }

  addObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: LaunchGraduationApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.graduation.mojom.GraduationHandler_LaunchGraduationApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchGraduationApp (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.graduation.mojom.GraduationHandler_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (1)');
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
          const params = decoder.decodeStruct(ash.settings.graduation.mojom.GraduationHandler_LaunchGraduationApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launchGraduationApp');
          const result = this.impl.launchGraduationApp();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.graduation.mojom.GraduationHandler_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

ash.settings.graduation.mojom.GraduationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onGraduationAppUpdated(is_app_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnGraduationAppUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.graduation.mojom.GraduationObserver_OnGraduationAppUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGraduationAppUpdated (0)');
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
          const params = decoder.decodeStruct(ash.settings.graduation.mojom.GraduationObserver_OnGraduationAppUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onGraduationAppUpdated');
          const result = this.impl.onGraduationAppUpdated(params.is_app_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.graduation.mojom.GraduationObserverReceiver = ash.settings.graduation.mojom.GraduationObserverReceiver;

ash.settings.graduation.mojom.GraduationObserverPtr = ash.settings.graduation.mojom.GraduationObserverRemote;
ash.settings.graduation.mojom.GraduationObserverRequest = ash.settings.graduation.mojom.GraduationObserverPendingReceiver;

