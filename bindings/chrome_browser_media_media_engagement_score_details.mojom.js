// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/media/media_engagement_score_details.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var url = url || {};

media.mojom.MediaEngagementScoreDetailsSpec = { $: {} };
media.mojom.MediaEngagementConfigSpec = { $: {} };
media.mojom.MediaEngagementScoreDetailsProvider = {};
media.mojom.MediaEngagementScoreDetailsProvider.$interfaceName = 'media.mojom.MediaEngagementScoreDetailsProvider';
media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ParamsSpec = { $: {} };
media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParamsSpec = { $: {} };
media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ParamsSpec = { $: {} };
media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParamsSpec = { $: {} };

// Struct: MediaEngagementScoreDetails
mojo.internal.Struct(
    media.mojom.MediaEngagementScoreDetailsSpec, 'media.mojom.MediaEngagementScoreDetails', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('total_score', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('last_media_playback_time', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('visits', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('media_playbacks', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_high', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: MediaEngagementConfig
mojo.internal.Struct(
    media.mojom.MediaEngagementConfigSpec, 'media.mojom.MediaEngagementConfig', [
      mojo.internal.StructField('high_score_lower_threshold', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('high_score_upper_threshold', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('autoplay_policy', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('preload_version', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('score_min_visits', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('feature_record_data', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('feature_bypass_autoplay', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('feature_preload_data', 36, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('feature_https_only', 36, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('feature_autoplay_disable_settings', 36, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pref_disable_unified_autoplay', 36, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_custom_autoplay_policy', 36, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: MediaEngagementScoreDetailsProvider
mojo.internal.Struct(
    media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ParamsSpec, 'media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParamsSpec, 'media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, mojo.internal.Array(media.mojom.MediaEngagementScoreDetailsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ParamsSpec, 'media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParamsSpec, 'media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams', [
      mojo.internal.StructField('config', 0, 0, media.mojom.MediaEngagementConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MediaEngagementScoreDetailsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaEngagementScoreDetailsProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaEngagementScoreDetailsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaEngagementScoreDetailsProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaEngagementScoreDetailsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getMediaEngagementScoreDetails() {
    return this.$.getMediaEngagementScoreDetails();
  }
  getMediaEngagementConfig() {
    return this.$.getMediaEngagementConfig();
  }
};

media.mojom.MediaEngagementScoreDetailsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaEngagementScoreDetailsProvider', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getMediaEngagementScoreDetails() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ParamsSpec,
      media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParamsSpec,
      [],
      false);
  }

  getMediaEngagementConfig() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ParamsSpec,
      media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.MediaEngagementScoreDetailsProvider.getRemote = function() {
  let remote = new media.mojom.MediaEngagementScoreDetailsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaEngagementScoreDetailsProvider',
    'context');
  return remote.$;
};

media.mojom.MediaEngagementScoreDetailsProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaEngagementScoreDetailsProvider', [
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
             decoder.decodeStructInline(media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ParamsSpec.$.structSpec);
          const result = this.impl.getMediaEngagementScoreDetails();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ParamsSpec.$.structSpec);
          const result = this.impl.getMediaEngagementConfig();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParamsSpec);
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

media.mojom.MediaEngagementScoreDetailsProviderReceiver = media.mojom.MediaEngagementScoreDetailsProviderReceiver;

media.mojom.MediaEngagementScoreDetailsProviderPtr = media.mojom.MediaEngagementScoreDetailsProviderRemote;
media.mojom.MediaEngagementScoreDetailsProviderRequest = media.mojom.MediaEngagementScoreDetailsProviderPendingReceiver;

