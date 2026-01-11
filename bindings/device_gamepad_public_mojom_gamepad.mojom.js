// Auto-generated MojoJS binding
// Source: chromium_src/device/gamepad/public/mojom/gamepad.mojom
// Module: device.mojom

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
var device = device || {};
device.mojom = device.mojom || {};
var mojo_base = mojo_base || {};

device.mojom.GamepadMappingSpec = { $: mojo.internal.Enum() };
device.mojom.GamepadHandSpec = { $: mojo.internal.Enum() };
device.mojom.GamepadHapticActuatorTypeSpec = { $: mojo.internal.Enum() };
device.mojom.GamepadHapticEffectTypeSpec = { $: mojo.internal.Enum() };
device.mojom.GamepadHapticsResultSpec = { $: mojo.internal.Enum() };
device.mojom.GamepadQuaternionSpec = { $: {} };
device.mojom.GamepadVectorSpec = { $: {} };
device.mojom.GamepadButtonSpec = { $: {} };
device.mojom.GamepadTouchSpec = { $: {} };
device.mojom.GamepadPoseSpec = { $: {} };
device.mojom.GamepadHapticActuatorSpec = { $: {} };
device.mojom.GamepadSpec = { $: {} };
device.mojom.GamepadEffectParametersSpec = { $: {} };
device.mojom.GamepadObserver = {};
device.mojom.GamepadObserver.$interfaceName = 'device.mojom.GamepadObserver';
device.mojom.GamepadObserver_GamepadConnected_ParamsSpec = { $: {} };
device.mojom.GamepadObserver_GamepadDisconnected_ParamsSpec = { $: {} };
device.mojom.GamepadObserver_GamepadRawInputChanged_ParamsSpec = { $: {} };
device.mojom.GamepadMonitor = {};
device.mojom.GamepadMonitor.$interfaceName = 'device.mojom.GamepadMonitor';
device.mojom.GamepadMonitor_GamepadStartPolling_ParamsSpec = { $: {} };
device.mojom.GamepadMonitor_GamepadStartPolling_ResponseParamsSpec = { $: {} };
device.mojom.GamepadMonitor_GamepadStopPolling_ParamsSpec = { $: {} };
device.mojom.GamepadMonitor_GamepadStopPolling_ResponseParamsSpec = { $: {} };
device.mojom.GamepadMonitor_SetObserver_ParamsSpec = { $: {} };
device.mojom.GamepadHapticsManager = {};
device.mojom.GamepadHapticsManager.$interfaceName = 'device.mojom.GamepadHapticsManager';
device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ParamsSpec = { $: {} };
device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ResponseParamsSpec = { $: {} };
device.mojom.GamepadHapticsManager_ResetVibrationActuator_ParamsSpec = { $: {} };
device.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParamsSpec = { $: {} };

// Enum: GamepadMapping
device.mojom.GamepadMapping = {
  GamepadMappingNone: 0,
  GamepadMappingStandard: 1,
  GamepadMappingXRStandard: 2,
};

// Enum: GamepadHand
device.mojom.GamepadHand = {
  GamepadHandNone: 0,
  GamepadHandLeft: 1,
  GamepadHandRight: 2,
};

// Enum: GamepadHapticActuatorType
device.mojom.GamepadHapticActuatorType = {
  GamepadHapticActuatorTypeVibration: 0,
  GamepadHapticActuatorTypeDualRumble: 1,
  GamepadHapticActuatorTypeTriggerRumble: 2,
};

// Enum: GamepadHapticEffectType
device.mojom.GamepadHapticEffectType = {
  GamepadHapticEffectTypeDualRumble: 0,
  GamepadHapticEffectTypeTriggerRumble: 1,
};

// Enum: GamepadHapticsResult
device.mojom.GamepadHapticsResult = {
  GamepadHapticsResultError: 0,
  GamepadHapticsResultComplete: 1,
  GamepadHapticsResultPreempted: 2,
  GamepadHapticsResultInvalidParameter: 3,
  GamepadHapticsResultNotSupported: 4,
};

