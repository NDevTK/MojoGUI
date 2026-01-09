// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/discards/site_data.mojom
// Module: discards.mojom

'use strict';

// Module namespace
var discards = discards || {};
discards.mojom = discards.mojom || {};


// Interface: SiteDataProvider
discards.mojom.SiteDataProvider = {};

discards.mojom.SiteDataProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discards.mojom.SiteDataProviderRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.SiteDataProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discards.mojom.SiteDataProviderPendingReceiver,
      handle);
    this.$ = new discards.mojom.SiteDataProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

discards.mojom.SiteDataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSiteDataArray(explicitly_requested_origins) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      discards.mojom.SiteDataProvider_GetSiteDataArray_ParamsSpec,
      discards.mojom.SiteDataProvider_GetSiteDataArray_ResponseParamsSpec,
      [explicitly_requested_origins]);
  }

  getSiteDataDatabaseSize() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ParamsSpec,
      discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ResponseParamsSpec,
      []);
  }

};

discards.mojom.SiteDataProvider.getRemote = function() {
  let remote = new discards.mojom.SiteDataProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.SiteDataProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetSiteDataArray
discards.mojom.SiteDataProvider_GetSiteDataArray_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.SiteDataProvider.GetSiteDataArray_Params',
      packedSize: 16,
      fields: [
        { name: 'explicitly_requested_origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

discards.mojom.SiteDataProvider_GetSiteDataArray_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.SiteDataProvider.GetSiteDataArray_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSiteDataDatabaseSize
discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.SiteDataProvider.GetSiteDataDatabaseSize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.SiteDataProvider.GetSiteDataDatabaseSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'db_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
discards.mojom.SiteDataProviderPtr = discards.mojom.SiteDataProviderRemote;
discards.mojom.SiteDataProviderRequest = discards.mojom.SiteDataProviderPendingReceiver;

