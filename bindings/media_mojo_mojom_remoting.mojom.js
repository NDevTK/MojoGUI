// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/remoting.mojom
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
var media = media || {};
media.mojom = media.mojom || {};
var gfx = gfx || {};

media.mojom.RemoterFactory = {};
media.mojom.RemoterFactory.$interfaceName = 'media.mojom.RemoterFactory';
media.mojom.RemoterFactory_Create_ParamsSpec = { $: {} };
media.mojom.RemotingDataStreamSender = {};
media.mojom.RemotingDataStreamSender.$interfaceName = 'media.mojom.RemotingDataStreamSender';
media.mojom.RemotingDataStreamSender_SendFrame_ParamsSpec = { $: {} };
media.mojom.RemotingDataStreamSender_SendFrame_ResponseParamsSpec = { $: {} };
media.mojom.RemotingDataStreamSender_CancelInFlightData_ParamsSpec = { $: {} };
media.mojom.Remoter = {};
media.mojom.Remoter.$interfaceName = 'media.mojom.Remoter';
media.mojom.Remoter_Start_ParamsSpec = { $: {} };
media.mojom.Remoter_StartWithPermissionAlreadyGranted_ParamsSpec = { $: {} };
media.mojom.Remoter_StartDataStreams_ParamsSpec = { $: {} };
media.mojom.Remoter_Stop_ParamsSpec = { $: {} };
media.mojom.Remoter_SendMessageToSink_ParamsSpec = { $: {} };
media.mojom.Remoter_EstimateTransmissionCapacity_ParamsSpec = { $: {} };
media.mojom.Remoter_EstimateTransmissionCapacity_ResponseParamsSpec = { $: {} };
media.mojom.RemotingSource = {};
media.mojom.RemotingSource.$interfaceName = 'media.mojom.RemotingSource';
media.mojom.RemotingSource_OnSinkAvailable_ParamsSpec = { $: {} };
media.mojom.RemotingSource_OnSinkGone_ParamsSpec = { $: {} };
media.mojom.RemotingSource_OnStarted_ParamsSpec = { $: {} };
media.mojom.RemotingSource_OnStartFailed_ParamsSpec = { $: {} };
media.mojom.RemotingSource_OnMessageFromSink_ParamsSpec = { $: {} };
media.mojom.RemotingSource_OnStopped_ParamsSpec = { $: {} };
media.mojom.Remotee = {};
media.mojom.Remotee.$interfaceName = 'media.mojom.Remotee';
media.mojom.Remotee_OnRemotingSinkReady_ParamsSpec = { $: {} };
media.mojom.Remotee_SendMessageToSource_ParamsSpec = { $: {} };
media.mojom.Remotee_StartDataStreams_ParamsSpec = { $: {} };
media.mojom.Remotee_OnFlushUntil_ParamsSpec = { $: {} };
media.mojom.Remotee_OnVideoNaturalSizeChange_ParamsSpec = { $: {} };
media.mojom.RemotingSink = {};
media.mojom.RemotingSink.$interfaceName = 'media.mojom.RemotingSink';
media.mojom.RemotingSink_OnMessageFromSource_ParamsSpec = { $: {} };
media.mojom.RemotingDataStreamReceiver = {};
media.mojom.RemotingDataStreamReceiver.$interfaceName = 'media.mojom.RemotingDataStreamReceiver';
media.mojom.RemotingDataStreamReceiver_InitializeDataPipe_ParamsSpec = { $: {} };
media.mojom.RemotingDataStreamReceiver_ReceiveFrame_ParamsSpec = { $: {} };
media.mojom.RemotingDataStreamReceiver_FlushUntil_ParamsSpec = { $: {} };

