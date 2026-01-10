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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.WakeLockContext_GetWakeLock_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getWakeLock');
          const result = this.impl.getWakeLock(params.type, params.reason, params.description, params.wake_lock);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.WakeLockContextReceiver = device.mojom.WakeLockContextReceiver;

device.mojom.WakeLockContextPtr = device.mojom.WakeLockContextRemote;
device.mojom.WakeLockContextRequest = device.mojom.WakeLockContextPendingReceiver;

