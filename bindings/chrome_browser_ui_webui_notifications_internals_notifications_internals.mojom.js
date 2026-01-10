// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/notifications_internals/notifications_internals.mojom
// Module: notifications_internals.mojom

'use strict';

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
};

notifications_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  scheduleNotification(feature) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ScheduleNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(notifications_internals.mojom.PageHandler_ScheduleNotification_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScheduleNotification (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(notifications_internals.mojom.PageHandler_ScheduleNotification_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.scheduleNotification');
          const result = this.impl.scheduleNotification(params.feature);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

notifications_internals.mojom.PageHandlerReceiver = notifications_internals.mojom.PageHandlerReceiver;

notifications_internals.mojom.PageHandlerPtr = notifications_internals.mojom.PageHandlerRemote;
notifications_internals.mojom.PageHandlerRequest = notifications_internals.mojom.PageHandlerPendingReceiver;

