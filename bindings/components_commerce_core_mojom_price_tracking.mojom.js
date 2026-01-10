// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/price_tracking.mojom
// Module: commerce.price_tracking.mojom

'use strict';

// Module namespace
var commerce = commerce || {};
commerce.price_tracking = commerce.price_tracking || {};
commerce.price_tracking.mojom = commerce.price_tracking.mojom || {};
var mojo_base = mojo_base || {};

commerce.price_tracking.mojom.PriceTrackingHandler = {};
commerce.price_tracking.mojom.PriceTrackingHandler.$interfaceName = 'commerce.price_tracking.mojom.PriceTrackingHandler';
commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.Page = {};
commerce.price_tracking.mojom.Page.$interfaceName = 'commerce.price_tracking.mojom.Page';
commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandlerFactory = {};
commerce.price_tracking.mojom.PriceTrackingHandlerFactory.$interfaceName = 'commerce.price_tracking.mojom.PriceTrackingHandlerFactory';
commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec = { $: {} };

// Interface: PriceTrackingHandler
mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_Params', [
      mojo.internal.StructField('bookmark_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_Params', [
      mojo.internal.StructField('bookmark_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_Params', [
      mojo.internal.StructField('track', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParams', [
      mojo.internal.StructField('productInfos', 0, 0, mojo.internal.Array(commerce.shared.mojom.BookmarkProductInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParams', [
      mojo.internal.StructField('productInfos', 0, 0, mojo.internal.Array(commerce.shared.mojom.BookmarkProductInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParams', [
      mojo.internal.StructField('collectionId', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParams', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_Params', [
    ],
    [[0, 8]]);

commerce.price_tracking.mojom.PriceTrackingHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerRemote = class {
  static get $interfaceName() {
    return 'commerce.price_tracking.mojom.PriceTrackingHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.price_tracking.mojom.PriceTrackingHandlerPendingReceiver,
      handle);
    this.$ = new commerce.price_tracking.mojom.PriceTrackingHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  trackPriceForBookmark(bookmark_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec,
      null,
      [bookmark_id],
      false);
  }

  untrackPriceForBookmark(bookmark_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec,
      null,
      [bookmark_id],
      false);
  }

  setPriceTrackingStatusForCurrentUrl(track) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec,
      null,
      [track],
      false);
  }

  getAllShoppingBookmarkProductInfo() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec,
      [],
      false);
  }

  getAllPriceTrackedBookmarkProductInfo() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec,
      [],
      false);
  }

  getShoppingCollectionBookmarkFolderId() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec,
      [],
      false);
  }

  getParentBookmarkFolderNameForCurrentUrl() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec,
      [],
      false);
  }

  showBookmarkEditorForCurrentUrl() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec,
      null,
      [],
      false);
  }

};

commerce.price_tracking.mojom.PriceTrackingHandler.getRemote = function() {
  let remote = new commerce.price_tracking.mojom.PriceTrackingHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.price_tracking.mojom.PriceTrackingHandler',
    'context');
  return remote.$;
};

