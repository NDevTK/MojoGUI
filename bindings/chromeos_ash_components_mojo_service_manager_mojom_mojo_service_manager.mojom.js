// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mojo_service_manager/mojom/mojo_service_manager.mojom
// Module: chromeos.mojo_service_manager.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

// Module namespace
var chromeos = chromeos || {};
chromeos.mojo_service_manager = chromeos.mojo_service_manager || {};
chromeos.mojo_service_manager.mojom = chromeos.mojo_service_manager.mojom || {};
var mojo_base = mojo_base || {};

chromeos.mojo_service_manager.mojom.TypeSpec = { $: mojo.internal.Enum() };
chromeos.mojo_service_manager.mojom.ErrorCodeSpec = { $: mojo.internal.Enum() };
chromeos.mojo_service_manager.mojom.ErrorOrServiceStateSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceStateSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ProcessIdentitySpec = { $: {} };
chromeos.mojo_service_manager.mojom.RegisteredServiceStateSpec = { $: {} };
chromeos.mojo_service_manager.mojom.UnregisteredServiceStateSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceEventSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ErrorSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceManager = {};
chromeos.mojo_service_manager.mojom.ServiceManager.$interfaceName = 'chromeos.mojo_service_manager.mojom.ServiceManager';
chromeos.mojo_service_manager.mojom.ServiceManager_Register_ParamsSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceManager_Request_ParamsSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceManager_Query_ParamsSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceManager_Query_ResponseParamsSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceManager_AddServiceObserver_ParamsSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceProvider = {};
chromeos.mojo_service_manager.mojom.ServiceProvider.$interfaceName = 'chromeos.mojo_service_manager.mojom.ServiceProvider';
chromeos.mojo_service_manager.mojom.ServiceProvider_Request_ParamsSpec = { $: {} };
chromeos.mojo_service_manager.mojom.ServiceObserver = {};
chromeos.mojo_service_manager.mojom.ServiceObserver.$interfaceName = 'chromeos.mojo_service_manager.mojom.ServiceObserver';
chromeos.mojo_service_manager.mojom.ServiceObserver_OnServiceEvent_ParamsSpec = { $: {} };

// Enum: Type
chromeos.mojo_service_manager.mojom.Type = {
  kUnknown: 0,
  kRegistered: 1,
  kUnRegistered: 2,
};

// Enum: ErrorCode
chromeos.mojo_service_manager.mojom.ErrorCode = {
  kUnknown: 1,
  kTimeout: 2,
  kPermissionDenied: 3,
  kServiceAlreadyRegistered: 4,
  kServiceNotFound: 5,
  kUnexpectedOsError: 6,
};

