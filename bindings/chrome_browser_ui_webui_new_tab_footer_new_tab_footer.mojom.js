// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_footer/new_tab_footer.mojom
// Module: new_tab_footer.mojom

'use strict';

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
      mojo.internal.StructField('document', 0, 0, mojo.internal.InterfaceProxy(new_tab_footer.mojom.NewTabFooterDocumentSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(new_tab_footer.mojom.NewTabFooterHandlerSpec), null, false, 0, undefined),
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
        
        // Try Method 0: CreateNewTabFooterHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNewTabFooterHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandlerFactory_CreateNewTabFooterHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createNewTabFooterHandler');
          const result = this.impl.createNewTabFooterHandler(params.document, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      [],
      false);
  }

  updateManagementNotice() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec,
      null,
      [],
      false);
  }

  updateAttachedTabState() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec,
      null,
      [],
      false);
  }

  updateBackgroundAttribution() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec,
      null,
      [],
      false);
  }

  openExtensionOptionsPageWithFallback() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec,
      null,
      [],
      false);
  }

  openManagementPage() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec,
      null,
      [],
      false);
  }

  openUrlInCurrentTab(url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec,
      null,
      [url],
      false);
  }

  showContextMenu(point) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec,
      null,
      [point],
      false);
  }

  notifyCustomizationButtonVisible() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
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
        
        // Try Method 0: UpdateNtpExtensionName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateNtpExtensionName (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateManagementNotice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateManagementNotice (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateAttachedTabState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAttachedTabState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: UpdateBackgroundAttribution
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateBackgroundAttribution (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenExtensionOptionsPageWithFallback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenExtensionOptionsPageWithFallback (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OpenManagementPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenManagementPage (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OpenUrlInCurrentTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenUrlInCurrentTab (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ShowContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowContextMenu (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: NotifyCustomizationButtonVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyCustomizationButtonVisible (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_UpdateNtpExtensionName_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateNtpExtensionName');
          const result = this.impl.updateNtpExtensionName();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_UpdateManagementNotice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateManagementNotice');
          const result = this.impl.updateManagementNotice();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_UpdateAttachedTabState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateAttachedTabState');
          const result = this.impl.updateAttachedTabState();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_UpdateBackgroundAttribution_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateBackgroundAttribution');
          const result = this.impl.updateBackgroundAttribution();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_OpenExtensionOptionsPageWithFallback_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openExtensionOptionsPageWithFallback');
          const result = this.impl.openExtensionOptionsPageWithFallback();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_OpenManagementPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openManagementPage');
          const result = this.impl.openManagementPage();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_OpenUrlInCurrentTab_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openUrlInCurrentTab');
          const result = this.impl.openUrlInCurrentTab(params.url);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_ShowContextMenu_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showContextMenu');
          const result = this.impl.showContextMenu(params.point);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterHandler_NotifyCustomizationButtonVisible_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyCustomizationButtonVisible');
          const result = this.impl.notifyCustomizationButtonVisible();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      [name],
      false);
  }

  setManagementNotice(notice) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec,
      null,
      [notice],
      false);
  }

  attachedTabStateUpdated(ntp_type, can_customize_chrome) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec,
      null,
      [ntp_type, can_customize_chrome],
      false);
  }

  setBackgroundAttribution(background_image_attribution) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: SetNtpExtensionName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNtpExtensionName (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetManagementNotice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetManagementNotice (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AttachedTabStateUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttachedTabStateUpdated (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetBackgroundAttribution
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundAttribution (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterDocument_SetNtpExtensionName_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setNtpExtensionName');
          const result = this.impl.setNtpExtensionName(params.name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterDocument_SetManagementNotice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setManagementNotice');
          const result = this.impl.setManagementNotice(params.notice);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterDocument_AttachedTabStateUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.attachedTabStateUpdated');
          const result = this.impl.attachedTabStateUpdated(params.ntp_type, params.can_customize_chrome);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(new_tab_footer.mojom.NewTabFooterDocument_SetBackgroundAttribution_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundAttribution');
          const result = this.impl.setBackgroundAttribution(params.background_image_attribution);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

new_tab_footer.mojom.NewTabFooterDocumentReceiver = new_tab_footer.mojom.NewTabFooterDocumentReceiver;

new_tab_footer.mojom.NewTabFooterDocumentPtr = new_tab_footer.mojom.NewTabFooterDocumentRemote;
new_tab_footer.mojom.NewTabFooterDocumentRequest = new_tab_footer.mojom.NewTabFooterDocumentPendingReceiver;

