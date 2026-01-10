// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/customize_chrome/wallpaper_search/wallpaper_search.mojom
// Module: side_panel.customize_chrome.mojom

'use strict';

// Module namespace
var side_panel = side_panel || {};
side_panel.customize_chrome = side_panel.customize_chrome || {};
side_panel.customize_chrome.mojom = side_panel.customize_chrome.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var url = url || {};

side_panel.customize_chrome.mojom.DescriptorDNameSpec = { $: mojo.internal.Enum() };
side_panel.customize_chrome.mojom.WallpaperSearchStatusSpec = { $: mojo.internal.Enum() };
side_panel.customize_chrome.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };
side_panel.customize_chrome.mojom.DescriptorDValueSpec = { $: {} };
side_panel.customize_chrome.mojom.KeyLabelSpec = { $: {} };
side_panel.customize_chrome.mojom.GroupSpec = { $: {} };
side_panel.customize_chrome.mojom.DescriptorBSpec = { $: {} };
side_panel.customize_chrome.mojom.DescriptorsSpec = { $: {} };
side_panel.customize_chrome.mojom.InspirationSpec = { $: {} };
side_panel.customize_chrome.mojom.InspirationDescriptorsSpec = { $: {} };
side_panel.customize_chrome.mojom.InspirationGroupSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchResultSpec = { $: {} };
side_panel.customize_chrome.mojom.ResultDescriptorsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory = {};
side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory.$interfaceName = 'side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory';
side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler = {};
side_panel.customize_chrome.mojom.WallpaperSearchHandler.$interfaceName = 'side_panel.customize_chrome.mojom.WallpaperSearchHandler';
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ResponseParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ResponseParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.WallpaperSearchClient = {};
side_panel.customize_chrome.mojom.WallpaperSearchClient.$interfaceName = 'side_panel.customize_chrome.mojom.WallpaperSearchClient';
side_panel.customize_chrome.mojom.WallpaperSearchClient_SetHistory_ParamsSpec = { $: {} };

// Enum: DescriptorDName
side_panel.customize_chrome.mojom.DescriptorDName = {
  kYellow: 0,
};

// Enum: WallpaperSearchStatus
side_panel.customize_chrome.mojom.WallpaperSearchStatus = {
  kOk: 0,
  kError: 1,
  kRequestThrottled: 2,
  kOffline: 3,
  kSignedOut: 4,
};

// Enum: UserFeedback
side_panel.customize_chrome.mojom.UserFeedback = {
  kUnspecified: 0,
  kThumbsUp: 1,
  kThumbsDown: 2,
};

// Union: DescriptorDValue
mojo.internal.Union(
    side_panel.customize_chrome.mojom.DescriptorDValueSpec, 'side_panel.customize_chrome.mojom.DescriptorDValue', {
      'color': {
        'ordinal': 0,
        'type': skia.mojom.SkColorSpec.$,
        'nullable': false,
      },
      'hue': {
        'ordinal': 1,
        'type': mojo.internal.Float,
        'nullable': false,
      },
      'name': {
        'ordinal': 2,
        'type': side_panel.customize_chrome.mojom.DescriptorDNameSpec.$,
        'nullable': false,
      },
    });