// Union: ErrorOrServiceState
mojo.internal.Union(
    chromeos.mojo_service_manager.mojom.ErrorOrServiceStateSpec, 'chromeos.mojo_service_manager.mojom.ErrorOrServiceState', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'state': {
        'ordinal': 1,
        'type': chromeos.mojo_service_manager.mojom.ServiceStateSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 2,
        'type': chromeos.mojo_service_manager.mojom.ErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ServiceState
mojo.internal.Union(
    chromeos.mojo_service_manager.mojom.ServiceStateSpec, 'chromeos.mojo_service_manager.mojom.ServiceState', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'registered_state': {
        'ordinal': 1,
        'type': chromeos.mojo_service_manager.mojom.RegisteredServiceStateSpec.$,
        'nullable': false,
      },
      'unregistered_state': {
        'ordinal': 2,
        'type': chromeos.mojo_service_manager.mojom.UnregisteredServiceStateSpec.$,
        'nullable': false,
      },
    });

// Struct: ProcessIdentity
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ProcessIdentitySpec, 'chromeos.mojo_service_manager.mojom.ProcessIdentity', [
      mojo.internal.StructField('security_context', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pid', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('uid', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('gid', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RegisteredServiceState
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.RegisteredServiceStateSpec, 'chromeos.mojo_service_manager.mojom.RegisteredServiceState', [
      mojo.internal.StructField('owner', 0, 0, chromeos.mojo_service_manager.mojom.ProcessIdentitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UnregisteredServiceState
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.UnregisteredServiceStateSpec, 'chromeos.mojo_service_manager.mojom.UnregisteredServiceState', [
    ],
    [[0, 8]]);

// Struct: ServiceEvent
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceEventSpec, 'chromeos.mojo_service_manager.mojom.ServiceEvent', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Error
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ErrorSpec, 'chromeos.mojo_service_manager.mojom.Error', [
      mojo.internal.StructField('code', 0, 0, chromeos.mojo_service_manager.mojom.ErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ServiceManager
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceManager_Register_ParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceManager_Register_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_provider', 8, 0, mojo.internal.InterfaceProxy(chromeos.mojo_service_manager.mojom.ServiceProviderSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceManager_Request_ParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceManager_Request_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timeout', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceManager_Query_ParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceManager_Query_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceManager_Query_ResponseParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceManager_Query_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.mojo_service_manager.mojom.ErrorOrServiceStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceManager_AddServiceObserver_ParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceManager_AddServiceObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.mojo_service_manager.mojom.ServiceObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.mojo_service_manager.mojom.ServiceManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.mojo_service_manager.mojom.ServiceManagerRemote = class {
  static get $interfaceName() {
    return 'chromeos.mojo_service_manager.mojom.ServiceManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.mojo_service_manager.mojom.ServiceManagerPendingReceiver,
      handle);
    this.$ = new chromeos.mojo_service_manager.mojom.ServiceManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.mojo_service_manager.mojom.ServiceManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceManager', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  register(service_name, service_provider) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceManager_Register_ParamsSpec,
      null,
      [service_name, service_provider],
      false);
  }

  request(service_name, timeout, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceManager_Request_ParamsSpec,
      null,
      [service_name, timeout, receiver],
      false);
  }

  query(service_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceManager_Query_ParamsSpec,
      chromeos.mojo_service_manager.mojom.ServiceManager_Query_ResponseParamsSpec,
      [service_name],
      false);
  }

  addServiceObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceManager_AddServiceObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

chromeos.mojo_service_manager.mojom.ServiceManager.getRemote = function() {
  let remote = new chromeos.mojo_service_manager.mojom.ServiceManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.mojo_service_manager.mojom.ServiceManager',
    'context');
  return remote.$;
};

chromeos.mojo_service_manager.mojom.ServiceManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceManager', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Register
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.mojo_service_manager.mojom.ServiceManager_Register_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Register (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Request
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.mojo_service_manager.mojom.ServiceManager_Request_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Request (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Query
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.mojo_service_manager.mojom.ServiceManager_Query_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Query (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AddServiceObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.mojo_service_manager.mojom.ServiceManager_AddServiceObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddServiceObserver (3)');
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
          const params = decoder.decodeStructInline(chromeos.mojo_service_manager.mojom.ServiceManager_Register_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.register');
          const result = this.impl.register(params.service_name, params.service_provider);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.mojo_service_manager.mojom.ServiceManager_Request_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.request');
          const result = this.impl.request(params.service_name, params.timeout, params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.mojo_service_manager.mojom.ServiceManager_Query_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.query');
          const result = this.impl.query(params.service_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.mojo_service_manager.mojom.ServiceManager_Query_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.mojo_service_manager.mojom.ServiceManager_AddServiceObserver_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addServiceObserver');
          const result = this.impl.addServiceObserver(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.mojo_service_manager.mojom.ServiceManagerReceiver = chromeos.mojo_service_manager.mojom.ServiceManagerReceiver;

chromeos.mojo_service_manager.mojom.ServiceManagerPtr = chromeos.mojo_service_manager.mojom.ServiceManagerRemote;
chromeos.mojo_service_manager.mojom.ServiceManagerRequest = chromeos.mojo_service_manager.mojom.ServiceManagerPendingReceiver;


// Interface: ServiceProvider
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceProvider_Request_ParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceProvider_Request_Params', [
      mojo.internal.StructField('client_identity', 0, 0, chromeos.mojo_service_manager.mojom.ProcessIdentitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos.mojo_service_manager.mojom.ServiceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.mojo_service_manager.mojom.ServiceProviderRemote = class {
  static get $interfaceName() {
    return 'chromeos.mojo_service_manager.mojom.ServiceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.mojo_service_manager.mojom.ServiceProviderPendingReceiver,
      handle);
    this.$ = new chromeos.mojo_service_manager.mojom.ServiceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.mojo_service_manager.mojom.ServiceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceProvider', [
      { explicit: 0 },
    ]);
  }

  request(client_identity, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceProvider_Request_ParamsSpec,
      null,
      [client_identity, receiver],
      false);
  }

};

chromeos.mojo_service_manager.mojom.ServiceProvider.getRemote = function() {
  let remote = new chromeos.mojo_service_manager.mojom.ServiceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.mojo_service_manager.mojom.ServiceProvider',
    'context');
  return remote.$;
};

chromeos.mojo_service_manager.mojom.ServiceProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceProvider', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Request
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.mojo_service_manager.mojom.ServiceProvider_Request_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Request (0)');
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
          const params = decoder.decodeStructInline(chromeos.mojo_service_manager.mojom.ServiceProvider_Request_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.request');
          const result = this.impl.request(params.client_identity, params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.mojo_service_manager.mojom.ServiceProviderReceiver = chromeos.mojo_service_manager.mojom.ServiceProviderReceiver;

chromeos.mojo_service_manager.mojom.ServiceProviderPtr = chromeos.mojo_service_manager.mojom.ServiceProviderRemote;
chromeos.mojo_service_manager.mojom.ServiceProviderRequest = chromeos.mojo_service_manager.mojom.ServiceProviderPendingReceiver;


// Interface: ServiceObserver
mojo.internal.Struct(
    chromeos.mojo_service_manager.mojom.ServiceObserver_OnServiceEvent_ParamsSpec, 'chromeos.mojo_service_manager.mojom.ServiceObserver_OnServiceEvent_Params', [
      mojo.internal.StructField('event', 0, 0, chromeos.mojo_service_manager.mojom.ServiceEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.mojo_service_manager.mojom.ServiceObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.mojo_service_manager.mojom.ServiceObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.mojo_service_manager.mojom.ServiceObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.mojo_service_manager.mojom.ServiceObserverPendingReceiver,
      handle);
    this.$ = new chromeos.mojo_service_manager.mojom.ServiceObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.mojo_service_manager.mojom.ServiceObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceObserver', [
      { explicit: 0 },
    ]);
  }

  onServiceEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.mojo_service_manager.mojom.ServiceObserver_OnServiceEvent_ParamsSpec,
      null,
      [event],
      false);
  }

};

chromeos.mojo_service_manager.mojom.ServiceObserver.getRemote = function() {
  let remote = new chromeos.mojo_service_manager.mojom.ServiceObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.mojo_service_manager.mojom.ServiceObserver',
    'context');
  return remote.$;
};

chromeos.mojo_service_manager.mojom.ServiceObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceObserver', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnServiceEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.mojo_service_manager.mojom.ServiceObserver_OnServiceEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnServiceEvent (0)');
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
          const params = decoder.decodeStructInline(chromeos.mojo_service_manager.mojom.ServiceObserver_OnServiceEvent_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onServiceEvent');
          const result = this.impl.onServiceEvent(params.event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.mojo_service_manager.mojom.ServiceObserverReceiver = chromeos.mojo_service_manager.mojom.ServiceObserverReceiver;

chromeos.mojo_service_manager.mojom.ServiceObserverPtr = chromeos.mojo_service_manager.mojom.ServiceObserverRemote;
chromeos.mojo_service_manager.mojom.ServiceObserverRequest = chromeos.mojo_service_manager.mojom.ServiceObserverPendingReceiver;

