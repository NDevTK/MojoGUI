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
ash.settings = ash.settings || {};
ash.settings.mojom = ash.settings.mojom || {};

ash.settings.mojom.DisplaySettingsTypeSpec = { $: mojo.internal.Enum() };
ash.settings.mojom.DisplaySettingsNightLightScheduleOptionSpec = { $: mojo.internal.Enum() };
ash.settings.mojom.DisplaySettingsOrientationOptionSpec = { $: mojo.internal.Enum() };
ash.settings.mojom.DisplaySettingsValueSpec = { $: {} };
ash.settings.mojom.TabletModeObserver = {};
ash.settings.mojom.TabletModeObserver.$interfaceName = 'ash.settings.mojom.TabletModeObserver';
ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec = { $: {} };
ash.settings.mojom.DisplayConfigurationObserver = {};
ash.settings.mojom.DisplayConfigurationObserver.$interfaceName = 'ash.settings.mojom.DisplayConfigurationObserver';
ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec = { $: {} };
ash.settings.mojom.DisplayBrightnessSettingsObserver = {};
ash.settings.mojom.DisplayBrightnessSettingsObserver.$interfaceName = 'ash.settings.mojom.DisplayBrightnessSettingsObserver';
ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec = { $: {} };
ash.settings.mojom.AmbientLightSensorObserver = {};
ash.settings.mojom.AmbientLightSensorObserver.$interfaceName = 'ash.settings.mojom.AmbientLightSensorObserver';
ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider = {};
ash.settings.mojom.DisplaySettingsProvider.$interfaceName = 'ash.settings.mojom.DisplaySettingsProvider';
ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec = { $: {} };

// Enum: DisplaySettingsType
ash.settings.mojom.DisplaySettingsType = {
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
ash.settings.mojom.DisplaySettingsNightLightScheduleOption = {
  kNever: 0,
  kSunsetToSunrise: 1,
  kCustom: 2,
};

// Enum: DisplaySettingsOrientationOption
ash.settings.mojom.DisplaySettingsOrientationOption = {
  kAuto: 0,
  k0Degree: 1,
  k90Degree: 2,
  k180Degree: 3,
  k270Degree: 4,
};

// Struct: DisplaySettingsValue
mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsValueSpec, 'ash.settings.mojom.DisplaySettingsValue', [
      mojo.internal.StructField('display_id_$value', 0, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'display_id_$flag', originalFieldName: 'display_id' }),
      mojo.internal.StructField('orientation', 8, 0, ash.settings.mojom.DisplaySettingsOrientationOptionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('night_light_schedule', 16, 0, ash.settings.mojom.DisplaySettingsNightLightScheduleOptionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_internal_display_$flag', 24, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_internal_display_$value', originalFieldName: 'is_internal_display' }),
      mojo.internal.StructField('is_internal_display_$value', 24, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_internal_display_$flag', originalFieldName: 'is_internal_display' }),
      mojo.internal.StructField('display_id_$flag', 24, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'display_id_$value', originalFieldName: 'display_id' }),
      mojo.internal.StructField('night_light_status_$flag', 24, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'night_light_status_$value', originalFieldName: 'night_light_status' }),
      mojo.internal.StructField('night_light_status_$value', 24, 4, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'night_light_status_$flag', originalFieldName: 'night_light_status' }),
      mojo.internal.StructField('mirror_mode_status_$flag', 24, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'mirror_mode_status_$value', originalFieldName: 'mirror_mode_status' }),
      mojo.internal.StructField('mirror_mode_status_$value', 24, 6, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'mirror_mode_status_$flag', originalFieldName: 'mirror_mode_status' }),
      mojo.internal.StructField('unified_mode_status_$flag', 24, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'unified_mode_status_$value', originalFieldName: 'unified_mode_status' }),
      mojo.internal.StructField('unified_mode_status_$value', 25, 0, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'unified_mode_status_$flag', originalFieldName: 'unified_mode_status' }),
    ],
    [[0, 40]]);

// Interface: TabletModeObserver
mojo.internal.Struct(
    ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec, 'ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_Params', [
      mojo.internal.StructField('is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.TabletModeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.TabletModeObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.TabletModeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.TabletModeObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.TabletModeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.TabletModeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TabletModeObserver', [
      { explicit: null },
    ]);
  }

  onTabletModeChanged(is_tablet_mode) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec,
      null,
      [is_tablet_mode],
      false);
  }

};

