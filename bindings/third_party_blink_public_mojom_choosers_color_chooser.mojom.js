// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/choosers/color_chooser.mojom
 // Module: blink.mojom

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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};

mojo.internal.bindings.blink.mojom.ColorSuggestionSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ColorChooserFactory = {};
mojo.internal.bindings.blink.mojom.ColorChooserFactorySpec = { $ : {} };
mojo.internal.bindings.blink.mojom.ColorChooserFactory.$interfaceName = 'blink.mojom.ColorChooserFactory';
mojo.internal.bindings.blink.mojom.ColorChooserFactory_OpenColorChooser_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ColorChooser = {};
mojo.internal.bindings.blink.mojom.ColorChooserSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.ColorChooser.$interfaceName = 'blink.mojom.ColorChooser';
mojo.internal.bindings.blink.mojom.ColorChooser_SetSelectedColor_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ColorChooserClient = {};
mojo.internal.bindings.blink.mojom.ColorChooserClientSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.ColorChooserClient.$interfaceName = 'blink.mojom.ColorChooserClient';
mojo.internal.bindings.blink.mojom.ColorChooserClient_DidChooseColor_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EyeDropperChooser = {};
mojo.internal.bindings.blink.mojom.EyeDropperChooserSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.EyeDropperChooser.$interfaceName = 'blink.mojom.EyeDropperChooser';
mojo.internal.bindings.blink.mojom.EyeDropperChooser_Choose_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EyeDropperChooser_Choose_ResponseParamsSpec = { $: {} };

// Struct: ColorSuggestion
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ColorSuggestionSpec, 'blink.mojom.ColorSuggestion', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_color', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ColorChooserFactory
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ColorChooserFactory_OpenColorChooser_ParamsSpec, 'blink.mojom.ColorChooserFactory_OpenColorChooser_Params', [
      mojo.internal.StructField('arg_chooser', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.ColorChooserRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.ColorChooserClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_suggestions', 16, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.ColorSuggestionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_color', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.bindings.blink.mojom.ColorChooserFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.ColorChooserFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ColorChooserFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.ColorChooserFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.ColorChooserFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  openColorChooser(arg_chooser, arg_client, arg_color, arg_suggestions) {
    return this.$.openColorChooser(arg_chooser, arg_client, arg_color, arg_suggestions);
  }
};

mojo.internal.bindings.blink.mojom.ColorChooserFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ColorChooserFactory', [
      { explicit: null },
    ]);
  }

  openColorChooser(arg_chooser, arg_client, arg_color, arg_suggestions) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.ColorChooserFactory_OpenColorChooser_ParamsSpec,
      null,
      [arg_chooser, arg_client, arg_color, arg_suggestions],
      false);
  }

};

mojo.internal.bindings.blink.mojom.ColorChooserFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.ColorChooserFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ColorChooserFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.ColorChooserFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ColorChooserFactory', [
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
        
        // Try Method 0: OpenColorChooser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ColorChooserFactory_OpenColorChooser_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenColorChooser (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ColorChooserFactory_OpenColorChooser_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openColorChooser');
          const result = this.impl.openColorChooser(params.arg_chooser, params.arg_client, params.arg_color, params.arg_suggestions);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.ColorChooserFactoryReceiver = mojo.internal.bindings.blink.mojom.ColorChooserFactoryReceiver;

mojo.internal.bindings.blink.mojom.ColorChooserFactoryPtr = mojo.internal.bindings.blink.mojom.ColorChooserFactoryRemote;
mojo.internal.bindings.blink.mojom.ColorChooserFactoryRequest = mojo.internal.bindings.blink.mojom.ColorChooserFactoryPendingReceiver;


// Interface: ColorChooser
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ColorChooser_SetSelectedColor_ParamsSpec, 'blink.mojom.ColorChooser_SetSelectedColor_Params', [
      mojo.internal.StructField('arg_color', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.ColorChooserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.ColorChooserRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ColorChooser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.ColorChooserPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.ColorChooserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setSelectedColor(arg_color) {
    return this.$.setSelectedColor(arg_color);
  }
};

mojo.internal.bindings.blink.mojom.ColorChooserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ColorChooser', [
      { explicit: null },
    ]);
  }

  setSelectedColor(arg_color) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.ColorChooser_SetSelectedColor_ParamsSpec,
      null,
      [arg_color],
      false);
  }

};

