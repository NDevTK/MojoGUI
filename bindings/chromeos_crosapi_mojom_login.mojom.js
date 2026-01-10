// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/login.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.SamlUserSessionPropertiesSpec = { $: {} };
crosapi.mojom.ExternalLogoutRequestObserver = {};
crosapi.mojom.ExternalLogoutRequestObserver.$interfaceName = 'crosapi.mojom.ExternalLogoutRequestObserver';
crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec = { $: {} };
crosapi.mojom.Login = {};
crosapi.mojom.Login.$interfaceName = 'crosapi.mojom.Login';
crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec = { $: {} };
crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_0_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_4_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_5_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_6_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_7_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_10_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_12_ParamsSpec = { $: {} };
crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec = { $: {} };

// Struct: SamlUserSessionProperties
mojo.internal.Struct(
    crosapi.mojom.SamlUserSessionPropertiesSpec, 'crosapi.mojom.SamlUserSessionProperties', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gaia_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('password', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('oauth_code', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ExternalLogoutRequestObserver
mojo.internal.Struct(
    crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec, 'crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_Params', [
    ],
    [[0, 8]]);

crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.ExternalLogoutRequestObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.ExternalLogoutRequestObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.ExternalLogoutRequestObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.ExternalLogoutRequestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRequestExternalLogout() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec,
      null,
      [],
      false);
  }

};

crosapi.mojom.ExternalLogoutRequestObserver.getRemote = function() {
  let remote = new crosapi.mojom.ExternalLogoutRequestObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.ExternalLogoutRequestObserver',
    'context');
  return remote.$;
};

crosapi.mojom.ExternalLogoutRequestObserverReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnRequestExternalLogout
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRequestExternalLogout (0)');
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
          const params = decoder.decodeStruct(crosapi.mojom.ExternalLogoutRequestObserver_OnRequestExternalLogout_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onRequestExternalLogout');
          const result = this.impl.onRequestExternalLogout();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.ExternalLogoutRequestObserverReceiver = crosapi.mojom.ExternalLogoutRequestObserverReceiver;

crosapi.mojom.ExternalLogoutRequestObserverPtr = crosapi.mojom.ExternalLogoutRequestObserverRemote;
crosapi.mojom.ExternalLogoutRequestObserverRequest = crosapi.mojom.ExternalLogoutRequestObserverPendingReceiver;


// Interface: Login
mojo.internal.Struct(
    crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec, 'crosapi.mojom.Login_AddExternalLogoutRequestObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.ExternalLogoutRequestObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec, 'crosapi.mojom.Login_NotifyOnExternalLogoutDone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_0_ParamsSpec, 'crosapi.mojom.Login_REMOVED_0_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_0_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_4_ParamsSpec, 'crosapi.mojom.Login_REMOVED_4_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_4_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_5_ParamsSpec, 'crosapi.mojom.Login_REMOVED_5_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_5_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_6_ParamsSpec, 'crosapi.mojom.Login_REMOVED_6_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_6_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_7_ParamsSpec, 'crosapi.mojom.Login_REMOVED_7_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_7_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_10_ParamsSpec, 'crosapi.mojom.Login_REMOVED_10_Params', [
      mojo.internal.StructField('properties', 0, 0, crosapi.mojom.SamlUserSessionPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_10_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_12_ParamsSpec, 'crosapi.mojom.Login_REMOVED_12_Params', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec, 'crosapi.mojom.Login_REMOVED_12_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.LoginPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.LoginRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.Login';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.LoginPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.LoginRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.LoginRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addExternalLogoutRequestObserver(observer) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  notifyOnExternalLogoutDone() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec,
      null,
      [],
      false);
  }

  rEMOVED_0(password) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.Login_REMOVED_0_ParamsSpec,
      crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_4(password) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.Login_REMOVED_4_ParamsSpec,
      crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_5(password) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.Login_REMOVED_5_ParamsSpec,
      crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_6(password) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.Login_REMOVED_6_ParamsSpec,
      crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_7(password) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.Login_REMOVED_7_ParamsSpec,
      crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec,
      [password],
      false);
  }

  rEMOVED_10(properties) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      crosapi.mojom.Login_REMOVED_10_ParamsSpec,
      crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec,
      [properties],
      false);
  }

  rEMOVED_12(password) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      crosapi.mojom.Login_REMOVED_12_ParamsSpec,
      crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec,
      [password],
      false);
  }

};

crosapi.mojom.Login.getRemote = function() {
  let remote = new crosapi.mojom.LoginRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.Login',
    'context');
  return remote.$;
};

crosapi.mojom.LoginReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(14, 0); // Default ordinal 14 -> Index 0
    this.ordinalMap.set(16, 1); // Default ordinal 16 -> Index 1
    this.ordinalMap.set(0, 2); // Default ordinal 0 -> Index 2
    this.ordinalMap.set(4, 3); // Default ordinal 4 -> Index 3
    this.ordinalMap.set(5, 4); // Default ordinal 5 -> Index 4
    this.ordinalMap.set(6, 5); // Default ordinal 6 -> Index 5
    this.ordinalMap.set(7, 6); // Default ordinal 7 -> Index 6
    this.ordinalMap.set(10, 7); // Default ordinal 10 -> Index 7
    this.ordinalMap.set(12, 8); // Default ordinal 12 -> Index 8
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddExternalLogoutRequestObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddExternalLogoutRequestObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NotifyOnExternalLogoutDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyOnExternalLogoutDone (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: REMOVED_0
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.Login_REMOVED_0_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_0 (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: REMOVED_4
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.Login_REMOVED_4_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_4 (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: REMOVED_5
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.Login_REMOVED_5_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_5 (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: REMOVED_6
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.Login_REMOVED_6_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_6 (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: REMOVED_7
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.Login_REMOVED_7_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_7 (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: REMOVED_10
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.Login_REMOVED_10_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_10 (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: REMOVED_12
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(crosapi.mojom.Login_REMOVED_12_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_12 (8)');
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
          const params = decoder.decodeStruct(crosapi.mojom.Login_AddExternalLogoutRequestObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addExternalLogoutRequestObserver');
          const result = this.impl.addExternalLogoutRequestObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Login_NotifyOnExternalLogoutDone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyOnExternalLogoutDone');
          const result = this.impl.notifyOnExternalLogoutDone();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Login_REMOVED_0_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_0');
          const result = this.impl.rEMOVED_0(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_0_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Login_REMOVED_4_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_4');
          const result = this.impl.rEMOVED_4(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_4_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Login_REMOVED_5_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_5');
          const result = this.impl.rEMOVED_5(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_5_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Login_REMOVED_6_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_6');
          const result = this.impl.rEMOVED_6(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_6_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Login_REMOVED_7_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_7');
          const result = this.impl.rEMOVED_7(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_7_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Login_REMOVED_10_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_10');
          const result = this.impl.rEMOVED_10(params.properties);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_10_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Login_REMOVED_12_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_12');
          const result = this.impl.rEMOVED_12(params.password);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.Login_REMOVED_12_ResponseParamsSpec);
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

crosapi.mojom.LoginReceiver = crosapi.mojom.LoginReceiver;

crosapi.mojom.LoginPtr = crosapi.mojom.LoginRemote;
crosapi.mojom.LoginRequest = crosapi.mojom.LoginPendingReceiver;

