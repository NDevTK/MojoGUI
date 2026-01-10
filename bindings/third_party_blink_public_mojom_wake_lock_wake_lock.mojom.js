// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/wake_lock/wake_lock.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WakeLockService
blink.mojom.mojom.WakeLockService = {};

blink.mojom.mojom.WakeLockServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WakeLockServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WakeLockService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WakeLockServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WakeLockServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WakeLockServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWakeLock(type, reason, description, wake_lock) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WakeLockService_GetWakeLock_ParamsSpec,
      null,
      [type, reason, description, wake_lock]);
  }

};

blink.mojom.mojom.WakeLockService.getRemote = function() {
  let remote = new blink.mojom.mojom.WakeLockServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WakeLockService',
    'context');
  return remote.$;
};

// ParamsSpec for GetWakeLock
blink.mojom.mojom.WakeLockService_GetWakeLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WakeLockService.GetWakeLock_Params',
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
blink.mojom.mojom.WakeLockServicePtr = blink.mojom.mojom.WakeLockServiceRemote;
blink.mojom.mojom.WakeLockServiceRequest = blink.mojom.mojom.WakeLockServicePendingReceiver;

