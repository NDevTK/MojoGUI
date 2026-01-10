// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/bookmarks/bookmarks.mojom
// Module: side_panel.mojom

'use strict';

// Module namespace
var side_panel = side_panel || {};
side_panel.mojom = side_panel.mojom || {};


// Enum: ActionSource
side_panel.mojom.ActionSource = {
  kBookmark: 0,
  kPriceTracking: 1,
};
side_panel.mojom.ActionSourceSpec = { $: mojo.internal.Enum() };

// Enum: SortOrder
side_panel.mojom.SortOrder = {
  kNewest: 0,
  kOldest: 1,
  kLastOpened: 2,
  kAlphabetical: 3,
  kReverseAlphabetical: 4,
  kCount: 5,
};
side_panel.mojom.SortOrderSpec = { $: mojo.internal.Enum() };

// Enum: ViewType
side_panel.mojom.ViewType = {
  kCompact: 0,
  kExpanded: 1,
  kCount: 2,
};
side_panel.mojom.ViewTypeSpec = { $: mojo.internal.Enum() };

// Struct: BookmarksTreeNode
side_panel.mojom.BookmarksTreeNodeSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksTreeNode',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'parent_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'children', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(side_panel.mojom.BookmarksTreeNodeSpec, false), nullable: true, minVersion: 0 },
        { name: 'date_added_$flag', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'date_added_$value', originalFieldName: 'date_added' } },
        { name: 'date_added_$value', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'date_added_$flag', originalFieldName: 'date_added' } },
        { name: 'date_last_used_$flag', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'date_last_used_$value', originalFieldName: 'date_last_used' } },
        { name: 'date_last_used_$value', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'date_last_used_$flag', originalFieldName: 'date_last_used' } },
        { name: 'unmodifiable', packedOffset: 20, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Interface: BookmarksPageHandlerFactory
side_panel.mojom.BookmarksPageHandlerFactory = {};

side_panel.mojom.BookmarksPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.mojom.BookmarksPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'side_panel.mojom.BookmarksPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.mojom.BookmarksPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new side_panel.mojom.BookmarksPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.mojom.BookmarksPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createBookmarksPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      side_panel.mojom.BookmarksPageHandlerFactory_CreateBookmarksPageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

side_panel.mojom.BookmarksPageHandlerFactory.getRemote = function() {
  let remote = new side_panel.mojom.BookmarksPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.mojom.BookmarksPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateBookmarksPageHandler
side_panel.mojom.BookmarksPageHandlerFactory_CreateBookmarksPageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandlerFactory.CreateBookmarksPageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
side_panel.mojom.BookmarksPageHandlerFactoryPtr = side_panel.mojom.BookmarksPageHandlerFactoryRemote;
side_panel.mojom.BookmarksPageHandlerFactoryRequest = side_panel.mojom.BookmarksPageHandlerFactoryPendingReceiver;


// Interface: BookmarksPageHandler
side_panel.mojom.BookmarksPageHandler = {};

side_panel.mojom.BookmarksPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.mojom.BookmarksPageHandlerRemote = class {
  static get $interfaceName() {
    return 'side_panel.mojom.BookmarksPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.mojom.BookmarksPageHandlerPendingReceiver,
      handle);
    this.$ = new side_panel.mojom.BookmarksPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.mojom.BookmarksPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bookmarkCurrentTabInFolder(folder_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      side_panel.mojom.BookmarksPageHandler_BookmarkCurrentTabInFolder_ParamsSpec,
      null,
      [folder_id]);
  }

  createFolder(folder_id, title) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      side_panel.mojom.BookmarksPageHandler_CreateFolder_ParamsSpec,
      side_panel.mojom.BookmarksPageHandler_CreateFolder_ResponseParamsSpec,
      [folder_id, title]);
  }

  dropBookmarks(folder_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      side_panel.mojom.BookmarksPageHandler_DropBookmarks_ParamsSpec,
      null,
      [folder_id]);
  }

  executeEditCommand(node_ids, source) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteEditCommand_ParamsSpec,
      null,
      [node_ids, source]);
  }

  executeMoveCommand(node_ids, source) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteMoveCommand_ParamsSpec,
      null,
      [node_ids, source]);
  }

  executeOpenInNewTabCommand(side_panel_ids, source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabCommand_ParamsSpec,
      null,
      [side_panel_ids, source]);
  }

  executeOpenInNewWindowCommand(side_panel_ids, source) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewWindowCommand_ParamsSpec,
      null,
      [side_panel_ids, source]);
  }

  executeOpenInIncognitoWindowCommand(side_panel_ids, source) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInIncognitoWindowCommand_ParamsSpec,
      null,
      [side_panel_ids, source]);
  }

  executeOpenInNewTabGroupCommand(side_panel_ids, source) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_ParamsSpec,
      null,
      [side_panel_ids, source]);
  }

  executeOpenInSplitViewCommand(node_ids, source) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInSplitViewCommand_ParamsSpec,
      null,
      [node_ids, source]);
  }

  executeAddToBookmarksBarCommand(node_id, source) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_ParamsSpec,
      null,
      [node_id, source]);
  }

  executeRemoveFromBookmarksBarCommand(node_id, source) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_ParamsSpec,
      null,
      [node_id, source]);
  }

  executeDeleteCommand(node_ids, source) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteDeleteCommand_ParamsSpec,
      null,
      [node_ids, source]);
  }

  openBookmark(node_id, parent_folder_depth, click_modifiers, source) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      side_panel.mojom.BookmarksPageHandler_OpenBookmark_ParamsSpec,
      null,
      [node_id, parent_folder_depth, click_modifiers, source]);
  }

  undo() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      side_panel.mojom.BookmarksPageHandler_Undo_ParamsSpec,
      null,
      []);
  }

  renameBookmark(node_id, new_title) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      side_panel.mojom.BookmarksPageHandler_RenameBookmark_ParamsSpec,
      null,
      [node_id, new_title]);
  }

  moveBookmark(node_id, folder_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      side_panel.mojom.BookmarksPageHandler_MoveBookmark_ParamsSpec,
      null,
      [node_id, folder_id]);
  }

  removeBookmarks(node_ids) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ParamsSpec,
      null,
      [node_ids]);
  }

  setSortOrder(sort_order) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      side_panel.mojom.BookmarksPageHandler_SetSortOrder_ParamsSpec,
      null,
      [sort_order]);
  }

  setViewType(view_type) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      side_panel.mojom.BookmarksPageHandler_SetViewType_ParamsSpec,
      null,
      [view_type]);
  }

  showContextMenu(id, point, source) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ShowContextMenu_ParamsSpec,
      null,
      [id, point, source]);
  }

  showUI() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ShowUI_ParamsSpec,
      null,
      []);
  }

  getAllBookmarks() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ParamsSpec,
      side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ResponseParamsSpec,
      []);
  }

};

