// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/whats_new/whats_new.mojom
// Module: whats_new.mojom

'use strict';

// Module namespace
var whats_new = whats_new || {};
whats_new.mojom = whats_new.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

whats_new.mojom.ScrollDepthSpec = { $: mojo.internal.Enum() };
whats_new.mojom.ModulePositionSpec = { $: mojo.internal.Enum() };
whats_new.mojom.PageHandlerFactory = {};
whats_new.mojom.PageHandlerFactory.$interfaceName = 'whats_new.mojom.PageHandlerFactory';
whats_new.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler = {};
whats_new.mojom.PageHandler.$interfaceName = 'whats_new.mojom.PageHandler';
whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_GetServerUrl_ResponseParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec = { $: {} };
whats_new.mojom.PageHandler_RecordNextButtonClick_ParamsSpec = { $: {} };
whats_new.mojom.Page = {};
whats_new.mojom.Page.$interfaceName = 'whats_new.mojom.Page';

// Enum: ScrollDepth
whats_new.mojom.ScrollDepth = {
  k0: 0,
  k25: 25,
  k50: 50,
  k75: 75,
  k100: 100,
};

// Enum: ModulePosition
whats_new.mojom.ModulePosition = {
  kSpotlight1: 1,
  kSpotlight2: 2,
  kSpotlight3: 3,
  kSpotlight4: 4,
  kExploreMore1: 5,
  kExploreMore2: 6,
  kExploreMore3: 7,
  kExploreMore4: 8,
  kExploreMore5: 9,
  kExploreMore6: 10,
  kUndefined: 11,
};

// Interface: PageHandlerFactory
mojo.internal.Struct(
    whats_new.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'whats_new.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(whats_new.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(whats_new.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

whats_new.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

whats_new.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'whats_new.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      whats_new.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new whats_new.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

whats_new.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      whats_new.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

whats_new.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new whats_new.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'whats_new.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

whats_new.mojom.PageHandlerFactoryReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, 0);
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

whats_new.mojom.PageHandlerFactoryReceiver = whats_new.mojom.PageHandlerFactoryReceiver;

whats_new.mojom.PageHandlerFactoryPtr = whats_new.mojom.PageHandlerFactoryRemote;
whats_new.mojom.PageHandlerFactoryRequest = whats_new.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec, 'whats_new.mojom.PageHandler_GetServerUrl_Params', [
      mojo.internal.StructField('is_staging', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_GetServerUrl_ResponseParamsSpec, 'whats_new.mojom.PageHandler_GetServerUrl_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec, 'whats_new.mojom.PageHandler_RecordTimeToLoadContent_Params', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec, 'whats_new.mojom.PageHandler_RecordVersionPageLoaded_Params', [
      mojo.internal.StructField('is_auto_open', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec, 'whats_new.mojom.PageHandler_RecordEditionPageLoaded_Params', [
      mojo.internal.StructField('page_uid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_auto_open', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModuleImpression_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec, 'whats_new.mojom.PageHandler_RecordExploreMoreToggled_Params', [
      mojo.internal.StructField('expanded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec, 'whats_new.mojom.PageHandler_RecordScrollDepth_Params', [
      mojo.internal.StructField('depth', 0, 0, whats_new.mojom.ScrollDepthSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec, 'whats_new.mojom.PageHandler_RecordTimeOnPage_Params', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModuleLinkClicked_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModuleVideoStarted_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModuleVideoEnded_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModulePlayClicked_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModulePauseClicked_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec, 'whats_new.mojom.PageHandler_RecordModuleRestartClicked_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, whats_new.mojom.ModulePositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec, 'whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec, 'whats_new.mojom.PageHandler_RecordQrCodeToggled_Params', [
      mojo.internal.StructField('expanded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec, 'whats_new.mojom.PageHandler_RecordNavClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec, 'whats_new.mojom.PageHandler_RecordFeatureTileNavigation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec, 'whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec, 'whats_new.mojom.PageHandler_RecordExpandMediaToggled_Params', [
      mojo.internal.StructField('module_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expanded', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec, 'whats_new.mojom.PageHandler_RecordCtaClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    whats_new.mojom.PageHandler_RecordNextButtonClick_ParamsSpec, 'whats_new.mojom.PageHandler_RecordNextButtonClick_Params', [
    ],
    [[0, 8]]);

whats_new.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

whats_new.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'whats_new.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      whats_new.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new whats_new.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

whats_new.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getServerUrl(is_staging) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec,
      whats_new.mojom.PageHandler_GetServerUrl_ResponseParamsSpec,
      [is_staging],
      false);
  }

  recordTimeToLoadContent(time) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec,
      null,
      [time],
      false);
  }

  recordVersionPageLoaded(is_auto_open) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec,
      null,
      [is_auto_open],
      false);
  }

  recordEditionPageLoaded(page_uid, is_auto_open) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec,
      null,
      [page_uid, is_auto_open],
      false);
  }

  recordModuleImpression(module_name, position) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordExploreMoreToggled(expanded) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec,
      null,
      [expanded],
      false);
  }

  recordScrollDepth(depth) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec,
      null,
      [depth],
      false);
  }

  recordTimeOnPage(time) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec,
      null,
      [time],
      false);
  }

  recordModuleLinkClicked(module_name, position) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModuleVideoStarted(module_name, position) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModuleVideoEnded(module_name, position) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModulePlayClicked(module_name, position) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModulePauseClicked(module_name, position) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModuleRestartClicked(module_name, position) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordBrowserCommandExecuted() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec,
      null,
      [],
      false);
  }

  recordQrCodeToggled(expanded) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec,
      null,
      [expanded],
      false);
  }

  recordNavClick() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec,
      null,
      [],
      false);
  }

  recordFeatureTileNavigation() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec,
      null,
      [],
      false);
  }

  recordCarouselScrollButtonClick() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec,
      null,
      [],
      false);
  }

  recordExpandMediaToggled(module_name, expanded) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec,
      null,
      [module_name, expanded],
      false);
  }

  recordCtaClick() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec,
      null,
      [],
      false);
  }

  recordNextButtonClick() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      whats_new.mojom.PageHandler_RecordNextButtonClick_ParamsSpec,
      null,
      [],
      false);
  }

};

