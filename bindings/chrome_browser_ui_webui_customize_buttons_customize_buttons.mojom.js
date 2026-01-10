// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/customize_buttons/customize_buttons.mojom
// Module: customize_buttons.mojom

'use strict';

// Module namespace
var customize_buttons = customize_buttons || {};
customize_buttons.mojom = customize_buttons.mojom || {};
var ui = ui || {};

customize_buttons.mojom.SidePanelOpenTriggerSpec = { $: mojo.internal.Enum() };
customize_buttons.mojom.CustomizeButtonsHandlerFactory = {};
customize_buttons.mojom.CustomizeButtonsHandlerFactory.$interfaceName = 'customize_buttons.mojom.CustomizeButtonsHandlerFactory';
customize_buttons.mojom.CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_ParamsSpec = { $: {} };
customize_buttons.mojom.CustomizeButtonsHandler = {};
customize_buttons.mojom.CustomizeButtonsHandler.$interfaceName = 'customize_buttons.mojom.CustomizeButtonsHandler';
customize_buttons.mojom.CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_ParamsSpec = { $: {} };
customize_buttons.mojom.CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_ParamsSpec = { $: {} };
customize_buttons.mojom.CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_ParamsSpec = { $: {} };
customize_buttons.mojom.CustomizeButtonsDocument = {};
customize_buttons.mojom.CustomizeButtonsDocument.$interfaceName = 'customize_buttons.mojom.CustomizeButtonsDocument';
customize_buttons.mojom.CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_ParamsSpec = { $: {} };

// Enum: SidePanelOpenTrigger
customize_buttons.mojom.SidePanelOpenTrigger = {
  kNewTabPage: 0,
  kNewTabFooter: 1,
};

// Interface: CustomizeButtonsHandlerFactory
mojo.internal.Struct(
    customize_buttons.mojom.CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_ParamsSpec, 'customize_buttons.mojom.CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(customize_buttons.mojom.CustomizeButtonsDocumentRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(customize_buttons.mojom.CustomizeButtonsHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

customize_buttons.mojom.CustomizeButtonsHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_buttons.mojom.CustomizeButtonsHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'customize_buttons.mojom.CustomizeButtonsHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_buttons.mojom.CustomizeButtonsHandlerFactoryPendingReceiver,
      handle);
    this.$ = new customize_buttons.mojom.CustomizeButtonsHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_buttons.mojom.CustomizeButtonsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCustomizeButtonsHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_buttons.mojom.CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

customize_buttons.mojom.CustomizeButtonsHandlerFactory.getRemote = function() {
  let remote = new customize_buttons.mojom.CustomizeButtonsHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_buttons.mojom.CustomizeButtonsHandlerFactory',
    'context');
  return remote.$;
};

customize_buttons.mojom.CustomizeButtonsHandlerFactoryPtr = customize_buttons.mojom.CustomizeButtonsHandlerFactoryRemote;
customize_buttons.mojom.CustomizeButtonsHandlerFactoryRequest = customize_buttons.mojom.CustomizeButtonsHandlerFactoryPendingReceiver;


// Interface: CustomizeButtonsHandler
mojo.internal.Struct(
    customize_buttons.mojom.CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_ParamsSpec, 'customize_buttons.mojom.CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    customize_buttons.mojom.CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_ParamsSpec, 'customize_buttons.mojom.CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    customize_buttons.mojom.CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_ParamsSpec, 'customize_buttons.mojom.CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_Params', [
      mojo.internal.StructField('visible', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('section', 0, 0, side_panel.mojom.CustomizeChromeSectionSpec, null, false, 0, undefined),
      mojo.internal.StructField('trigger', 4, 0, customize_buttons.mojom.SidePanelOpenTriggerSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

customize_buttons.mojom.CustomizeButtonsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_buttons.mojom.CustomizeButtonsHandlerRemote = class {
  static get $interfaceName() {
    return 'customize_buttons.mojom.CustomizeButtonsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_buttons.mojom.CustomizeButtonsHandlerPendingReceiver,
      handle);
    this.$ = new customize_buttons.mojom.CustomizeButtonsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_buttons.mojom.CustomizeButtonsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  incrementCustomizeChromeButtonOpenCount() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_buttons.mojom.CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_ParamsSpec,
      null,
      []);
  }

  incrementWallpaperSearchButtonShownCount() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      customize_buttons.mojom.CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_ParamsSpec,
      null,
      []);
  }

  setCustomizeChromeSidePanelVisible(visible, section, trigger) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      customize_buttons.mojom.CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_ParamsSpec,
      null,
      [visible, section, trigger]);
  }

};

customize_buttons.mojom.CustomizeButtonsHandler.getRemote = function() {
  let remote = new customize_buttons.mojom.CustomizeButtonsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_buttons.mojom.CustomizeButtonsHandler',
    'context');
  return remote.$;
};

customize_buttons.mojom.CustomizeButtonsHandlerPtr = customize_buttons.mojom.CustomizeButtonsHandlerRemote;
customize_buttons.mojom.CustomizeButtonsHandlerRequest = customize_buttons.mojom.CustomizeButtonsHandlerPendingReceiver;


// Interface: CustomizeButtonsDocument
mojo.internal.Struct(
    customize_buttons.mojom.CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_ParamsSpec, 'customize_buttons.mojom.CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

customize_buttons.mojom.CustomizeButtonsDocumentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_buttons.mojom.CustomizeButtonsDocumentRemote = class {
  static get $interfaceName() {
    return 'customize_buttons.mojom.CustomizeButtonsDocument';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_buttons.mojom.CustomizeButtonsDocumentPendingReceiver,
      handle);
    this.$ = new customize_buttons.mojom.CustomizeButtonsDocumentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_buttons.mojom.CustomizeButtonsDocumentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setCustomizeChromeSidePanelVisibility(visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_buttons.mojom.CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_ParamsSpec,
      null,
      [visible]);
  }

};

customize_buttons.mojom.CustomizeButtonsDocument.getRemote = function() {
  let remote = new customize_buttons.mojom.CustomizeButtonsDocumentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_buttons.mojom.CustomizeButtonsDocument',
    'context');
  return remote.$;
};

customize_buttons.mojom.CustomizeButtonsDocumentPtr = customize_buttons.mojom.CustomizeButtonsDocumentRemote;
customize_buttons.mojom.CustomizeButtonsDocumentRequest = customize_buttons.mojom.CustomizeButtonsDocumentPendingReceiver;