// Struct: GamepadQuaternion
mojo.internal.Struct(
    device.mojom.GamepadQuaternionSpec, 'device.mojom.GamepadQuaternion', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('w', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GamepadVector
mojo.internal.Struct(
    device.mojom.GamepadVectorSpec, 'device.mojom.GamepadVector', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GamepadButton
mojo.internal.Struct(
    device.mojom.GamepadButtonSpec, 'device.mojom.GamepadButton', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('pressed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('touched', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GamepadTouch
mojo.internal.Struct(
    device.mojom.GamepadTouchSpec, 'device.mojom.GamepadTouch', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('touch_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('surface_height', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('surface_width', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('surface_id', 28, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('has_surface_dimensions', 29, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: GamepadPose
mojo.internal.Struct(
    device.mojom.GamepadPoseSpec, 'device.mojom.GamepadPose', [
      mojo.internal.StructField('orientation', 0, 0, device.mojom.GamepadQuaternionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('position', 8, 0, device.mojom.GamepadVectorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('angular_velocity', 16, 0, device.mojom.GamepadVectorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('linear_velocity', 24, 0, device.mojom.GamepadVectorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('angular_acceleration', 32, 0, device.mojom.GamepadVectorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('linear_acceleration', 40, 0, device.mojom.GamepadVectorSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: GamepadHapticActuator
mojo.internal.Struct(
    device.mojom.GamepadHapticActuatorSpec, 'device.mojom.GamepadHapticActuator', [
      mojo.internal.StructField('type', 0, 0, device.mojom.GamepadHapticActuatorTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Gamepad
mojo.internal.Struct(
    device.mojom.GamepadSpec, 'device.mojom.Gamepad', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('axes', 16, 0, mojo.internal.Array(mojo.internal.Double, false), null, false, 0, undefined),
      mojo.internal.StructField('buttons', 24, 0, mojo.internal.Array(device.mojom.GamepadButtonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('vibration_actuator', 32, 0, device.mojom.GamepadHapticActuatorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('mapping', 40, 0, device.mojom.GamepadMappingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pose', 48, 0, device.mojom.GamepadPoseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('hand', 56, 0, device.mojom.GamepadHandSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('touch_events', 64, 0, mojo.internal.Array(device.mojom.GamepadTouchSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('display_id', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('connected', 76, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: GamepadEffectParameters
mojo.internal.Struct(
    device.mojom.GamepadEffectParametersSpec, 'device.mojom.GamepadEffectParameters', [
      mojo.internal.StructField('duration', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('start_delay', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('strong_magnitude', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('weak_magnitude', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('left_trigger', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('right_trigger', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: GamepadObserver
mojo.internal.Struct(
    device.mojom.GamepadObserver_GamepadConnected_ParamsSpec, 'device.mojom.GamepadObserver_GamepadConnected_Params', [
      mojo.internal.StructField('gamepad', 0, 0, device.mojom.GamepadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.GamepadObserver_GamepadDisconnected_ParamsSpec, 'device.mojom.GamepadObserver_GamepadDisconnected_Params', [
      mojo.internal.StructField('gamepad', 0, 0, device.mojom.GamepadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.GamepadObserver_GamepadRawInputChanged_ParamsSpec, 'device.mojom.GamepadObserver_GamepadRawInputChanged_Params', [
      mojo.internal.StructField('gamepad', 0, 0, device.mojom.GamepadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

device.mojom.GamepadObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.GamepadObserverRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GamepadObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.GamepadObserverPendingReceiver,
      handle);
    this.$ = new device.mojom.GamepadObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  gamepadConnected(index, gamepad) {
    return this.$.gamepadConnected(index, gamepad);
  }
  gamepadDisconnected(index, gamepad) {
    return this.$.gamepadDisconnected(index, gamepad);
  }
  gamepadRawInputChanged(index, gamepad) {
    return this.$.gamepadRawInputChanged(index, gamepad);
  }
};

device.mojom.GamepadObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GamepadObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  gamepadConnected(index, gamepad) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.GamepadObserver_GamepadConnected_ParamsSpec,
      null,
      [index, gamepad],
      false);
  }

  gamepadDisconnected(index, gamepad) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.GamepadObserver_GamepadDisconnected_ParamsSpec,
      null,
      [index, gamepad],
      false);
  }

  gamepadRawInputChanged(index, gamepad) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.GamepadObserver_GamepadRawInputChanged_ParamsSpec,
      null,
      [index, gamepad],
      false);
  }

};

device.mojom.GamepadObserver.getRemote = function() {
  let remote = new device.mojom.GamepadObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GamepadObserver',
    'context');
  return remote.$;
};

device.mojom.GamepadObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GamepadObserver', [
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
        
        // Try Method 0: GamepadConnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.GamepadObserver_GamepadConnected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GamepadConnected (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GamepadDisconnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.GamepadObserver_GamepadDisconnected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GamepadDisconnected (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GamepadRawInputChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.GamepadObserver_GamepadRawInputChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GamepadRawInputChanged (2)');
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
          const params = decoder.decodeStructInline(device.mojom.GamepadObserver_GamepadConnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.gamepadConnected');
          const result = this.impl.gamepadConnected(params.index, params.gamepad);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.GamepadObserver_GamepadDisconnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.gamepadDisconnected');
          const result = this.impl.gamepadDisconnected(params.index, params.gamepad);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.GamepadObserver_GamepadRawInputChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.gamepadRawInputChanged');
          const result = this.impl.gamepadRawInputChanged(params.index, params.gamepad);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.GamepadObserverReceiver = device.mojom.GamepadObserverReceiver;

device.mojom.GamepadObserverPtr = device.mojom.GamepadObserverRemote;
device.mojom.GamepadObserverRequest = device.mojom.GamepadObserverPendingReceiver;


// Interface: GamepadMonitor
mojo.internal.Struct(
    device.mojom.GamepadMonitor_GamepadStartPolling_ParamsSpec, 'device.mojom.GamepadMonitor_GamepadStartPolling_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.GamepadMonitor_GamepadStartPolling_ResponseParamsSpec, 'device.mojom.GamepadMonitor_GamepadStartPolling_ResponseParams', [
      mojo.internal.StructField('memory_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.GamepadMonitor_GamepadStopPolling_ParamsSpec, 'device.mojom.GamepadMonitor_GamepadStopPolling_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.GamepadMonitor_GamepadStopPolling_ResponseParamsSpec, 'device.mojom.GamepadMonitor_GamepadStopPolling_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.GamepadMonitor_SetObserver_ParamsSpec, 'device.mojom.GamepadMonitor_SetObserver_Params', [
      mojo.internal.StructField('gamepad_observer', 0, 0, mojo.internal.InterfaceProxy(device.mojom.GamepadObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.GamepadMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.GamepadMonitorRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GamepadMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.GamepadMonitorPendingReceiver,
      handle);
    this.$ = new device.mojom.GamepadMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  gamepadStartPolling() {
    return this.$.gamepadStartPolling();
  }
  gamepadStopPolling() {
    return this.$.gamepadStopPolling();
  }
  setObserver(gamepad_observer) {
    return this.$.setObserver(gamepad_observer);
  }
};

device.mojom.GamepadMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GamepadMonitor', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  gamepadStartPolling() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.GamepadMonitor_GamepadStartPolling_ParamsSpec,
      device.mojom.GamepadMonitor_GamepadStartPolling_ResponseParamsSpec,
      [],
      false);
  }

  gamepadStopPolling() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.GamepadMonitor_GamepadStopPolling_ParamsSpec,
      device.mojom.GamepadMonitor_GamepadStopPolling_ResponseParamsSpec,
      [],
      false);
  }

  setObserver(gamepad_observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.GamepadMonitor_SetObserver_ParamsSpec,
      null,
      [gamepad_observer],
      false);
  }

};

device.mojom.GamepadMonitor.getRemote = function() {
  let remote = new device.mojom.GamepadMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GamepadMonitor',
    'context');
  return remote.$;
};

device.mojom.GamepadMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GamepadMonitor', [
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
        
        // Try Method 0: GamepadStartPolling
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.GamepadMonitor_GamepadStartPolling_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GamepadStartPolling (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GamepadStopPolling
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.GamepadMonitor_GamepadStopPolling_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GamepadStopPolling (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.GamepadMonitor_SetObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetObserver (2)');
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
          const params = decoder.decodeStructInline(device.mojom.GamepadMonitor_GamepadStartPolling_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.gamepadStartPolling');
          const result = this.impl.gamepadStartPolling();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.GamepadMonitor_GamepadStartPolling_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GamepadStartPolling FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.GamepadMonitor_GamepadStopPolling_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.gamepadStopPolling');
          const result = this.impl.gamepadStopPolling();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.GamepadMonitor_GamepadStopPolling_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GamepadStopPolling FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.GamepadMonitor_SetObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setObserver');
          const result = this.impl.setObserver(params.gamepad_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.GamepadMonitorReceiver = device.mojom.GamepadMonitorReceiver;

device.mojom.GamepadMonitorPtr = device.mojom.GamepadMonitorRemote;
device.mojom.GamepadMonitorRequest = device.mojom.GamepadMonitorPendingReceiver;


// Interface: GamepadHapticsManager
mojo.internal.Struct(
    device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ParamsSpec, 'device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.GamepadHapticEffectTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, device.mojom.GamepadEffectParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pad_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ResponseParamsSpec, 'device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.GamepadHapticsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.GamepadHapticsManager_ResetVibrationActuator_ParamsSpec, 'device.mojom.GamepadHapticsManager_ResetVibrationActuator_Params', [
      mojo.internal.StructField('pad_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParamsSpec, 'device.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.GamepadHapticsResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.GamepadHapticsManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.GamepadHapticsManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GamepadHapticsManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.GamepadHapticsManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.GamepadHapticsManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  playVibrationEffectOnce(pad_index, type, params) {
    return this.$.playVibrationEffectOnce(pad_index, type, params);
  }
  resetVibrationActuator(pad_index) {
    return this.$.resetVibrationActuator(pad_index);
  }
};

device.mojom.GamepadHapticsManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GamepadHapticsManager', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  playVibrationEffectOnce(pad_index, type, params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ParamsSpec,
      device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ResponseParamsSpec,
      [pad_index, type, params],
      false);
  }

  resetVibrationActuator(pad_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.GamepadHapticsManager_ResetVibrationActuator_ParamsSpec,
      device.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParamsSpec,
      [pad_index],
      false);
  }

};

device.mojom.GamepadHapticsManager.getRemote = function() {
  let remote = new device.mojom.GamepadHapticsManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GamepadHapticsManager',
    'context');
  return remote.$;
};

device.mojom.GamepadHapticsManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GamepadHapticsManager', [
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
        
        // Try Method 0: PlayVibrationEffectOnce
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PlayVibrationEffectOnce (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ResetVibrationActuator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.GamepadHapticsManager_ResetVibrationActuator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetVibrationActuator (1)');
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
          const params = decoder.decodeStructInline(device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.playVibrationEffectOnce');
          const result = this.impl.playVibrationEffectOnce(params.pad_index, params.type, params.params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.GamepadHapticsManager_PlayVibrationEffectOnce_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PlayVibrationEffectOnce FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.GamepadHapticsManager_ResetVibrationActuator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetVibrationActuator');
          const result = this.impl.resetVibrationActuator(params.pad_index);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.GamepadHapticsManager_ResetVibrationActuator_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ResetVibrationActuator FAILED:', e));
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

device.mojom.GamepadHapticsManagerReceiver = device.mojom.GamepadHapticsManagerReceiver;

device.mojom.GamepadHapticsManagerPtr = device.mojom.GamepadHapticsManagerRemote;
device.mojom.GamepadHapticsManagerRequest = device.mojom.GamepadHapticsManagerPendingReceiver;

