// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/data_sharing/data_sharing.mojom
// Module: data_sharing.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var data_sharing = data_sharing || {};
data_sharing.mojom = data_sharing.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

data_sharing.mojom.GroupActionSpec = { $: mojo.internal.Enum() };
data_sharing.mojom.GroupActionProgressSpec = { $: mojo.internal.Enum() };
data_sharing.mojom.ReadGroupsParamsSpec = { $: {} };
data_sharing.mojom.ReadGroupParamsSpec = { $: {} };
data_sharing.mojom.ReadGroupsResultSpec = { $: {} };
data_sharing.mojom.ReadGroupWithTokenParamSpec = { $: {} };
data_sharing.mojom.ReadGroupWithTokenResultSpec = { $: {} };
data_sharing.mojom.SharedTabSpec = { $: {} };
data_sharing.mojom.GroupPreviewSpec = { $: {} };
data_sharing.mojom.PageHandlerFactory = {};
data_sharing.mojom.PageHandlerFactory.$interfaceName = 'data_sharing.mojom.PageHandlerFactory';
data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
data_sharing.mojom.PageHandler = {};
data_sharing.mojom.PageHandler.$interfaceName = 'data_sharing.mojom.PageHandler';
data_sharing.mojom.PageHandler_ShowUI_ParamsSpec = { $: {} };
data_sharing.mojom.PageHandler_CloseUI_ParamsSpec = { $: {} };
data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec = { $: {} };
data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec = { $: {} };
data_sharing.mojom.PageHandler_MakeTabGroupShared_ResponseParamsSpec = { $: {} };
data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec = { $: {} };
data_sharing.mojom.PageHandler_GetShareLink_ResponseParamsSpec = { $: {} };
data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec = { $: {} };
data_sharing.mojom.PageHandler_GetTabGroupPreview_ResponseParamsSpec = { $: {} };
data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec = { $: {} };
data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec = { $: {} };
data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec = { $: {} };
data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec = { $: {} };
data_sharing.mojom.Page = {};
data_sharing.mojom.Page.$interfaceName = 'data_sharing.mojom.Page';
data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec = { $: {} };
data_sharing.mojom.Page_ReadGroups_ParamsSpec = { $: {} };
data_sharing.mojom.Page_ReadGroups_ResponseParamsSpec = { $: {} };
data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec = { $: {} };
data_sharing.mojom.Page_ReadGroupWithToken_ResponseParamsSpec = { $: {} };
data_sharing.mojom.Page_DeleteGroup_ParamsSpec = { $: {} };
data_sharing.mojom.Page_DeleteGroup_ResponseParamsSpec = { $: {} };
data_sharing.mojom.Page_LeaveGroup_ParamsSpec = { $: {} };
data_sharing.mojom.Page_LeaveGroup_ResponseParamsSpec = { $: {} };

// Enum: GroupAction
data_sharing.mojom.GroupAction = {
  kUnknown: 0,
  kJoinGroup: 1,
  kDeleteGroup: 2,
  kLeaveGroup: 3,
  kKeepGroup: 4,
  kStopSharing: 5,
};

// Enum: GroupActionProgress
data_sharing.mojom.GroupActionProgress = {
  kUnknown: 0,
  kStarted: 1,
  kFailed: 2,
  kSuccess: 3,
};

