// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/bookmarks/bookmarks.mojom
// Module: side_panel.mojom

'use strict';

// Module namespace
var side_panel = side_panel || {};
side_panel.mojom = side_panel.mojom || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};

side_panel.mojom.ActionSourceSpec = { $: mojo.internal.Enum() };
side_panel.mojom.SortOrderSpec = { $: mojo.internal.Enum() };
side_panel.mojom.ViewTypeSpec = { $: mojo.internal.Enum() };
side_panel.mojom.BookmarksTreeNodeSpec = { $: {} };
side_panel.mojom.BookmarksPageHandlerFactory = {};
side_panel.mojom.BookmarksPageHandlerFactory.$interfaceName = 'side_panel.mojom.BookmarksPageHandlerFactory';
side_panel.mojom.BookmarksPageHandlerFactory_CreateBookmarksPageHandler_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler = {};
side_panel.mojom.BookmarksPageHandler.$interfaceName = 'side_panel.mojom.BookmarksPageHandler';
side_panel.mojom.BookmarksPageHandler_BookmarkCurrentTabInFolder_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_CreateFolder_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_CreateFolder_ResponseParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_DropBookmarks_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_DropBookmarks_ResponseParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_ExecuteEditCommand_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_ExecuteMoveCommand_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabCommand_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewWindowCommand_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_ExecuteOpenInIncognitoWindowCommand_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_ExecuteOpenInSplitViewCommand_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_ExecuteDeleteCommand_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_OpenBookmark_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_Undo_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_RenameBookmark_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_MoveBookmark_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ResponseParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_SetSortOrder_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_SetViewType_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_ShowContextMenu_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_ShowUI_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ResponseParamsSpec = { $: {} };
side_panel.mojom.BookmarksPage = {};
side_panel.mojom.BookmarksPage.$interfaceName = 'side_panel.mojom.BookmarksPage';
side_panel.mojom.BookmarksPage_OnBookmarkNodeAdded_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPage_OnBookmarkNodesRemoved_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPage_OnBookmarkParentFolderChildrenReordered_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPage_OnBookmarkNodeMoved_ParamsSpec = { $: {} };
side_panel.mojom.BookmarksPage_OnBookmarkNodeChanged_ParamsSpec = { $: {} };

// Enum: ActionSource
side_panel.mojom.ActionSource = {
  kBookmark: 0,
  kPriceTracking: 1,
};

// Enum: SortOrder
side_panel.mojom.SortOrder = {
  kNewest: 0,
  kOldest: 1,
  kLastOpened: 2,
  kAlphabetical: 3,
  kReverseAlphabetical: 4,
  kCount: 5,
};

// Enum: ViewType
side_panel.mojom.ViewType = {
  kCompact: 0,
  kExpanded: 1,
  kCount: 2,
};

// Struct: BookmarksTreeNode
mojo.internal.Struct(
    side_panel.mojom.BookmarksTreeNodeSpec, 'side_panel.mojom.BookmarksTreeNode', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parent_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('title', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('children', 40, 0, mojo.internal.Array(side_panel.mojom.BookmarksTreeNodeSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('date_added_$flag', 48, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'date_added_$value', originalFieldName: 'date_added' }),
      mojo.internal.StructField('date_added_$value', 56, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'date_added_$flag', originalFieldName: 'date_added' }),
      mojo.internal.StructField('date_last_used_$flag', 64, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'date_last_used_$value', originalFieldName: 'date_last_used' }),
      mojo.internal.StructField('date_last_used_$value', 72, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'date_last_used_$flag', originalFieldName: 'date_last_used' }),
      mojo.internal.StructField('unmodifiable', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Interface: BookmarksPageHandlerFactory
mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandlerFactory_CreateBookmarksPageHandler_ParamsSpec, 'side_panel.mojom.BookmarksPageHandlerFactory_CreateBookmarksPageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(side_panel.mojom.BookmarksPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(side_panel.mojom.BookmarksPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [page, handler],
      false);
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

side_panel.mojom.BookmarksPageHandlerFactoryPtr = side_panel.mojom.BookmarksPageHandlerFactoryRemote;
side_panel.mojom.BookmarksPageHandlerFactoryRequest = side_panel.mojom.BookmarksPageHandlerFactoryPendingReceiver;


