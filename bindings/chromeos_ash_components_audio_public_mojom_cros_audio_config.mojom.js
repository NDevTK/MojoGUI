// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/audio/public/mojom/cros_audio_config.mojom
// Module: ash.audio_config.mojom

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
var ash = ash || {};
ash.audio_config = ash.audio_config || {};
ash.audio_config.mojom = ash.audio_config.mojom || {};

ash.audio_config.mojom.AudioDeviceTypeSpec = { $: mojo.internal.Enum() };
ash.audio_config.mojom.AudioEffectStateSpec = { $: mojo.internal.Enum() };
ash.audio_config.mojom.MuteStateSpec = { $: mojo.internal.Enum() };
ash.audio_config.mojom.AudioEffectTypeSpec = { $: mojo.internal.Enum() };
ash.audio_config.mojom.VoiceIsolationUIAppearanceSpec = { $: {} };
ash.audio_config.mojom.AudioDeviceSpec = { $: {} };
ash.audio_config.mojom.AudioSystemPropertiesSpec = { $: {} };
ash.audio_config.mojom.AudioSystemPropertiesObserver = {};
ash.audio_config.mojom.AudioSystemPropertiesObserver.$interfaceName = 'ash.audio_config.mojom.AudioSystemPropertiesObserver';
ash.audio_config.mojom.AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec = { $: {} };
ash.audio_config.mojom.CrosAudioConfig = {};
ash.audio_config.mojom.CrosAudioConfig.$interfaceName = 'ash.audio_config.mojom.CrosAudioConfig';
ash.audio_config.mojom.CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec = { $: {} };
ash.audio_config.mojom.CrosAudioConfig_SetOutputMuted_ParamsSpec = { $: {} };
ash.audio_config.mojom.CrosAudioConfig_SetOutputVolumePercent_ParamsSpec = { $: {} };
ash.audio_config.mojom.CrosAudioConfig_SetInputGainPercent_ParamsSpec = { $: {} };
ash.audio_config.mojom.CrosAudioConfig_SetActiveDevice_ParamsSpec = { $: {} };
ash.audio_config.mojom.CrosAudioConfig_SetInputMuted_ParamsSpec = { $: {} };
ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationEnabledChange_ParamsSpec = { $: {} };
ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationPreferredEffectChange_ParamsSpec = { $: {} };
ash.audio_config.mojom.CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec = { $: {} };
ash.audio_config.mojom.CrosAudioConfig_SetStyleTransferEnabled_ParamsSpec = { $: {} };
ash.audio_config.mojom.CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec = { $: {} };
ash.audio_config.mojom.CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec = { $: {} };
ash.audio_config.mojom.CrosAudioConfig_SetSpatialAudioEnabled_ParamsSpec = { $: {} };

// Enum: AudioDeviceType
ash.audio_config.mojom.AudioDeviceType = {
  kHeadphone: 0,
  kMic: 1,
  kUsb: 2,
  kBluetooth: 3,
  kBluetoothNbMic: 4,
  kHdmi: 5,
  kInternalSpeaker: 6,
  kInternalMic: 7,
  kFrontMic: 8,
  kRearMic: 9,
  kKeyboardMic: 10,
  kHotword: 11,
  kPostDspLoopback: 12,
  kPostMixLoopback: 13,
  kLineout: 14,
  kAlsaLoopback: 15,
  kOther: 16,
};

// Enum: AudioEffectState
ash.audio_config.mojom.AudioEffectState = {
  kNotSupported: 0,
  kNotEnabled: 1,
  kEnabled: 2,
};

// Enum: MuteState
ash.audio_config.mojom.MuteState = {
  kNotMuted: 0,
  kMutedByUser: 1,
  kMutedByPolicy: 2,
  kMutedExternally: 3,
};

// Enum: AudioEffectType
ash.audio_config.mojom.AudioEffectType = {
  kNone: 0,
  kNoiseCancellation: 1,
  kHfpMicSr: 2,
  kStyleTransfer: 4,
  kBeamforming: 8,
};

