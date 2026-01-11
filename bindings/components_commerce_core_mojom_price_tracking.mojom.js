// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/price_tracking.mojom
// Module: commerce.price_tracking.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  trackPriceForBookmark(bookmark_id) {
    return this.$.trackPriceForBookmark(bookmark_id);
  }
  untrackPriceForBookmark(bookmark_id) {
    return this.$.untrackPriceForBookmark(bookmark_id);
  }
  setPriceTrackingStatusForCurrentUrl(track) {
    return this.$.setPriceTrackingStatusForCurrentUrl(track);
  }
  getAllShoppingBookmarkProductInfo() {
    return this.$.getAllShoppingBookmarkProductInfo();
  }
  getAllPriceTrackedBookmarkProductInfo() {
    return this.$.getAllPriceTrackedBookmarkProductInfo();
  }
  getShoppingCollectionBookmarkFolderId() {
    return this.$.getShoppingCollectionBookmarkFolderId();
  }
  getParentBookmarkFolderNameForCurrentUrl() {
    return this.$.getParentBookmarkFolderNameForCurrentUrl();
  }
  showBookmarkEditorForCurrentUrl() {
    return this.$.showBookmarkEditorForCurrentUrl();
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PriceTrackingHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  trackPriceForBookmark(bookmark_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec,
      null,
      [bookmark_id],
      false);
  }

  untrackPriceForBookmark(bookmark_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec,
      null,
      [bookmark_id],
      false);
  }

  setPriceTrackingStatusForCurrentUrl(track) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec,
      null,
      [track],
      false);
  }

  getAllShoppingBookmarkProductInfo() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec,
      [],
      false);
  }

  getAllPriceTrackedBookmarkProductInfo() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec,
      [],
      false);
  }

  getShoppingCollectionBookmarkFolderId() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec,
      [],
      false);
  }

  getParentBookmarkFolderNameForCurrentUrl() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec,
      [],
      false);
  }

  showBookmarkEditorForCurrentUrl() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PriceTrackingHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec.$.structSpec);
          const result = this.impl.trackPriceForBookmark(params.bookmark_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec.$.structSpec);
          const result = this.impl.untrackPriceForBookmark(params.bookmark_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec.$.structSpec);
          const result = this.impl.setPriceTrackingStatusForCurrentUrl(params.track);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec.$.structSpec);
          const result = this.impl.showBookmarkEditorForCurrentUrl();
          break;
        }
      }
      } catch (err) {}
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
  priceTrackedForBookmark(bookmark_product) {
    return this.$.priceTrackedForBookmark(bookmark_product);
  }
  priceUntrackedForBookmark(bookmark_product) {
    return this.$.priceUntrackedForBookmark(bookmark_product);
  }
  operationFailedForBookmark(bookmark_product, attempted_track) {
    return this.$.operationFailedForBookmark(bookmark_product, attempted_track);
  }
  onProductBookmarkMoved(bookmark_product) {
    return this.$.onProductBookmarkMoved(bookmark_product);
  }
};

commerce.price_tracking.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  priceTrackedForBookmark(bookmark_product) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec,
      null,
      [bookmark_product],
      false);
  }

  priceUntrackedForBookmark(bookmark_product) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec,
      null,
      [bookmark_product],
      false);
  }

  operationFailedForBookmark(bookmark_product, attempted_track) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec,
      null,
      [bookmark_product, attempted_track],
      false);
  }

  onProductBookmarkMoved(bookmark_product) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec.$.structSpec);
          const result = this.impl.priceTrackedForBookmark(params.bookmark_product);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec.$.structSpec);
          const result = this.impl.priceUntrackedForBookmark(params.bookmark_product);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec.$.structSpec);
          const result = this.impl.operationFailedForBookmark(params.bookmark_product, params.attempted_track);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec.$.structSpec);
          const result = this.impl.onProductBookmarkMoved(params.bookmark_product);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

commerce.price_tracking.mojom.PageReceiver = commerce.price_tracking.mojom.PageReceiver;

commerce.price_tracking.mojom.PagePtr = commerce.price_tracking.mojom.PageRemote;
commerce.price_tracking.mojom.PageRequest = commerce.price_tracking.mojom.PagePendingReceiver;


// Interface: PriceTrackingHandlerFactory
mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(commerce.price_tracking.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(commerce.price_tracking.mojom.PriceTrackingHandlerRemote), null, false, 0, undefined),
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
  createPriceTrackingHandler(page, handler) {
    return this.$.createPriceTrackingHandler(page, handler);
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PriceTrackingHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPriceTrackingHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PriceTrackingHandlerFactory', [
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
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPriceTrackingHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryReceiver = commerce.price_tracking.mojom.PriceTrackingHandlerFactoryReceiver;

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPtr = commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemote;
commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRequest = commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPendingReceiver;