whats_new.mojom.PageHandler.getRemote = function() {
  let remote = new whats_new.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'whats_new.mojom.PageHandler',
    'context');
  return remote.$;
};

whats_new.mojom.PageHandlerReceiver = class {
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
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getServerUrl');
          const result = this.impl.getServerUrl(params.is_staging);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, whats_new.mojom.PageHandler_GetServerUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordTimeToLoadContent');
          const result = this.impl.recordTimeToLoadContent(params.time);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordVersionPageLoaded');
          const result = this.impl.recordVersionPageLoaded(params.is_auto_open);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordEditionPageLoaded');
          const result = this.impl.recordEditionPageLoaded(params.page_uid, params.is_auto_open);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordModuleImpression');
          const result = this.impl.recordModuleImpression(params.module_name, params.position);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordExploreMoreToggled');
          const result = this.impl.recordExploreMoreToggled(params.expanded);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordScrollDepth');
          const result = this.impl.recordScrollDepth(params.depth);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordTimeOnPage');
          const result = this.impl.recordTimeOnPage(params.time);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordModuleLinkClicked');
          const result = this.impl.recordModuleLinkClicked(params.module_name, params.position);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordModuleVideoStarted');
          const result = this.impl.recordModuleVideoStarted(params.module_name, params.position);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordModuleVideoEnded');
          const result = this.impl.recordModuleVideoEnded(params.module_name, params.position);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordModulePlayClicked');
          const result = this.impl.recordModulePlayClicked(params.module_name, params.position);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordModulePauseClicked');
          const result = this.impl.recordModulePauseClicked(params.module_name, params.position);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordModuleRestartClicked');
          const result = this.impl.recordModuleRestartClicked(params.module_name, params.position);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordBrowserCommandExecuted');
          const result = this.impl.recordBrowserCommandExecuted();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordQrCodeToggled');
          const result = this.impl.recordQrCodeToggled(params.expanded);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordNavClick');
          const result = this.impl.recordNavClick();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordFeatureTileNavigation');
          const result = this.impl.recordFeatureTileNavigation();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordCarouselScrollButtonClick');
          const result = this.impl.recordCarouselScrollButtonClick();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordExpandMediaToggled');
          const result = this.impl.recordExpandMediaToggled(params.module_name, params.expanded);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordCtaClick');
          const result = this.impl.recordCtaClick();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordNextButtonClick_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.recordNextButtonClick');
          const result = this.impl.recordNextButtonClick();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

whats_new.mojom.PageHandlerReceiver = whats_new.mojom.PageHandlerReceiver;

whats_new.mojom.PageHandlerPtr = whats_new.mojom.PageHandlerRemote;
whats_new.mojom.PageHandlerRequest = whats_new.mojom.PageHandlerPendingReceiver;


// Interface: Page
whats_new.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

whats_new.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'whats_new.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      whats_new.mojom.PagePendingReceiver,
      handle);
    this.$ = new whats_new.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

whats_new.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

whats_new.mojom.Page.getRemote = function() {
  let remote = new whats_new.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'whats_new.mojom.Page',
    'context');
  return remote.$;
};

whats_new.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

whats_new.mojom.PageReceiver = whats_new.mojom.PageReceiver;

whats_new.mojom.PagePtr = whats_new.mojom.PageRemote;
whats_new.mojom.PageRequest = whats_new.mojom.PagePendingReceiver;

