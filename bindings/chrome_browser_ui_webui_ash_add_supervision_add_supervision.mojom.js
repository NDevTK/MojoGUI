// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/add_supervision/add_supervision.mojom
// Module: add_supervision.mojom

'use strict';

// Module namespace
var add_supervision = add_supervision || {};
add_supervision.mojom = add_supervision.mojom || {};

add_supervision.mojom.OAuthTokenFetchStatusSpec = { $: mojo.internal.Enum() };
add_supervision.mojom.AddSupervisionHandler = {};
add_supervision.mojom.AddSupervisionHandler.$interfaceName = 'add_supervision.mojom.AddSupervisionHandler';
add_supervision.mojom.AddSupervisionHandler_RequestClose_ParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_RequestClose_ResponseParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ResponseParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ResponseParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_LogOut_ParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec = { $: {} };
add_supervision.mojom.AddSupervisionHandler_SetCloseOnEscape_ParamsSpec = { $: {} };

// Enum: OAuthTokenFetchStatus
add_supervision.mojom.OAuthTokenFetchStatus = {
  OK: 0,
  ERROR: 1,
};

// Interface: AddSupervisionHandler
mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_RequestClose_ParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_RequestClose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_RequestClose_ResponseParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_RequestClose_ResponseParams', [
      mojo.internal.StructField('closed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ResponseParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ResponseParams', [
      mojo.internal.StructField('package_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ResponseParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, add_supervision.mojom.OAuthTokenFetchStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('oauth_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_LogOut_ParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_LogOut_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    add_supervision.mojom.AddSupervisionHandler_SetCloseOnEscape_ParamsSpec, 'add_supervision.mojom.AddSupervisionHandler_SetCloseOnEscape_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

add_supervision.mojom.AddSupervisionHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

add_supervision.mojom.AddSupervisionHandlerRemote = class {
  static get $interfaceName() {
    return 'add_supervision.mojom.AddSupervisionHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      add_supervision.mojom.AddSupervisionHandlerPendingReceiver,
      handle);
    this.$ = new add_supervision.mojom.AddSupervisionHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

add_supervision.mojom.AddSupervisionHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestClose() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      add_supervision.mojom.AddSupervisionHandler_RequestClose_ParamsSpec,
      add_supervision.mojom.AddSupervisionHandler_RequestClose_ResponseParamsSpec,
      [],
      false);
  }

  getInstalledArcApps() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec,
      add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ResponseParamsSpec,
      [],
      false);
  }

  getOAuthToken() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec,
      add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ResponseParamsSpec,
      [],
      false);
  }

  logOut() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      add_supervision.mojom.AddSupervisionHandler_LogOut_ParamsSpec,
      null,
      [],
      false);
  }

  notifySupervisionEnabled() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec,
      null,
      [],
      false);
  }

  setCloseOnEscape(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      add_supervision.mojom.AddSupervisionHandler_SetCloseOnEscape_ParamsSpec,
      null,
      [enabled],
      false);
  }

};

add_supervision.mojom.AddSupervisionHandler.getRemote = function() {
  let remote = new add_supervision.mojom.AddSupervisionHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'add_supervision.mojom.AddSupervisionHandler',
    'context');
  return remote.$;
};

add_supervision.mojom.AddSupervisionHandlerReceiver = class {
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
        
        // Try Method 0: RequestClose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(add_supervision.mojom.AddSupervisionHandler_RequestClose_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestClose (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetInstalledArcApps
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInstalledArcApps (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetOAuthToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOAuthToken (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: LogOut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(add_supervision.mojom.AddSupervisionHandler_LogOut_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogOut (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: NotifySupervisionEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifySupervisionEnabled (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetCloseOnEscape
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(add_supervision.mojom.AddSupervisionHandler_SetCloseOnEscape_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCloseOnEscape (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStruct(add_supervision.mojom.AddSupervisionHandler_RequestClose_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestClose');
          const result = this.impl.requestClose();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, add_supervision.mojom.AddSupervisionHandler_RequestClose_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getInstalledArcApps');
          const result = this.impl.getInstalledArcApps();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, add_supervision.mojom.AddSupervisionHandler_GetInstalledArcApps_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getOAuthToken');
          const result = this.impl.getOAuthToken();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, add_supervision.mojom.AddSupervisionHandler_GetOAuthToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(add_supervision.mojom.AddSupervisionHandler_LogOut_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logOut');
          const result = this.impl.logOut();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(add_supervision.mojom.AddSupervisionHandler_NotifySupervisionEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifySupervisionEnabled');
          const result = this.impl.notifySupervisionEnabled();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(add_supervision.mojom.AddSupervisionHandler_SetCloseOnEscape_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCloseOnEscape');
          const result = this.impl.setCloseOnEscape(params.enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

add_supervision.mojom.AddSupervisionHandlerReceiver = add_supervision.mojom.AddSupervisionHandlerReceiver;

add_supervision.mojom.AddSupervisionHandlerPtr = add_supervision.mojom.AddSupervisionHandlerRemote;
add_supervision.mojom.AddSupervisionHandlerRequest = add_supervision.mojom.AddSupervisionHandlerPendingReceiver;

