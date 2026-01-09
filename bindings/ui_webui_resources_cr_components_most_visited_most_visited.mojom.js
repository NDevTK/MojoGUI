// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/most_visited/most_visited.mojom
// Module: most_visited.mojom

'use strict';

// Module namespace
var most_visited = most_visited || {};
most_visited.mojom = most_visited.mojom || {};


// Interface: MostVisitedPageHandlerFactory
most_visited.mojom.MostVisitedPageHandlerFactory = {};

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
      most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec.$,
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
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
most_visited.mojom.MostVisitedPageHandlerFactoryPtr = most_visited.mojom.MostVisitedPageHandlerFactoryRemote;
most_visited.mojom.MostVisitedPageHandlerFactoryRequest = most_visited.mojom.MostVisitedPageHandlerFactoryPendingReceiver;


// Interface: MostVisitedPageHandler
most_visited.mojom.MostVisitedPageHandler = {};

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
      most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec.$,
      most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec.$,
      [url, title]);
  }

  deleteMostVisitedTile(tile) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec.$,
      null,
      [tile]);
  }

  reorderMostVisitedTile(tile, new_pos) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec.$,
      null,
      [tile, new_pos]);
  }

  restoreMostVisitedDefaults(source) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec.$,
      null,
      [source]);
  }

  undoMostVisitedAutoRemoval() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec.$,
      null,
      []);
  }

  undoMostVisitedTileAction(source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec.$,
      null,
      [source]);
  }

  updateMostVisitedInfo() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec.$,
      null,
      []);
  }

  updateMostVisitedTile(tile, new_url, new_title) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec.$,
      most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec.$,
      [tile, new_url, new_title]);
  }

  prerenderMostVisitedTile(tile) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec.$,
      null,
      [tile]);
  }

  prefetchMostVisitedTile(tile) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec.$,
      null,
      [tile]);
  }

  preconnectMostVisitedTile(tile) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec.$,
      null,
      [tile]);
  }

  cancelPrerender() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec.$,
      null,
      []);
  }

  getMostVisitedExpandedState() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec.$,
      most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec.$,
      []);
  }

  setMostVisitedExpandedState(is_expanded) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec.$,
      null,
      [is_expanded]);
  }

  onMostVisitedTilesRendered(tiles, time) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec.$,
      null,
      [tiles, time]);
  }

  onMostVisitedTileNavigation(tile, index, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec.$,
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.AddMostVisitedTile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_pos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.UpdateMostVisitedTile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.GetMostVisitedExpandedState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_expanded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'is_expanded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'tiles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnMostVisitedTileNavigation
most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'most_visited.mojom.MostVisitedPageHandler.OnMostVisitedTileNavigation_Params',
      packedSize: 64,
      fields: [
        { name: 'tile', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mouse_button', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'alt_key', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ctrl_key', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'meta_key', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'shift_key', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
most_visited.mojom.MostVisitedPageHandlerPtr = most_visited.mojom.MostVisitedPageHandlerRemote;
most_visited.mojom.MostVisitedPageHandlerRequest = most_visited.mojom.MostVisitedPageHandlerPendingReceiver;


// Interface: MostVisitedPage
most_visited.mojom.MostVisitedPage = {};

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
      most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec.$,
      null,
      [info]);
  }

  onMostVisitedTilesAutoRemoval() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec.$,
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
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
most_visited.mojom.MostVisitedPagePtr = most_visited.mojom.MostVisitedPageRemote;
most_visited.mojom.MostVisitedPageRequest = most_visited.mojom.MostVisitedPagePendingReceiver;

