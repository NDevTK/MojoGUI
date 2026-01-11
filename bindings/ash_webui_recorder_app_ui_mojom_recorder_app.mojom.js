// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/recorder_app_ui/mojom/recorder_app.mojom
 // Module: ash.recorder_app.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.recorder_app = mojo.internal.bindings.ash.recorder_app || {};
mojo.internal.bindings.ash.recorder_app.mojom = mojo.internal.bindings.ash.recorder_app.mojom || {};
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.on_device_model = mojo.internal.bindings.on_device_model || {};

mojo.internal.bindings.ash.recorder_app.mojom.ModelStateTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.recorder_app.mojom.ModelStateSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.ModelInfoSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.MicrophoneInfoSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.LangPackInfoSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitor = {};
mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitor.$interfaceName = 'ash.recorder_app.mojom.ModelStateMonitor';
mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitor_Update_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitor = {};
mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitor.$interfaceName = 'ash.recorder_app.mojom.QuietModeMonitor';
mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitor_Update_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler = {};
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler.$interfaceName = 'ash.recorder_app.mojom.PageHandler';
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetModelInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetModelInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadModel_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadModel_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_FormatModelInput_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_FormatModelInput_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddModelMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddModelMonitor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_InstallSoda_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_InstallSoda_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_OpenAiFeedbackDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_SetQuietMode_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_RecordSpeakerLabelConsent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ResponseParamsSpec = { $: {} };

// Enum: ModelStateType
mojo.internal.bindings.ash.recorder_app.mojom.ModelStateType = {
  kUnavailable: 0,
  kNotInstalled: 1,
  kInstalling: 2,
  kInstalled: 3,
  kError: 4,
  kNeedsReboot: 5,
};

// Struct: ModelState
mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.ModelStateSpec, 'ash.recorder_app.mojom.ModelState', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ash.recorder_app.mojom.ModelStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_progress_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_progress_$value', originalFieldName: 'arg_progress' }),
      mojo.internal.StructField('arg_progress_$value', 9, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_progress_$flag', originalFieldName: 'arg_progress' }),
    ],
    [[0, 24]]);

// Struct: ModelInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.ModelInfoSpec, 'ash.recorder_app.mojom.ModelInfo', [
      mojo.internal.StructField('arg_model_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_token_limit', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_large_model', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MicrophoneInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.MicrophoneInfoSpec, 'ash.recorder_app.mojom.MicrophoneInfo', [
      mojo.internal.StructField('arg_is_default', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_internal', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LangPackInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.LangPackInfoSpec, 'ash.recorder_app.mojom.LangPackInfo', [
      mojo.internal.StructField('arg_language_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_name', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_gen_ai_supported', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_speaker_label_supported', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ModelStateMonitor
mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitor_Update_ParamsSpec, 'ash.recorder_app.mojom.ModelStateMonitor_Update_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.recorder_app.mojom.ModelStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.recorder_app.mojom.ModelStateMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(arg_state) {
    return this.$.update(arg_state);
  }
};

mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ModelStateMonitor', [
      { explicit: null },
    ]);
  }

  update(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitor_Update_ParamsSpec,
      null,
      [arg_state],
      false);
  }

};

mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitor.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.recorder_app.mojom.ModelStateMonitor',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ModelStateMonitor', [
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
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitor_Update_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitor_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.arg_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorReceiver = mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorReceiver;

mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorPtr = mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorRemote;
mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorRequest = mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorPendingReceiver;


// Interface: QuietModeMonitor
mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitor_Update_ParamsSpec, 'ash.recorder_app.mojom.QuietModeMonitor_Update_Params', [
      mojo.internal.StructField('arg_in_quiet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorRemote = class {
  static get $interfaceName() {
    return 'ash.recorder_app.mojom.QuietModeMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  update(arg_in_quiet_mode) {
    return this.$.update(arg_in_quiet_mode);
  }
};

mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('QuietModeMonitor', [
      { explicit: null },
    ]);
  }

  update(arg_in_quiet_mode) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitor_Update_ParamsSpec,
      null,
      [arg_in_quiet_mode],
      false);
  }

};

mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitor.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.recorder_app.mojom.QuietModeMonitor',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('QuietModeMonitor', [
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
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitor_Update_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitor_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.arg_in_quiet_mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorReceiver = mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorReceiver;

mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorPtr = mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorRemote;
mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorRequest = mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetModelInfo_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetModelInfo_Params', [
      mojo.internal.StructField('arg_feature', 0, 0, mojo.internal.bindings.on_device_model.mojom.FormatFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetModelInfo_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetModelInfo_ResponseParams', [
      mojo.internal.StructField('arg_model_info', 0, 0, mojo.internal.bindings.ash.recorder_app.mojom.ModelInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadModel_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_LoadModel_Params', [
      mojo.internal.StructField('arg_model_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_model', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.on_device_model.mojom.OnDeviceModelRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadModel_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_LoadModel_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.on_device_model.mojom.LoadModelResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_FormatModelInput_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_FormatModelInput_Params', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_feature', 8, 0, mojo.internal.bindings.on_device_model.mojom.FormatFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fields', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_FormatModelInput_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_FormatModelInput_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_Params', [
      mojo.internal.StructField('arg_safety_feature', 0, 0, mojo.internal.bindings.on_device_model.mojom.SafetyFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_safety_info', 16, 0, mojo.internal.bindings.on_device_model.mojom.SafetyInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ResponseParams', [
      mojo.internal.StructField('arg_is_safe', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddModelMonitor_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_AddModelMonitor_Params', [
      mojo.internal.StructField('arg_model_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_monitor', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddModelMonitor_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_AddModelMonitor_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.recorder_app.mojom.ModelStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ResponseParams', [
      mojo.internal.StructField('arg_lang_packs', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.recorder_app.mojom.LangPackInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ResponseParams', [
      mojo.internal.StructField('arg_language_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_AddSodaMonitor_Params', [
      mojo.internal.StructField('arg_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_monitor', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.recorder_app.mojom.ModelStateMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.recorder_app.mojom.ModelStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_InstallSoda_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_InstallSoda_Params', [
      mojo.internal.StructField('arg_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_InstallSoda_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_InstallSoda_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_Params', [
      mojo.internal.StructField('arg_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_soda_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_soda_recognizer', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_OpenAiFeedbackDialog_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_OpenAiFeedbackDialog_Params', [
      mojo.internal.StructField('arg_description_template', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_Params', [
      mojo.internal.StructField('arg_source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.ash.recorder_app.mojom.MicrophoneInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_Params', [
      mojo.internal.StructField('arg_monitor', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.recorder_app.mojom.QuietModeMonitorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ResponseParams', [
      mojo.internal.StructField('arg_in_quiet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_SetQuietMode_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_SetQuietMode_Params', [
      mojo.internal.StructField('arg_quiet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ResponseParams', [
      mojo.internal.StructField('arg_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_RecordSpeakerLabelConsent_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_RecordSpeakerLabelConsent_Params', [
      mojo.internal.StructField('arg_consent_description_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_consent_confirmation_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_consent_given', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ParamsSpec, 'ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ResponseParamsSpec, 'ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ResponseParams', [
      mojo.internal.StructField('arg_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.recorder_app.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.recorder_app.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.recorder_app.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.recorder_app.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getModelInfo(arg_feature) {
    return this.$.getModelInfo(arg_feature);
  }
  loadModel(arg_model_id, arg_model) {
    return this.$.loadModel(arg_model_id, arg_model);
  }
  formatModelInput(arg_uuid, arg_feature, arg_fields) {
    return this.$.formatModelInput(arg_uuid, arg_feature, arg_fields);
  }
  validateSafetyResult(arg_safety_feature, arg_text, arg_safety_info) {
    return this.$.validateSafetyResult(arg_safety_feature, arg_text, arg_safety_info);
  }
  addModelMonitor(arg_model_id, arg_monitor) {
    return this.$.addModelMonitor(arg_model_id, arg_monitor);
  }
  getAvailableLangPacks() {
    return this.$.getAvailableLangPacks();
  }
  getDefaultLanguage() {
    return this.$.getDefaultLanguage();
  }
  addSodaMonitor(arg_language, arg_monitor) {
    return this.$.addSodaMonitor(arg_language, arg_monitor);
  }
  installSoda(arg_language) {
    return this.$.installSoda(arg_language);
  }
  loadSpeechRecognizer(arg_language, arg_soda_client, arg_soda_recognizer) {
    return this.$.loadSpeechRecognizer(arg_language, arg_soda_client, arg_soda_recognizer);
  }
  openAiFeedbackDialog(arg_description_template) {
    return this.$.openAiFeedbackDialog(arg_description_template);
  }
  getMicrophoneInfo(arg_source_id) {
    return this.$.getMicrophoneInfo(arg_source_id);
  }
  addQuietModeMonitor(arg_monitor) {
    return this.$.addQuietModeMonitor(arg_monitor);
  }
  setQuietMode(arg_quiet_mode) {
    return this.$.setQuietMode(arg_quiet_mode);
  }
  canUseSpeakerLabel() {
    return this.$.canUseSpeakerLabel();
  }
  recordSpeakerLabelConsent(arg_consent_given, arg_consent_description_names, arg_consent_confirmation_name) {
    return this.$.recordSpeakerLabelConsent(arg_consent_given, arg_consent_description_names, arg_consent_confirmation_name);
  }
  canCaptureSystemAudioWithLoopback() {
    return this.$.canCaptureSystemAudioWithLoopback();
  }
};

mojo.internal.bindings.ash.recorder_app.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getModelInfo(arg_feature) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetModelInfo_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetModelInfo_ResponseParamsSpec,
      [arg_feature],
      false);
  }

  loadModel(arg_model_id, arg_model) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadModel_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadModel_ResponseParamsSpec,
      [arg_model_id, arg_model],
      false);
  }

  formatModelInput(arg_uuid, arg_feature, arg_fields) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_FormatModelInput_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_FormatModelInput_ResponseParamsSpec,
      [arg_uuid, arg_feature, arg_fields],
      false);
  }

  validateSafetyResult(arg_safety_feature, arg_text, arg_safety_info) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ResponseParamsSpec,
      [arg_safety_feature, arg_text, arg_safety_info],
      false);
  }

  addModelMonitor(arg_model_id, arg_monitor) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddModelMonitor_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddModelMonitor_ResponseParamsSpec,
      [arg_model_id, arg_monitor],
      false);
  }

  getAvailableLangPacks() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ResponseParamsSpec,
      [],
      false);
  }

  getDefaultLanguage() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ResponseParamsSpec,
      [],
      false);
  }

  addSodaMonitor(arg_language, arg_monitor) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ResponseParamsSpec,
      [arg_language, arg_monitor],
      false);
  }

  installSoda(arg_language) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_InstallSoda_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_InstallSoda_ResponseParamsSpec,
      [arg_language],
      false);
  }

  loadSpeechRecognizer(arg_language, arg_soda_client, arg_soda_recognizer) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ResponseParamsSpec,
      [arg_language, arg_soda_client, arg_soda_recognizer],
      false);
  }

  openAiFeedbackDialog(arg_description_template) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_OpenAiFeedbackDialog_ParamsSpec,
      null,
      [arg_description_template],
      false);
  }

  getMicrophoneInfo(arg_source_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ResponseParamsSpec,
      [arg_source_id],
      false);
  }

  addQuietModeMonitor(arg_monitor) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ResponseParamsSpec,
      [arg_monitor],
      false);
  }

  setQuietMode(arg_quiet_mode) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_SetQuietMode_ParamsSpec,
      null,
      [arg_quiet_mode],
      false);
  }

  canUseSpeakerLabel() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ResponseParamsSpec,
      [],
      false);
  }

  recordSpeakerLabelConsent(arg_consent_given, arg_consent_description_names, arg_consent_confirmation_name) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_RecordSpeakerLabelConsent_ParamsSpec,
      null,
      [arg_consent_given, arg_consent_description_names, arg_consent_confirmation_name],
      false);
  }

  canCaptureSystemAudioWithLoopback() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ParamsSpec,
      mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.recorder_app.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.recorder_app.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.recorder_app.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.recorder_app.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: GetModelInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetModelInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetModelInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: LoadModel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadModel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadModel (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: FormatModelInput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_FormatModelInput_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FormatModelInput (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ValidateSafetyResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ValidateSafetyResult (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AddModelMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddModelMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddModelMonitor (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetAvailableLangPacks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAvailableLangPacks (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetDefaultLanguage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDefaultLanguage (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AddSodaMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddSodaMonitor (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: InstallSoda
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_InstallSoda_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallSoda (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: LoadSpeechRecognizer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadSpeechRecognizer (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OpenAiFeedbackDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_OpenAiFeedbackDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenAiFeedbackDialog (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetMicrophoneInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMicrophoneInfo (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: AddQuietModeMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddQuietModeMonitor (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetQuietMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_SetQuietMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetQuietMode (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: CanUseSpeakerLabel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanUseSpeakerLabel (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: RecordSpeakerLabelConsent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_RecordSpeakerLabelConsent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordSpeakerLabelConsent (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: CanCaptureSystemAudioWithLoopback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanCaptureSystemAudioWithLoopback (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetModelInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getModelInfo');
          const result = this.impl.getModelInfo(params.arg_feature);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetModelInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetModelInfo FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadModel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadModel');
          const result = this.impl.loadModel(params.arg_model_id, params.arg_model);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadModel_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadModel FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_FormatModelInput_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.formatModelInput');
          const result = this.impl.formatModelInput(params.arg_uuid, params.arg_feature, params.arg_fields);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_FormatModelInput_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FormatModelInput FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.validateSafetyResult');
          const result = this.impl.validateSafetyResult(params.arg_safety_feature, params.arg_text, params.arg_safety_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_ValidateSafetyResult_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ValidateSafetyResult FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddModelMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addModelMonitor');
          const result = this.impl.addModelMonitor(params.arg_model_id, params.arg_monitor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddModelMonitor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddModelMonitor FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAvailableLangPacks');
          const result = this.impl.getAvailableLangPacks();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetAvailableLangPacks_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAvailableLangPacks FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDefaultLanguage');
          const result = this.impl.getDefaultLanguage();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetDefaultLanguage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDefaultLanguage FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addSodaMonitor');
          const result = this.impl.addSodaMonitor(params.arg_language, params.arg_monitor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddSodaMonitor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddSodaMonitor FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_InstallSoda_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installSoda');
          const result = this.impl.installSoda(params.arg_language);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_InstallSoda_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InstallSoda FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadSpeechRecognizer');
          const result = this.impl.loadSpeechRecognizer(params.arg_language, params.arg_soda_client, params.arg_soda_recognizer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_LoadSpeechRecognizer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadSpeechRecognizer FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_OpenAiFeedbackDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openAiFeedbackDialog');
          const result = this.impl.openAiFeedbackDialog(params.arg_description_template);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMicrophoneInfo');
          const result = this.impl.getMicrophoneInfo(params.arg_source_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_GetMicrophoneInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMicrophoneInfo FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addQuietModeMonitor');
          const result = this.impl.addQuietModeMonitor(params.arg_monitor);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_AddQuietModeMonitor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddQuietModeMonitor FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_SetQuietMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setQuietMode');
          const result = this.impl.setQuietMode(params.arg_quiet_mode);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.canUseSpeakerLabel');
          const result = this.impl.canUseSpeakerLabel();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanUseSpeakerLabel_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CanUseSpeakerLabel FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_RecordSpeakerLabelConsent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordSpeakerLabelConsent');
          const result = this.impl.recordSpeakerLabelConsent(params.arg_consent_given, params.arg_consent_description_names, params.arg_consent_confirmation_name);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.canCaptureSystemAudioWithLoopback');
          const result = this.impl.canCaptureSystemAudioWithLoopback();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.recorder_app.mojom.PageHandler_CanCaptureSystemAudioWithLoopback_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CanCaptureSystemAudioWithLoopback FAILED:', e));
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

mojo.internal.bindings.ash.recorder_app.mojom.PageHandlerReceiver = mojo.internal.bindings.ash.recorder_app.mojom.PageHandlerReceiver;

mojo.internal.bindings.ash.recorder_app.mojom.PageHandlerPtr = mojo.internal.bindings.ash.recorder_app.mojom.PageHandlerRemote;
mojo.internal.bindings.ash.recorder_app.mojom.PageHandlerRequest = mojo.internal.bindings.ash.recorder_app.mojom.PageHandlerPendingReceiver;

