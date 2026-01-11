// Auto-generated MojoJS binding
// Source: chromium_src/components/safe_browsing/core/common/safe_browsing_url_checker.mojom
// Module: safe_browsing.mojom

// Module namespace
var safe_browsing = safe_browsing || {};
safe_browsing.mojom = safe_browsing.mojom || {};
var url = url || {};

safe_browsing.mojom.SafeBrowsingUrlChecker = {};
safe_browsing.mojom.SafeBrowsingUrlChecker.$interfaceName = 'safe_browsing.mojom.SafeBrowsingUrlChecker';
safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ParamsSpec = { $: {} };
safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ResponseParamsSpec = { $: {} };

// Interface: SafeBrowsingUrlChecker
mojo.internal.Struct(
    safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ParamsSpec, 'safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('method', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ResponseParamsSpec, 'safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ResponseParams', [
      mojo.internal.StructField('proceed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('showed_interstitial', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

safe_browsing.mojom.SafeBrowsingUrlCheckerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

safe_browsing.mojom.SafeBrowsingUrlCheckerRemote = class {
  static get $interfaceName() {
    return 'safe_browsing.mojom.SafeBrowsingUrlChecker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      safe_browsing.mojom.SafeBrowsingUrlCheckerPendingReceiver,
      handle);
    this.$ = new safe_browsing.mojom.SafeBrowsingUrlCheckerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  checkUrl(url, method) {
    return this.$.checkUrl(url, method);
  }
};

safe_browsing.mojom.SafeBrowsingUrlCheckerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SafeBrowsingUrlChecker', [
      { explicit: null },
    ]);
  }

  checkUrl(url, method) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ParamsSpec,
      safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ResponseParamsSpec,
      [url, method],
      false);
  }

};

safe_browsing.mojom.SafeBrowsingUrlChecker.getRemote = function() {
  let remote = new safe_browsing.mojom.SafeBrowsingUrlCheckerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'safe_browsing.mojom.SafeBrowsingUrlChecker',
    'context');
  return remote.$;
};

safe_browsing.mojom.SafeBrowsingUrlCheckerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SafeBrowsingUrlChecker', [
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
             decoder.decodeStructInline(safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ParamsSpec.$.structSpec);
          const result = this.impl.checkUrl(params.url, params.method);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ResponseParamsSpec);
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

safe_browsing.mojom.SafeBrowsingUrlCheckerReceiver = safe_browsing.mojom.SafeBrowsingUrlCheckerReceiver;

safe_browsing.mojom.SafeBrowsingUrlCheckerPtr = safe_browsing.mojom.SafeBrowsingUrlCheckerRemote;
safe_browsing.mojom.SafeBrowsingUrlCheckerRequest = safe_browsing.mojom.SafeBrowsingUrlCheckerPendingReceiver;

