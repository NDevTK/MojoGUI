// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/bookmarks/bookmarks.mojom
// Module: side_panel.mojom

// Module namespace
var side_panel = side_panel || {};
side_panel.mojom = side_panel.mojom || {};
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
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('children', 32, 0, mojo.internal.Array(side_panel.mojom.BookmarksTreeNodeSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('date_added_$value', 40, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'date_added_$flag', originalFieldName: 'date_added' }),
      mojo.internal.StructField('date_last_used_$value', 48, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'date_last_used_$flag', originalFieldName: 'date_last_used' }),
      mojo.internal.StructField('index', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('date_added_$flag', 60, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'date_added_$value', originalFieldName: 'date_added' }),
      mojo.internal.StructField('date_last_used_$flag', 60, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'date_last_used_$value', originalFieldName: 'date_last_used' }),
      mojo.internal.StructField('unmodifiable', 60, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

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
  createBookmarksPageHandler(page, handler) {
    return this.$.createBookmarksPageHandler(page, handler);
  }
};

side_panel.mojom.BookmarksPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BookmarksPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createBookmarksPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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

side_panel.mojom.BookmarksPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BookmarksPageHandlerFactory', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandlerFactory_CreateBookmarksPageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandlerFactory_CreateBookmarksPageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createBookmarksPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

side_panel.mojom.BookmarksPageHandlerFactoryReceiver = side_panel.mojom.BookmarksPageHandlerFactoryReceiver;

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
      mojo.internal.StructField('click_modifiers', 8, 0, ui.mojom.ClickModifiersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 16, 0, side_panel.mojom.ActionSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('parent_folder_depth', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
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
  bookmarkCurrentTabInFolder(folder_id) {
    return this.$.bookmarkCurrentTabInFolder(folder_id);
  }
  createFolder(folder_id, title) {
    return this.$.createFolder(folder_id, title);
  }
  dropBookmarks(folder_id) {
    return this.$.dropBookmarks(folder_id);
  }
  executeEditCommand(node_ids, source) {
    return this.$.executeEditCommand(node_ids, source);
  }
  executeMoveCommand(node_ids, source) {
    return this.$.executeMoveCommand(node_ids, source);
  }
  executeOpenInNewTabCommand(side_panel_ids, source) {
    return this.$.executeOpenInNewTabCommand(side_panel_ids, source);
  }
  executeOpenInNewWindowCommand(side_panel_ids, source) {
    return this.$.executeOpenInNewWindowCommand(side_panel_ids, source);
  }
  executeOpenInIncognitoWindowCommand(side_panel_ids, source) {
    return this.$.executeOpenInIncognitoWindowCommand(side_panel_ids, source);
  }
  executeOpenInNewTabGroupCommand(side_panel_ids, source) {
    return this.$.executeOpenInNewTabGroupCommand(side_panel_ids, source);
  }
  executeOpenInSplitViewCommand(node_ids, source) {
    return this.$.executeOpenInSplitViewCommand(node_ids, source);
  }
  executeAddToBookmarksBarCommand(node_id, source) {
    return this.$.executeAddToBookmarksBarCommand(node_id, source);
  }
  executeRemoveFromBookmarksBarCommand(node_id, source) {
    return this.$.executeRemoveFromBookmarksBarCommand(node_id, source);
  }
  executeDeleteCommand(node_ids, source) {
    return this.$.executeDeleteCommand(node_ids, source);
  }
  openBookmark(node_id, parent_folder_depth, click_modifiers, source) {
    return this.$.openBookmark(node_id, parent_folder_depth, click_modifiers, source);
  }
  undo() {
    return this.$.undo();
  }
  renameBookmark(node_id, new_title) {
    return this.$.renameBookmark(node_id, new_title);
  }
  moveBookmark(node_id, folder_id) {
    return this.$.moveBookmark(node_id, folder_id);
  }
  removeBookmarks(node_ids) {
    return this.$.removeBookmarks(node_ids);
  }
  setSortOrder(sort_order) {
    return this.$.setSortOrder(sort_order);
  }
  setViewType(view_type) {
    return this.$.setViewType(view_type);
  }
  showContextMenu(id, point, source) {
    return this.$.showContextMenu(id, point, source);
  }
  showUI() {
    return this.$.showUI();
  }
  getAllBookmarks() {
    return this.$.getAllBookmarks();
  }
};

side_panel.mojom.BookmarksPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BookmarksPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  bookmarkCurrentTabInFolder(folder_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      side_panel.mojom.BookmarksPageHandler_BookmarkCurrentTabInFolder_ParamsSpec,
      null,
      [folder_id],
      false);
  }

  createFolder(folder_id, title) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      side_panel.mojom.BookmarksPageHandler_CreateFolder_ParamsSpec,
      side_panel.mojom.BookmarksPageHandler_CreateFolder_ResponseParamsSpec,
      [folder_id, title],
      false);
  }

  dropBookmarks(folder_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      side_panel.mojom.BookmarksPageHandler_DropBookmarks_ParamsSpec,
      side_panel.mojom.BookmarksPageHandler_DropBookmarks_ResponseParamsSpec,
      [folder_id],
      false);
  }

  executeEditCommand(node_ids, source) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteEditCommand_ParamsSpec,
      null,
      [node_ids, source],
      false);
  }

  executeMoveCommand(node_ids, source) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteMoveCommand_ParamsSpec,
      null,
      [node_ids, source],
      false);
  }

  executeOpenInNewTabCommand(side_panel_ids, source) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabCommand_ParamsSpec,
      null,
      [side_panel_ids, source],
      false);
  }

  executeOpenInNewWindowCommand(side_panel_ids, source) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewWindowCommand_ParamsSpec,
      null,
      [side_panel_ids, source],
      false);
  }

  executeOpenInIncognitoWindowCommand(side_panel_ids, source) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInIncognitoWindowCommand_ParamsSpec,
      null,
      [side_panel_ids, source],
      false);
  }

  executeOpenInNewTabGroupCommand(side_panel_ids, source) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_ParamsSpec,
      null,
      [side_panel_ids, source],
      false);
  }

  executeOpenInSplitViewCommand(node_ids, source) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteOpenInSplitViewCommand_ParamsSpec,
      null,
      [node_ids, source],
      false);
  }

  executeAddToBookmarksBarCommand(node_id, source) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_ParamsSpec,
      null,
      [node_id, source],
      false);
  }

  executeRemoveFromBookmarksBarCommand(node_id, source) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_ParamsSpec,
      null,
      [node_id, source],
      false);
  }

  executeDeleteCommand(node_ids, source) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      side_panel.mojom.BookmarksPageHandler_ExecuteDeleteCommand_ParamsSpec,
      null,
      [node_ids, source],
      false);
  }

  openBookmark(node_id, parent_folder_depth, click_modifiers, source) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      side_panel.mojom.BookmarksPageHandler_OpenBookmark_ParamsSpec,
      null,
      [node_id, parent_folder_depth, click_modifiers, source],
      false);
  }

  undo() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      side_panel.mojom.BookmarksPageHandler_Undo_ParamsSpec,
      null,
      [],
      false);
  }

  renameBookmark(node_id, new_title) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      side_panel.mojom.BookmarksPageHandler_RenameBookmark_ParamsSpec,
      null,
      [node_id, new_title],
      false);
  }

  moveBookmark(node_id, folder_id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      side_panel.mojom.BookmarksPageHandler_MoveBookmark_ParamsSpec,
      null,
      [node_id, folder_id],
      false);
  }

  removeBookmarks(node_ids) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ParamsSpec,
      side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ResponseParamsSpec,
      [node_ids],
      false);
  }

  setSortOrder(sort_order) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      side_panel.mojom.BookmarksPageHandler_SetSortOrder_ParamsSpec,
      null,
      [sort_order],
      false);
  }

  setViewType(view_type) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      side_panel.mojom.BookmarksPageHandler_SetViewType_ParamsSpec,
      null,
      [view_type],
      false);
  }

  showContextMenu(id, point, source) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      side_panel.mojom.BookmarksPageHandler_ShowContextMenu_ParamsSpec,
      null,
      [id, point, source],
      false);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      side_panel.mojom.BookmarksPageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  getAllBookmarks() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
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

