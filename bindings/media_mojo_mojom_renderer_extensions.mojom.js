// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/renderer_extensions.mojom
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
var mojo_base = mojo_base || {};
var gfx = gfx || {};

media.mojom.FrameTextureInfoSpec = { $: {} };
media.mojom.FramePoolInitializationParametersSpec = { $: {} };
media.mojom.FlingingRendererClientExtension = {};
media.mojom.FlingingRendererClientExtension.$interfaceName = 'media.mojom.FlingingRendererClientExtension';
media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec = { $: {} };
media.mojom.MediaFoundationRendererExtension = {};
media.mojom.MediaFoundationRendererExtension.$interfaceName = 'media.mojom.MediaFoundationRendererExtension';
media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec = { $: {} };
media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec = { $: {} };
media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec = { $: {} };
media.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec = { $: {} };
media.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParamsSpec = { $: {} };
media.mojom.MediaFoundationRendererObserver = {};
media.mojom.MediaFoundationRendererObserver.$interfaceName = 'media.mojom.MediaFoundationRendererObserver';
media.mojom.MediaFoundationRendererNotifier = {};
media.mojom.MediaFoundationRendererNotifier.$interfaceName = 'media.mojom.MediaFoundationRendererNotifier';
media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec = { $: {} };

// Struct: FrameTextureInfo
mojo.internal.Struct(
    media.mojom.FrameTextureInfoSpec, 'media.mojom.FrameTextureInfo', [
      mojo.internal.StructField('texture_handle', 0, 0, gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FramePoolInitializationParameters
mojo.internal.Struct(
    media.mojom.FramePoolInitializationParametersSpec, 'media.mojom.FramePoolInitializationParameters', [
      mojo.internal.StructField('frame_textures', 0, 0, mojo.internal.Array(media.mojom.FrameTextureInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('texture_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FlingingRendererClientExtension
mojo.internal.Struct(
    media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec, 'media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, media.mojom.MediaStatusStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.FlingingRendererClientExtensionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.FlingingRendererClientExtensionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FlingingRendererClientExtension';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.FlingingRendererClientExtensionPendingReceiver,
      handle);
    this.$ = new media.mojom.FlingingRendererClientExtensionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.FlingingRendererClientExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FlingingRendererClientExtension', [
      { explicit: null },
    ]);
  }

  onRemotePlayStateChange(state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec,
      null,
      [state],
      false);
  }

};

media.mojom.FlingingRendererClientExtension.getRemote = function() {
  let remote = new media.mojom.FlingingRendererClientExtensionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FlingingRendererClientExtension',
    'context');
  return remote.$;
};

media.mojom.FlingingRendererClientExtensionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FlingingRendererClientExtension', [
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
        
        // Try Method 0: OnRemotePlayStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRemotePlayStateChange (0)');
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
          const params = decoder.decodeStructInline(media.mojom.FlingingRendererClientExtension_OnRemotePlayStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRemotePlayStateChange');
          const result = this.impl.onRemotePlayStateChange(params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.FlingingRendererClientExtensionReceiver = media.mojom.FlingingRendererClientExtensionReceiver;

media.mojom.FlingingRendererClientExtensionPtr = media.mojom.FlingingRendererClientExtensionRemote;
media.mojom.FlingingRendererClientExtensionRequest = media.mojom.FlingingRendererClientExtensionPendingReceiver;


// Interface: MediaFoundationRendererExtension
mojo.internal.Struct(
    media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec, 'media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec, 'media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec, 'media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec, 'media.mojom.MediaFoundationRendererExtension_SetOutputRect_Params', [
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParamsSpec, 'media.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MediaFoundationRendererExtensionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationRendererExtensionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationRendererExtension';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationRendererExtensionPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationRendererExtensionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaFoundationRendererExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaFoundationRendererExtension', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDCOMPSurface() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec,
      media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec,
      [],
      false);
  }

  setVideoStreamEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setOutputRect(rect) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec,
      media.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParamsSpec,
      [rect],
      false);
  }

};

media.mojom.MediaFoundationRendererExtension.getRemote = function() {
  let remote = new media.mojom.MediaFoundationRendererExtensionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationRendererExtension',
    'context');
  return remote.$;
};

media.mojom.MediaFoundationRendererExtensionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaFoundationRendererExtension', [
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
        
        // Try Method 0: GetDCOMPSurface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDCOMPSurface (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetVideoStreamEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVideoStreamEnabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetOutputRect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOutputRect (2)');
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
          const params = decoder.decodeStructInline(media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDCOMPSurface');
          const result = this.impl.getDCOMPSurface();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaFoundationRendererExtension_GetDCOMPSurface_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaFoundationRendererExtension_SetVideoStreamEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVideoStreamEnabled');
          const result = this.impl.setVideoStreamEnabled(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaFoundationRendererExtension_SetOutputRect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOutputRect');
          const result = this.impl.setOutputRect(params.rect);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaFoundationRendererExtension_SetOutputRect_ResponseParamsSpec);
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

media.mojom.MediaFoundationRendererExtensionReceiver = media.mojom.MediaFoundationRendererExtensionReceiver;

media.mojom.MediaFoundationRendererExtensionPtr = media.mojom.MediaFoundationRendererExtensionRemote;
media.mojom.MediaFoundationRendererExtensionRequest = media.mojom.MediaFoundationRendererExtensionPendingReceiver;


// Interface: MediaFoundationRendererObserver
media.mojom.MediaFoundationRendererObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationRendererObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationRendererObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationRendererObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationRendererObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaFoundationRendererObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaFoundationRendererObserver', [
    ]);
  }

};

media.mojom.MediaFoundationRendererObserver.getRemote = function() {
  let remote = new media.mojom.MediaFoundationRendererObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationRendererObserver',
    'context');
  return remote.$;
};

media.mojom.MediaFoundationRendererObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaFoundationRendererObserver', [
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

media.mojom.MediaFoundationRendererObserverReceiver = media.mojom.MediaFoundationRendererObserverReceiver;

media.mojom.MediaFoundationRendererObserverPtr = media.mojom.MediaFoundationRendererObserverRemote;
media.mojom.MediaFoundationRendererObserverRequest = media.mojom.MediaFoundationRendererObserverPendingReceiver;


// Interface: MediaFoundationRendererNotifier
mojo.internal.Struct(
    media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec, 'media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(media.mojom.MediaFoundationRendererObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MediaFoundationRendererNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationRendererNotifierRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationRendererNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationRendererNotifierPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationRendererNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaFoundationRendererNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaFoundationRendererNotifier', [
      { explicit: null },
    ]);
  }

  mediaFoundationRendererCreated(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec,
      null,
      [observer],
      false);
  }

};

media.mojom.MediaFoundationRendererNotifier.getRemote = function() {
  let remote = new media.mojom.MediaFoundationRendererNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationRendererNotifier',
    'context');
  return remote.$;
};

media.mojom.MediaFoundationRendererNotifierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaFoundationRendererNotifier', [
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
        
        // Try Method 0: MediaFoundationRendererCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaFoundationRendererCreated (0)');
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
          const params = decoder.decodeStructInline(media.mojom.MediaFoundationRendererNotifier_MediaFoundationRendererCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaFoundationRendererCreated');
          const result = this.impl.mediaFoundationRendererCreated(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.MediaFoundationRendererNotifierReceiver = media.mojom.MediaFoundationRendererNotifierReceiver;

media.mojom.MediaFoundationRendererNotifierPtr = media.mojom.MediaFoundationRendererNotifierRemote;
media.mojom.MediaFoundationRendererNotifierRequest = media.mojom.MediaFoundationRendererNotifierPendingReceiver;

