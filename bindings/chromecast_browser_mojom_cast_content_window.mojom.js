// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_content_window.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var mojo_base = mojo_base || {};

chromecast.mojom.VisibilityTypeSpec = { $: mojo.internal.Enum() };
chromecast.mojom.VisibilityPrioritySpec = { $: mojo.internal.Enum() };
chromecast.mojom.CastContentWindowObserver = {};
chromecast.mojom.CastContentWindowObserver.$interfaceName = 'chromecast.mojom.CastContentWindowObserver';
chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindow = {};
chromecast.mojom.CastContentWindow.$interfaceName = 'chromecast.mojom.CastContentWindow';
chromecast.mojom.CastContentWindow_CreateWindow_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec = { $: {} };
chromecast.mojom.CastContentWindow_EnableTouchInput_ParamsSpec = { $: {} };

// Enum: VisibilityType
chromecast.mojom.VisibilityType = {
  UNKNOWN: 0,
  FULL_SCREEN: 1,
  PARTIAL_OUT: 2,
  HIDDEN: 3,
  TILE: 4,
  TRANSIENTLY_HIDDEN: 5,
};

// Enum: VisibilityPriority
chromecast.mojom.VisibilityPriority = {
  DESTROYED: -1,
  DEFAULT: 0,
  TRANSIENT_TIMEOUTABLE: 1,
  HIGH_PRIORITY_INTERRUPTION: 2,
  STICKY_ACTIVITY: 3,
  TRANSIENT_STICKY: 4,
  HIDDEN: 5,
  HIDDEN_STICKY: 6,
};

// Interface: CastContentWindowObserver
mojo.internal.Struct(
    chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec, 'chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_Params', [
      mojo.internal.StructField('visibility_type', 0, 0, chromecast.mojom.VisibilityTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec, 'chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_Params', [
    ],
    [[0, 8]]);

chromecast.mojom.CastContentWindowObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.CastContentWindowObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.CastContentWindowObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.CastContentWindowObserverPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.CastContentWindowObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.CastContentWindowObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVisibilityChange(visibility_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec,
      null,
      [visibility_type],
      false);
  }

  onWindowDestroyed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec,
      null,
      [],
      false);
  }

};

chromecast.mojom.CastContentWindowObserver.getRemote = function() {
  let remote = new chromecast.mojom.CastContentWindowObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.CastContentWindowObserver',
    'context');
  return remote.$;
};

chromecast.mojom.CastContentWindowObserverReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: OnVisibilityChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVisibilityChange (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnWindowDestroyed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowDestroyed (1)');
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
          const params = decoder.decodeStruct(chromecast.mojom.CastContentWindowObserver_OnVisibilityChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onVisibilityChange');
          const result = this.impl.onVisibilityChange(params.visibility_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.CastContentWindowObserver_OnWindowDestroyed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowDestroyed');
          const result = this.impl.onWindowDestroyed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.CastContentWindowObserverReceiver = chromecast.mojom.CastContentWindowObserverReceiver;

chromecast.mojom.CastContentWindowObserverPtr = chromecast.mojom.CastContentWindowObserverRemote;
chromecast.mojom.CastContentWindowObserverRequest = chromecast.mojom.CastContentWindowObserverPendingReceiver;


// Interface: CastContentWindow
mojo.internal.Struct(
    chromecast.mojom.CastContentWindow_CreateWindow_ParamsSpec, 'chromecast.mojom.CastContentWindow_CreateWindow_Params', [
      mojo.internal.StructField('z_order', 0, 0, chromecast.mojom.ZOrderSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priority', 8, 0, chromecast.mojom.VisibilityPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec, 'chromecast.mojom.CastContentWindow_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.CastContentWindowObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec, 'chromecast.mojom.CastContentWindow_GrantScreenAccess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec, 'chromecast.mojom.CastContentWindow_RevokeScreenAccess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec, 'chromecast.mojom.CastContentWindow_RequestVisibility_Params', [
      mojo.internal.StructField('priority', 0, 0, chromecast.mojom.VisibilityPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastContentWindow_EnableTouchInput_ParamsSpec, 'chromecast.mojom.CastContentWindow_EnableTouchInput_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.CastContentWindowPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.CastContentWindowRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.CastContentWindow';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.CastContentWindowPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.CastContentWindowRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.CastContentWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWindow(z_order, priority) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.CastContentWindow_CreateWindow_ParamsSpec,
      null,
      [z_order, priority],
      false);
  }

  addObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  grantScreenAccess() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec,
      null,
      [],
      false);
  }

  revokeScreenAccess() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec,
      null,
      [],
      false);
  }

  requestVisibility(priority) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec,
      null,
      [priority],
      false);
  }

  enableTouchInput(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.mojom.CastContentWindow_EnableTouchInput_ParamsSpec,
      null,
      [enabled],
      false);
  }

};

chromecast.mojom.CastContentWindow.getRemote = function() {
  let remote = new chromecast.mojom.CastContentWindowRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.CastContentWindow',
    'context');
  return remote.$;
};

chromecast.mojom.CastContentWindowReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: CreateWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.CastContentWindow_CreateWindow_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWindow (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GrantScreenAccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GrantScreenAccess (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RevokeScreenAccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RevokeScreenAccess (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RequestVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestVisibility (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: EnableTouchInput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.CastContentWindow_EnableTouchInput_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableTouchInput (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStruct(chromecast.mojom.CastContentWindow_CreateWindow_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createWindow');
          const result = this.impl.createWindow(params.z_order, params.priority);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.CastContentWindow_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.CastContentWindow_GrantScreenAccess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.grantScreenAccess');
          const result = this.impl.grantScreenAccess();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.CastContentWindow_RevokeScreenAccess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.revokeScreenAccess');
          const result = this.impl.revokeScreenAccess();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.CastContentWindow_RequestVisibility_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestVisibility');
          const result = this.impl.requestVisibility(params.priority);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.CastContentWindow_EnableTouchInput_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enableTouchInput');
          const result = this.impl.enableTouchInput(params.enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.CastContentWindowReceiver = chromecast.mojom.CastContentWindowReceiver;

chromecast.mojom.CastContentWindowPtr = chromecast.mojom.CastContentWindowRemote;
chromecast.mojom.CastContentWindowRequest = chromecast.mojom.CastContentWindowPendingReceiver;

