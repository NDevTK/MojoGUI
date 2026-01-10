// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/reading_list/reading_list.mojom
// Module: reading_list.mojom

'use strict';

// Module namespace
var reading_list = reading_list || {};
reading_list.mojom = reading_list.mojom || {};
var ui = ui || {};
var url = url || {};

reading_list.mojom.CurrentPageActionButtonStateSpec = { $: mojo.internal.Enum() };
reading_list.mojom.ReadLaterEntriesByStatusSpec = { $: {} };
reading_list.mojom.ReadLaterEntrySpec = { $: {} };
reading_list.mojom.WindowSpec = { $: {} };
reading_list.mojom.PageHandlerFactory = {};
reading_list.mojom.PageHandlerFactory.$interfaceName = 'reading_list.mojom.PageHandlerFactory';
reading_list.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
reading_list.mojom.PageHandler = {};
reading_list.mojom.PageHandler.$interfaceName = 'reading_list.mojom.PageHandler';
reading_list.mojom.PageHandler_GetReadLaterEntries_ParamsSpec = { $: {} };
reading_list.mojom.PageHandler_GetReadLaterEntries_ResponseParamsSpec = { $: {} };
reading_list.mojom.PageHandler_OpenURL_ParamsSpec = { $: {} };
reading_list.mojom.PageHandler_UpdateReadStatus_ParamsSpec = { $: {} };
reading_list.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec = { $: {} };
reading_list.mojom.PageHandler_AddCurrentTab_ParamsSpec = { $: {} };
reading_list.mojom.PageHandler_RemoveEntry_ParamsSpec = { $: {} };
reading_list.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec = { $: {} };
reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec = { $: {} };
reading_list.mojom.PageHandler_ShowUI_ParamsSpec = { $: {} };
reading_list.mojom.PageHandler_CloseUI_ParamsSpec = { $: {} };
reading_list.mojom.PageHandler_GetWindowData_ParamsSpec = { $: {} };
reading_list.mojom.PageHandler_GetWindowData_ResponseParamsSpec = { $: {} };
reading_list.mojom.Page = {};
reading_list.mojom.Page.$interfaceName = 'reading_list.mojom.Page';
reading_list.mojom.Page_ItemsChanged_ParamsSpec = { $: {} };
reading_list.mojom.Page_CurrentPageActionButtonStateChanged_ParamsSpec = { $: {} };

// Enum: CurrentPageActionButtonState
reading_list.mojom.CurrentPageActionButtonState = {
  kAdd: 0,
  kDisabled: 1,
  kMarkAsRead: 2,
};

// Struct: ReadLaterEntriesByStatus
mojo.internal.Struct(
    reading_list.mojom.ReadLaterEntriesByStatusSpec, 'reading_list.mojom.ReadLaterEntriesByStatus', [
      mojo.internal.StructField('unread_entries', 0, 0, mojo.internal.Array(reading_list.mojom.ReadLaterEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('read_entries', 8, 0, mojo.internal.Array(reading_list.mojom.ReadLaterEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ReadLaterEntry
mojo.internal.Struct(
    reading_list.mojom.ReadLaterEntrySpec, 'reading_list.mojom.ReadLaterEntry', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update_time', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('display_time_since_update', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('read', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: Window
mojo.internal.Struct(
    reading_list.mojom.WindowSpec, 'reading_list.mojom.Window', [
      mojo.internal.StructField('height', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('active', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    reading_list.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'reading_list.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(reading_list.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(reading_list.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

reading_list.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

reading_list.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'reading_list.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      reading_list.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new reading_list.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

reading_list.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      reading_list.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

reading_list.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new reading_list.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reading_list.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

reading_list.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = reading_list.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    }});
  }
};

reading_list.mojom.PageHandlerFactoryReceiver = reading_list.mojom.PageHandlerFactoryReceiver;

reading_list.mojom.PageHandlerFactoryPtr = reading_list.mojom.PageHandlerFactoryRemote;
reading_list.mojom.PageHandlerFactoryRequest = reading_list.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    reading_list.mojom.PageHandler_GetReadLaterEntries_ParamsSpec, 'reading_list.mojom.PageHandler_GetReadLaterEntries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    reading_list.mojom.PageHandler_GetReadLaterEntries_ResponseParamsSpec, 'reading_list.mojom.PageHandler_GetReadLaterEntries_ResponseParams', [
      mojo.internal.StructField('entries', 0, 0, reading_list.mojom.ReadLaterEntriesByStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    reading_list.mojom.PageHandler_OpenURL_ParamsSpec, 'reading_list.mojom.PageHandler_OpenURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('click_modifiers', 8, 0, ui.mojom.ClickModifiersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mark_as_read', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    reading_list.mojom.PageHandler_UpdateReadStatus_ParamsSpec, 'reading_list.mojom.PageHandler_UpdateReadStatus_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('read', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    reading_list.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec, 'reading_list.mojom.PageHandler_MarkCurrentTabAsRead_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    reading_list.mojom.PageHandler_AddCurrentTab_ParamsSpec, 'reading_list.mojom.PageHandler_AddCurrentTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    reading_list.mojom.PageHandler_RemoveEntry_ParamsSpec, 'reading_list.mojom.PageHandler_RemoveEntry_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    reading_list.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec, 'reading_list.mojom.PageHandler_ShowContextMenuForURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('x', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('y', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec, 'reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    reading_list.mojom.PageHandler_ShowUI_ParamsSpec, 'reading_list.mojom.PageHandler_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    reading_list.mojom.PageHandler_CloseUI_ParamsSpec, 'reading_list.mojom.PageHandler_CloseUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    reading_list.mojom.PageHandler_GetWindowData_ParamsSpec, 'reading_list.mojom.PageHandler_GetWindowData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    reading_list.mojom.PageHandler_GetWindowData_ResponseParamsSpec, 'reading_list.mojom.PageHandler_GetWindowData_ResponseParams', [
      mojo.internal.StructField('windows', 0, 0, mojo.internal.Array(reading_list.mojom.WindowSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

reading_list.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

reading_list.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'reading_list.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      reading_list.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new reading_list.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

reading_list.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getReadLaterEntries() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      reading_list.mojom.PageHandler_GetReadLaterEntries_ParamsSpec,
      reading_list.mojom.PageHandler_GetReadLaterEntries_ResponseParamsSpec,
      [],
      false);
  }

  openURL(url, mark_as_read, click_modifiers) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      reading_list.mojom.PageHandler_OpenURL_ParamsSpec,
      null,
      [url, mark_as_read, click_modifiers],
      false);
  }

  updateReadStatus(url, read) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      reading_list.mojom.PageHandler_UpdateReadStatus_ParamsSpec,
      null,
      [url, read],
      false);
  }

  markCurrentTabAsRead() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      reading_list.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec,
      null,
      [],
      false);
  }

  addCurrentTab() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      reading_list.mojom.PageHandler_AddCurrentTab_ParamsSpec,
      null,
      [],
      false);
  }

  removeEntry(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      reading_list.mojom.PageHandler_RemoveEntry_ParamsSpec,
      null,
      [url],
      false);
  }

  showContextMenuForURL(url, x, y) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      reading_list.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec,
      null,
      [url, x, y],
      false);
  }

  updateCurrentPageActionButtonState() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec,
      null,
      [],
      false);
  }

  showUI() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      reading_list.mojom.PageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      reading_list.mojom.PageHandler_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  getWindowData() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      reading_list.mojom.PageHandler_GetWindowData_ParamsSpec,
      reading_list.mojom.PageHandler_GetWindowData_ResponseParamsSpec,
      [],
      false);
  }

};

