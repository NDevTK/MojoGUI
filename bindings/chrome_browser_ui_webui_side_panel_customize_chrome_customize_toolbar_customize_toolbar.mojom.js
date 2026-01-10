// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/side_panel/customize_chrome/customize_toolbar/customize_toolbar.mojom
// Module: side_panel.customize_chrome.mojom

'use strict';

// Module namespace
var side_panel = side_panel || {};
side_panel.customize_chrome = side_panel.customize_chrome || {};
side_panel.customize_chrome.mojom = side_panel.customize_chrome.mojom || {};
var url = url || {};

side_panel.customize_chrome.mojom.ActionIdSpec = { $: mojo.internal.Enum() };
side_panel.customize_chrome.mojom.CategoryIdSpec = { $: mojo.internal.Enum() };
side_panel.customize_chrome.mojom.ActionSpec = { $: {} };
side_panel.customize_chrome.mojom.CategorySpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory = {};
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory.$interfaceName = 'side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory';
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler = {};
side_panel.customize_chrome.mojom.CustomizeToolbarHandler.$interfaceName = 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler';
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ResponseParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ResponseParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_PinAction_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ResponseParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ResetToDefault_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarClient = {};
side_panel.customize_chrome.mojom.CustomizeToolbarClient.$interfaceName = 'side_panel.customize_chrome.mojom.CustomizeToolbarClient';
side_panel.customize_chrome.mojom.CustomizeToolbarClient_SetActionPinned_ParamsSpec = { $: {} };
side_panel.customize_chrome.mojom.CustomizeToolbarClient_NotifyActionsUpdated_ParamsSpec = { $: {} };

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
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.ActionSpec, 'side_panel.customize_chrome.mojom.Action', [
      mojo.internal.StructField('id', 16, 0, side_panel.customize_chrome.mojom.ActionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pinned', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_enterprise_controlled_pinned_state', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('category', 20, 0, side_panel.customize_chrome.mojom.CategoryIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('icon_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Category
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CategorySpec, 'side_panel.customize_chrome.mojom.Category', [
      mojo.internal.StructField('id', 8, 0, side_panel.customize_chrome.mojom.CategoryIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CustomizeToolbarHandlerFactory
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory_CreateCustomizeToolbarHandler_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(side_panel.customize_chrome.mojom.CustomizeToolbarClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryPtr = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRemote;
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryRequest = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactoryPendingReceiver;


// Interface: CustomizeToolbarHandler
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ResponseParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListActions_ResponseParams', [
      mojo.internal.StructField('actions', 0, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.ActionSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ResponseParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ListCategories_ResponseParams', [
      mojo.internal.StructField('categories', 0, 0, mojo.internal.Array(side_panel.customize_chrome.mojom.CategorySpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_PinAction_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_PinAction_Params', [
      mojo.internal.StructField('action_id', 0, 0, side_panel.customize_chrome.mojom.ActionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('pinned', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ResponseParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_GetIsCustomized_ResponseParams', [
      mojo.internal.StructField('customized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ResetToDefault_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarHandler_ResetToDefault_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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

side_panel.customize_chrome.mojom.CustomizeToolbarHandlerPtr = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRemote;
side_panel.customize_chrome.mojom.CustomizeToolbarHandlerRequest = side_panel.customize_chrome.mojom.CustomizeToolbarHandlerPendingReceiver;


// Interface: CustomizeToolbarClient
mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarClient_SetActionPinned_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarClient_SetActionPinned_Params', [
      mojo.internal.StructField('action_id', 0, 0, side_panel.customize_chrome.mojom.ActionIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('pinned', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    side_panel.customize_chrome.mojom.CustomizeToolbarClient_NotifyActionsUpdated_ParamsSpec, 'side_panel.customize_chrome.mojom.CustomizeToolbarClient_NotifyActionsUpdated_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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

side_panel.customize_chrome.mojom.CustomizeToolbarClientPtr = side_panel.customize_chrome.mojom.CustomizeToolbarClientRemote;
side_panel.customize_chrome.mojom.CustomizeToolbarClientRequest = side_panel.customize_chrome.mojom.CustomizeToolbarClientPendingReceiver;

