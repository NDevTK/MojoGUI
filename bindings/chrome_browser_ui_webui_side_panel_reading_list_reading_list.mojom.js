// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/reading_list/reading_list.mojom
// Module: reading_list.mojom

'use strict';

// Module namespace
var reading_list = reading_list || {};
reading_list.mojom = reading_list.mojom || {};
var ui = ui || {};
var url = url || {};


// Enum: CurrentPageActionButtonState
reading_list.mojom.mojom.CurrentPageActionButtonState = {
  kAdd: 0,
  kDisabled: 1,
  kMarkAsRead: 2,
};
reading_list.mojom.mojom.CurrentPageActionButtonStateSpec = { $: mojo.internal.Enum() };

// Struct: ReadLaterEntriesByStatus
reading_list.mojom.mojom.ReadLaterEntriesByStatusSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.ReadLaterEntriesByStatus',
      packedSize: 24,
      fields: [
        { name: 'unread_entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(reading_list.mojom.ReadLaterEntrySpec, false), nullable: false, minVersion: 0 },
        { name: 'read_entries', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(reading_list.mojom.ReadLaterEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ReadLaterEntry
reading_list.mojom.mojom.ReadLaterEntrySpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.ReadLaterEntry',
      packedSize: 56,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'display_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'update_time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'read', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'display_time_since_update', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: Window
reading_list.mojom.mojom.WindowSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.Window',
      packedSize: 16,
      fields: [
        { name: 'active', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: PageHandlerFactory
reading_list.mojom.mojom.PageHandlerFactory = {};

reading_list.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

reading_list.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'reading_list.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      reading_list.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new reading_list.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

reading_list.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      reading_list.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

reading_list.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new reading_list.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reading_list.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
reading_list.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(reading_list.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(reading_list.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
reading_list.mojom.mojom.PageHandlerFactoryPtr = reading_list.mojom.mojom.PageHandlerFactoryRemote;
reading_list.mojom.mojom.PageHandlerFactoryRequest = reading_list.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
reading_list.mojom.mojom.PageHandler = {};

reading_list.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

reading_list.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'reading_list.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      reading_list.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new reading_list.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

reading_list.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getReadLaterEntries() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      reading_list.mojom.mojom.PageHandler_GetReadLaterEntries_ParamsSpec,
      reading_list.mojom.mojom.PageHandler_GetReadLaterEntries_ResponseParamsSpec,
      []);
  }

  openURL(url, mark_as_read, click_modifiers) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      reading_list.mojom.mojom.PageHandler_OpenURL_ParamsSpec,
      null,
      [url, mark_as_read, click_modifiers]);
  }

  updateReadStatus(url, read) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      reading_list.mojom.mojom.PageHandler_UpdateReadStatus_ParamsSpec,
      null,
      [url, read]);
  }

  markCurrentTabAsRead() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      reading_list.mojom.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec,
      null,
      []);
  }

  addCurrentTab() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      reading_list.mojom.mojom.PageHandler_AddCurrentTab_ParamsSpec,
      null,
      []);
  }

  removeEntry(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      reading_list.mojom.mojom.PageHandler_RemoveEntry_ParamsSpec,
      null,
      [url]);
  }

  showContextMenuForURL(url, x, y) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      reading_list.mojom.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec,
      null,
      [url, x, y]);
  }

  updateCurrentPageActionButtonState() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      reading_list.mojom.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec,
      null,
      []);
  }

  showUI() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      reading_list.mojom.mojom.PageHandler_ShowUI_ParamsSpec,
      null,
      []);
  }

  closeUI() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      reading_list.mojom.mojom.PageHandler_CloseUI_ParamsSpec,
      null,
      []);
  }

  getWindowData() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      reading_list.mojom.mojom.PageHandler_GetWindowData_ParamsSpec,
      reading_list.mojom.mojom.PageHandler_GetWindowData_ResponseParamsSpec,
      []);
  }

};

reading_list.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new reading_list.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reading_list.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetReadLaterEntries
reading_list.mojom.mojom.PageHandler_GetReadLaterEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandler.GetReadLaterEntries_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

reading_list.mojom.mojom.PageHandler_GetReadLaterEntries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandler.GetReadLaterEntries_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: reading_list.mojom.ReadLaterEntriesByStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenURL
reading_list.mojom.mojom.PageHandler_OpenURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandler.OpenURL_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'mark_as_read', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'click_modifiers', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.ClickModifiersSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for UpdateReadStatus
reading_list.mojom.mojom.PageHandler_UpdateReadStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandler.UpdateReadStatus_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'read', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for MarkCurrentTabAsRead
reading_list.mojom.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandler.MarkCurrentTabAsRead_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AddCurrentTab
reading_list.mojom.mojom.PageHandler_AddCurrentTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandler.AddCurrentTab_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RemoveEntry
reading_list.mojom.mojom.PageHandler_RemoveEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandler.RemoveEntry_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowContextMenuForURL
reading_list.mojom.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandler.ShowContextMenuForURL_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'x', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateCurrentPageActionButtonState
reading_list.mojom.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandler.UpdateCurrentPageActionButtonState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ShowUI
reading_list.mojom.mojom.PageHandler_ShowUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandler.ShowUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CloseUI
reading_list.mojom.mojom.PageHandler_CloseUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandler.CloseUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetWindowData
reading_list.mojom.mojom.PageHandler_GetWindowData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandler.GetWindowData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

reading_list.mojom.mojom.PageHandler_GetWindowData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.PageHandler.GetWindowData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'windows', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(reading_list.mojom.WindowSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
reading_list.mojom.mojom.PageHandlerPtr = reading_list.mojom.mojom.PageHandlerRemote;
reading_list.mojom.mojom.PageHandlerRequest = reading_list.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
reading_list.mojom.mojom.Page = {};

reading_list.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

reading_list.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'reading_list.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      reading_list.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new reading_list.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

reading_list.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  itemsChanged(entries) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      reading_list.mojom.mojom.Page_ItemsChanged_ParamsSpec,
      null,
      [entries]);
  }

  currentPageActionButtonStateChanged(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      reading_list.mojom.mojom.Page_CurrentPageActionButtonStateChanged_ParamsSpec,
      null,
      [state]);
  }

};

reading_list.mojom.mojom.Page.getRemote = function() {
  let remote = new reading_list.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reading_list.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for ItemsChanged
reading_list.mojom.mojom.Page_ItemsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.Page.ItemsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: reading_list.mojom.ReadLaterEntriesByStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CurrentPageActionButtonStateChanged
reading_list.mojom.mojom.Page_CurrentPageActionButtonStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'reading_list.mojom.Page.CurrentPageActionButtonStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: reading_list.mojom.CurrentPageActionButtonStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
reading_list.mojom.mojom.PagePtr = reading_list.mojom.mojom.PageRemote;
reading_list.mojom.mojom.PageRequest = reading_list.mojom.mojom.PagePendingReceiver;