// Interface: BookmarksPageHandler
mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_BookmarkCurrentTabInFolder_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_BookmarkCurrentTabInFolder_Params', [
      mojo.internal.StructField('folder_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_CreateFolder_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_CreateFolder_Params', [
      mojo.internal.StructField('folder_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_CreateFolder_ResponseParamsSpec, 'side_panel.mojom.BookmarksPageHandler_CreateFolder_ResponseParams', [
      mojo.internal.StructField('new_folder_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_DropBookmarks_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_DropBookmarks_Params', [
      mojo.internal.StructField('folder_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_DropBookmarks_ResponseParamsSpec, 'side_panel.mojom.BookmarksPageHandler_DropBookmarks_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_ExecuteEditCommand_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_ExecuteEditCommand_Params', [
      mojo.internal.StructField('node_ids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, side_panel.mojom.ActionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_ExecuteMoveCommand_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_ExecuteMoveCommand_Params', [
      mojo.internal.StructField('node_ids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, side_panel.mojom.ActionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabCommand_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabCommand_Params', [
      mojo.internal.StructField('side_panel_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, side_panel.mojom.ActionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewWindowCommand_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewWindowCommand_Params', [
      mojo.internal.StructField('side_panel_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, side_panel.mojom.ActionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_ExecuteOpenInIncognitoWindowCommand_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_ExecuteOpenInIncognitoWindowCommand_Params', [
      mojo.internal.StructField('side_panel_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, side_panel.mojom.ActionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_Params', [
      mojo.internal.StructField('side_panel_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, side_panel.mojom.ActionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_ExecuteOpenInSplitViewCommand_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_ExecuteOpenInSplitViewCommand_Params', [
      mojo.internal.StructField('node_ids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, side_panel.mojom.ActionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_Params', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, side_panel.mojom.ActionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_Params', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, side_panel.mojom.ActionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_ExecuteDeleteCommand_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_ExecuteDeleteCommand_Params', [
      mojo.internal.StructField('node_ids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, side_panel.mojom.ActionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_OpenBookmark_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_OpenBookmark_Params', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('parent_folder_depth', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('click_modifiers', 16, 0, ui.mojom.ClickModifiersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 24, 0, side_panel.mojom.ActionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_Undo_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_Undo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_RenameBookmark_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_RenameBookmark_Params', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('new_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_MoveBookmark_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_MoveBookmark_Params', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('folder_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_Params', [
      mojo.internal.StructField('node_ids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ResponseParamsSpec, 'side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_SetSortOrder_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_SetSortOrder_Params', [
      mojo.internal.StructField('sort_order', 0, 0, side_panel.mojom.SortOrderSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_SetViewType_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_SetViewType_Params', [
      mojo.internal.StructField('view_type', 0, 0, side_panel.mojom.ViewTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_ShowContextMenu_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_ShowContextMenu_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('point', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 16, 0, side_panel.mojom.ActionSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_ShowUI_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ParamsSpec, 'side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ResponseParamsSpec, 'side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ResponseParams', [
      mojo.internal.StructField('nodes', 0, 0, mojo.internal.Array(side_panel.mojom.BookmarksTreeNodeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [folder_id],
      false);
  }

  createFolder(folder_id, title) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      side_panel.mojom.BookmarksPageHandler_CreateFolder_ParamsSpec,
      side_panel.mojom.BookmarksPageHandler_CreateFolder_ResponseParamsSpec,
      [folder_id, title],
      false);
  }

  dropBookmarks(folder_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      side_panel.mojom.BookmarksPageHandler_DropBookmarks_ParamsSpec,
      side_panel.mojom.BookmarksPageHandler_DropBookmarks_ResponseParamsSpec,
      [folder_id],
      false);
  }

  executeEditCommand(node_ids, source) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteEditCommand_ParamsSpec,
      null,
      [node_ids, source],
      false);
  }

  executeMoveCommand(node_ids, source) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteMoveCommand_ParamsSpec,
      null,
      [node_ids, source],
      false);
  }

  executeOpenInNewTabCommand(side_panel_ids, source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabCommand_ParamsSpec,
      null,
      [side_panel_ids, source],
      false);
  }

  executeOpenInNewWindowCommand(side_panel_ids, source) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewWindowCommand_ParamsSpec,
      null,
      [side_panel_ids, source],
      false);
  }

  executeOpenInIncognitoWindowCommand(side_panel_ids, source) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInIncognitoWindowCommand_ParamsSpec,
      null,
      [side_panel_ids, source],
      false);
  }

  executeOpenInNewTabGroupCommand(side_panel_ids, source) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_ParamsSpec,
      null,
      [side_panel_ids, source],
      false);
  }

  executeOpenInSplitViewCommand(node_ids, source) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInSplitViewCommand_ParamsSpec,
      null,
      [node_ids, source],
      false);
  }

  executeAddToBookmarksBarCommand(node_id, source) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_ParamsSpec,
      null,
      [node_id, source],
      false);
  }

  executeRemoveFromBookmarksBarCommand(node_id, source) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_ParamsSpec,
      null,
      [node_id, source],
      false);
  }

  executeDeleteCommand(node_ids, source) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteDeleteCommand_ParamsSpec,
      null,
      [node_ids, source],
      false);
  }

  openBookmark(node_id, parent_folder_depth, click_modifiers, source) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      side_panel.mojom.BookmarksPageHandler_OpenBookmark_ParamsSpec,
      null,
      [node_id, parent_folder_depth, click_modifiers, source],
      false);
  }

  undo() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      side_panel.mojom.BookmarksPageHandler_Undo_ParamsSpec,
      null,
      [],
      false);
  }

  renameBookmark(node_id, new_title) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      side_panel.mojom.BookmarksPageHandler_RenameBookmark_ParamsSpec,
      null,
      [node_id, new_title],
      false);
  }

  moveBookmark(node_id, folder_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      side_panel.mojom.BookmarksPageHandler_MoveBookmark_ParamsSpec,
      null,
      [node_id, folder_id],
      false);
  }

  removeBookmarks(node_ids) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ParamsSpec,
      side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ResponseParamsSpec,
      [node_ids],
      false);
  }

  setSortOrder(sort_order) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      side_panel.mojom.BookmarksPageHandler_SetSortOrder_ParamsSpec,
      null,
      [sort_order],
      false);
  }

  setViewType(view_type) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      side_panel.mojom.BookmarksPageHandler_SetViewType_ParamsSpec,
      null,
      [view_type],
      false);
  }

  showContextMenu(id, point, source) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ShowContextMenu_ParamsSpec,
      null,
      [id, point, source],
      false);
  }

  showUI() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      side_panel.mojom.BookmarksPageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  getAllBookmarks() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ParamsSpec,
      side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ResponseParamsSpec,
      [],
      false);
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

