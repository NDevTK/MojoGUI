// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/resource_provider.mojom
// Module: mirroring.mojom

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
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};
var media = media || {};
var network = network || {};
var sandbox = sandbox || {};
var viz = viz || {};

mirroring.mojom.AudioStreamCreatorClient = {};
mirroring.mojom.AudioStreamCreatorClient.$interfaceName = 'mirroring.mojom.AudioStreamCreatorClient';
mirroring.mojom.AudioStreamCreatorClient_StreamCreated_ParamsSpec = { $: {} };
mirroring.mojom.ResourceProvider = {};
mirroring.mojom.ResourceProvider.$interfaceName = 'mirroring.mojom.ResourceProvider';
mirroring.mojom.ResourceProvider_BindGpu_ParamsSpec = { $: {} };
mirroring.mojom.ResourceProvider_GetVideoCaptureHost_ParamsSpec = { $: {} };
mirroring.mojom.ResourceProvider_GetVideoEncoderMetricsProvider_ParamsSpec = { $: {} };
mirroring.mojom.ResourceProvider_GetNetworkContext_ParamsSpec = { $: {} };
mirroring.mojom.ResourceProvider_CreateAudioStream_ParamsSpec = { $: {} };
mirroring.mojom.ResourceProvider_ConnectToRemotingSource_ParamsSpec = { $: {} };

// Interface: AudioStreamCreatorClient
mojo.internal.Struct(
    mirroring.mojom.AudioStreamCreatorClient_StreamCreated_ParamsSpec, 'mirroring.mojom.AudioStreamCreatorClient_StreamCreated_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceProxy(media.mojom.AudioInputStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_receiver', 8, 0, mojo.internal.InterfaceRequest(media.mojom.AudioInputStreamClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('data_pipe', 16, 0, media.mojom.ReadWriteAudioDataPipeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mirroring.mojom.AudioStreamCreatorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mirroring.mojom.AudioStreamCreatorClientRemote = class {
  static get $interfaceName() {
    return 'mirroring.mojom.AudioStreamCreatorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mirroring.mojom.AudioStreamCreatorClientPendingReceiver,
      handle);
    this.$ = new mirroring.mojom.AudioStreamCreatorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  streamCreated(stream, client_receiver, data_pipe) {
    return this.$.streamCreated(stream, client_receiver, data_pipe);
  }
};

mirroring.mojom.AudioStreamCreatorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioStreamCreatorClient', [
      { explicit: null },
    ]);
  }

  streamCreated(stream, client_receiver, data_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mirroring.mojom.AudioStreamCreatorClient_StreamCreated_ParamsSpec,
      null,
      [stream, client_receiver, data_pipe],
      false);
  }

};

mirroring.mojom.AudioStreamCreatorClient.getRemote = function() {
  let remote = new mirroring.mojom.AudioStreamCreatorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mirroring.mojom.AudioStreamCreatorClient',
    'context');
  return remote.$;
};

