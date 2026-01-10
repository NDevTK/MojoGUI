// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/bookmarks/bookmarks.mojom
// Module: side_panel.mojom

'use strict';

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(side_panel.mojom.BookmarksPageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(side_panel.mojom.BookmarksPageHandlerSpec), null, false, 0, undefined),
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

side_panel.mojom.BookmarksPageHandlerFactoryReceiver = class {
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
        
        // Try Method 0: CreateBookmarksPageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandlerFactory_CreateBookmarksPageHandler_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateBookmarksPageHandler (0)');
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
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandlerFactory_CreateBookmarksPageHandler_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createBookmarksPageHandler');
          const result = this.impl.createBookmarksPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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

side_panel.mojom.BookmarksPageHandlerReceiver = class {
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
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
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
        
        // Try Method 0: BookmarkCurrentTabInFolder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_BookmarkCurrentTabInFolder_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BookmarkCurrentTabInFolder (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateFolder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_CreateFolder_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateFolder (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DropBookmarks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_DropBookmarks_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DropBookmarks (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ExecuteEditCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteEditCommand_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteEditCommand (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ExecuteMoveCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteMoveCommand_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteMoveCommand (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ExecuteOpenInNewTabCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabCommand_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteOpenInNewTabCommand (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ExecuteOpenInNewWindowCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewWindowCommand_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteOpenInNewWindowCommand (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ExecuteOpenInIncognitoWindowCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInIncognitoWindowCommand_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteOpenInIncognitoWindowCommand (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ExecuteOpenInNewTabGroupCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteOpenInNewTabGroupCommand (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ExecuteOpenInSplitViewCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInSplitViewCommand_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteOpenInSplitViewCommand (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ExecuteAddToBookmarksBarCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteAddToBookmarksBarCommand (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ExecuteRemoveFromBookmarksBarCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteRemoveFromBookmarksBarCommand (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ExecuteDeleteCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteDeleteCommand_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteDeleteCommand (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OpenBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_OpenBookmark_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenBookmark (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: Undo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_Undo_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Undo (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: RenameBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_RenameBookmark_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenameBookmark (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: MoveBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_MoveBookmark_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveBookmark (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: RemoveBookmarks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveBookmarks (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SetSortOrder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_SetSortOrder_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSortOrder (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: SetViewType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_SetViewType_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetViewType (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: ShowContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ShowContextMenu_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowContextMenu (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: ShowUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ShowUI_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowUI (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: GetAllBookmarks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllBookmarks (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
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
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_BookmarkCurrentTabInFolder_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bookmarkCurrentTabInFolder');
          const result = this.impl.bookmarkCurrentTabInFolder(params.folder_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_CreateFolder_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createFolder');
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
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_DropBookmarks_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.dropBookmarks');
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
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteEditCommand_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.executeEditCommand');
          const result = this.impl.executeEditCommand(params.node_ids, params.source);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteMoveCommand_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.executeMoveCommand');
          const result = this.impl.executeMoveCommand(params.node_ids, params.source);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabCommand_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.executeOpenInNewTabCommand');
          const result = this.impl.executeOpenInNewTabCommand(params.side_panel_ids, params.source);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewWindowCommand_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.executeOpenInNewWindowCommand');
          const result = this.impl.executeOpenInNewWindowCommand(params.side_panel_ids, params.source);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInIncognitoWindowCommand_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.executeOpenInIncognitoWindowCommand');
          const result = this.impl.executeOpenInIncognitoWindowCommand(params.side_panel_ids, params.source);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInNewTabGroupCommand_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.executeOpenInNewTabGroupCommand');
          const result = this.impl.executeOpenInNewTabGroupCommand(params.side_panel_ids, params.source);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteOpenInSplitViewCommand_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.executeOpenInSplitViewCommand');
          const result = this.impl.executeOpenInSplitViewCommand(params.node_ids, params.source);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteAddToBookmarksBarCommand_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.executeAddToBookmarksBarCommand');
          const result = this.impl.executeAddToBookmarksBarCommand(params.node_id, params.source);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteRemoveFromBookmarksBarCommand_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.executeRemoveFromBookmarksBarCommand');
          const result = this.impl.executeRemoveFromBookmarksBarCommand(params.node_id, params.source);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ExecuteDeleteCommand_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.executeDeleteCommand');
          const result = this.impl.executeDeleteCommand(params.node_ids, params.source);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_OpenBookmark_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.openBookmark');
          const result = this.impl.openBookmark(params.node_id, params.parent_folder_depth, params.click_modifiers, params.source);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_Undo_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.undo');
          const result = this.impl.undo();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_RenameBookmark_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.renameBookmark');
          const result = this.impl.renameBookmark(params.node_id, params.new_title);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_MoveBookmark_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.moveBookmark');
          const result = this.impl.moveBookmark(params.node_id, params.folder_id);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_RemoveBookmarks_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.removeBookmarks');
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
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_SetSortOrder_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setSortOrder');
          const result = this.impl.setSortOrder(params.sort_order);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_SetViewType_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setViewType');
          const result = this.impl.setViewType(params.view_type);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ShowContextMenu_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.showContextMenu');
          const result = this.impl.showContextMenu(params.id, params.point, params.source);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_ShowUI_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.showUI');
          const result = this.impl.showUI();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPageHandler_GetAllBookmarks_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getAllBookmarks');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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

side_panel.mojom.BookmarksPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        
        // Try Method 0: OnBookmarkNodeAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodeAdded_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBookmarkNodeAdded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnBookmarkNodesRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodesRemoved_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBookmarkNodesRemoved (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnBookmarkParentFolderChildrenReordered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkParentFolderChildrenReordered_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBookmarkParentFolderChildrenReordered (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnBookmarkNodeMoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodeMoved_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBookmarkNodeMoved (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnBookmarkNodeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodeChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBookmarkNodeChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodeAdded_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onBookmarkNodeAdded');
          const result = this.impl.onBookmarkNodeAdded(params.node);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodesRemoved_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onBookmarkNodesRemoved');
          const result = this.impl.onBookmarkNodesRemoved(params.node_ids);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkParentFolderChildrenReordered_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onBookmarkParentFolderChildrenReordered');
          const result = this.impl.onBookmarkParentFolderChildrenReordered(params.folder_id, params.children_ordered_ids);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodeMoved_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onBookmarkNodeMoved');
          const result = this.impl.onBookmarkNodeMoved(params.old_parent_index, params.old_node_index, params.new_parent_index, params.new_node_index);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(side_panel.mojom.BookmarksPage_OnBookmarkNodeChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onBookmarkNodeChanged');
          const result = this.impl.onBookmarkNodeChanged(params.id, params.new_title, params.new_url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

side_panel.mojom.BookmarksPageReceiver = side_panel.mojom.BookmarksPageReceiver;

side_panel.mojom.BookmarksPagePtr = side_panel.mojom.BookmarksPageRemote;
side_panel.mojom.BookmarksPageRequest = side_panel.mojom.BookmarksPagePendingReceiver;

