// Auto-generated MojoJS binding
 // Source: chromium_src/media/capture/video/chromeos/mojom/system_event_monitor.mojom
 // Module: cros.mojom

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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.cros = mojo.internal.bindings.cros || {};
mojo.internal.bindings.cros.mojom = mojo.internal.bindings.cros.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.cros.mojom.LidStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.ClockwiseRotationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.CrosDisplayObserver = {};
mojo.internal.bindings.cros.mojom.CrosDisplayObserver.$interfaceName = 'cros.mojom.CrosDisplayObserver';
mojo.internal.bindings.cros.mojom.CrosDisplayObserver_OnDisplayRotationChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosLidObserver = {};
mojo.internal.bindings.cros.mojom.CrosLidObserver.$interfaceName = 'cros.mojom.CrosLidObserver';
mojo.internal.bindings.cros.mojom.CrosLidObserver_OnLidStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosPowerObserver = {};
mojo.internal.bindings.cros.mojom.CrosPowerObserver.$interfaceName = 'cros.mojom.CrosPowerObserver';
mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemSuspend_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemSuspend_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemResume_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor = {};
mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor.$interfaceName = 'cros.mojom.CrosSystemEventMonitor';
mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddDisplayObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddLidObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddPowerObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_ParamsSpec = { $: {} };

// Enum: LidState
mojo.internal.bindings.cros.mojom.LidState = {
  kOpen: 0,
  kClosed: 1,
  kNotPresent: 2,
};

// Enum: DeviceType
mojo.internal.bindings.cros.mojom.DeviceType = {
  kAudio: 0,
  kVideoCapture: 1,
  kUnkown: 2,
};

// Enum: ClockwiseRotation
mojo.internal.bindings.cros.mojom.ClockwiseRotation = {
  kRotate0: 0,
  kRotate90: 1,
  kRotate180: 2,
  kRotate270: 3,
};

// Interface: CrosDisplayObserver
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosDisplayObserver_OnDisplayRotationChanged_ParamsSpec, 'cros.mojom.CrosDisplayObserver_OnDisplayRotationChanged_Params', [
      mojo.internal.StructField('arg_rotation', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.ClockwiseRotationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cros.mojom.CrosDisplayObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cros.mojom.CrosDisplayObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosDisplayObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cros.mojom.CrosDisplayObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cros.mojom.CrosDisplayObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDisplayRotationChanged(arg_rotation) {
    return this.$.onDisplayRotationChanged(arg_rotation);
  }
};

mojo.internal.bindings.cros.mojom.CrosDisplayObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosDisplayObserver', [
      { explicit: 0 },
    ]);
  }

  onDisplayRotationChanged(arg_rotation) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosDisplayObserver_OnDisplayRotationChanged_ParamsSpec,
      null,
      [arg_rotation],
      false);
  }

};

mojo.internal.bindings.cros.mojom.CrosDisplayObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.cros.mojom.CrosDisplayObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosDisplayObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.cros.mojom.CrosDisplayObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosDisplayObserver', [
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
        
        // Try Method 0: OnDisplayRotationChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosDisplayObserver_OnDisplayRotationChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDisplayRotationChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosDisplayObserver_OnDisplayRotationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDisplayRotationChanged');
          const result = this.impl.onDisplayRotationChanged(params.arg_rotation);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cros.mojom.CrosDisplayObserverReceiver = mojo.internal.bindings.cros.mojom.CrosDisplayObserverReceiver;

mojo.internal.bindings.cros.mojom.CrosDisplayObserverPtr = mojo.internal.bindings.cros.mojom.CrosDisplayObserverRemote;
mojo.internal.bindings.cros.mojom.CrosDisplayObserverRequest = mojo.internal.bindings.cros.mojom.CrosDisplayObserverPendingReceiver;


// Interface: CrosLidObserver
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosLidObserver_OnLidStateChanged_ParamsSpec, 'cros.mojom.CrosLidObserver_OnLidStateChanged_Params', [
      mojo.internal.StructField('arg_new_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.LidStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cros.mojom.CrosLidObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cros.mojom.CrosLidObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosLidObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cros.mojom.CrosLidObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cros.mojom.CrosLidObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onLidStateChanged(arg_new_state) {
    return this.$.onLidStateChanged(arg_new_state);
  }
};

mojo.internal.bindings.cros.mojom.CrosLidObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosLidObserver', [
      { explicit: 0 },
    ]);
  }

  onLidStateChanged(arg_new_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosLidObserver_OnLidStateChanged_ParamsSpec,
      null,
      [arg_new_state],
      false);
  }

};

