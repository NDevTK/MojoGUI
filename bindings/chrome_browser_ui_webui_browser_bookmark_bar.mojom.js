// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui_browser/bookmark_bar.mojom
// Module: bookmark_bar.mojom

'use strict';

// Module namespace
var bookmark_bar = bookmark_bar || {};
bookmark_bar.mojom = bookmark_bar.mojom || {};
var url = url || {};

bookmark_bar.mojom.BookmarkTypeSpec = { $: mojo.internal.Enum() };
bookmark_bar.mojom.BookmarkDataSpec = { $: {} };
bookmark_bar.mojom.PageHandlerFactory = {};
bookmark_bar.mojom.PageHandlerFactory.$interfaceName = 'bookmark_bar.mojom.PageHandlerFactory';
bookmark_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
bookmark_bar.mojom.PageHandler = {};
bookmark_bar.mojom.PageHandler.$interfaceName = 'bookmark_bar.mojom.PageHandler';
bookmark_bar.mojom.PageHandler_GetBookmarkBar_ParamsSpec = { $: {} };
bookmark_bar.mojom.PageHandler_GetBookmarkBar_ResponseParamsSpec = { $: {} };
bookmark_bar.mojom.PageHandler_OpenInNewTab_ParamsSpec = { $: {} };
bookmark_bar.mojom.Page = {};
bookmark_bar.mojom.Page.$interfaceName = 'bookmark_bar.mojom.Page';
bookmark_bar.mojom.Page_BookmarkLoaded_ParamsSpec = { $: {} };
bookmark_bar.mojom.Page_FavIconChanged_ParamsSpec = { $: {} };
bookmark_bar.mojom.Page_Show_ParamsSpec = { $: {} };
bookmark_bar.mojom.Page_Hide_ParamsSpec = { $: {} };

// Enum: BookmarkType
bookmark_bar.mojom.BookmarkType = {
  URL: 0,
  FOLDER: 1,
  BOOKMARK_BAR: 2,
  OTHER_NODE: 3,
  MOBILE: 4,
};

// Struct: BookmarkData
mojo.internal.Struct(
    bookmark_bar.mojom.BookmarkDataSpec, 'bookmark_bar.mojom.BookmarkData', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, bookmark_bar.mojom.BookmarkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_url_for_favicon', 24, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    bookmark_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'bookmark_bar.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(bookmark_bar.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(bookmark_bar.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [page, handler],
      false);
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

bookmark_bar.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = bookmark_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    }});
  }
};

bookmark_bar.mojom.PageHandlerFactoryReceiver = bookmark_bar.mojom.PageHandlerFactoryReceiver;

bookmark_bar.mojom.PageHandlerFactoryPtr = bookmark_bar.mojom.PageHandlerFactoryRemote;
bookmark_bar.mojom.PageHandlerFactoryRequest = bookmark_bar.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    bookmark_bar.mojom.PageHandler_GetBookmarkBar_ParamsSpec, 'bookmark_bar.mojom.PageHandler_GetBookmarkBar_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bookmark_bar.mojom.PageHandler_GetBookmarkBar_ResponseParamsSpec, 'bookmark_bar.mojom.PageHandler_GetBookmarkBar_ResponseParams', [
      mojo.internal.StructField('bookmarks', 0, 0, mojo.internal.Array(bookmark_bar.mojom.BookmarkDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bookmark_bar.mojom.PageHandler_OpenInNewTab_ParamsSpec, 'bookmark_bar.mojom.PageHandler_OpenInNewTab_Params', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  openInNewTab(node_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bookmark_bar.mojom.PageHandler_OpenInNewTab_ParamsSpec,
      null,
      [node_id],
      false);
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

bookmark_bar.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = bookmark_bar.mojom.PageHandler_GetBookmarkBar_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getBookmarkBar();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, bookmark_bar.mojom.PageHandler_GetBookmarkBar_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = bookmark_bar.mojom.PageHandler_OpenInNewTab_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openInNewTab(params.node_id);
          break;
        }
      }
    }});
  }
};

bookmark_bar.mojom.PageHandlerReceiver = bookmark_bar.mojom.PageHandlerReceiver;

bookmark_bar.mojom.PageHandlerPtr = bookmark_bar.mojom.PageHandlerRemote;
bookmark_bar.mojom.PageHandlerRequest = bookmark_bar.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    bookmark_bar.mojom.Page_BookmarkLoaded_ParamsSpec, 'bookmark_bar.mojom.Page_BookmarkLoaded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bookmark_bar.mojom.Page_FavIconChanged_ParamsSpec, 'bookmark_bar.mojom.Page_FavIconChanged_Params', [
      mojo.internal.StructField('bookmark_data', 0, 0, bookmark_bar.mojom.BookmarkDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    bookmark_bar.mojom.Page_Show_ParamsSpec, 'bookmark_bar.mojom.Page_Show_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    bookmark_bar.mojom.Page_Hide_ParamsSpec, 'bookmark_bar.mojom.Page_Hide_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  favIconChanged(bookmark_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      bookmark_bar.mojom.Page_FavIconChanged_ParamsSpec,
      null,
      [bookmark_data],
      false);
  }

  show() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      bookmark_bar.mojom.Page_Show_ParamsSpec,
      null,
      [],
      false);
  }

  hide() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      bookmark_bar.mojom.Page_Hide_ParamsSpec,
      null,
      [],
      false);
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

bookmark_bar.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = bookmark_bar.mojom.Page_BookmarkLoaded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bookmarkLoaded();
          break;
        }
        case 1: {
          const params = bookmark_bar.mojom.Page_FavIconChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.favIconChanged(params.bookmark_data);
          break;
        }
        case 2: {
          const params = bookmark_bar.mojom.Page_Show_ParamsSpec.$.decode(message.payload);
          const result = this.impl.show();
          break;
        }
        case 3: {
          const params = bookmark_bar.mojom.Page_Hide_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hide();
          break;
        }
      }
    }});
  }
};

bookmark_bar.mojom.PageReceiver = bookmark_bar.mojom.PageReceiver;

bookmark_bar.mojom.PagePtr = bookmark_bar.mojom.PageRemote;
bookmark_bar.mojom.PageRequest = bookmark_bar.mojom.PagePendingReceiver;

