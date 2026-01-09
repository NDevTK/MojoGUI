// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/most_visited/most_visited.mojom
// Module: most_visited.mojom

'use strict';

// Module namespace
var most_visited = most_visited || {};
most_visited.mojom = most_visited.mojom || {};


// Struct: MostVisitedTile
most_visited.mojom.MostVisitedTile = class {
  constructor(values = {}) {
    this.title_source = values.title_source !== undefined ? values.title_source : 0;
  }
};

// Struct: MostVisitedTheme
most_visited.mojom.MostVisitedTheme = class {
  constructor(values = {}) {
    this.is_dark = values.is_dark !== undefined ? values.is_dark : false;
  }
};

// Struct: MostVisitedInfo
most_visited.mojom.MostVisitedInfo = class {
  constructor(values = {}) {
    this.tiles = values.tiles !== undefined ? values.tiles : false;
  }
};

// Interface: MostVisitedPageHandlerFactory
most_visited.mojom.MostVisitedPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'most_visited.mojom.MostVisitedPageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

most_visited.mojom.MostVisitedPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MostVisitedPageHandler
most_visited.mojom.MostVisitedPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'most_visited.mojom.MostVisitedPageHandler';
  }

  addMostVisitedTile(url, title) {
    // Method: AddMostVisitedTile
    return new Promise((resolve) => {
      // Call: AddMostVisitedTile(url, title)
      resolve({});
    });
  }

  deleteMostVisitedTile(tile) {
    // Method: DeleteMostVisitedTile
    // Call: DeleteMostVisitedTile(tile)
  }

  reorderMostVisitedTile(tile, new_pos) {
    // Method: ReorderMostVisitedTile
    // Call: ReorderMostVisitedTile(tile, new_pos)
  }

  restoreMostVisitedDefaults(source) {
    // Method: RestoreMostVisitedDefaults
    // Call: RestoreMostVisitedDefaults(source)
  }

  undoMostVisitedAutoRemoval() {
    // Method: UndoMostVisitedAutoRemoval
    // Call: UndoMostVisitedAutoRemoval()
  }

  tiles() {
    // Method: tiles
    // Call: tiles()
  }

  undoMostVisitedTileAction(source) {
    // Method: UndoMostVisitedTileAction
    // Call: UndoMostVisitedTileAction(source)
  }

  updateMostVisitedInfo() {
    // Method: UpdateMostVisitedInfo
    // Call: UpdateMostVisitedInfo()
  }

  updateMostVisitedTile(tile, new_url, new_title) {
    // Method: UpdateMostVisitedTile
    return new Promise((resolve) => {
      // Call: UpdateMostVisitedTile(tile, new_url, new_title)
      resolve({});
    });
  }

  prerenderMostVisitedTile(tile) {
    // Method: PrerenderMostVisitedTile
    // Call: PrerenderMostVisitedTile(tile)
  }

  prefetchMostVisitedTile(tile) {
    // Method: PrefetchMostVisitedTile
    // Call: PrefetchMostVisitedTile(tile)
  }

  preconnectMostVisitedTile(tile) {
    // Method: PreconnectMostVisitedTile
    // Call: PreconnectMostVisitedTile(tile)
  }

  cancelPrerender() {
    // Method: CancelPrerender
    // Call: CancelPrerender()
  }

  getMostVisitedExpandedState() {
    // Method: GetMostVisitedExpandedState
    return new Promise((resolve) => {
      // Call: GetMostVisitedExpandedState()
      resolve({});
    });
  }

  setMostVisitedExpandedState(is_expanded) {
    // Method: SetMostVisitedExpandedState
    // Call: SetMostVisitedExpandedState(is_expanded)
  }

  onMostVisitedTilesRendered(tiles, time) {
    // Method: OnMostVisitedTilesRendered
    // Call: OnMostVisitedTilesRendered(tiles, time)
  }

  onMostVisitedTileNavigation(tile, index, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    // Method: OnMostVisitedTileNavigation
    // Call: OnMostVisitedTileNavigation(tile, index, mouse_button, alt_key, ctrl_key, meta_key, shift_key)
  }

};

most_visited.mojom.MostVisitedPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MostVisitedPage
most_visited.mojom.MostVisitedPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'most_visited.mojom.MostVisitedPage';
  }

  setMostVisitedInfo(info) {
    // Method: SetMostVisitedInfo
    // Call: SetMostVisitedInfo(info)
  }

  onMostVisitedTilesAutoRemoval() {
    // Method: OnMostVisitedTilesAutoRemoval
    // Call: OnMostVisitedTilesAutoRemoval()
  }

};

most_visited.mojom.MostVisitedPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
