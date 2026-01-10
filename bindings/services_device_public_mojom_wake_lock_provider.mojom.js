// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: WakeLockProvider
device.mojom.mojom.WakeLockProvider = {};

device.mojom.mojom.WakeLockProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.WakeLockProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.WakeLockProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.WakeLockProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.WakeLockProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.WakeLockProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWakeLockContextForID(context_id, context) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec,
      null,
      [context_id, context]);
  }

  getWakeLockWithoutContext(type, reason, description, wake_lock) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec,
      null,
      [type, reason, description, wake_lock]);
  }

  notifyOnWakeLockDeactivation(type, observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec,
      null,
      [type, observer]);
  }

  getActiveWakeLocksForTests(type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec,
      device.mojom.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParamsSpec,
      [type]);
  }

};

device.mojom.mojom.WakeLockProvider.getRemote = function() {
  let remote = new device.mojom.mojom.WakeLockProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.WakeLockProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetWakeLockContextForID
device.mojom.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockProvider.GetWakeLockContextForID_Params',
      packedSize: 24,
      fields: [
        { name: 'context_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(device.mojom.WakeLockContextRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetWakeLockWithoutContext
device.mojom.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockProvider.GetWakeLockWithoutContext_Params',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: device.mojom.WakeLockTypeSpec, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 20, packedBitOffset: 0, type: device.mojom.WakeLockReasonSpec, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'wake_lock', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(device.mojom.WakeLockRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for NotifyOnWakeLockDeactivation
device.mojom.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockProvider.NotifyOnWakeLockDeactivation_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: device.mojom.WakeLockTypeSpec, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(device.mojom.WakeLockObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetActiveWakeLocksForTests
device.mojom.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockProvider.GetActiveWakeLocksForTests_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: device.mojom.WakeLockTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockProvider.GetActiveWakeLocksForTests_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.WakeLockProviderPtr = device.mojom.mojom.WakeLockProviderRemote;
device.mojom.mojom.WakeLockProviderRequest = device.mojom.mojom.WakeLockProviderPendingReceiver;


// Interface: WakeLockObserver
device.mojom.mojom.WakeLockObserver = {};

device.mojom.mojom.WakeLockObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.WakeLockObserverRemote = class {
  static get $interfaceName() {
    return 'device.mojom.WakeLockObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.WakeLockObserverPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.WakeLockObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.WakeLockObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWakeLockDeactivated(type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec,
      null,
      [type]);
  }

};

device.mojom.mojom.WakeLockObserver.getRemote = function() {
  let remote = new device.mojom.mojom.WakeLockObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.WakeLockObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnWakeLockDeactivated
device.mojom.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockObserver.OnWakeLockDeactivated_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: device.mojom.WakeLockTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.WakeLockObserverPtr = device.mojom.mojom.WakeLockObserverRemote;
device.mojom.mojom.WakeLockObserverRequest = device.mojom.mojom.WakeLockObserverPendingReceiver;

