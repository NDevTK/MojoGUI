// Auto-generated MojoJS binding
 // Source: chromium_src/media/mojo/mojom/audio_stream_factory.mojom
 // Module: media.mojom

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
 

 mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.media.mojom = mojo.internal.bindings.media.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};

mojo.internal.bindings.media.mojom.LocalMuter = {};
mojo.internal.bindings.media.mojom.LocalMuter.$interfaceName = 'media.mojom.LocalMuter';
mojo.internal.bindings.media.mojom.AudioStreamFactory = {};
mojo.internal.bindings.media.mojom.AudioStreamFactory.$interfaceName = 'media.mojom.AudioStreamFactory';
mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioStreamFactory_BindMuter_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec = { $: {} };

// Interface: LocalMuter
mojo.internal.bindings.media.mojom.LocalMuterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.LocalMuterRemote = class {
  static get $interfaceName() {
    return 'media.mojom.LocalMuter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.LocalMuterPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.LocalMuterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo.internal.bindings.media.mojom.LocalMuterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalMuter', [
    ]);
  }

};

mojo.internal.bindings.media.mojom.LocalMuter.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.LocalMuterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.LocalMuter',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.LocalMuterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LocalMuter', [
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.LocalMuterReceiver = mojo.internal.bindings.media.mojom.LocalMuterReceiver;

mojo.internal.bindings.media.mojom.LocalMuterPtr = mojo.internal.bindings.media.mojom.LocalMuterRemote;
mojo.internal.bindings.media.mojom.LocalMuterRequest = mojo.internal.bindings.media.mojom.LocalMuterPendingReceiver;


// Interface: AudioStreamFactory
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateInputStream_Params', [
      mojo.internal.StructField('arg_stream', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media.mojom.AudioInputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.AudioInputStreamClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.AudioInputStreamObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_log', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.AudioLogRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_device_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 40, 0, mojo.internal.bindings.media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_id', 48, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_processing_config', 56, 0, mojo.internal.bindings.media.mojom.AudioProcessingConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_shared_memory_count', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enable_agc', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateInputStream_ResponseParams', [
      mojo.internal.StructField('arg_data_pipe', 0, 0, mojo.internal.bindings.media.mojom.ReadWriteAudioDataPipeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_stream_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_initially_muted', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec, 'media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_Params', [
      mojo.internal.StructField('arg_input_stream_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_device_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateOutputStream_Params', [
      mojo.internal.StructField('arg_stream', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media.mojom.AudioOutputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.media.mojom.AudioOutputStreamObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_log', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.AudioLogRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_device_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 32, 0, mojo.internal.bindings.media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_id', 40, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParams', [
      mojo.internal.StructField('arg_data_pipe', 0, 0, mojo.internal.bindings.media.mojom.ReadWriteAudioDataPipeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_Params', [
      mojo.internal.StructField('arg_stream', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media.mojom.AudioOutputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_device_switch_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media.mojom.DeviceSwitchInterfaceRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 16, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.media.mojom.AudioOutputStreamObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_log', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.AudioLogRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_device_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 40, 0, mojo.internal.bindings.media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_id', 48, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParams', [
      mojo.internal.StructField('arg_data_pipe', 0, 0, mojo.internal.bindings.media.mojom.ReadWriteAudioDataPipeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioStreamFactory_BindMuter_ParamsSpec, 'media.mojom.AudioStreamFactory_BindMuter_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.media.mojom.LocalMuterSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_group_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateLoopbackStream_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media.mojom.AudioInputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.AudioInputStreamClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.AudioInputStreamObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 24, 0, mojo.internal.bindings.media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_id', 32, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_shared_memory_count', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParams', [
      mojo.internal.StructField('arg_data_pipe', 0, 0, mojo.internal.bindings.media.mojom.ReadWriteAudioDataPipeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.AudioStreamFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.AudioStreamFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioStreamFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.AudioStreamFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.AudioStreamFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createInputStream(arg_stream, arg_client, arg_observer, arg_log, arg_device_id, arg_params, arg_group_id, arg_shared_memory_count, arg_enable_agc, arg_processing_config) {
    return this.$.createInputStream(arg_stream, arg_client, arg_observer, arg_log, arg_device_id, arg_params, arg_group_id, arg_shared_memory_count, arg_enable_agc, arg_processing_config);
  }
  associateInputAndOutputForAec(arg_input_stream_id, arg_output_device_id) {
    return this.$.associateInputAndOutputForAec(arg_input_stream_id, arg_output_device_id);
  }
  createOutputStream(arg_stream, arg_observer, arg_log, arg_device_id, arg_params, arg_group_id) {
    return this.$.createOutputStream(arg_stream, arg_observer, arg_log, arg_device_id, arg_params, arg_group_id);
  }
  createSwitchableOutputStream(arg_stream, arg_device_switch_receiver, arg_observer, arg_log, arg_device_id, arg_params, arg_group_id) {
    return this.$.createSwitchableOutputStream(arg_stream, arg_device_switch_receiver, arg_observer, arg_log, arg_device_id, arg_params, arg_group_id);
  }
  bindMuter(arg_receiver, arg_group_id) {
    return this.$.bindMuter(arg_receiver, arg_group_id);
  }
  createLoopbackStream(arg_receiver, arg_client, arg_observer, arg_params, arg_shared_memory_count, arg_group_id) {
    return this.$.createLoopbackStream(arg_receiver, arg_client, arg_observer, arg_params, arg_shared_memory_count, arg_group_id);
  }
};

mojo.internal.bindings.media.mojom.AudioStreamFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioStreamFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createInputStream(arg_stream, arg_client, arg_observer, arg_log, arg_device_id, arg_params, arg_group_id, arg_shared_memory_count, arg_enable_agc, arg_processing_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec,
      mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec,
      [arg_stream, arg_client, arg_observer, arg_log, arg_device_id, arg_params, arg_group_id, arg_shared_memory_count, arg_enable_agc, arg_processing_config],
      false);
  }

  associateInputAndOutputForAec(arg_input_stream_id, arg_output_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec,
      null,
      [arg_input_stream_id, arg_output_device_id],
      false);
  }

  createOutputStream(arg_stream, arg_observer, arg_log, arg_device_id, arg_params, arg_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec,
      mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec,
      [arg_stream, arg_observer, arg_log, arg_device_id, arg_params, arg_group_id],
      false);
  }

  createSwitchableOutputStream(arg_stream, arg_device_switch_receiver, arg_observer, arg_log, arg_device_id, arg_params, arg_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec,
      mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec,
      [arg_stream, arg_device_switch_receiver, arg_observer, arg_log, arg_device_id, arg_params, arg_group_id],
      false);
  }

  bindMuter(arg_receiver, arg_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media.mojom.AudioStreamFactory_BindMuter_ParamsSpec,
      null,
      [arg_receiver, arg_group_id],
      false);
  }

  createLoopbackStream(arg_receiver, arg_client, arg_observer, arg_params, arg_shared_memory_count, arg_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec,
      mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec,
      [arg_receiver, arg_client, arg_observer, arg_params, arg_shared_memory_count, arg_group_id],
      false);
  }

};

mojo.internal.bindings.media.mojom.AudioStreamFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.AudioStreamFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioStreamFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.AudioStreamFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioStreamFactory', [
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: CreateInputStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateInputStream (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AssociateInputAndOutputForAec
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AssociateInputAndOutputForAec (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateOutputStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateOutputStream (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateSwitchableOutputStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSwitchableOutputStream (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: BindMuter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioStreamFactory_BindMuter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindMuter (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CreateLoopbackStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateLoopbackStream (5)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createInputStream');
          const result = this.impl.createInputStream(params.arg_stream, params.arg_client, params.arg_observer, params.arg_log, params.arg_device_id, params.arg_params, params.arg_group_id, params.arg_shared_memory_count, params.arg_enable_agc, params.arg_processing_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateInputStream FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.associateInputAndOutputForAec');
          const result = this.impl.associateInputAndOutputForAec(params.arg_input_stream_id, params.arg_output_device_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createOutputStream');
          const result = this.impl.createOutputStream(params.arg_stream, params.arg_observer, params.arg_log, params.arg_device_id, params.arg_params, params.arg_group_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateOutputStream FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSwitchableOutputStream');
          const result = this.impl.createSwitchableOutputStream(params.arg_stream, params.arg_device_switch_receiver, params.arg_observer, params.arg_log, params.arg_device_id, params.arg_params, params.arg_group_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateSwitchableOutputStream FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioStreamFactory_BindMuter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindMuter');
          const result = this.impl.bindMuter(params.arg_receiver, params.arg_group_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createLoopbackStream');
          const result = this.impl.createLoopbackStream(params.arg_receiver, params.arg_client, params.arg_observer, params.arg_params, params.arg_shared_memory_count, params.arg_group_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateLoopbackStream FAILED:', e));
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

mojo.internal.bindings.media.mojom.AudioStreamFactoryReceiver = mojo.internal.bindings.media.mojom.AudioStreamFactoryReceiver;

mojo.internal.bindings.media.mojom.AudioStreamFactoryPtr = mojo.internal.bindings.media.mojom.AudioStreamFactoryRemote;
mojo.internal.bindings.media.mojom.AudioStreamFactoryRequest = mojo.internal.bindings.media.mojom.AudioStreamFactoryPendingReceiver;