// Struct: VoiceIsolationUIAppearance
mojo.internal.Struct(
    ash.audio_config.mojom.VoiceIsolationUIAppearanceSpec, 'ash.audio_config.mojom.VoiceIsolationUIAppearance', [
      mojo.internal.StructField('toggle_type', 0, 0, ash.audio_config.mojom.AudioEffectTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('effect_mode_options', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('show_effect_fallback_message', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AudioDevice
mojo.internal.Struct(
    ash.audio_config.mojom.AudioDeviceSpec, 'ash.audio_config.mojom.AudioDevice', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_type', 16, 0, ash.audio_config.mojom.AudioDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('noise_cancellation_state', 24, 0, ash.audio_config.mojom.AudioEffectStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('style_transfer_state', 32, 0, ash.audio_config.mojom.AudioEffectStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('force_respect_ui_gains_state', 40, 0, ash.audio_config.mojom.AudioEffectStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hfp_mic_sr_state', 48, 0, ash.audio_config.mojom.AudioEffectStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('spatial_audio_state', 56, 0, ash.audio_config.mojom.AudioEffectStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_active', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: AudioSystemProperties
mojo.internal.Struct(
    ash.audio_config.mojom.AudioSystemPropertiesSpec, 'ash.audio_config.mojom.AudioSystemProperties', [
      mojo.internal.StructField('output_devices', 0, 0, mojo.internal.Array(ash.audio_config.mojom.AudioDeviceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('output_mute_state', 8, 0, ash.audio_config.mojom.MuteStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_devices', 16, 0, mojo.internal.Array(ash.audio_config.mojom.AudioDeviceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('input_mute_state', 24, 0, ash.audio_config.mojom.MuteStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('voice_isolation_ui_appearance', 32, 0, ash.audio_config.mojom.VoiceIsolationUIAppearanceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_volume_percent', 40, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('input_gain_percent', 41, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: AudioSystemPropertiesObserver
mojo.internal.Struct(
    ash.audio_config.mojom.AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec, 'ash.audio_config.mojom.AudioSystemPropertiesObserver_OnPropertiesUpdated_Params', [
      mojo.internal.StructField('properties', 0, 0, ash.audio_config.mojom.AudioSystemPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.audio_config.mojom.AudioSystemPropertiesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.audio_config.mojom.AudioSystemPropertiesObserverRemote = class {
  static get $interfaceName() {
    return 'ash.audio_config.mojom.AudioSystemPropertiesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.audio_config.mojom.AudioSystemPropertiesObserverPendingReceiver,
      handle);
    this.$ = new ash.audio_config.mojom.AudioSystemPropertiesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.audio_config.mojom.AudioSystemPropertiesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioSystemPropertiesObserver', [
      { explicit: null },
    ]);
  }

  onPropertiesUpdated(properties) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.audio_config.mojom.AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec,
      null,
      [properties],
      false);
  }

};

ash.audio_config.mojom.AudioSystemPropertiesObserver.getRemote = function() {
  let remote = new ash.audio_config.mojom.AudioSystemPropertiesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.audio_config.mojom.AudioSystemPropertiesObserver',
    'context');
  return remote.$;
};

ash.audio_config.mojom.AudioSystemPropertiesObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioSystemPropertiesObserver', [
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
        
        // Try Method 0: OnPropertiesUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPropertiesUpdated (0)');
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
          const params = decoder.decodeStructInline(ash.audio_config.mojom.AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPropertiesUpdated');
          const result = this.impl.onPropertiesUpdated(params.properties);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.audio_config.mojom.AudioSystemPropertiesObserverReceiver = ash.audio_config.mojom.AudioSystemPropertiesObserverReceiver;

ash.audio_config.mojom.AudioSystemPropertiesObserverPtr = ash.audio_config.mojom.AudioSystemPropertiesObserverRemote;
ash.audio_config.mojom.AudioSystemPropertiesObserverRequest = ash.audio_config.mojom.AudioSystemPropertiesObserverPendingReceiver;


// Interface: CrosAudioConfig
mojo.internal.Struct(
    ash.audio_config.mojom.CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec, 'ash.audio_config.mojom.CrosAudioConfig_ObserveAudioSystemProperties_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.audio_config.mojom.AudioSystemPropertiesObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.audio_config.mojom.CrosAudioConfig_SetOutputMuted_ParamsSpec, 'ash.audio_config.mojom.CrosAudioConfig_SetOutputMuted_Params', [
      mojo.internal.StructField('muted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.audio_config.mojom.CrosAudioConfig_SetOutputVolumePercent_ParamsSpec, 'ash.audio_config.mojom.CrosAudioConfig_SetOutputVolumePercent_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.audio_config.mojom.CrosAudioConfig_SetInputGainPercent_ParamsSpec, 'ash.audio_config.mojom.CrosAudioConfig_SetInputGainPercent_Params', [
      mojo.internal.StructField('gain', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.audio_config.mojom.CrosAudioConfig_SetActiveDevice_ParamsSpec, 'ash.audio_config.mojom.CrosAudioConfig_SetActiveDevice_Params', [
      mojo.internal.StructField('device', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.audio_config.mojom.CrosAudioConfig_SetInputMuted_ParamsSpec, 'ash.audio_config.mojom.CrosAudioConfig_SetInputMuted_Params', [
      mojo.internal.StructField('muted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationEnabledChange_ParamsSpec, 'ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationEnabledChange_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationPreferredEffectChange_ParamsSpec, 'ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationPreferredEffectChange_Params', [
      mojo.internal.StructField('preferred_effect', 0, 0, ash.audio_config.mojom.AudioEffectTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.audio_config.mojom.CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec, 'ash.audio_config.mojom.CrosAudioConfig_SetNoiseCancellationEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.audio_config.mojom.CrosAudioConfig_SetStyleTransferEnabled_ParamsSpec, 'ash.audio_config.mojom.CrosAudioConfig_SetStyleTransferEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.audio_config.mojom.CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec, 'ash.audio_config.mojom.CrosAudioConfig_SetForceRespectUiGainsEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.audio_config.mojom.CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec, 'ash.audio_config.mojom.CrosAudioConfig_SetHfpMicSrEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.audio_config.mojom.CrosAudioConfig_SetSpatialAudioEnabled_ParamsSpec, 'ash.audio_config.mojom.CrosAudioConfig_SetSpatialAudioEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.audio_config.mojom.CrosAudioConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.audio_config.mojom.CrosAudioConfigRemote = class {
  static get $interfaceName() {
    return 'ash.audio_config.mojom.CrosAudioConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.audio_config.mojom.CrosAudioConfigPendingReceiver,
      handle);
    this.$ = new ash.audio_config.mojom.CrosAudioConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.audio_config.mojom.CrosAudioConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosAudioConfig', [
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

  observeAudioSystemProperties(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec,
      null,
      [observer],
      false);
  }

  setOutputMuted(muted) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetOutputMuted_ParamsSpec,
      null,
      [muted],
      false);
  }

  setOutputVolumePercent(volume) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetOutputVolumePercent_ParamsSpec,
      null,
      [volume],
      false);
  }

  setInputGainPercent(gain) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetInputGainPercent_ParamsSpec,
      null,
      [gain],
      false);
  }

  setActiveDevice(device) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetActiveDevice_ParamsSpec,
      null,
      [device],
      false);
  }

  setInputMuted(muted) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetInputMuted_ParamsSpec,
      null,
      [muted],
      false);
  }

  recordVoiceIsolationEnabledChange() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationEnabledChange_ParamsSpec,
      null,
      [],
      false);
  }

  recordVoiceIsolationPreferredEffectChange(preferred_effect) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationPreferredEffectChange_ParamsSpec,
      null,
      [preferred_effect],
      false);
  }

  setNoiseCancellationEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setStyleTransferEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetStyleTransferEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setForceRespectUiGainsEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setHfpMicSrEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setSpatialAudioEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetSpatialAudioEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

};

ash.audio_config.mojom.CrosAudioConfig.getRemote = function() {
  let remote = new ash.audio_config.mojom.CrosAudioConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.audio_config.mojom.CrosAudioConfig',
    'context');
  return remote.$;
};

ash.audio_config.mojom.CrosAudioConfigReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosAudioConfig', [
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
        
        // Try Method 0: ObserveAudioSystemProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveAudioSystemProperties (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetOutputMuted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetOutputMuted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOutputMuted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetOutputVolumePercent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetOutputVolumePercent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOutputVolumePercent (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetInputGainPercent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetInputGainPercent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInputGainPercent (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetActiveDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetActiveDevice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetActiveDevice (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetInputMuted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetInputMuted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInputMuted (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RecordVoiceIsolationEnabledChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationEnabledChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordVoiceIsolationEnabledChange (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RecordVoiceIsolationPreferredEffectChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationPreferredEffectChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordVoiceIsolationPreferredEffectChange (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetNoiseCancellationEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNoiseCancellationEnabled (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetStyleTransferEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetStyleTransferEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetStyleTransferEnabled (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetForceRespectUiGainsEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetForceRespectUiGainsEnabled (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetHfpMicSrEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHfpMicSrEnabled (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetSpatialAudioEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetSpatialAudioEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSpatialAudioEnabled (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeAudioSystemProperties');
          const result = this.impl.observeAudioSystemProperties(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetOutputMuted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOutputMuted');
          const result = this.impl.setOutputMuted(params.muted);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetOutputVolumePercent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOutputVolumePercent');
          const result = this.impl.setOutputVolumePercent(params.volume);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetInputGainPercent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInputGainPercent');
          const result = this.impl.setInputGainPercent(params.gain);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetActiveDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setActiveDevice');
          const result = this.impl.setActiveDevice(params.device);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetInputMuted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInputMuted');
          const result = this.impl.setInputMuted(params.muted);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationEnabledChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordVoiceIsolationEnabledChange');
          const result = this.impl.recordVoiceIsolationEnabledChange();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationPreferredEffectChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordVoiceIsolationPreferredEffectChange');
          const result = this.impl.recordVoiceIsolationPreferredEffectChange(params.preferred_effect);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNoiseCancellationEnabled');
          const result = this.impl.setNoiseCancellationEnabled(params.enabled);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetStyleTransferEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setStyleTransferEnabled');
          const result = this.impl.setStyleTransferEnabled(params.enabled);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setForceRespectUiGainsEnabled');
          const result = this.impl.setForceRespectUiGainsEnabled(params.enabled);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHfpMicSrEnabled');
          const result = this.impl.setHfpMicSrEnabled(params.enabled);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.audio_config.mojom.CrosAudioConfig_SetSpatialAudioEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSpatialAudioEnabled');
          const result = this.impl.setSpatialAudioEnabled(params.enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.audio_config.mojom.CrosAudioConfigReceiver = ash.audio_config.mojom.CrosAudioConfigReceiver;

ash.audio_config.mojom.CrosAudioConfigPtr = ash.audio_config.mojom.CrosAudioConfigRemote;
ash.audio_config.mojom.CrosAudioConfigRequest = ash.audio_config.mojom.CrosAudioConfigPendingReceiver;

