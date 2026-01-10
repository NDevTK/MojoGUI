// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/activity_window.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.ActivityWindow = {};
chromecast.mojom.ActivityWindow.$interfaceName = 'chromecast.mojom.ActivityWindow';
chromecast.mojom.ActivityWindow_Show_ParamsSpec = { $: {} };
chromecast.mojom.ActivityWindow_Hide_ParamsSpec = { $: {} };

// Interface: ActivityWindow
mojo.internal.Struct(
    chromecast.mojom.ActivityWindow_Show_ParamsSpec, 'chromecast.mojom.ActivityWindow_Show_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.ActivityWindow_Hide_ParamsSpec, 'chromecast.mojom.ActivityWindow_Hide_Params', [
    ],
    [[0, 8]]);

chromecast.mojom.ActivityWindowPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.ActivityWindowRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.ActivityWindow';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.ActivityWindowPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.ActivityWindowRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.ActivityWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  show() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.ActivityWindow_Show_ParamsSpec,
      null,
      [],
      false);
  }

  hide() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.ActivityWindow_Hide_ParamsSpec,
      null,
      [],
      false);
  }

};

chromecast.mojom.ActivityWindow.getRemote = function() {
  let remote = new chromecast.mojom.ActivityWindowRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.ActivityWindow',
    'context');
  return remote.$;
};

chromecast.mojom.ActivityWindowReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: Show
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.ActivityWindow_Show_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Show (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Hide
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.ActivityWindow_Hide_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Hide (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(chromecast.mojom.ActivityWindow_Show_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.show');
          const result = this.impl.show();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.ActivityWindow_Hide_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hide');
          const result = this.impl.hide();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.ActivityWindowReceiver = chromecast.mojom.ActivityWindowReceiver;

chromecast.mojom.ActivityWindowPtr = chromecast.mojom.ActivityWindowRemote;
chromecast.mojom.ActivityWindowRequest = chromecast.mojom.ActivityWindowPendingReceiver;

