// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/cellular_setup/public/mojom/cellular_setup.mojom
 // Module: ash.cellular_setup.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cellular_setup = mojo.internal.bindings.ash.cellular_setup || {};
mojo.internal.bindings.ash.cellular_setup.mojom = mojo.internal.bindings.ash.cellular_setup.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cellular_setup.mojom.ActivationResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cellular_setup.mojom.CellularMetadataSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandler = {};
mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerSpec = { $ : {} };
mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandler.$interfaceName = 'ash.cellular_setup.mojom.CarrierPortalHandler';
mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegate = {};
mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegateSpec = { $ : {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegate.$interfaceName = 'ash.cellular_setup.mojom.ActivationDelegate';
mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetup = {};
mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupSpec = { $ : {} };
mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetup.$interfaceName = 'ash.cellular_setup.mojom.CellularSetup';
mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParamsSpec = { $: {} };

// Enum: CarrierPortalStatus
mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalStatus = {
  kPortalFailedToLoad: 0,
  kPortalLoadedWithoutPaidUser: 1,
  kPortalLoadedButErrorOccurredDuringPayment: 2,
  kPortalLoadedAndUserCompletedPayment: 3,
};

// Enum: ActivationResult
mojo.internal.bindings.ash.cellular_setup.mojom.ActivationResult = {
  kSuccessfullyStartedActivation: 0,
  kAlreadyActivated: 1,
  kFailedToActivate: 2,
};

// Struct: CellularMetadata
mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.CellularMetadataSpec, 'ash.cellular_setup.mojom.CellularMetadata', [
      mojo.internal.StructField('arg_payment_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_payment_post_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_carrier', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_meid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_imei', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mdn', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: CarrierPortalHandler
mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec, 'ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.CarrierPortalHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCarrierPortalStatusChange(arg_status) {
    return this.$.onCarrierPortalStatusChange(arg_status);
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.CarrierPortalHandler', [
      { explicit: null },
    ]);
  }

  onCarrierPortalStatusChange(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec,
      null,
      [arg_status],
      false);
  }

};

mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.CarrierPortalHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.CarrierPortalHandler', [
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
        
        // Try Method 0: OnCarrierPortalStatusChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCarrierPortalStatusChange (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCarrierPortalStatusChange');
          const result = this.impl.onCarrierPortalStatusChange(params.arg_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerReceiver = mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerReceiver;

mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerPtr = mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerRemote;
mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerRequest = mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerPendingReceiver;


// Interface: ActivationDelegate
mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec, 'ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_Params', [
      mojo.internal.StructField('arg_metadata', 0, 0, mojo.internal.bindings.ash.cellular_setup.mojom.CellularMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec, 'ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.cellular_setup.mojom.ActivationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.ActivationDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegatePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onActivationStarted(arg_metadata) {
    return this.$.onActivationStarted(arg_metadata);
  }
  onActivationFinished(arg_result) {
    return this.$.onActivationFinished(arg_result);
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.ActivationDelegate', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onActivationStarted(arg_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec,
      null,
      [arg_metadata],
      false);
  }

  onActivationFinished(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec,
      null,
      [arg_result],
      false);
  }

};

mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegate.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.ActivationDelegate',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.ActivationDelegate', [
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
        
        // Try Method 0: OnActivationStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnActivationStarted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnActivationFinished
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnActivationFinished (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onActivationStarted');
          const result = this.impl.onActivationStarted(params.arg_metadata);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onActivationFinished');
          const result = this.impl.onActivationFinished(params.arg_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegateReceiver = mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegateReceiver;

mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegatePtr = mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegateRemote;
mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegateRequest = mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegatePendingReceiver;


// Interface: CellularSetup
mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec, 'ash.cellular_setup.mojom.CellularSetup_StartActivation_Params', [
      mojo.internal.StructField('arg_delegate', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cellular_setup.mojom.ActivationDelegateRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParamsSpec, 'ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParams', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.cellular_setup.mojom.CarrierPortalHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.CellularSetup';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startActivation(arg_delegate) {
    return this.$.startActivation(arg_delegate);
  }
};

mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.CellularSetup', [
      { explicit: null },
    ]);
  }

  startActivation(arg_delegate) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec,
      mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParamsSpec,
      [arg_delegate],
      false);
  }

};

mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetup.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.CellularSetup',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.cellular_setup.mojom.CellularSetup', [
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
        
        // Try Method 0: StartActivation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartActivation (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startActivation');
          const result = this.impl.startActivation(params.arg_delegate);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartActivation FAILED:', e));
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

mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupReceiver = mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupReceiver;

mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupPtr = mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupRemote;
mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupRequest = mojo.internal.bindings.ash.cellular_setup.mojom.CellularSetupPendingReceiver;

