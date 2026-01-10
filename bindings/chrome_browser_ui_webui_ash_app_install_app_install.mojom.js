// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/app_install/app_install.mojom
// Module: ash.app_install.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.app_install = ash.app_install || {};
ash.app_install.mojom = ash.app_install.mojom || {};
var gfx = gfx || {};
var url = url || {};

ash.app_install.mojom.DialogArgsSpec = { $: {} };
ash.app_install.mojom.AppInfoArgsSpec = { $: {} };
ash.app_install.mojom.AppInfoDataSpec = { $: {} };
ash.app_install.mojom.ScreenshotSpec = { $: {} };
ash.app_install.mojom.NoAppErrorArgsSpec = { $: {} };
ash.app_install.mojom.AppInfoActions = {};
ash.app_install.mojom.AppInfoActions.$interfaceName = 'ash.app_install.mojom.AppInfoActions';
ash.app_install.mojom.AppInfoActions_InstallApp_ParamsSpec = { $: {} };
ash.app_install.mojom.AppInfoActions_InstallApp_ResponseParamsSpec = { $: {} };
ash.app_install.mojom.AppInfoActions_LaunchApp_ParamsSpec = { $: {} };
ash.app_install.mojom.ConnectionErrorActions = {};
ash.app_install.mojom.ConnectionErrorActions.$interfaceName = 'ash.app_install.mojom.ConnectionErrorActions';
ash.app_install.mojom.ConnectionErrorActions_TryAgain_ParamsSpec = { $: {} };
ash.app_install.mojom.PageHandlerFactory = {};
ash.app_install.mojom.PageHandlerFactory.$interfaceName = 'ash.app_install.mojom.PageHandlerFactory';
ash.app_install.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.app_install.mojom.PageHandler = {};
ash.app_install.mojom.PageHandler.$interfaceName = 'ash.app_install.mojom.PageHandler';
ash.app_install.mojom.PageHandler_GetDialogArgs_ParamsSpec = { $: {} };
ash.app_install.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec = { $: {} };
ash.app_install.mojom.PageHandler_CloseDialog_ParamsSpec = { $: {} };

// Union: DialogArgs
mojo.internal.Union(
    ash.app_install.mojom.DialogArgsSpec, 'ash.app_install.mojom.DialogArgs', {
      'app_info_args': {
        'ordinal': 0,
        'type': ash.app_install.mojom.AppInfoArgsSpec.$,
        'nullable': false,
      },
      'no_app_error_args': {
        'ordinal': 1,
        'type': ash.app_install.mojom.NoAppErrorArgsSpec.$,
        'nullable': false,
      },
      'connection_error_actions': {
        'ordinal': 2,
        'type': mojo.internal.InterfaceProxy(ash.app_install.mojom.ConnectionErrorActionsSpec),
        'nullable': false,
      },
    });