// Interface: RemoterFactory
mojo.internal.Struct(
    media.mojom.RemoterFactory_Create_ParamsSpec, 'media.mojom.RemoterFactory_Create_Params', [
      mojo.internal.StructField('source', 0, 0, mojo.internal.InterfaceProxy(media.mojom.RemotingSourceSpec), null, false, 0, undefined),
      mojo.internal.StructField('remoter', 8, 0, mojo.internal.InterfaceRequest(media.mojom.RemoterSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.RemoterFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemoterFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.RemoterFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemoterFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.RemoterFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemoterFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoterFactory', [
      { explicit: null },
    ]);
  }

  create(source, remoter) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.RemoterFactory_Create_ParamsSpec,
      null,
      [source, remoter],
      false);
  }

};

media.mojom.RemoterFactory.getRemote = function() {
  let remote = new media.mojom.RemoterFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.RemoterFactory',
    'context');
  return remote.$;
};

media.mojom.RemoterFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoterFactory', [
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
        
        // Try Method 0: Create
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.RemoterFactory_Create_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Create (0)');
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
          const params = decoder.decodeStructInline(media.mojom.RemoterFactory_Create_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.create');
          const result = this.impl.create(params.source, params.remoter);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.RemoterFactoryReceiver = media.mojom.RemoterFactoryReceiver;

media.mojom.RemoterFactoryPtr = media.mojom.RemoterFactoryRemote;
media.mojom.RemoterFactoryRequest = media.mojom.RemoterFactoryPendingReceiver;


// Interface: RemotingDataStreamSender
mojo.internal.Struct(
    media.mojom.RemotingDataStreamSender_SendFrame_ParamsSpec, 'media.mojom.RemotingDataStreamSender_SendFrame_Params', [
      mojo.internal.StructField('frame', 0, 0, media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RemotingDataStreamSender_SendFrame_ResponseParamsSpec, 'media.mojom.RemotingDataStreamSender_SendFrame_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.RemotingDataStreamSender_CancelInFlightData_ParamsSpec, 'media.mojom.RemotingDataStreamSender_CancelInFlightData_Params', [
    ],
    [[0, 8]]);

media.mojom.RemotingDataStreamSenderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemotingDataStreamSenderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.RemotingDataStreamSender';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemotingDataStreamSenderPendingReceiver,
      handle);
    this.$ = new media.mojom.RemotingDataStreamSenderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemotingDataStreamSenderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemotingDataStreamSender', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  sendFrame(frame) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.RemotingDataStreamSender_SendFrame_ParamsSpec,
      media.mojom.RemotingDataStreamSender_SendFrame_ResponseParamsSpec,
      [frame],
      false);
  }

  cancelInFlightData() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.RemotingDataStreamSender_CancelInFlightData_ParamsSpec,
      null,
      [],
      false);
  }

};

media.mojom.RemotingDataStreamSender.getRemote = function() {
  let remote = new media.mojom.RemotingDataStreamSenderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.RemotingDataStreamSender',
    'context');
  return remote.$;
};

