// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/screen_capture.mojom
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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.arc.mojom.ScreenCaptureHost = {};
mojo.internal.bindings.arc.mojom.ScreenCaptureHostSpec = { $ : {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureHost.$interfaceName = 'arc.mojom.ScreenCaptureHost';
mojo.internal.bindings.arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureHost_RequestPermission_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureHost_OpenSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureSession = {};
mojo.internal.bindings.arc.mojom.ScreenCaptureSessionSpec = { $ : {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureSession.$interfaceName = 'arc.mojom.ScreenCaptureSession';
mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureInstance = {};
mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceSpec = { $ : {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureInstance.$interfaceName = 'arc.mojom.ScreenCaptureInstance';
mojo.internal.bindings.arc.mojom.ScreenCaptureInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifier = {};
mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierSpec = { $ : {} };
mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifier.$interfaceName = 'arc.mojom.ScreenCaptureSessionNotifier';
mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec = { $: {} };

// Interface: ScreenCaptureHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec, 'arc.mojom.ScreenCaptureHost_RequestPermission_Params', [
      mojo.internal.StructField('arg_display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ScreenCaptureHost_RequestPermission_ResponseParamsSpec, 'arc.mojom.ScreenCaptureHost_RequestPermission_ResponseParams', [
      mojo.internal.StructField('arg_granted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec, 'arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_Params', [
      mojo.internal.StructField('arg_package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec, 'arc.mojom.ScreenCaptureHost_OpenSession_Params', [
      mojo.internal.StructField('arg_notifier', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_package_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 16, 0, mojo.internal.bindings.arc.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ScreenCaptureHost_OpenSession_ResponseParamsSpec, 'arc.mojom.ScreenCaptureHost_OpenSession_ResponseParams', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ScreenCaptureSessionRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.ScreenCaptureHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.ScreenCaptureHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ScreenCaptureHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.ScreenCaptureHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.ScreenCaptureHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestPermission(arg_display_name, arg_package_name) {
    return this.$.requestPermission(arg_display_name, arg_package_name);
  }
  testModeAcceptPermission(arg_package_name) {
    return this.$.testModeAcceptPermission(arg_package_name);
  }
  openSession(arg_notifier, arg_package_name, arg_size) {
    return this.$.openSession(arg_notifier, arg_package_name, arg_size);
  }
};

mojo.internal.bindings.arc.mojom.ScreenCaptureHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.ScreenCaptureHost', [
      { explicit: 0 },
      { explicit: 2 },
      { explicit: 1 },
    ]);
  }

  requestPermission(arg_display_name, arg_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec,
      mojo.internal.bindings.arc.mojom.ScreenCaptureHost_RequestPermission_ResponseParamsSpec,
      [arg_display_name, arg_package_name],
      false);
  }

  testModeAcceptPermission(arg_package_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec,
      null,
      [arg_package_name],
      false);
  }

  openSession(arg_notifier, arg_package_name, arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec,
      mojo.internal.bindings.arc.mojom.ScreenCaptureHost_OpenSession_ResponseParamsSpec,
      [arg_notifier, arg_package_name, arg_size],
      false);
  }

};

mojo.internal.bindings.arc.mojom.ScreenCaptureHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.ScreenCaptureHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ScreenCaptureHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.ScreenCaptureHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.ScreenCaptureHost', [
      { explicit: 0 },
      { explicit: 2 },
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
        
        // Try Method 0: RequestPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPermission (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: TestModeAcceptPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TestModeAcceptPermission (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OpenSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenSession (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureHost_RequestPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPermission');
          const result = this.impl.requestPermission(params.arg_display_name, params.arg_package_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.ScreenCaptureHost_RequestPermission_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPermission FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureHost_TestModeAcceptPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.testModeAcceptPermission');
          const result = this.impl.testModeAcceptPermission(params.arg_package_name);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureHost_OpenSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openSession');
          const result = this.impl.openSession(params.arg_notifier, params.arg_package_name, params.arg_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.ScreenCaptureHost_OpenSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenSession FAILED:', e));
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

mojo.internal.bindings.arc.mojom.ScreenCaptureHostReceiver = mojo.internal.bindings.arc.mojom.ScreenCaptureHostReceiver;

mojo.internal.bindings.arc.mojom.ScreenCaptureHostPtr = mojo.internal.bindings.arc.mojom.ScreenCaptureHostRemote;
mojo.internal.bindings.arc.mojom.ScreenCaptureHostRequest = mojo.internal.bindings.arc.mojom.ScreenCaptureHostPendingReceiver;


// Interface: ScreenCaptureSession
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec, 'arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_Params', [
      mojo.internal.StructField('arg_graphics_buffer', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('arg_stride', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ResponseParamsSpec, 'arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec, 'arc.mojom.ScreenCaptureSession_SetOutputBuffer_Params', [
      mojo.internal.StructField('arg_buffer_format', 0, 0, mojo.internal.bindings.gfx.mojom.BufferFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_format_modifier', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_graphics_buffer', 16, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('arg_stride', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBuffer_ResponseParamsSpec, 'arc.mojom.ScreenCaptureSession_SetOutputBuffer_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.arc.mojom.ScreenCaptureSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.ScreenCaptureSessionRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ScreenCaptureSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.ScreenCaptureSessionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.ScreenCaptureSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setOutputBufferDeprecated(arg_graphics_buffer, arg_stride) {
    return this.$.setOutputBufferDeprecated(arg_graphics_buffer, arg_stride);
  }
  setOutputBuffer(arg_graphics_buffer, arg_buffer_format, arg_buffer_format_modifier, arg_stride) {
    return this.$.setOutputBuffer(arg_graphics_buffer, arg_buffer_format, arg_buffer_format_modifier, arg_stride);
  }
};

mojo.internal.bindings.arc.mojom.ScreenCaptureSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.ScreenCaptureSession', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  setOutputBufferDeprecated(arg_graphics_buffer, arg_stride) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec,
      mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ResponseParamsSpec,
      [arg_graphics_buffer, arg_stride],
      false);
  }

  setOutputBuffer(arg_graphics_buffer, arg_buffer_format, arg_buffer_format_modifier, arg_stride) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec,
      mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBuffer_ResponseParamsSpec,
      [arg_graphics_buffer, arg_buffer_format, arg_buffer_format_modifier, arg_stride],
      false);
  }

};

mojo.internal.bindings.arc.mojom.ScreenCaptureSession.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.ScreenCaptureSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ScreenCaptureSession',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.ScreenCaptureSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.ScreenCaptureSession', [
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
        
        // Try Method 0: SetOutputBufferDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOutputBufferDeprecated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetOutputBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOutputBuffer (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOutputBufferDeprecated');
          const result = this.impl.setOutputBufferDeprecated(params.arg_graphics_buffer, params.arg_stride);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBufferDeprecated_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetOutputBufferDeprecated FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOutputBuffer');
          const result = this.impl.setOutputBuffer(params.arg_graphics_buffer, params.arg_buffer_format, params.arg_buffer_format_modifier, params.arg_stride);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.ScreenCaptureSession_SetOutputBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetOutputBuffer FAILED:', e));
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

mojo.internal.bindings.arc.mojom.ScreenCaptureSessionReceiver = mojo.internal.bindings.arc.mojom.ScreenCaptureSessionReceiver;

mojo.internal.bindings.arc.mojom.ScreenCaptureSessionPtr = mojo.internal.bindings.arc.mojom.ScreenCaptureSessionRemote;
mojo.internal.bindings.arc.mojom.ScreenCaptureSessionRequest = mojo.internal.bindings.arc.mojom.ScreenCaptureSessionPendingReceiver;


// Interface: ScreenCaptureInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ScreenCaptureInstance_Init_ParamsSpec, 'arc.mojom.ScreenCaptureInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ScreenCaptureHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ScreenCaptureInstance_Init_ResponseParamsSpec, 'arc.mojom.ScreenCaptureInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.arc.mojom.ScreenCaptureInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ScreenCaptureInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.ScreenCaptureInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceRemoteCallHandler(this.proxy);
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
};

mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.ScreenCaptureInstance', [
      { explicit: 0 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.ScreenCaptureInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.ScreenCaptureInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

};

mojo.internal.bindings.arc.mojom.ScreenCaptureInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ScreenCaptureInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.ScreenCaptureInstance', [
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureInstance_Init_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.ScreenCaptureInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
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

mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceReceiver = mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceReceiver;

mojo.internal.bindings.arc.mojom.ScreenCaptureInstancePtr = mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceRemote;
mojo.internal.bindings.arc.mojom.ScreenCaptureInstanceRequest = mojo.internal.bindings.arc.mojom.ScreenCaptureInstancePendingReceiver;


// Interface: ScreenCaptureSessionNotifier
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec, 'arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ScreenCaptureSessionNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  forceUpdate() {
    return this.$.forceUpdate();
  }
};

mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.ScreenCaptureSessionNotifier', [
      { explicit: 0 },
    ]);
  }

  forceUpdate() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifier.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ScreenCaptureSessionNotifier',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.ScreenCaptureSessionNotifier', [
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
        
        // Try Method 0: ForceUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceUpdate (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifier_ForceUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceUpdate');
          const result = this.impl.forceUpdate();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierReceiver = mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierReceiver;

mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierPtr = mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierRemote;
mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierRequest = mojo.internal.bindings.arc.mojom.ScreenCaptureSessionNotifierPendingReceiver;

