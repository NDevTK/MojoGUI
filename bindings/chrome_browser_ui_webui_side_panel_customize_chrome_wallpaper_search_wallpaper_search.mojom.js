// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/customize_chrome/wallpaper_search/wallpaper_search.mojom
// Module: side_panel.customize_chrome.mojom

'use strict';

// Module namespace
var side_panel = side_panel || {};
side_panel.customize_chrome = side_panel.customize_chrome || {};
side_panel.customize_chrome.mojom = side_panel.customize_chrome.mojom || {};


// Enum: DescriptorDName
side_panel.customize_chrome.mojom.DescriptorDName = {
  kYellow: 0,
};
side_panel.customize_chrome.mojom.DescriptorDNameSpec = { $: mojo.internal.Enum() };

// Enum: WallpaperSearchStatus
side_panel.customize_chrome.mojom.WallpaperSearchStatus = {
  kOk: 0,
  kError: 1,
  kRequestThrottled: 2,
  kOffline: 3,
  kSignedOut: 4,
};
side_panel.customize_chrome.mojom.WallpaperSearchStatusSpec = { $: mojo.internal.Enum() };

// Enum: UserFeedback
side_panel.customize_chrome.mojom.UserFeedback = {
  kUnspecified: 0,
  kThumbsUp: 1,
  kThumbsDown: 2,
};
side_panel.customize_chrome.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };

// Union: DescriptorDValue
side_panel.customize_chrome.mojom.DescriptorDValueSpec = { $: mojo.internal.Union(
    'side_panel.customize_chrome.mojom.DescriptorDValue', {
      'color': {
        'ordinal': 0,
        'type': skia.mojom.SkColorSpec,
      }},
      'hue': {
        'ordinal': 1,
        'type': mojo.internal.Float,
      }},
      'name': {
        'ordinal': 2,
        'type': side_panel.customize_chrome.mojom.DescriptorDNameSpec,
      }},
    })
};

// Struct: KeyLabel
side_panel.customize_chrome.mojom.KeyLabelSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.KeyLabel',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Group
side_panel.customize_chrome.mojom.GroupSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.Group',
      packedSize: 24,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'descriptor_as', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(side_panel.customize_chrome.mojom.KeyLabelSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DescriptorB
side_panel.customize_chrome.mojom.DescriptorBSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.DescriptorB',
      packedSize: 32,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'image_path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Descriptors
side_panel.customize_chrome.mojom.DescriptorsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.Descriptors',
      packedSize: 32,
      fields: [
        { name: 'groups', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(side_panel.customize_chrome.mojom.GroupSpec, false), nullable: false, minVersion: 0 },
        { name: 'descriptor_b', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(side_panel.customize_chrome.mojom.DescriptorBSpec, false), nullable: false, minVersion: 0 },
        { name: 'descriptor_c', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(side_panel.customize_chrome.mojom.KeyLabelSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Inspiration
side_panel.customize_chrome.mojom.InspirationSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.Inspiration',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'background_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'thumbnail_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: InspirationDescriptors
side_panel.customize_chrome.mojom.InspirationDescriptorsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.InspirationDescriptors',
      packedSize: 48,
      fields: [
        { name: 'subject', packedOffset: 0, packedBitOffset: 0, type: side_panel.customize_chrome.mojom.KeyLabelSpec, nullable: true, minVersion: 0 },
        { name: 'style', packedOffset: 8, packedBitOffset: 0, type: side_panel.customize_chrome.mojom.KeyLabelSpec, nullable: true, minVersion: 0 },
        { name: 'mood', packedOffset: 16, packedBitOffset: 0, type: side_panel.customize_chrome.mojom.KeyLabelSpec, nullable: true, minVersion: 0 },
        { name: 'color', packedOffset: 24, packedBitOffset: 0, type: side_panel.customize_chrome.mojom.DescriptorDValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: InspirationGroup
side_panel.customize_chrome.mojom.InspirationGroupSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.InspirationGroup',
      packedSize: 24,
      fields: [
        { name: 'descriptors', packedOffset: 0, packedBitOffset: 0, type: side_panel.customize_chrome.mojom.InspirationDescriptorsSpec, nullable: false, minVersion: 0 },
        { name: 'inspirations', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(side_panel.customize_chrome.mojom.InspirationSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WallpaperSearchResult
side_panel.customize_chrome.mojom.WallpaperSearchResultSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchResult',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'image', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'descriptors', packedOffset: 16, packedBitOffset: 0, type: side_panel.customize_chrome.mojom.ResultDescriptorsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ResultDescriptors
side_panel.customize_chrome.mojom.ResultDescriptorsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.ResultDescriptors',
      packedSize: 48,
      fields: [
        { name: 'subject', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'style', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'mood', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'color', packedOffset: 24, packedBitOffset: 0, type: side_panel.customize_chrome.mojom.DescriptorDValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: WallpaperSearchHandlerFactory
side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory = {};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryPendingReceiver,
      handle);
    this.$ = new side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWallpaperSearchHandler(client, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsSpec,
      null,
      [client, handler]);
  }

};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory.getRemote = function() {
  let remote = new side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateWallpaperSearchHandler
side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory.CreateWallpaperSearchHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryPtr = side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRemote;
side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRequest = side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryPendingReceiver;


// Interface: WallpaperSearchHandler
side_panel.customize_chrome.mojom.WallpaperSearchHandler = {};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerRemote = class {
  static get $interfaceName() {
    return 'side_panel.customize_chrome.mojom.WallpaperSearchHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.customize_chrome.mojom.WallpaperSearchHandlerPendingReceiver,
      handle);
    this.$ = new side_panel.customize_chrome.mojom.WallpaperSearchHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDescriptors() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ParamsSpec,
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ResponseParamsSpec,
      []);
  }

  getInspirations() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ParamsSpec,
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ResponseParamsSpec,
      []);
  }

  getWallpaperSearchResults(result_descriptors) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ParamsSpec,
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParamsSpec,
      [result_descriptors]);
  }

  setResultRenderTime(result_ids, time) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_ParamsSpec,
      null,
      [result_ids, time]);
  }

  setBackgroundToHistoryImage(result_id, descriptors) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsSpec,
      null,
      [result_id, descriptors]);
  }

  setBackgroundToInspirationImage(id, background_url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsSpec,
      null,
      [id, background_url]);
  }

  setBackgroundToWallpaperSearchResult(result_id, time, descriptors) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsSpec,
      null,
      [result_id, time, descriptors]);
  }

  updateHistory() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_ParamsSpec,
      null,
      []);
  }

  setUserFeedback(selected_option) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_ParamsSpec,
      null,
      [selected_option]);
  }

  openHelpArticle() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_ParamsSpec,
      null,
      []);
  }

  launchHatsSurvey() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_ParamsSpec,
      null,
      []);
  }

};

