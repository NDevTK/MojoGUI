// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/model_download_progress_observer.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ModelDownloadProgressObserver = {};
blink.mojom.ModelDownloadProgressObserver.$interfaceName = 'blink.mojom.ModelDownloadProgressObserver';
blink.mojom.ModelDownloadProgressObserver_OnDownloadProgressUpdate_ParamsSpec = { $: {} };

// Interface: ModelDownloadProgressObserver
mojo.internal.Struct(
    blink.mojom.ModelDownloadProgressObserver_OnDownloadProgressUpdate_ParamsSpec, 'blink.mojom.ModelDownloadProgressObserver_OnDownloadProgressUpdate_Params', [
      mojo.internal.StructField('downloaded_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('total_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.ModelDownloadProgressObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ModelDownloadProgressObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ModelDownloadProgressObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ModelDownloadProgressObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.ModelDownloadProgressObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDownloadProgressUpdate(downloaded_bytes, total_bytes) {
    return this.$.onDownloadProgressUpdate(downloaded_bytes, total_bytes);
  }
};

blink.mojom.ModelDownloadProgressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ModelDownloadProgressObserver', [
      { explicit: null },
    ]);
  }

  onDownloadProgressUpdate(downloaded_bytes, total_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ModelDownloadProgressObserver_OnDownloadProgressUpdate_ParamsSpec,
      null,
      [downloaded_bytes, total_bytes],
      false);
  }

};

blink.mojom.ModelDownloadProgressObserver.getRemote = function() {
  let remote = new blink.mojom.ModelDownloadProgressObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ModelDownloadProgressObserver',
    'context');
  return remote.$;
};

blink.mojom.ModelDownloadProgressObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ModelDownloadProgressObserver', [
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
             decoder.decodeStructInline(blink.mojom.ModelDownloadProgressObserver_OnDownloadProgressUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ModelDownloadProgressObserver_OnDownloadProgressUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onDownloadProgressUpdate(params.downloaded_bytes, params.total_bytes);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ModelDownloadProgressObserverReceiver = blink.mojom.ModelDownloadProgressObserverReceiver;

blink.mojom.ModelDownloadProgressObserverPtr = blink.mojom.ModelDownloadProgressObserverRemote;
blink.mojom.ModelDownloadProgressObserverRequest = blink.mojom.ModelDownloadProgressObserverPendingReceiver;

