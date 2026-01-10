// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/most_visited/most_visited.mojom
// Module: most_visited.mojom

'use strict';

// Module namespace
var most_visited = most_visited || {};
most_visited.mojom = most_visited.mojom || {};
var skia = skia || {};
var url = url || {};


// Struct: MostVisitedTile
most_visited.mojom.MostVisitedTileSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedTile',
      packedSize: 40,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title_direction', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TextDirectionSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'is_query_tile', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_user_edit', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_user_delete', packedOffset: 28, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 20, packedBitOffset: 0, type: ntp_tiles.mojom.TileSourceSpec, nullable: false, minVersion: 0 },
        { name: 'title_source', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: MostVisitedTheme
most_visited.mojom.MostVisitedThemeSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedTheme',
      packedSize: 24,
      fields: [
        { name: 'background_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
        { name: 'use_white_tile_icon', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_dark', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MostVisitedInfo
most_visited.mojom.MostVisitedInfoSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedInfo',
      packedSize: 24,
      fields: [
        { name: 'custom_links_enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enterprise_shortcuts_enabled', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'visible', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tiles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(most_visited.mojom.MostVisitedTileSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: MostVisitedPageHandlerFactory
most_visited.mojom.MostVisitedPageHandlerFactory = {};

most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(most_visited.mojom.MostVisitedPageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(most_visited.mojom.MostVisitedPageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [page, handler]);
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

// ParamsSpec for CreatePageHandler
most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(most_visited.mojom.MostVisitedPageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(most_visited.mojom.MostVisitedPageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
most_visited.mojom.MostVisitedPageHandlerFactoryPtr = most_visited.mojom.MostVisitedPageHandlerFactoryRemote;
most_visited.mojom.MostVisitedPageHandlerFactoryRequest = most_visited.mojom.MostVisitedPageHandlerFactoryPendingReceiver;


// Interface: MostVisitedPageHandler
most_visited.mojom.MostVisitedPageHandler = {};

most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_Params',
      packedSize: 16,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_Params',
      packedSize: 24,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
        { name: 'new_pos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: ntp_tiles.mojom.TileSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: ntp_tiles.mojom.TileSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_Params',
      packedSize: 32,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
        { name: 'new_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'new_title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_Params',
      packedSize: 16,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_Params',
      packedSize: 16,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_Params',
      packedSize: 16,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_CancelPrerender_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_Params',
      packedSize: 16,
      fields: [
        { name: 'is_expanded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_Params',
      packedSize: 24,
      fields: [
        { name: 'tiles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(most_visited.mojom.MostVisitedTileSpec, false), nullable: false, minVersion: 0 },
        { name: 'time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_Params',
      packedSize: 24,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'mouse_button', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'alt_key', packedOffset: 13, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ctrl_key', packedOffset: 13, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'meta_key', packedOffset: 13, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shift_key', packedOffset: 13, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [url, title]);
  }

  deleteMostVisitedTile(tile) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec,
      null,
      [tile]);
  }

  reorderMostVisitedTile(tile, new_pos) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec,
      null,
      [tile, new_pos]);
  }

  restoreMostVisitedDefaults(source) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec,
      null,
      [source]);
  }

  undoMostVisitedAutoRemoval() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec,
      null,
      []);
  }

  undoMostVisitedTileAction(source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec,
      null,
      [source]);
  }

  updateMostVisitedInfo() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec,
      null,
      []);
  }

  updateMostVisitedTile(tile, new_url, new_title) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec,
      most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec,
      [tile, new_url, new_title]);
  }

  prerenderMostVisitedTile(tile) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec,
      null,
      [tile]);
  }

  prefetchMostVisitedTile(tile) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec,
      null,
      [tile]);
  }

  preconnectMostVisitedTile(tile) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec,
      null,
      [tile]);
  }

  cancelPrerender() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec,
      null,
      []);
  }

  getMostVisitedExpandedState() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec,
      most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec,
      []);
  }

  setMostVisitedExpandedState(is_expanded) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec,
      null,
      [is_expanded]);
  }

  onMostVisitedTilesRendered(tiles, time) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec,
      null,
      [tiles, time]);
  }

  onMostVisitedTileNavigation(tile, index, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec,
      null,
      [tile, index, mouse_button, alt_key, ctrl_key, meta_key, shift_key]);
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

// ParamsSpec for AddMostVisitedTile
most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.AddMostVisitedTile_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.AddMostVisitedTile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteMostVisitedTile
most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.DeleteMostVisitedTile_Params',
      packedSize: 16,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReorderMostVisitedTile
most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.ReorderMostVisitedTile_Params',
      packedSize: 24,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
        { name: 'new_pos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RestoreMostVisitedDefaults
most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.RestoreMostVisitedDefaults_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: ntp_tiles.mojom.TileSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UndoMostVisitedAutoRemoval
most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.UndoMostVisitedAutoRemoval_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UndoMostVisitedTileAction
most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.UndoMostVisitedTileAction_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: ntp_tiles.mojom.TileSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateMostVisitedInfo
most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.UpdateMostVisitedInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateMostVisitedTile
most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.UpdateMostVisitedTile_Params',
      packedSize: 32,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
        { name: 'new_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'new_title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.UpdateMostVisitedTile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrerenderMostVisitedTile
most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.PrerenderMostVisitedTile_Params',
      packedSize: 16,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrefetchMostVisitedTile
most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.PrefetchMostVisitedTile_Params',
      packedSize: 16,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PreconnectMostVisitedTile
most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.PreconnectMostVisitedTile_Params',
      packedSize: 16,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelPrerender
most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.CancelPrerender_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetMostVisitedExpandedState
most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.GetMostVisitedExpandedState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.GetMostVisitedExpandedState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_expanded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetMostVisitedExpandedState
most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.SetMostVisitedExpandedState_Params',
      packedSize: 16,
      fields: [
        { name: 'is_expanded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMostVisitedTilesRendered
most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.OnMostVisitedTilesRendered_Params',
      packedSize: 24,
      fields: [
        { name: 'tiles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(most_visited.mojom.MostVisitedTileSpec, false), nullable: false, minVersion: 0 },
        { name: 'time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnMostVisitedTileNavigation
most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.OnMostVisitedTileNavigation_Params',
      packedSize: 24,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedTileSpec, nullable: false, minVersion: 0 },
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'mouse_button', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'alt_key', packedOffset: 13, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ctrl_key', packedOffset: 13, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'meta_key', packedOffset: 13, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shift_key', packedOffset: 13, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
most_visited.mojom.MostVisitedPageHandlerPtr = most_visited.mojom.MostVisitedPageHandlerRemote;
most_visited.mojom.MostVisitedPageHandlerRequest = most_visited.mojom.MostVisitedPageHandlerPendingReceiver;


// Interface: MostVisitedPage
most_visited.mojom.MostVisitedPage = {};

most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      [info]);
  }

  onMostVisitedTilesAutoRemoval() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec,
      null,
      []);
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

// ParamsSpec for SetMostVisitedInfo
most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPage.SetMostVisitedInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: most_visited.mojom.MostVisitedInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMostVisitedTilesAutoRemoval
most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPage.OnMostVisitedTilesAutoRemoval_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
most_visited.mojom.MostVisitedPagePtr = most_visited.mojom.MostVisitedPageRemote;
most_visited.mojom.MostVisitedPageRequest = most_visited.mojom.MostVisitedPagePendingReceiver;

