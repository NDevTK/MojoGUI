// Auto-generated MojoJS binding
// Source: chromium_src/components/site_engagement/core/mojom/site_engagement_details.mojom
// Module: site_engagement.mojom

'use strict';

// Module namespace
var site_engagement = site_engagement || {};
site_engagement.mojom = site_engagement.mojom || {};


// Struct: SiteEngagementDetails
site_engagement.mojom.SiteEngagementDetailsSpec = {
  $: {
    structSpec: {
      name: 'site_engagement.mojom.SiteEngagementDetails',
      packedSize: 40,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'total_score', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'base_score', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'installed_bonus', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: SiteEngagementDetailsProvider
site_engagement.mojom.SiteEngagementDetailsProvider = {};

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
      []);
  }

  setSiteEngagementBaseScoreForUrl(url, score) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      site_engagement.mojom.SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_ParamsSpec,
      null,
      [url, score]);
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

// ParamsSpec for GetSiteEngagementDetails
site_engagement.mojom.SiteEngagementDetailsProvider_GetSiteEngagementDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'site_engagement.mojom.SiteEngagementDetailsProvider.GetSiteEngagementDetails_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

site_engagement.mojom.SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(site_engagement.mojom.SiteEngagementDetailsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSiteEngagementBaseScoreForUrl
site_engagement.mojom.SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'site_engagement.mojom.SiteEngagementDetailsProvider.SetSiteEngagementBaseScoreForUrl_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'score', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
site_engagement.mojom.SiteEngagementDetailsProviderPtr = site_engagement.mojom.SiteEngagementDetailsProviderRemote;
site_engagement.mojom.SiteEngagementDetailsProviderRequest = site_engagement.mojom.SiteEngagementDetailsProviderPendingReceiver;