side_panel.customize_chrome.mojom.WallpaperSearchHandler.getRemote = function() {
  let remote = new side_panel.customize_chrome.mojom.WallpaperSearchHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.customize_chrome.mojom.WallpaperSearchHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetDescriptors
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.GetDescriptors_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.GetDescriptors_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'descriptors', packedOffset: 0, packedBitOffset: 0, type: side_panel.customize_chrome.mojom.DescriptorsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetInspirations
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.GetInspirations_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.GetInspirations_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'inspirationGroups', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(side_panel.customize_chrome.mojom.InspirationGroupSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetWallpaperSearchResults
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.GetWallpaperSearchResults_Params',
      packedSize: 16,
      fields: [
        { name: 'result_descriptors', packedOffset: 0, packedBitOffset: 0, type: side_panel.customize_chrome.mojom.ResultDescriptorsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.GetWallpaperSearchResults_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: side_panel.customize_chrome.mojom.WallpaperSearchStatusSpec, nullable: false, minVersion: 0 },
        { name: 'results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(side_panel.customize_chrome.mojom.WallpaperSearchResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetResultRenderTime
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.SetResultRenderTime_Params',
      packedSize: 24,
      fields: [
        { name: 'result_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.TokenSpec, false), nullable: false, minVersion: 0 },
        { name: 'time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetBackgroundToHistoryImage
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.SetBackgroundToHistoryImage_Params',
      packedSize: 24,
      fields: [
        { name: 'result_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'descriptors', packedOffset: 8, packedBitOffset: 0, type: side_panel.customize_chrome.mojom.ResultDescriptorsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetBackgroundToInspirationImage
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.SetBackgroundToInspirationImage_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'background_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetBackgroundToWallpaperSearchResult
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.SetBackgroundToWallpaperSearchResult_Params',
      packedSize: 32,
      fields: [
        { name: 'result_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'descriptors', packedOffset: 16, packedBitOffset: 0, type: side_panel.customize_chrome.mojom.ResultDescriptorsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for UpdateHistory
side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.UpdateHistory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetUserFeedback
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.SetUserFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'selected_option', packedOffset: 0, packedBitOffset: 0, type: side_panel.customize_chrome.mojom.UserFeedbackSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenHelpArticle
side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.OpenHelpArticle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for LaunchHatsSurvey
side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchHandler.LaunchHatsSurvey_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
side_panel.customize_chrome.mojom.WallpaperSearchHandlerPtr = side_panel.customize_chrome.mojom.WallpaperSearchHandlerRemote;
side_panel.customize_chrome.mojom.WallpaperSearchHandlerRequest = side_panel.customize_chrome.mojom.WallpaperSearchHandlerPendingReceiver;


// Interface: WallpaperSearchClient
side_panel.customize_chrome.mojom.WallpaperSearchClient = {};

side_panel.customize_chrome.mojom.WallpaperSearchClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchClientRemote = class {
  static get $interfaceName() {
    return 'side_panel.customize_chrome.mojom.WallpaperSearchClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.customize_chrome.mojom.WallpaperSearchClientPendingReceiver,
      handle);
    this.$ = new side_panel.customize_chrome.mojom.WallpaperSearchClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setHistory(history) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchClient_SetHistory_ParamsSpec,
      null,
      [history]);
  }

};

side_panel.customize_chrome.mojom.WallpaperSearchClient.getRemote = function() {
  let remote = new side_panel.customize_chrome.mojom.WallpaperSearchClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.customize_chrome.mojom.WallpaperSearchClient',
    'context');
  return remote.$;
};

// ParamsSpec for SetHistory
side_panel.customize_chrome.mojom.WallpaperSearchClient_SetHistory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.WallpaperSearchClient.SetHistory_Params',
      packedSize: 16,
      fields: [
        { name: 'history', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(side_panel.customize_chrome.mojom.WallpaperSearchResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
side_panel.customize_chrome.mojom.WallpaperSearchClientPtr = side_panel.customize_chrome.mojom.WallpaperSearchClientRemote;
side_panel.customize_chrome.mojom.WallpaperSearchClientRequest = side_panel.customize_chrome.mojom.WallpaperSearchClientPendingReceiver;

