// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/privacy_items.mojom
 // Module: arc.mojom

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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};

mojo.internal.bindings.arc.mojom.PrivacyApplicationSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PrivacyItemSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PrivacyItemsHost = {};
mojo.internal.bindings.arc.mojom.PrivacyItemsHost.$interfaceName = 'arc.mojom.PrivacyItemsHost';
mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PrivacyItemsInstance = {};
mojo.internal.bindings.arc.mojom.PrivacyItemsInstance.$interfaceName = 'arc.mojom.PrivacyItemsInstance';
mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_ParamsSpec = { $: {} };

// Struct: PrivacyApplication
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PrivacyApplicationSpec, 'arc.mojom.PrivacyApplication', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_uid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrivacyItem
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PrivacyItemSpec, 'arc.mojom.PrivacyItem', [
      mojo.internal.StructField('arg_permission_group', 0, 0, mojo.internal.bindings.arc.mojom.AppPermissionGroupSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_privacy_application', 8, 0, mojo.internal.bindings.arc.mojom.PrivacyApplicationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PrivacyItemsHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_ParamsSpec, 'arc.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_Params', [
      mojo.internal.StructField('arg_privacy_items', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.PrivacyItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_ParamsSpec, 'arc.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_Params', [
      mojo.internal.StructField('arg_flag', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_ParamsSpec, 'arc.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_Params', [
      mojo.internal.StructField('arg_flag', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.PrivacyItemsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.PrivacyItemsHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrivacyItemsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.PrivacyItemsHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.PrivacyItemsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPrivacyItemsChanged(arg_privacy_items) {
    return this.$.onPrivacyItemsChanged(arg_privacy_items);
  }
  onMicCameraIndicatorRequirementChanged(arg_flag) {
    return this.$.onMicCameraIndicatorRequirementChanged(arg_flag);
  }
  onLocationIndicatorRequirementChanged(arg_flag) {
    return this.$.onLocationIndicatorRequirementChanged(arg_flag);
  }
};

mojo.internal.bindings.arc.mojom.PrivacyItemsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrivacyItemsHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  onPrivacyItemsChanged(arg_privacy_items) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_ParamsSpec,
      null,
      [arg_privacy_items],
      false);
  }

  onMicCameraIndicatorRequirementChanged(arg_flag) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_ParamsSpec,
      null,
      [arg_flag],
      false);
  }

  onLocationIndicatorRequirementChanged(arg_flag) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_ParamsSpec,
      null,
      [arg_flag],
      false);
  }

};

mojo.internal.bindings.arc.mojom.PrivacyItemsHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.PrivacyItemsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrivacyItemsHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.PrivacyItemsHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrivacyItemsHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
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
        
        // Try Method 0: OnPrivacyItemsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrivacyItemsChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnMicCameraIndicatorRequirementChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMicCameraIndicatorRequirementChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnLocationIndicatorRequirementChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLocationIndicatorRequirementChanged (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrivacyItemsChanged');
          const result = this.impl.onPrivacyItemsChanged(params.arg_privacy_items);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMicCameraIndicatorRequirementChanged');
          const result = this.impl.onMicCameraIndicatorRequirementChanged(params.arg_flag);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLocationIndicatorRequirementChanged');
          const result = this.impl.onLocationIndicatorRequirementChanged(params.arg_flag);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.PrivacyItemsHostReceiver = mojo.internal.bindings.arc.mojom.PrivacyItemsHostReceiver;

mojo.internal.bindings.arc.mojom.PrivacyItemsHostPtr = mojo.internal.bindings.arc.mojom.PrivacyItemsHostRemote;
mojo.internal.bindings.arc.mojom.PrivacyItemsHostRequest = mojo.internal.bindings.arc.mojom.PrivacyItemsHostPendingReceiver;


// Interface: PrivacyItemsInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_Init_ParamsSpec, 'arc.mojom.PrivacyItemsInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.PrivacyItemsHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_Init_ResponseParamsSpec, 'arc.mojom.PrivacyItemsInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_ParamsSpec, 'arc.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_Params', [
      mojo.internal.StructField('arg_bounds', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.RectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_displayId', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.arc.mojom.PrivacyItemsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrivacyItemsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.PrivacyItemsInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
  onStaticPrivacyIndicatorBoundsChanged(arg_displayId, arg_bounds) {
    return this.$.onStaticPrivacyIndicatorBoundsChanged(arg_displayId, arg_bounds);
  }
};

mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrivacyItemsInstance', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

  onStaticPrivacyIndicatorBoundsChanged(arg_displayId, arg_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_ParamsSpec,
      null,
      [arg_displayId, arg_bounds],
      false);
  }

};

mojo.internal.bindings.arc.mojom.PrivacyItemsInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrivacyItemsInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrivacyItemsInstance', [
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnStaticPrivacyIndicatorBoundsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStaticPrivacyIndicatorBoundsChanged (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStaticPrivacyIndicatorBoundsChanged');
          const result = this.impl.onStaticPrivacyIndicatorBoundsChanged(params.arg_displayId, params.arg_bounds);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceReceiver = mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceReceiver;

mojo.internal.bindings.arc.mojom.PrivacyItemsInstancePtr = mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceRemote;
mojo.internal.bindings.arc.mojom.PrivacyItemsInstanceRequest = mojo.internal.bindings.arc.mojom.PrivacyItemsInstancePendingReceiver;