ash.settings.mojom.TabletModeObserver.getRemote = function() {
  let remote = new ash.settings.mojom.TabletModeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.TabletModeObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.TabletModeObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TabletModeObserver', [
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
             decoder.decodeStructInline(ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabletModeChanged');
          const result = this.impl.onTabletModeChanged(params.is_tablet_mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.mojom.TabletModeObserverReceiver = ash.settings.mojom.TabletModeObserverReceiver;

ash.settings.mojom.TabletModeObserverPtr = ash.settings.mojom.TabletModeObserverRemote;
ash.settings.mojom.TabletModeObserverRequest = ash.settings.mojom.TabletModeObserverPendingReceiver;


// Interface: DisplayConfigurationObserver
mojo.internal.Struct(
    ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec, 'ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_Params', [
    ],
    [[0, 8]]);

ash.settings.mojom.DisplayConfigurationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.DisplayConfigurationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.DisplayConfigurationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.DisplayConfigurationObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.DisplayConfigurationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.DisplayConfigurationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DisplayConfigurationObserver', [
      { explicit: null },
    ]);
  }

  onDisplayConfigurationChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.settings.mojom.DisplayConfigurationObserver.getRemote = function() {
  let remote = new ash.settings.mojom.DisplayConfigurationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.DisplayConfigurationObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.DisplayConfigurationObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DisplayConfigurationObserver', [
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
             decoder.decodeStructInline(ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec.$.structSpec);
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

ash.settings.mojom.DisplayConfigurationObserverReceiver = ash.settings.mojom.DisplayConfigurationObserverReceiver;

ash.settings.mojom.DisplayConfigurationObserverPtr = ash.settings.mojom.DisplayConfigurationObserverRemote;
ash.settings.mojom.DisplayConfigurationObserverRequest = ash.settings.mojom.DisplayConfigurationObserverPendingReceiver;


// Interface: DisplayBrightnessSettingsObserver
mojo.internal.Struct(
    ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec, 'ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_Params', [
      mojo.internal.StructField('brightness_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('triggered_by_als', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

ash.settings.mojom.DisplayBrightnessSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.DisplayBrightnessSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.DisplayBrightnessSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.DisplayBrightnessSettingsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.DisplayBrightnessSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.DisplayBrightnessSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DisplayBrightnessSettingsObserver', [
      { explicit: null },
    ]);
  }

  onDisplayBrightnessChanged(brightness_percent, triggered_by_als) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec,
      null,
      [brightness_percent, triggered_by_als],
      false);
  }

};

