// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_footer/new_tab_footer.mojom
// Module: new_tab_footer.mojom

'use strict';

// Module namespace
var new_tab_footer = new_tab_footer || {};
new_tab_footer.mojom = new_tab_footer.mojom || {};
var url = url || {};
var ui = ui || {};
var gfx = gfx || {};

new_tab_footer.mojom.NewTabPageTypeSpec = { $: mojo.internal.Enum() };
new_tab_footer.mojom.ManagementNoticeSpec = { $: {} };
new_tab_footer.mojom.BackgroundAttributionSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandlerFactory = {};
new_tab_footer.mojom.NewTabFooterHandlerFactory.$interfaceName = 'new_tab_footer.mojom.NewTabFooterHandlerFactory';
new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler = {};
new_tab_footer.mojom.NewTabFooterHandler.$interfaceName = 'new_tab_footer.mojom.NewTabFooterHandler';
new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterDocument = {};
new_tab_footer.mojom.NewTabFooterDocument.$interfaceName = 'new_tab_footer.mojom.NewTabFooterDocument';
new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec = { $: {} };
new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec = { $: {} };

// Enum: NewTabPageType
new_tab_footer.mojom.NewTabPageType = {
  kFirstPartyWebUI: 0,
  kExtension: 1,
  kOther: 2,
};

// Struct: ManagementNotice
mojo.internal.Struct(
    new_tab_footer.mojom.ManagementNoticeSpec, 'new_tab_footer.mojom.ManagementNotice', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('custom_bitmap_data_url', 8, 0, url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BackgroundAttribution
mojo.internal.Struct(
    new_tab_footer.mojom.BackgroundAttributionSpec, 'new_tab_footer.mojom.BackgroundAttribution', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: NewTabFooterHandlerFactory
mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_Params', [
      mojo.internal.StructField('document', 0, 0, mojo.internal.InterfaceProxy(new_tab_footer.mojom.NewTabFooterDocumentRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(new_tab_footer.mojom.NewTabFooterHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

new_tab_footer.mojom.NewTabFooterHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_footer.mojom.NewTabFooterHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'new_tab_footer.mojom.NewTabFooterHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_footer.mojom.NewTabFooterHandlerFactoryPendingReceiver,
      handle);
    this.$ = new new_tab_footer.mojom.NewTabFooterHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_footer.mojom.NewTabFooterHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createNewTabFooterHandler(document, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec,
      null,
      [document, handler]);
  }

};

new_tab_footer.mojom.NewTabFooterHandlerFactory.getRemote = function() {
  let remote = new new_tab_footer.mojom.NewTabFooterHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_footer.mojom.NewTabFooterHandlerFactory',
    'context');
  return remote.$;
};

new_tab_footer.mojom.NewTabFooterHandlerFactoryPtr = new_tab_footer.mojom.NewTabFooterHandlerFactoryRemote;
new_tab_footer.mojom.NewTabFooterHandlerFactoryRequest = new_tab_footer.mojom.NewTabFooterHandlerFactoryPendingReceiver;


// Interface: NewTabFooterHandler
mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_Params', [
    ],
    [[0, 8]]);

new_tab_footer.mojom.NewTabFooterHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_footer.mojom.NewTabFooterHandlerRemote = class {
  static get $interfaceName() {
    return 'new_tab_footer.mojom.NewTabFooterHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_footer.mojom.NewTabFooterHandlerPendingReceiver,
      handle);
    this.$ = new new_tab_footer.mojom.NewTabFooterHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_footer.mojom.NewTabFooterHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateNtpExtensionName() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec,
      null,
      []);
  }

  updateManagementNotice() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec,
      null,
      []);
  }

  updateAttachedTabState() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec,
      null,
      []);
  }

  updateBackgroundAttribution() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec,
      null,
      []);
  }

  openExtensionOptionsPageWithFallback() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec,
      null,
      []);
  }

  openManagementPage() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec,
      null,
      []);
  }

  openUrlInCurrentTab(url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec,
      null,
      [url]);
  }

  showContextMenu(point) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec,
      null,
      [point]);
  }

  notifyCustomizationButtonVisible() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec,
      null,
      []);
  }

};

new_tab_footer.mojom.NewTabFooterHandler.getRemote = function() {
  let remote = new new_tab_footer.mojom.NewTabFooterHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_footer.mojom.NewTabFooterHandler',
    'context');
  return remote.$;
};

new_tab_footer.mojom.NewTabFooterHandlerPtr = new_tab_footer.mojom.NewTabFooterHandlerRemote;
new_tab_footer.mojom.NewTabFooterHandlerRequest = new_tab_footer.mojom.NewTabFooterHandlerPendingReceiver;


// Interface: NewTabFooterDocument
mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_Params', [
      mojo.internal.StructField('notice', 0, 0, new_tab_footer.mojom.ManagementNoticeSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_Params', [
      mojo.internal.StructField('ntp_type', 0, 0, new_tab_footer.mojom.NewTabPageTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('can_customize_chrome', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_Params', [
      mojo.internal.StructField('background_image_attribution', 0, 0, new_tab_footer.mojom.BackgroundAttributionSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

new_tab_footer.mojom.NewTabFooterDocumentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_footer.mojom.NewTabFooterDocumentRemote = class {
  static get $interfaceName() {
    return 'new_tab_footer.mojom.NewTabFooterDocument';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_footer.mojom.NewTabFooterDocumentPendingReceiver,
      handle);
    this.$ = new new_tab_footer.mojom.NewTabFooterDocumentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_footer.mojom.NewTabFooterDocumentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setNtpExtensionName(name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec,
      null,
      [name]);
  }

  setManagementNotice(notice) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec,
      null,
      [notice]);
  }

  attachedTabStateUpdated(ntp_type, can_customize_chrome) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec,
      null,
      [ntp_type, can_customize_chrome]);
  }

  setBackgroundAttribution(background_image_attribution) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec,
      null,
      [background_image_attribution]);
  }

};

new_tab_footer.mojom.NewTabFooterDocument.getRemote = function() {
  let remote = new new_tab_footer.mojom.NewTabFooterDocumentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_footer.mojom.NewTabFooterDocument',
    'context');
  return remote.$;
};

new_tab_footer.mojom.NewTabFooterDocumentPtr = new_tab_footer.mojom.NewTabFooterDocumentRemote;
new_tab_footer.mojom.NewTabFooterDocumentRequest = new_tab_footer.mojom.NewTabFooterDocumentPendingReceiver;