// Struct: AppInfoArgs
mojo.internal.Struct(
    ash.app_install.mojom.AppInfoArgsSpec, 'ash.app_install.mojom.AppInfoArgs', [
      mojo.internal.StructField('data', 0, 0, ash.app_install.mojom.AppInfoDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('actions', 8, 0, mojo.internal.InterfaceProxy(ash.app_install.mojom.AppInfoActionsSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AppInfoData
mojo.internal.Struct(
    ash.app_install.mojom.AppInfoDataSpec, 'ash.app_install.mojom.AppInfoData', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screenshots', 32, 0, mojo.internal.Array(ash.app_install.mojom.ScreenshotSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_already_installed', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: Screenshot
mojo.internal.Struct(
    ash.app_install.mojom.ScreenshotSpec, 'ash.app_install.mojom.Screenshot', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NoAppErrorArgs
mojo.internal.Struct(
    ash.app_install.mojom.NoAppErrorArgsSpec, 'ash.app_install.mojom.NoAppErrorArgs', [
    ],
    [[0, 8]]);

// Interface: AppInfoActions
mojo.internal.Struct(
    ash.app_install.mojom.AppInfoActions_InstallApp_ParamsSpec, 'ash.app_install.mojom.AppInfoActions_InstallApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.app_install.mojom.AppInfoActions_InstallApp_ResponseParamsSpec, 'ash.app_install.mojom.AppInfoActions_InstallApp_ResponseParams', [
      mojo.internal.StructField('installed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.app_install.mojom.AppInfoActions_LaunchApp_ParamsSpec, 'ash.app_install.mojom.AppInfoActions_LaunchApp_Params', [
    ],
    [[0, 8]]);

ash.app_install.mojom.AppInfoActionsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.app_install.mojom.AppInfoActionsRemote = class {
  static get $interfaceName() {
    return 'ash.app_install.mojom.AppInfoActions';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.app_install.mojom.AppInfoActionsPendingReceiver,
      handle);
    this.$ = new ash.app_install.mojom.AppInfoActionsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.app_install.mojom.AppInfoActionsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  installApp() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.app_install.mojom.AppInfoActions_InstallApp_ParamsSpec,
      ash.app_install.mojom.AppInfoActions_InstallApp_ResponseParamsSpec,
      [],
      false);
  }

  launchApp() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.app_install.mojom.AppInfoActions_LaunchApp_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.app_install.mojom.AppInfoActions.getRemote = function() {
  let remote = new ash.app_install.mojom.AppInfoActionsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.app_install.mojom.AppInfoActions',
    'context');
  return remote.$;
};

ash.app_install.mojom.AppInfoActionsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: InstallApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.app_install.mojom.AppInfoActions_InstallApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallApp (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: LaunchApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.app_install.mojom.AppInfoActions_LaunchApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchApp (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(ash.app_install.mojom.AppInfoActions_InstallApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.installApp');
          const result = this.impl.installApp();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.app_install.mojom.AppInfoActions_InstallApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.app_install.mojom.AppInfoActions_LaunchApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launchApp');
          const result = this.impl.launchApp();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.app_install.mojom.AppInfoActionsReceiver = ash.app_install.mojom.AppInfoActionsReceiver;

ash.app_install.mojom.AppInfoActionsPtr = ash.app_install.mojom.AppInfoActionsRemote;
ash.app_install.mojom.AppInfoActionsRequest = ash.app_install.mojom.AppInfoActionsPendingReceiver;


// Interface: ConnectionErrorActions
mojo.internal.Struct(
    ash.app_install.mojom.ConnectionErrorActions_TryAgain_ParamsSpec, 'ash.app_install.mojom.ConnectionErrorActions_TryAgain_Params', [
    ],
    [[0, 8]]);

ash.app_install.mojom.ConnectionErrorActionsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.app_install.mojom.ConnectionErrorActionsRemote = class {
  static get $interfaceName() {
    return 'ash.app_install.mojom.ConnectionErrorActions';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.app_install.mojom.ConnectionErrorActionsPendingReceiver,
      handle);
    this.$ = new ash.app_install.mojom.ConnectionErrorActionsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.app_install.mojom.ConnectionErrorActionsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  tryAgain() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.app_install.mojom.ConnectionErrorActions_TryAgain_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.app_install.mojom.ConnectionErrorActions.getRemote = function() {
  let remote = new ash.app_install.mojom.ConnectionErrorActionsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.app_install.mojom.ConnectionErrorActions',
    'context');
  return remote.$;
};

ash.app_install.mojom.ConnectionErrorActionsReceiver = class {
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
        
        // Try Method 0: TryAgain
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.app_install.mojom.ConnectionErrorActions_TryAgain_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TryAgain (0)');
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
          const params = decoder.decodeStruct(ash.app_install.mojom.ConnectionErrorActions_TryAgain_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.tryAgain');
          const result = this.impl.tryAgain();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.app_install.mojom.ConnectionErrorActionsReceiver = ash.app_install.mojom.ConnectionErrorActionsReceiver;

ash.app_install.mojom.ConnectionErrorActionsPtr = ash.app_install.mojom.ConnectionErrorActionsRemote;
ash.app_install.mojom.ConnectionErrorActionsRequest = ash.app_install.mojom.ConnectionErrorActionsPendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.app_install.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.app_install.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.app_install.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.app_install.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.app_install.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.app_install.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.app_install.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.app_install.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.app_install.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.app_install.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

ash.app_install.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.app_install.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.app_install.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.app_install.mojom.PageHandlerFactoryReceiver = class {
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
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.app_install.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
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
          const params = decoder.decodeStruct(ash.app_install.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.app_install.mojom.PageHandlerFactoryReceiver = ash.app_install.mojom.PageHandlerFactoryReceiver;

ash.app_install.mojom.PageHandlerFactoryPtr = ash.app_install.mojom.PageHandlerFactoryRemote;
ash.app_install.mojom.PageHandlerFactoryRequest = ash.app_install.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.app_install.mojom.PageHandler_GetDialogArgs_ParamsSpec, 'ash.app_install.mojom.PageHandler_GetDialogArgs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.app_install.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec, 'ash.app_install.mojom.PageHandler_GetDialogArgs_ResponseParams', [
      mojo.internal.StructField('dialog_args', 0, 0, ash.app_install.mojom.DialogArgsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.app_install.mojom.PageHandler_CloseDialog_ParamsSpec, 'ash.app_install.mojom.PageHandler_CloseDialog_Params', [
    ],
    [[0, 8]]);

ash.app_install.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.app_install.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.app_install.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.app_install.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.app_install.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.app_install.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDialogArgs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.app_install.mojom.PageHandler_GetDialogArgs_ParamsSpec,
      ash.app_install.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec,
      [],
      false);
  }

  closeDialog() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.app_install.mojom.PageHandler_CloseDialog_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.app_install.mojom.PageHandler.getRemote = function() {
  let remote = new ash.app_install.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.app_install.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.app_install.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: GetDialogArgs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.app_install.mojom.PageHandler_GetDialogArgs_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDialogArgs (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.app_install.mojom.PageHandler_CloseDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseDialog (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(ash.app_install.mojom.PageHandler_GetDialogArgs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDialogArgs');
          const result = this.impl.getDialogArgs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.app_install.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.app_install.mojom.PageHandler_CloseDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeDialog');
          const result = this.impl.closeDialog();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.app_install.mojom.PageHandlerReceiver = ash.app_install.mojom.PageHandlerReceiver;

ash.app_install.mojom.PageHandlerPtr = ash.app_install.mojom.PageHandlerRemote;
ash.app_install.mojom.PageHandlerRequest = ash.app_install.mojom.PageHandlerPendingReceiver;

