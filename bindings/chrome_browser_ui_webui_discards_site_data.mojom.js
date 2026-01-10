// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/discards/site_data.mojom
// Module: discards.mojom

'use strict';

// Module namespace
var discards = discards || {};
discards.mojom = discards.mojom || {};

discards.mojom.SiteDataFeatureSpec = { $: {} };
discards.mojom.SiteDataPerformanceMeasurementSpec = { $: {} };
discards.mojom.SiteDataDatabaseSizeSpec = { $: {} };
discards.mojom.SiteDataValueSpec = { $: {} };
discards.mojom.SiteDataEntrySpec = { $: {} };
discards.mojom.SiteDataArraySpec = { $: {} };
discards.mojom.SiteDataProvider = {};
discards.mojom.SiteDataProvider.$interfaceName = 'discards.mojom.SiteDataProvider';
discards.mojom.SiteDataProvider_GetSiteDataArray_ParamsSpec = { $: {} };
discards.mojom.SiteDataProvider_GetSiteDataArray_ResponseParamsSpec = { $: {} };
discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ParamsSpec = { $: {} };
discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ResponseParamsSpec = { $: {} };

// Struct: SiteDataFeature
mojo.internal.Struct(
    discards.mojom.SiteDataFeatureSpec, 'discards.mojom.SiteDataFeature', [
      mojo.internal.StructField('observation_duration', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('use_timestamp', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SiteDataPerformanceMeasurement
mojo.internal.Struct(
    discards.mojom.SiteDataPerformanceMeasurementSpec, 'discards.mojom.SiteDataPerformanceMeasurement', [
      mojo.internal.StructField('avg_cpu_usage_us', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('avg_footprint_kb', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('avg_load_duration_us', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SiteDataDatabaseSize
mojo.internal.Struct(
    discards.mojom.SiteDataDatabaseSizeSpec, 'discards.mojom.SiteDataDatabaseSize', [
      mojo.internal.StructField('num_rows', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('on_disk_size_kb', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SiteDataValue
mojo.internal.Struct(
    discards.mojom.SiteDataValueSpec, 'discards.mojom.SiteDataValue', [
      mojo.internal.StructField('last_loaded', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('updates_favicon_in_background', 0, 0, discards.mojom.SiteDataFeatureSpec, null, false, 0, undefined),
      mojo.internal.StructField('updates_title_in_background', 8, 0, discards.mojom.SiteDataFeatureSpec, null, false, 0, undefined),
      mojo.internal.StructField('uses_audio_in_background', 16, 0, discards.mojom.SiteDataFeatureSpec, null, false, 0, undefined),
      mojo.internal.StructField('load_time_estimates', 24, 0, discards.mojom.SiteDataPerformanceMeasurementSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SiteDataEntry
mojo.internal.Struct(
    discards.mojom.SiteDataEntrySpec, 'discards.mojom.SiteDataEntry', [
      mojo.internal.StructField('origin', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_dirty', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, discards.mojom.SiteDataValueSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SiteDataArray
mojo.internal.Struct(
    discards.mojom.SiteDataArraySpec, 'discards.mojom.SiteDataArray', [
      mojo.internal.StructField('db_rows', 0, 0, mojo.internal.Array(discards.mojom.SiteDataEntrySpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: SiteDataProvider
mojo.internal.Struct(
    discards.mojom.SiteDataProvider_GetSiteDataArray_ParamsSpec, 'discards.mojom.SiteDataProvider_GetSiteDataArray_Params', [
      mojo.internal.StructField('explicitly_requested_origins', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.SiteDataProvider_GetSiteDataArray_ResponseParamsSpec, 'discards.mojom.SiteDataProvider_GetSiteDataArray_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, discards.mojom.SiteDataArraySpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ParamsSpec, 'discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ResponseParamsSpec, 'discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ResponseParams', [
      mojo.internal.StructField('db_size', 0, 0, discards.mojom.SiteDataDatabaseSizeSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

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

discards.mojom.SiteDataProviderPtr = discards.mojom.SiteDataProviderRemote;
discards.mojom.SiteDataProviderRequest = discards.mojom.SiteDataProviderPendingReceiver;

