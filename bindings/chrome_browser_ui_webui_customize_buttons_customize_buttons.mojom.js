// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/customize_buttons/customize_buttons.mojom
// Module: customize_buttons.mojom

'use strict';

// Module namespace
var customize_buttons = customize_buttons || {};
customize_buttons.mojom = customize_buttons.mojom || {};
var ui = ui || {};


// Enum: SidePanelOpenTrigger
customize_buttons.mojom.mojom.SidePanelOpenTrigger = {
  kNewTabPage: 0,
  kNewTabFooter: 1,
};
customize_buttons.mojom.mojom.SidePanelOpenTriggerSpec = { $: mojo.internal.Enum() };

// Interface: CustomizeButtonsHandlerFactory
customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactory = {};

customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'customize_buttons.mojom.CustomizeButtonsHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactoryPendingReceiver,
      handle);
    this.$ = new customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCustomizeButtonsHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactory.getRemote = function() {
  let remote = new customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_buttons.mojom.CustomizeButtonsHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCustomizeButtonsHandler
customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'customize_buttons.mojom.CustomizeButtonsHandlerFactory.CreateCustomizeButtonsHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactoryPtr = customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactoryRemote;
customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactoryRequest = customize_buttons.mojom.mojom.CustomizeButtonsHandlerFactoryPendingReceiver;


// Interface: CustomizeButtonsHandler
customize_buttons.mojom.mojom.CustomizeButtonsHandler = {};

customize_buttons.mojom.mojom.CustomizeButtonsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_buttons.mojom.mojom.CustomizeButtonsHandlerRemote = class {
  static get $interfaceName() {
    return 'customize_buttons.mojom.CustomizeButtonsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_buttons.mojom.mojom.CustomizeButtonsHandlerPendingReceiver,
      handle);
    this.$ = new customize_buttons.mojom.mojom.CustomizeButtonsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_buttons.mojom.mojom.CustomizeButtonsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  incrementCustomizeChromeButtonOpenCount() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_buttons.mojom.mojom.CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_ParamsSpec,
      null,
      []);
  }

  incrementWallpaperSearchButtonShownCount() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      customize_buttons.mojom.mojom.CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_ParamsSpec,
      null,
      []);
  }

  setCustomizeChromeSidePanelVisible(visible, section, trigger) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      customize_buttons.mojom.mojom.CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_ParamsSpec,
      null,
      [visible, section, trigger]);
  }

};

customize_buttons.mojom.mojom.CustomizeButtonsHandler.getRemote = function() {
  let remote = new customize_buttons.mojom.mojom.CustomizeButtonsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_buttons.mojom.CustomizeButtonsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for IncrementCustomizeChromeButtonOpenCount
customize_buttons.mojom.mojom.CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'customize_buttons.mojom.CustomizeButtonsHandler.IncrementCustomizeChromeButtonOpenCount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for IncrementWallpaperSearchButtonShownCount
customize_buttons.mojom.mojom.CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'customize_buttons.mojom.CustomizeButtonsHandler.IncrementWallpaperSearchButtonShownCount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetCustomizeChromeSidePanelVisible
customize_buttons.mojom.mojom.CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'customize_buttons.mojom.CustomizeButtonsHandler.SetCustomizeChromeSidePanelVisible_Params',
      packedSize: 24,
      fields: [
        { name: 'visible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'section', packedOffset: 0, packedBitOffset: 0, type: side_panel.mojom.CustomizeChromeSectionSpec, nullable: false, minVersion: 0 },
        { name: 'trigger', packedOffset: 4, packedBitOffset: 0, type: customize_buttons.mojom.SidePanelOpenTriggerSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
customize_buttons.mojom.mojom.CustomizeButtonsHandlerPtr = customize_buttons.mojom.mojom.CustomizeButtonsHandlerRemote;
customize_buttons.mojom.mojom.CustomizeButtonsHandlerRequest = customize_buttons.mojom.mojom.CustomizeButtonsHandlerPendingReceiver;


// Interface: CustomizeButtonsDocument
customize_buttons.mojom.mojom.CustomizeButtonsDocument = {};

customize_buttons.mojom.mojom.CustomizeButtonsDocumentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_buttons.mojom.mojom.CustomizeButtonsDocumentRemote = class {
  static get $interfaceName() {
    return 'customize_buttons.mojom.CustomizeButtonsDocument';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_buttons.mojom.mojom.CustomizeButtonsDocumentPendingReceiver,
      handle);
    this.$ = new customize_buttons.mojom.mojom.CustomizeButtonsDocumentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_buttons.mojom.mojom.CustomizeButtonsDocumentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setCustomizeChromeSidePanelVisibility(visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_buttons.mojom.mojom.CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_ParamsSpec,
      null,
      [visible]);
  }

};

customize_buttons.mojom.mojom.CustomizeButtonsDocument.getRemote = function() {
  let remote = new customize_buttons.mojom.mojom.CustomizeButtonsDocumentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_buttons.mojom.CustomizeButtonsDocument',
    'context');
  return remote.$;
};

// ParamsSpec for SetCustomizeChromeSidePanelVisibility
customize_buttons.mojom.mojom.CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'customize_buttons.mojom.CustomizeButtonsDocument.SetCustomizeChromeSidePanelVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
customize_buttons.mojom.mojom.CustomizeButtonsDocumentPtr = customize_buttons.mojom.mojom.CustomizeButtonsDocumentRemote;
customize_buttons.mojom.mojom.CustomizeButtonsDocumentRequest = customize_buttons.mojom.mojom.CustomizeButtonsDocumentPendingReceiver;

