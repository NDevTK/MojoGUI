// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/borealis_installer/borealis_installer.mojom
// Module: ash.borealis_installer.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.borealis_installer = ash.borealis_installer || {};
ash.borealis_installer.mojom = ash.borealis_installer.mojom || {};
var borealis = borealis || {};

ash.borealis_installer.mojom.PageHandlerFactory = {};
ash.borealis_installer.mojom.PageHandlerFactory.$interfaceName = 'ash.borealis_installer.mojom.PageHandlerFactory';
ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.PageHandler = {};
ash.borealis_installer.mojom.PageHandler.$interfaceName = 'ash.borealis_installer.mojom.PageHandler';
ash.borealis_installer.mojom.PageHandler_Install_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.PageHandler_ShutDown_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.PageHandler_Launch_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.PageHandler_CancelInstall_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.PageHandler_OnPageClosed_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.PageHandler_OpenStoragePage_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.Page = {};
ash.borealis_installer.mojom.Page.$interfaceName = 'ash.borealis_installer.mojom.Page';
ash.borealis_installer.mojom.Page_OnProgressUpdate_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.Page_OnInstallFinished_ParamsSpec = { $: {} };
ash.borealis_installer.mojom.Page_RequestClose_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.borealis_installer.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.borealis_installer.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.borealis_installer.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.borealis_installer.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.borealis_installer.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.borealis_installer.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.borealis_installer.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.borealis_installer.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

ash.borealis_installer.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.borealis_installer.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.borealis_installer.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.borealis_installer.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStruct(ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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

ash.borealis_installer.mojom.PageHandlerFactoryReceiver = ash.borealis_installer.mojom.PageHandlerFactoryReceiver;

ash.borealis_installer.mojom.PageHandlerFactoryPtr = ash.borealis_installer.mojom.PageHandlerFactoryRemote;
ash.borealis_installer.mojom.PageHandlerFactoryRequest = ash.borealis_installer.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandler_Install_ParamsSpec, 'ash.borealis_installer.mojom.PageHandler_Install_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandler_ShutDown_ParamsSpec, 'ash.borealis_installer.mojom.PageHandler_ShutDown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandler_Launch_ParamsSpec, 'ash.borealis_installer.mojom.PageHandler_Launch_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandler_CancelInstall_ParamsSpec, 'ash.borealis_installer.mojom.PageHandler_CancelInstall_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandler_OnPageClosed_ParamsSpec, 'ash.borealis_installer.mojom.PageHandler_OnPageClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.PageHandler_OpenStoragePage_ParamsSpec, 'ash.borealis_installer.mojom.PageHandler_OpenStoragePage_Params', [
    ],
    [[0, 8]]);