mojo.internal.bindings.blink.mojom.ColorChooser.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.ColorChooserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ColorChooser',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.ColorChooserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ColorChooser', [
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
        
        // Try Method 0: SetSelectedColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ColorChooser_SetSelectedColor_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSelectedColor (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ColorChooser_SetSelectedColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSelectedColor');
          const result = this.impl.setSelectedColor(params.arg_color);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.ColorChooserReceiver = mojo.internal.bindings.blink.mojom.ColorChooserReceiver;

mojo.internal.bindings.blink.mojom.ColorChooserPtr = mojo.internal.bindings.blink.mojom.ColorChooserRemote;
mojo.internal.bindings.blink.mojom.ColorChooserRequest = mojo.internal.bindings.blink.mojom.ColorChooserPendingReceiver;


// Interface: ColorChooserClient
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ColorChooserClient_DidChooseColor_ParamsSpec, 'blink.mojom.ColorChooserClient_DidChooseColor_Params', [
      mojo.internal.StructField('arg_color', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.ColorChooserClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.ColorChooserClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ColorChooserClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.ColorChooserClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.ColorChooserClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didChooseColor(arg_color) {
    return this.$.didChooseColor(arg_color);
  }
};

mojo.internal.bindings.blink.mojom.ColorChooserClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ColorChooserClient', [
      { explicit: null },
    ]);
  }

  didChooseColor(arg_color) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.ColorChooserClient_DidChooseColor_ParamsSpec,
      null,
      [arg_color],
      false);
  }

};

mojo.internal.bindings.blink.mojom.ColorChooserClient.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.ColorChooserClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ColorChooserClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.ColorChooserClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ColorChooserClient', [
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
        
        // Try Method 0: DidChooseColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ColorChooserClient_DidChooseColor_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChooseColor (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ColorChooserClient_DidChooseColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChooseColor');
          const result = this.impl.didChooseColor(params.arg_color);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.ColorChooserClientReceiver = mojo.internal.bindings.blink.mojom.ColorChooserClientReceiver;

mojo.internal.bindings.blink.mojom.ColorChooserClientPtr = mojo.internal.bindings.blink.mojom.ColorChooserClientRemote;
mojo.internal.bindings.blink.mojom.ColorChooserClientRequest = mojo.internal.bindings.blink.mojom.ColorChooserClientPendingReceiver;


// Interface: EyeDropperChooser
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EyeDropperChooser_Choose_ParamsSpec, 'blink.mojom.EyeDropperChooser_Choose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EyeDropperChooser_Choose_ResponseParamsSpec, 'blink.mojom.EyeDropperChooser_Choose_ResponseParams', [
      mojo.internal.StructField('arg_color', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_success', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.EyeDropperChooserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.EyeDropperChooserRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EyeDropperChooser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.EyeDropperChooserPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.EyeDropperChooserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  choose() {
    return this.$.choose();
  }
};

mojo.internal.bindings.blink.mojom.EyeDropperChooserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.EyeDropperChooser', [
      { explicit: null },
    ]);
  }

  choose() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.EyeDropperChooser_Choose_ParamsSpec,
      mojo.internal.bindings.blink.mojom.EyeDropperChooser_Choose_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.EyeDropperChooser.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.EyeDropperChooserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EyeDropperChooser',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.EyeDropperChooserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.EyeDropperChooser', [
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
        
        // Try Method 0: Choose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EyeDropperChooser_Choose_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Choose (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EyeDropperChooser_Choose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.choose');
          const result = this.impl.choose();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.EyeDropperChooser_Choose_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Choose FAILED:', e));
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

mojo.internal.bindings.blink.mojom.EyeDropperChooserReceiver = mojo.internal.bindings.blink.mojom.EyeDropperChooserReceiver;

mojo.internal.bindings.blink.mojom.EyeDropperChooserPtr = mojo.internal.bindings.blink.mojom.EyeDropperChooserRemote;
mojo.internal.bindings.blink.mojom.EyeDropperChooserRequest = mojo.internal.bindings.blink.mojom.EyeDropperChooserPendingReceiver;

