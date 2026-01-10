// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/system_state.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: SystemAppRunningState
arc.mojom.SystemAppRunningStateSpec = {
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
arc.mojom.SystemStateHost = {};

arc.mojom.SystemStateHost_UpdateAppRunningState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SystemStateHost_UpdateAppRunningState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SystemAppRunningStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.SystemStateHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.SystemStateHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SystemStateHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.SystemStateHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.SystemStateHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.SystemStateHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateAppRunningState(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.SystemStateHost_UpdateAppRunningState_ParamsSpec,
      null,
      [state]);
  }

};

arc.mojom.SystemStateHost.getRemote = function() {
  let remote = new arc.mojom.SystemStateHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SystemStateHost',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateAppRunningState
arc.mojom.SystemStateHost_UpdateAppRunningState_ParamsSpec = {
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
arc.mojom.SystemStateHostPtr = arc.mojom.SystemStateHostRemote;
arc.mojom.SystemStateHostRequest = arc.mojom.SystemStateHostPendingReceiver;


// Interface: SystemStateInstance
arc.mojom.SystemStateInstance = {};

arc.mojom.SystemStateInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SystemStateInstance_Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.SystemStateHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.SystemStateInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.SystemStateInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SystemStateInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.SystemStateInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.SystemStateInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.SystemStateInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.SystemStateInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.SystemStateInstance.getRemote = function() {
  let remote = new arc.mojom.SystemStateInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SystemStateInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.SystemStateInstance_Init_ParamsSpec = {
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
arc.mojom.SystemStateInstancePtr = arc.mojom.SystemStateInstanceRemote;
arc.mojom.SystemStateInstanceRequest = arc.mojom.SystemStateInstancePendingReceiver;

