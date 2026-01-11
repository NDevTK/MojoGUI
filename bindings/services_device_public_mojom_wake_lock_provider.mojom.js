// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock_provider.mojom
// Module: device.mojom

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.WakeLockProvider = {};
device.mojom.WakeLockProvider.$interfaceName = 'device.mojom.WakeLockProvider';
device.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec = { $: {} };
device.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec = { $: {} };
device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec = { $: {} };
device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec = { $: {} };
device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParamsSpec = { $: {} };
device.mojom.WakeLockObserver = {};
device.mojom.WakeLockObserver.$interfaceName = 'device.mojom.WakeLockObserver';
device.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec = { $: {} };

// Interface: WakeLockProvider
mojo.internal.Struct(
    device.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec, 'device.mojom.WakeLockProvider_GetWakeLockContextForID_Params', [
      mojo.internal.StructField('context', 0, 0, mojo.internal.InterfaceRequest(device.mojom.WakeLockContextRemote), null, false, 0, undefined),
      mojo.internal.StructField('context_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec, 'device.mojom.WakeLockProvider_GetWakeLockWithoutContext_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.WakeLockTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, device.mojom.WakeLockReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('wake_lock', 24, 0, mojo.internal.InterfaceRequest(device.mojom.WakeLockRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec, 'device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.WakeLockTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(device.mojom.WakeLockObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec, 'device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.WakeLockTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParamsSpec, 'device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams', [
      mojo.internal.StructField('count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getWakeLockContextForID(context_id, context) {
    return this.$.getWakeLockContextForID(context_id, context);
  }
  getWakeLockWithoutContext(type, reason, description, wake_lock) {
    return this.$.getWakeLockWithoutContext(type, reason, description, wake_lock);
  }
  notifyOnWakeLockDeactivation(type, observer) {
    return this.$.notifyOnWakeLockDeactivation(type, observer);
  }
  getActiveWakeLocksForTests(type) {
    return this.$.getActiveWakeLocksForTests(type);
  }
};

device.mojom.WakeLockProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WakeLockProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getWakeLockContextForID(context_id, context) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec,
      null,
      [context_id, context],
      false);
  }

  getWakeLockWithoutContext(type, reason, description, wake_lock) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec,
      null,
      [type, reason, description, wake_lock],
      false);
  }

  notifyOnWakeLockDeactivation(type, observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec,
      null,
      [type, observer],
      false);
  }

  getActiveWakeLocksForTests(type) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec,
      device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParamsSpec,
      [type],
      false);
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

device.mojom.WakeLockProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WakeLockProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(device.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec.$.structSpec);
          const result = this.impl.getWakeLockContextForID(params.context_id, params.context);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec.$.structSpec);
          const result = this.impl.getWakeLockWithoutContext(params.type, params.reason, params.description, params.wake_lock);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec.$.structSpec);
          const result = this.impl.notifyOnWakeLockDeactivation(params.type, params.observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec.$.structSpec);
          const result = this.impl.getActiveWakeLocksForTests(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.WakeLockProviderReceiver = device.mojom.WakeLockProviderReceiver;

device.mojom.WakeLockProviderPtr = device.mojom.WakeLockProviderRemote;
device.mojom.WakeLockProviderRequest = device.mojom.WakeLockProviderPendingReceiver;


// Interface: WakeLockObserver
mojo.internal.Struct(
    device.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec, 'device.mojom.WakeLockObserver_OnWakeLockDeactivated_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.WakeLockTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  onWakeLockDeactivated(type) {
    return this.$.onWakeLockDeactivated(type);
  }
};

device.mojom.WakeLockObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WakeLockObserver', [
      { explicit: null },
    ]);
  }

  onWakeLockDeactivated(type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec,
      null,
      [type],
      false);
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

device.mojom.WakeLockObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WakeLockObserver', [
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
             decoder.decodeStructInline(device.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec.$.structSpec);
          const result = this.impl.onWakeLockDeactivated(params.type);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.WakeLockObserverReceiver = device.mojom.WakeLockObserverReceiver;

device.mojom.WakeLockObserverPtr = device.mojom.WakeLockObserverRemote;
device.mojom.WakeLockObserverRequest = device.mojom.WakeLockObserverPendingReceiver;

