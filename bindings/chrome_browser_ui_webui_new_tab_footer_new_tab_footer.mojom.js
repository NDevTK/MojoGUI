// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_footer/new_tab_footer.mojom
// Module: new_tab_footer.mojom

'use strict';

// Module namespace
var new_tab_footer = new_tab_footer || {};
new_tab_footer.mojom = new_tab_footer.mojom || {};


// Enum: NewTabPageType
new_tab_footer.mojom.NewTabPageType = {
  kFirstPartyWebUI: 0,
  kExtension: 1,
  kOther: 2,
};

// Interface: NewTabFooterHandlerFactory
new_tab_footer.mojom.NewTabFooterHandlerFactory = {};

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
      null,
      [document, handler],
      undefined,
      undefined
    );
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

// ParamsSpec for CreateNewTabFooterHandler
new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterHandlerFactory.CreateNewTabFooterHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'document', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
new_tab_footer.mojom.NewTabFooterHandlerFactoryPtr = new_tab_footer.mojom.NewTabFooterHandlerFactoryRemote;
new_tab_footer.mojom.NewTabFooterHandlerFactoryRequest = new_tab_footer.mojom.NewTabFooterHandlerFactoryPendingReceiver;


// Interface: NewTabFooterHandler
new_tab_footer.mojom.NewTabFooterHandler = {};

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
      null,
      [],
      undefined,
      undefined
    );
  }

  updateManagementNotice() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  updateAttachedTabState() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  updateBackgroundAttribution() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  openExtensionOptionsPageWithFallback() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  openManagementPage() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  openUrlInCurrentTab(url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec,
      null,
      null,
      [url],
      undefined,
      undefined
    );
  }

  showContextMenu(point) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec,
      null,
      null,
      [point],
      undefined,
      undefined
    );
  }

  notifyCustomizationButtonVisible() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for UpdateNtpExtensionName
new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec = {
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
new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec = {
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
new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec = {
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
new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec = {
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
new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec = {
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
new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec = {
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
new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterHandler.OpenUrlInCurrentTab_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowContextMenu
new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterHandler.ShowContextMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyCustomizationButtonVisible
new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec = {
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
new_tab_footer.mojom.NewTabFooterHandlerPtr = new_tab_footer.mojom.NewTabFooterHandlerRemote;
new_tab_footer.mojom.NewTabFooterHandlerRequest = new_tab_footer.mojom.NewTabFooterHandlerPendingReceiver;


// Interface: NewTabFooterDocument
new_tab_footer.mojom.NewTabFooterDocument = {};

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
      null,
      [name],
      undefined,
      undefined
    );
  }

  setManagementNotice(notice) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec,
      null,
      null,
      [notice],
      undefined,
      undefined
    );
  }

  attachedTabStateUpdated(ntp_type, can_customize_chrome) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec,
      null,
      null,
      [ntp_type, can_customize_chrome],
      undefined,
      undefined
    );
  }

  setBackgroundAttribution(background_image_attribution) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec,
      null,
      null,
      [background_image_attribution],
      undefined,
      undefined
    );
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

// ParamsSpec for SetNtpExtensionName
new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterDocument.SetNtpExtensionName_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetManagementNotice
new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterDocument.SetManagementNotice_Params',
      packedSize: 16,
      fields: [
        { name: 'notice', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AttachedTabStateUpdated
new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterDocument.AttachedTabStateUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'ntp_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'can_customize_chrome', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetBackgroundAttribution
new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_tab_footer.mojom.NewTabFooterDocument.SetBackgroundAttribution_Params',
      packedSize: 16,
      fields: [
        { name: 'background_image_attribution', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
new_tab_footer.mojom.NewTabFooterDocumentPtr = new_tab_footer.mojom.NewTabFooterDocumentRemote;
new_tab_footer.mojom.NewTabFooterDocumentRequest = new_tab_footer.mojom.NewTabFooterDocumentPendingReceiver;

