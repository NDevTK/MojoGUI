// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_footer/new_tab_footer.mojom
// Module: new_tab_footer.mojom

// Module namespace
var new_tab_footer = new_tab_footer || {};
new_tab_footer.mojom = new_tab_footer.mojom || {};
var url = url || {};
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
      mojo.internal.StructField('custom_bitmap_data_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BackgroundAttribution
mojo.internal.Struct(
    new_tab_footer.mojom.BackgroundAttributionSpec, 'new_tab_footer.mojom.BackgroundAttribution', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
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
  createNewTabFooterHandler(document, handler) {
    return this.$.createNewTabFooterHandler(document, handler);
  }
};

new_tab_footer.mojom.NewTabFooterHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NewTabFooterHandlerFactory', [
      { explicit: null },
    ]);
  }

  createNewTabFooterHandler(document, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec,
      null,
      [document, handler],
      false);
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

new_tab_footer.mojom.NewTabFooterHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NewTabFooterHandlerFactory', [
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
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createNewTabFooterHandler(params.document, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

new_tab_footer.mojom.NewTabFooterHandlerFactoryReceiver = new_tab_footer.mojom.NewTabFooterHandlerFactoryReceiver;

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
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
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
  updateNtpExtensionName() {
    return this.$.updateNtpExtensionName();
  }
  updateManagementNotice() {
    return this.$.updateManagementNotice();
  }
  updateAttachedTabState() {
    return this.$.updateAttachedTabState();
  }
  updateBackgroundAttribution() {
    return this.$.updateBackgroundAttribution();
  }
  openExtensionOptionsPageWithFallback() {
    return this.$.openExtensionOptionsPageWithFallback();
  }
  openManagementPage() {
    return this.$.openManagementPage();
  }
  openUrlInCurrentTab(url) {
    return this.$.openUrlInCurrentTab(url);
  }
  showContextMenu(point) {
    return this.$.showContextMenu(point);
  }
  notifyCustomizationButtonVisible() {
    return this.$.notifyCustomizationButtonVisible();
  }
};

new_tab_footer.mojom.NewTabFooterHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NewTabFooterHandler', [
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

  updateNtpExtensionName() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec,
      null,
      [],
      false);
  }

  updateManagementNotice() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec,
      null,
      [],
      false);
  }

  updateAttachedTabState() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec,
      null,
      [],
      false);
  }

  updateBackgroundAttribution() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec,
      null,
      [],
      false);
  }

  openExtensionOptionsPageWithFallback() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec,
      null,
      [],
      false);
  }

  openManagementPage() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec,
      null,
      [],
      false);
  }

  openUrlInCurrentTab(url) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec,
      null,
      [url],
      false);
  }

  showContextMenu(point) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec,
      null,
      [point],
      false);
  }

  notifyCustomizationButtonVisible() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec,
      null,
      [],
      false);
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

new_tab_footer.mojom.NewTabFooterHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NewTabFooterHandler', [
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
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec.$.structSpec);
          const result = this.impl.updateNtpExtensionName();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec.$.structSpec);
          const result = this.impl.updateManagementNotice();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec.$.structSpec);
          const result = this.impl.updateAttachedTabState();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec.$.structSpec);
          const result = this.impl.updateBackgroundAttribution();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec.$.structSpec);
          const result = this.impl.openExtensionOptionsPageWithFallback();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec.$.structSpec);
          const result = this.impl.openManagementPage();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec.$.structSpec);
          const result = this.impl.openUrlInCurrentTab(params.url);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec.$.structSpec);
          const result = this.impl.showContextMenu(params.point);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec.$.structSpec);
          const result = this.impl.notifyCustomizationButtonVisible();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

new_tab_footer.mojom.NewTabFooterHandlerReceiver = new_tab_footer.mojom.NewTabFooterHandlerReceiver;

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
      mojo.internal.StructField('notice', 0, 0, new_tab_footer.mojom.ManagementNoticeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_Params', [
      mojo.internal.StructField('ntp_type', 0, 0, new_tab_footer.mojom.NewTabPageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('can_customize_chrome', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec, 'new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_Params', [
      mojo.internal.StructField('background_image_attribution', 0, 0, new_tab_footer.mojom.BackgroundAttributionSpec.$, null, true, 0, undefined),
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
  setNtpExtensionName(name) {
    return this.$.setNtpExtensionName(name);
  }
  setManagementNotice(notice) {
    return this.$.setManagementNotice(notice);
  }
  attachedTabStateUpdated(ntp_type, can_customize_chrome) {
    return this.$.attachedTabStateUpdated(ntp_type, can_customize_chrome);
  }
  setBackgroundAttribution(background_image_attribution) {
    return this.$.setBackgroundAttribution(background_image_attribution);
  }
};

new_tab_footer.mojom.NewTabFooterDocumentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NewTabFooterDocument', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setNtpExtensionName(name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec,
      null,
      [name],
      false);
  }

  setManagementNotice(notice) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec,
      null,
      [notice],
      false);
  }

  attachedTabStateUpdated(ntp_type, can_customize_chrome) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec,
      null,
      [ntp_type, can_customize_chrome],
      false);
  }

  setBackgroundAttribution(background_image_attribution) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec,
      null,
      [background_image_attribution],
      false);
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

new_tab_footer.mojom.NewTabFooterDocumentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NewTabFooterDocument', [
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
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec.$.structSpec);
          const result = this.impl.setNtpExtensionName(params.name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec.$.structSpec);
          const result = this.impl.setManagementNotice(params.notice);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.attachedTabStateUpdated(params.ntp_type, params.can_customize_chrome);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec.$.structSpec);
          const result = this.impl.setBackgroundAttribution(params.background_image_attribution);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

new_tab_footer.mojom.NewTabFooterDocumentReceiver = new_tab_footer.mojom.NewTabFooterDocumentReceiver;

new_tab_footer.mojom.NewTabFooterDocumentPtr = new_tab_footer.mojom.NewTabFooterDocumentRemote;
new_tab_footer.mojom.NewTabFooterDocumentRequest = new_tab_footer.mojom.NewTabFooterDocumentPendingReceiver;

