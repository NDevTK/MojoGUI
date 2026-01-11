// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/cdm_factory_daemon.mojom
 // Module: chromeos.cdm.mojom

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
 

 mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.cdm = mojo.internal.bindings.chromeos.cdm || {};
mojo.internal.bindings.chromeos.cdm.mojom = mojo.internal.bindings.chromeos.cdm.mojom || {};
mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};

mojo.internal.bindings.chromeos.cdm.mojom.CreateCdmStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory = {};
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory.$interfaceName = 'chromeos.cdm.mojom.CdmFactory';
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdm_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdm_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon = {};
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon.$interfaceName = 'chromeos.cdm.mojom.CdmFactoryDaemon';
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParamsSpec = { $: {} };

// Enum: CreateCdmStatus
mojo.internal.bindings.chromeos.cdm.mojom.CreateCdmStatus = {
  kSuccess: 0,
  kNoMoreInstances: 1,
  kInsufficientGpuResources: 2,
};

// Interface: CdmFactory
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_ParamsSpec, 'chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_cdm', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_protection', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.cdm.mojom.OutputProtectionRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec, 'chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_protection', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.cdm.mojom.OutputProtectionRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_host', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_cdm', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdm_ParamsSpec, 'chromeos.cdm.mojom.CdmFactory_CreateCdm_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_protection', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.cdm.mojom.OutputProtectionRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_host', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_cdm', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdm_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactory_CreateCdm_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.chromeos.cdm.mojom.CreateCdmStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.CdmFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  dEPRECATED_1(arg_client, arg_storage, arg_cdm, arg_output_protection) {
    return this.$.dEPRECATED_1(arg_client, arg_storage, arg_cdm, arg_output_protection);
  }
  createCdmDeprecated(arg_client, arg_storage, arg_output_protection, arg_host, arg_cdm) {
    return this.$.createCdmDeprecated(arg_client, arg_storage, arg_output_protection, arg_host, arg_cdm);
  }
  createCdm(arg_client, arg_storage, arg_output_protection, arg_host, arg_cdm) {
    return this.$.createCdm(arg_client, arg_storage, arg_output_protection, arg_host, arg_cdm);
  }
};

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CdmFactory', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  dEPRECATED_1(arg_client, arg_storage, arg_cdm, arg_output_protection) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_ParamsSpec,
      null,
      [arg_client, arg_storage, arg_cdm, arg_output_protection],
      false);
  }

  createCdmDeprecated(arg_client, arg_storage, arg_output_protection, arg_host, arg_cdm) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec,
      null,
      [arg_client, arg_storage, arg_output_protection, arg_host, arg_cdm],
      false);
  }

  createCdm(arg_client, arg_storage, arg_output_protection, arg_host, arg_cdm) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdm_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdm_ResponseParamsSpec,
      [arg_client, arg_storage, arg_output_protection, arg_host, arg_cdm],
      false);
  }

};

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.CdmFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CdmFactory', [
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
        
        // Try Method 0: DEPRECATED_1
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_1 (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateCdmDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCdmDeprecated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateCdm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdm_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCdm (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_1');
          const result = this.impl.dEPRECATED_1(params.arg_client, params.arg_storage, params.arg_cdm, params.arg_output_protection);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCdmDeprecated');
          const result = this.impl.createCdmDeprecated(params.arg_client, params.arg_storage, params.arg_output_protection, params.arg_host, params.arg_cdm);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdm_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCdm');
          const result = this.impl.createCdm(params.arg_client, params.arg_storage, params.arg_output_protection, params.arg_host, params.arg_cdm);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.CdmFactory_CreateCdm_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateCdm FAILED:', e));
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

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryReceiver = mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryReceiver;

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryPtr = mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryRemote;
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryRequest = mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryPendingReceiver;


// Interface: CdmFactoryDaemon
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_Params', [
      mojo.internal.StructField('arg_key_system', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ResponseParams', [
      mojo.internal.StructField('arg_factory', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactorySpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_Params', [
      mojo.internal.StructField('arg_oemcryptor', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.arc.mojom.OemCryptoServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_protected_buffer_manager', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ProtectedBufferManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_output_protection', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.cdm.mojom.OutputProtectionRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParams', [
      mojo.internal.StructField('arg_config_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParams', [
      mojo.internal.StructField('arg_hdcp_key_base64', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_Params', [
      mojo.internal.StructField('arg_key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_hw_identifier', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.chromeos.cdm.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_Params', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParams', [
      mojo.internal.StructField('arg_fd', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_Params', [
      mojo.internal.StructField('arg_secure_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_stream_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParams', [
      mojo.internal.StructField('arg_slice_header', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemonPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemonRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.CdmFactoryDaemon';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemonPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemonRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createFactory(arg_key_system) {
    return this.$.createFactory(arg_key_system);
  }
  removedMethod1() {
    return this.$.removedMethod1();
  }
  connectOemCrypto(arg_oemcryptor, arg_protected_buffer_manager, arg_output_protection) {
    return this.$.connectOemCrypto(arg_oemcryptor, arg_protected_buffer_manager, arg_output_protection);
  }
  removedMethod3() {
    return this.$.removedMethod3();
  }
  getHwConfigData() {
    return this.$.getHwConfigData();
  }
  removedMethod5() {
    return this.$.removedMethod5();
  }
  getHdcp14Key() {
    return this.$.getHdcp14Key();
  }
  getAndroidHwKeyData(arg_key_id, arg_hw_identifier) {
    return this.$.getAndroidHwKeyData(arg_key_id, arg_hw_identifier);
  }
  allocateSecureBuffer(arg_size) {
    return this.$.allocateSecureBuffer(arg_size);
  }
  parseEncryptedSliceHeader(arg_secure_handle, arg_offset, arg_stream_data) {
    return this.$.parseEncryptedSliceHeader(arg_secure_handle, arg_offset, arg_stream_data);
  }
};

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemonRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CdmFactoryDaemon', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
    ]);
  }

  createFactory(arg_key_system) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ResponseParamsSpec,
      [arg_key_system],
      false);
  }

  removedMethod1() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec,
      null,
      [],
      false);
  }

  connectOemCrypto(arg_oemcryptor, arg_protected_buffer_manager, arg_output_protection) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec,
      null,
      [arg_oemcryptor, arg_protected_buffer_manager, arg_output_protection],
      false);
  }

  removedMethod3() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec,
      null,
      [],
      false);
  }

  getHwConfigData() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParamsSpec,
      [],
      false);
  }

  removedMethod5() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec,
      null,
      [],
      false);
  }

  getHdcp14Key() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParamsSpec,
      [],
      false);
  }

  getAndroidHwKeyData(arg_key_id, arg_hw_identifier) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParamsSpec,
      [arg_key_id, arg_hw_identifier],
      false);
  }

  allocateSecureBuffer(arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParamsSpec,
      [arg_size],
      false);
  }

  parseEncryptedSliceHeader(arg_secure_handle, arg_offset, arg_stream_data) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec,
      mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParamsSpec,
      [arg_secure_handle, arg_offset, arg_stream_data],
      false);
  }

};

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemonRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.CdmFactoryDaemon',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemonReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CdmFactoryDaemon', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
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
        
        // Try Method 0: CreateFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateFactory (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RemovedMethod1
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemovedMethod1 (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ConnectOemCrypto
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectOemCrypto (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RemovedMethod3
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemovedMethod3 (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetHwConfigData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHwConfigData (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RemovedMethod5
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemovedMethod5 (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetHdcp14Key
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHdcp14Key (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetAndroidHwKeyData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAndroidHwKeyData (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: AllocateSecureBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllocateSecureBuffer (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ParseEncryptedSliceHeader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseEncryptedSliceHeader (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createFactory');
          const result = this.impl.createFactory(params.arg_key_system);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateFactory FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removedMethod1');
          const result = this.impl.removedMethod1();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectOemCrypto');
          const result = this.impl.connectOemCrypto(params.arg_oemcryptor, params.arg_protected_buffer_manager, params.arg_output_protection);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removedMethod3');
          const result = this.impl.removedMethod3();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHwConfigData');
          const result = this.impl.getHwConfigData();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHwConfigData FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removedMethod5');
          const result = this.impl.removedMethod5();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHdcp14Key');
          const result = this.impl.getHdcp14Key();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHdcp14Key FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAndroidHwKeyData');
          const result = this.impl.getAndroidHwKeyData(params.arg_key_id, params.arg_hw_identifier);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAndroidHwKeyData FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.allocateSecureBuffer');
          const result = this.impl.allocateSecureBuffer(params.arg_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AllocateSecureBuffer FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.parseEncryptedSliceHeader');
          const result = this.impl.parseEncryptedSliceHeader(params.arg_secure_handle, params.arg_offset, params.arg_stream_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ParseEncryptedSliceHeader FAILED:', e));
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

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemonReceiver = mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemonReceiver;

mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemonPtr = mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemonRemote;
mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemonRequest = mojo.internal.bindings.chromeos.cdm.mojom.CdmFactoryDaemonPendingReceiver;

