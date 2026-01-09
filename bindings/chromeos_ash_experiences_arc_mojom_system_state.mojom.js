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
        { name: 'background_service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: SystemStateHost
arc.mojom.SystemStateHost = {};

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

// Legacy compatibility
arc.mojom.SystemStateHostPtr = arc.mojom.SystemStateHostRemote;
arc.mojom.SystemStateHostRequest = arc.mojom.SystemStateHostPendingReceiver;


// Interface: SystemStateInstance
arc.mojom.SystemStateInstance = {};

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

// Legacy compatibility
arc.mojom.SystemStateInstancePtr = arc.mojom.SystemStateInstanceRemote;
arc.mojom.SystemStateInstanceRequest = arc.mojom.SystemStateInstancePendingReceiver;

