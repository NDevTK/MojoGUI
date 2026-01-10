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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ParamsSpec.$.decode(message.payload);
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
      }
    }});
  }
};

safe_browsing.mojom.SafeBrowsingUrlCheckerReceiver = safe_browsing.mojom.SafeBrowsingUrlCheckerReceiver;

safe_browsing.mojom.SafeBrowsingUrlCheckerPtr = safe_browsing.mojom.SafeBrowsingUrlCheckerRemote;
safe_browsing.mojom.SafeBrowsingUrlCheckerRequest = safe_browsing.mojom.SafeBrowsingUrlCheckerPendingReceiver;

