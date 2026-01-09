// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock_context.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: WakeLockContext
device.mojom.WakeLockContext = {};

device.mojom.WakeLockContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.WakeLockContextRemote = class {
  static get $interfaceName() {
    return 'device.mojom.WakeLockContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.WakeLockContextPendingReceiver,
      handle);
    this.$ = new device.mojom.WakeLockContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.WakeLockContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWakeLock(type, reason, description, wake_lock) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.WakeLockContext_GetWakeLock_ParamsSpec,
      null,
      [type, reason, description, wake_lock]);
  }

};

device.mojom.WakeLockContext.getRemote = function() {
  let remote = new device.mojom.WakeLockContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.WakeLockContext',
    'context');
  return remote.$;
};

// ParamsSpec for GetWakeLock
device.mojom.WakeLockContext_GetWakeLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLockContext.GetWakeLock_Params',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: device.mojom.WakeLockTypeSpec, nullable: false },
        { name: 'reason', packedOffset: 16, packedBitOffset: 0, type: device.mojom.WakeLockReasonSpec, nullable: false },
        { name: 'description', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'wake_lock', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.WakeLockContextPtr = device.mojom.WakeLockContextRemote;
device.mojom.WakeLockContextRequest = device.mojom.WakeLockContextPendingReceiver;

