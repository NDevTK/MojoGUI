// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/bookmarks/bookmarks.mojom
// Module: side_panel.mojom

'use strict';

// Module namespace
var side_panel = side_panel || {};
side_panel.mojom = side_panel.mojom || {};


// Enum: ActionSource
side_panel.mojom.ActionSource = {
};

// Enum: SortOrder
side_panel.mojom.SortOrder = {
};

// Enum: ViewType
side_panel.mojom.ViewType = {
};

// Struct: BookmarksTreeNode
side_panel.mojom.BookmarksTreeNode = class {
  constructor(values = {}) {
    this.unmodifiable = values.unmodifiable !== undefined ? values.unmodifiable : 0;
  }
};

// Interface: BookmarksPageHandlerFactory
side_panel.mojom.BookmarksPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'side_panel.mojom.BookmarksPageHandlerFactory';
  }

  createBookmarksPageHandler(page, handler) {
    // Method: CreateBookmarksPageHandler
    // Call: CreateBookmarksPageHandler(page, handler)
  }

};

side_panel.mojom.BookmarksPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BookmarksPageHandler
side_panel.mojom.BookmarksPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'side_panel.mojom.BookmarksPageHandler';
  }

  bookmarkCurrentTabInFolder(folder_id) {
    // Method: BookmarkCurrentTabInFolder
    // Call: BookmarkCurrentTabInFolder(folder_id)
  }

  createFolder(folder_id, title) {
    // Method: CreateFolder
    return new Promise((resolve) => {
      // Call: CreateFolder(folder_id, title)
      resolve({});
    });
  }

  dropBookmarks(folder_id) {
    // Method: DropBookmarks
    // Call: DropBookmarks(folder_id)
  }

  executeEditCommand(node_ids, source) {
    // Method: ExecuteEditCommand
    // Call: ExecuteEditCommand(node_ids, source)
  }

  executeMoveCommand(node_ids, source) {
    // Method: ExecuteMoveCommand
    // Call: ExecuteMoveCommand(node_ids, source)
  }

  executeOpenInNewTabCommand(side_panel_ids, source) {
    // Method: ExecuteOpenInNewTabCommand
    // Call: ExecuteOpenInNewTabCommand(side_panel_ids, source)
  }

  executeOpenInNewWindowCommand(side_panel_ids, source) {
    // Method: ExecuteOpenInNewWindowCommand
    // Call: ExecuteOpenInNewWindowCommand(side_panel_ids, source)
  }

  executeOpenInIncognitoWindowCommand(side_panel_ids, source) {
    // Method: ExecuteOpenInIncognitoWindowCommand
    // Call: ExecuteOpenInIncognitoWindowCommand(side_panel_ids, source)
  }

  executeOpenInNewTabGroupCommand(side_panel_ids, source) {
    // Method: ExecuteOpenInNewTabGroupCommand
    // Call: ExecuteOpenInNewTabGroupCommand(side_panel_ids, source)
  }

  executeOpenInSplitViewCommand(node_ids, source) {
    // Method: ExecuteOpenInSplitViewCommand
    // Call: ExecuteOpenInSplitViewCommand(node_ids, source)
  }

  executeAddToBookmarksBarCommand(node_id, source) {
    // Method: ExecuteAddToBookmarksBarCommand
    // Call: ExecuteAddToBookmarksBarCommand(node_id, source)
  }

  executeRemoveFromBookmarksBarCommand(node_id, source) {
    // Method: ExecuteRemoveFromBookmarksBarCommand
    // Call: ExecuteRemoveFromBookmarksBarCommand(node_id, source)
  }

  executeDeleteCommand(node_ids, source) {
    // Method: ExecuteDeleteCommand
    // Call: ExecuteDeleteCommand(node_ids, source)
  }

  openBookmark(node_id, parent_folder_depth, click_modifiers, source) {
    // Method: OpenBookmark
    // Call: OpenBookmark(node_id, parent_folder_depth, click_modifiers, source)
  }

  undo() {
    // Method: Undo
    // Call: Undo()
  }

  renameBookmark(node_id, new_title) {
    // Method: RenameBookmark
    // Call: RenameBookmark(node_id, new_title)
  }

  moveBookmark(node_id, folder_id) {
    // Method: MoveBookmark
    // Call: MoveBookmark(node_id, folder_id)
  }

  removeBookmarks(node_ids) {
    // Method: RemoveBookmarks
    // Call: RemoveBookmarks(node_ids)
  }

  setSortOrder(sort_order) {
    // Method: SetSortOrder
    // Call: SetSortOrder(sort_order)
  }

  setViewType(view_type) {
    // Method: SetViewType
    // Call: SetViewType(view_type)
  }

  showContextMenu(id, point, source) {
    // Method: ShowContextMenu
    // Call: ShowContextMenu(id, point, source)
  }

  showUI() {
    // Method: ShowUI
    // Call: ShowUI()
  }

  getAllBookmarks() {
    // Method: GetAllBookmarks
    return new Promise((resolve) => {
      // Call: GetAllBookmarks()
      resolve({});
    });
  }

};

side_panel.mojom.BookmarksPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BookmarksPage
side_panel.mojom.BookmarksPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'side_panel.mojom.BookmarksPage';
  }

  onBookmarkNodeAdded(node) {
    // Method: OnBookmarkNodeAdded
    // Call: OnBookmarkNodeAdded(node)
  }

  onBookmarkNodesRemoved(node_ids) {
    // Method: OnBookmarkNodesRemoved
    // Call: OnBookmarkNodesRemoved(node_ids)
  }

  onBookmarkParentFolderChildrenReordered(folder_id, children_ordered_ids) {
    // Method: OnBookmarkParentFolderChildrenReordered
    // Call: OnBookmarkParentFolderChildrenReordered(folder_id, children_ordered_ids)
  }

  onBookmarkNodeMoved(old_parent_index, old_node_index, new_parent_index, new_node_index) {
    // Method: OnBookmarkNodeMoved
    // Call: OnBookmarkNodeMoved(old_parent_index, old_node_index, new_parent_index, new_node_index)
  }

  onBookmarkNodeChanged(id, new_title, new_url) {
    // Method: OnBookmarkNodeChanged
    // Call: OnBookmarkNodeChanged(id, new_title, new_url)
  }

};

side_panel.mojom.BookmarksPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
