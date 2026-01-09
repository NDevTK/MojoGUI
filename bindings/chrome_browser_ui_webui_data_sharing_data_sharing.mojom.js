// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/data_sharing/data_sharing.mojom
// Module: data_sharing.mojom

'use strict';

// Module namespace
var data_sharing = data_sharing || {};
data_sharing.mojom = data_sharing.mojom || {};


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

// Interface: PageHandlerFactory
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
      data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$,
      null,
      [page, handler]);
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
}};

// ParamsSpec for CreatePageHandler
data_sharing.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
data_sharing.mojom.PageHandlerFactoryPtr = data_sharing.mojom.PageHandlerFactoryRemote;
data_sharing.mojom.PageHandlerFactoryRequest = data_sharing.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
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
      data_sharing.mojom.PageHandler_ShowUI_ParamsSpec.$,
      null,
      []);
  }

  closeUI(status_code) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_sharing.mojom.PageHandler_CloseUI_ParamsSpec.$,
      null,
      [status_code]);
  }

  apiInitComplete() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec.$,
      null,
      []);
  }

  makeTabGroupShared(tab_group_id, group_id, access_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec.$,
      data_sharing.mojom.PageHandler_MakeTabGroupShared_ResponseParamsSpec.$,
      [tab_group_id, group_id, access_token]);
  }

  getShareLink(group_id, access_token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec.$,
      data_sharing.mojom.PageHandler_GetShareLink_ResponseParamsSpec.$,
      [group_id, access_token]);
  }

  getTabGroupPreview(group_id, access_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec.$,
      data_sharing.mojom.PageHandler_GetTabGroupPreview_ResponseParamsSpec.$,
      [group_id, access_token]);
  }

  openTabGroup(group_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec.$,
      null,
      [group_id]);
  }

  aboutToUnShareTabGroup(tab_group_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec.$,
      null,
      [tab_group_id]);
  }

  onTabGroupUnShareComplete(tab_group_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec.$,
      null,
      [tab_group_id]);
  }

  onGroupAction(action, progress) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec.$,
      null,
      [action, progress]);
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
}};

// ParamsSpec for ShowUI
data_sharing.mojom.PageHandler_ShowUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandler.ShowUI_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CloseUI
data_sharing.mojom.PageHandler_CloseUI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandler.CloseUI_Params',
      packedSize: 16,
      fields: [
        { name: 'status_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ApiInitComplete
data_sharing.mojom.PageHandler_ApiInitComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandler.ApiInitComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for MakeTabGroupShared
data_sharing.mojom.PageHandler_MakeTabGroupShared_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandler.MakeTabGroupShared_Params',
      packedSize: 32,
      fields: [
        { name: 'tab_group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'group_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'access_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

data_sharing.mojom.PageHandler_MakeTabGroupShared_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandler.MakeTabGroupShared_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetShareLink
data_sharing.mojom.PageHandler_GetShareLink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandler.GetShareLink_Params',
      packedSize: 24,
      fields: [
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'access_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

data_sharing.mojom.PageHandler_GetShareLink_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandler.GetShareLink_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetTabGroupPreview
data_sharing.mojom.PageHandler_GetTabGroupPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandler.GetTabGroupPreview_Params',
      packedSize: 24,
      fields: [
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'access_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

data_sharing.mojom.PageHandler_GetTabGroupPreview_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandler.GetTabGroupPreview_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'group_preview', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OpenTabGroup
data_sharing.mojom.PageHandler_OpenTabGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandler.OpenTabGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for AboutToUnShareTabGroup
data_sharing.mojom.PageHandler_AboutToUnShareTabGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandler.AboutToUnShareTabGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnTabGroupUnShareComplete
data_sharing.mojom.PageHandler_OnTabGroupUnShareComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandler.OnTabGroupUnShareComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnGroupAction
data_sharing.mojom.PageHandler_OnGroupAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.PageHandler.OnGroupAction_Params',
      packedSize: 24,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'progress', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
data_sharing.mojom.PageHandlerPtr = data_sharing.mojom.PageHandlerRemote;
data_sharing.mojom.PageHandlerRequest = data_sharing.mojom.PageHandlerPendingReceiver;


// Interface: Page
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
      data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec.$,
      null,
      [access_token]);
  }

  readGroups(read_groups_params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_sharing.mojom.Page_ReadGroups_ParamsSpec.$,
      data_sharing.mojom.Page_ReadGroups_ResponseParamsSpec.$,
      [read_groups_params]);
  }

  readGroupWithToken(param) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec.$,
      data_sharing.mojom.Page_ReadGroupWithToken_ResponseParamsSpec.$,
      [param]);
  }

  deleteGroup(group_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      data_sharing.mojom.Page_DeleteGroup_ParamsSpec.$,
      data_sharing.mojom.Page_DeleteGroup_ResponseParamsSpec.$,
      [group_id]);
  }

  leaveGroup(group_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      data_sharing.mojom.Page_LeaveGroup_ParamsSpec.$,
      data_sharing.mojom.Page_LeaveGroup_ResponseParamsSpec.$,
      [group_id]);
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
}};

// ParamsSpec for OnAccessTokenFetched
data_sharing.mojom.Page_OnAccessTokenFetched_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.Page.OnAccessTokenFetched_Params',
      packedSize: 16,
      fields: [
        { name: 'access_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ReadGroups
data_sharing.mojom.Page_ReadGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.Page.ReadGroups_Params',
      packedSize: 16,
      fields: [
        { name: 'read_groups_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

data_sharing.mojom.Page_ReadGroups_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.Page.ReadGroups_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ReadGroupWithToken
data_sharing.mojom.Page_ReadGroupWithToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.Page.ReadGroupWithToken_Params',
      packedSize: 16,
      fields: [
        { name: 'param', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

data_sharing.mojom.Page_ReadGroupWithToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.Page.ReadGroupWithToken_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DeleteGroup
data_sharing.mojom.Page_DeleteGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.Page.DeleteGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

data_sharing.mojom.Page_DeleteGroup_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.Page.DeleteGroup_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for LeaveGroup
data_sharing.mojom.Page_LeaveGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.Page.LeaveGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'group_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

data_sharing.mojom.Page_LeaveGroup_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing.mojom.Page.LeaveGroup_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
data_sharing.mojom.PagePtr = data_sharing.mojom.PageRemote;
data_sharing.mojom.PageRequest = data_sharing.mojom.PagePendingReceiver;

