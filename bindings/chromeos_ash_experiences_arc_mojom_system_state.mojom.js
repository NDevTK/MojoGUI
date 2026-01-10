// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/system_state.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: SystemAppRunningState
arc.mojom.mojom.SystemAppRunningStateSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SystemAppRunningState',
      packedSize: 16,
      fields: [
        { name: 'top_layer_app', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'foreground_app', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'background_app', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'performance_sensitive_app', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'background_service', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: SystemStateHost
arc.mojom.mojom.SystemStateHost = {};

arc.mojom.mojom.SystemStateHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.SystemStateHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SystemStateHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.SystemStateHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.SystemStateHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.SystemStateHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateAppRunningState(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.SystemStateHost_UpdateAppRunningState_ParamsSpec,
      null,
      [state]);
  }

};

arc.mojom.mojom.SystemStateHost.getRemote = function() {
  let remote = new arc.mojom.mojom.SystemStateHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SystemStateHost',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateAppRunningState
arc.mojom.mojom.SystemStateHost_UpdateAppRunningState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SystemStateHost.UpdateAppRunningState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SystemAppRunningStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.SystemStateHostPtr = arc.mojom.mojom.SystemStateHostRemote;
arc.mojom.mojom.SystemStateHostRequest = arc.mojom.mojom.SystemStateHostPendingReceiver;


// Interface: SystemStateInstance
arc.mojom.mojom.SystemStateInstance = {};

arc.mojom.mojom.SystemStateInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.SystemStateInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SystemStateInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.SystemStateInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.SystemStateInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.SystemStateInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.SystemStateInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.SystemStateInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.SystemStateInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SystemStateInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.SystemStateInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SystemStateInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.SystemStateHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.SystemStateInstancePtr = arc.mojom.mojom.SystemStateInstanceRemote;
arc.mojom.mojom.SystemStateInstanceRequest = arc.mojom.mojom.SystemStateInstancePendingReceiver;

