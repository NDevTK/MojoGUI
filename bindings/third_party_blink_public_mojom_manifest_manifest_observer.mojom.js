// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.ManifestUrlChangeObserver = {};
blink.mojom.ManifestUrlChangeObserver.$interfaceName = 'blink.mojom.ManifestUrlChangeObserver';
blink.mojom.ManifestUrlChangeObserver_ManifestUrlChanged_ParamsSpec = { $: {} };

// Interface: ManifestUrlChangeObserver
mojo.internal.Struct(
    blink.mojom.ManifestUrlChangeObserver_ManifestUrlChanged_ParamsSpec, 'blink.mojom.ManifestUrlChangeObserver_ManifestUrlChanged_Params', [
      mojo.internal.StructField('manifest_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ManifestUrlChangeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ManifestUrlChangeObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ManifestUrlChangeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ManifestUrlChangeObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.ManifestUrlChangeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ManifestUrlChangeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  manifestUrlChanged(manifest_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ManifestUrlChangeObserver_ManifestUrlChanged_ParamsSpec,
      null,
      [manifest_url],
      false);
  }

};

blink.mojom.ManifestUrlChangeObserver.getRemote = function() {
  let remote = new blink.mojom.ManifestUrlChangeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ManifestUrlChangeObserver',
    'context');
  return remote.$;
};

blink.mojom.ManifestUrlChangeObserverReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ManifestUrlChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ManifestUrlChangeObserver_ManifestUrlChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ManifestUrlChanged (0)');
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
          const params = decoder.decodeStructInline(blink.mojom.ManifestUrlChangeObserver_ManifestUrlChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.manifestUrlChanged');
          const result = this.impl.manifestUrlChanged(params.manifest_url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ManifestUrlChangeObserverReceiver = blink.mojom.ManifestUrlChangeObserverReceiver;

blink.mojom.ManifestUrlChangeObserverPtr = blink.mojom.ManifestUrlChangeObserverRemote;
blink.mojom.ManifestUrlChangeObserverRequest = blink.mojom.ManifestUrlChangeObserverPendingReceiver;

