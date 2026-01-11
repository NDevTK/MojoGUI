// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/emoji/new_window_proxy.mojom
// Module: new_window_proxy.mojom

// Module namespace
var new_window_proxy = new_window_proxy || {};
new_window_proxy.mojom = new_window_proxy.mojom || {};
var url = url || {};

new_window_proxy.mojom.NewWindowProxy = {};
new_window_proxy.mojom.NewWindowProxy.$interfaceName = 'new_window_proxy.mojom.NewWindowProxy';
new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec = { $: {} };

// Interface: NewWindowProxy
mojo.internal.Struct(
    new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec, 'new_window_proxy.mojom.NewWindowProxy_OpenUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

new_window_proxy.mojom.NewWindowProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_window_proxy.mojom.NewWindowProxyRemote = class {
  static get $interfaceName() {
    return 'new_window_proxy.mojom.NewWindowProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_window_proxy.mojom.NewWindowProxyPendingReceiver,
      handle);
    this.$ = new new_window_proxy.mojom.NewWindowProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  openUrl(url) {
    return this.$.openUrl(url);
  }
};

new_window_proxy.mojom.NewWindowProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NewWindowProxy', [
      { explicit: null },
    ]);
  }

  openUrl(url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec,
      null,
      [url],
      false);
  }

};

new_window_proxy.mojom.NewWindowProxy.getRemote = function() {
  let remote = new new_window_proxy.mojom.NewWindowProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_window_proxy.mojom.NewWindowProxy',
    'context');
  return remote.$;
};

new_window_proxy.mojom.NewWindowProxyReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NewWindowProxy', [
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
             decoder.decodeStructInline(new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec.$.structSpec);
          const result = this.impl.openUrl(params.url);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

new_window_proxy.mojom.NewWindowProxyReceiver = new_window_proxy.mojom.NewWindowProxyReceiver;

new_window_proxy.mojom.NewWindowProxyPtr = new_window_proxy.mojom.NewWindowProxyRemote;
new_window_proxy.mojom.NewWindowProxyRequest = new_window_proxy.mojom.NewWindowProxyPendingReceiver;

