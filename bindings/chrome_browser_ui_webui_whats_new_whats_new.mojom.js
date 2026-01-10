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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePageHandler
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetServerUrl
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetServerUrl (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: RecordTimeToLoadContent
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordTimeToLoadContent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: RecordVersionPageLoaded
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordVersionPageLoaded (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: RecordEditionPageLoaded
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordEditionPageLoaded (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: RecordModuleImpression
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModuleImpression (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: RecordExploreMoreToggled
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordExploreMoreToggled (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: RecordScrollDepth
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordScrollDepth (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: RecordTimeOnPage
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordTimeOnPage (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: RecordModuleLinkClicked
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModuleLinkClicked (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: RecordModuleVideoStarted
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModuleVideoStarted (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: RecordModuleVideoEnded
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModuleVideoEnded (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: RecordModulePlayClicked
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModulePlayClicked (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 12: RecordModulePauseClicked
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModulePauseClicked (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 13: RecordModuleRestartClicked
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordModuleRestartClicked (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 14: RecordBrowserCommandExecuted
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordBrowserCommandExecuted (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 15: RecordQrCodeToggled
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordQrCodeToggled (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 16: RecordNavClick
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordNavClick (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 17: RecordFeatureTileNavigation
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordFeatureTileNavigation (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 18: RecordCarouselScrollButtonClick
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordCarouselScrollButtonClick (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 19: RecordExpandMediaToggled
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordExpandMediaToggled (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 20: RecordCtaClick
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordCtaClick (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 21: RecordNextButtonClick
        try {
             decoder.decodeStruct(whats_new.mojom.PageHandler_RecordNextButtonClick_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordNextButtonClick (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec.$, message.header.headerSize);
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
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordTimeToLoadContent');
          const result = this.impl.recordTimeToLoadContent(params.time);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordVersionPageLoaded');
          const result = this.impl.recordVersionPageLoaded(params.is_auto_open);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordEditionPageLoaded');
          const result = this.impl.recordEditionPageLoaded(params.page_uid, params.is_auto_open);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordModuleImpression');
          const result = this.impl.recordModuleImpression(params.module_name, params.position);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordExploreMoreToggled');
          const result = this.impl.recordExploreMoreToggled(params.expanded);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordScrollDepth');
          const result = this.impl.recordScrollDepth(params.depth);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordTimeOnPage');
          const result = this.impl.recordTimeOnPage(params.time);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordModuleLinkClicked');
          const result = this.impl.recordModuleLinkClicked(params.module_name, params.position);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordModuleVideoStarted');
          const result = this.impl.recordModuleVideoStarted(params.module_name, params.position);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordModuleVideoEnded');
          const result = this.impl.recordModuleVideoEnded(params.module_name, params.position);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordModulePlayClicked');
          const result = this.impl.recordModulePlayClicked(params.module_name, params.position);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordModulePauseClicked');
          const result = this.impl.recordModulePauseClicked(params.module_name, params.position);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordModuleRestartClicked');
          const result = this.impl.recordModuleRestartClicked(params.module_name, params.position);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordBrowserCommandExecuted');
          const result = this.impl.recordBrowserCommandExecuted();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordQrCodeToggled');
          const result = this.impl.recordQrCodeToggled(params.expanded);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordNavClick');
          const result = this.impl.recordNavClick();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordFeatureTileNavigation');
          const result = this.impl.recordFeatureTileNavigation();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordCarouselScrollButtonClick');
          const result = this.impl.recordCarouselScrollButtonClick();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordExpandMediaToggled');
          const result = this.impl.recordExpandMediaToggled(params.module_name, params.expanded);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordCtaClick');
          const result = this.impl.recordCtaClick();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(whats_new.mojom.PageHandler_RecordNextButtonClick_ParamsSpec.$, message.header.headerSize);
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
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

