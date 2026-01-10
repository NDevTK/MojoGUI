// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/wake_lock.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: WakeLockHost
arc.mojom.WakeLockHost = {};

arc.mojom.WakeLockHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.WakeLockHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WakeLockHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.WakeLockHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.WakeLockHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.WakeLockHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  acquirePartialWakeLock() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.WakeLockHost_AcquirePartialWakeLock_ParamsSpec,
      arc.mojom.WakeLockHost_AcquirePartialWakeLock_ResponseParamsSpec,
      []);
  }

  releasePartialWakeLock() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.WakeLockHost_ReleasePartialWakeLock_ParamsSpec,
      arc.mojom.WakeLockHost_ReleasePartialWakeLock_ResponseParamsSpec,
      []);
  }

};

arc.mojom.WakeLockHost.getRemote = function() {
  let remote = new arc.mojom.WakeLockHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WakeLockHost',
    'context');
  return remote.$;
};

// ParamsSpec for AcquirePartialWakeLock
arc.mojom.WakeLockHost_AcquirePartialWakeLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WakeLockHost.AcquirePartialWakeLock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.WakeLockHost_AcquirePartialWakeLock_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReleasePartialWakeLock
arc.mojom.WakeLockHost_ReleasePartialWakeLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WakeLockHost.ReleasePartialWakeLock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.WakeLockHost_ReleasePartialWakeLock_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.WakeLockHostPtr = arc.mojom.WakeLockHostRemote;
arc.mojom.WakeLockHostRequest = arc.mojom.WakeLockHostPendingReceiver;


// Interface: WakeLockInstance
arc.mojom.WakeLockInstance = {};

arc.mojom.WakeLockInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.WakeLockInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WakeLockInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.WakeLockInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.WakeLockInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.WakeLockInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.WakeLockInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.WakeLockInstance.getRemote = function() {
  let remote = new arc.mojom.WakeLockInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WakeLockInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.WakeLockInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WakeLockInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.WakeLockInstancePtr = arc.mojom.WakeLockInstanceRemote;
arc.mojom.WakeLockInstanceRequest = arc.mojom.WakeLockInstancePendingReceiver;

