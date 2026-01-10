// Auto-generated MojoJS binding
// Source: chromium_src/components/safe_browsing/core/common/safe_browsing_url_checker.mojom
// Module: safe_browsing.mojom

'use strict';

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
};

safe_browsing.mojom.SafeBrowsingUrlCheckerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  checkUrl(url, method) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
        
        // Try Method 0: CheckUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckUrl (0)');
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
          const params = decoder.decodeStruct(safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.checkUrl');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

safe_browsing.mojom.SafeBrowsingUrlCheckerReceiver = safe_browsing.mojom.SafeBrowsingUrlCheckerReceiver;

safe_browsing.mojom.SafeBrowsingUrlCheckerPtr = safe_browsing.mojom.SafeBrowsingUrlCheckerRemote;
safe_browsing.mojom.SafeBrowsingUrlCheckerRequest = safe_browsing.mojom.SafeBrowsingUrlCheckerPendingReceiver;

