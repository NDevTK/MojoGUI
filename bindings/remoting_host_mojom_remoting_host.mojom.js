// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remoting_host.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Enum: TransportRouteType
remoting.mojom.TransportRouteType = {
  kUndefined: 0,
  kDirect: 1,
  kStun: 2,
  kRelay: 3,
};

// Struct: TransportRoute
remoting.mojom.TransportRouteSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.TransportRoute',
      packedSize: 16,
      fields: [
        { name: 'local_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: RemotingHostControl
remoting.mojom.RemotingHostControl = {};

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
      [config]);
  }

  initializePairingRegistry(privileged_handle, unprivileged_handle) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec,
      null,
      [privileged_handle, unprivileged_handle]);
  }

  bindChromotingHostServices(receiver, peer_pid) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec,
      null,
      [receiver, peer_pid]);
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

// ParamsSpec for ApplyHostConfig
remoting.mojom.RemotingHostControl_ApplyHostConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.RemotingHostControl.ApplyHostConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InitializePairingRegistry
remoting.mojom.RemotingHostControl_InitializePairingRegistry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.RemotingHostControl.InitializePairingRegistry_Params',
      packedSize: 24,
      fields: [
        { name: 'privileged_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'unprivileged_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindChromotingHostServices
remoting.mojom.RemotingHostControl_BindChromotingHostServices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.RemotingHostControl.BindChromotingHostServices_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'peer_pid', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
remoting.mojom.RemotingHostControlPtr = remoting.mojom.RemotingHostControlRemote;
remoting.mojom.RemotingHostControlRequest = remoting.mojom.RemotingHostControlPendingReceiver;


// Interface: DesktopSessionConnectionEvents
remoting.mojom.DesktopSessionConnectionEvents = {};

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
      [terminal_id]);
  }

  onDesktopSessionAgentAttached(terminal_id, session_id, desktop_pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec,
      null,
      [terminal_id, session_id, desktop_pipe]);
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

// ParamsSpec for OnTerminalDisconnected
remoting.mojom.DesktopSessionConnectionEvents_OnTerminalDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionConnectionEvents.OnTerminalDisconnected_Params',
      packedSize: 16,
      fields: [
        { name: 'terminal_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDesktopSessionAgentAttached
remoting.mojom.DesktopSessionConnectionEvents_OnDesktopSessionAgentAttached_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionConnectionEvents.OnDesktopSessionAgentAttached_Params',
      packedSize: 24,
      fields: [
        { name: 'desktop_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'terminal_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'session_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
remoting.mojom.DesktopSessionConnectionEventsPtr = remoting.mojom.DesktopSessionConnectionEventsRemote;
remoting.mojom.DesktopSessionConnectionEventsRequest = remoting.mojom.DesktopSessionConnectionEventsPendingReceiver;


// Interface: HostStatusObserver
remoting.mojom.HostStatusObserver = {};

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
      [signaling_id]);
  }

  onClientAuthenticated(signaling_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec,
      null,
      [signaling_id]);
  }

  onClientConnected(signaling_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec,
      null,
      [signaling_id]);
  }

  onClientDisconnected(signaling_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec,
      null,
      [signaling_id]);
  }

  onClientRouteChange(signaling_id, channel_name, route) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec,
      null,
      [signaling_id, channel_name, route]);
  }

  onHostStarted(owner_email) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec,
      null,
      [owner_email]);
  }

  onHostShutdown() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnClientAccessDenied
remoting.mojom.HostStatusObserver_OnClientAccessDenied_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnClientAccessDenied_Params',
      packedSize: 16,
      fields: [
        { name: 'signaling_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnClientAuthenticated
remoting.mojom.HostStatusObserver_OnClientAuthenticated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnClientAuthenticated_Params',
      packedSize: 16,
      fields: [
        { name: 'signaling_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnClientConnected
remoting.mojom.HostStatusObserver_OnClientConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnClientConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'signaling_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnClientDisconnected
remoting.mojom.HostStatusObserver_OnClientDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnClientDisconnected_Params',
      packedSize: 16,
      fields: [
        { name: 'signaling_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnClientRouteChange
remoting.mojom.HostStatusObserver_OnClientRouteChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnClientRouteChange_Params',
      packedSize: 32,
      fields: [
        { name: 'signaling_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'channel_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'route', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHostStarted
remoting.mojom.HostStatusObserver_OnHostStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnHostStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'owner_email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHostShutdown
remoting.mojom.HostStatusObserver_OnHostShutdown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.HostStatusObserver.OnHostShutdown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
remoting.mojom.HostStatusObserverPtr = remoting.mojom.HostStatusObserverRemote;
remoting.mojom.HostStatusObserverRequest = remoting.mojom.HostStatusObserverPendingReceiver;

