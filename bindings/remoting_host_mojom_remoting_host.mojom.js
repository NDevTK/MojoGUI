// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remoting_host.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Enum: TransportRouteType
remoting.mojom.TransportRouteType = {
};

// Struct: TransportRoute
remoting.mojom.TransportRoute = class {
  constructor(values = {}) {
    this.local_address = values.local_address !== undefined ? values.local_address : 0;
  }
};

// Interface: RemotingHostControl
remoting.mojom.RemotingHostControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.RemotingHostControl';
  }

  applyHostConfig(config) {
    // Method: ApplyHostConfig
    // Call: ApplyHostConfig(config)
  }

  initializePairingRegistry(privileged_handle, unprivileged_handle) {
    // Method: InitializePairingRegistry
    // Call: InitializePairingRegistry(privileged_handle, unprivileged_handle)
  }

  bindChromotingHostServices(receiver, peer_pid) {
    // Method: BindChromotingHostServices
    // Call: BindChromotingHostServices(receiver, peer_pid)
  }

};

remoting.mojom.RemotingHostControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DesktopSessionConnectionEvents
remoting.mojom.DesktopSessionConnectionEventsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.DesktopSessionConnectionEvents';
  }

  onTerminalDisconnected(terminal_id) {
    // Method: OnTerminalDisconnected
    // Call: OnTerminalDisconnected(terminal_id)
  }

  onDesktopSessionAgentAttached(terminal_id, session_id, desktop_pipe) {
    // Method: OnDesktopSessionAgentAttached
    // Call: OnDesktopSessionAgentAttached(terminal_id, session_id, desktop_pipe)
  }

};

remoting.mojom.DesktopSessionConnectionEventsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HostStatusObserver
remoting.mojom.HostStatusObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.HostStatusObserver';
  }

  onClientAccessDenied(signaling_id) {
    // Method: OnClientAccessDenied
    // Call: OnClientAccessDenied(signaling_id)
  }

  onClientAuthenticated(signaling_id) {
    // Method: OnClientAuthenticated
    // Call: OnClientAuthenticated(signaling_id)
  }

  onClientConnected(signaling_id) {
    // Method: OnClientConnected
    // Call: OnClientConnected(signaling_id)
  }

  onClientDisconnected(signaling_id) {
    // Method: OnClientDisconnected
    // Call: OnClientDisconnected(signaling_id)
  }

  onClientRouteChange(signaling_id, channel_name, route) {
    // Method: OnClientRouteChange
    // Call: OnClientRouteChange(signaling_id, channel_name, route)
  }

  onHostStarted(owner_email) {
    // Method: OnHostStarted
    // Call: OnHostStarted(owner_email)
  }

  onHostShutdown() {
    // Method: OnHostShutdown
    // Call: OnHostShutdown()
  }

};

remoting.mojom.HostStatusObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
