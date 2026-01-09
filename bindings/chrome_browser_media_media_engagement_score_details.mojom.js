// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/media/media_engagement_score_details.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: MediaEngagementScoreDetails
media.mojom.MediaEngagementScoreDetailsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaEngagementScoreDetails',
      packedSize: 48,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'total_score', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'visits', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'media_playbacks', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'last_media_playback_time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'is_high', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MediaEngagementConfig
media.mojom.MediaEngagementConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaEngagementConfig',
      packedSize: 56,
      fields: [
        { name: 'score_min_visits', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'high_score_lower_threshold', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'high_score_upper_threshold', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'feature_record_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'feature_bypass_autoplay', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'feature_preload_data', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'feature_https_only', packedOffset: 24, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'feature_autoplay_disable_settings', packedOffset: 24, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'pref_disable_unified_autoplay', packedOffset: 24, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'has_custom_autoplay_policy', packedOffset: 24, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'autoplay_policy', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'preload_version', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: MediaEngagementScoreDetailsProvider
media.mojom.MediaEngagementScoreDetailsProvider = {};

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
};

media.mojom.MediaEngagementScoreDetailsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMediaEngagementScoreDetails() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ParamsSpec,
      media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParamsSpec,
      []);
  }

  getMediaEngagementConfig() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ParamsSpec,
      media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParamsSpec,
      []);
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

// ParamsSpec for GetMediaEngagementScoreDetails
media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaEngagementScoreDetailsProvider.GetMediaEngagementScoreDetails_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaEngagementScoreDetailsProvider.GetMediaEngagementScoreDetails_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMediaEngagementConfig
media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaEngagementScoreDetailsProvider.GetMediaEngagementConfig_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaEngagementScoreDetailsProvider.GetMediaEngagementConfig_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.MediaEngagementConfigSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.MediaEngagementScoreDetailsProviderPtr = media.mojom.MediaEngagementScoreDetailsProviderRemote;
media.mojom.MediaEngagementScoreDetailsProviderRequest = media.mojom.MediaEngagementScoreDetailsProviderPendingReceiver;

