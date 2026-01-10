// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_output_stream.mojom
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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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

media.mojom.DisconnectReasonSpec = { $: mojo.internal.Enum() };
media.mojom.AudioOutputStream = {};
media.mojom.AudioOutputStream.$interfaceName = 'media.mojom.AudioOutputStream';
media.mojom.AudioOutputStream_Play_ParamsSpec = { $: {} };
media.mojom.AudioOutputStream_Pause_ParamsSpec = { $: {} };
media.mojom.AudioOutputStream_Flush_ParamsSpec = { $: {} };
media.mojom.AudioOutputStream_SetVolume_ParamsSpec = { $: {} };
media.mojom.AudioOutputStreamObserver = {};
media.mojom.AudioOutputStreamObserver.$interfaceName = 'media.mojom.AudioOutputStreamObserver';
media.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec = { $: {} };
media.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec = { $: {} };
media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec = { $: {} };
media.mojom.AudioOutputStreamProvider = {};
media.mojom.AudioOutputStreamProvider.$interfaceName = 'media.mojom.AudioOutputStreamProvider';
media.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec = { $: {} };
media.mojom.AudioOutputStreamProviderClient = {};
media.mojom.AudioOutputStreamProviderClient.$interfaceName = 'media.mojom.AudioOutputStreamProviderClient';
media.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec = { $: {} };
media.mojom.DeviceSwitchInterface = {};
media.mojom.DeviceSwitchInterface.$interfaceName = 'media.mojom.DeviceSwitchInterface';
media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec = { $: {} };

// Enum: DisconnectReason
media.mojom.DisconnectReason = {
  kDefault: 0,
  kPlatformError: 1,
  kTerminatedByClient: 2,
  kStreamCreationFailed: 3,
  kDocumentDestroyed: 4,
};

// Interface: AudioOutputStream
mojo.internal.Struct(
    media.mojom.AudioOutputStream_Play_ParamsSpec, 'media.mojom.AudioOutputStream_Play_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioOutputStream_Pause_ParamsSpec, 'media.mojom.AudioOutputStream_Pause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioOutputStream_Flush_ParamsSpec, 'media.mojom.AudioOutputStream_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioOutputStream_SetVolume_ParamsSpec, 'media.mojom.AudioOutputStream_SetVolume_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioOutputStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioOutputStreamRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioOutputStreamPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioOutputStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioOutputStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioOutputStream', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  play() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioOutputStream_Play_ParamsSpec,
      null,
      [],
      false);
  }

  pause() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.AudioOutputStream_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.AudioOutputStream_Flush_ParamsSpec,
      null,
      [],
      false);
  }

  setVolume(volume) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.AudioOutputStream_SetVolume_ParamsSpec,
      null,
      [volume],
      false);
  }

};

media.mojom.AudioOutputStream.getRemote = function() {
  let remote = new media.mojom.AudioOutputStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStream',
    'context');
  return remote.$;
};

media.mojom.AudioOutputStreamReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioOutputStream', [
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
        
        // Try Method 0: Play
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStream_Play_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Play (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Pause
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStream_Pause_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Pause (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStream_Flush_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetVolume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStream_SetVolume_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVolume (3)');
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
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStream_Play_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.play');
          const result = this.impl.play();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStream_Pause_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.pause');
          const result = this.impl.pause();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStream_Flush_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStream_SetVolume_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setVolume');
          const result = this.impl.setVolume(params.volume);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.AudioOutputStreamReceiver = media.mojom.AudioOutputStreamReceiver;

media.mojom.AudioOutputStreamPtr = media.mojom.AudioOutputStreamRemote;
media.mojom.AudioOutputStreamRequest = media.mojom.AudioOutputStreamPendingReceiver;


// Interface: AudioOutputStreamObserver
mojo.internal.Struct(
    media.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec, 'media.mojom.AudioOutputStreamObserver_DidStartPlaying_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec, 'media.mojom.AudioOutputStreamObserver_DidStopPlaying_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec, 'media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_Params', [
      mojo.internal.StructField('is_audible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioOutputStreamObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioOutputStreamObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStreamObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioOutputStreamObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioOutputStreamObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioOutputStreamObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioOutputStreamObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  didStartPlaying() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec,
      null,
      [],
      false);
  }

  didStopPlaying() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec,
      null,
      [],
      false);
  }

  didChangeAudibleState(is_audible) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec,
      null,
      [is_audible],
      false);
  }

};

media.mojom.AudioOutputStreamObserver.getRemote = function() {
  let remote = new media.mojom.AudioOutputStreamObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStreamObserver',
    'context');
  return remote.$;
};