ash.borealis_installer.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.borealis_installer.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.borealis_installer.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.borealis_installer.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.borealis_installer.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.borealis_installer.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  install() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.borealis_installer.mojom.PageHandler_Install_ParamsSpec,
      null,
      [],
      false);
  }

  shutDown() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.borealis_installer.mojom.PageHandler_ShutDown_ParamsSpec,
      null,
      [],
      false);
  }

  launch() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.borealis_installer.mojom.PageHandler_Launch_ParamsSpec,
      null,
      [],
      false);
  }

  cancelInstall() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.borealis_installer.mojom.PageHandler_CancelInstall_ParamsSpec,
      null,
      [],
      false);
  }

  onPageClosed() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.borealis_installer.mojom.PageHandler_OnPageClosed_ParamsSpec,
      null,
      [],
      false);
  }

  openStoragePage() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.borealis_installer.mojom.PageHandler_OpenStoragePage_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.borealis_installer.mojom.PageHandler.getRemote = function() {
  let remote = new ash.borealis_installer.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.borealis_installer.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.borealis_installer.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: Install
        try {
             decoder.decodeStruct(ash.borealis_installer.mojom.PageHandler_Install_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Install (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: ShutDown
        try {
             decoder.decodeStruct(ash.borealis_installer.mojom.PageHandler_ShutDown_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShutDown (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: Launch
        try {
             decoder.decodeStruct(ash.borealis_installer.mojom.PageHandler_Launch_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Launch (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: CancelInstall
        try {
             decoder.decodeStruct(ash.borealis_installer.mojom.PageHandler_CancelInstall_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelInstall (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: OnPageClosed
        try {
             decoder.decodeStruct(ash.borealis_installer.mojom.PageHandler_OnPageClosed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPageClosed (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: OpenStoragePage
        try {
             decoder.decodeStruct(ash.borealis_installer.mojom.PageHandler_OpenStoragePage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenStoragePage (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.borealis_installer.mojom.PageHandler_Install_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.install');
          const result = this.impl.install();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.borealis_installer.mojom.PageHandler_ShutDown_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.shutDown');
          const result = this.impl.shutDown();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.borealis_installer.mojom.PageHandler_Launch_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launch');
          const result = this.impl.launch();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.borealis_installer.mojom.PageHandler_CancelInstall_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelInstall');
          const result = this.impl.cancelInstall();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.borealis_installer.mojom.PageHandler_OnPageClosed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPageClosed');
          const result = this.impl.onPageClosed();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.borealis_installer.mojom.PageHandler_OpenStoragePage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openStoragePage');
          const result = this.impl.openStoragePage();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.borealis_installer.mojom.PageHandlerReceiver = ash.borealis_installer.mojom.PageHandlerReceiver;

ash.borealis_installer.mojom.PageHandlerPtr = ash.borealis_installer.mojom.PageHandlerRemote;
ash.borealis_installer.mojom.PageHandlerRequest = ash.borealis_installer.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    ash.borealis_installer.mojom.Page_OnProgressUpdate_ParamsSpec, 'ash.borealis_installer.mojom.Page_OnProgressUpdate_Params', [
      mojo.internal.StructField('progress_fraction', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.Page_OnInstallFinished_ParamsSpec, 'ash.borealis_installer.mojom.Page_OnInstallFinished_Params', [
      mojo.internal.StructField('error', 0, 0, borealis.mojom.InstallResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.borealis_installer.mojom.Page_RequestClose_ParamsSpec, 'ash.borealis_installer.mojom.Page_RequestClose_Params', [
    ],
    [[0, 8]]);

ash.borealis_installer.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.borealis_installer.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.borealis_installer.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.borealis_installer.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.borealis_installer.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.borealis_installer.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProgressUpdate(progress_fraction, label) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.borealis_installer.mojom.Page_OnProgressUpdate_ParamsSpec,
      null,
      [progress_fraction, label],
      false);
  }

  onInstallFinished(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.borealis_installer.mojom.Page_OnInstallFinished_ParamsSpec,
      null,
      [error],
      false);
  }

  requestClose() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.borealis_installer.mojom.Page_RequestClose_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.borealis_installer.mojom.Page.getRemote = function() {
  let remote = new ash.borealis_installer.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.borealis_installer.mojom.Page',
    'context');
  return remote.$;
};

ash.borealis_installer.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: OnProgressUpdate
        try {
             decoder.decodeStruct(ash.borealis_installer.mojom.Page_OnProgressUpdate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProgressUpdate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnInstallFinished
        try {
             decoder.decodeStruct(ash.borealis_installer.mojom.Page_OnInstallFinished_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInstallFinished (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: RequestClose
        try {
             decoder.decodeStruct(ash.borealis_installer.mojom.Page_RequestClose_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestClose (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.borealis_installer.mojom.Page_OnProgressUpdate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onProgressUpdate');
          const result = this.impl.onProgressUpdate(params.progress_fraction, params.label);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.borealis_installer.mojom.Page_OnInstallFinished_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onInstallFinished');
          const result = this.impl.onInstallFinished(params.error);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.borealis_installer.mojom.Page_RequestClose_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestClose');
          const result = this.impl.requestClose();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.borealis_installer.mojom.PageReceiver = ash.borealis_installer.mojom.PageReceiver;

ash.borealis_installer.mojom.PagePtr = ash.borealis_installer.mojom.PageRemote;
ash.borealis_installer.mojom.PageRequest = ash.borealis_installer.mojom.PagePendingReceiver;

