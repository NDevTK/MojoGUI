// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/ui/mojom/display_settings.mojom
// Module: chromecast.mojom

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
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var mojo_base = mojo_base || {};

chromecast.mojom.DisplaySettings = {};
chromecast.mojom.DisplaySettings.$interfaceName = 'chromecast.mojom.DisplaySettings';
chromecast.mojom.DisplaySettings_SetColorTemperature_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_SetBrightness_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_ResetBrightness_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_SetScreenOn_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_AddDisplaySettingsObserver_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettingsObserver = {};
chromecast.mojom.DisplaySettingsObserver.$interfaceName = 'chromecast.mojom.DisplaySettingsObserver';
chromecast.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_ParamsSpec = { $: {} };

// Interface: DisplaySettings
mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_SetColorTemperature_ParamsSpec, 'chromecast.mojom.DisplaySettings_SetColorTemperature_Params', [
      mojo.internal.StructField('kelvin', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec, 'chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('kelvin', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec, 'chromecast.mojom.DisplaySettings_ResetColorTemperature_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_SetBrightness_ParamsSpec, 'chromecast.mojom.DisplaySettings_SetBrightness_Params', [
      mojo.internal.StructField('brightness', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec, 'chromecast.mojom.DisplaySettings_SetBrightnessSmooth_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('brightness', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_ResetBrightness_ParamsSpec, 'chromecast.mojom.DisplaySettings_ResetBrightness_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_SetScreenOn_ParamsSpec, 'chromecast.mojom.DisplaySettings_SetScreenOn_Params', [
      mojo.internal.StructField('display_on', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec, 'chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_Params', [
      mojo.internal.StructField('allow_power_off', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_AddDisplaySettingsObserver_ParamsSpec, 'chromecast.mojom.DisplaySettings_AddDisplaySettingsObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.DisplaySettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.DisplaySettingsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.DisplaySettingsRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.DisplaySettings';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.DisplaySettingsPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.DisplaySettingsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.DisplaySettingsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DisplaySettings', [
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

  setColorTemperature(kelvin) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.DisplaySettings_SetColorTemperature_ParamsSpec,
      null,
      [kelvin],
      false);
  }

  setColorTemperatureSmooth(kelvin, duration) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec,
      null,
      [kelvin, duration],
      false);
  }

  resetColorTemperature() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromecast.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec,
      null,
      [],
      false);
  }

  setBrightness(brightness) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromecast.mojom.DisplaySettings_SetBrightness_ParamsSpec,
      null,
      [brightness],
      false);
  }

  setBrightnessSmooth(brightness, duration) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromecast.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec,
      null,
      [brightness, duration],
      false);
  }

  resetBrightness() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromecast.mojom.DisplaySettings_ResetBrightness_ParamsSpec,
      null,
      [],
      false);
  }

  setScreenOn(display_on) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromecast.mojom.DisplaySettings_SetScreenOn_ParamsSpec,
      null,
      [display_on],
      false);
  }

  setAllowScreenPowerOff(allow_power_off) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec,
      null,
      [allow_power_off],
      false);
  }

  addDisplaySettingsObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      chromecast.mojom.DisplaySettings_AddDisplaySettingsObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

chromecast.mojom.DisplaySettings.getRemote = function() {
  let remote = new chromecast.mojom.DisplaySettingsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.DisplaySettings',
    'context');
  return remote.$;
};

chromecast.mojom.DisplaySettingsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DisplaySettings', [
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
        
        // Try Method 0: SetColorTemperature
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetColorTemperature_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetColorTemperature (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetColorTemperatureSmooth
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetColorTemperatureSmooth (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ResetColorTemperature
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetColorTemperature (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetBrightness
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetBrightness_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBrightness (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetBrightnessSmooth
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBrightnessSmooth (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ResetBrightness
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_ResetBrightness_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetBrightness (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetScreenOn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetScreenOn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScreenOn (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetAllowScreenPowerOff
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAllowScreenPowerOff (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: AddDisplaySettingsObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_AddDisplaySettingsObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddDisplaySettingsObserver (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetColorTemperature_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setColorTemperature');
          const result = this.impl.setColorTemperature(params.kelvin);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setColorTemperatureSmooth');
          const result = this.impl.setColorTemperatureSmooth(params.kelvin, params.duration);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetColorTemperature');
          const result = this.impl.resetColorTemperature();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetBrightness_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBrightness');
          const result = this.impl.setBrightness(params.brightness);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBrightnessSmooth');
          const result = this.impl.setBrightnessSmooth(params.brightness, params.duration);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_ResetBrightness_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetBrightness');
          const result = this.impl.resetBrightness();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetScreenOn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setScreenOn');
          const result = this.impl.setScreenOn(params.display_on);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAllowScreenPowerOff');
          const result = this.impl.setAllowScreenPowerOff(params.allow_power_off);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_AddDisplaySettingsObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addDisplaySettingsObserver');
          const result = this.impl.addDisplaySettingsObserver(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.DisplaySettingsReceiver = chromecast.mojom.DisplaySettingsReceiver;

chromecast.mojom.DisplaySettingsPtr = chromecast.mojom.DisplaySettingsRemote;
chromecast.mojom.DisplaySettingsRequest = chromecast.mojom.DisplaySettingsPendingReceiver;


// Interface: DisplaySettingsObserver
mojo.internal.Struct(
    chromecast.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_ParamsSpec, 'chromecast.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_Params', [
      mojo.internal.StructField('brightness', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.DisplaySettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.DisplaySettingsObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.DisplaySettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.DisplaySettingsObserverPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.DisplaySettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.DisplaySettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DisplaySettingsObserver', [
      { explicit: null },
    ]);
  }

  onDisplayBrightnessChanged(brightness) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_ParamsSpec,
      null,
      [brightness],
      false);
  }

};

chromecast.mojom.DisplaySettingsObserver.getRemote = function() {
  let remote = new chromecast.mojom.DisplaySettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.DisplaySettingsObserver',
    'context');
  return remote.$;
};

chromecast.mojom.DisplaySettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DisplaySettingsObserver', [
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
             decoder.decodeStructInline(chromecast.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDisplayBrightnessChanged');
          const result = this.impl.onDisplayBrightnessChanged(params.brightness);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.DisplaySettingsObserverReceiver = chromecast.mojom.DisplaySettingsObserverReceiver;

chromecast.mojom.DisplaySettingsObserverPtr = chromecast.mojom.DisplaySettingsObserverRemote;
chromecast.mojom.DisplaySettingsObserverRequest = chromecast.mojom.DisplaySettingsObserverPendingReceiver;

