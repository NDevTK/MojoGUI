// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/data_sharing/data_sharing.mojom
// Module: data_sharing.mojom

'use strict';

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(data_sharing.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(data_sharing.mojom.PageHandlerSpec), null, false, 0, undefined),
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
};

data_sharing.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
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
          const params = decoder.decodeStruct(data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

data_sharing.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showUI() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_sharing.mojom.PageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI(status_code) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_sharing.mojom.PageHandler_CloseUI_ParamsSpec,
      null,
      [status_code],
      false);
  }

  apiInitComplete() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec,
      null,
      [],
      false);
  }

  makeTabGroupShared(tab_group_id, group_id, access_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec,
      data_sharing.mojom.PageHandler_MakeTabGroupShared_ResponseParamsSpec,
      [tab_group_id, group_id, access_token],
      false);
  }

  getShareLink(group_id, access_token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec,
      data_sharing.mojom.PageHandler_GetShareLink_ResponseParamsSpec,
      [group_id, access_token],
      false);
  }

  getTabGroupPreview(group_id, access_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec,
      data_sharing.mojom.PageHandler_GetTabGroupPreview_ResponseParamsSpec,
      [group_id, access_token],
      false);
  }

  openTabGroup(group_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec,
      null,
      [group_id],
      false);
  }

  aboutToUnShareTabGroup(tab_group_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec,
      null,
      [tab_group_id],
      false);
  }

  onTabGroupUnShareComplete(tab_group_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec,
      null,
      [tab_group_id],
      false);
  }

  onGroupAction(action, progress) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ShowUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.PageHandler_ShowUI_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowUI (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.PageHandler_CloseUI_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseUI (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ApiInitComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApiInitComplete (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: MakeTabGroupShared
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MakeTabGroupShared (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetShareLink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetShareLink (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetTabGroupPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabGroupPreview (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenTabGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenTabGroup (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AboutToUnShareTabGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AboutToUnShareTabGroup (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnTabGroupUnShareComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTabGroupUnShareComplete (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnGroupAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGroupAction (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStruct(data_sharing.mojom.PageHandler_ShowUI_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showUI');
          const result = this.impl.showUI();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_sharing.mojom.PageHandler_CloseUI_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeUI');
          const result = this.impl.closeUI(params.status_code);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.apiInitComplete');
          const result = this.impl.apiInitComplete();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.makeTabGroupShared');
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
          const params = decoder.decodeStruct(data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getShareLink');
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
          const params = decoder.decodeStruct(data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getTabGroupPreview');
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
          const params = decoder.decodeStruct(data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openTabGroup');
          const result = this.impl.openTabGroup(params.group_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.aboutToUnShareTabGroup');
          const result = this.impl.aboutToUnShareTabGroup(params.tab_group_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTabGroupUnShareComplete');
          const result = this.impl.onTabGroupUnShareComplete(params.tab_group_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onGroupAction');
          const result = this.impl.onGroupAction(params.action, params.progress);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

data_sharing.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAccessTokenFetched(access_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec,
      null,
      [access_token],
      false);
  }

  readGroups(read_groups_params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_sharing.mojom.Page_ReadGroups_ParamsSpec,
      data_sharing.mojom.Page_ReadGroups_ResponseParamsSpec,
      [read_groups_params],
      false);
  }

  readGroupWithToken(param) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec,
      data_sharing.mojom.Page_ReadGroupWithToken_ResponseParamsSpec,
      [param],
      false);
  }

  deleteGroup(group_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      data_sharing.mojom.Page_DeleteGroup_ParamsSpec,
      data_sharing.mojom.Page_DeleteGroup_ResponseParamsSpec,
      [group_id],
      false);
  }

  leaveGroup(group_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnAccessTokenFetched
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAccessTokenFetched (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReadGroups
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.Page_ReadGroups_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadGroups (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReadGroupWithToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadGroupWithToken (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DeleteGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.Page_DeleteGroup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteGroup (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: LeaveGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing.mojom.Page_LeaveGroup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LeaveGroup (4)');
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
          const params = decoder.decodeStruct(data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAccessTokenFetched');
          const result = this.impl.onAccessTokenFetched(params.access_token);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_sharing.mojom.Page_ReadGroups_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readGroups');
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
          const params = decoder.decodeStruct(data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readGroupWithToken');
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
          const params = decoder.decodeStruct(data_sharing.mojom.Page_DeleteGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteGroup');
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
          const params = decoder.decodeStruct(data_sharing.mojom.Page_LeaveGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.leaveGroup');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

data_sharing.mojom.PageReceiver = data_sharing.mojom.PageReceiver;

data_sharing.mojom.PagePtr = data_sharing.mojom.PageRemote;
data_sharing.mojom.PageRequest = data_sharing.mojom.PagePendingReceiver;

