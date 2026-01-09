// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar.mojom
// Module: side_panel.customize_chrome.mojom

'use strict';

// Module namespace
var side_panel = side_panel || {};
side_panel.customize_chrome = side_panel.customize_chrome || {};
side_panel.customize_chrome.mojom = side_panel.customize_chrome.mojom || {};


// Enum: ActionId
side_panel.customize_chrome.mojom.ActionId = {
  kShowBookmarks: 0,
  kShowHistoryCluster: 1,
  kShowReadAnything: 2,
  kShowReadingList: 3,
  kShowLensOverlay: 4,
  kShowSearchCompanion: 5,
  kHome: 6,
  kForward: 7,
  kNewIncognitoWindow: 8,
  kShowPasswordManager: 9,
  kShowPaymentMethods: 10,
  kShowAddresses: 11,
  kShowDownloads: 12,
  kClearBrowsingData: 13,
  kPrint: 14,
  kShowTranslate: 15,
  kSendTabToSelf: 16,
  kQrCodeGenerator: 17,
  kRouteMedia: 18,
  kTaskManager: 19,
  kDevTools: 20,
  kShowChromeLabs: 21,
  kCopyLink: 22,
  kTabSearch: 23,
  kSplitTab: 24,
  kContextualTasks: 25,
};

// Enum: CategoryId
side_panel.customize_chrome.mojom.CategoryId = {
  kNavigation: 0,
  kYourChrome: 1,
  kTools: 2,
};

// Struct: Action
side_panel.customize_chrome.mojom.ActionSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.Action',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'category', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'icon_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pinned', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_enterprise_controlled_pinned_state', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Category
side_panel.customize_chrome.mojom.CategorySpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.Category',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: CustomizeToolbarHandlerFactory
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory = {};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryPendingReceiver,
      handle);
    this.$ = new side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCustomizeToolbarHandler(client, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_ParamsSpec,
      null,
      [client, handler]);
  }

};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory.getRemote = function() {
  let remote = new side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCustomizeToolbarHandler
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory.CreateCustomizeToolbarHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryPtr = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRemote;
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRequest = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryPendingReceiver;


// Interface: CustomizeToolbarHandler
side_panel.customize_chrome.mojom.CustomizeToolbarHandler = {};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRemote = class {
  static get $interfaceName() {
    return 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.customize_chrome.mojom.CustomizeToolbarHandlerPendingReceiver,
      handle);
    this.$ = new side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  listActions() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ParamsSpec,
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ResponseParamsSpec,
      []);
  }

  listCategories() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ParamsSpec,
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ResponseParamsSpec,
      []);
  }

  pinAction(action_id, pinned) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_PinAction_ParamsSpec,
      null,
      [action_id, pinned]);
  }

  getIsCustomized() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ParamsSpec,
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ResponseParamsSpec,
      []);
  }

  resetToDefault() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ResetToDefault_ParamsSpec,
      null,
      []);
  }

};

side_panel.customize_chrome.mojom.CustomizeToolbarHandler.getRemote = function() {
  let remote = new side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.customize_chrome.mojom.CustomizeToolbarHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ListActions
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler.ListActions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler.ListActions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'actions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ListCategories
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler.ListCategories_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler.ListCategories_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'categories', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PinAction
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_PinAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler.PinAction_Params',
      packedSize: 24,
      fields: [
        { name: 'action_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pinned', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetIsCustomized
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler.GetIsCustomized_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler.GetIsCustomized_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'customized', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetToDefault
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ResetToDefault_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler.ResetToDefault_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerPtr = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRemote;
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRequest = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerPendingReceiver;


// Interface: CustomizeToolbarClient
side_panel.customize_chrome.mojom.CustomizeToolbarClient = {};

side_panel.customize_chrome.mojom.CustomizeToolbarClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarClientRemote = class {
  static get $interfaceName() {
    return 'side_panel.customize_chrome.mojom.CustomizeToolbarClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      side_panel.customize_chrome.mojom.CustomizeToolbarClientPendingReceiver,
      handle);
    this.$ = new side_panel.customize_chrome.mojom.CustomizeToolbarClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

side_panel.customize_chrome.mojom.CustomizeToolbarClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setActionPinned(action_id, pinned) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarClient_SetActionPinned_ParamsSpec,
      null,
      [action_id, pinned]);
  }

  notifyActionsUpdated() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      side_panel.customize_chrome.mojom.CustomizeToolbarClient_NotifyActionsUpdated_ParamsSpec,
      null,
      []);
  }

};

side_panel.customize_chrome.mojom.CustomizeToolbarClient.getRemote = function() {
  let remote = new side_panel.customize_chrome.mojom.CustomizeToolbarClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'side_panel.customize_chrome.mojom.CustomizeToolbarClient',
    'context');
  return remote.$;
};

// ParamsSpec for SetActionPinned
side_panel.customize_chrome.mojom.CustomizeToolbarClient_SetActionPinned_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.CustomizeToolbarClient.SetActionPinned_Params',
      packedSize: 24,
      fields: [
        { name: 'action_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pinned', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyActionsUpdated
side_panel.customize_chrome.mojom.CustomizeToolbarClient_NotifyActionsUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'side_panel.customize_chrome.mojom.CustomizeToolbarClient.NotifyActionsUpdated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
side_panel.customize_chrome.mojom.CustomizeToolbarClientPtr = side_panel.customize_chrome.mojom.CustomizeToolbarClientRemote;
side_panel.customize_chrome.mojom.CustomizeToolbarClientRequest = side_panel.customize_chrome.mojom.CustomizeToolbarClientPendingReceiver;

