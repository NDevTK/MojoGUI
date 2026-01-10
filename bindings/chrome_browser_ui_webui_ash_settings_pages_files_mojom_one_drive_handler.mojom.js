// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/files/mojom/one_drive_handler.mojom
// Module: ash.settings.one_drive.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.one_drive = ash.settings.one_drive || {};
ash.settings.one_drive.mojom = ash.settings.one_drive.mojom || {};

ash.settings.one_drive.mojom.PageHandlerFactory = {};
ash.settings.one_drive.mojom.PageHandlerFactory.$interfaceName = 'ash.settings.one_drive.mojom.PageHandlerFactory';
ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler = {};
ash.settings.one_drive.mojom.PageHandler.$interfaceName = 'ash.settings.one_drive.mojom.PageHandler';
ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ResponseParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ResponseParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ResponseParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec = { $: {} };
ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ResponseParamsSpec = { $: {} };
ash.settings.one_drive.mojom.Page = {};
ash.settings.one_drive.mojom.Page.$interfaceName = 'ash.settings.one_drive.mojom.Page';
ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec = { $: {} };
ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.settings.one_drive.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.settings.one_drive.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.settings.one_drive.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.one_drive.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.settings.one_drive.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.one_drive.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.settings.one_drive.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.one_drive.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

ash.settings.one_drive.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.one_drive.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.one_drive.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.settings.one_drive.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStruct(ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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

ash.settings.one_drive.mojom.PageHandlerFactoryReceiver = ash.settings.one_drive.mojom.PageHandlerFactoryReceiver;

ash.settings.one_drive.mojom.PageHandlerFactoryPtr = ash.settings.one_drive.mojom.PageHandlerFactoryRemote;
ash.settings.one_drive.mojom.PageHandlerFactoryRequest = ash.settings.one_drive.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ResponseParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ResponseParams', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ResponseParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ResponseParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ResponseParamsSpec, 'ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.one_drive.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.one_drive.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.one_drive.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.one_drive.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.one_drive.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.one_drive.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUserEmailAddress() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec,
      ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ResponseParamsSpec,
      [],
      false);
  }

  connectToOneDrive() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec,
      ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  disconnectFromOneDrive() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec,
      ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  openOneDriveFolder() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec,
      ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ResponseParamsSpec,
      [],
      false);
  }

};

ash.settings.one_drive.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.one_drive.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.one_drive.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.settings.one_drive.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetUserEmailAddress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserEmailAddress (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: ConnectToOneDrive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToOneDrive (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: DisconnectFromOneDrive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisconnectFromOneDrive (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: OpenOneDriveFolder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenOneDriveFolder (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUserEmailAddress');
          const result = this.impl.getUserEmailAddress();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.connectToOneDrive');
          const result = this.impl.connectToOneDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disconnectFromOneDrive');
          const result = this.impl.disconnectFromOneDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openOneDriveFolder');
          const result = this.impl.openOneDriveFolder();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.one_drive.mojom.PageHandlerReceiver = ash.settings.one_drive.mojom.PageHandlerReceiver;

ash.settings.one_drive.mojom.PageHandlerPtr = ash.settings.one_drive.mojom.PageHandlerRemote;
ash.settings.one_drive.mojom.PageHandlerRequest = ash.settings.one_drive.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec, 'ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec, 'ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_Params', [
      mojo.internal.StructField('is_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.one_drive.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.one_drive.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.settings.one_drive.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.one_drive.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.settings.one_drive.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.one_drive.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onODFSMountOrUnmount() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec,
      null,
      [],
      false);
  }

  onAllowUserToRemoveODFSChanged(is_allowed) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec,
      null,
      [is_allowed],
      false);
  }

};

ash.settings.one_drive.mojom.Page.getRemote = function() {
  let remote = new ash.settings.one_drive.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.one_drive.mojom.Page',
    'context');
  return remote.$;
};

ash.settings.one_drive.mojom.PageReceiver = class {
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
        
        // Try Method 0: OnODFSMountOrUnmount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnODFSMountOrUnmount (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnAllowUserToRemoveODFSChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAllowUserToRemoveODFSChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onODFSMountOrUnmount');
          const result = this.impl.onODFSMountOrUnmount();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAllowUserToRemoveODFSChanged');
          const result = this.impl.onAllowUserToRemoveODFSChanged(params.is_allowed);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.one_drive.mojom.PageReceiver = ash.settings.one_drive.mojom.PageReceiver;

ash.settings.one_drive.mojom.PagePtr = ash.settings.one_drive.mojom.PageRemote;
ash.settings.one_drive.mojom.PageRequest = ash.settings.one_drive.mojom.PagePendingReceiver;