media.mojom.AudioOutputStreamObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioOutputStreamObserver', [
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
        
        // Try Method 0: DidStartPlaying
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidStartPlaying (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DidStopPlaying
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidStopPlaying (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DidChangeAudibleState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeAudibleState (2)');
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
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStreamObserver_DidStartPlaying_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didStartPlaying');
          const result = this.impl.didStartPlaying();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStreamObserver_DidStopPlaying_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didStopPlaying');
          const result = this.impl.didStopPlaying();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStreamObserver_DidChangeAudibleState_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeAudibleState');
          const result = this.impl.didChangeAudibleState(params.is_audible);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.AudioOutputStreamObserverReceiver = media.mojom.AudioOutputStreamObserverReceiver;

media.mojom.AudioOutputStreamObserverPtr = media.mojom.AudioOutputStreamObserverRemote;
media.mojom.AudioOutputStreamObserverRequest = media.mojom.AudioOutputStreamObserverPendingReceiver;


// Interface: AudioOutputStreamProvider
mojo.internal.Struct(
    media.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec, 'media.mojom.AudioOutputStreamProvider_Acquire_Params', [
      mojo.internal.StructField('params', 0, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AudioOutputStreamProviderClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.AudioOutputStreamProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioOutputStreamProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStreamProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioOutputStreamProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioOutputStreamProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioOutputStreamProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioOutputStreamProvider', [
      { explicit: null },
    ]);
  }

  acquire(params, client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec,
      null,
      [params, client],
      false);
  }

};

media.mojom.AudioOutputStreamProvider.getRemote = function() {
  let remote = new media.mojom.AudioOutputStreamProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStreamProvider',
    'context');
  return remote.$;
};

media.mojom.AudioOutputStreamProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioOutputStreamProvider', [
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
        
        // Try Method 0: Acquire
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Acquire (0)');
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
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStreamProvider_Acquire_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.acquire');
          const result = this.impl.acquire(params.params, params.client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.AudioOutputStreamProviderReceiver = media.mojom.AudioOutputStreamProviderReceiver;

media.mojom.AudioOutputStreamProviderPtr = media.mojom.AudioOutputStreamProviderRemote;
media.mojom.AudioOutputStreamProviderRequest = media.mojom.AudioOutputStreamProviderPendingReceiver;


// Interface: AudioOutputStreamProviderClient
mojo.internal.Struct(
    media.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec, 'media.mojom.AudioOutputStreamProviderClient_Created_Params', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.InterfaceProxy(media.mojom.AudioOutputStreamSpec), null, false, 0, undefined),
      mojo.internal.StructField('data_pipe', 8, 0, media.mojom.ReadWriteAudioDataPipeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.AudioOutputStreamProviderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioOutputStreamProviderClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioOutputStreamProviderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioOutputStreamProviderClientPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioOutputStreamProviderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioOutputStreamProviderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioOutputStreamProviderClient', [
      { explicit: null },
    ]);
  }

  created(stream, data_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec,
      null,
      [stream, data_pipe],
      false);
  }

};

media.mojom.AudioOutputStreamProviderClient.getRemote = function() {
  let remote = new media.mojom.AudioOutputStreamProviderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioOutputStreamProviderClient',
    'context');
  return remote.$;
};

media.mojom.AudioOutputStreamProviderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioOutputStreamProviderClient', [
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
        
        // Try Method 0: Created
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Created (0)');
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
          const params = decoder.decodeStructInline(media.mojom.AudioOutputStreamProviderClient_Created_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.created');
          const result = this.impl.created(params.stream, params.data_pipe);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.AudioOutputStreamProviderClientReceiver = media.mojom.AudioOutputStreamProviderClientReceiver;

media.mojom.AudioOutputStreamProviderClientPtr = media.mojom.AudioOutputStreamProviderClientRemote;
media.mojom.AudioOutputStreamProviderClientRequest = media.mojom.AudioOutputStreamProviderClientPendingReceiver;


// Interface: DeviceSwitchInterface
mojo.internal.Struct(
    media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec, 'media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_Params', [
      mojo.internal.StructField('output_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.DeviceSwitchInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.DeviceSwitchInterfaceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.DeviceSwitchInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.DeviceSwitchInterfacePendingReceiver,
      handle);
    this.$ = new media.mojom.DeviceSwitchInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.DeviceSwitchInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceSwitchInterface', [
      { explicit: null },
    ]);
  }

  switchAudioOutputDeviceId(output_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec,
      null,
      [output_device_id],
      false);
  }

};

media.mojom.DeviceSwitchInterface.getRemote = function() {
  let remote = new media.mojom.DeviceSwitchInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.DeviceSwitchInterface',
    'context');
  return remote.$;
};

media.mojom.DeviceSwitchInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceSwitchInterface', [
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
        
        // Try Method 0: SwitchAudioOutputDeviceId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SwitchAudioOutputDeviceId (0)');
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
          const params = decoder.decodeStructInline(media.mojom.DeviceSwitchInterface_SwitchAudioOutputDeviceId_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.switchAudioOutputDeviceId');
          const result = this.impl.switchAudioOutputDeviceId(params.output_device_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.DeviceSwitchInterfaceReceiver = media.mojom.DeviceSwitchInterfaceReceiver;

media.mojom.DeviceSwitchInterfacePtr = media.mojom.DeviceSwitchInterfaceRemote;
media.mojom.DeviceSwitchInterfaceRequest = media.mojom.DeviceSwitchInterfacePendingReceiver;

