// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/background_sync/background_sync.mojom
// Module: blink.mojom

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

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
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
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.BackgroundSyncErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.BackgroundSyncStateSpec = { $: mojo.internal.Enum() };
blink.mojom.BackgroundSyncEventLastChanceSpec = { $: mojo.internal.Enum() };
blink.mojom.BackgroundSyncTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.SyncRegistrationOptionsSpec = { $: {} };
blink.mojom.BackgroundSyncRegistrationInfoSpec = { $: {} };
blink.mojom.OneShotBackgroundSyncService = {};
blink.mojom.OneShotBackgroundSyncService.$interfaceName = 'blink.mojom.OneShotBackgroundSyncService';
blink.mojom.OneShotBackgroundSyncService_Register_ParamsSpec = { $: {} };
blink.mojom.OneShotBackgroundSyncService_Register_ResponseParamsSpec = { $: {} };
blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec = { $: {} };
blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec = { $: {} };
blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParamsSpec = { $: {} };
blink.mojom.PeriodicBackgroundSyncService = {};
blink.mojom.PeriodicBackgroundSyncService.$interfaceName = 'blink.mojom.PeriodicBackgroundSyncService';
blink.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec = { $: {} };
blink.mojom.PeriodicBackgroundSyncService_Register_ResponseParamsSpec = { $: {} };
blink.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec = { $: {} };
blink.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParamsSpec = { $: {} };
blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec = { $: {} };
blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParamsSpec = { $: {} };

// Enum: BackgroundSyncError
blink.mojom.BackgroundSyncError = {
  NONE: 0,
  STORAGE: 1,
  NOT_FOUND: 2,
  NO_SERVICE_WORKER: 3,
  NOT_ALLOWED: 4,
  PERMISSION_DENIED: 5,
  MAX: 5,
};

// Enum: BackgroundSyncState
blink.mojom.BackgroundSyncState = {
  PENDING: 0,
  FIRING: 1,
  REREGISTERED_WHILE_FIRING: 2,
};

// Enum: BackgroundSyncEventLastChance
blink.mojom.BackgroundSyncEventLastChance = {
  IS_NOT_LAST_CHANCE: 0,
  IS_LAST_CHANCE: 1,
};

// Enum: BackgroundSyncType
blink.mojom.BackgroundSyncType = {
  ONE_SHOT: 0,
  PERIODIC: 1,
};

