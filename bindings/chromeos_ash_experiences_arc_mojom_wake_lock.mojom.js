// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/wake_lock.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: WakeLockHost
arc.mojom.mojom.WakeLockHost = {};

arc.mojom.mojom.WakeLockHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.WakeLockHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WakeLockHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.WakeLockHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.WakeLockHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.WakeLockHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  acquirePartialWakeLock() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.WakeLockHost_AcquirePartialWakeLock_ParamsSpec,
      arc.mojom.mojom.WakeLockHost_AcquirePartialWakeLock_ResponseParamsSpec,
      []);
  }

  releasePartialWakeLock() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.WakeLockHost_ReleasePartialWakeLock_ParamsSpec,
      arc.mojom.mojom.WakeLockHost_ReleasePartialWakeLock_ResponseParamsSpec,
      []);
  }

};

arc.mojom.mojom.WakeLockHost.getRemote = function() {
  let remote = new arc.mojom.mojom.WakeLockHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WakeLockHost',
    'context');
  return remote.$;
};

// ParamsSpec for AcquirePartialWakeLock
arc.mojom.mojom.WakeLockHost_AcquirePartialWakeLock_ParamsSpec = {
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

arc.mojom.mojom.WakeLockHost_AcquirePartialWakeLock_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WakeLockHost.AcquirePartialWakeLock_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReleasePartialWakeLock
arc.mojom.mojom.WakeLockHost_ReleasePartialWakeLock_ParamsSpec = {
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

arc.mojom.mojom.WakeLockHost_ReleasePartialWakeLock_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WakeLockHost.ReleasePartialWakeLock_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.WakeLockHostPtr = arc.mojom.mojom.WakeLockHostRemote;
arc.mojom.mojom.WakeLockHostRequest = arc.mojom.mojom.WakeLockHostPendingReceiver;


// Interface: WakeLockInstance
arc.mojom.mojom.WakeLockInstance = {};

arc.mojom.mojom.WakeLockInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.WakeLockInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WakeLockInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.WakeLockInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.WakeLockInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.WakeLockInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.WakeLockInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.WakeLockInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.WakeLockInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WakeLockInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.WakeLockInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WakeLockInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.WakeLockHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.WakeLockInstancePtr = arc.mojom.mojom.WakeLockInstanceRemote;
arc.mojom.mojom.WakeLockInstanceRequest = arc.mojom.mojom.WakeLockInstancePendingReceiver;

