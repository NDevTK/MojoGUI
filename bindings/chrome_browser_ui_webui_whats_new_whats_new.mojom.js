// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/whats_new/whats_new.mojom
// Module: whats_new.mojom

'use strict';

// Module namespace
var whats_new = whats_new || {};
whats_new.mojom = whats_new.mojom || {};
var url = url || {};


// Enum: ScrollDepth
whats_new.mojom.mojom.ScrollDepth = {
  k0: 0,
  k25: 1,
  k50: 2,
  k75: 3,
  k100: 4,
};
whats_new.mojom.mojom.ScrollDepthSpec = { $: mojo.internal.Enum() };

// Enum: ModulePosition
whats_new.mojom.mojom.ModulePosition = {
  kSpotlight1: 0,
  kSpotlight2: 1,
  kSpotlight3: 2,
  kSpotlight4: 3,
  kExploreMore1: 4,
  kExploreMore2: 5,
  kExploreMore3: 6,
  kExploreMore4: 7,
  kExploreMore5: 8,
  kExploreMore6: 9,
  kUndefined: 10,
};
whats_new.mojom.mojom.ModulePositionSpec = { $: mojo.internal.Enum() };

// Interface: PageHandlerFactory
whats_new.mojom.mojom.PageHandlerFactory = {};

whats_new.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

whats_new.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'whats_new.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      whats_new.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new whats_new.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

whats_new.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      whats_new.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

whats_new.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new whats_new.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'whats_new.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
whats_new.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandlerFactory.CreatePageHandler_Params',
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
whats_new.mojom.mojom.PageHandlerFactoryPtr = whats_new.mojom.mojom.PageHandlerFactoryRemote;
whats_new.mojom.mojom.PageHandlerFactoryRequest = whats_new.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
whats_new.mojom.mojom.PageHandler = {};

whats_new.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

whats_new.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'whats_new.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      whats_new.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new whats_new.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

whats_new.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getServerUrl(is_staging) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      whats_new.mojom.mojom.PageHandler_GetServerUrl_ParamsSpec,
      whats_new.mojom.mojom.PageHandler_GetServerUrl_ResponseParamsSpec,
      [is_staging]);
  }

  recordTimeToLoadContent(time) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec,
      null,
      [time]);
  }

  recordVersionPageLoaded(is_auto_open) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec,
      null,
      [is_auto_open]);
  }

  recordEditionPageLoaded(page_uid, is_auto_open) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec,
      null,
      [page_uid, is_auto_open]);
  }

  recordModuleImpression(module_name, position) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordModuleImpression_ParamsSpec,
      null,
      [module_name, position]);
  }

  recordExploreMoreToggled(expanded) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec,
      null,
      [expanded]);
  }

  recordScrollDepth(depth) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordScrollDepth_ParamsSpec,
      null,
      [depth]);
  }

  recordTimeOnPage(time) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordTimeOnPage_ParamsSpec,
      null,
      [time]);
  }

  recordModuleLinkClicked(module_name, position) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec,
      null,
      [module_name, position]);
  }

  recordModuleVideoStarted(module_name, position) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec,
      null,
      [module_name, position]);
  }

  recordModuleVideoEnded(module_name, position) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec,
      null,
      [module_name, position]);
  }

  recordModulePlayClicked(module_name, position) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec,
      null,
      [module_name, position]);
  }

  recordModulePauseClicked(module_name, position) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec,
      null,
      [module_name, position]);
  }

  recordModuleRestartClicked(module_name, position) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec,
      null,
      [module_name, position]);
  }

  recordBrowserCommandExecuted() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec,
      null,
      []);
  }

  recordQrCodeToggled(expanded) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec,
      null,
      [expanded]);
  }

  recordNavClick() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordNavClick_ParamsSpec,
      null,
      []);
  }

  recordFeatureTileNavigation() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec,
      null,
      []);
  }

  recordCarouselScrollButtonClick() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec,
      null,
      []);
  }

  recordExpandMediaToggled(module_name, expanded) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec,
      null,
      [module_name, expanded]);
  }

  recordCtaClick() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordCtaClick_ParamsSpec,
      null,
      []);
  }

  recordNextButtonClick() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      whats_new.mojom.mojom.PageHandler_RecordNextButtonClick_ParamsSpec,
      null,
      []);
  }

};

whats_new.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new whats_new.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'whats_new.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetServerUrl
whats_new.mojom.mojom.PageHandler_GetServerUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.GetServerUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'is_staging', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

