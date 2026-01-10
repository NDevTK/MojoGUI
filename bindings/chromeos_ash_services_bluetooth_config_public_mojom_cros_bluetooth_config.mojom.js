// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/bluetooth_config/public/mojom/cros_bluetooth_config.mojom
// Module: ash.bluetooth_config.mojom

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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
ash.bluetooth_config = ash.bluetooth_config || {};
ash.bluetooth_config.mojom = ash.bluetooth_config.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

ash.bluetooth_config.mojom.BluetoothSystemStateSpec = { $: mojo.internal.Enum() };
ash.bluetooth_config.mojom.BluetoothModificationStateSpec = { $: mojo.internal.Enum() };
ash.bluetooth_config.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };
ash.bluetooth_config.mojom.AudioOutputCapabilitySpec = { $: mojo.internal.Enum() };
ash.bluetooth_config.mojom.DeviceConnectionStateSpec = { $: mojo.internal.Enum() };
ash.bluetooth_config.mojom.PairingResultSpec = { $: mojo.internal.Enum() };
ash.bluetooth_config.mojom.BatteryPropertiesSpec = { $: {} };
ash.bluetooth_config.mojom.DeviceBatteryInfoSpec = { $: {} };
ash.bluetooth_config.mojom.TrueWirelessImageInfoSpec = { $: {} };
ash.bluetooth_config.mojom.DeviceImageInfoSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec = { $: {} };
ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothSystemPropertiesSpec = { $: {} };
ash.bluetooth_config.mojom.SystemPropertiesObserver = {};
ash.bluetooth_config.mojom.SystemPropertiesObserver.$interfaceName = 'ash.bluetooth_config.mojom.SystemPropertiesObserver';
ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver = {};
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver.$interfaceName = 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver';
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DiscoverySessionStatusObserver = {};
ash.bluetooth_config.mojom.DiscoverySessionStatusObserver.$interfaceName = 'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver';
ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.KeyEnteredHandler = {};
ash.bluetooth_config.mojom.KeyEnteredHandler.$interfaceName = 'ash.bluetooth_config.mojom.KeyEnteredHandler';
ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate = {};
ash.bluetooth_config.mojom.DevicePairingDelegate.$interfaceName = 'ash.bluetooth_config.mojom.DevicePairingDelegate';
ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingHandler = {};
ash.bluetooth_config.mojom.DevicePairingHandler.$interfaceName = 'ash.bluetooth_config.mojom.DevicePairingHandler';
ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate = {};
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate.$interfaceName = 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate';
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig = {};
ash.bluetooth_config.mojom.CrosBluetoothConfig.$interfaceName = 'ash.bluetooth_config.mojom.CrosBluetoothConfig';
ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec = { $: {} };
ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec = { $: {} };

ash.bluetooth_config.mojom.kDeviceNicknameCharacterLimit = 32;

// Enum: BluetoothSystemState
ash.bluetooth_config.mojom.BluetoothSystemState = {
  kUnavailable: 0,
  kDisabled: 1,
  kDisabling: 2,
  kEnabled: 3,
  kEnabling: 4,
};

// Enum: BluetoothModificationState
ash.bluetooth_config.mojom.BluetoothModificationState = {
  kCannotModifyBluetooth: 0,
  kCanModifyBluetooth: 1,
};

// Enum: DeviceType
ash.bluetooth_config.mojom.DeviceType = {
  kUnknown: 0,
  kComputer: 1,
  kPhone: 2,
  kHeadset: 3,
  kVideoCamera: 4,
  kGameController: 5,
  kKeyboard: 6,
  kKeyboardMouseCombo: 7,
  kMouse: 8,
  kTablet: 9,
};

// Enum: AudioOutputCapability
ash.bluetooth_config.mojom.AudioOutputCapability = {
  kNotCapableOfAudioOutput: 0,
  kCapableOfAudioOutput: 1,
};

// Enum: DeviceConnectionState
ash.bluetooth_config.mojom.DeviceConnectionState = {
  kNotConnected: 0,
  kConnecting: 1,
  kConnected: 2,
};

// Enum: PairingResult
ash.bluetooth_config.mojom.PairingResult = {
  kSuccess: 0,
  kAuthFailed: 1,
  kNonAuthFailure: 2,
};

