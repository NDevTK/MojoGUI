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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

media.mojom.LocalMuter = {};
media.mojom.LocalMuter.$interfaceName = 'media.mojom.LocalMuter';
media.mojom.AudioStreamFactory = {};
media.mojom.AudioStreamFactory.$interfaceName = 'media.mojom.AudioStreamFactory';
media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_BindMuter_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec = { $: {} };
media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec = { $: {} };

// Interface: LocalMuter
media.mojom.LocalMuterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.LocalMuterRemote = class {
  static get $interfaceName() {
    return 'media.mojom.LocalMuter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.LocalMuterPendingReceiver,
      handle);
    this.$ = new media.mojom.LocalMuterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.LocalMuterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalMuter', [
    ]);
  }

};

media.mojom.LocalMuter.getRemote = function() {
  let remote = new media.mojom.LocalMuterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.LocalMuter',
    'context');
  return remote.$;
};

media.mojom.LocalMuterReceiver = class {
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

media.mojom.LocalMuterReceiver = media.mojom.LocalMuterReceiver;

media.mojom.LocalMuterPtr = media.mojom.LocalMuterRemote;
media.mojom.LocalMuterRequest = media.mojom.LocalMuterPendingReceiver;


// Interface: AudioStreamFactory
mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateInputStream_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioInputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('log', 24, 0, mojo.internal.InterfaceProxy(media.mojom.AudioLogRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('params', 40, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 48, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('processing_config', 56, 0, media.mojom.AudioProcessingConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('shared_memory_count', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enable_agc', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateInputStream_ResponseParams', [
      mojo.internal.StructField('data_pipe', 0, 0, media.mojom.ReadWriteAudioDataPipeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('stream_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('initially_muted', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec, 'media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_Params', [
      mojo.internal.StructField('input_stream_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_device_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateOutputStream_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioOutputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, pending_associated_remote<media.mojom.AudioOutputStreamObserver>Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('log', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioLogRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('params', 32, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 40, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParams', [
      mojo.internal.StructField('data_pipe', 0, 0, media.mojom.ReadWriteAudioDataPipeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioOutputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('device_switch_receiver', 8, 0, mojo.internal.InterfaceRequest(media.mojom.DeviceSwitchInterfaceRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, pending_associated_remote<media.mojom.AudioOutputStreamObserver>Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('log', 24, 0, mojo.internal.InterfaceProxy(media.mojom.AudioLogRemote), null, true, 0, undefined),
      mojo.internal.StructField('device_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('params', 40, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 48, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParams', [
      mojo.internal.StructField('data_pipe', 0, 0, media.mojom.ReadWriteAudioDataPipeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_BindMuter_ParamsSpec, 'media.mojom.AudioStreamFactory_BindMuter_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec, 'media.mojom.AudioStreamFactory_CreateLoopbackStream_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioInputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('params', 24, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 32, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_memory_count', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec, 'media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParams', [
      mojo.internal.StructField('data_pipe', 0, 0, media.mojom.ReadWriteAudioDataPipeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioStreamFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioStreamFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioStreamFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioStreamFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioStreamFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioStreamFactoryRemoteCallHandler = class {
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

  createInputStream(stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec,
      [stream, client, observer, log, device_id, params, group_id, shared_memory_count, enable_agc, processing_config],
      false);
  }

  associateInputAndOutputForAec(input_stream_id, output_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec,
      null,
      [input_stream_id, output_device_id],
      false);
  }

  createOutputStream(stream, observer, log, device_id, params, group_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec,
      [stream, observer, log, device_id, params, group_id],
      false);
  }

  createSwitchableOutputStream(stream, device_switch_receiver, observer, log, device_id, params, group_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec,
      [stream, device_switch_receiver, observer, log, device_id, params, group_id],
      false);
  }

  bindMuter(receiver, group_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.AudioStreamFactory_BindMuter_ParamsSpec,
      null,
      [receiver, group_id],
      false);
  }

  createLoopbackStream(receiver, client, observer, params, shared_memory_count, group_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec,
      media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec,
      [receiver, client, observer, params, shared_memory_count, group_id],
      false);
  }

};

media.mojom.AudioStreamFactory.getRemote = function() {
  let remote = new media.mojom.AudioStreamFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioStreamFactory',
    'context');
  return remote.$;
};

media.mojom.AudioStreamFactoryReceiver = class {
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
             decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.AudioStreamFactory_BindMuter_ParamsSpec);
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
             decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec);
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
          const params = decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateInputStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createInputStream');
          const result = this.impl.createInputStream(params.stream, params.client, params.observer, params.log, params.device_id, params.params, params.group_id, params.shared_memory_count, params.enable_agc, params.processing_config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioStreamFactory_CreateInputStream_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioStreamFactory_AssociateInputAndOutputForAec_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.associateInputAndOutputForAec');
          const result = this.impl.associateInputAndOutputForAec(params.input_stream_id, params.output_device_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateOutputStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createOutputStream');
          const result = this.impl.createOutputStream(params.stream, params.observer, params.log, params.device_id, params.params, params.group_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioStreamFactory_CreateOutputStream_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSwitchableOutputStream');
          const result = this.impl.createSwitchableOutputStream(params.stream, params.device_switch_receiver, params.observer, params.log, params.device_id, params.params, params.group_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioStreamFactory_CreateSwitchableOutputStream_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioStreamFactory_BindMuter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindMuter');
          const result = this.impl.bindMuter(params.receiver, params.group_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioStreamFactory_CreateLoopbackStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createLoopbackStream');
          const result = this.impl.createLoopbackStream(params.receiver, params.client, params.observer, params.params, params.shared_memory_count, params.group_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioStreamFactory_CreateLoopbackStream_ResponseParamsSpec);
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

media.mojom.AudioStreamFactoryReceiver = media.mojom.AudioStreamFactoryReceiver;

media.mojom.AudioStreamFactoryPtr = media.mojom.AudioStreamFactoryRemote;
media.mojom.AudioStreamFactoryRequest = media.mojom.AudioStreamFactoryPendingReceiver;

