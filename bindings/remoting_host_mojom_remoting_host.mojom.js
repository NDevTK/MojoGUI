// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remoting_host.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Enum: TransportRouteType
remoting.mojom.mojom.TransportRouteType = {
  kUndefined: 0,
  kDirect: 1,
  kStun: 2,
  kRelay: 3,
};
remoting.mojom.mojom.TransportRouteTypeSpec = { $: mojo.internal.Enum() };

// Struct: TransportRoute
remoting.mojom.mojom.TransportRouteSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.TransportRoute',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: remoting.mojom.TransportRouteTypeSpec, nullable: false, minVersion: 0 },
        { name: 'remote_address', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false, minVersion: 0 },
        { name: 'local_address', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: RemotingHostControl
remoting.mojom.mojom.RemotingHostControl = {};

remoting.mojom.mojom.RemotingHostControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.mojom.RemotingHostControlRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.RemotingHostControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.mojom.RemotingHostControlPendingReceiver,
      handle);
    this.$ = new remoting.mojom.mojom.RemotingHostControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.mojom.RemotingHostControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  applyHostConfig(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec,
      null,
      [config]);
  }

  initializePairingRegistry(privileged_handle, unprivileged_handle) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec,
      null,
      [privileged_handle, unprivileged_handle]);
  }

  bindChromotingHostServices(receiver, peer_pid) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec,
      null,
      [receiver, peer_pid]);
  }

};

remoting.mojom.mojom.RemotingHostControl.getRemote = function() {
  let remote = new remoting.mojom.mojom.RemotingHostControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.RemotingHostControl',
    'context');
  return remote.$;
};

// ParamsSpec for ApplyHostConfig
remoting.mojom.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.RemotingHostControl.ApplyHostConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InitializePairingRegistry
remoting.mojom.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.RemotingHostControl.InitializePairingRegistry_Params',
      packedSize: 24,
      fields: [
        { name: 'privileged_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'unprivileged_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BindChromotingHostServices
remoting.mojom.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.RemotingHostControl.BindChromotingHostServices_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'peer_pid', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.mojom.RemotingHostControlPtr = remoting.mojom.mojom.RemotingHostControlRemote;
remoting.mojom.mojom.RemotingHostControlRequest = remoting.mojom.mojom.RemotingHostControlPendingReceiver;


// Interface: DesktopSessionConnectionEvents
remoting.mojom.mojom.DesktopSessionConnectionEvents = {};

remoting.mojom.mojom.DesktopSessionConnectionEventsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.mojom.DesktopSessionConnectionEventsRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionConnectionEvents';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.mojom.DesktopSessionConnectionEventsPendingReceiver,
      handle);
    this.$ = new remoting.mojom.mojom.DesktopSessionConnectionEventsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.mojom.DesktopSessionConnectionEventsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTerminalDisconnected(terminal_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec,
      null,
      [terminal_id]);
  }

  onDesktopSessionAgentAttached(terminal_id, session_id, desktop_pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec,
      null,
      [terminal_id, session_id, desktop_pipe]);
  }

};

remoting.mojom.mojom.DesktopSessionConnectionEvents.getRemote = function() {
  let remote = new remoting.mojom.mojom.DesktopSessionConnectionEventsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionConnectionEvents',
    'context');
  return remote.$;
};

// ParamsSpec for OnTerminalDisconnected
remoting.mojom.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionConnectionEvents.OnTerminalDisconnected_Params',
      packedSize: 16,
      fields: [
        { name: 'terminal_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDesktopSessionAgentAttached
remoting.mojom.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionConnectionEvents.OnDesktopSessionAgentAttached_Params',
      packedSize: 24,
      fields: [
        { name: 'terminal_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'desktop_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
remoting.mojom.mojom.DesktopSessionConnectionEventsPtr = remoting.mojom.mojom.DesktopSessionConnectionEventsRemote;
remoting.mojom.mojom.DesktopSessionConnectionEventsRequest = remoting.mojom.mojom.DesktopSessionConnectionEventsPendingReceiver;


// Interface: HostStatusObserver
remoting.mojom.mojom.HostStatusObserver = {};

remoting.mojom.mojom.HostStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.mojom.HostStatusObserverRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.HostStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.mojom.HostStatusObserverPendingReceiver,
      handle);
    this.$ = new remoting.mojom.mojom.HostStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.mojom.HostStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onClientAccessDenied(signaling_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec,
      null,
      [signaling_id]);
  }

  onClientAuthenticated(signaling_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec,
      null,
      [signaling_id]);
  }

  onClientConnected(signaling_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.mojom.HostStatusObserver_OnClientConnected_ParamsSpec,
      null,
      [signaling_id]);
  }

  onClientDisconnected(signaling_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remoting.mojom.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec,
      null,
      [signaling_id]);
  }

  onClientRouteChange(signaling_id, channel_name, route) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remoting.mojom.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec,
      null,
      [signaling_id, channel_name, route]);
  }

  onHostStarted(owner_email) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remoting.mojom.mojom.HostStatusObserver_OnHostStarted_ParamsSpec,
      null,
      [owner_email]);
  }

  onHostShutdown() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remoting.mojom.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec,
      null,
      []);
  }

};

remoting.mojom.mojom.HostStatusObserver.getRemote = function() {
  let remote = new remoting.mojom.mojom.HostStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.HostStatusObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnClientAccessDenied
remoting.mojom.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnClientAccessDenied_Params',
      packedSize: 16,
      fields: [
        { name: 'signaling_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnClientAuthenticated
remoting.mojom.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnClientAuthenticated_Params',
      packedSize: 16,
      fields: [
        { name: 'signaling_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnClientConnected
remoting.mojom.mojom.HostStatusObserver_OnClientConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnClientConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'signaling_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnClientDisconnected
remoting.mojom.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnClientDisconnected_Params',
      packedSize: 16,
      fields: [
        { name: 'signaling_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnClientRouteChange
remoting.mojom.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnClientRouteChange_Params',
      packedSize: 32,
      fields: [
        { name: 'signaling_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'channel_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'route', packedOffset: 16, packedBitOffset: 0, type: remoting.mojom.TransportRouteSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnHostStarted
remoting.mojom.mojom.HostStatusObserver_OnHostStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnHostStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'owner_email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnHostShutdown
remoting.mojom.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnHostShutdown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
remoting.mojom.mojom.HostStatusObserverPtr = remoting.mojom.mojom.HostStatusObserverRemote;
remoting.mojom.mojom.HostStatusObserverRequest = remoting.mojom.mojom.HostStatusObserverPendingReceiver;

