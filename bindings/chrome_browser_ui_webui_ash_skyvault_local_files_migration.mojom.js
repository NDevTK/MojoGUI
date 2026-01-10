// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/skyvault/local_files_migration.mojom
// Module: policy.local_user_files.mojom

'use strict';

// Module namespace
var policy = policy || {};
policy.local_user_files = policy.local_user_files || {};
policy.local_user_files.mojom = policy.local_user_files.mojom || {};

policy.local_user_files.mojom.CloudProviderSpec = { $: mojo.internal.Enum() };
policy.local_user_files.mojom.TimeUnitSpec = { $: mojo.internal.Enum() };
policy.local_user_files.mojom.TimeUnitAndValueSpec = { $: {} };
policy.local_user_files.mojom.PageHandlerFactory = {};
policy.local_user_files.mojom.PageHandlerFactory.$interfaceName = 'policy.local_user_files.mojom.PageHandlerFactory';
policy.local_user_files.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
policy.local_user_files.mojom.PageHandler = {};
policy.local_user_files.mojom.PageHandler.$interfaceName = 'policy.local_user_files.mojom.PageHandler';
policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ParamsSpec = { $: {} };
policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ResponseParamsSpec = { $: {} };
policy.local_user_files.mojom.PageHandler_UploadOrDeleteNow_ParamsSpec = { $: {} };
policy.local_user_files.mojom.PageHandler_Close_ParamsSpec = { $: {} };
policy.local_user_files.mojom.Page = {};
policy.local_user_files.mojom.Page.$interfaceName = 'policy.local_user_files.mojom.Page';
policy.local_user_files.mojom.Page_UpdateRemainingTime_ParamsSpec = { $: {} };

// Enum: CloudProvider
policy.local_user_files.mojom.CloudProvider = {
  kGoogleDrive: 0,
  kOneDrive: 1,
  kDelete: 2,
};

// Enum: TimeUnit
policy.local_user_files.mojom.TimeUnit = {
  kMinutes: 0,
  kHours: 1,
};

// Struct: TimeUnitAndValue
mojo.internal.Struct(
    policy.local_user_files.mojom.TimeUnitAndValueSpec, 'policy.local_user_files.mojom.TimeUnitAndValue', [
      mojo.internal.StructField('unit', 0, 0, policy.local_user_files.mojom.TimeUnitSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    policy.local_user_files.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'policy.local_user_files.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(policy.local_user_files.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(policy.local_user_files.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

policy.local_user_files.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

policy.local_user_files.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'policy.local_user_files.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      policy.local_user_files.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new policy.local_user_files.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

policy.local_user_files.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      policy.local_user_files.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

policy.local_user_files.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new policy.local_user_files.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'policy.local_user_files.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

policy.local_user_files.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStruct(policy.local_user_files.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(policy.local_user_files.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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

policy.local_user_files.mojom.PageHandlerFactoryReceiver = policy.local_user_files.mojom.PageHandlerFactoryReceiver;

policy.local_user_files.mojom.PageHandlerFactoryPtr = policy.local_user_files.mojom.PageHandlerFactoryRemote;
policy.local_user_files.mojom.PageHandlerFactoryRequest = policy.local_user_files.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ParamsSpec, 'policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ResponseParamsSpec, 'policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ResponseParams', [
      mojo.internal.StructField('cloud_provider', 0, 0, policy.local_user_files.mojom.CloudProviderSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remaining_time', 8, 0, policy.local_user_files.mojom.TimeUnitAndValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_date_and_time', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    policy.local_user_files.mojom.PageHandler_UploadOrDeleteNow_ParamsSpec, 'policy.local_user_files.mojom.PageHandler_UploadOrDeleteNow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    policy.local_user_files.mojom.PageHandler_Close_ParamsSpec, 'policy.local_user_files.mojom.PageHandler_Close_Params', [
    ],
    [[0, 8]]);

policy.local_user_files.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

policy.local_user_files.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'policy.local_user_files.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      policy.local_user_files.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new policy.local_user_files.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

policy.local_user_files.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInitialDialogInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ParamsSpec,
      policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ResponseParamsSpec,
      [],
      false);
  }

  uploadOrDeleteNow() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      policy.local_user_files.mojom.PageHandler_UploadOrDeleteNow_ParamsSpec,
      null,
      [],
      false);
  }

  close() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      policy.local_user_files.mojom.PageHandler_Close_ParamsSpec,
      null,
      [],
      false);
  }

};

policy.local_user_files.mojom.PageHandler.getRemote = function() {
  let remote = new policy.local_user_files.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'policy.local_user_files.mojom.PageHandler',
    'context');
  return remote.$;
};

policy.local_user_files.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetInitialDialogInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInitialDialogInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UploadOrDeleteNow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(policy.local_user_files.mojom.PageHandler_UploadOrDeleteNow_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UploadOrDeleteNow (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(policy.local_user_files.mojom.PageHandler_Close_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getInitialDialogInfo');
          const result = this.impl.getInitialDialogInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, policy.local_user_files.mojom.PageHandler_GetInitialDialogInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(policy.local_user_files.mojom.PageHandler_UploadOrDeleteNow_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.uploadOrDeleteNow');
          const result = this.impl.uploadOrDeleteNow();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(policy.local_user_files.mojom.PageHandler_Close_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

policy.local_user_files.mojom.PageHandlerReceiver = policy.local_user_files.mojom.PageHandlerReceiver;

policy.local_user_files.mojom.PageHandlerPtr = policy.local_user_files.mojom.PageHandlerRemote;
policy.local_user_files.mojom.PageHandlerRequest = policy.local_user_files.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    policy.local_user_files.mojom.Page_UpdateRemainingTime_ParamsSpec, 'policy.local_user_files.mojom.Page_UpdateRemainingTime_Params', [
      mojo.internal.StructField('remaining_time', 0, 0, policy.local_user_files.mojom.TimeUnitAndValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

policy.local_user_files.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

policy.local_user_files.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'policy.local_user_files.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      policy.local_user_files.mojom.PagePendingReceiver,
      handle);
    this.$ = new policy.local_user_files.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

policy.local_user_files.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateRemainingTime(remaining_time) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      policy.local_user_files.mojom.Page_UpdateRemainingTime_ParamsSpec,
      null,
      [remaining_time],
      false);
  }

};

policy.local_user_files.mojom.Page.getRemote = function() {
  let remote = new policy.local_user_files.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'policy.local_user_files.mojom.Page',
    'context');
  return remote.$;
};

policy.local_user_files.mojom.PageReceiver = class {
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
        
        // Try Method 0: UpdateRemainingTime
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(policy.local_user_files.mojom.Page_UpdateRemainingTime_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRemainingTime (0)');
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
          const params = decoder.decodeStruct(policy.local_user_files.mojom.Page_UpdateRemainingTime_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateRemainingTime');
          const result = this.impl.updateRemainingTime(params.remaining_time);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

policy.local_user_files.mojom.PageReceiver = policy.local_user_files.mojom.PageReceiver;

policy.local_user_files.mojom.PagePtr = policy.local_user_files.mojom.PageRemote;
policy.local_user_files.mojom.PageRequest = policy.local_user_files.mojom.PagePendingReceiver;