mirroring.mojom.AudioStreamCreatorClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioStreamCreatorClient', [
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
        
        // Try Method 0: StreamCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.AudioStreamCreatorClient_StreamCreated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StreamCreated (0)');
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
          const params = decoder.decodeStructInline(mirroring.mojom.AudioStreamCreatorClient_StreamCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.streamCreated');
          const result = this.impl.streamCreated(params.stream, params.client_receiver, params.data_pipe);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mirroring.mojom.AudioStreamCreatorClientReceiver = mirroring.mojom.AudioStreamCreatorClientReceiver;

mirroring.mojom.AudioStreamCreatorClientPtr = mirroring.mojom.AudioStreamCreatorClientRemote;
mirroring.mojom.AudioStreamCreatorClientRequest = mirroring.mojom.AudioStreamCreatorClientPendingReceiver;


// Interface: ResourceProvider
mojo.internal.Struct(
    mirroring.mojom.ResourceProvider_BindGpu_ParamsSpec, 'mirroring.mojom.ResourceProvider_BindGpu_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.GpuRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mirroring.mojom.ResourceProvider_GetVideoCaptureHost_ParamsSpec, 'mirroring.mojom.ResourceProvider_GetVideoCaptureHost_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.VideoCaptureHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mirroring.mojom.ResourceProvider_GetVideoEncoderMetricsProvider_ParamsSpec, 'mirroring.mojom.ResourceProvider_GetVideoEncoderMetricsProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.VideoEncoderMetricsProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mirroring.mojom.ResourceProvider_GetNetworkContext_ParamsSpec, 'mirroring.mojom.ResourceProvider_GetNetworkContext_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.NetworkContextRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mirroring.mojom.ResourceProvider_CreateAudioStream_ParamsSpec, 'mirroring.mojom.ResourceProvider_CreateAudioStream_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(mirroring.mojom.AudioStreamCreatorClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('param', 8, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_memory_count', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mirroring.mojom.ResourceProvider_ConnectToRemotingSource_ParamsSpec, 'mirroring.mojom.ResourceProvider_ConnectToRemotingSource_Params', [
      mojo.internal.StructField('remoter', 0, 0, mojo.internal.InterfaceProxy(media.mojom.RemoterRemote), null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(media.mojom.RemotingSourceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mirroring.mojom.ResourceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mirroring.mojom.ResourceProviderRemote = class {
  static get $interfaceName() {
    return 'mirroring.mojom.ResourceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mirroring.mojom.ResourceProviderPendingReceiver,
      handle);
    this.$ = new mirroring.mojom.ResourceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindGpu(receiver) {
    return this.$.bindGpu(receiver);
  }
  getVideoCaptureHost(receiver) {
    return this.$.getVideoCaptureHost(receiver);
  }
  getVideoEncoderMetricsProvider(receiver) {
    return this.$.getVideoEncoderMetricsProvider(receiver);
  }
  getNetworkContext(receiver) {
    return this.$.getNetworkContext(receiver);
  }
  createAudioStream(client, param, shared_memory_count) {
    return this.$.createAudioStream(client, param, shared_memory_count);
  }
  connectToRemotingSource(remoter, receiver) {
    return this.$.connectToRemotingSource(remoter, receiver);
  }
};

mirroring.mojom.ResourceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ResourceProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindGpu(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mirroring.mojom.ResourceProvider_BindGpu_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getVideoCaptureHost(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mirroring.mojom.ResourceProvider_GetVideoCaptureHost_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getVideoEncoderMetricsProvider(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mirroring.mojom.ResourceProvider_GetVideoEncoderMetricsProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getNetworkContext(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mirroring.mojom.ResourceProvider_GetNetworkContext_ParamsSpec,
      null,
      [receiver],
      false);
  }

  createAudioStream(client, param, shared_memory_count) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mirroring.mojom.ResourceProvider_CreateAudioStream_ParamsSpec,
      null,
      [client, param, shared_memory_count],
      false);
  }

  connectToRemotingSource(remoter, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mirroring.mojom.ResourceProvider_ConnectToRemotingSource_ParamsSpec,
      null,
      [remoter, receiver],
      false);
  }

};

mirroring.mojom.ResourceProvider.getRemote = function() {
  let remote = new mirroring.mojom.ResourceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mirroring.mojom.ResourceProvider',
    'context');
  return remote.$;
};

mirroring.mojom.ResourceProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ResourceProvider', [
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
        
        // Try Method 0: BindGpu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.ResourceProvider_BindGpu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindGpu (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetVideoCaptureHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.ResourceProvider_GetVideoCaptureHost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVideoCaptureHost (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetVideoEncoderMetricsProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.ResourceProvider_GetVideoEncoderMetricsProvider_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVideoEncoderMetricsProvider (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetNetworkContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.ResourceProvider_GetNetworkContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNetworkContext (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CreateAudioStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.ResourceProvider_CreateAudioStream_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAudioStream (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ConnectToRemotingSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.ResourceProvider_ConnectToRemotingSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToRemotingSource (5)');
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
          const params = decoder.decodeStructInline(mirroring.mojom.ResourceProvider_BindGpu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindGpu');
          const result = this.impl.bindGpu(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.ResourceProvider_GetVideoCaptureHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVideoCaptureHost');
          const result = this.impl.getVideoCaptureHost(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.ResourceProvider_GetVideoEncoderMetricsProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVideoEncoderMetricsProvider');
          const result = this.impl.getVideoEncoderMetricsProvider(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.ResourceProvider_GetNetworkContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNetworkContext');
          const result = this.impl.getNetworkContext(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.ResourceProvider_CreateAudioStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createAudioStream');
          const result = this.impl.createAudioStream(params.client, params.param, params.shared_memory_count);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mirroring.mojom.ResourceProvider_ConnectToRemotingSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToRemotingSource');
          const result = this.impl.connectToRemotingSource(params.remoter, params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mirroring.mojom.ResourceProviderReceiver = mirroring.mojom.ResourceProviderReceiver;

mirroring.mojom.ResourceProviderPtr = mirroring.mojom.ResourceProviderRemote;
mirroring.mojom.ResourceProviderRequest = mirroring.mojom.ResourceProviderPendingReceiver;

