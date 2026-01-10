// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/app_window.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};

extensions.mojom.AppWindow = {};
extensions.mojom.AppWindow.$interfaceName = 'extensions.mojom.AppWindow';
extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec = { $: {} };

// Interface: AppWindow
mojo.internal.Struct(
    extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec, 'extensions.mojom.AppWindow_SetVisuallyDeemphasized_Params', [
      mojo.internal.StructField('deemphasized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

extensions.mojom.AppWindowPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.AppWindowRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.AppWindow';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.AppWindowPendingReceiver,
      handle);
    this.$ = new extensions.mojom.AppWindowRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.AppWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setVisuallyDeemphasized(deemphasized) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec,
      null,
      [deemphasized],
      false);
  }

};

extensions.mojom.AppWindow.getRemote = function() {
  let remote = new extensions.mojom.AppWindowRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.AppWindow',
    'context');
  return remote.$;
};

extensions.mojom.AppWindowReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: SetVisuallyDeemphasized
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVisuallyDeemphasized (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setVisuallyDeemphasized');
          const result = this.impl.setVisuallyDeemphasized(params.deemphasized);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

extensions.mojom.AppWindowReceiver = extensions.mojom.AppWindowReceiver;

extensions.mojom.AppWindowPtr = extensions.mojom.AppWindowRemote;
extensions.mojom.AppWindowRequest = extensions.mojom.AppWindowPendingReceiver;

