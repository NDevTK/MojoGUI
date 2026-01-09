// Auto-generated MojoJS binding
// Source: chromium_src/components/safe_browsing/core/common/safe_browsing_url_checker.mojom
// Module: safe_browsing.mojom

'use strict';

// Module namespace
var safe_browsing = safe_browsing || {};
safe_browsing.mojom = safe_browsing.mojom || {};


// Interface: SafeBrowsingUrlChecker
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
      safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ParamsSpec.$,
      safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ResponseParamsSpec.$,
      [url, method]);
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

// ParamsSpec for CheckUrl
safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.SafeBrowsingUrlChecker.CheckUrl_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

safe_browsing.mojom.SafeBrowsingUrlChecker_CheckUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'safe_browsing.mojom.SafeBrowsingUrlChecker.CheckUrl_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'proceed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'showed_interstitial', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
safe_browsing.mojom.SafeBrowsingUrlCheckerPtr = safe_browsing.mojom.SafeBrowsingUrlCheckerRemote;
safe_browsing.mojom.SafeBrowsingUrlCheckerRequest = safe_browsing.mojom.SafeBrowsingUrlCheckerPendingReceiver;

