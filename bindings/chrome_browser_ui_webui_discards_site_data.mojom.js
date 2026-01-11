// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/discards/site_data.mojom
// Module: discards.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('updates_favicon_in_background', 0, 0, discards.mojom.SiteDataFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('updates_title_in_background', 8, 0, discards.mojom.SiteDataFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('uses_audio_in_background', 16, 0, discards.mojom.SiteDataFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('load_time_estimates', 24, 0, discards.mojom.SiteDataPerformanceMeasurementSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('last_loaded', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SiteDataEntry
mojo.internal.Struct(
    discards.mojom.SiteDataEntrySpec, 'discards.mojom.SiteDataEntry', [
      mojo.internal.StructField('origin', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, discards.mojom.SiteDataValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_dirty', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SiteDataArray
mojo.internal.Struct(
    discards.mojom.SiteDataArraySpec, 'discards.mojom.SiteDataArray', [
      mojo.internal.StructField('db_rows', 0, 0, mojo.internal.Array(discards.mojom.SiteDataEntrySpec.$, false), null, false, 0, undefined),
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
      mojo.internal.StructField('result', 0, 0, discards.mojom.SiteDataArraySpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ParamsSpec, 'discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ResponseParamsSpec, 'discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ResponseParams', [
      mojo.internal.StructField('db_size', 0, 0, discards.mojom.SiteDataDatabaseSizeSpec.$, null, true, 0, undefined),
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
  getSiteDataArray(explicitly_requested_origins) {
    return this.$.getSiteDataArray(explicitly_requested_origins);
  }
  getSiteDataDatabaseSize() {
    return this.$.getSiteDataDatabaseSize();
  }
};

discards.mojom.SiteDataProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SiteDataProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getSiteDataArray(explicitly_requested_origins) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      discards.mojom.SiteDataProvider_GetSiteDataArray_ParamsSpec,
      discards.mojom.SiteDataProvider_GetSiteDataArray_ResponseParamsSpec,
      [explicitly_requested_origins],
      false);
  }

  getSiteDataDatabaseSize() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ParamsSpec,
      discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ResponseParamsSpec,
      [],
      false);
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

discards.mojom.SiteDataProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SiteDataProvider', [
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.SiteDataProvider_GetSiteDataArray_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.SiteDataProvider_GetSiteDataArray_ParamsSpec.$.structSpec);
          const result = this.impl.getSiteDataArray(params.explicitly_requested_origins);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, discards.mojom.SiteDataProvider_GetSiteDataArray_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ParamsSpec.$.structSpec);
          const result = this.impl.getSiteDataDatabaseSize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, discards.mojom.SiteDataProvider_GetSiteDataDatabaseSize_ResponseParamsSpec);
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

discards.mojom.SiteDataProviderReceiver = discards.mojom.SiteDataProviderReceiver;

discards.mojom.SiteDataProviderPtr = discards.mojom.SiteDataProviderRemote;
discards.mojom.SiteDataProviderRequest = discards.mojom.SiteDataProviderPendingReceiver;