media.mojom.RemotingDataStreamSenderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemotingDataStreamSender', [
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
        
        // Try Method 0: SendFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.RemotingDataStreamSender_SendFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CancelInFlightData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.RemotingDataStreamSender_CancelInFlightData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelInFlightData (1)');
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
          const params = decoder.decodeStructInline(media.mojom.RemotingDataStreamSender_SendFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendFrame');
          const result = this.impl.sendFrame(params.frame);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.RemotingDataStreamSender_SendFrame_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.RemotingDataStreamSender_CancelInFlightData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelInFlightData');
          const result = this.impl.cancelInFlightData();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.RemotingDataStreamSenderReceiver = media.mojom.RemotingDataStreamSenderReceiver;

media.mojom.RemotingDataStreamSenderPtr = media.mojom.RemotingDataStreamSenderRemote;
media.mojom.RemotingDataStreamSenderRequest = media.mojom.RemotingDataStreamSenderPendingReceiver;


// Interface: Remoter
mojo.internal.Struct(
    media.mojom.Remoter_Start_ParamsSpec, 'media.mojom.Remoter_Start_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.Remoter_StartWithPermissionAlreadyGranted_ParamsSpec, 'media.mojom.Remoter_StartWithPermissionAlreadyGranted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.Remoter_StartDataStreams_ParamsSpec, 'media.mojom.Remoter_StartDataStreams_Params', [
      mojo.internal.StructField('audio_pipe', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('video_pipe', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('audio_sender', 16, 0, mojo.internal.InterfaceRequest(media.mojom.RemotingDataStreamSenderSpec), null, true, 0, undefined),
      mojo.internal.StructField('video_sender', 24, 0, mojo.internal.InterfaceRequest(media.mojom.RemotingDataStreamSenderSpec), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media.mojom.Remoter_Stop_ParamsSpec, 'media.mojom.Remoter_Stop_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.RemotingStopReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Remoter_SendMessageToSink_ParamsSpec, 'media.mojom.Remoter_SendMessageToSink_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Remoter_EstimateTransmissionCapacity_ParamsSpec, 'media.mojom.Remoter_EstimateTransmissionCapacity_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.Remoter_EstimateTransmissionCapacity_ResponseParamsSpec, 'media.mojom.Remoter_EstimateTransmissionCapacity_ResponseParams', [
      mojo.internal.StructField('rate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.RemoterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemoterRemote = class {
  static get $interfaceName() {
    return 'media.mojom.Remoter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemoterPendingReceiver,
      handle);
    this.$ = new media.mojom.RemoterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemoterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Remoter', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  start() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.Remoter_Start_ParamsSpec,
      null,
      [],
      false);
  }

  startWithPermissionAlreadyGranted() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.Remoter_StartWithPermissionAlreadyGranted_ParamsSpec,
      null,
      [],
      false);
  }

  startDataStreams(audio_pipe, video_pipe, audio_sender, video_sender) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.Remoter_StartDataStreams_ParamsSpec,
      null,
      [audio_pipe, video_pipe, audio_sender, video_sender],
      false);
  }

  stop(reason) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.Remoter_Stop_ParamsSpec,
      null,
      [reason],
      false);
  }

  sendMessageToSink(message) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.Remoter_SendMessageToSink_ParamsSpec,
      null,
      [message],
      false);
  }

  estimateTransmissionCapacity() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.Remoter_EstimateTransmissionCapacity_ParamsSpec,
      media.mojom.Remoter_EstimateTransmissionCapacity_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.Remoter.getRemote = function() {
  let remote = new media.mojom.RemoterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.Remoter',
    'context');
  return remote.$;
};

