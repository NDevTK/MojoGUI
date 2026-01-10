// Auto-generated MojoJS binding
// Source: chromium_src/components/site_engagement/core/mojom/site_engagement_details.mojom
// Module: site_engagement.mojom

'use strict';

// Module namespace
var site_engagement = site_engagement || {};
site_engagement.mojom = site_engagement.mojom || {};
var url = url || {};

site_engagement.mojom.SiteEngagementDetailsSpec = { $: {} };
site_engagement.mojom.SiteEngagementDetailsProvider = {};
site_engagement.mojom.SiteEngagementDetailsProvider.$interfaceName = 'site_engagement.mojom.SiteEngagementDetailsProvider';
site_engagement.mojom.SiteEngagementDetailsProvider_GetSiteEngagementDetails_ParamsSpec = { $: {} };
site_engagement.mojom.SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParamsSpec = { $: {} };
site_engagement.mojom.SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_ParamsSpec = { $: {} };

// Struct: SiteEngagementDetails
mojo.internal.Struct(
    site_engagement.mojom.SiteEngagementDetailsSpec, 'site_engagement.mojom.SiteEngagementDetails', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('total_score', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('base_score', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('installed_bonus', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: SiteEngagementDetailsProvider
mojo.internal.Struct(
    site_engagement.mojom.SiteEngagementDetailsProvider_GetSiteEngagementDetails_ParamsSpec, 'site_engagement.mojom.SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    site_engagement.mojom.SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParamsSpec, 'site_engagement.mojom.SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, mojo.internal.Array(site_engagement.mojom.SiteEngagementDetailsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    site_engagement.mojom.SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_ParamsSpec, 'site_engagement.mojom.SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('score', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

site_engagement.mojom.SiteEngagementDetailsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

site_engagement.mojom.SiteEngagementDetailsProviderRemote = class {
  static get $interfaceName() {
    return 'site_engagement.mojom.SiteEngagementDetailsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      site_engagement.mojom.SiteEngagementDetailsProviderPendingReceiver,
      handle);
    this.$ = new site_engagement.mojom.SiteEngagementDetailsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

site_engagement.mojom.SiteEngagementDetailsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSiteEngagementDetails() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      site_engagement.mojom.SiteEngagementDetailsProvider_GetSiteEngagementDetails_ParamsSpec,
      site_engagement.mojom.SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParamsSpec,
      [],
      false);
  }

  setSiteEngagementBaseScoreForUrl(url, score) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      site_engagement.mojom.SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_ParamsSpec,
      null,
      [url, score],
      false);
  }

};

site_engagement.mojom.SiteEngagementDetailsProvider.getRemote = function() {
  let remote = new site_engagement.mojom.SiteEngagementDetailsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'site_engagement.mojom.SiteEngagementDetailsProvider',
    'context');
  return remote.$;
};

site_engagement.mojom.SiteEngagementDetailsProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: GetSiteEngagementDetails
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(site_engagement.mojom.SiteEngagementDetailsProvider_GetSiteEngagementDetails_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSiteEngagementDetails (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetSiteEngagementBaseScoreForUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(site_engagement.mojom.SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSiteEngagementBaseScoreForUrl (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(site_engagement.mojom.SiteEngagementDetailsProvider_GetSiteEngagementDetails_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSiteEngagementDetails');
          const result = this.impl.getSiteEngagementDetails();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, site_engagement.mojom.SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(site_engagement.mojom.SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSiteEngagementBaseScoreForUrl');
          const result = this.impl.setSiteEngagementBaseScoreForUrl(params.url, params.score);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

site_engagement.mojom.SiteEngagementDetailsProviderReceiver = site_engagement.mojom.SiteEngagementDetailsProviderReceiver;

site_engagement.mojom.SiteEngagementDetailsProviderPtr = site_engagement.mojom.SiteEngagementDetailsProviderRemote;
site_engagement.mojom.SiteEngagementDetailsProviderRequest = site_engagement.mojom.SiteEngagementDetailsProviderPendingReceiver;

