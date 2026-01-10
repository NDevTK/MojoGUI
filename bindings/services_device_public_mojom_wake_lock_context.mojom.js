// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock_context.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: WakeLockContext
device.mojom.mojom.WakeLockContext = {};

device.mojom.mojom.WakeLockContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.WakeLockContextRemote = class {
  static get $interfaceName() {
    return 'device.mojom.WakeLockContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.WakeLockContextPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.WakeLockContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.WakeLockContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWakeLock(type, reason, description, wake_lock) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.WakeLockContext_GetWakeLock_ParamsSpec,
      null,
      [type, reason, description, wake_lock]);
  }

};

device.mojom.mojom.WakeLockContext.getRemote = function() {
  let remote = new device.mojom.mojom.WakeLockContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.WakeLockContext',
    'context');
  return remote.$;
};

// ParamsSpec for GetWakeLock
device.mojom.mojom.WakeLockContext_GetWakeLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockContext.GetWakeLock_Params',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: device.mojom.WakeLockTypeSpec, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 12, packedBitOffset: 0, type: device.mojom.WakeLockReasonSpec, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'wake_lock', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.WakeLockContextPtr = device.mojom.mojom.WakeLockContextRemote;
device.mojom.mojom.WakeLockContextRequest = device.mojom.mojom.WakeLockContextPendingReceiver;