// Struct: KeyLabel
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.KeyLabelSpec, 'side_panel.customize_chrome.mojom.KeyLabel', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Group
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.GroupSpec, 'side_panel.customize_chrome.mojom.Group', [
      mojo.internal.StructField('category', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('descriptor_as', 8, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.KeyLabelSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DescriptorB
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.DescriptorBSpec, 'side_panel.customize_chrome.mojom.DescriptorB', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('image_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Descriptors
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.DescriptorsSpec, 'side_panel.customize_chrome.mojom.Descriptors', [
      mojo.internal.StructField('groups', 0, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.GroupSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('descriptor_b', 8, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.DescriptorBSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('descriptor_c', 16, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.KeyLabelSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Inspiration
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.InspirationSpec, 'side_panel.customize_chrome.mojom.Inspiration', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('background_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('thumbnail_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: InspirationDescriptors
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.InspirationDescriptorsSpec, 'side_panel.customize_chrome.mojom.InspirationDescriptors', [
      mojo.internal.StructField('subject', 0, 0, side_panel.customize_chrome.mojom.KeyLabelSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('style', 8, 0, side_panel.customize_chrome.mojom.KeyLabelSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('mood', 16, 0, side_panel.customize_chrome.mojom.KeyLabelSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('color', 24, 0, side_panel.customize_chrome.mojom.DescriptorDValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: InspirationGroup
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.InspirationGroupSpec, 'side_panel.customize_chrome.mojom.InspirationGroup', [
      mojo.internal.StructField('descriptors', 0, 0, side_panel.customize_chrome.mojom.InspirationDescriptorsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('inspirations', 8, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.InspirationSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: WallpaperSearchResult
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchResultSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchResult', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('descriptors', 16, 0, side_panel.customize_chrome.mojom.ResultDescriptorsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ResultDescriptors
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.ResultDescriptorsSpec, 'side_panel.customize_chrome.mojom.ResultDescriptors', [
      mojo.internal.StructField('subject', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('style', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('mood', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('color', 24, 0, side_panel.customize_chrome.mojom.DescriptorDValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: WallpaperSearchHandlerFactory
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(side_panel.customize_chrome.mojom.WallpaperSearchClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(side_panel.customize_chrome.mojom.WallpaperSearchHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [client, handler],
      false);
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

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateWallpaperSearchHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWallpaperSearchHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createWallpaperSearchHandler');
          const result = this.impl.createWallpaperSearchHandler(params.client, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryReceiver = side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryReceiver;

side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryPtr = side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRemote;
side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryRequest = side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactoryPendingReceiver;


// Interface: WallpaperSearchHandler
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ResponseParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ResponseParams', [
      mojo.internal.StructField('descriptors', 0, 0, side_panel.customize_chrome.mojom.DescriptorsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ResponseParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ResponseParams', [
      mojo.internal.StructField('inspirationGroups', 0, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.InspirationGroupSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_Params', [
      mojo.internal.StructField('result_descriptors', 0, 0, side_panel.customize_chrome.mojom.ResultDescriptorsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, side_panel.customize_chrome.mojom.WallpaperSearchStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('results', 8, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.WallpaperSearchResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_Params', [
      mojo.internal.StructField('result_ids', 0, 0, mojo.internal.Array(mojo_base.mojom.TokenSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_Params', [
      mojo.internal.StructField('result_id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('descriptors', 8, 0, side_panel.customize_chrome.mojom.ResultDescriptorsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_Params', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('background_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_Params', [
      mojo.internal.StructField('result_id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('descriptors', 16, 0, side_panel.customize_chrome.mojom.ResultDescriptorsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_Params', [
      mojo.internal.StructField('selected_option', 0, 0, side_panel.customize_chrome.mojom.UserFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  getInspirations() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ParamsSpec,
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ResponseParamsSpec,
      [],
      false);
  }

  getWallpaperSearchResults(result_descriptors) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ParamsSpec,
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParamsSpec,
      [result_descriptors],
      false);
  }

  setResultRenderTime(result_ids, time) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_ParamsSpec,
      null,
      [result_ids, time],
      false);
  }

  setBackgroundToHistoryImage(result_id, descriptors) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsSpec,
      null,
      [result_id, descriptors],
      false);
  }

  setBackgroundToInspirationImage(id, background_url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsSpec,
      null,
      [id, background_url],
      false);
  }

  setBackgroundToWallpaperSearchResult(result_id, time, descriptors) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsSpec,
      null,
      [result_id, time, descriptors],
      false);
  }

  updateHistory() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_ParamsSpec,
      null,
      [],
      false);
  }

  setUserFeedback(selected_option) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_ParamsSpec,
      null,
      [selected_option],
      false);
  }

  openHelpArticle() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_ParamsSpec,
      null,
      [],
      false);
  }

  launchHatsSurvey() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_ParamsSpec,
      null,
      [],
      false);
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

side_panel.customize_chrome.mojom.WallpaperSearchHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetDescriptors
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDescriptors (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetInspirations
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInspirations (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetWallpaperSearchResults
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWallpaperSearchResults (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetResultRenderTime
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetResultRenderTime (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetBackgroundToHistoryImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundToHistoryImage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetBackgroundToInspirationImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundToInspirationImage (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetBackgroundToWallpaperSearchResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundToWallpaperSearchResult (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UpdateHistory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateHistory (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetUserFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserFeedback (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OpenHelpArticle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenHelpArticle (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: LaunchHatsSurvey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchHatsSurvey (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getDescriptors');
          const result = this.impl.getDescriptors();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetDescriptors_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getInspirations');
          const result = this.impl.getInspirations();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetInspirations_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getWallpaperSearchResults');
          const result = this.impl.getWallpaperSearchResults(params.result_descriptors);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.customize_chrome.mojom.WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetResultRenderTime_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setResultRenderTime');
          const result = this.impl.setResultRenderTime(params.result_ids, params.time);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundToHistoryImage');
          const result = this.impl.setBackgroundToHistoryImage(params.result_id, params.descriptors);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundToInspirationImage');
          const result = this.impl.setBackgroundToInspirationImage(params.id, params.background_url);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundToWallpaperSearchResult');
          const result = this.impl.setBackgroundToWallpaperSearchResult(params.result_id, params.time, params.descriptors);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_UpdateHistory_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.updateHistory');
          const result = this.impl.updateHistory();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_SetUserFeedback_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setUserFeedback');
          const result = this.impl.setUserFeedback(params.selected_option);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_OpenHelpArticle_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.openHelpArticle');
          const result = this.impl.openHelpArticle();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchHandler_LaunchHatsSurvey_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.launchHatsSurvey');
          const result = this.impl.launchHatsSurvey();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchHandlerReceiver = side_panel.customize_chrome.mojom.WallpaperSearchHandlerReceiver;

side_panel.customize_chrome.mojom.WallpaperSearchHandlerPtr = side_panel.customize_chrome.mojom.WallpaperSearchHandlerRemote;
side_panel.customize_chrome.mojom.WallpaperSearchHandlerRequest = side_panel.customize_chrome.mojom.WallpaperSearchHandlerPendingReceiver;


// Interface: WallpaperSearchClient
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.WallpaperSearchClient_SetHistory_ParamsSpec, 'side_panel.customize_chrome.mojom.WallpaperSearchClient_SetHistory_Params', [
      mojo.internal.StructField('history', 0, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.WallpaperSearchResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [history],
      false);
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

side_panel.customize_chrome.mojom.WallpaperSearchClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetHistory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchClient_SetHistory_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHistory (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.customize_chrome.mojom.WallpaperSearchClient_SetHistory_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setHistory');
          const result = this.impl.setHistory(params.history);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.customize_chrome.mojom.WallpaperSearchClientReceiver = side_panel.customize_chrome.mojom.WallpaperSearchClientReceiver;

side_panel.customize_chrome.mojom.WallpaperSearchClientPtr = side_panel.customize_chrome.mojom.WallpaperSearchClientRemote;
side_panel.customize_chrome.mojom.WallpaperSearchClientRequest = side_panel.customize_chrome.mojom.WallpaperSearchClientPendingReceiver;

