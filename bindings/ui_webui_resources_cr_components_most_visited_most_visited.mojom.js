// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/most_visited/most_visited.mojom
// Module: most_visited.mojom

'use strict';

// Module namespace
var most_visited = most_visited || {};
most_visited.mojom = most_visited.mojom || {};
var ntp_tiles = ntp_tiles || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var url = url || {};

most_visited.mojom.MostVisitedTileSpec = { $: {} };
most_visited.mojom.MostVisitedThemeSpec = { $: {} };
most_visited.mojom.MostVisitedInfoSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandlerFactory = {};
most_visited.mojom.MostVisitedPageHandlerFactory.$interfaceName = 'most_visited.mojom.MostVisitedPageHandlerFactory';
most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler = {};
most_visited.mojom.MostVisitedPageHandler.$interfaceName = 'most_visited.mojom.MostVisitedPageHandler';
most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPage = {};
most_visited.mojom.MostVisitedPage.$interfaceName = 'most_visited.mojom.MostVisitedPage';
most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec = { $: {} };

// Struct: MostVisitedTile
mojo.internal.Struct(
    most_visited.mojom.MostVisitedTileSpec, 'most_visited.mojom.MostVisitedTile', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title_direction', 8, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 24, 0, ntp_tiles.mojom.TileSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title_source', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_query_tile', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_user_edit', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_user_delete', 36, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: MostVisitedTheme
mojo.internal.Struct(
    most_visited.mojom.MostVisitedThemeSpec, 'most_visited.mojom.MostVisitedTheme', [
      mojo.internal.StructField('background_color', 0, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('use_white_tile_icon', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_dark', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MostVisitedInfo
mojo.internal.Struct(
    most_visited.mojom.MostVisitedInfoSpec, 'most_visited.mojom.MostVisitedInfo', [
      mojo.internal.StructField('tiles', 0, 0, mojo.internal.Array(most_visited.mojom.MostVisitedTileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('custom_links_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enterprise_shortcuts_enabled', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('visible', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: MostVisitedPageHandlerFactory
mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(most_visited.mojom.MostVisitedPageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(most_visited.mojom.MostVisitedPageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

most_visited.mojom.MostVisitedPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

most_visited.mojom.MostVisitedPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'most_visited.mojom.MostVisitedPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      most_visited.mojom.MostVisitedPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new most_visited.mojom.MostVisitedPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

most_visited.mojom.MostVisitedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

most_visited.mojom.MostVisitedPageHandlerFactory.getRemote = function() {
  let remote = new most_visited.mojom.MostVisitedPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'most_visited.mojom.MostVisitedPageHandlerFactory',
    'context');
  return remote.$;
};

most_visited.mojom.MostVisitedPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    });
  }
};

most_visited.mojom.MostVisitedPageHandlerFactoryReceiver = most_visited.mojom.MostVisitedPageHandlerFactoryReceiver;

most_visited.mojom.MostVisitedPageHandlerFactoryPtr = most_visited.mojom.MostVisitedPageHandlerFactoryRemote;
most_visited.mojom.MostVisitedPageHandlerFactoryRequest = most_visited.mojom.MostVisitedPageHandlerFactoryPendingReceiver;


// Interface: MostVisitedPageHandler
mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_pos', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_Params', [
      mojo.internal.StructField('source', 0, 0, ntp_tiles.mojom.TileSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_Params', [
      mojo.internal.StructField('source', 0, 0, ntp_tiles.mojom.TileSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_title', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_CancelPrerender_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParams', [
      mojo.internal.StructField('is_expanded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_Params', [
      mojo.internal.StructField('is_expanded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_Params', [
      mojo.internal.StructField('tiles', 0, 0, mojo.internal.Array(most_visited.mojom.MostVisitedTileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mouse_button', 12, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('alt_key', 13, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ctrl_key', 13, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('meta_key', 13, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shift_key', 13, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

most_visited.mojom.MostVisitedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

most_visited.mojom.MostVisitedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'most_visited.mojom.MostVisitedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      most_visited.mojom.MostVisitedPageHandlerPendingReceiver,
      handle);
    this.$ = new most_visited.mojom.MostVisitedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

most_visited.mojom.MostVisitedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addMostVisitedTile(url, title) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec,
      most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec,
      [url, title],
      false);
  }

  deleteMostVisitedTile(tile) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec,
      null,
      [tile],
      false);
  }

  reorderMostVisitedTile(tile, new_pos) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec,
      null,
      [tile, new_pos],
      false);
  }

  restoreMostVisitedDefaults(source) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec,
      null,
      [source],
      false);
  }

  undoMostVisitedAutoRemoval() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec,
      null,
      [],
      false);
  }

  undoMostVisitedTileAction(source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec,
      null,
      [source],
      false);
  }

  updateMostVisitedInfo() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec,
      null,
      [],
      false);
  }

  updateMostVisitedTile(tile, new_url, new_title) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec,
      most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec,
      [tile, new_url, new_title],
      false);
  }

  prerenderMostVisitedTile(tile) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec,
      null,
      [tile],
      false);
  }

  prefetchMostVisitedTile(tile) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec,
      null,
      [tile],
      false);
  }

  preconnectMostVisitedTile(tile) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec,
      null,
      [tile],
      false);
  }

  cancelPrerender() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec,
      null,
      [],
      false);
  }

  getMostVisitedExpandedState() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec,
      most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec,
      [],
      false);
  }

  setMostVisitedExpandedState(is_expanded) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec,
      null,
      [is_expanded],
      false);
  }

  onMostVisitedTilesRendered(tiles, time) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec,
      null,
      [tiles, time],
      false);
  }

  onMostVisitedTileNavigation(tile, index, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec,
      null,
      [tile, index, mouse_button, alt_key, ctrl_key, meta_key, shift_key],
      false);
  }

};