side_panel.mojom.BookmarksPageHandler.getRemote = function() {
  let remote = new side_panel.mojom.BookmarksPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.mojom.BookmarksPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for BookmarkCurrentTabInFolder
side_panel.mojom.BookmarksPageHandler_BookmarkCurrentTabInFolder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.BookmarkCurrentTabInFolder_Params',
      packedSize: 16,
      fields: [
        { name: 'folder_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateFolder
side_panel.mojom.BookmarksPageHandler_CreateFolder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.CreateFolder_Params',
      packedSize: 24,
      fields: [
        { name: 'folder_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

side_panel.mojom.BookmarksPageHandler_CreateFolder_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.CreateFolder_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'new_folder_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DropBookmarks
side_panel.mojom.BookmarksPageHandler_DropBookmarks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.DropBookmarks_Params',
      packedSize: 16,
      fields: [
        { name: 'folder_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExecuteEditCommand
side_panel.mojom.BookmarksPageHandler_ExecuteEditCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.ExecuteEditCommand_Params',
      packedSize: 24,
      fields: [
        { name: 'node_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: side_panel.mojom.ActionSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExecuteMoveCommand
side_panel.mojom.BookmarksPageHandler_ExecuteMoveCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.ExecuteMoveCommand_Params',
      packedSize: 24,
      fields: [
        { name: 'node_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: side_panel.mojom.ActionSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExecuteOpenInNewTabCommand
side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.ExecuteOpenInNewTabCommand_Params',
      packedSize: 24,
      fields: [
        { name: 'side_panel_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: side_panel.mojom.ActionSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExecuteOpenInNewWindowCommand
side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewWindowCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.ExecuteOpenInNewWindowCommand_Params',
      packedSize: 24,
      fields: [
        { name: 'side_panel_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: side_panel.mojom.ActionSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExecuteOpenInIncognitoWindowCommand
side_panel.mojom.BookmarksPageHandler_ExecuteOpenInIncognitoWindowCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.ExecuteOpenInIncognitoWindowCommand_Params',
      packedSize: 24,
      fields: [
        { name: 'side_panel_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: side_panel.mojom.ActionSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExecuteOpenInNewTabGroupCommand
side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.ExecuteOpenInNewTabGroupCommand_Params',
      packedSize: 24,
      fields: [
        { name: 'side_panel_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: side_panel.mojom.ActionSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExecuteOpenInSplitViewCommand
side_panel.mojom.BookmarksPageHandler_ExecuteOpenInSplitViewCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.ExecuteOpenInSplitViewCommand_Params',
      packedSize: 24,
      fields: [
        { name: 'node_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: side_panel.mojom.ActionSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExecuteAddToBookmarksBarCommand
side_panel.mojom.BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.ExecuteAddToBookmarksBarCommand_Params',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: side_panel.mojom.ActionSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExecuteRemoveFromBookmarksBarCommand
side_panel.mojom.BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.ExecuteRemoveFromBookmarksBarCommand_Params',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: side_panel.mojom.ActionSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExecuteDeleteCommand
side_panel.mojom.BookmarksPageHandler_ExecuteDeleteCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.ExecuteDeleteCommand_Params',
      packedSize: 24,
      fields: [
        { name: 'node_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: side_panel.mojom.ActionSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OpenBookmark
side_panel.mojom.BookmarksPageHandler_OpenBookmark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.OpenBookmark_Params',
      packedSize: 32,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'parent_folder_depth', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'click_modifiers', packedOffset: 16, packedBitOffset: 0, type: ui.mojom.ClickModifiersSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 12, packedBitOffset: 0, type: side_panel.mojom.ActionSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Undo
side_panel.mojom.BookmarksPageHandler_Undo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.Undo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RenameBookmark
side_panel.mojom.BookmarksPageHandler_RenameBookmark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.RenameBookmark_Params',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'new_title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for MoveBookmark
side_panel.mojom.BookmarksPageHandler_MoveBookmark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.MoveBookmark_Params',
      packedSize: 24,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'folder_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RemoveBookmarks
side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.RemoveBookmarks_Params',
      packedSize: 16,
      fields: [
        { name: 'node_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSortOrder
side_panel.mojom.BookmarksPageHandler_SetSortOrder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.SetSortOrder_Params',
      packedSize: 16,
      fields: [
        { name: 'sort_order', packedOffset: 0, packedBitOffset: 0, type: side_panel.mojom.SortOrderSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetViewType
side_panel.mojom.BookmarksPageHandler_SetViewType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.SetViewType_Params',
      packedSize: 16,
      fields: [
        { name: 'view_type', packedOffset: 0, packedBitOffset: 0, type: side_panel.mojom.ViewTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowContextMenu
side_panel.mojom.BookmarksPageHandler_ShowContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.ShowContextMenu_Params',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: side_panel.mojom.ActionSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ShowUI
side_panel.mojom.BookmarksPageHandler_ShowUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.ShowUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetAllBookmarks
side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.GetAllBookmarks_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPageHandler.GetAllBookmarks_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'nodes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(side_panel.mojom.BookmarksTreeNodeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
side_panel.mojom.BookmarksPageHandlerPtr = side_panel.mojom.BookmarksPageHandlerRemote;
side_panel.mojom.BookmarksPageHandlerRequest = side_panel.mojom.BookmarksPageHandlerPendingReceiver;


// Interface: BookmarksPage
side_panel.mojom.BookmarksPage = {};

side_panel.mojom.BookmarksPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.mojom.BookmarksPageRemote = class {
  static get $interfaceName() {
    return 'side_panel.mojom.BookmarksPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.mojom.BookmarksPagePendingReceiver,
      handle);
    this.$ = new side_panel.mojom.BookmarksPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.mojom.BookmarksPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBookmarkNodeAdded(node) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      side_panel.mojom.BookmarksPage_OnBookmarkNodeAdded_ParamsSpec,
      null,
      [node]);
  }

  onBookmarkNodesRemoved(node_ids) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      side_panel.mojom.BookmarksPage_OnBookmarkNodesRemoved_ParamsSpec,
      null,
      [node_ids]);
  }

  onBookmarkParentFolderChildrenReordered(folder_id, children_ordered_ids) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      side_panel.mojom.BookmarksPage_OnBookmarkParentFolderChildrenReordered_ParamsSpec,
      null,
      [folder_id, children_ordered_ids]);
  }

  onBookmarkNodeMoved(old_parent_index, old_node_index, new_parent_index, new_node_index) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      side_panel.mojom.BookmarksPage_OnBookmarkNodeMoved_ParamsSpec,
      null,
      [old_parent_index, old_node_index, new_parent_index, new_node_index]);
  }

  onBookmarkNodeChanged(id, new_title, new_url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      side_panel.mojom.BookmarksPage_OnBookmarkNodeChanged_ParamsSpec,
      null,
      [id, new_title, new_url]);
  }

};

side_panel.mojom.BookmarksPage.getRemote = function() {
  let remote = new side_panel.mojom.BookmarksPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.mojom.BookmarksPage',
    'context');
  return remote.$;
};

// ParamsSpec for OnBookmarkNodeAdded
side_panel.mojom.BookmarksPage_OnBookmarkNodeAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPage.OnBookmarkNodeAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'node', packedOffset: 0, packedBitOffset: 0, type: side_panel.mojom.BookmarksTreeNodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBookmarkNodesRemoved
side_panel.mojom.BookmarksPage_OnBookmarkNodesRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPage.OnBookmarkNodesRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'node_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBookmarkParentFolderChildrenReordered
side_panel.mojom.BookmarksPage_OnBookmarkParentFolderChildrenReordered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPage.OnBookmarkParentFolderChildrenReordered_Params',
      packedSize: 24,
      fields: [
        { name: 'folder_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'children_ordered_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnBookmarkNodeMoved
side_panel.mojom.BookmarksPage_OnBookmarkNodeMoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPage.OnBookmarkNodeMoved_Params',
      packedSize: 32,
      fields: [
        { name: 'old_parent_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'old_node_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'new_parent_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_node_index', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnBookmarkNodeChanged
side_panel.mojom.BookmarksPage_OnBookmarkNodeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.mojom.BookmarksPage.OnBookmarkNodeChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
side_panel.mojom.BookmarksPagePtr = side_panel.mojom.BookmarksPageRemote;
side_panel.mojom.BookmarksPageRequest = side_panel.mojom.BookmarksPagePendingReceiver;

