// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui_browser/bookmark_bar.mojom
// Module: bookmark_bar.mojom

'use strict';

// Module namespace
var bookmark_bar = bookmark_bar || {};
bookmark_bar.mojom = bookmark_bar.mojom || {};


// Enum: BookmarkType
bookmark_bar.mojom.BookmarkType = {
  URL: 0,
  FOLDER: 1,
  BOOKMARK_BAR: 2,
  OTHER_NODE: 3,
  MOBILE: 4,
};

// Struct: BookmarkData
bookmark_bar.mojom.BookmarkDataSpec = {
  $: {
    structSpec: {
      name: 'bookmark_bar.mojom.BookmarkData',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: bookmark_bar.mojom.BookmarkTypeSpec, nullable: false },
        { name: 'page_url_for_favicon', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandlerFactory
bookmark_bar.mojom.PageHandlerFactory = {};

bookmark_bar.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bookmark_bar.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'bookmark_bar.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bookmark_bar.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new bookmark_bar.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

bookmark_bar.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bookmark_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

bookmark_bar.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new bookmark_bar.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bookmark_bar.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
bookmark_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bookmark_bar.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bookmark_bar.mojom.PageHandlerFactoryPtr = bookmark_bar.mojom.PageHandlerFactoryRemote;
bookmark_bar.mojom.PageHandlerFactoryRequest = bookmark_bar.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
bookmark_bar.mojom.PageHandler = {};

bookmark_bar.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bookmark_bar.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'bookmark_bar.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bookmark_bar.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new bookmark_bar.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

bookmark_bar.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBookmarkBar() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bookmark_bar.mojom.PageHandler_GetBookmarkBar_ParamsSpec,
      bookmark_bar.mojom.PageHandler_GetBookmarkBar_ResponseParamsSpec,
      []);
  }

  openInNewTab(node_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bookmark_bar.mojom.PageHandler_OpenInNewTab_ParamsSpec,
      null,
      [node_id]);
  }

};

bookmark_bar.mojom.PageHandler.getRemote = function() {
  let remote = new bookmark_bar.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bookmark_bar.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetBookmarkBar
bookmark_bar.mojom.PageHandler_GetBookmarkBar_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bookmark_bar.mojom.PageHandler.GetBookmarkBar_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

bookmark_bar.mojom.PageHandler_GetBookmarkBar_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'bookmark_bar.mojom.PageHandler.GetBookmarkBar_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bookmarks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenInNewTab
bookmark_bar.mojom.PageHandler_OpenInNewTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bookmark_bar.mojom.PageHandler.OpenInNewTab_Params',
      packedSize: 16,
      fields: [
        { name: 'node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bookmark_bar.mojom.PageHandlerPtr = bookmark_bar.mojom.PageHandlerRemote;
bookmark_bar.mojom.PageHandlerRequest = bookmark_bar.mojom.PageHandlerPendingReceiver;


// Interface: Page
bookmark_bar.mojom.Page = {};

bookmark_bar.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

bookmark_bar.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'bookmark_bar.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      bookmark_bar.mojom.PagePendingReceiver,
      handle);
    this.$ = new bookmark_bar.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

bookmark_bar.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bookmarkLoaded() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      bookmark_bar.mojom.Page_BookmarkLoaded_ParamsSpec,
      null,
      []);
  }

  favIconChanged(bookmark_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bookmark_bar.mojom.Page_FavIconChanged_ParamsSpec,
      null,
      [bookmark_data]);
  }

  show() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      bookmark_bar.mojom.Page_Show_ParamsSpec,
      null,
      []);
  }

  hide() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      bookmark_bar.mojom.Page_Hide_ParamsSpec,
      null,
      []);
  }

};

bookmark_bar.mojom.Page.getRemote = function() {
  let remote = new bookmark_bar.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'bookmark_bar.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for BookmarkLoaded
bookmark_bar.mojom.Page_BookmarkLoaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bookmark_bar.mojom.Page.BookmarkLoaded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FavIconChanged
bookmark_bar.mojom.Page_FavIconChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bookmark_bar.mojom.Page.FavIconChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'bookmark_data', packedOffset: 0, packedBitOffset: 0, type: bookmark_bar.mojom.BookmarkDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Show
bookmark_bar.mojom.Page_Show_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bookmark_bar.mojom.Page.Show_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Hide
bookmark_bar.mojom.Page_Hide_ParamsSpec = {
  $: {
    structSpec: {
      name: 'bookmark_bar.mojom.Page.Hide_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
bookmark_bar.mojom.PagePtr = bookmark_bar.mojom.PageRemote;
bookmark_bar.mojom.PageRequest = bookmark_bar.mojom.PagePendingReceiver;