// Struct: BatteryProperties
mojo.internal.Struct(
    ash.bluetooth_config.mojom.BatteryPropertiesSpec, 'ash.bluetooth_config.mojom.BatteryProperties', [
      mojo.internal.StructField('battery_percentage', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DeviceBatteryInfo
mojo.internal.Struct(
    ash.bluetooth_config.mojom.DeviceBatteryInfoSpec, 'ash.bluetooth_config.mojom.DeviceBatteryInfo', [
      mojo.internal.StructField('default_properties', 0, 0, ash.bluetooth_config.mojom.BatteryPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('left_bud_info', 8, 0, ash.bluetooth_config.mojom.BatteryPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('right_bud_info', 16, 0, ash.bluetooth_config.mojom.BatteryPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('case_info', 24, 0, ash.bluetooth_config.mojom.BatteryPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TrueWirelessImageInfo
mojo.internal.Struct(
    ash.bluetooth_config.mojom.TrueWirelessImageInfoSpec, 'ash.bluetooth_config.mojom.TrueWirelessImageInfo', [
      mojo.internal.StructField('left_bud_image_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('right_bud_image_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('case_image_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceImageInfo
mojo.internal.Struct(
    ash.bluetooth_config.mojom.DeviceImageInfoSpec, 'ash.bluetooth_config.mojom.DeviceImageInfo', [
      mojo.internal.StructField('default_image_url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('true_wireless_images', 8, 0, ash.bluetooth_config.mojom.TrueWirelessImageInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothDeviceProperties
mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec, 'ash.bluetooth_config.mojom.BluetoothDeviceProperties', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('public_name', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_type', 24, 0, ash.bluetooth_config.mojom.DeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('audio_capability', 32, 0, ash.bluetooth_config.mojom.AudioOutputCapabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('battery_info', 40, 0, ash.bluetooth_config.mojom.DeviceBatteryInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('image_info', 48, 0, ash.bluetooth_config.mojom.DeviceImageInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connection_state', 56, 0, ash.bluetooth_config.mojom.DeviceConnectionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_blocked_by_policy', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: PairedBluetoothDeviceProperties
mojo.internal.Struct(
    ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec, 'ash.bluetooth_config.mojom.PairedBluetoothDeviceProperties', [
      mojo.internal.StructField('device_properties', 0, 0, ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('nickname', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothSystemProperties
mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothSystemPropertiesSpec, 'ash.bluetooth_config.mojom.BluetoothSystemProperties', [
      mojo.internal.StructField('system_state', 0, 0, ash.bluetooth_config.mojom.BluetoothSystemStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('modification_state', 8, 0, ash.bluetooth_config.mojom.BluetoothModificationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('paired_devices', 16, 0, mojo.internal.Array(ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: SystemPropertiesObserver
mojo.internal.Struct(
    ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec, 'ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_Params', [
      mojo.internal.StructField('properties', 0, 0, ash.bluetooth_config.mojom.BluetoothSystemPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.SystemPropertiesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.SystemPropertiesObserverRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.SystemPropertiesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.SystemPropertiesObserverPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.SystemPropertiesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.SystemPropertiesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SystemPropertiesObserver', [
      { explicit: null },
    ]);
  }

  onPropertiesUpdated(properties) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec,
      null,
      [properties],
      false);
  }

};

ash.bluetooth_config.mojom.SystemPropertiesObserver.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.SystemPropertiesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.SystemPropertiesObserver',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.SystemPropertiesObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SystemPropertiesObserver', [
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
             decoder.decodeStructInline(ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec);
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

ash.bluetooth_config.mojom.SystemPropertiesObserverReceiver = ash.bluetooth_config.mojom.SystemPropertiesObserverReceiver;

ash.bluetooth_config.mojom.SystemPropertiesObserverPtr = ash.bluetooth_config.mojom.SystemPropertiesObserverRemote;
ash.bluetooth_config.mojom.SystemPropertiesObserverRequest = ash.bluetooth_config.mojom.SystemPropertiesObserverPendingReceiver;


// Interface: BluetoothDeviceStatusObserver
mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_Params', [
      mojo.internal.StructField('device', 0, 0, ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_Params', [
      mojo.internal.StructField('device', 0, 0, ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_Params', [
      mojo.internal.StructField('device', 0, 0, ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BluetoothDeviceStatusObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDevicePaired(device) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec,
      null,
      [device],
      false);
  }

  onDeviceConnected(device) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec,
      null,
      [device],
      false);
  }

  onDeviceDisconnected(device) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec,
      null,
      [device],
      false);
  }

};

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BluetoothDeviceStatusObserver', [
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
        
        // Try Method 0: OnDevicePaired
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDevicePaired (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnDeviceConnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceConnected (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnDeviceDisconnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceDisconnected (2)');
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
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onDevicePaired');
          const result = this.impl.onDevicePaired(params.device);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceConnected');
          const result = this.impl.onDeviceConnected(params.device);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceDisconnected');
          const result = this.impl.onDeviceDisconnected(params.device);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverReceiver = ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverReceiver;

ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPtr = ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemote;
ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRequest = ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPendingReceiver;


// Interface: DiscoverySessionStatusObserver
mojo.internal.Struct(
    ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec, 'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_Params', [
      mojo.internal.StructField('has_at_least_one_discovery_session', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DiscoverySessionStatusObserver', [
      { explicit: null },
    ]);
  }

  onHasAtLeastOneDiscoverySessionChanged(has_at_least_one_discovery_session) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec,
      null,
      [has_at_least_one_discovery_session],
      false);
  }

};

ash.bluetooth_config.mojom.DiscoverySessionStatusObserver.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.DiscoverySessionStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DiscoverySessionStatusObserver', [
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
        
        // Try Method 0: OnHasAtLeastOneDiscoverySessionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHasAtLeastOneDiscoverySessionChanged (0)');
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
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onHasAtLeastOneDiscoverySessionChanged');
          const result = this.impl.onHasAtLeastOneDiscoverySessionChanged(params.has_at_least_one_discovery_session);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.bluetooth_config.mojom.DiscoverySessionStatusObserverReceiver = ash.bluetooth_config.mojom.DiscoverySessionStatusObserverReceiver;

ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPtr = ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemote;
ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRequest = ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPendingReceiver;


// Interface: KeyEnteredHandler
mojo.internal.Struct(
    ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec, 'ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_Params', [
      mojo.internal.StructField('num_keys_entered', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.KeyEnteredHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.KeyEnteredHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.KeyEnteredHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.KeyEnteredHandlerPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.KeyEnteredHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.KeyEnteredHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KeyEnteredHandler', [
      { explicit: null },
    ]);
  }

  handleKeyEntered(num_keys_entered) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec,
      null,
      [num_keys_entered],
      false);
  }

};

ash.bluetooth_config.mojom.KeyEnteredHandler.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.KeyEnteredHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.KeyEnteredHandler',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.KeyEnteredHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KeyEnteredHandler', [
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
        
        // Try Method 0: HandleKeyEntered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleKeyEntered (0)');
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
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.handleKeyEntered');
          const result = this.impl.handleKeyEntered(params.num_keys_entered);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.bluetooth_config.mojom.KeyEnteredHandlerReceiver = ash.bluetooth_config.mojom.KeyEnteredHandlerReceiver;

ash.bluetooth_config.mojom.KeyEnteredHandlerPtr = ash.bluetooth_config.mojom.KeyEnteredHandlerRemote;
ash.bluetooth_config.mojom.KeyEnteredHandlerRequest = ash.bluetooth_config.mojom.KeyEnteredHandlerPendingReceiver;


// Interface: DevicePairingDelegate
mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParams', [
      mojo.internal.StructField('pin_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParams', [
      mojo.internal.StructField('passkey', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_Params', [
      mojo.internal.StructField('pin_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.bluetooth_config.mojom.KeyEnteredHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_Params', [
      mojo.internal.StructField('passkey', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.bluetooth_config.mojom.KeyEnteredHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_Params', [
      mojo.internal.StructField('passkey', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParams', [
      mojo.internal.StructField('confirmed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParams', [
      mojo.internal.StructField('confirmed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.DevicePairingDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.DevicePairingDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.DevicePairingDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.DevicePairingDelegatePendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.DevicePairingDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.DevicePairingDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevicePairingDelegate', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestPinCode() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec,
      [],
      false);
  }

  requestPasskey() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec,
      [],
      false);
  }

  displayPinCode(pin_code, handler) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec,
      null,
      [pin_code, handler],
      false);
  }

  displayPasskey(passkey, handler) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec,
      null,
      [passkey, handler],
      false);
  }

  confirmPasskey(passkey) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec,
      [passkey],
      false);
  }

  authorizePairing() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec,
      [],
      false);
  }

};

ash.bluetooth_config.mojom.DevicePairingDelegate.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.DevicePairingDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.DevicePairingDelegate',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.DevicePairingDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DevicePairingDelegate', [
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
        
        // Try Method 0: RequestPinCode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPinCode (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestPasskey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPasskey (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DisplayPinCode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayPinCode (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DisplayPasskey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayPasskey (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ConfirmPasskey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfirmPasskey (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: AuthorizePairing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AuthorizePairing (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPinCode');
          const result = this.impl.requestPinCode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPasskey');
          const result = this.impl.requestPasskey();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.displayPinCode');
          const result = this.impl.displayPinCode(params.pin_code, params.handler);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.displayPasskey');
          const result = this.impl.displayPasskey(params.passkey, params.handler);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.confirmPasskey');
          const result = this.impl.confirmPasskey(params.passkey);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.authorizePairing');
          const result = this.impl.authorizePairing();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec);
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

ash.bluetooth_config.mojom.DevicePairingDelegateReceiver = ash.bluetooth_config.mojom.DevicePairingDelegateReceiver;

ash.bluetooth_config.mojom.DevicePairingDelegatePtr = ash.bluetooth_config.mojom.DevicePairingDelegateRemote;
ash.bluetooth_config.mojom.DevicePairingDelegateRequest = ash.bluetooth_config.mojom.DevicePairingDelegatePendingReceiver;


// Interface: DevicePairingHandler
mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('delegate', 8, 0, mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.DevicePairingDelegateSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.bluetooth_config.mojom.PairingResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_Params', [
      mojo.internal.StructField('device_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParams', [
      mojo.internal.StructField('device', 0, 0, ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.DevicePairingHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.DevicePairingHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.DevicePairingHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.DevicePairingHandlerPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.DevicePairingHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.DevicePairingHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevicePairingHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  pairDevice(device_id, delegate) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec,
      [device_id, delegate],
      false);
  }

  fetchDevice(device_address) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec,
      ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec,
      [device_address],
      false);
  }

};

ash.bluetooth_config.mojom.DevicePairingHandler.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.DevicePairingHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.DevicePairingHandler',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.DevicePairingHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DevicePairingHandler', [
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
        
        // Try Method 0: PairDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PairDevice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FetchDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchDevice (1)');
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
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.pairDevice');
          const result = this.impl.pairDevice(params.device_id, params.delegate);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchDevice');
          const result = this.impl.fetchDevice(params.device_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec);
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

ash.bluetooth_config.mojom.DevicePairingHandlerReceiver = ash.bluetooth_config.mojom.DevicePairingHandlerReceiver;

ash.bluetooth_config.mojom.DevicePairingHandlerPtr = ash.bluetooth_config.mojom.DevicePairingHandlerRemote;
ash.bluetooth_config.mojom.DevicePairingHandlerRequest = ash.bluetooth_config.mojom.DevicePairingHandlerPendingReceiver;


// Interface: BluetoothDiscoveryDelegate
mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.DevicePairingHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_Params', [
      mojo.internal.StructField('discovered_devices', 0, 0, mojo.internal.Array(ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BluetoothDiscoveryDelegate', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onBluetoothDiscoveryStarted(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec,
      null,
      [handler],
      false);
  }

  onBluetoothDiscoveryStopped() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec,
      null,
      [],
      false);
  }

  onDiscoveredDevicesListChanged(discovered_devices) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec,
      null,
      [discovered_devices],
      false);
  }

};

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BluetoothDiscoveryDelegate', [
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
        
        // Try Method 0: OnBluetoothDiscoveryStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBluetoothDiscoveryStarted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnBluetoothDiscoveryStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBluetoothDiscoveryStopped (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnDiscoveredDevicesListChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDiscoveredDevicesListChanged (2)');
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
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onBluetoothDiscoveryStarted');
          const result = this.impl.onBluetoothDiscoveryStarted(params.handler);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onBluetoothDiscoveryStopped');
          const result = this.impl.onBluetoothDiscoveryStopped();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onDiscoveredDevicesListChanged');
          const result = this.impl.onDiscoveredDevicesListChanged(params.discovered_devices);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateReceiver = ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateReceiver;

ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePtr = ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemote;
ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRequest = ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePendingReceiver;


// Interface: CrosBluetoothConfig
mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.SystemPropertiesObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.DiscoverySessionStatusObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_Params', [
      mojo.internal.StructField('is_using_bluetooth', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_Params', [
      mojo.internal.StructField('delegate', 0, 0, mojo.internal.InterfaceProxy(ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('nickname', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.bluetooth_config.mojom.CrosBluetoothConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.bluetooth_config.mojom.CrosBluetoothConfigRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.CrosBluetoothConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.bluetooth_config.mojom.CrosBluetoothConfigPendingReceiver,
      handle);
    this.$ = new ash.bluetooth_config.mojom.CrosBluetoothConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.bluetooth_config.mojom.CrosBluetoothConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosBluetoothConfig', [
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

  observeSystemProperties(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeDeviceStatusChanges(observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeDiscoverySessionStatusChanges(observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec,
      null,
      [observer],
      false);
  }

  setBluetoothEnabledState(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setBluetoothEnabledWithoutPersistence() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec,
      null,
      [],
      false);
  }

  setBluetoothHidDetectionInactive(is_using_bluetooth) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec,
      null,
      [is_using_bluetooth],
      false);
  }

  startDiscovery(delegate) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec,
      null,
      [delegate],
      false);
  }

  connect(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec,
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec,
      [device_id],
      false);
  }

  disconnect(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec,
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec,
      [device_id],
      false);
  }

  forget(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec,
      ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec,
      [device_id],
      false);
  }

  setDeviceNickname(device_id, nickname) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec,
      null,
      [device_id, nickname],
      false);
  }

};

ash.bluetooth_config.mojom.CrosBluetoothConfig.getRemote = function() {
  let remote = new ash.bluetooth_config.mojom.CrosBluetoothConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.CrosBluetoothConfig',
    'context');
  return remote.$;
};

ash.bluetooth_config.mojom.CrosBluetoothConfigReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosBluetoothConfig', [
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
        
        // Try Method 0: ObserveSystemProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveSystemProperties (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ObserveDeviceStatusChanges
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveDeviceStatusChanges (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ObserveDiscoverySessionStatusChanges
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObserveDiscoverySessionStatusChanges (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetBluetoothEnabledState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBluetoothEnabledState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetBluetoothEnabledWithoutPersistence
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBluetoothEnabledWithoutPersistence (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetBluetoothHidDetectionInactive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBluetoothHidDetectionInactive (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: StartDiscovery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDiscovery (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Connect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Connect (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: Disconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Disconnect (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Forget
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Forget (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetDeviceNickname
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDeviceNickname (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
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
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.observeSystemProperties');
          const result = this.impl.observeSystemProperties(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.observeDeviceStatusChanges');
          const result = this.impl.observeDeviceStatusChanges(params.observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.observeDiscoverySessionStatusChanges');
          const result = this.impl.observeDiscoverySessionStatusChanges(params.observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setBluetoothEnabledState');
          const result = this.impl.setBluetoothEnabledState(params.enabled);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setBluetoothEnabledWithoutPersistence');
          const result = this.impl.setBluetoothEnabledWithoutPersistence();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setBluetoothHidDetectionInactive');
          const result = this.impl.setBluetoothHidDetectionInactive(params.is_using_bluetooth);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.startDiscovery');
          const result = this.impl.startDiscovery(params.delegate);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnect');
          const result = this.impl.disconnect(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.forget');
          const result = this.impl.forget(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setDeviceNickname');
          const result = this.impl.setDeviceNickname(params.device_id, params.nickname);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.bluetooth_config.mojom.CrosBluetoothConfigReceiver = ash.bluetooth_config.mojom.CrosBluetoothConfigReceiver;

ash.bluetooth_config.mojom.CrosBluetoothConfigPtr = ash.bluetooth_config.mojom.CrosBluetoothConfigRemote;
ash.bluetooth_config.mojom.CrosBluetoothConfigRequest = ash.bluetooth_config.mojom.CrosBluetoothConfigPendingReceiver;

