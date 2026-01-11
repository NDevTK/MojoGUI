// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/device/input_device_settings/input_device_settings_provider.mojom
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
mojo.internal.bindings.ash.settings = mojo.internal.bindings.ash.settings || {};
mojo.internal.bindings.ash.settings.mojom = mojo.internal.bindings.ash.settings.mojom || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};

mojo.internal.bindings.ash.settings.mojom.ActionTypeSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.ActionChoiceSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserver = {};
mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserver.$interfaceName = 'ash.settings.mojom.KeyboardSettingsObserver';
mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserver = {};
mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserver.$interfaceName = 'ash.settings.mojom.TouchpadSettingsObserver';
mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserver = {};
mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserver.$interfaceName = 'ash.settings.mojom.PointingStickSettingsObserver';
mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserver = {};
mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserver.$interfaceName = 'ash.settings.mojom.MouseSettingsObserver';
mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.ButtonPressObserver = {};
mojo.internal.bindings.ash.settings.mojom.ButtonPressObserver.$interfaceName = 'ash.settings.mojom.ButtonPressObserver';
mojo.internal.bindings.ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserver = {};
mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserver.$interfaceName = 'ash.settings.mojom.GraphicsTabletSettingsObserver';
mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserver = {};
mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserver.$interfaceName = 'ash.settings.mojom.KeyboardBrightnessObserver';
mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserver = {};
mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserver.$interfaceName = 'ash.settings.mojom.KeyboardAmbientLightSensorObserver';
mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.LidStateObserver = {};
mojo.internal.bindings.ash.settings.mojom.LidStateObserver.$interfaceName = 'ash.settings.mojom.LidStateObserver';
mojo.internal.bindings.ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider = {};
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider.$interfaceName = 'ash.settings.mojom.InputDeviceSettingsProvider';
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec = { $: {} };

// Union: ActionType
mojo.internal.Union(
    mojo.internal.bindings.ash.settings.mojom.ActionTypeSpec, 'ash.settings.mojom.ActionType', {
      'arg_accelerator_action': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.mojom.AcceleratorActionSpec.$,
        'nullable': false,
      },
      'arg_static_shortcut_action': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.mojom.StaticShortcutActionSpec.$,
        'nullable': false,
      },
    });

// Struct: ActionChoice
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.ActionChoiceSpec, 'ash.settings.mojom.ActionChoice', [
      mojo.internal.StructField('arg_action_type', 0, 0, mojo.internal.bindings.ash.settings.mojom.ActionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: KeyboardSettingsObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec, 'ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_Params', [
      mojo.internal.StructField('arg_keyboards', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.mojom.KeyboardSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec, 'ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_Params', [
      mojo.internal.StructField('arg_policies', 0, 0, mojo.internal.bindings.ash.mojom.KeyboardPoliciesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.KeyboardSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onKeyboardListUpdated(arg_keyboards) {
    return this.$.onKeyboardListUpdated(arg_keyboards);
  }
  onKeyboardPoliciesUpdated(arg_policies) {
    return this.$.onKeyboardPoliciesUpdated(arg_policies);
  }
};

mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeyboardSettingsObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onKeyboardListUpdated(arg_keyboards) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec,
      null,
      [arg_keyboards],
      false);
  }

  onKeyboardPoliciesUpdated(arg_policies) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec,
      null,
      [arg_policies],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.KeyboardSettingsObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeyboardSettingsObserver', [
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
        
        // Try Method 0: OnKeyboardListUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardListUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnKeyboardPoliciesUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardPoliciesUpdated (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardListUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardListUpdated');
          const result = this.impl.onKeyboardListUpdated(params.arg_keyboards);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserver_OnKeyboardPoliciesUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardPoliciesUpdated');
          const result = this.impl.onKeyboardPoliciesUpdated(params.arg_policies);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverReceiver = mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverReceiver;

mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverPtr = mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverRemote;
mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverRequest = mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverPendingReceiver;


// Interface: TouchpadSettingsObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec, 'ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_Params', [
      mojo.internal.StructField('arg_touchpads', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.mojom.TouchpadSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.TouchpadSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTouchpadListUpdated(arg_touchpads) {
    return this.$.onTouchpadListUpdated(arg_touchpads);
  }
};

mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TouchpadSettingsObserver', [
      { explicit: null },
    ]);
  }

  onTouchpadListUpdated(arg_touchpads) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec,
      null,
      [arg_touchpads],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.TouchpadSettingsObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TouchpadSettingsObserver', [
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
        
        // Try Method 0: OnTouchpadListUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTouchpadListUpdated (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserver_OnTouchpadListUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTouchpadListUpdated');
          const result = this.impl.onTouchpadListUpdated(params.arg_touchpads);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverReceiver = mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverReceiver;

mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverPtr = mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverRemote;
mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverRequest = mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverPendingReceiver;


// Interface: PointingStickSettingsObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec, 'ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_Params', [
      mojo.internal.StructField('arg_pointSticks', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.mojom.PointingStickSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.PointingStickSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPointingStickListUpdated(arg_pointSticks) {
    return this.$.onPointingStickListUpdated(arg_pointSticks);
  }
};

mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PointingStickSettingsObserver', [
      { explicit: null },
    ]);
  }

  onPointingStickListUpdated(arg_pointSticks) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec,
      null,
      [arg_pointSticks],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.PointingStickSettingsObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PointingStickSettingsObserver', [
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
        
        // Try Method 0: OnPointingStickListUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPointingStickListUpdated (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserver_OnPointingStickListUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPointingStickListUpdated');
          const result = this.impl.onPointingStickListUpdated(params.arg_pointSticks);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverReceiver = mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverReceiver;

mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverPtr = mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverRemote;
mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverRequest = mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverPendingReceiver;


// Interface: MouseSettingsObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec, 'ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_Params', [
      mojo.internal.StructField('arg_mice', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.mojom.MouseSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec, 'ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_Params', [
      mojo.internal.StructField('arg_policies', 0, 0, mojo.internal.bindings.ash.mojom.MousePoliciesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.MouseSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMouseListUpdated(arg_mice) {
    return this.$.onMouseListUpdated(arg_mice);
  }
  onMousePoliciesUpdated(arg_policies) {
    return this.$.onMousePoliciesUpdated(arg_policies);
  }
};

mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MouseSettingsObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onMouseListUpdated(arg_mice) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec,
      null,
      [arg_mice],
      false);
  }

  onMousePoliciesUpdated(arg_policies) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec,
      null,
      [arg_policies],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.MouseSettingsObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MouseSettingsObserver', [
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
        
        // Try Method 0: OnMouseListUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMouseListUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnMousePoliciesUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMousePoliciesUpdated (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserver_OnMouseListUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMouseListUpdated');
          const result = this.impl.onMouseListUpdated(params.arg_mice);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserver_OnMousePoliciesUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMousePoliciesUpdated');
          const result = this.impl.onMousePoliciesUpdated(params.arg_policies);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverReceiver = mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverReceiver;

mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverPtr = mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverRemote;
mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverRequest = mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverPendingReceiver;


// Interface: ButtonPressObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec, 'ash.settings.mojom.ButtonPressObserver_OnButtonPressed_Params', [
      mojo.internal.StructField('arg_button', 0, 0, mojo.internal.bindings.ash.mojom.ButtonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.ButtonPressObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onButtonPressed(arg_button) {
    return this.$.onButtonPressed(arg_button);
  }
};

mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ButtonPressObserver', [
      { explicit: null },
    ]);
  }

  onButtonPressed(arg_button) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec,
      null,
      [arg_button],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.ButtonPressObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.ButtonPressObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ButtonPressObserver', [
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
        
        // Try Method 0: OnButtonPressed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnButtonPressed (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.ButtonPressObserver_OnButtonPressed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onButtonPressed');
          const result = this.impl.onButtonPressed(params.arg_button);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverReceiver = mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverReceiver;

mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverPtr = mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverRemote;
mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverRequest = mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverPendingReceiver;


// Interface: GraphicsTabletSettingsObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec, 'ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_Params', [
      mojo.internal.StructField('arg_graphics_tablets', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.mojom.GraphicsTabletSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.GraphicsTabletSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onGraphicsTabletListUpdated(arg_graphics_tablets) {
    return this.$.onGraphicsTabletListUpdated(arg_graphics_tablets);
  }
};

mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GraphicsTabletSettingsObserver', [
      { explicit: null },
    ]);
  }

  onGraphicsTabletListUpdated(arg_graphics_tablets) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec,
      null,
      [arg_graphics_tablets],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.GraphicsTabletSettingsObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GraphicsTabletSettingsObserver', [
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
        
        // Try Method 0: OnGraphicsTabletListUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGraphicsTabletListUpdated (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserver_OnGraphicsTabletListUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onGraphicsTabletListUpdated');
          const result = this.impl.onGraphicsTabletListUpdated(params.arg_graphics_tablets);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverReceiver = mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverReceiver;

mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverPtr = mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverRemote;
mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverRequest = mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverPendingReceiver;


// Interface: KeyboardBrightnessObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec, 'ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_Params', [
      mojo.internal.StructField('arg_brightness_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.KeyboardBrightnessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onKeyboardBrightnessChanged(arg_brightness_percent) {
    return this.$.onKeyboardBrightnessChanged(arg_brightness_percent);
  }
};

mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeyboardBrightnessObserver', [
      { explicit: null },
    ]);
  }

  onKeyboardBrightnessChanged(arg_brightness_percent) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec,
      null,
      [arg_brightness_percent],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.KeyboardBrightnessObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeyboardBrightnessObserver', [
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
        
        // Try Method 0: OnKeyboardBrightnessChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardBrightnessChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserver_OnKeyboardBrightnessChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardBrightnessChanged');
          const result = this.impl.onKeyboardBrightnessChanged(params.arg_brightness_percent);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverReceiver = mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverReceiver;

mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverPtr = mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverRemote;
mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverRequest = mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverPendingReceiver;


// Interface: KeyboardAmbientLightSensorObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec, 'ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_Params', [
      mojo.internal.StructField('arg_keyboard_ambient_light_sensor_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.KeyboardAmbientLightSensorObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onKeyboardAmbientLightSensorEnabledChanged(arg_keyboard_ambient_light_sensor_enabled) {
    return this.$.onKeyboardAmbientLightSensorEnabledChanged(arg_keyboard_ambient_light_sensor_enabled);
  }
};

mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeyboardAmbientLightSensorObserver', [
      { explicit: null },
    ]);
  }

  onKeyboardAmbientLightSensorEnabledChanged(arg_keyboard_ambient_light_sensor_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec,
      null,
      [arg_keyboard_ambient_light_sensor_enabled],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.KeyboardAmbientLightSensorObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeyboardAmbientLightSensorObserver', [
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
        
        // Try Method 0: OnKeyboardAmbientLightSensorEnabledChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardAmbientLightSensorEnabledChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserver_OnKeyboardAmbientLightSensorEnabledChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardAmbientLightSensorEnabledChanged');
          const result = this.impl.onKeyboardAmbientLightSensorEnabledChanged(params.arg_keyboard_ambient_light_sensor_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverReceiver = mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverReceiver;

mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverPtr = mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverRemote;
mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverRequest = mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverPendingReceiver;


// Interface: LidStateObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec, 'ash.settings.mojom.LidStateObserver_OnLidStateChanged_Params', [
      mojo.internal.StructField('arg_is_lid_open', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.mojom.LidStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.LidStateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.LidStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.LidStateObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.LidStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onLidStateChanged(arg_is_lid_open) {
    return this.$.onLidStateChanged(arg_is_lid_open);
  }
};

mojo.internal.bindings.ash.settings.mojom.LidStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LidStateObserver', [
      { explicit: null },
    ]);
  }

  onLidStateChanged(arg_is_lid_open) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec,
      null,
      [arg_is_lid_open],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.LidStateObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.LidStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.LidStateObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.LidStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LidStateObserver', [
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
        
        // Try Method 0: OnLidStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLidStateChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.LidStateObserver_OnLidStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLidStateChanged');
          const result = this.impl.onLidStateChanged(params.arg_is_lid_open);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.LidStateObserverReceiver = mojo.internal.bindings.ash.settings.mojom.LidStateObserverReceiver;

mojo.internal.bindings.ash.settings.mojom.LidStateObserverPtr = mojo.internal.bindings.ash.settings.mojom.LidStateObserverRemote;
mojo.internal.bindings.ash.settings.mojom.LidStateObserverRequest = mojo.internal.bindings.ash.settings.mojom.LidStateObserverPendingReceiver;


