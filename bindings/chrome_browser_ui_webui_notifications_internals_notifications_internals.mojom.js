// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/notifications_internals/notifications_internals.mojom
// Module: notifications_internals.mojom

// Module namespace
var notifications_internals = notifications_internals || {};
notifications_internals.mojom = notifications_internals.mojom || {};

notifications_internals.mojom.PageHandler = {};
notifications_internals.mojom.PageHandler.$interfaceName = 'notifications_internals.mojom.PageHandler';
notifications_internals.mojom.PageHandler_ScheduleNotification_ParamsSpec = { $: {} };

// Interface: PageHandler
mojo.internal.Struct(
    notifications_internals.mojom.PageHandler_ScheduleNotification_ParamsSpec, 'notifications_internals.mojom.PageHandler_ScheduleNotification_Params', [
      mojo.internal.StructField('feature', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

notifications_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

notifications_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'notifications_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      notifications_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new notifications_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  scheduleNotification(feature) {
    return this.$.scheduleNotification(feature);
  }
};

notifications_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
    ]);
  }

  scheduleNotification(feature) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      notifications_internals.mojom.PageHandler_ScheduleNotification_ParamsSpec,
      null,
      [feature],
      false);
  }

};

notifications_internals.mojom.PageHandler.getRemote = function() {
  let remote = new notifications_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'notifications_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

notifications_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
             decoder.decodeStructInline(notifications_internals.mojom.PageHandler_ScheduleNotification_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(notifications_internals.mojom.PageHandler_ScheduleNotification_ParamsSpec.$.structSpec);
          const result = this.impl.scheduleNotification(params.feature);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

notifications_internals.mojom.PageHandlerReceiver = notifications_internals.mojom.PageHandlerReceiver;

notifications_internals.mojom.PageHandlerPtr = notifications_internals.mojom.PageHandlerRemote;
notifications_internals.mojom.PageHandlerRequest = notifications_internals.mojom.PageHandlerPendingReceiver;