side_panel.mojom.BookmarksPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BookmarksPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_BookmarkCurrentTabInFolder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_CreateFolder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_DropBookmarks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteEditCommand_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteMoveCommand_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabCommand_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewWindowCommand_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInIncognitoWindowCommand_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInSplitViewCommand_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteDeleteCommand_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_OpenBookmark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_Undo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_RenameBookmark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_MoveBookmark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_SetSortOrder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_SetViewType_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ShowContextMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ShowUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_BookmarkCurrentTabInFolder_ParamsSpec.$.structSpec);
          const result = this.impl.bookmarkCurrentTabInFolder(params.folder_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_CreateFolder_ParamsSpec.$.structSpec);
          const result = this.impl.createFolder(params.folder_id, params.title);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.BookmarksPageHandler_CreateFolder_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_DropBookmarks_ParamsSpec.$.structSpec);
          const result = this.impl.dropBookmarks(params.folder_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.BookmarksPageHandler_DropBookmarks_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteEditCommand_ParamsSpec.$.structSpec);
          const result = this.impl.executeEditCommand(params.node_ids, params.source);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteMoveCommand_ParamsSpec.$.structSpec);
          const result = this.impl.executeMoveCommand(params.node_ids, params.source);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabCommand_ParamsSpec.$.structSpec);
          const result = this.impl.executeOpenInNewTabCommand(params.side_panel_ids, params.source);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewWindowCommand_ParamsSpec.$.structSpec);
          const result = this.impl.executeOpenInNewWindowCommand(params.side_panel_ids, params.source);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInIncognitoWindowCommand_ParamsSpec.$.structSpec);
          const result = this.impl.executeOpenInIncognitoWindowCommand(params.side_panel_ids, params.source);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_ParamsSpec.$.structSpec);
          const result = this.impl.executeOpenInNewTabGroupCommand(params.side_panel_ids, params.source);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInSplitViewCommand_ParamsSpec.$.structSpec);
          const result = this.impl.executeOpenInSplitViewCommand(params.node_ids, params.source);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_ParamsSpec.$.structSpec);
          const result = this.impl.executeAddToBookmarksBarCommand(params.node_id, params.source);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_ParamsSpec.$.structSpec);
          const result = this.impl.executeRemoveFromBookmarksBarCommand(params.node_id, params.source);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteDeleteCommand_ParamsSpec.$.structSpec);
          const result = this.impl.executeDeleteCommand(params.node_ids, params.source);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_OpenBookmark_ParamsSpec.$.structSpec);
          const result = this.impl.openBookmark(params.node_id, params.parent_folder_depth, params.click_modifiers, params.source);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_Undo_ParamsSpec.$.structSpec);
          const result = this.impl.undo();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_RenameBookmark_ParamsSpec.$.structSpec);
          const result = this.impl.renameBookmark(params.node_id, params.new_title);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_MoveBookmark_ParamsSpec.$.structSpec);
          const result = this.impl.moveBookmark(params.node_id, params.folder_id);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ParamsSpec.$.structSpec);
          const result = this.impl.removeBookmarks(params.node_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_SetSortOrder_ParamsSpec.$.structSpec);
          const result = this.impl.setSortOrder(params.sort_order);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_SetViewType_ParamsSpec.$.structSpec);
          const result = this.impl.setViewType(params.view_type);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ShowContextMenu_ParamsSpec.$.structSpec);
          const result = this.impl.showContextMenu(params.id, params.point, params.source);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ShowUI_ParamsSpec.$.structSpec);
          const result = this.impl.showUI();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ParamsSpec.$.structSpec);
          const result = this.impl.getAllBookmarks();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