// Struct: ReadGroupsParams
mojo.internal.Struct(
    data_sharing.mojom.ReadGroupsParamsSpec, 'data_sharing.mojom.ReadGroupsParams', [
      mojo.internal.StructField('params', 0, 0, mojo.internal.Array(data_sharing.mojom.ReadGroupParamsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ReadGroupParams
mojo.internal.Struct(
    data_sharing.mojom.ReadGroupParamsSpec, 'data_sharing.mojom.ReadGroupParams', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('consistency_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ReadGroupsResult
mojo.internal.Struct(
    data_sharing.mojom.ReadGroupsResultSpec, 'data_sharing.mojom.ReadGroupsResult', [
      mojo.internal.StructField('groups', 0, 0, mojo.internal.Array(data_sharing.mojom.GroupDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('status_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ReadGroupWithTokenParam
mojo.internal.Struct(
    data_sharing.mojom.ReadGroupWithTokenParamSpec, 'data_sharing.mojom.ReadGroupWithTokenParam', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('access_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ReadGroupWithTokenResult
mojo.internal.Struct(
    data_sharing.mojom.ReadGroupWithTokenResultSpec, 'data_sharing.mojom.ReadGroupWithTokenResult', [
      mojo.internal.StructField('group', 0, 0, data_sharing.mojom.GroupDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('status_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SharedTab
mojo.internal.Struct(
    data_sharing.mojom.SharedTabSpec, 'data_sharing.mojom.SharedTab', [
      mojo.internal.StructField('display_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('favicon_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GroupPreview
mojo.internal.Struct(
    data_sharing.mojom.GroupPreviewSpec, 'data_sharing.mojom.GroupPreview', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('shared_tabs', 8, 0, mojo.internal.Array(data_sharing.mojom.SharedTabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('status_code', 16, 0, mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'data_sharing.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(data_sharing.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(data_sharing.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

data_sharing.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'data_sharing.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new data_sharing.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

data_sharing.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

data_sharing.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new data_sharing.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

data_sharing.mojom.PageHandlerFactoryReceiver = class {
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

data_sharing.mojom.PageHandlerFactoryReceiver = data_sharing.mojom.PageHandlerFactoryReceiver;

data_sharing.mojom.PageHandlerFactoryPtr = data_sharing.mojom.PageHandlerFactoryRemote;
data_sharing.mojom.PageHandlerFactoryRequest = data_sharing.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    data_sharing.mojom.PageHandler_ShowUI_ParamsSpec, 'data_sharing.mojom.PageHandler_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    data_sharing.mojom.PageHandler_CloseUI_ParamsSpec, 'data_sharing.mojom.PageHandler_CloseUI_Params', [
      mojo.internal.StructField('status_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec, 'data_sharing.mojom.PageHandler_ApiInitComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec, 'data_sharing.mojom.PageHandler_MakeTabGroupShared_Params', [
      mojo.internal.StructField('tab_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('access_token', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    data_sharing.mojom.PageHandler_MakeTabGroupShared_ResponseParamsSpec, 'data_sharing.mojom.PageHandler_MakeTabGroupShared_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec, 'data_sharing.mojom.PageHandler_GetShareLink_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('access_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    data_sharing.mojom.PageHandler_GetShareLink_ResponseParamsSpec, 'data_sharing.mojom.PageHandler_GetShareLink_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec, 'data_sharing.mojom.PageHandler_GetTabGroupPreview_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('access_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    data_sharing.mojom.PageHandler_GetTabGroupPreview_ResponseParamsSpec, 'data_sharing.mojom.PageHandler_GetTabGroupPreview_ResponseParams', [
      mojo.internal.StructField('group_preview', 0, 0, data_sharing.mojom.GroupPreviewSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec, 'data_sharing.mojom.PageHandler_OpenTabGroup_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec, 'data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_Params', [
      mojo.internal.StructField('tab_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec, 'data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_Params', [
      mojo.internal.StructField('tab_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec, 'data_sharing.mojom.PageHandler_OnGroupAction_Params', [
      mojo.internal.StructField('action', 0, 0, data_sharing.mojom.GroupActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('progress', 8, 0, data_sharing.mojom.GroupActionProgressSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

data_sharing.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'data_sharing.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new data_sharing.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  showUI() {
    return this.$.showUI();
  }
  closeUI(status_code) {
    return this.$.closeUI(status_code);
  }
  apiInitComplete() {
    return this.$.apiInitComplete();
  }
  makeTabGroupShared(tab_group_id, group_id, access_token) {
    return this.$.makeTabGroupShared(tab_group_id, group_id, access_token);
  }
  getShareLink(group_id, access_token) {
    return this.$.getShareLink(group_id, access_token);
  }
  getTabGroupPreview(group_id, access_token) {
    return this.$.getTabGroupPreview(group_id, access_token);
  }
  openTabGroup(group_id) {
    return this.$.openTabGroup(group_id);
  }
  aboutToUnShareTabGroup(tab_group_id) {
    return this.$.aboutToUnShareTabGroup(tab_group_id);
  }
  onTabGroupUnShareComplete(tab_group_id) {
    return this.$.onTabGroupUnShareComplete(tab_group_id);
  }
  onGroupAction(action, progress) {
    return this.$.onGroupAction(action, progress);
  }
};

data_sharing.mojom.PageHandlerRemoteCallHandler = class {
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
    ]);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      data_sharing.mojom.PageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI(status_code) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      data_sharing.mojom.PageHandler_CloseUI_ParamsSpec,
      null,
      [status_code],
      false);
  }

  apiInitComplete() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec,
      null,
      [],
      false);
  }

  makeTabGroupShared(tab_group_id, group_id, access_token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec,
      data_sharing.mojom.PageHandler_MakeTabGroupShared_ResponseParamsSpec,
      [tab_group_id, group_id, access_token],
      false);
  }

  getShareLink(group_id, access_token) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec,
      data_sharing.mojom.PageHandler_GetShareLink_ResponseParamsSpec,
      [group_id, access_token],
      false);
  }

  getTabGroupPreview(group_id, access_token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec,
      data_sharing.mojom.PageHandler_GetTabGroupPreview_ResponseParamsSpec,
      [group_id, access_token],
      false);
  }

  openTabGroup(group_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec,
      null,
      [group_id],
      false);
  }

  aboutToUnShareTabGroup(tab_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec,
      null,
      [tab_group_id],
      false);
  }

  onTabGroupUnShareComplete(tab_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec,
      null,
      [tab_group_id],
      false);
  }

  onGroupAction(action, progress) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec,
      null,
      [action, progress],
      false);
  }

};

data_sharing.mojom.PageHandler.getRemote = function() {
  let remote = new data_sharing.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing.mojom.PageHandler',
    'context');
  return remote.$;
};

data_sharing.mojom.PageHandlerReceiver = class {
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.PageHandler_ShowUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.PageHandler_CloseUI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.PageHandler_ShowUI_ParamsSpec.$.structSpec);
          const result = this.impl.showUI();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.PageHandler_CloseUI_ParamsSpec.$.structSpec);
          const result = this.impl.closeUI(params.status_code);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec.$.structSpec);
          const result = this.impl.apiInitComplete();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec.$.structSpec);
          const result = this.impl.makeTabGroupShared(params.tab_group_id, params.group_id, params.access_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_sharing.mojom.PageHandler_MakeTabGroupShared_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec.$.structSpec);
          const result = this.impl.getShareLink(params.group_id, params.access_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_sharing.mojom.PageHandler_GetShareLink_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec.$.structSpec);
          const result = this.impl.getTabGroupPreview(params.group_id, params.access_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_sharing.mojom.PageHandler_GetTabGroupPreview_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec.$.structSpec);
          const result = this.impl.openTabGroup(params.group_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec.$.structSpec);
          const result = this.impl.aboutToUnShareTabGroup(params.tab_group_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onTabGroupUnShareComplete(params.tab_group_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec.$.structSpec);
          const result = this.impl.onGroupAction(params.action, params.progress);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

data_sharing.mojom.PageHandlerReceiver = data_sharing.mojom.PageHandlerReceiver;

data_sharing.mojom.PageHandlerPtr = data_sharing.mojom.PageHandlerRemote;
data_sharing.mojom.PageHandlerRequest = data_sharing.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec, 'data_sharing.mojom.Page_OnAccessTokenFetched_Params', [
      mojo.internal.StructField('access_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.Page_ReadGroups_ParamsSpec, 'data_sharing.mojom.Page_ReadGroups_Params', [
      mojo.internal.StructField('read_groups_params', 0, 0, data_sharing.mojom.ReadGroupsParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.Page_ReadGroups_ResponseParamsSpec, 'data_sharing.mojom.Page_ReadGroups_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, data_sharing.mojom.ReadGroupsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec, 'data_sharing.mojom.Page_ReadGroupWithToken_Params', [
      mojo.internal.StructField('param', 0, 0, data_sharing.mojom.ReadGroupWithTokenParamSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.Page_ReadGroupWithToken_ResponseParamsSpec, 'data_sharing.mojom.Page_ReadGroupWithToken_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, data_sharing.mojom.ReadGroupWithTokenResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.Page_DeleteGroup_ParamsSpec, 'data_sharing.mojom.Page_DeleteGroup_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.Page_DeleteGroup_ResponseParamsSpec, 'data_sharing.mojom.Page_DeleteGroup_ResponseParams', [
      mojo.internal.StructField('status_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.Page_LeaveGroup_ParamsSpec, 'data_sharing.mojom.Page_LeaveGroup_Params', [
      mojo.internal.StructField('group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing.mojom.Page_LeaveGroup_ResponseParamsSpec, 'data_sharing.mojom.Page_LeaveGroup_ResponseParams', [
      mojo.internal.StructField('status_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

data_sharing.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'data_sharing.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing.mojom.PagePendingReceiver,
      handle);
    this.$ = new data_sharing.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAccessTokenFetched(access_token) {
    return this.$.onAccessTokenFetched(access_token);
  }
  readGroups(read_groups_params) {
    return this.$.readGroups(read_groups_params);
  }
  readGroupWithToken(param) {
    return this.$.readGroupWithToken(param);
  }
  deleteGroup(group_id) {
    return this.$.deleteGroup(group_id);
  }
  leaveGroup(group_id) {
    return this.$.leaveGroup(group_id);
  }
};

data_sharing.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAccessTokenFetched(access_token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec,
      null,
      [access_token],
      false);
  }

  readGroups(read_groups_params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      data_sharing.mojom.Page_ReadGroups_ParamsSpec,
      data_sharing.mojom.Page_ReadGroups_ResponseParamsSpec,
      [read_groups_params],
      false);
  }

  readGroupWithToken(param) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec,
      data_sharing.mojom.Page_ReadGroupWithToken_ResponseParamsSpec,
      [param],
      false);
  }

  deleteGroup(group_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      data_sharing.mojom.Page_DeleteGroup_ParamsSpec,
      data_sharing.mojom.Page_DeleteGroup_ResponseParamsSpec,
      [group_id],
      false);
  }

  leaveGroup(group_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      data_sharing.mojom.Page_LeaveGroup_ParamsSpec,
      data_sharing.mojom.Page_LeaveGroup_ResponseParamsSpec,
      [group_id],
      false);
  }

};

data_sharing.mojom.Page.getRemote = function() {
  let remote = new data_sharing.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing.mojom.Page',
    'context');
  return remote.$;
};

data_sharing.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.Page_ReadGroups_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.Page_DeleteGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_sharing.mojom.Page_LeaveGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec.$.structSpec);
          const result = this.impl.onAccessTokenFetched(params.access_token);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.Page_ReadGroups_ParamsSpec.$.structSpec);
          const result = this.impl.readGroups(params.read_groups_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_sharing.mojom.Page_ReadGroups_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec.$.structSpec);
          const result = this.impl.readGroupWithToken(params.param);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_sharing.mojom.Page_ReadGroupWithToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.Page_DeleteGroup_ParamsSpec.$.structSpec);
          const result = this.impl.deleteGroup(params.group_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_sharing.mojom.Page_DeleteGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_sharing.mojom.Page_LeaveGroup_ParamsSpec.$.structSpec);
          const result = this.impl.leaveGroup(params.group_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_sharing.mojom.Page_LeaveGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

data_sharing.mojom.PageReceiver = data_sharing.mojom.PageReceiver;

data_sharing.mojom.PagePtr = data_sharing.mojom.PageRemote;
data_sharing.mojom.PageRequest = data_sharing.mojom.PagePendingReceiver;