media.mojom.RemoterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Remoter', [
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
        
        // Try Method 0: Start
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Remoter_Start_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartWithPermissionAlreadyGranted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Remoter_StartWithPermissionAlreadyGranted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartWithPermissionAlreadyGranted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StartDataStreams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Remoter_StartDataStreams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDataStreams (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Remoter_Stop_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SendMessageToSink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Remoter_SendMessageToSink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendMessageToSink (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: EstimateTransmissionCapacity
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Remoter_EstimateTransmissionCapacity_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstimateTransmissionCapacity (5)');
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
          const params = decoder.decodeStructInline(media.mojom.Remoter_Start_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Remoter_StartWithPermissionAlreadyGranted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startWithPermissionAlreadyGranted');
          const result = this.impl.startWithPermissionAlreadyGranted();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Remoter_StartDataStreams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDataStreams');
          const result = this.impl.startDataStreams(params.audio_pipe, params.video_pipe, params.audio_sender, params.video_sender);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Remoter_Stop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop(params.reason);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Remoter_SendMessageToSink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendMessageToSink');
          const result = this.impl.sendMessageToSink(params.message);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Remoter_EstimateTransmissionCapacity_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.estimateTransmissionCapacity');
          const result = this.impl.estimateTransmissionCapacity();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.Remoter_EstimateTransmissionCapacity_ResponseParamsSpec);
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

media.mojom.RemoterReceiver = media.mojom.RemoterReceiver;

media.mojom.RemoterPtr = media.mojom.RemoterRemote;
media.mojom.RemoterRequest = media.mojom.RemoterPendingReceiver;


// Interface: RemotingSource
mojo.internal.Struct(
    media.mojom.RemotingSource_OnSinkAvailable_ParamsSpec, 'media.mojom.RemotingSource_OnSinkAvailable_Params', [
      mojo.internal.StructField('metadata', 0, 0, media.mojom.RemotingSinkMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RemotingSource_OnSinkGone_ParamsSpec, 'media.mojom.RemotingSource_OnSinkGone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.RemotingSource_OnStarted_ParamsSpec, 'media.mojom.RemotingSource_OnStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.RemotingSource_OnStartFailed_ParamsSpec, 'media.mojom.RemotingSource_OnStartFailed_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.RemotingStartFailReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RemotingSource_OnMessageFromSink_ParamsSpec, 'media.mojom.RemotingSource_OnMessageFromSink_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RemotingSource_OnStopped_ParamsSpec, 'media.mojom.RemotingSource_OnStopped_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.RemotingStopReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.RemotingSourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemotingSourceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.RemotingSource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemotingSourcePendingReceiver,
      handle);
    this.$ = new media.mojom.RemotingSourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemotingSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemotingSource', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onSinkAvailable(metadata) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.RemotingSource_OnSinkAvailable_ParamsSpec,
      null,
      [metadata],
      false);
  }

  onSinkGone() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.RemotingSource_OnSinkGone_ParamsSpec,
      null,
      [],
      false);
  }

  onStarted() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.RemotingSource_OnStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onStartFailed(reason) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.RemotingSource_OnStartFailed_ParamsSpec,
      null,
      [reason],
      false);
  }

  onMessageFromSink(message) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.RemotingSource_OnMessageFromSink_ParamsSpec,
      null,
      [message],
      false);
  }

  onStopped(reason) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.RemotingSource_OnStopped_ParamsSpec,
      null,
      [reason],
      false);
  }

};

media.mojom.RemotingSource.getRemote = function() {
  let remote = new media.mojom.RemotingSourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.RemotingSource',
    'context');
  return remote.$;
};

media.mojom.RemotingSourceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemotingSource', [
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
        
        // Try Method 0: OnSinkAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.RemotingSource_OnSinkAvailable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSinkAvailable (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSinkGone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.RemotingSource_OnSinkGone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSinkGone (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.RemotingSource_OnStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStarted (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnStartFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.RemotingSource_OnStartFailed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStartFailed (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnMessageFromSink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.RemotingSource_OnMessageFromSink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMessageFromSink (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.RemotingSource_OnStopped_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStopped (5)');
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
          const params = decoder.decodeStructInline(media.mojom.RemotingSource_OnSinkAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSinkAvailable');
          const result = this.impl.onSinkAvailable(params.metadata);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.RemotingSource_OnSinkGone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSinkGone');
          const result = this.impl.onSinkGone();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.RemotingSource_OnStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStarted');
          const result = this.impl.onStarted();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.RemotingSource_OnStartFailed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStartFailed');
          const result = this.impl.onStartFailed(params.reason);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.RemotingSource_OnMessageFromSink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMessageFromSink');
          const result = this.impl.onMessageFromSink(params.message);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.RemotingSource_OnStopped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStopped');
          const result = this.impl.onStopped(params.reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.RemotingSourceReceiver = media.mojom.RemotingSourceReceiver;

media.mojom.RemotingSourcePtr = media.mojom.RemotingSourceRemote;
media.mojom.RemotingSourceRequest = media.mojom.RemotingSourcePendingReceiver;


// Interface: Remotee
mojo.internal.Struct(
    media.mojom.Remotee_OnRemotingSinkReady_ParamsSpec, 'media.mojom.Remotee_OnRemotingSinkReady_Params', [
      mojo.internal.StructField('sink', 0, 0, mojo.internal.InterfaceProxy(media.mojom.RemotingSinkSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Remotee_SendMessageToSource_ParamsSpec, 'media.mojom.Remotee_SendMessageToSource_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Remotee_StartDataStreams_ParamsSpec, 'media.mojom.Remotee_StartDataStreams_Params', [
      mojo.internal.StructField('audio_stream', 0, 0, mojo.internal.InterfaceProxy(media.mojom.RemotingDataStreamReceiverSpec), null, true, 0, undefined),
      mojo.internal.StructField('video_stream', 8, 0, mojo.internal.InterfaceProxy(media.mojom.RemotingDataStreamReceiverSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.Remotee_OnFlushUntil_ParamsSpec, 'media.mojom.Remotee_OnFlushUntil_Params', [
      mojo.internal.StructField('audio_frame_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('video_frame_count', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Remotee_OnVideoNaturalSizeChange_ParamsSpec, 'media.mojom.Remotee_OnVideoNaturalSizeChange_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.RemoteePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemoteeRemote = class {
  static get $interfaceName() {
    return 'media.mojom.Remotee';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemoteePendingReceiver,
      handle);
    this.$ = new media.mojom.RemoteeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemoteeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Remotee', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onRemotingSinkReady(sink) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.Remotee_OnRemotingSinkReady_ParamsSpec,
      null,
      [sink],
      false);
  }

  sendMessageToSource(message) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.Remotee_SendMessageToSource_ParamsSpec,
      null,
      [message],
      false);
  }

  startDataStreams(audio_stream, video_stream) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.Remotee_StartDataStreams_ParamsSpec,
      null,
      [audio_stream, video_stream],
      false);
  }

  onFlushUntil(audio_frame_count, video_frame_count) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.Remotee_OnFlushUntil_ParamsSpec,
      null,
      [audio_frame_count, video_frame_count],
      false);
  }

  onVideoNaturalSizeChange(size) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.Remotee_OnVideoNaturalSizeChange_ParamsSpec,
      null,
      [size],
      false);
  }

};

