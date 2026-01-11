// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/audio.mojom
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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};

mojo.internal.bindings.arc.mojom.AudioSwitchSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.AudioDeviceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.AudioHost = {};
mojo.internal.bindings.arc.mojom.AudioHost.$interfaceName = 'arc.mojom.AudioHost';
mojo.internal.bindings.arc.mojom.AudioHost_ShowVolumeControls_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AudioInstance = {};
mojo.internal.bindings.arc.mojom.AudioInstance.$interfaceName = 'arc.mojom.AudioInstance';
mojo.internal.bindings.arc.mojom.AudioInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AudioInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AudioInstance_NotifySwitchState_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AudioInstance_NotifyVolumeState_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AudioInstance_NotifySpatialAudioState_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AudioInstance_NotifyOutputDeviceInfo_ParamsSpec = { $: {} };

// Enum: AudioSwitch
mojo.internal.bindings.arc.mojom.AudioSwitch = {
  SW_HEADPHONE_INSERT: 2,
  SW_MICROPHONE_INSERT: 4,
};

// Enum: AudioDeviceType
mojo.internal.bindings.arc.mojom.AudioDeviceType = {
  HEADPHONE: 0,
  MIC: 1,
  USB: 2,
  BLUETOOTH: 3,
  BLUETOOTH_NB_MIC: 4,
  HDMI: 5,
  INTERNAL_SPEAKER: 6,
  INTERNAL_MIC: 7,
  FRONT_MIC: 8,
  REAR_MIC: 9,
  KEYBOARD_MIC: 10,
  HOTWORD: 11,
  LINEOUT: 12,
  POST_MIX_LOOPBACK: 13,
  POST_DSP_LOOPBACK: 14,
  ALSA_LOOPBACK: 15,
  OTHER: 16,
};

// Interface: AudioHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AudioHost_ShowVolumeControls_ParamsSpec, 'arc.mojom.AudioHost_ShowVolumeControls_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_ParamsSpec, 'arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_Params', [
      mojo.internal.StructField('arg_percent', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.AudioHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.AudioHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AudioHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.AudioHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.AudioHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  showVolumeControls() {
    return this.$.showVolumeControls();
  }
  onSystemVolumeUpdateRequest(arg_percent) {
    return this.$.onSystemVolumeUpdateRequest(arg_percent);
  }
};

mojo.internal.bindings.arc.mojom.AudioHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioHost', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  showVolumeControls() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.AudioHost_ShowVolumeControls_ParamsSpec,
      null,
      [],
      false);
  }

  onSystemVolumeUpdateRequest(arg_percent) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_ParamsSpec,
      null,
      [arg_percent],
      false);
  }

};

mojo.internal.bindings.arc.mojom.AudioHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.AudioHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AudioHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.AudioHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioHost', [
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
        
        // Try Method 0: ShowVolumeControls
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioHost_ShowVolumeControls_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowVolumeControls (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSystemVolumeUpdateRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSystemVolumeUpdateRequest (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioHost_ShowVolumeControls_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showVolumeControls');
          const result = this.impl.showVolumeControls();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSystemVolumeUpdateRequest');
          const result = this.impl.onSystemVolumeUpdateRequest(params.arg_percent);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.AudioHostReceiver = mojo.internal.bindings.arc.mojom.AudioHostReceiver;

mojo.internal.bindings.arc.mojom.AudioHostPtr = mojo.internal.bindings.arc.mojom.AudioHostRemote;
mojo.internal.bindings.arc.mojom.AudioHostRequest = mojo.internal.bindings.arc.mojom.AudioHostPendingReceiver;


// Interface: AudioInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AudioInstance_Init_ParamsSpec, 'arc.mojom.AudioInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AudioHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AudioInstance_Init_ResponseParamsSpec, 'arc.mojom.AudioInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AudioInstance_NotifySwitchState_ParamsSpec, 'arc.mojom.AudioInstance_NotifySwitchState_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AudioInstance_NotifyVolumeState_ParamsSpec, 'arc.mojom.AudioInstance_NotifyVolumeState_Params', [
      mojo.internal.StructField('arg_volume', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_muted', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AudioInstance_NotifySpatialAudioState_ParamsSpec, 'arc.mojom.AudioInstance_NotifySpatialAudioState_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AudioInstance_NotifyOutputDeviceInfo_ParamsSpec, 'arc.mojom.AudioInstance_NotifyOutputDeviceInfo_Params', [
      mojo.internal.StructField('arg_device_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.AudioDeviceTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.AudioInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.AudioInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AudioInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.AudioInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.AudioInstanceRemoteCallHandler(this.proxy);
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
  notifySwitchState(arg_state) {
    return this.$.notifySwitchState(arg_state);
  }
  notifyVolumeState(arg_volume, arg_muted) {
    return this.$.notifyVolumeState(arg_volume, arg_muted);
  }
  notifySpatialAudioState(arg_enabled) {
    return this.$.notifySpatialAudioState(arg_enabled);
  }
  notifyOutputDeviceInfo(arg_device_type) {
    return this.$.notifyOutputDeviceInfo(arg_device_type);
  }
};

mojo.internal.bindings.arc.mojom.AudioInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioInstance', [
      { explicit: 3 },
      { explicit: 0 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 5 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.AudioInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AudioInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

  notifySwitchState(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.AudioInstance_NotifySwitchState_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  notifyVolumeState(arg_volume, arg_muted) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.AudioInstance_NotifyVolumeState_ParamsSpec,
      null,
      [arg_volume, arg_muted],
      false);
  }

  notifySpatialAudioState(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.AudioInstance_NotifySpatialAudioState_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  notifyOutputDeviceInfo(arg_device_type) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.AudioInstance_NotifyOutputDeviceInfo_ParamsSpec,
      null,
      [arg_device_type],
      false);
  }

};

mojo.internal.bindings.arc.mojom.AudioInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.AudioInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AudioInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.AudioInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioInstance', [
      { explicit: 3 },
      { explicit: 0 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 5 },
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
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NotifySwitchState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioInstance_NotifySwitchState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifySwitchState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: NotifyVolumeState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioInstance_NotifyVolumeState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyVolumeState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: NotifySpatialAudioState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioInstance_NotifySpatialAudioState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifySpatialAudioState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: NotifyOutputDeviceInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioInstance_NotifyOutputDeviceInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyOutputDeviceInfo (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AudioInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioInstance_NotifySwitchState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySwitchState');
          const result = this.impl.notifySwitchState(params.arg_state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioInstance_NotifyVolumeState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyVolumeState');
          const result = this.impl.notifyVolumeState(params.arg_volume, params.arg_muted);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioInstance_NotifySpatialAudioState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySpatialAudioState');
          const result = this.impl.notifySpatialAudioState(params.arg_enabled);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AudioInstance_NotifyOutputDeviceInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOutputDeviceInfo');
          const result = this.impl.notifyOutputDeviceInfo(params.arg_device_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.AudioInstanceReceiver = mojo.internal.bindings.arc.mojom.AudioInstanceReceiver;

mojo.internal.bindings.arc.mojom.AudioInstancePtr = mojo.internal.bindings.arc.mojom.AudioInstanceRemote;
mojo.internal.bindings.arc.mojom.AudioInstanceRequest = mojo.internal.bindings.arc.mojom.AudioInstancePendingReceiver;