commerce.price_tracking.mojom.PriceTrackingHandlerReceiver = class {
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
        
        // Try Method 0: TrackPriceForBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TrackPriceForBookmark (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UntrackPriceForBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UntrackPriceForBookmark (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetPriceTrackingStatusForCurrentUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPriceTrackingStatusForCurrentUrl (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetAllShoppingBookmarkProductInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllShoppingBookmarkProductInfo (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetAllPriceTrackedBookmarkProductInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllPriceTrackedBookmarkProductInfo (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetShoppingCollectionBookmarkFolderId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetShoppingCollectionBookmarkFolderId (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetParentBookmarkFolderNameForCurrentUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetParentBookmarkFolderNameForCurrentUrl (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ShowBookmarkEditorForCurrentUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowBookmarkEditorForCurrentUrl (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.trackPriceForBookmark');
          const result = this.impl.trackPriceForBookmark(params.bookmark_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.untrackPriceForBookmark');
          const result = this.impl.untrackPriceForBookmark(params.bookmark_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setPriceTrackingStatusForCurrentUrl');
          const result = this.impl.setPriceTrackingStatusForCurrentUrl(params.track);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getAllShoppingBookmarkProductInfo');
          const result = this.impl.getAllShoppingBookmarkProductInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getAllPriceTrackedBookmarkProductInfo');
          const result = this.impl.getAllPriceTrackedBookmarkProductInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getShoppingCollectionBookmarkFolderId');
          const result = this.impl.getShoppingCollectionBookmarkFolderId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getParentBookmarkFolderNameForCurrentUrl');
          const result = this.impl.getParentBookmarkFolderNameForCurrentUrl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.showBookmarkEditorForCurrentUrl');
          const result = this.impl.showBookmarkEditorForCurrentUrl();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerReceiver = commerce.price_tracking.mojom.PriceTrackingHandlerReceiver;

commerce.price_tracking.mojom.PriceTrackingHandlerPtr = commerce.price_tracking.mojom.PriceTrackingHandlerRemote;
commerce.price_tracking.mojom.PriceTrackingHandlerRequest = commerce.price_tracking.mojom.PriceTrackingHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_Params', [
      mojo.internal.StructField('bookmark_product', 0, 0, commerce.shared.mojom.BookmarkProductInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_Params', [
      mojo.internal.StructField('bookmark_product', 0, 0, commerce.shared.mojom.BookmarkProductInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.Page_OperationFailedForBookmark_Params', [
      mojo.internal.StructField('bookmark_product', 0, 0, commerce.shared.mojom.BookmarkProductInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attempted_track', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec, 'commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_Params', [
      mojo.internal.StructField('bookmark_product', 0, 0, commerce.shared.mojom.BookmarkProductInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

commerce.price_tracking.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.price_tracking.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'commerce.price_tracking.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.price_tracking.mojom.PagePendingReceiver,
      handle);
    this.$ = new commerce.price_tracking.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.price_tracking.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  priceTrackedForBookmark(bookmark_product) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec,
      null,
      [bookmark_product],
      false);
  }

  priceUntrackedForBookmark(bookmark_product) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec,
      null,
      [bookmark_product],
      false);
  }

  operationFailedForBookmark(bookmark_product, attempted_track) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec,
      null,
      [bookmark_product, attempted_track],
      false);
  }

  onProductBookmarkMoved(bookmark_product) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec,
      null,
      [bookmark_product],
      false);
  }

};

commerce.price_tracking.mojom.Page.getRemote = function() {
  let remote = new commerce.price_tracking.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.price_tracking.mojom.Page',
    'context');
  return remote.$;
};

commerce.price_tracking.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: PriceTrackedForBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PriceTrackedForBookmark (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PriceUntrackedForBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PriceUntrackedForBookmark (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OperationFailedForBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OperationFailedForBookmark (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnProductBookmarkMoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProductBookmarkMoved (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.priceTrackedForBookmark');
          const result = this.impl.priceTrackedForBookmark(params.bookmark_product);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.priceUntrackedForBookmark');
          const result = this.impl.priceUntrackedForBookmark(params.bookmark_product);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.operationFailedForBookmark');
          const result = this.impl.operationFailedForBookmark(params.bookmark_product, params.attempted_track);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onProductBookmarkMoved');
          const result = this.impl.onProductBookmarkMoved(params.bookmark_product);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

commerce.price_tracking.mojom.PageReceiver = commerce.price_tracking.mojom.PageReceiver;

commerce.price_tracking.mojom.PagePtr = commerce.price_tracking.mojom.PageRemote;
commerce.price_tracking.mojom.PageRequest = commerce.price_tracking.mojom.PagePendingReceiver;


// Interface: PriceTrackingHandlerFactory
mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(commerce.price_tracking.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(commerce.price_tracking.mojom.PriceTrackingHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'commerce.price_tracking.mojom.PriceTrackingHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPendingReceiver,
      handle);
    this.$ = new commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPriceTrackingHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

commerce.price_tracking.mojom.PriceTrackingHandlerFactory.getRemote = function() {
  let remote = new commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.price_tracking.mojom.PriceTrackingHandlerFactory',
    'context');
  return remote.$;
};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryReceiver = class {
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
        
        // Try Method 0: CreatePriceTrackingHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePriceTrackingHandler (0)');
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
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createPriceTrackingHandler');
          const result = this.impl.createPriceTrackingHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryReceiver = commerce.price_tracking.mojom.PriceTrackingHandlerFactoryReceiver;

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPtr = commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemote;
commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRequest = commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPendingReceiver;