mojo.internal.bindings.cros.mojom.CrosLidObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.cros.mojom.CrosLidObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosLidObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.cros.mojom.CrosLidObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosLidObserver', [
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
        
        // Try Method 0: OnLidStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosLidObserver_OnLidStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLidStateChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosLidObserver_OnLidStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLidStateChanged');
          const result = this.impl.onLidStateChanged(params.arg_new_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cros.mojom.CrosLidObserverReceiver = mojo.internal.bindings.cros.mojom.CrosLidObserverReceiver;

mojo.internal.bindings.cros.mojom.CrosLidObserverPtr = mojo.internal.bindings.cros.mojom.CrosLidObserverRemote;
mojo.internal.bindings.cros.mojom.CrosLidObserverRequest = mojo.internal.bindings.cros.mojom.CrosLidObserverPendingReceiver;


// Interface: CrosPowerObserver
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemSuspend_ParamsSpec, 'cros.mojom.CrosPowerObserver_OnSystemSuspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemSuspend_ResponseParamsSpec, 'cros.mojom.CrosPowerObserver_OnSystemSuspend_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemResume_ParamsSpec, 'cros.mojom.CrosPowerObserver_OnSystemResume_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.cros.mojom.CrosPowerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cros.mojom.CrosPowerObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosPowerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cros.mojom.CrosPowerObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cros.mojom.CrosPowerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSystemSuspend() {
    return this.$.onSystemSuspend();
  }
  onSystemResume() {
    return this.$.onSystemResume();
  }
};

mojo.internal.bindings.cros.mojom.CrosPowerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosPowerObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onSystemSuspend() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemSuspend_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemSuspend_ResponseParamsSpec,
      [],
      false);
  }

  onSystemResume() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemResume_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.cros.mojom.CrosPowerObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.cros.mojom.CrosPowerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosPowerObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.cros.mojom.CrosPowerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosPowerObserver', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: OnSystemSuspend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemSuspend_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSystemSuspend (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSystemResume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemResume_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSystemResume (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemSuspend_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSystemSuspend');
          const result = this.impl.onSystemSuspend();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemSuspend_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnSystemSuspend FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosPowerObserver_OnSystemResume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSystemResume');
          const result = this.impl.onSystemResume();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cros.mojom.CrosPowerObserverReceiver = mojo.internal.bindings.cros.mojom.CrosPowerObserverReceiver;

mojo.internal.bindings.cros.mojom.CrosPowerObserverPtr = mojo.internal.bindings.cros.mojom.CrosPowerObserverRemote;
mojo.internal.bindings.cros.mojom.CrosPowerObserverRequest = mojo.internal.bindings.cros.mojom.CrosPowerObserverPendingReceiver;


// Interface: CrosSystemEventMonitor
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddDisplayObserver_ParamsSpec, 'cros.mojom.CrosSystemEventMonitor_AddDisplayObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cros.mojom.CrosDisplayObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddLidObserver_ParamsSpec, 'cros.mojom.CrosSystemEventMonitor_AddLidObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cros.mojom.CrosLidObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddPowerObserver_ParamsSpec, 'cros.mojom.CrosSystemEventMonitor_AddPowerObserver_Params', [
      mojo.internal.StructField('arg_client_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cros.mojom.CrosPowerObserverSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_ParamsSpec, 'cros.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.DeviceTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cros.mojom.CrosSystemEventMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cros.mojom.CrosSystemEventMonitorRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosSystemEventMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cros.mojom.CrosSystemEventMonitorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cros.mojom.CrosSystemEventMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addDisplayObserver(arg_observer) {
    return this.$.addDisplayObserver(arg_observer);
  }
  addLidObserver(arg_observer) {
    return this.$.addLidObserver(arg_observer);
  }
  addPowerObserver(arg_client_name, arg_observer) {
    return this.$.addPowerObserver(arg_client_name, arg_observer);
  }
  notifyDeviceChanged(arg_type) {
    return this.$.notifyDeviceChanged(arg_type);
  }
};

mojo.internal.bindings.cros.mojom.CrosSystemEventMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosSystemEventMonitor', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  addDisplayObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddDisplayObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  addLidObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddLidObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  addPowerObserver(arg_client_name, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddPowerObserver_ParamsSpec,
      null,
      [arg_client_name, arg_observer],
      false);
  }

  notifyDeviceChanged(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_ParamsSpec,
      null,
      [arg_type],
      false);
  }

};

mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor.getRemote = function() {
  let remote = new mojo.internal.bindings.cros.mojom.CrosSystemEventMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosSystemEventMonitor',
    'context');
  return remote.$;
};

mojo.internal.bindings.cros.mojom.CrosSystemEventMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosSystemEventMonitor', [
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
        
        // Try Method 0: AddDisplayObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddDisplayObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddDisplayObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddLidObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddLidObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddLidObserver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AddPowerObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddPowerObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPowerObserver (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: NotifyDeviceChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyDeviceChanged (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddDisplayObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addDisplayObserver');
          const result = this.impl.addDisplayObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddLidObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addLidObserver');
          const result = this.impl.addLidObserver(params.arg_observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_AddPowerObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addPowerObserver');
          const result = this.impl.addPowerObserver(params.arg_client_name, params.arg_observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyDeviceChanged');
          const result = this.impl.notifyDeviceChanged(params.arg_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cros.mojom.CrosSystemEventMonitorReceiver = mojo.internal.bindings.cros.mojom.CrosSystemEventMonitorReceiver;

mojo.internal.bindings.cros.mojom.CrosSystemEventMonitorPtr = mojo.internal.bindings.cros.mojom.CrosSystemEventMonitorRemote;
mojo.internal.bindings.cros.mojom.CrosSystemEventMonitorRequest = mojo.internal.bindings.cros.mojom.CrosSystemEventMonitorPendingReceiver;

