// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest_observer.mojom
// Module: blink.mojom

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
  manifestUrlChanged(manifest_url) {
    return this.$.manifestUrlChanged(manifest_url);
  }
};

blink.mojom.ManifestUrlChangeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ManifestUrlChangeObserver', [
      { explicit: null },
    ]);
  }

  manifestUrlChanged(manifest_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ManifestUrlChangeObserver', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.ManifestUrlChangeObserver_ManifestUrlChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ManifestUrlChangeObserver_ManifestUrlChanged_ParamsSpec.$.structSpec);
          const result = this.impl.manifestUrlChanged(params.manifest_url);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ManifestUrlChangeObserverReceiver = blink.mojom.ManifestUrlChangeObserverReceiver;

blink.mojom.ManifestUrlChangeObserverPtr = blink.mojom.ManifestUrlChangeObserverRemote;
blink.mojom.ManifestUrlChangeObserverRequest = blink.mojom.ManifestUrlChangeObserverPendingReceiver;