whats_new.mojom.mojom.PageHandler_GetServerUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.GetServerUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordTimeToLoadContent
whats_new.mojom.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordTimeToLoadContent_Params',
      packedSize: 16,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.JSTimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordVersionPageLoaded
whats_new.mojom.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordVersionPageLoaded_Params',
      packedSize: 16,
      fields: [
        { name: 'is_auto_open', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordEditionPageLoaded
whats_new.mojom.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordEditionPageLoaded_Params',
      packedSize: 24,
      fields: [
        { name: 'page_uid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_auto_open', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RecordModuleImpression
whats_new.mojom.mojom.PageHandler_RecordModuleImpression_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordModuleImpression_Params',
      packedSize: 24,
      fields: [
        { name: 'module_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: whats_new.mojom.ModulePositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RecordExploreMoreToggled
whats_new.mojom.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordExploreMoreToggled_Params',
      packedSize: 16,
      fields: [
        { name: 'expanded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordScrollDepth
whats_new.mojom.mojom.PageHandler_RecordScrollDepth_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordScrollDepth_Params',
      packedSize: 16,
      fields: [
        { name: 'depth', packedOffset: 0, packedBitOffset: 0, type: whats_new.mojom.ScrollDepthSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordTimeOnPage
whats_new.mojom.mojom.PageHandler_RecordTimeOnPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordTimeOnPage_Params',
      packedSize: 16,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordModuleLinkClicked
whats_new.mojom.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordModuleLinkClicked_Params',
      packedSize: 24,
      fields: [
        { name: 'module_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: whats_new.mojom.ModulePositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RecordModuleVideoStarted
whats_new.mojom.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordModuleVideoStarted_Params',
      packedSize: 24,
      fields: [
        { name: 'module_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: whats_new.mojom.ModulePositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RecordModuleVideoEnded
whats_new.mojom.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordModuleVideoEnded_Params',
      packedSize: 24,
      fields: [
        { name: 'module_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: whats_new.mojom.ModulePositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RecordModulePlayClicked
whats_new.mojom.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordModulePlayClicked_Params',
      packedSize: 24,
      fields: [
        { name: 'module_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: whats_new.mojom.ModulePositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RecordModulePauseClicked
whats_new.mojom.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordModulePauseClicked_Params',
      packedSize: 24,
      fields: [
        { name: 'module_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: whats_new.mojom.ModulePositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RecordModuleRestartClicked
whats_new.mojom.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordModuleRestartClicked_Params',
      packedSize: 24,
      fields: [
        { name: 'module_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: whats_new.mojom.ModulePositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RecordBrowserCommandExecuted
whats_new.mojom.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordBrowserCommandExecuted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RecordQrCodeToggled
whats_new.mojom.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordQrCodeToggled_Params',
      packedSize: 16,
      fields: [
        { name: 'expanded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordNavClick
whats_new.mojom.mojom.PageHandler_RecordNavClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordNavClick_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RecordFeatureTileNavigation
whats_new.mojom.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordFeatureTileNavigation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RecordCarouselScrollButtonClick
whats_new.mojom.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordCarouselScrollButtonClick_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RecordExpandMediaToggled
whats_new.mojom.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordExpandMediaToggled_Params',
      packedSize: 24,
      fields: [
        { name: 'module_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'expanded', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RecordCtaClick
whats_new.mojom.mojom.PageHandler_RecordCtaClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordCtaClick_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RecordNextButtonClick
whats_new.mojom.mojom.PageHandler_RecordNextButtonClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'whats_new.mojom.PageHandler.RecordNextButtonClick_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
whats_new.mojom.mojom.PageHandlerPtr = whats_new.mojom.mojom.PageHandlerRemote;
whats_new.mojom.mojom.PageHandlerRequest = whats_new.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
whats_new.mojom.mojom.Page = {};

whats_new.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

whats_new.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'whats_new.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      whats_new.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new whats_new.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

whats_new.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

whats_new.mojom.mojom.Page.getRemote = function() {
  let remote = new whats_new.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'whats_new.mojom.Page',
    'context');
  return remote.$;
};

// Legacy compatibility
whats_new.mojom.mojom.PagePtr = whats_new.mojom.mojom.PageRemote;
whats_new.mojom.mojom.PageRequest = whats_new.mojom.mojom.PagePendingReceiver;