side_panel.mojom.BookmarksPageHandlerPtr = side_panel.mojom.BookmarksPageHandlerRemote;
side_panel.mojom.BookmarksPageHandlerRequest = side_panel.mojom.BookmarksPageHandlerPendingReceiver;


// Interface: BookmarksPage
mojo.internal.Struct(
    side_panel.mojom.BookmarksPage_OnBookmarkNodeAdded_ParamsSpec, 'side_panel.mojom.BookmarksPage_OnBookmarkNodeAdded_Params', [
      mojo.internal.StructField('node', 0, 0, side_panel.mojom.BookmarksTreeNodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPage_OnBookmarkNodesRemoved_ParamsSpec, 'side_panel.mojom.BookmarksPage_OnBookmarkNodesRemoved_Params', [
      mojo.internal.StructField('node_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPage_OnBookmarkParentFolderChildrenReordered_ParamsSpec, 'side_panel.mojom.BookmarksPage_OnBookmarkParentFolderChildrenReordered_Params', [
      mojo.internal.StructField('folder_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('children_ordered_ids', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPage_OnBookmarkNodeMoved_ParamsSpec, 'side_panel.mojom.BookmarksPage_OnBookmarkNodeMoved_Params', [
      mojo.internal.StructField('old_parent_index', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('old_node_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('new_parent_index', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_node_index', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    side_panel.mojom.BookmarksPage_OnBookmarkNodeChanged_ParamsSpec, 'side_panel.mojom.BookmarksPage_OnBookmarkNodeChanged_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [node],
      false);
  }

  onBookmarkNodesRemoved(node_ids) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      side_panel.mojom.BookmarksPage_OnBookmarkNodesRemoved_ParamsSpec,
      null,
      [node_ids],
      false);
  }

  onBookmarkParentFolderChildrenReordered(folder_id, children_ordered_ids) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      side_panel.mojom.BookmarksPage_OnBookmarkParentFolderChildrenReordered_ParamsSpec,
      null,
      [folder_id, children_ordered_ids],
      false);
  }

  onBookmarkNodeMoved(old_parent_index, old_node_index, new_parent_index, new_node_index) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      side_panel.mojom.BookmarksPage_OnBookmarkNodeMoved_ParamsSpec,
      null,
      [old_parent_index, old_node_index, new_parent_index, new_node_index],
      false);
  }

  onBookmarkNodeChanged(id, new_title, new_url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      side_panel.mojom.BookmarksPage_OnBookmarkNodeChanged_ParamsSpec,
      null,
      [id, new_title, new_url],
      false);
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

side_panel.mojom.BookmarksPagePtr = side_panel.mojom.BookmarksPageRemote;
side_panel.mojom.BookmarksPageRequest = side_panel.mojom.BookmarksPagePendingReceiver;

