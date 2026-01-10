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


// Enum: NewTabPageType
new_tab_footer.mojom.mojom.NewTabPageType = {
  kFirstPartyWebUI: 0,
  kExtension: 1,
  kOther: 2,
};
new_tab_footer.mojom.mojom.NewTabPageTypeSpec = { $: mojo.internal.Enum() };

// Struct: ManagementNotice
new_tab_footer.mojom.mojom.ManagementNoticeSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.ManagementNotice',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'custom_bitmap_data_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BackgroundAttribution
new_tab_footer.mojom.mojom.BackgroundAttributionSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.BackgroundAttribution',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: NewTabFooterHandlerFactory
new_tab_footer.mojom.mojom.NewTabFooterHandlerFactory = {};

new_tab_footer.mojom.mojom.NewTabFooterHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_footer.mojom.mojom.NewTabFooterHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'new_tab_footer.mojom.NewTabFooterHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_footer.mojom.mojom.NewTabFooterHandlerFactoryPendingReceiver,
      handle);
    this.$ = new new_tab_footer.mojom.mojom.NewTabFooterHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_footer.mojom.mojom.NewTabFooterHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createNewTabFooterHandler(document, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec,
      null,
      [document, handler]);
  }

};

new_tab_footer.mojom.mojom.NewTabFooterHandlerFactory.getRemote = function() {
  let remote = new new_tab_footer.mojom.mojom.NewTabFooterHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_footer.mojom.NewTabFooterHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateNewTabFooterHandler
new_tab_footer.mojom.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterHandlerFactory.CreateNewTabFooterHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'document', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(new_tab_footer.mojom.NewTabFooterDocumentRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(new_tab_footer.mojom.NewTabFooterHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
new_tab_footer.mojom.mojom.NewTabFooterHandlerFactoryPtr = new_tab_footer.mojom.mojom.NewTabFooterHandlerFactoryRemote;
new_tab_footer.mojom.mojom.NewTabFooterHandlerFactoryRequest = new_tab_footer.mojom.mojom.NewTabFooterHandlerFactoryPendingReceiver;


// Interface: NewTabFooterHandler
new_tab_footer.mojom.mojom.NewTabFooterHandler = {};

new_tab_footer.mojom.mojom.NewTabFooterHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_footer.mojom.mojom.NewTabFooterHandlerRemote = class {
  static get $interfaceName() {
    return 'new_tab_footer.mojom.NewTabFooterHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_footer.mojom.mojom.NewTabFooterHandlerPendingReceiver,
      handle);
    this.$ = new new_tab_footer.mojom.mojom.NewTabFooterHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_footer.mojom.mojom.NewTabFooterHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateNtpExtensionName() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec,
      null,
      []);
  }

  updateManagementNotice() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec,
      null,
      []);
  }

  updateAttachedTabState() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec,
      null,
      []);
  }

  updateBackgroundAttribution() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec,
      null,
      []);
  }

  openExtensionOptionsPageWithFallback() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec,
      null,
      []);
  }

  openManagementPage() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec,
      null,
      []);
  }

  openUrlInCurrentTab(url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec,
      null,
      [url]);
  }

  showContextMenu(point) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec,
      null,
      [point]);
  }

  notifyCustomizationButtonVisible() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec,
      null,
      []);
  }

};

new_tab_footer.mojom.mojom.NewTabFooterHandler.getRemote = function() {
  let remote = new new_tab_footer.mojom.mojom.NewTabFooterHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_footer.mojom.NewTabFooterHandler',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateNtpExtensionName
new_tab_footer.mojom.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterHandler.UpdateNtpExtensionName_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateManagementNotice
new_tab_footer.mojom.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterHandler.UpdateManagementNotice_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateAttachedTabState
new_tab_footer.mojom.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterHandler.UpdateAttachedTabState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateBackgroundAttribution
new_tab_footer.mojom.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterHandler.UpdateBackgroundAttribution_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenExtensionOptionsPageWithFallback
new_tab_footer.mojom.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterHandler.OpenExtensionOptionsPageWithFallback_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenManagementPage
new_tab_footer.mojom.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterHandler.OpenManagementPage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OpenUrlInCurrentTab
new_tab_footer.mojom.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterHandler.OpenUrlInCurrentTab_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowContextMenu
new_tab_footer.mojom.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterHandler.ShowContextMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyCustomizationButtonVisible
new_tab_footer.mojom.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterHandler.NotifyCustomizationButtonVisible_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
new_tab_footer.mojom.mojom.NewTabFooterHandlerPtr = new_tab_footer.mojom.mojom.NewTabFooterHandlerRemote;
new_tab_footer.mojom.mojom.NewTabFooterHandlerRequest = new_tab_footer.mojom.mojom.NewTabFooterHandlerPendingReceiver;


// Interface: NewTabFooterDocument
new_tab_footer.mojom.mojom.NewTabFooterDocument = {};

new_tab_footer.mojom.mojom.NewTabFooterDocumentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_footer.mojom.mojom.NewTabFooterDocumentRemote = class {
  static get $interfaceName() {
    return 'new_tab_footer.mojom.NewTabFooterDocument';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_footer.mojom.mojom.NewTabFooterDocumentPendingReceiver,
      handle);
    this.$ = new new_tab_footer.mojom.mojom.NewTabFooterDocumentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_footer.mojom.mojom.NewTabFooterDocumentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setNtpExtensionName(name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec,
      null,
      [name]);
  }

  setManagementNotice(notice) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec,
      null,
      [notice]);
  }

  attachedTabStateUpdated(ntp_type, can_customize_chrome) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec,
      null,
      [ntp_type, can_customize_chrome]);
  }

  setBackgroundAttribution(background_image_attribution) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_footer.mojom.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec,
      null,
      [background_image_attribution]);
  }

};

new_tab_footer.mojom.mojom.NewTabFooterDocument.getRemote = function() {
  let remote = new new_tab_footer.mojom.mojom.NewTabFooterDocumentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_footer.mojom.NewTabFooterDocument',
    'context');
  return remote.$;
};

// ParamsSpec for SetNtpExtensionName
new_tab_footer.mojom.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterDocument.SetNtpExtensionName_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetManagementNotice
new_tab_footer.mojom.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterDocument.SetManagementNotice_Params',
      packedSize: 16,
      fields: [
        { name: 'notice', packedOffset: 0, packedBitOffset: 0, type: new_tab_footer.mojom.ManagementNoticeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AttachedTabStateUpdated
new_tab_footer.mojom.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterDocument.AttachedTabStateUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'ntp_type', packedOffset: 0, packedBitOffset: 0, type: new_tab_footer.mojom.NewTabPageTypeSpec, nullable: false, minVersion: 0 },
        { name: 'can_customize_chrome', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBackgroundAttribution
new_tab_footer.mojom.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterDocument.SetBackgroundAttribution_Params',
      packedSize: 16,
      fields: [
        { name: 'background_image_attribution', packedOffset: 0, packedBitOffset: 0, type: new_tab_footer.mojom.BackgroundAttributionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
new_tab_footer.mojom.mojom.NewTabFooterDocumentPtr = new_tab_footer.mojom.mojom.NewTabFooterDocumentRemote;
new_tab_footer.mojom.mojom.NewTabFooterDocumentRequest = new_tab_footer.mojom.mojom.NewTabFooterDocumentPendingReceiver;