side_panel.mojom.BookmarksPageHandlerReceiver = side_panel.mojom.BookmarksPageHandlerReceiver;

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
      mojo.internal.StructField('new_parent_index', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('old_node_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('new_node_index', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

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
  onBookmarkNodeAdded(node) {
    return this.$.onBookmarkNodeAdded(node);
  }
  onBookmarkNodesRemoved(node_ids) {
    return this.$.onBookmarkNodesRemoved(node_ids);
  }
  onBookmarkParentFolderChildrenReordered(folder_id, children_ordered_ids) {
    return this.$.onBookmarkParentFolderChildrenReordered(folder_id, children_ordered_ids);
  }
  onBookmarkNodeMoved(old_parent_index, old_node_index, new_parent_index, new_node_index) {
    return this.$.onBookmarkNodeMoved(old_parent_index, old_node_index, new_parent_index, new_node_index);
  }
  onBookmarkNodeChanged(id, new_title, new_url) {
    return this.$.onBookmarkNodeChanged(id, new_title, new_url);
  }
};

side_panel.mojom.BookmarksPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BookmarksPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onBookmarkNodeAdded(node) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      side_panel.mojom.BookmarksPage_OnBookmarkNodeAdded_ParamsSpec,
      null,
      [node],
      false);
  }

  onBookmarkNodesRemoved(node_ids) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      side_panel.mojom.BookmarksPage_OnBookmarkNodesRemoved_ParamsSpec,
      null,
      [node_ids],
      false);
  }

  onBookmarkParentFolderChildrenReordered(folder_id, children_ordered_ids) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      side_panel.mojom.BookmarksPage_OnBookmarkParentFolderChildrenReordered_ParamsSpec,
      null,
      [folder_id, children_ordered_ids],
      false);
  }

  onBookmarkNodeMoved(old_parent_index, old_node_index, new_parent_index, new_node_index) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      side_panel.mojom.BookmarksPage_OnBookmarkNodeMoved_ParamsSpec,
      null,
      [old_parent_index, old_node_index, new_parent_index, new_node_index],
      false);
  }

  onBookmarkNodeChanged(id, new_title, new_url) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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

side_panel.mojom.BookmarksPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BookmarksPage', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodeAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodesRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkParentFolderChildrenReordered_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodeMoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodeAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onBookmarkNodeAdded(params.node);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodesRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.onBookmarkNodesRemoved(params.node_ids);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkParentFolderChildrenReordered_ParamsSpec.$.structSpec);
          const result = this.impl.onBookmarkParentFolderChildrenReordered(params.folder_id, params.children_ordered_ids);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodeMoved_ParamsSpec.$.structSpec);
          const result = this.impl.onBookmarkNodeMoved(params.old_parent_index, params.old_node_index, params.new_parent_index, params.new_node_index);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onBookmarkNodeChanged(params.id, params.new_title, params.new_url);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

side_panel.mojom.BookmarksPageReceiver = side_panel.mojom.BookmarksPageReceiver;

side_panel.mojom.BookmarksPagePtr = side_panel.mojom.BookmarksPageRemote;
side_panel.mojom.BookmarksPageRequest = side_panel.mojom.BookmarksPagePendingReceiver;

