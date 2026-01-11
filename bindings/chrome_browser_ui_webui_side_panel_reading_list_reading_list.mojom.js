// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/reading_list/reading_list.mojom
// Module: reading_list.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(reading_list.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(reading_list.mojom.PageHandlerRemote), null, false, 0, undefined),
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
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

reading_list.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
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
  getReadLaterEntries() {
    return this.$.getReadLaterEntries();
  }
  openURL(url, mark_as_read, click_modifiers) {
    return this.$.openURL(url, mark_as_read, click_modifiers);
  }
  updateReadStatus(url, read) {
    return this.$.updateReadStatus(url, read);
  }
  markCurrentTabAsRead() {
    return this.$.markCurrentTabAsRead();
  }
  addCurrentTab() {
    return this.$.addCurrentTab();
  }
  removeEntry(url) {
    return this.$.removeEntry(url);
  }
  showContextMenuForURL(url, x, y) {
    return this.$.showContextMenuForURL(url, x, y);
  }
  updateCurrentPageActionButtonState() {
    return this.$.updateCurrentPageActionButtonState();
  }
  showUI() {
    return this.$.showUI();
  }
  closeUI() {
    return this.$.closeUI();
  }
  getWindowData() {
    return this.$.getWindowData();
  }
};

reading_list.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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

  getReadLaterEntries() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      reading_list.mojom.PageHandler_GetReadLaterEntries_ParamsSpec,
      reading_list.mojom.PageHandler_GetReadLaterEntries_ResponseParamsSpec,
      [],
      false);
  }

  openURL(url, mark_as_read, click_modifiers) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      reading_list.mojom.PageHandler_OpenURL_ParamsSpec,
      null,
      [url, mark_as_read, click_modifiers],
      false);
  }

  updateReadStatus(url, read) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      reading_list.mojom.PageHandler_UpdateReadStatus_ParamsSpec,
      null,
      [url, read],
      false);
  }

  markCurrentTabAsRead() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      reading_list.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec,
      null,
      [],
      false);
  }

  addCurrentTab() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      reading_list.mojom.PageHandler_AddCurrentTab_ParamsSpec,
      null,
      [],
      false);
  }

  removeEntry(url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      reading_list.mojom.PageHandler_RemoveEntry_ParamsSpec,
      null,
      [url],
      false);
  }

  showContextMenuForURL(url, x, y) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      reading_list.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec,
      null,
      [url, x, y],
      false);
  }

  updateCurrentPageActionButtonState() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec,
      null,
      [],
      false);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      reading_list.mojom.PageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      reading_list.mojom.PageHandler_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  getWindowData() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.PageHandler_GetReadLaterEntries_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.PageHandler_OpenURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.PageHandler_UpdateReadStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.PageHandler_AddCurrentTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.PageHandler_RemoveEntry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.PageHandler_ShowUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.PageHandler_CloseUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.PageHandler_GetWindowData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.PageHandler_GetReadLaterEntries_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.PageHandler_OpenURL_ParamsSpec.$.structSpec);
          const result = this.impl.openURL(params.url, params.mark_as_read, params.click_modifiers);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.PageHandler_UpdateReadStatus_ParamsSpec.$.structSpec);
          const result = this.impl.updateReadStatus(params.url, params.read);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec.$.structSpec);
          const result = this.impl.markCurrentTabAsRead();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.PageHandler_AddCurrentTab_ParamsSpec.$.structSpec);
          const result = this.impl.addCurrentTab();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.PageHandler_RemoveEntry_ParamsSpec.$.structSpec);
          const result = this.impl.removeEntry(params.url);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec.$.structSpec);
          const result = this.impl.showContextMenuForURL(params.url, params.x, params.y);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec.$.structSpec);
          const result = this.impl.updateCurrentPageActionButtonState();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.PageHandler_ShowUI_ParamsSpec.$.structSpec);
          const result = this.impl.showUI();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.PageHandler_CloseUI_ParamsSpec.$.structSpec);
          const result = this.impl.closeUI();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.PageHandler_GetWindowData_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
  itemsChanged(entries) {
    return this.$.itemsChanged(entries);
  }
  currentPageActionButtonStateChanged(state) {
    return this.$.currentPageActionButtonStateChanged(state);
  }
};

reading_list.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  itemsChanged(entries) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      reading_list.mojom.Page_ItemsChanged_ParamsSpec,
      null,
      [entries],
      false);
  }

  currentPageActionButtonStateChanged(state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.Page_ItemsChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(reading_list.mojom.Page_CurrentPageActionButtonStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.Page_ItemsChanged_ParamsSpec.$.structSpec);
          const result = this.impl.itemsChanged(params.entries);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(reading_list.mojom.Page_CurrentPageActionButtonStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.currentPageActionButtonStateChanged(params.state);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

reading_list.mojom.PageReceiver = reading_list.mojom.PageReceiver;

reading_list.mojom.PagePtr = reading_list.mojom.PageRemote;
reading_list.mojom.PageRequest = reading_list.mojom.PagePendingReceiver;

