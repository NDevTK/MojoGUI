// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/wake_lock/wake_lock.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};

blink.mojom.WakeLockService = {};
blink.mojom.WakeLockService.$interfaceName = 'blink.mojom.WakeLockService';
blink.mojom.WakeLockService_GetWakeLock_ParamsSpec = { $: {} };

// Interface: WakeLockService
mojo.internal.Struct(
    blink.mojom.WakeLockService_GetWakeLock_ParamsSpec, 'blink.mojom.WakeLockService_GetWakeLock_Params', [
      mojo.internal.StructField('type', 16, 0, device.mojom.WakeLockTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('reason', 20, 0, device.mojom.WakeLockReasonSpec, null, false, 0, undefined),
      mojo.internal.StructField('description', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('wake_lock', 8, 0, mojo.internal.InterfaceRequest(device.mojom.WakeLockRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      blink.mojom.WakeLockService_GetWakeLock_ParamsSpec,
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
};

blink.mojom.WakeLockServicePtr = blink.mojom.WakeLockServiceRemote;
blink.mojom.WakeLockServiceRequest = blink.mojom.WakeLockServicePendingReceiver;