// Interface: InputDeviceSettingsProvider
mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.mojom.KeyboardSettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.mojom.TouchpadSettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.mojom.PointingStickSettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.mojom.MouseSettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.mojom.GraphicsTabletSettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.mojom.ButtonPressObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.mojom.KeyboardBrightnessObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.mojom.KeyboardAmbientLightSensorObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.settings.mojom.LidStateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParams', [
      mojo.internal.StructField('arg_is_lid_open', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_Params', [
      mojo.internal.StructField('arg_settings', 0, 0, mojo.internal.bindings.ash.mojom.KeyboardSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_Params', [
      mojo.internal.StructField('arg_settings', 0, 0, mojo.internal.bindings.ash.mojom.PointingStickSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_Params', [
      mojo.internal.StructField('arg_settings', 0, 0, mojo.internal.bindings.ash.mojom.MouseSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_Params', [
      mojo.internal.StructField('arg_settings', 0, 0, mojo.internal.bindings.ash.mojom.TouchpadSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_Params', [
      mojo.internal.StructField('arg_settings', 0, 0, mojo.internal.bindings.ash.mojom.GraphicsTabletSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_Params', [
      mojo.internal.StructField('arg_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParams', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.ash.settings.mojom.ActionChoiceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParams', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.ash.settings.mojom.ActionChoiceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParams', [
      mojo.internal.StructField('arg_meta_key', 0, 0, mojo.internal.bindings.ui.mojom.MetaKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParams', [
      mojo.internal.StructField('arg_has_keyboard_backlight', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParams', [
      mojo.internal.StructField('arg_has_ambient_light_sensor', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParams', [
      mojo.internal.StructField('arg_is_rgb_keyboard_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_Params', [
      mojo.internal.StructField('arg_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_Params', [
      mojo.internal.StructField('arg_device_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParams', [
      mojo.internal.StructField('arg_data_url', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec, 'ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_Params', [
      mojo.internal.StructField('arg_package_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProviderRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.InputDeviceSettingsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  observeKeyboardSettings(arg_observer) {
    return this.$.observeKeyboardSettings(arg_observer);
  }
  observeTouchpadSettings(arg_observer) {
    return this.$.observeTouchpadSettings(arg_observer);
  }
  observePointingStickSettings(arg_observer) {
    return this.$.observePointingStickSettings(arg_observer);
  }
  observeMouseSettings(arg_observer) {
    return this.$.observeMouseSettings(arg_observer);
  }
  observeGraphicsTabletSettings(arg_observer) {
    return this.$.observeGraphicsTabletSettings(arg_observer);
  }
  observeButtonPresses(arg_observer) {
    return this.$.observeButtonPresses(arg_observer);
  }
  observeKeyboardBrightness(arg_observer) {
    return this.$.observeKeyboardBrightness(arg_observer);
  }
  observeKeyboardAmbientLightSensor(arg_observer) {
    return this.$.observeKeyboardAmbientLightSensor(arg_observer);
  }
  observeLidState(arg_observer) {
    return this.$.observeLidState(arg_observer);
  }
  restoreDefaultKeyboardRemappings(arg_device_id) {
    return this.$.restoreDefaultKeyboardRemappings(arg_device_id);
  }
  setKeyboardSettings(arg_device_id, arg_settings) {
    return this.$.setKeyboardSettings(arg_device_id, arg_settings);
  }
  setPointingStickSettings(arg_device_id, arg_settings) {
    return this.$.setPointingStickSettings(arg_device_id, arg_settings);
  }
  setMouseSettings(arg_device_id, arg_settings) {
    return this.$.setMouseSettings(arg_device_id, arg_settings);
  }
  setTouchpadSettings(arg_device_id, arg_settings) {
    return this.$.setTouchpadSettings(arg_device_id, arg_settings);
  }
  setGraphicsTabletSettings(arg_device_id, arg_settings) {
    return this.$.setGraphicsTabletSettings(arg_device_id, arg_settings);
  }
  setKeyboardBrightness(arg_percent) {
    return this.$.setKeyboardBrightness(arg_percent);
  }
  setKeyboardAmbientLightSensorEnabled(arg_enabled) {
    return this.$.setKeyboardAmbientLightSensorEnabled(arg_enabled);
  }
  startObserving(arg_device_id) {
    return this.$.startObserving(arg_device_id);
  }
  stopObserving() {
    return this.$.stopObserving();
  }
  getActionsForMouseButtonCustomization() {
    return this.$.getActionsForMouseButtonCustomization();
  }
  getActionsForGraphicsTabletButtonCustomization() {
    return this.$.getActionsForGraphicsTabletButtonCustomization();
  }
  getMetaKeyToDisplay() {
    return this.$.getMetaKeyToDisplay();
  }
  hasKeyboardBacklight() {
    return this.$.hasKeyboardBacklight();
  }
  hasAmbientLightSensor() {
    return this.$.hasAmbientLightSensor();
  }
  isRgbKeyboardSupported() {
    return this.$.isRgbKeyboardSupported();
  }
  recordKeyboardColorLinkClicked() {
    return this.$.recordKeyboardColorLinkClicked();
  }
  recordKeyboardBrightnessChangeFromSlider(arg_percent) {
    return this.$.recordKeyboardBrightnessChangeFromSlider(arg_percent);
  }
  getDeviceIconImage(arg_device_key) {
    return this.$.getDeviceIconImage(arg_device_key);
  }
  launchCompanionApp(arg_package_id) {
    return this.$.launchCompanionApp(arg_package_id);
  }
};

mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputDeviceSettingsProvider', [
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

  observeKeyboardSettings(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeTouchpadSettings(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observePointingStickSettings(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeMouseSettings(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeGraphicsTabletSettings(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeButtonPresses(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeKeyboardBrightness(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeKeyboardAmbientLightSensor(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeLidState(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec,
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec,
      [arg_observer],
      false);
  }

  restoreDefaultKeyboardRemappings(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec,
      null,
      [arg_device_id],
      false);
  }

  setKeyboardSettings(arg_device_id, arg_settings) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec,
      null,
      [arg_device_id, arg_settings],
      false);
  }

  setPointingStickSettings(arg_device_id, arg_settings) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec,
      null,
      [arg_device_id, arg_settings],
      false);
  }

  setMouseSettings(arg_device_id, arg_settings) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec,
      null,
      [arg_device_id, arg_settings],
      false);
  }

  setTouchpadSettings(arg_device_id, arg_settings) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec,
      null,
      [arg_device_id, arg_settings],
      false);
  }

  setGraphicsTabletSettings(arg_device_id, arg_settings) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec,
      null,
      [arg_device_id, arg_settings],
      false);
  }

  setKeyboardBrightness(arg_percent) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec,
      null,
      [arg_percent],
      false);
  }

  setKeyboardAmbientLightSensorEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  startObserving(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec,
      null,
      [arg_device_id],
      false);
  }

  stopObserving() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec,
      null,
      [],
      false);
  }

  getActionsForMouseButtonCustomization() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec,
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec,
      [],
      false);
  }

  getActionsForGraphicsTabletButtonCustomization() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec,
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec,
      [],
      false);
  }

  getMetaKeyToDisplay() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec,
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec,
      [],
      false);
  }

  hasKeyboardBacklight() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec,
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec,
      [],
      false);
  }

  hasAmbientLightSensor() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec,
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec,
      [],
      false);
  }

  isRgbKeyboardSupported() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec,
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec,
      [],
      false);
  }

  recordKeyboardColorLinkClicked() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec,
      null,
      [],
      false);
  }

  recordKeyboardBrightnessChangeFromSlider(arg_percent) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec,
      null,
      [arg_percent],
      false);
  }

  getDeviceIconImage(arg_device_key) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec,
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec,
      [arg_device_key],
      false);
  }

  launchCompanionApp(arg_package_id) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec,
      null,
      [arg_package_id],
      false);
  }

};

mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.InputDeviceSettingsProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputDeviceSettingsProvider', [
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
        
        // Try Method 0: ObserveKeyboardSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveKeyboardSettings (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ObserveTouchpadSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveTouchpadSettings (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ObservePointingStickSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObservePointingStickSettings (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ObserveMouseSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveMouseSettings (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ObserveGraphicsTabletSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveGraphicsTabletSettings (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ObserveButtonPresses
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveButtonPresses (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ObserveKeyboardBrightness
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveKeyboardBrightness (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ObserveKeyboardAmbientLightSensor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveKeyboardAmbientLightSensor (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ObserveLidState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveLidState (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RestoreDefaultKeyboardRemappings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreDefaultKeyboardRemappings (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetKeyboardSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeyboardSettings (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetPointingStickSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPointingStickSettings (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetMouseSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMouseSettings (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetTouchpadSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTouchpadSettings (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetGraphicsTabletSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetGraphicsTabletSettings (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetKeyboardBrightness
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeyboardBrightness (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetKeyboardAmbientLightSensorEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeyboardAmbientLightSensorEnabled (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: StartObserving
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartObserving (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: StopObserving
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopObserving (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: GetActionsForMouseButtonCustomization
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetActionsForMouseButtonCustomization (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: GetActionsForGraphicsTabletButtonCustomization
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetActionsForGraphicsTabletButtonCustomization (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: GetMetaKeyToDisplay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMetaKeyToDisplay (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: HasKeyboardBacklight
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasKeyboardBacklight (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: HasAmbientLightSensor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasAmbientLightSensor (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: IsRgbKeyboardSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsRgbKeyboardSupported (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: RecordKeyboardColorLinkClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordKeyboardColorLinkClicked (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: RecordKeyboardBrightnessChangeFromSlider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordKeyboardBrightnessChangeFromSlider (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: GetDeviceIconImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceIconImage (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: LaunchCompanionApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchCompanionApp (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeKeyboardSettings');
          const result = this.impl.observeKeyboardSettings(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveTouchpadSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeTouchpadSettings');
          const result = this.impl.observeTouchpadSettings(params.arg_observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObservePointingStickSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observePointingStickSettings');
          const result = this.impl.observePointingStickSettings(params.arg_observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveMouseSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeMouseSettings');
          const result = this.impl.observeMouseSettings(params.arg_observer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveGraphicsTabletSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeGraphicsTabletSettings');
          const result = this.impl.observeGraphicsTabletSettings(params.arg_observer);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveButtonPresses_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeButtonPresses');
          const result = this.impl.observeButtonPresses(params.arg_observer);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardBrightness_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeKeyboardBrightness');
          const result = this.impl.observeKeyboardBrightness(params.arg_observer);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveKeyboardAmbientLightSensor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeKeyboardAmbientLightSensor');
          const result = this.impl.observeKeyboardAmbientLightSensor(params.arg_observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeLidState');
          const result = this.impl.observeLidState(params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_ObserveLidState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ObserveLidState FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RestoreDefaultKeyboardRemappings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restoreDefaultKeyboardRemappings');
          const result = this.impl.restoreDefaultKeyboardRemappings(params.arg_device_id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setKeyboardSettings');
          const result = this.impl.setKeyboardSettings(params.arg_device_id, params.arg_settings);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetPointingStickSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPointingStickSettings');
          const result = this.impl.setPointingStickSettings(params.arg_device_id, params.arg_settings);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetMouseSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMouseSettings');
          const result = this.impl.setMouseSettings(params.arg_device_id, params.arg_settings);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetTouchpadSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTouchpadSettings');
          const result = this.impl.setTouchpadSettings(params.arg_device_id, params.arg_settings);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetGraphicsTabletSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setGraphicsTabletSettings');
          const result = this.impl.setGraphicsTabletSettings(params.arg_device_id, params.arg_settings);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardBrightness_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setKeyboardBrightness');
          const result = this.impl.setKeyboardBrightness(params.arg_percent);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_SetKeyboardAmbientLightSensorEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setKeyboardAmbientLightSensorEnabled');
          const result = this.impl.setKeyboardAmbientLightSensorEnabled(params.arg_enabled);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_StartObserving_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startObserving');
          const result = this.impl.startObserving(params.arg_device_id);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_StopObserving_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopObserving');
          const result = this.impl.stopObserving();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getActionsForMouseButtonCustomization');
          const result = this.impl.getActionsForMouseButtonCustomization();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForMouseButtonCustomization_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetActionsForMouseButtonCustomization FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getActionsForGraphicsTabletButtonCustomization');
          const result = this.impl.getActionsForGraphicsTabletButtonCustomization();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetActionsForGraphicsTabletButtonCustomization_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetActionsForGraphicsTabletButtonCustomization FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMetaKeyToDisplay');
          const result = this.impl.getMetaKeyToDisplay();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetMetaKeyToDisplay_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMetaKeyToDisplay FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasKeyboardBacklight');
          const result = this.impl.hasKeyboardBacklight();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasKeyboardBacklight_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HasKeyboardBacklight FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasAmbientLightSensor');
          const result = this.impl.hasAmbientLightSensor();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_HasAmbientLightSensor_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HasAmbientLightSensor FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isRgbKeyboardSupported');
          const result = this.impl.isRgbKeyboardSupported();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_IsRgbKeyboardSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsRgbKeyboardSupported FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardColorLinkClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordKeyboardColorLinkClicked');
          const result = this.impl.recordKeyboardColorLinkClicked();
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_RecordKeyboardBrightnessChangeFromSlider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordKeyboardBrightnessChangeFromSlider');
          const result = this.impl.recordKeyboardBrightnessChangeFromSlider(params.arg_percent);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceIconImage');
          const result = this.impl.getDeviceIconImage(params.arg_device_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_GetDeviceIconImage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDeviceIconImage FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProvider_LaunchCompanionApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.launchCompanionApp');
          const result = this.impl.launchCompanionApp(params.arg_package_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProviderReceiver = mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProviderReceiver;

mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProviderPtr = mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProviderRemote;
mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProviderRequest = mojo.internal.bindings.ash.settings.mojom.InputDeviceSettingsProviderPendingReceiver;