ash.settings.mojom.DisplayBrightnessSettingsObserver.getRemote = function() {
  let remote = new ash.settings.mojom.DisplayBrightnessSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.DisplayBrightnessSettingsObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.DisplayBrightnessSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DisplayBrightnessSettingsObserver', [
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
             decoder.decodeStructInline(ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDisplayBrightnessChanged');
          const result = this.impl.onDisplayBrightnessChanged(params.brightness_percent, params.triggered_by_als);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.mojom.DisplayBrightnessSettingsObserverReceiver = ash.settings.mojom.DisplayBrightnessSettingsObserverReceiver;

ash.settings.mojom.DisplayBrightnessSettingsObserverPtr = ash.settings.mojom.DisplayBrightnessSettingsObserverRemote;
ash.settings.mojom.DisplayBrightnessSettingsObserverRequest = ash.settings.mojom.DisplayBrightnessSettingsObserverPendingReceiver;


// Interface: AmbientLightSensorObserver
mojo.internal.Struct(
    ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec, 'ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_Params', [
      mojo.internal.StructField('is_ambient_light_sensor_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.AmbientLightSensorObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.AmbientLightSensorObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.AmbientLightSensorObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.AmbientLightSensorObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.AmbientLightSensorObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.AmbientLightSensorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AmbientLightSensorObserver', [
      { explicit: null },
    ]);
  }

  onAmbientLightSensorEnabledChanged(is_ambient_light_sensor_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec,
      null,
      [is_ambient_light_sensor_enabled],
      false);
  }

};

ash.settings.mojom.AmbientLightSensorObserver.getRemote = function() {
  let remote = new ash.settings.mojom.AmbientLightSensorObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.AmbientLightSensorObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.AmbientLightSensorObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AmbientLightSensorObserver', [
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
             decoder.decodeStructInline(ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAmbientLightSensorEnabledChanged');
          const result = this.impl.onAmbientLightSensorEnabledChanged(params.is_ambient_light_sensor_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.mojom.AmbientLightSensorObserverReceiver = ash.settings.mojom.AmbientLightSensorObserverReceiver;

ash.settings.mojom.AmbientLightSensorObserverPtr = ash.settings.mojom.AmbientLightSensorObserverRemote;
ash.settings.mojom.AmbientLightSensorObserverRequest = ash.settings.mojom.AmbientLightSensorObserverPendingReceiver;


// Interface: DisplaySettingsProvider
mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.TabletModeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParams', [
      mojo.internal.StructField('is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.DisplayConfigurationObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.DisplayBrightnessSettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParams', [
      mojo.internal.StructField('brightness_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.AmbientLightSensorObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParams', [
      mojo.internal.StructField('is_ambient_light_sensor_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_Params', [
      mojo.internal.StructField('type', 0, 0, ash.settings.mojom.DisplaySettingsTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, ash.settings.mojom.DisplaySettingsValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_Params', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParams', [
      mojo.internal.StructField('has_ambient_light_sensor', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.DisplaySettingsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.DisplaySettingsProviderRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.DisplaySettingsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.DisplaySettingsProviderPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.DisplaySettingsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.DisplaySettingsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DisplaySettingsProvider', [
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

  observeTabletMode(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec,
      [observer],
      false);
  }

  observeDisplayConfiguration(observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeDisplayBrightnessSettings(observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec,
      [observer],
      false);
  }

  observeAmbientLightSensor(observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec,
      [observer],
      false);
  }

  recordChangingDisplaySettings(type, value) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec,
      null,
      [type, value],
      false);
  }

  setShinyPerformance(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setInternalDisplayScreenBrightness(percent) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec,
      null,
      [percent],
      false);
  }

  setInternalDisplayAmbientLightSensorEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  startNativeTouchscreenMappingExperience() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec,
      null,
      [],
      false);
  }

  hasAmbientLightSensor() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec,
      [],
      false);
  }

};

ash.settings.mojom.DisplaySettingsProvider.getRemote = function() {
  let remote = new ash.settings.mojom.DisplaySettingsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.DisplaySettingsProvider',
    'context');
  return remote.$;
};

ash.settings.mojom.DisplaySettingsProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DisplaySettingsProvider', [
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
             decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec);
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
             decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec);
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
             decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec);
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
             decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec);
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
             decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec);
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
             decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec);
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
             decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec);
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
             decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec);
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
             decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec);
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
             decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeTabletMode');
          const result = this.impl.observeTabletMode(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeDisplayConfiguration');
          const result = this.impl.observeDisplayConfiguration(params.observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeDisplayBrightnessSettings');
          const result = this.impl.observeDisplayBrightnessSettings(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeAmbientLightSensor');
          const result = this.impl.observeAmbientLightSensor(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordChangingDisplaySettings');
          const result = this.impl.recordChangingDisplaySettings(params.type, params.value);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setShinyPerformance');
          const result = this.impl.setShinyPerformance(params.enabled);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInternalDisplayScreenBrightness');
          const result = this.impl.setInternalDisplayScreenBrightness(params.percent);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInternalDisplayAmbientLightSensorEnabled');
          const result = this.impl.setInternalDisplayAmbientLightSensorEnabled(params.enabled);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startNativeTouchscreenMappingExperience');
          const result = this.impl.startNativeTouchscreenMappingExperience();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasAmbientLightSensor');
          const result = this.impl.hasAmbientLightSensor();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec);
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

ash.settings.mojom.DisplaySettingsProviderReceiver = ash.settings.mojom.DisplaySettingsProviderReceiver;

ash.settings.mojom.DisplaySettingsProviderPtr = ash.settings.mojom.DisplaySettingsProviderRemote;
ash.settings.mojom.DisplaySettingsProviderRequest = ash.settings.mojom.DisplaySettingsProviderPendingReceiver;