most_visited.mojom.MostVisitedPageHandler.getRemote = function() {
  let remote = new most_visited.mojom.MostVisitedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'most_visited.mojom.MostVisitedPageHandler',
    'context');
  return remote.$;
};

most_visited.mojom.MostVisitedPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addMostVisitedTile(params.url, params.title);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteMostVisitedTile(params.tile);
          break;
        }
        case 2: {
          const params = most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reorderMostVisitedTile(params.tile, params.new_pos);
          break;
        }
        case 3: {
          const params = most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec.$.decode(message.payload);
          const result = this.impl.restoreMostVisitedDefaults(params.source);
          break;
        }
        case 4: {
          const params = most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec.$.decode(message.payload);
          const result = this.impl.undoMostVisitedAutoRemoval();
          break;
        }
        case 5: {
          const params = most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.undoMostVisitedTileAction(params.source);
          break;
        }
        case 6: {
          const params = most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateMostVisitedInfo();
          break;
        }
        case 7: {
          const params = most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateMostVisitedTile(params.tile, params.new_url, params.new_title);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.prerenderMostVisitedTile(params.tile);
          break;
        }
        case 9: {
          const params = most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.prefetchMostVisitedTile(params.tile);
          break;
        }
        case 10: {
          const params = most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.preconnectMostVisitedTile(params.tile);
          break;
        }
        case 11: {
          const params = most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelPrerender();
          break;
        }
        case 12: {
          const params = most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getMostVisitedExpandedState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const params = most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setMostVisitedExpandedState(params.is_expanded);
          break;
        }
        case 14: {
          const params = most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMostVisitedTilesRendered(params.tiles, params.time);
          break;
        }
        case 15: {
          const params = most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMostVisitedTileNavigation(params.tile, params.index, params.mouse_button, params.alt_key, params.ctrl_key, params.meta_key, params.shift_key);
          break;
        }
      }
    });
  }
};

most_visited.mojom.MostVisitedPageHandlerReceiver = most_visited.mojom.MostVisitedPageHandlerReceiver;

most_visited.mojom.MostVisitedPageHandlerPtr = most_visited.mojom.MostVisitedPageHandlerRemote;
most_visited.mojom.MostVisitedPageHandlerRequest = most_visited.mojom.MostVisitedPageHandlerPendingReceiver;


// Interface: MostVisitedPage
mojo.internal.Struct(
    most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec, 'most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_Params', [
      mojo.internal.StructField('info', 0, 0, most_visited.mojom.MostVisitedInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec, 'most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_Params', [
    ],
    [[0, 8]]);

most_visited.mojom.MostVisitedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

most_visited.mojom.MostVisitedPageRemote = class {
  static get $interfaceName() {
    return 'most_visited.mojom.MostVisitedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      most_visited.mojom.MostVisitedPagePendingReceiver,
      handle);
    this.$ = new most_visited.mojom.MostVisitedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

most_visited.mojom.MostVisitedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setMostVisitedInfo(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec,
      null,
      [info],
      false);
  }

  onMostVisitedTilesAutoRemoval() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec,
      null,
      [],
      false);
  }

};

most_visited.mojom.MostVisitedPage.getRemote = function() {
  let remote = new most_visited.mojom.MostVisitedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'most_visited.mojom.MostVisitedPage',
    'context');
  return remote.$;
};

most_visited.mojom.MostVisitedPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setMostVisitedInfo(params.info);
          break;
        }
        case 1: {
          const params = most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMostVisitedTilesAutoRemoval();
          break;
        }
      }
    });
  }
};

most_visited.mojom.MostVisitedPageReceiver = most_visited.mojom.MostVisitedPageReceiver;

most_visited.mojom.MostVisitedPagePtr = most_visited.mojom.MostVisitedPageRemote;
most_visited.mojom.MostVisitedPageRequest = most_visited.mojom.MostVisitedPagePendingReceiver;