// Struct: SyncRegistrationOptions
mojo.internal.Struct(
    blink.mojom.SyncRegistrationOptionsSpec, 'blink.mojom.SyncRegistrationOptions', [
      mojo.internal.StructField('tag', 0, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('min_interval', 8, 0, mojo.internal.Int64, -1, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BackgroundSyncRegistrationInfo
mojo.internal.Struct(
    blink.mojom.BackgroundSyncRegistrationInfoSpec, 'blink.mojom.BackgroundSyncRegistrationInfo', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('tag', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sync_type', 16, 0, blink.mojom.BackgroundSyncTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: OneShotBackgroundSyncService
mojo.internal.Struct(
    blink.mojom.OneShotBackgroundSyncService_Register_ParamsSpec, 'blink.mojom.OneShotBackgroundSyncService_Register_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.SyncRegistrationOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_registration_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.OneShotBackgroundSyncService_Register_ResponseParamsSpec, 'blink.mojom.OneShotBackgroundSyncService_Register_ResponseParams', [
      mojo.internal.StructField('err', 0, 0, blink.mojom.BackgroundSyncErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.SyncRegistrationOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec, 'blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_Params', [
      mojo.internal.StructField('registration_info', 0, 0, blink.mojom.BackgroundSyncRegistrationInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec, 'blink.mojom.OneShotBackgroundSyncService_GetRegistrations_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParamsSpec, 'blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParams', [
      mojo.internal.StructField('err', 0, 0, blink.mojom.BackgroundSyncErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('registrations', 8, 0, mojo.internal.Array(blink.mojom.SyncRegistrationOptionsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.OneShotBackgroundSyncServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.OneShotBackgroundSyncServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.OneShotBackgroundSyncService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.OneShotBackgroundSyncServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.OneShotBackgroundSyncServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  register(options, service_worker_registration_id) {
    return this.$.register(options, service_worker_registration_id);
  }
  didResolveRegistration(registration_info) {
    return this.$.didResolveRegistration(registration_info);
  }
  getRegistrations(service_worker_registration_id) {
    return this.$.getRegistrations(service_worker_registration_id);
  }
};

blink.mojom.OneShotBackgroundSyncServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OneShotBackgroundSyncService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  register(options, service_worker_registration_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.OneShotBackgroundSyncService_Register_ParamsSpec,
      blink.mojom.OneShotBackgroundSyncService_Register_ResponseParamsSpec,
      [options, service_worker_registration_id],
      false);
  }

  didResolveRegistration(registration_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec,
      null,
      [registration_info],
      false);
  }

  getRegistrations(service_worker_registration_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec,
      blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParamsSpec,
      [service_worker_registration_id],
      false);
  }

};

blink.mojom.OneShotBackgroundSyncService.getRemote = function() {
  let remote = new blink.mojom.OneShotBackgroundSyncServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.OneShotBackgroundSyncService',
    'context');
  return remote.$;
};

blink.mojom.OneShotBackgroundSyncServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OneShotBackgroundSyncService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.OneShotBackgroundSyncService_Register_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Register (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DidResolveRegistration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidResolveRegistration (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetRegistrations
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRegistrations (2)');
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
          const params = decoder.decodeStructInline(blink.mojom.OneShotBackgroundSyncService_Register_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.register');
          const result = this.impl.register(params.options, params.service_worker_registration_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.OneShotBackgroundSyncService_Register_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didResolveRegistration');
          const result = this.impl.didResolveRegistration(params.registration_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRegistrations');
          const result = this.impl.getRegistrations(params.service_worker_registration_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParamsSpec);
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

blink.mojom.OneShotBackgroundSyncServiceReceiver = blink.mojom.OneShotBackgroundSyncServiceReceiver;

blink.mojom.OneShotBackgroundSyncServicePtr = blink.mojom.OneShotBackgroundSyncServiceRemote;
blink.mojom.OneShotBackgroundSyncServiceRequest = blink.mojom.OneShotBackgroundSyncServicePendingReceiver;


// Interface: PeriodicBackgroundSyncService
mojo.internal.Struct(
    blink.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec, 'blink.mojom.PeriodicBackgroundSyncService_Register_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.SyncRegistrationOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_registration_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeriodicBackgroundSyncService_Register_ResponseParamsSpec, 'blink.mojom.PeriodicBackgroundSyncService_Register_ResponseParams', [
      mojo.internal.StructField('err', 0, 0, blink.mojom.BackgroundSyncErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.SyncRegistrationOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec, 'blink.mojom.PeriodicBackgroundSyncService_Unregister_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('tag', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParamsSpec, 'blink.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParams', [
      mojo.internal.StructField('err', 0, 0, blink.mojom.BackgroundSyncErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec, 'blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParamsSpec, 'blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParams', [
      mojo.internal.StructField('err', 0, 0, blink.mojom.BackgroundSyncErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('registrations', 8, 0, mojo.internal.Array(blink.mojom.SyncRegistrationOptionsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.PeriodicBackgroundSyncServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PeriodicBackgroundSyncServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PeriodicBackgroundSyncService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PeriodicBackgroundSyncServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.PeriodicBackgroundSyncServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  register(options, service_worker_registration_id) {
    return this.$.register(options, service_worker_registration_id);
  }
  unregister(service_worker_registration_id, tag) {
    return this.$.unregister(service_worker_registration_id, tag);
  }
  getRegistrations(service_worker_registration_id) {
    return this.$.getRegistrations(service_worker_registration_id);
  }
};

blink.mojom.PeriodicBackgroundSyncServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PeriodicBackgroundSyncService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  register(options, service_worker_registration_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec,
      blink.mojom.PeriodicBackgroundSyncService_Register_ResponseParamsSpec,
      [options, service_worker_registration_id],
      false);
  }

  unregister(service_worker_registration_id, tag) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec,
      blink.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParamsSpec,
      [service_worker_registration_id, tag],
      false);
  }

  getRegistrations(service_worker_registration_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec,
      blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParamsSpec,
      [service_worker_registration_id],
      false);
  }

};

blink.mojom.PeriodicBackgroundSyncService.getRemote = function() {
  let remote = new blink.mojom.PeriodicBackgroundSyncServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PeriodicBackgroundSyncService',
    'context');
  return remote.$;
};

blink.mojom.PeriodicBackgroundSyncServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PeriodicBackgroundSyncService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Register (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Unregister
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Unregister (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetRegistrations
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRegistrations (2)');
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
          const params = decoder.decodeStructInline(blink.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.register');
          const result = this.impl.register(params.options, params.service_worker_registration_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PeriodicBackgroundSyncService_Register_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unregister');
          const result = this.impl.unregister(params.service_worker_registration_id, params.tag);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRegistrations');
          const result = this.impl.getRegistrations(params.service_worker_registration_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParamsSpec);
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

blink.mojom.PeriodicBackgroundSyncServiceReceiver = blink.mojom.PeriodicBackgroundSyncServiceReceiver;

blink.mojom.PeriodicBackgroundSyncServicePtr = blink.mojom.PeriodicBackgroundSyncServiceRemote;
blink.mojom.PeriodicBackgroundSyncServiceRequest = blink.mojom.PeriodicBackgroundSyncServicePendingReceiver;

