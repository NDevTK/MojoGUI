// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: WakeLockProvider
device.mojom.WakeLockProvider = {};

device.mojom.WakeLockProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.WakeLockProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.WakeLockProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.WakeLockProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.WakeLockProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.WakeLockProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWakeLockContextForID(context_id, context) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec,
      null,
      [context_id, context]);
  }

  getWakeLockWithoutContext(type, reason, description, wake_lock) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec,
      null,
      [type, reason, description, wake_lock]);
  }

  notifyOnWakeLockDeactivation(type, observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec,
      null,
      [type, observer]);
  }

  getActiveWakeLocksForTests(type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec,
      device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParamsSpec,
      [type]);
  }

};

device.mojom.WakeLockProvider.getRemote = function() {
  let remote = new device.mojom.WakeLockProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.WakeLockProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetWakeLockContextForID
device.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockProvider.GetWakeLockContextForID_Params',
      packedSize: 16,
      fields: [
        { name: 'context_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'context', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetWakeLockWithoutContext
device.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockProvider.GetWakeLockWithoutContext_Params',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: device.mojom.WakeLockTypeSpec, nullable: false },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: device.mojom.WakeLockReasonSpec, nullable: false },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'wake_lock', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyOnWakeLockDeactivation
device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockProvider.NotifyOnWakeLockDeactivation_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: device.mojom.WakeLockTypeSpec, nullable: false },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetActiveWakeLocksForTests
device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockProvider.GetActiveWakeLocksForTests_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: device.mojom.WakeLockTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockProvider.GetActiveWakeLocksForTests_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.WakeLockProviderPtr = device.mojom.WakeLockProviderRemote;
device.mojom.WakeLockProviderRequest = device.mojom.WakeLockProviderPendingReceiver;


// Interface: WakeLockObserver
device.mojom.WakeLockObserver = {};

device.mojom.WakeLockObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.WakeLockObserverRemote = class {
  static get $interfaceName() {
    return 'device.mojom.WakeLockObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.WakeLockObserverPendingReceiver,
      handle);
    this.$ = new device.mojom.WakeLockObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.WakeLockObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWakeLockDeactivated(type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec,
      null,
      [type]);
  }

};

device.mojom.WakeLockObserver.getRemote = function() {
  let remote = new device.mojom.WakeLockObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.WakeLockObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnWakeLockDeactivated
device.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockObserver.OnWakeLockDeactivated_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: device.mojom.WakeLockTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.WakeLockObserverPtr = device.mojom.WakeLockObserverRemote;
device.mojom.WakeLockObserverRequest = device.mojom.WakeLockObserverPendingReceiver;

