// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/whats_new/whats_new.mojom
// Module: whats_new.mojom

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(whats_new.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(whats_new.mojom.PageHandlerRemote), null, false, 0, undefined),
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
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

whats_new.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
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
  getServerUrl(is_staging) {
    return this.$.getServerUrl(is_staging);
  }
  recordTimeToLoadContent(time) {
    return this.$.recordTimeToLoadContent(time);
  }
  recordVersionPageLoaded(is_auto_open) {
    return this.$.recordVersionPageLoaded(is_auto_open);
  }
  recordEditionPageLoaded(page_uid, is_auto_open) {
    return this.$.recordEditionPageLoaded(page_uid, is_auto_open);
  }
  recordModuleImpression(module_name, position) {
    return this.$.recordModuleImpression(module_name, position);
  }
  recordExploreMoreToggled(expanded) {
    return this.$.recordExploreMoreToggled(expanded);
  }
  recordScrollDepth(depth) {
    return this.$.recordScrollDepth(depth);
  }
  recordTimeOnPage(time) {
    return this.$.recordTimeOnPage(time);
  }
  recordModuleLinkClicked(module_name, position) {
    return this.$.recordModuleLinkClicked(module_name, position);
  }
  recordModuleVideoStarted(module_name, position) {
    return this.$.recordModuleVideoStarted(module_name, position);
  }
  recordModuleVideoEnded(module_name, position) {
    return this.$.recordModuleVideoEnded(module_name, position);
  }
  recordModulePlayClicked(module_name, position) {
    return this.$.recordModulePlayClicked(module_name, position);
  }
  recordModulePauseClicked(module_name, position) {
    return this.$.recordModulePauseClicked(module_name, position);
  }
  recordModuleRestartClicked(module_name, position) {
    return this.$.recordModuleRestartClicked(module_name, position);
  }
  recordBrowserCommandExecuted() {
    return this.$.recordBrowserCommandExecuted();
  }
  recordQrCodeToggled(expanded) {
    return this.$.recordQrCodeToggled(expanded);
  }
  recordNavClick() {
    return this.$.recordNavClick();
  }
  recordFeatureTileNavigation() {
    return this.$.recordFeatureTileNavigation();
  }
  recordCarouselScrollButtonClick() {
    return this.$.recordCarouselScrollButtonClick();
  }
  recordExpandMediaToggled(module_name, expanded) {
    return this.$.recordExpandMediaToggled(module_name, expanded);
  }
  recordCtaClick() {
    return this.$.recordCtaClick();
  }
  recordNextButtonClick() {
    return this.$.recordNextButtonClick();
  }
};

whats_new.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getServerUrl(is_staging) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec,
      whats_new.mojom.PageHandler_GetServerUrl_ResponseParamsSpec,
      [is_staging],
      false);
  }

  recordTimeToLoadContent(time) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec,
      null,
      [time],
      false);
  }

  recordVersionPageLoaded(is_auto_open) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec,
      null,
      [is_auto_open],
      false);
  }

  recordEditionPageLoaded(page_uid, is_auto_open) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec,
      null,
      [page_uid, is_auto_open],
      false);
  }

  recordModuleImpression(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordExploreMoreToggled(expanded) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec,
      null,
      [expanded],
      false);
  }

  recordScrollDepth(depth) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec,
      null,
      [depth],
      false);
  }

  recordTimeOnPage(time) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec,
      null,
      [time],
      false);
  }

  recordModuleLinkClicked(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModuleVideoStarted(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModuleVideoEnded(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModulePlayClicked(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModulePauseClicked(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordModuleRestartClicked(module_name, position) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec,
      null,
      [module_name, position],
      false);
  }

  recordBrowserCommandExecuted() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec,
      null,
      [],
      false);
  }

  recordQrCodeToggled(expanded) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec,
      null,
      [expanded],
      false);
  }

  recordNavClick() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec,
      null,
      [],
      false);
  }

  recordFeatureTileNavigation() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec,
      null,
      [],
      false);
  }

  recordCarouselScrollButtonClick() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec,
      null,
      [],
      false);
  }

  recordExpandMediaToggled(module_name, expanded) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec,
      null,
      [module_name, expanded],
      false);
  }

  recordCtaClick() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec,
      null,
      [],
      false);
  }

  recordNextButtonClick() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordNextButtonClick_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_GetServerUrl_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordTimeToLoadContent_ParamsSpec.$.structSpec);
          const result = this.impl.recordTimeToLoadContent(params.time);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordVersionPageLoaded_ParamsSpec.$.structSpec);
          const result = this.impl.recordVersionPageLoaded(params.is_auto_open);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordEditionPageLoaded_ParamsSpec.$.structSpec);
          const result = this.impl.recordEditionPageLoaded(params.page_uid, params.is_auto_open);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleImpression_ParamsSpec.$.structSpec);
          const result = this.impl.recordModuleImpression(params.module_name, params.position);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordExploreMoreToggled_ParamsSpec.$.structSpec);
          const result = this.impl.recordExploreMoreToggled(params.expanded);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordScrollDepth_ParamsSpec.$.structSpec);
          const result = this.impl.recordScrollDepth(params.depth);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordTimeOnPage_ParamsSpec.$.structSpec);
          const result = this.impl.recordTimeOnPage(params.time);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleLinkClicked_ParamsSpec.$.structSpec);
          const result = this.impl.recordModuleLinkClicked(params.module_name, params.position);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleVideoStarted_ParamsSpec.$.structSpec);
          const result = this.impl.recordModuleVideoStarted(params.module_name, params.position);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleVideoEnded_ParamsSpec.$.structSpec);
          const result = this.impl.recordModuleVideoEnded(params.module_name, params.position);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModulePlayClicked_ParamsSpec.$.structSpec);
          const result = this.impl.recordModulePlayClicked(params.module_name, params.position);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModulePauseClicked_ParamsSpec.$.structSpec);
          const result = this.impl.recordModulePauseClicked(params.module_name, params.position);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordModuleRestartClicked_ParamsSpec.$.structSpec);
          const result = this.impl.recordModuleRestartClicked(params.module_name, params.position);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordBrowserCommandExecuted_ParamsSpec.$.structSpec);
          const result = this.impl.recordBrowserCommandExecuted();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordQrCodeToggled_ParamsSpec.$.structSpec);
          const result = this.impl.recordQrCodeToggled(params.expanded);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordNavClick_ParamsSpec.$.structSpec);
          const result = this.impl.recordNavClick();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordFeatureTileNavigation_ParamsSpec.$.structSpec);
          const result = this.impl.recordFeatureTileNavigation();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordCarouselScrollButtonClick_ParamsSpec.$.structSpec);
          const result = this.impl.recordCarouselScrollButtonClick();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordExpandMediaToggled_ParamsSpec.$.structSpec);
          const result = this.impl.recordExpandMediaToggled(params.module_name, params.expanded);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordCtaClick_ParamsSpec.$.structSpec);
          const result = this.impl.recordCtaClick();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(whats_new.mojom.PageHandler_RecordNextButtonClick_ParamsSpec.$.structSpec);
          const result = this.impl.recordNextButtonClick();
          break;
        }
      }
      } catch (err) {}
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
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
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
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

whats_new.mojom.PageReceiver = whats_new.mojom.PageReceiver;

whats_new.mojom.PagePtr = whats_new.mojom.PageRemote;
whats_new.mojom.PageRequest = whats_new.mojom.PagePendingReceiver;

