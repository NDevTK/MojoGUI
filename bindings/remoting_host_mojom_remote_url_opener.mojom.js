// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_url_opener.mojom
// Module: remoting.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};
var url = url || {};

remoting.mojom.OpenUrlResultSpec = { $: mojo.internal.Enum() };
remoting.mojom.RemoteUrlOpener = {};
remoting.mojom.RemoteUrlOpener.$interfaceName = 'remoting.mojom.RemoteUrlOpener';
remoting.mojom.RemoteUrlOpener_OpenUrl_ParamsSpec = { $: {} };
remoting.mojom.RemoteUrlOpener_OpenUrl_ResponseParamsSpec = { $: {} };

// Enum: OpenUrlResult
remoting.mojom.OpenUrlResult = {
  UNSPECIFIED_OPEN_URL_RESULT: 0,
  SUCCESS: 1,
  FAILURE: 2,
  LOCAL_FALLBACK: 3,
};

// Interface: RemoteUrlOpener
mojo.internal.Struct(
    remoting.mojom.RemoteUrlOpener_OpenUrl_ParamsSpec, 'remoting.mojom.RemoteUrlOpener_OpenUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.RemoteUrlOpener_OpenUrl_ResponseParamsSpec, 'remoting.mojom.RemoteUrlOpener_OpenUrl_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, remoting.mojom.OpenUrlResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.RemoteUrlOpenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.RemoteUrlOpenerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.RemoteUrlOpener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.RemoteUrlOpenerPendingReceiver,
      handle);
    this.$ = new remoting.mojom.RemoteUrlOpenerRemoteCallHandler(this.proxy);
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

remoting.mojom.RemoteUrlOpenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteUrlOpener', [
      { explicit: null },
    ]);
  }

  openUrl(url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.RemoteUrlOpener_OpenUrl_ParamsSpec,
      remoting.mojom.RemoteUrlOpener_OpenUrl_ResponseParamsSpec,
      [url],
      false);
  }

};

remoting.mojom.RemoteUrlOpener.getRemote = function() {
  let remote = new remoting.mojom.RemoteUrlOpenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.RemoteUrlOpener',
    'context');
  return remote.$;
};

remoting.mojom.RemoteUrlOpenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteUrlOpener', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.RemoteUrlOpener_OpenUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.RemoteUrlOpener_OpenUrl_ParamsSpec.$.structSpec);
          const result = this.impl.openUrl(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.RemoteUrlOpener_OpenUrl_ResponseParamsSpec);
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

remoting.mojom.RemoteUrlOpenerReceiver = remoting.mojom.RemoteUrlOpenerReceiver;

remoting.mojom.RemoteUrlOpenerPtr = remoting.mojom.RemoteUrlOpenerRemote;
remoting.mojom.RemoteUrlOpenerRequest = remoting.mojom.RemoteUrlOpenerPendingReceiver;

