// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/media/media_engagement_score_details.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


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
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.MediaEngagementScoreDetailsProviderPtr = media.mojom.MediaEngagementScoreDetailsProviderRemote;
media.mojom.MediaEngagementScoreDetailsProviderRequest = media.mojom.MediaEngagementScoreDetailsProviderPendingReceiver;