media.mojom.Remotee.getRemote = function() {
  let remote = new media.mojom.RemoteeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.Remotee',
    'context');
  return remote.$;
};

media.mojom.RemoteeReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Remotee', [
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
        
        // Try Method 0: OnRemotingSinkReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Remotee_OnRemotingSinkReady_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRemotingSinkReady (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SendMessageToSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Remotee_SendMessageToSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendMessageToSource (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StartDataStreams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Remotee_StartDataStreams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDataStreams (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnFlushUntil
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Remotee_OnFlushUntil_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFlushUntil (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnVideoNaturalSizeChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.Remotee_OnVideoNaturalSizeChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVideoNaturalSizeChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(media.mojom.Remotee_OnRemotingSinkReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRemotingSinkReady');
          const result = this.impl.onRemotingSinkReady(params.sink);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Remotee_SendMessageToSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendMessageToSource');
          const result = this.impl.sendMessageToSource(params.message);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Remotee_StartDataStreams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDataStreams');
          const result = this.impl.startDataStreams(params.audio_stream, params.video_stream);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Remotee_OnFlushUntil_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFlushUntil');
          const result = this.impl.onFlushUntil(params.audio_frame_count, params.video_frame_count);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.Remotee_OnVideoNaturalSizeChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVideoNaturalSizeChange');
          const result = this.impl.onVideoNaturalSizeChange(params.size);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.RemoteeReceiver = media.mojom.RemoteeReceiver;

media.mojom.RemoteePtr = media.mojom.RemoteeRemote;
media.mojom.RemoteeRequest = media.mojom.RemoteePendingReceiver;


// Interface: RemotingSink
mojo.internal.Struct(
    media.mojom.RemotingSink_OnMessageFromSource_ParamsSpec, 'media.mojom.RemotingSink_OnMessageFromSource_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.RemotingSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemotingSinkRemote = class {
  static get $interfaceName() {
    return 'media.mojom.RemotingSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemotingSinkPendingReceiver,
      handle);
    this.$ = new media.mojom.RemotingSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemotingSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemotingSink', [
      { explicit: null },
    ]);
  }

  onMessageFromSource(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.RemotingSink_OnMessageFromSource_ParamsSpec,
      null,
      [message],
      false);
  }

};

