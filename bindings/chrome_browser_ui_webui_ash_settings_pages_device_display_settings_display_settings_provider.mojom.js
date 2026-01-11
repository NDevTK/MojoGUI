// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/device/display_settings/display_settings_provider.mojom
 // Module: ash.settings.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.settings = mojo.internal.bindings.ash.settings || {};
mojo.internal.bindings.ash.settings.mojom = mojo.internal.bindings.ash.settings.mojom || {};

mojo.internal.bindings.ash.settings.mojom.DisplaySettingsTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsNightLightScheduleOptionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsOrientationOptionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsValueSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.TabletModeObserver = {};
mojo.internal.bindings.ash.settings.mojom.TabletModeObserverSpec = { $ : {} };
mojo.internal.bindings.ash.settings.mojom.TabletModeObserver.$interfaceName = 'ash.settings.mojom.TabletModeObserver';
mojo.internal.bindings.ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserver = {};
mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverSpec = { $ : {} };
mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserver.$interfaceName = 'ash.settings.mojom.DisplayConfigurationObserver';
mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserver = {};
mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverSpec = { $ : {} };
mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserver.$interfaceName = 'ash.settings.mojom.DisplayBrightnessSettingsObserver';
mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserver = {};
mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverSpec = { $ : {} };
mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserver.$interfaceName = 'ash.settings.mojom.AmbientLightSensorObserver';
mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider = {};
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderSpec = { $ : {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider.$interfaceName = 'ash.settings.mojom.DisplaySettingsProvider';
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec = { $: {} };

// Enum: DisplaySettingsType
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsType = {
  kResolution: 0,
  kRefreshRate: 1,
  kScaling: 2,
  kOrientation: 3,
  kOverscan: 4,
  kNightLight: 5,
  kNightLightSchedule: 6,
  kDisplayPage: 7,
  kMirrorMode: 8,
  kUnifiedMode: 9,
  kPrimaryDisplay: 10,
};

// Enum: DisplaySettingsNightLightScheduleOption
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsNightLightScheduleOption = {
  kNever: 0,
  kSunsetToSunrise: 1,
  kCustom: 2,
};

// Enum: DisplaySettingsOrientationOption
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsOrientationOption = {
  kAuto: 0,
  k0Degree: 1,
  k90Degree: 2,
  k180Degree: 3,
  k270Degree: 4,
};

// Struct: DisplaySettingsValue
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsValueSpec, 'ash.settings.mojom.DisplaySettingsValue', [
      mojo.internal.StructField('arg_display_id_$value', 0, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_display_id_$flag', originalFieldName: 'arg_display_id' }),
      mojo.internal.StructField('arg_orientation', 8, 0, mojo.internal.bindings.ash.settings.mojom.DisplaySettingsOrientationOptionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_night_light_schedule', 16, 0, mojo.internal.bindings.ash.settings.mojom.DisplaySettingsNightLightScheduleOptionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_internal_display_$flag', 24, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_internal_display_$value', originalFieldName: 'arg_is_internal_display' }),
      mojo.internal.StructField('arg_is_internal_display_$value', 24, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_internal_display_$flag', originalFieldName: 'arg_is_internal_display' }),
      mojo.internal.StructField('arg_display_id_$flag', 24, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_display_id_$value', originalFieldName: 'arg_display_id' }),
      mojo.internal.StructField('arg_night_light_status_$flag', 24, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_night_light_status_$value', originalFieldName: 'arg_night_light_status' }),
      mojo.internal.StructField('arg_night_light_status_$value', 24, 4, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_night_light_status_$flag', originalFieldName: 'arg_night_light_status' }),
      mojo.internal.StructField('arg_mirror_mode_status_$flag', 24, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_mirror_mode_status_$value', originalFieldName: 'arg_mirror_mode_status' }),
      mojo.internal.StructField('arg_mirror_mode_status_$value', 24, 6, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_mirror_mode_status_$flag', originalFieldName: 'arg_mirror_mode_status' }),
      mojo.internal.StructField('arg_unified_mode_status_$flag', 24, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_unified_mode_status_$value', originalFieldName: 'arg_unified_mode_status' }),
      mojo.internal.StructField('arg_unified_mode_status_$value', 25, 0, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_unified_mode_status_$flag', originalFieldName: 'arg_unified_mode_status' }),
    ],
    [[0, 40]]);

// Interface: TabletModeObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec, 'ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_Params', [
      mojo.internal.StructField('arg_is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.mojom.TabletModeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.TabletModeObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.TabletModeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.TabletModeObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.TabletModeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTabletModeChanged(arg_is_tablet_mode) {
    return this.$.onTabletModeChanged(arg_is_tablet_mode);
  }
};

mojo.internal.bindings.ash.settings.mojom.TabletModeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.settings.mojom.TabletModeObserver', [
      { explicit: null },
    ]);
  }

  onTabletModeChanged(arg_is_tablet_mode) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec,
      null,
      [arg_is_tablet_mode],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.TabletModeObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.TabletModeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.TabletModeObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.TabletModeObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.settings.mojom.TabletModeObserver', [
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
        
        // Try Method 0: OnTabletModeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTabletModeChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabletModeChanged');
          const result = this.impl.onTabletModeChanged(params.arg_is_tablet_mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.TabletModeObserverReceiver = mojo.internal.bindings.ash.settings.mojom.TabletModeObserverReceiver;

mojo.internal.bindings.ash.settings.mojom.TabletModeObserverPtr = mojo.internal.bindings.ash.settings.mojom.TabletModeObserverRemote;
mojo.internal.bindings.ash.settings.mojom.TabletModeObserverRequest = mojo.internal.bindings.ash.settings.mojom.TabletModeObserverPendingReceiver;


// Interface: DisplayConfigurationObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec, 'ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.DisplayConfigurationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDisplayConfigurationChanged() {
    return this.$.onDisplayConfigurationChanged();
  }
};

mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.settings.mojom.DisplayConfigurationObserver', [
      { explicit: null },
    ]);
  }

  onDisplayConfigurationChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.DisplayConfigurationObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.settings.mojom.DisplayConfigurationObserver', [
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
        
        // Try Method 0: OnDisplayConfigurationChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDisplayConfigurationChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDisplayConfigurationChanged');
          const result = this.impl.onDisplayConfigurationChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverReceiver = mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverReceiver;

mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverPtr = mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverRemote;
mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverRequest = mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverPendingReceiver;


// Interface: DisplayBrightnessSettingsObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec, 'ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_Params', [
      mojo.internal.StructField('arg_brightness_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_triggered_by_als', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.DisplayBrightnessSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDisplayBrightnessChanged(arg_brightness_percent, arg_triggered_by_als) {
    return this.$.onDisplayBrightnessChanged(arg_brightness_percent, arg_triggered_by_als);
  }
};

mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.settings.mojom.DisplayBrightnessSettingsObserver', [
      { explicit: null },
    ]);
  }

  onDisplayBrightnessChanged(arg_brightness_percent, arg_triggered_by_als) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec,
      null,
      [arg_brightness_percent, arg_triggered_by_als],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.DisplayBrightnessSettingsObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.settings.mojom.DisplayBrightnessSettingsObserver', [
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
        
        // Try Method 0: OnDisplayBrightnessChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDisplayBrightnessChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDisplayBrightnessChanged');
          const result = this.impl.onDisplayBrightnessChanged(params.arg_brightness_percent, params.arg_triggered_by_als);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverReceiver = mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverReceiver;

mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverPtr = mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverRemote;
mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverRequest = mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverPendingReceiver;


// Interface: AmbientLightSensorObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec, 'ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_Params', [
      mojo.internal.StructField('arg_is_ambient_light_sensor_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.AmbientLightSensorObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAmbientLightSensorEnabledChanged(arg_is_ambient_light_sensor_enabled) {
    return this.$.onAmbientLightSensorEnabledChanged(arg_is_ambient_light_sensor_enabled);
  }
};

mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.settings.mojom.AmbientLightSensorObserver', [
      { explicit: null },
    ]);
  }

  onAmbientLightSensorEnabledChanged(arg_is_ambient_light_sensor_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec,
      null,
      [arg_is_ambient_light_sensor_enabled],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.AmbientLightSensorObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.settings.mojom.AmbientLightSensorObserver', [
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
        
        // Try Method 0: OnAmbientLightSensorEnabledChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAmbientLightSensorEnabledChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAmbientLightSensorEnabledChanged');
          const result = this.impl.onAmbientLightSensorEnabledChanged(params.arg_is_ambient_light_sensor_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverReceiver = mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverReceiver;

mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverPtr = mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverRemote;
mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverRequest = mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverPendingReceiver;


// Interface: DisplaySettingsProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.mojom.TabletModeObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParams', [
      mojo.internal.StructField('arg_is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.mojom.DisplayConfigurationObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.mojom.DisplayBrightnessSettingsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParams', [
      mojo.internal.StructField('arg_brightness_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.mojom.AmbientLightSensorObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParams', [
      mojo.internal.StructField('arg_is_ambient_light_sensor_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ash.settings.mojom.DisplaySettingsTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.ash.settings.mojom.DisplaySettingsValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_Params', [
      mojo.internal.StructField('arg_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParams', [
      mojo.internal.StructField('arg_has_ambient_light_sensor', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.DisplaySettingsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  observeTabletMode(arg_observer) {
    return this.$.observeTabletMode(arg_observer);
  }
  observeDisplayConfiguration(arg_observer) {
    return this.$.observeDisplayConfiguration(arg_observer);
  }
  observeDisplayBrightnessSettings(arg_observer) {
    return this.$.observeDisplayBrightnessSettings(arg_observer);
  }
  observeAmbientLightSensor(arg_observer) {
    return this.$.observeAmbientLightSensor(arg_observer);
  }
  recordChangingDisplaySettings(arg_type, arg_value) {
    return this.$.recordChangingDisplaySettings(arg_type, arg_value);
  }
  setShinyPerformance(arg_enabled) {
    return this.$.setShinyPerformance(arg_enabled);
  }
  setInternalDisplayScreenBrightness(arg_percent) {
    return this.$.setInternalDisplayScreenBrightness(arg_percent);
  }
  setInternalDisplayAmbientLightSensorEnabled(arg_enabled) {
    return this.$.setInternalDisplayAmbientLightSensorEnabled(arg_enabled);
  }
  startNativeTouchscreenMappingExperience() {
    return this.$.startNativeTouchscreenMappingExperience();
  }
  hasAmbientLightSensor() {
    return this.$.hasAmbientLightSensor();
  }
};

mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.settings.mojom.DisplaySettingsProvider', [
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

  observeTabletMode(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec,
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec,
      [arg_observer],
      false);
  }

  observeDisplayConfiguration(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeDisplayBrightnessSettings(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec,
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec,
      [arg_observer],
      false);
  }

  observeAmbientLightSensor(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec,
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec,
      [arg_observer],
      false);
  }

  recordChangingDisplaySettings(arg_type, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec,
      null,
      [arg_type, arg_value],
      false);
  }

  setShinyPerformance(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setInternalDisplayScreenBrightness(arg_percent) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec,
      null,
      [arg_percent],
      false);
  }

  setInternalDisplayAmbientLightSensorEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  startNativeTouchscreenMappingExperience() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec,
      null,
      [],
      false);
  }

  hasAmbientLightSensor() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec,
      mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.DisplaySettingsProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.settings.mojom.DisplaySettingsProvider', [
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
        
        // Try Method 0: ObserveTabletMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveTabletMode (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ObserveDisplayConfiguration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveDisplayConfiguration (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ObserveDisplayBrightnessSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveDisplayBrightnessSettings (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ObserveAmbientLightSensor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveAmbientLightSensor (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RecordChangingDisplaySettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordChangingDisplaySettings (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetShinyPerformance
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetShinyPerformance (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetInternalDisplayScreenBrightness
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInternalDisplayScreenBrightness (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetInternalDisplayAmbientLightSensorEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInternalDisplayAmbientLightSensorEnabled (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: StartNativeTouchscreenMappingExperience
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartNativeTouchscreenMappingExperience (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: HasAmbientLightSensor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasAmbientLightSensor (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeTabletMode');
          const result = this.impl.observeTabletMode(params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ObserveTabletMode FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeDisplayConfiguration');
          const result = this.impl.observeDisplayConfiguration(params.arg_observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeDisplayBrightnessSettings');
          const result = this.impl.observeDisplayBrightnessSettings(params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ObserveDisplayBrightnessSettings FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeAmbientLightSensor');
          const result = this.impl.observeAmbientLightSensor(params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ObserveAmbientLightSensor FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordChangingDisplaySettings');
          const result = this.impl.recordChangingDisplaySettings(params.arg_type, params.arg_value);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setShinyPerformance');
          const result = this.impl.setShinyPerformance(params.arg_enabled);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInternalDisplayScreenBrightness');
          const result = this.impl.setInternalDisplayScreenBrightness(params.arg_percent);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInternalDisplayAmbientLightSensorEnabled');
          const result = this.impl.setInternalDisplayAmbientLightSensorEnabled(params.arg_enabled);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startNativeTouchscreenMappingExperience');
          const result = this.impl.startNativeTouchscreenMappingExperience();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasAmbientLightSensor');
          const result = this.impl.hasAmbientLightSensor();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HasAmbientLightSensor FAILED:', e));
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

mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderReceiver = mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderReceiver;

mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderPtr = mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderRemote;
mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderRequest = mojo.internal.bindings.ash.settings.mojom.DisplaySettingsProviderPendingReceiver;

