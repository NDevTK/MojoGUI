// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock_context.mojom
// Module: device.mojom

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
  getWakeLock(type, reason, description, wake_lock) {
    return this.$.getWakeLock(type, reason, description, wake_lock);
  }
};

device.mojom.WakeLockContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WakeLockContext', [
      { explicit: null },
    ]);
  }

  getWakeLock(type, reason, description, wake_lock) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('WakeLockContext', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.WakeLockContext_GetWakeLock_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.WakeLockContext_GetWakeLock_ParamsSpec.$.structSpec);
          const result = this.impl.getWakeLock(params.type, params.reason, params.description, params.wake_lock);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.WakeLockContextReceiver = device.mojom.WakeLockContextReceiver;

device.mojom.WakeLockContextPtr = device.mojom.WakeLockContextRemote;
device.mojom.WakeLockContextRequest = device.mojom.WakeLockContextPendingReceiver;