media.mojom.RemotingSink.getRemote = function() {
  let remote = new media.mojom.RemotingSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.RemotingSink',
    'context');
  return remote.$;
};

media.mojom.RemotingSinkReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemotingSink', [
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
        
        // Try Method 0: OnMessageFromSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.RemotingSink_OnMessageFromSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMessageFromSource (0)');
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
          const params = decoder.decodeStructInline(media.mojom.RemotingSink_OnMessageFromSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMessageFromSource');
          const result = this.impl.onMessageFromSource(params.message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.RemotingSinkReceiver = media.mojom.RemotingSinkReceiver;

media.mojom.RemotingSinkPtr = media.mojom.RemotingSinkRemote;
media.mojom.RemotingSinkRequest = media.mojom.RemotingSinkPendingReceiver;


// Interface: RemotingDataStreamReceiver
mojo.internal.Struct(
    media.mojom.RemotingDataStreamReceiver_InitializeDataPipe_ParamsSpec, 'media.mojom.RemotingDataStreamReceiver_InitializeDataPipe_Params', [
      mojo.internal.StructField('data_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RemotingDataStreamReceiver_ReceiveFrame_ParamsSpec, 'media.mojom.RemotingDataStreamReceiver_ReceiveFrame_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.RemotingDataStreamReceiver_FlushUntil_ParamsSpec, 'media.mojom.RemotingDataStreamReceiver_FlushUntil_Params', [
      mojo.internal.StructField('frame_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.RemotingDataStreamReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemotingDataStreamReceiverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.RemotingDataStreamReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemotingDataStreamReceiverPendingReceiver,
      handle);
    this.$ = new media.mojom.RemotingDataStreamReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemotingDataStreamReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemotingDataStreamReceiver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initializeDataPipe(data_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.RemotingDataStreamReceiver_InitializeDataPipe_ParamsSpec,
      null,
      [data_pipe],
      false);
  }

  receiveFrame(frame_count, buffer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.RemotingDataStreamReceiver_ReceiveFrame_ParamsSpec,
      null,
      [frame_count, buffer],
      false);
  }

  flushUntil(frame_count) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.RemotingDataStreamReceiver_FlushUntil_ParamsSpec,
      null,
      [frame_count],
      false);
  }

};

media.mojom.RemotingDataStreamReceiver.getRemote = function() {
  let remote = new media.mojom.RemotingDataStreamReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.RemotingDataStreamReceiver',
    'context');
  return remote.$;
};

media.mojom.RemotingDataStreamReceiverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemotingDataStreamReceiver', [
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
        
        // Try Method 0: InitializeDataPipe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.RemotingDataStreamReceiver_InitializeDataPipe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeDataPipe (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReceiveFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.RemotingDataStreamReceiver_ReceiveFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReceiveFrame (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: FlushUntil
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.RemotingDataStreamReceiver_FlushUntil_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushUntil (2)');
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
          const params = decoder.decodeStructInline(media.mojom.RemotingDataStreamReceiver_InitializeDataPipe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializeDataPipe');
          const result = this.impl.initializeDataPipe(params.data_pipe);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.RemotingDataStreamReceiver_ReceiveFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.receiveFrame');
          const result = this.impl.receiveFrame(params.frame_count, params.buffer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.RemotingDataStreamReceiver_FlushUntil_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushUntil');
          const result = this.impl.flushUntil(params.frame_count);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.RemotingDataStreamReceiverReceiver = media.mojom.RemotingDataStreamReceiverReceiver;

media.mojom.RemotingDataStreamReceiverPtr = media.mojom.RemotingDataStreamReceiverRemote;
media.mojom.RemotingDataStreamReceiverRequest = media.mojom.RemotingDataStreamReceiverPendingReceiver;

