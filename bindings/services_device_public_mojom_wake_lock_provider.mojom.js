// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock_provider.mojom
// Module: device.mojom

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
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.WakeLockProvider = {};
device.mojom.WakeLockProvider.$interfaceName = 'device.mojom.WakeLockProvider';
device.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec = { $: {} };
device.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec = { $: {} };
device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec = { $: {} };
device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec = { $: {} };
device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParamsSpec = { $: {} };
device.mojom.WakeLockObserver = {};
device.mojom.WakeLockObserver.$interfaceName = 'device.mojom.WakeLockObserver';
device.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec = { $: {} };

// Interface: WakeLockProvider
mojo.internal.Struct(
    device.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec, 'device.mojom.WakeLockProvider_GetWakeLockContextForID_Params', [
      mojo.internal.StructField('context', 0, 0, mojo.internal.InterfaceRequest(device.mojom.WakeLockContextRemote), null, false, 0, undefined),
      mojo.internal.StructField('context_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec, 'device.mojom.WakeLockProvider_GetWakeLockWithoutContext_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.WakeLockTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, device.mojom.WakeLockReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('wake_lock', 24, 0, mojo.internal.InterfaceRequest(device.mojom.WakeLockRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec, 'device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.WakeLockTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(device.mojom.WakeLockObserverSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec, 'device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.WakeLockTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParamsSpec, 'device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParams', [
      mojo.internal.StructField('count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.WakeLockProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.WakeLockProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.WakeLockProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.WakeLockProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.WakeLockProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.WakeLockProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WakeLockProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getWakeLockContextForID(context_id, context) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec,
      null,
      [context_id, context],
      false);
  }

  getWakeLockWithoutContext(type, reason, description, wake_lock) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec,
      null,
      [type, reason, description, wake_lock],
      false);
  }

  notifyOnWakeLockDeactivation(type, observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec,
      null,
      [type, observer],
      false);
  }

  getActiveWakeLocksForTests(type) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec,
      device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParamsSpec,
      [type],
      false);
  }

};

device.mojom.WakeLockProvider.getRemote = function() {
  let remote = new device.mojom.WakeLockProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.WakeLockProvider',
    'context');
  return remote.$;
};

device.mojom.WakeLockProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WakeLockProvider', [
      { explicit: null },
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
        
        // Try Method 0: GetWakeLockContextForID
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWakeLockContextForID (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetWakeLockWithoutContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWakeLockWithoutContext (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: NotifyOnWakeLockDeactivation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyOnWakeLockDeactivation (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetActiveWakeLocksForTests
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetActiveWakeLocksForTests (3)');
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
          const params = decoder.decodeStructInline(device.mojom.WakeLockProvider_GetWakeLockContextForID_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWakeLockContextForID');
          const result = this.impl.getWakeLockContextForID(params.context_id, params.context);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.WakeLockProvider_GetWakeLockWithoutContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWakeLockWithoutContext');
          const result = this.impl.getWakeLockWithoutContext(params.type, params.reason, params.description, params.wake_lock);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.WakeLockProvider_NotifyOnWakeLockDeactivation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOnWakeLockDeactivation');
          const result = this.impl.notifyOnWakeLockDeactivation(params.type, params.observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getActiveWakeLocksForTests');
          const result = this.impl.getActiveWakeLocksForTests(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.WakeLockProvider_GetActiveWakeLocksForTests_ResponseParamsSpec);
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

device.mojom.WakeLockProviderReceiver = device.mojom.WakeLockProviderReceiver;

device.mojom.WakeLockProviderPtr = device.mojom.WakeLockProviderRemote;
device.mojom.WakeLockProviderRequest = device.mojom.WakeLockProviderPendingReceiver;


// Interface: WakeLockObserver
mojo.internal.Struct(
    device.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec, 'device.mojom.WakeLockObserver_OnWakeLockDeactivated_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.WakeLockTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.WakeLockObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.WakeLockObserverRemote = class {
  static get $interfaceName() {
    return 'device.mojom.WakeLockObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.WakeLockObserverPendingReceiver,
      handle);
    this.$ = new device.mojom.WakeLockObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.WakeLockObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WakeLockObserver', [
      { explicit: null },
    ]);
  }

  onWakeLockDeactivated(type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec,
      null,
      [type],
      false);
  }

};

device.mojom.WakeLockObserver.getRemote = function() {
  let remote = new device.mojom.WakeLockObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.WakeLockObserver',
    'context');
  return remote.$;
};

device.mojom.WakeLockObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WakeLockObserver', [
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
        
        // Try Method 0: OnWakeLockDeactivated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWakeLockDeactivated (0)');
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
          const params = decoder.decodeStructInline(device.mojom.WakeLockObserver_OnWakeLockDeactivated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWakeLockDeactivated');
          const result = this.impl.onWakeLockDeactivated(params.type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.WakeLockObserverReceiver = device.mojom.WakeLockObserverReceiver;

device.mojom.WakeLockObserverPtr = device.mojom.WakeLockObserverRemote;
device.mojom.WakeLockObserverRequest = device.mojom.WakeLockObserverPendingReceiver;

