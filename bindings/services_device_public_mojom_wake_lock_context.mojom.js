// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock_context.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.WakeLockContext = {};
device.mojom.WakeLockContext.$interfaceName = 'device.mojom.WakeLockContext';
device.mojom.WakeLockContext_GetWakeLock_ParamsSpec = { $: {} };

// Interface: WakeLockContext
mojo.internal.Struct(
    device.mojom.WakeLockContext_GetWakeLock_ParamsSpec, 'device.mojom.WakeLockContext_GetWakeLock_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.WakeLockTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, device.mojom.WakeLockReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('wake_lock', 24, 0, mojo.internal.InterfaceRequest(device.mojom.WakeLockRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

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
      [type, reason, description, wake_lock],
      false);
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

device.mojom.WakeLockContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.WakeLockContext_GetWakeLock_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getWakeLock(params.type, params.reason, params.description, params.wake_lock);
          break;
        }
      }
    }});
  }
};

device.mojom.WakeLockContextReceiver = device.mojom.WakeLockContextReceiver;

device.mojom.WakeLockContextPtr = device.mojom.WakeLockContextRemote;
device.mojom.WakeLockContextRequest = device.mojom.WakeLockContextPendingReceiver;

