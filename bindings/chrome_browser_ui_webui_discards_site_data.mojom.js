// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/discards/site_data.mojom
// Module: discards.mojom

'use strict';

// Module namespace
var discards = discards || {};
discards.mojom = discards.mojom || {};


// Struct: SiteDataFeature
discards.mojom.SiteDataFeatureSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.SiteDataFeature',
      packedSize: 16,
      fields: [
        { name: 'use_timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SiteDataPerformanceMeasurement
discards.mojom.SiteDataPerformanceMeasurementSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.SiteDataPerformanceMeasurement',
      packedSize: 16,
      fields: [
        { name: 'avg_load_duration_us', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SiteDataDatabaseSize
discards.mojom.SiteDataDatabaseSizeSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.SiteDataDatabaseSize',
      packedSize: 16,
      fields: [
        { name: 'on_disk_size_kb', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SiteDataValue
discards.mojom.SiteDataValueSpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.SiteDataValue',
      packedSize: 16,
      fields: [
        { name: 'load_time_estimates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SiteDataEntry
discards.mojom.SiteDataEntrySpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.SiteDataEntry',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SiteDataArray
discards.mojom.SiteDataArraySpec = {
  $: {
    structSpec: {
      name: 'discards.mojom.SiteDataArray',
      packedSize: 16,
      fields: [
        { name: 'db_rows', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

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
        { name: 'explicitly_requested_origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
        { name: 'db_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
discards.mojom.SiteDataProviderPtr = discards.mojom.SiteDataProviderRemote;
discards.mojom.SiteDataProviderRequest = discards.mojom.SiteDataProviderPendingReceiver;

