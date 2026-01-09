// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/wake_lock/wake_lock.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WakeLockService
blink.mojom.WakeLockServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WakeLockServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WakeLockService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WakeLockServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WakeLockServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WakeLockServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getWakeLock(type, reason, description, wake_lock) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WakeLockService_GetWakeLock_ParamsSpec.$,
      null,
      [type, reason, description, wake_lock]);
  }

};

blink.mojom.WakeLockService.getRemote = function() {
  let remote = new blink.mojom.WakeLockServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WakeLockService',
    'context');
  return remote.$;
}};

// ParamsSpec for GetWakeLock
blink.mojom.WakeLockService_GetWakeLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WakeLockService.GetWakeLock_Params',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'wake_lock', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
blink.mojom.WakeLockServicePtr = blink.mojom.WakeLockServiceRemote;
blink.mojom.WakeLockServiceRequest = blink.mojom.WakeLockServicePendingReceiver;

