// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/wake_lock.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.WakeLockHost = {};
arc.mojom.WakeLockHost.$interfaceName = 'arc.mojom.WakeLockHost';
arc.mojom.WakeLockHost_AcquirePartialWakeLock_ParamsSpec = { $: {} };
arc.mojom.WakeLockHost_AcquirePartialWakeLock_ResponseParamsSpec = { $: {} };
arc.mojom.WakeLockHost_ReleasePartialWakeLock_ParamsSpec = { $: {} };
arc.mojom.WakeLockHost_ReleasePartialWakeLock_ResponseParamsSpec = { $: {} };
arc.mojom.WakeLockInstance = {};
arc.mojom.WakeLockInstance.$interfaceName = 'arc.mojom.WakeLockInstance';
arc.mojom.WakeLockInstance_Init_ParamsSpec = { $: {} };
arc.mojom.WakeLockInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: WakeLockHost
mojo.internal.Struct(
    arc.mojom.WakeLockHost_AcquirePartialWakeLock_ParamsSpec, 'arc.mojom.WakeLockHost_AcquirePartialWakeLock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.WakeLockHost_AcquirePartialWakeLock_ResponseParamsSpec, 'arc.mojom.WakeLockHost_AcquirePartialWakeLock_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.WakeLockHost_ReleasePartialWakeLock_ParamsSpec, 'arc.mojom.WakeLockHost_ReleasePartialWakeLock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.WakeLockHost_ReleasePartialWakeLock_ResponseParamsSpec, 'arc.mojom.WakeLockHost_ReleasePartialWakeLock_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  releasePartialWakeLock() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.WakeLockHost_ReleasePartialWakeLock_ParamsSpec,
      arc.mojom.WakeLockHost_ReleasePartialWakeLock_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.WakeLockHost.getRemote = function() {
  let remote = new arc.mojom.WakeLockHostRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'arc.mojom.WakeLockHost',
    'context');
  return remote.$;
};

arc.mojom.WakeLockHostPtr = arc.mojom.WakeLockHostRemote;
arc.mojom.WakeLockHostRequest = arc.mojom.WakeLockHostPendingReceiver;


// Interface: WakeLockInstance
mojo.internal.Struct(
    arc.mojom.WakeLockInstance_Init_ParamsSpec, 'arc.mojom.WakeLockInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.WakeLockHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.WakeLockInstance_Init_ResponseParamsSpec, 'arc.mojom.WakeLockInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

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
      arc.mojom.WakeLockInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.WakeLockInstance.getRemote = function() {
  let remote = new arc.mojom.WakeLockInstanceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'arc.mojom.WakeLockInstance',
    'context');
  return remote.$;
};

arc.mojom.WakeLockInstancePtr = arc.mojom.WakeLockInstanceRemote;
arc.mojom.WakeLockInstanceRequest = arc.mojom.WakeLockInstancePendingReceiver;