reading_list.mojom.PageHandler.getRemote = function() {
  let remote = new reading_list.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reading_list.mojom.PageHandler',
    'context');
  return remote.$;
};

reading_list.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = reading_list.mojom.PageHandler_GetReadLaterEntries_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getReadLaterEntries();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, reading_list.mojom.PageHandler_GetReadLaterEntries_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = reading_list.mojom.PageHandler_OpenURL_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openURL(params.url, params.mark_as_read, params.click_modifiers);
          break;
        }
        case 2: {
          const params = reading_list.mojom.PageHandler_UpdateReadStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateReadStatus(params.url, params.read);
          break;
        }
        case 3: {
          const params = reading_list.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec.$.decode(message.payload);
          const result = this.impl.markCurrentTabAsRead();
          break;
        }
        case 4: {
          const params = reading_list.mojom.PageHandler_AddCurrentTab_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addCurrentTab();
          break;
        }
        case 5: {
          const params = reading_list.mojom.PageHandler_RemoveEntry_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removeEntry(params.url);
          break;
        }
        case 6: {
          const params = reading_list.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showContextMenuForURL(params.url, params.x, params.y);
          break;
        }
        case 7: {
          const params = reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateCurrentPageActionButtonState();
          break;
        }
        case 8: {
          const params = reading_list.mojom.PageHandler_ShowUI_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showUI();
          break;
        }
        case 9: {
          const params = reading_list.mojom.PageHandler_CloseUI_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeUI();
          break;
        }
        case 10: {
          const params = reading_list.mojom.PageHandler_GetWindowData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getWindowData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, reading_list.mojom.PageHandler_GetWindowData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

reading_list.mojom.PageHandlerReceiver = reading_list.mojom.PageHandlerReceiver;

reading_list.mojom.PageHandlerPtr = reading_list.mojom.PageHandlerRemote;
reading_list.mojom.PageHandlerRequest = reading_list.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    reading_list.mojom.Page_ItemsChanged_ParamsSpec, 'reading_list.mojom.Page_ItemsChanged_Params', [
      mojo.internal.StructField('entries', 0, 0, reading_list.mojom.ReadLaterEntriesByStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    reading_list.mojom.Page_CurrentPageActionButtonStateChanged_ParamsSpec, 'reading_list.mojom.Page_CurrentPageActionButtonStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, reading_list.mojom.CurrentPageActionButtonStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

reading_list.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

reading_list.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'reading_list.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      reading_list.mojom.PagePendingReceiver,
      handle);
    this.$ = new reading_list.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

reading_list.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  itemsChanged(entries) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      reading_list.mojom.Page_ItemsChanged_ParamsSpec,
      null,
      [entries],
      false);
  }

  currentPageActionButtonStateChanged(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      reading_list.mojom.Page_CurrentPageActionButtonStateChanged_ParamsSpec,
      null,
      [state],
      false);
  }

};

reading_list.mojom.Page.getRemote = function() {
  let remote = new reading_list.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reading_list.mojom.Page',
    'context');
  return remote.$;
};

reading_list.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = reading_list.mojom.Page_ItemsChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.itemsChanged(params.entries);
          break;
        }
        case 1: {
          const params = reading_list.mojom.Page_CurrentPageActionButtonStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.currentPageActionButtonStateChanged(params.state);
          break;
        }
      }
    }});
  }
};

reading_list.mojom.PageReceiver = reading_list.mojom.PageReceiver;

reading_list.mojom.PagePtr = reading_list.mojom.PageRemote;
reading_list.mojom.PageRequest = reading_list.mojom.PagePendingReceiver;

