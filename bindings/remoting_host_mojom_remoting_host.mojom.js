// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remoting_host.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};

remoting.mojom.TransportRouteTypeSpec = { $: mojo.internal.Enum() };
remoting.mojom.TransportRouteSpec = { $: {} };
remoting.mojom.RemotingHostControl = {};
remoting.mojom.RemotingHostControl.$interfaceName = 'remoting.mojom.RemotingHostControl';
remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec = { $: {} };
remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec = { $: {} };
remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionConnectionEvents = {};
remoting.mojom.DesktopSessionConnectionEvents.$interfaceName = 'remoting.mojom.DesktopSessionConnectionEvents';
remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver = {};
remoting.mojom.HostStatusObserver.$interfaceName = 'remoting.mojom.HostStatusObserver';
remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec = { $: {} };
remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec = { $: {} };

// Enum: TransportRouteType
remoting.mojom.TransportRouteType = {
  kUndefined: 0,
  kDirect: 1,
  kStun: 2,
  kRelay: 3,
};

// Struct: TransportRoute
mojo.internal.Struct(
    remoting.mojom.TransportRouteSpec, 'remoting.mojom.TransportRoute', [
      mojo.internal.StructField('type', 0, 0, remoting.mojom.TransportRouteTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_address', 8, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_address', 16, 0, network.mojom.IPEndPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: RemotingHostControl
mojo.internal.Struct(
    remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec, 'remoting.mojom.RemotingHostControl_ApplyHostConfig_Params', [
      mojo.internal.StructField('config', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec, 'remoting.mojom.RemotingHostControl_InitializePairingRegistry_Params', [
      mojo.internal.StructField('privileged_handle', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('unprivileged_handle', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec, 'remoting.mojom.RemotingHostControl_BindChromotingHostServices_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(remoting.mojom.ChromotingHostServicesRemote), null, false, 0, undefined),
      mojo.internal.StructField('peer_pid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

remoting.mojom.RemotingHostControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.RemotingHostControlRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.RemotingHostControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.RemotingHostControlPendingReceiver,
      handle);
    this.$ = new remoting.mojom.RemotingHostControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.RemotingHostControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  applyHostConfig(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec,
      null,
      [config],
      false);
  }

  initializePairingRegistry(privileged_handle, unprivileged_handle) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec,
      null,
      [privileged_handle, unprivileged_handle],
      false);
  }

  bindChromotingHostServices(receiver, peer_pid) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec,
      null,
      [receiver, peer_pid],
      false);
  }

};

remoting.mojom.RemotingHostControl.getRemote = function() {
  let remote = new remoting.mojom.RemotingHostControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.RemotingHostControl',
    'context');
  return remote.$;
};

remoting.mojom.RemotingHostControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: ApplyHostConfig
        try {
             decoder.decodeStruct(remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyHostConfig (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: InitializePairingRegistry
        try {
             decoder.decodeStruct(remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializePairingRegistry (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: BindChromotingHostServices
        try {
             decoder.decodeStruct(remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindChromotingHostServices (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.applyHostConfig');
          const result = this.impl.applyHostConfig(params.config);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initializePairingRegistry');
          const result = this.impl.initializePairingRegistry(params.privileged_handle, params.unprivileged_handle);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindChromotingHostServices');
          const result = this.impl.bindChromotingHostServices(params.receiver, params.peer_pid);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remoting.mojom.RemotingHostControlReceiver = remoting.mojom.RemotingHostControlReceiver;

remoting.mojom.RemotingHostControlPtr = remoting.mojom.RemotingHostControlRemote;
remoting.mojom.RemotingHostControlRequest = remoting.mojom.RemotingHostControlPendingReceiver;


// Interface: DesktopSessionConnectionEvents
mojo.internal.Struct(
    remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec, 'remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_Params', [
      mojo.internal.StructField('terminal_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec, 'remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_Params', [
      mojo.internal.StructField('desktop_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('terminal_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('session_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

remoting.mojom.DesktopSessionConnectionEventsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.DesktopSessionConnectionEventsRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionConnectionEvents';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.DesktopSessionConnectionEventsPendingReceiver,
      handle);
    this.$ = new remoting.mojom.DesktopSessionConnectionEventsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.DesktopSessionConnectionEventsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTerminalDisconnected(terminal_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec,
      null,
      [terminal_id],
      false);
  }

  onDesktopSessionAgentAttached(terminal_id, session_id, desktop_pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec,
      null,
      [terminal_id, session_id, desktop_pipe],
      false);
  }

};

remoting.mojom.DesktopSessionConnectionEvents.getRemote = function() {
  let remote = new remoting.mojom.DesktopSessionConnectionEventsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionConnectionEvents',
    'context');
  return remote.$;
};

remoting.mojom.DesktopSessionConnectionEventsReceiver = class {
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
        
        // Try Method 0: OnTerminalDisconnected
        try {
             decoder.decodeStruct(remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTerminalDisconnected (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnDesktopSessionAgentAttached
        try {
             decoder.decodeStruct(remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDesktopSessionAgentAttached (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTerminalDisconnected');
          const result = this.impl.onTerminalDisconnected(params.terminal_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDesktopSessionAgentAttached');
          const result = this.impl.onDesktopSessionAgentAttached(params.terminal_id, params.session_id, params.desktop_pipe);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remoting.mojom.DesktopSessionConnectionEventsReceiver = remoting.mojom.DesktopSessionConnectionEventsReceiver;

remoting.mojom.DesktopSessionConnectionEventsPtr = remoting.mojom.DesktopSessionConnectionEventsRemote;
remoting.mojom.DesktopSessionConnectionEventsRequest = remoting.mojom.DesktopSessionConnectionEventsPendingReceiver;


// Interface: HostStatusObserver
mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientAccessDenied_Params', [
      mojo.internal.StructField('signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientAuthenticated_Params', [
      mojo.internal.StructField('signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientConnected_Params', [
      mojo.internal.StructField('signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientDisconnected_Params', [
      mojo.internal.StructField('signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnClientRouteChange_Params', [
      mojo.internal.StructField('signaling_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('route', 16, 0, remoting.mojom.TransportRouteSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnHostStarted_Params', [
      mojo.internal.StructField('owner_email', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec, 'remoting.mojom.HostStatusObserver_OnHostShutdown_Params', [
    ],
    [[0, 8]]);

remoting.mojom.HostStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.HostStatusObserverRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.HostStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.HostStatusObserverPendingReceiver,
      handle);
    this.$ = new remoting.mojom.HostStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.HostStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onClientAccessDenied(signaling_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec,
      null,
      [signaling_id],
      false);
  }

  onClientAuthenticated(signaling_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec,
      null,
      [signaling_id],
      false);
  }

  onClientConnected(signaling_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec,
      null,
      [signaling_id],
      false);
  }

  onClientDisconnected(signaling_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec,
      null,
      [signaling_id],
      false);
  }

  onClientRouteChange(signaling_id, channel_name, route) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec,
      null,
      [signaling_id, channel_name, route],
      false);
  }

  onHostStarted(owner_email) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec,
      null,
      [owner_email],
      false);
  }

  onHostShutdown() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec,
      null,
      [],
      false);
  }

};

remoting.mojom.HostStatusObserver.getRemote = function() {
  let remote = new remoting.mojom.HostStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.HostStatusObserver',
    'context');
  return remote.$;
};

remoting.mojom.HostStatusObserverReceiver = class {
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
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
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
        
        // Try Method 0: OnClientAccessDenied
        try {
             decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClientAccessDenied (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnClientAuthenticated
        try {
             decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClientAuthenticated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: OnClientConnected
        try {
             decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClientConnected (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: OnClientDisconnected
        try {
             decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClientDisconnected (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: OnClientRouteChange
        try {
             decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClientRouteChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: OnHostStarted
        try {
             decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostStarted (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: OnHostShutdown
        try {
             decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHostShutdown (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onClientAccessDenied');
          const result = this.impl.onClientAccessDenied(params.signaling_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onClientAuthenticated');
          const result = this.impl.onClientAuthenticated(params.signaling_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onClientConnected');
          const result = this.impl.onClientConnected(params.signaling_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onClientDisconnected');
          const result = this.impl.onClientDisconnected(params.signaling_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onClientRouteChange');
          const result = this.impl.onClientRouteChange(params.signaling_id, params.channel_name, params.route);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onHostStarted');
          const result = this.impl.onHostStarted(params.owner_email);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onHostShutdown');
          const result = this.impl.onHostShutdown();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remoting.mojom.HostStatusObserverReceiver = remoting.mojom.HostStatusObserverReceiver;

remoting.mojom.HostStatusObserverPtr = remoting.mojom.HostStatusObserverRemote;
remoting.mojom.HostStatusObserverRequest = remoting.mojom.HostStatusObserverPendingReceiver;

