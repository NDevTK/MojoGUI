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
      packedSize: 24,
      fields: [
        { name: 'observation_duration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'use_timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'avg_cpu_usage_us', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'avg_footprint_kb', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'avg_load_duration_us', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'num_rows', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'on_disk_size_kb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
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
      packedSize: 48,
      fields: [
        { name: 'last_loaded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'updates_favicon_in_background', packedOffset: 8, packedBitOffset: 0, type: discards.mojom.SiteDataFeatureSpec, nullable: false },
        { name: 'updates_title_in_background', packedOffset: 16, packedBitOffset: 0, type: discards.mojom.SiteDataFeatureSpec, nullable: false },
        { name: 'uses_audio_in_background', packedOffset: 24, packedBitOffset: 0, type: discards.mojom.SiteDataFeatureSpec, nullable: false },
        { name: 'load_time_estimates', packedOffset: 32, packedBitOffset: 0, type: discards.mojom.SiteDataPerformanceMeasurementSpec, nullable: true },
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
      packedSize: 32,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_dirty', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: discards.mojom.SiteDataValueSpec, nullable: true },
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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.SiteDataArraySpec, nullable: true },
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
        { name: 'db_size', packedOffset: 0, packedBitOffset: 0, type: discards.mojom.SiteDataDatabaseSizeSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
discards.mojom.SiteDataProviderPtr = discards.mojom.SiteDataProviderRemote;
discards.mojom.SiteDataProviderRequest = discards.mojom.SiteDataProviderPendingReceiver;

