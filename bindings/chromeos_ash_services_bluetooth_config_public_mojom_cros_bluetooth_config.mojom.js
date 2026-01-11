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
mojo.internal.bindings.ash.bluetooth_config = mojo.internal.bindings.ash.bluetooth_config || {};
mojo.internal.bindings.ash.bluetooth_config.mojom = mojo.internal.bindings.ash.bluetooth_config.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothSystemStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothModificationStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.bluetooth_config.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.bluetooth_config.mojom.AudioOutputCapabilitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.bluetooth_config.mojom.DeviceConnectionStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.bluetooth_config.mojom.PairingResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.bluetooth_config.mojom.BatteryPropertiesSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DeviceBatteryInfoSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.TrueWirelessImageInfoSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DeviceImageInfoSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothSystemPropertiesSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserver = {};
mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverSpec = { $ : {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserver.$interfaceName = 'ash.bluetooth_config.mojom.SystemPropertiesObserver';
mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver = {};
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverSpec = { $ : {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver.$interfaceName = 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver';
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserver = {};
mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverSpec = { $ : {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserver.$interfaceName = 'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver';
mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandler = {};
mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerSpec = { $ : {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandler.$interfaceName = 'ash.bluetooth_config.mojom.KeyEnteredHandler';
mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate = {};
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegateSpec = { $ : {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate.$interfaceName = 'ash.bluetooth_config.mojom.DevicePairingDelegate';
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler = {};
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerSpec = { $ : {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler.$interfaceName = 'ash.bluetooth_config.mojom.DevicePairingHandler';
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate = {};
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateSpec = { $ : {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate.$interfaceName = 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate';
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig = {};
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigSpec = { $ : {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig.$interfaceName = 'ash.bluetooth_config.mojom.CrosBluetoothConfig';
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec = { $: {} };

mojo.internal.bindings.ash.bluetooth_config.mojom.kDeviceNicknameCharacterLimit = 32;

// Enum: BluetoothSystemState
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothSystemState = {
  kUnavailable: 0,
  kDisabled: 1,
  kDisabling: 2,
  kEnabled: 3,
  kEnabling: 4,
};

// Enum: BluetoothModificationState
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothModificationState = {
  kCannotModifyBluetooth: 0,
  kCanModifyBluetooth: 1,
};

// Enum: DeviceType
mojo.internal.bindings.ash.bluetooth_config.mojom.DeviceType = {
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
mojo.internal.bindings.ash.bluetooth_config.mojom.AudioOutputCapability = {
  kNotCapableOfAudioOutput: 0,
  kCapableOfAudioOutput: 1,
};

// Enum: DeviceConnectionState
mojo.internal.bindings.ash.bluetooth_config.mojom.DeviceConnectionState = {
  kNotConnected: 0,
  kConnecting: 1,
  kConnected: 2,
};

// Enum: PairingResult
mojo.internal.bindings.ash.bluetooth_config.mojom.PairingResult = {
  kSuccess: 0,
  kAuthFailed: 1,
  kNonAuthFailure: 2,
};

// Struct: BatteryProperties
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.BatteryPropertiesSpec, 'ash.bluetooth_config.mojom.BatteryProperties', [
      mojo.internal.StructField('arg_battery_percentage', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DeviceBatteryInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DeviceBatteryInfoSpec, 'ash.bluetooth_config.mojom.DeviceBatteryInfo', [
      mojo.internal.StructField('arg_default_properties', 0, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.BatteryPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_left_bud_info', 8, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.BatteryPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_right_bud_info', 16, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.BatteryPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_case_info', 24, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.BatteryPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TrueWirelessImageInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.TrueWirelessImageInfoSpec, 'ash.bluetooth_config.mojom.TrueWirelessImageInfo', [
      mojo.internal.StructField('arg_left_bud_image_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_right_bud_image_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_case_image_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceImageInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DeviceImageInfoSpec, 'ash.bluetooth_config.mojom.DeviceImageInfo', [
      mojo.internal.StructField('arg_default_image_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_true_wireless_images', 8, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.TrueWirelessImageInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothDeviceProperties
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec, 'ash.bluetooth_config.mojom.BluetoothDeviceProperties', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_public_name', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_type', 24, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.DeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_audio_capability', 32, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.AudioOutputCapabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_battery_info', 40, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.DeviceBatteryInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_image_info', 48, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.DeviceImageInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_connection_state', 56, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.DeviceConnectionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_blocked_by_policy', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: PairedBluetoothDeviceProperties
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec, 'ash.bluetooth_config.mojom.PairedBluetoothDeviceProperties', [
      mojo.internal.StructField('arg_device_properties', 0, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_nickname', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BluetoothSystemProperties
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothSystemPropertiesSpec, 'ash.bluetooth_config.mojom.BluetoothSystemProperties', [
      mojo.internal.StructField('arg_system_state', 0, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothSystemStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_modification_state', 8, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothModificationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_paired_devices', 16, 0, mojo.internal.Array(mojo.internal.bindings.ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: SystemPropertiesObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec, 'ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_Params', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothSystemPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.SystemPropertiesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPropertiesUpdated(arg_properties) {
    return this.$.onPropertiesUpdated(arg_properties);
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.SystemPropertiesObserver', [
      { explicit: null },
    ]);
  }

  onPropertiesUpdated(arg_properties) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec,
      null,
      [arg_properties],
      false);
  }

};

mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.SystemPropertiesObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.SystemPropertiesObserver', [
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPropertiesUpdated');
          const result = this.impl.onPropertiesUpdated(params.arg_properties);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverReceiver = mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverReceiver;

mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverPtr = mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverRemote;
mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverRequest = mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverPendingReceiver;


// Interface: BluetoothDeviceStatusObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_Params', [
      mojo.internal.StructField('arg_device', 0, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_Params', [
      mojo.internal.StructField('arg_device', 0, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_Params', [
      mojo.internal.StructField('arg_device', 0, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.PairedBluetoothDevicePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDevicePaired(arg_device) {
    return this.$.onDevicePaired(arg_device);
  }
  onDeviceConnected(arg_device) {
    return this.$.onDeviceConnected(arg_device);
  }
  onDeviceDisconnected(arg_device) {
    return this.$.onDeviceDisconnected(arg_device);
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDevicePaired(arg_device) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec,
      null,
      [arg_device],
      false);
  }

  onDeviceConnected(arg_device) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec,
      null,
      [arg_device],
      false);
  }

  onDeviceDisconnected(arg_device) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec,
      null,
      [arg_device],
      false);
  }

};

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver', [
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDevicePaired_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDevicePaired');
          const result = this.impl.onDevicePaired(params.arg_device);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceConnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceConnected');
          const result = this.impl.onDeviceConnected(params.arg_device);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver_OnDeviceDisconnected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceDisconnected');
          const result = this.impl.onDeviceDisconnected(params.arg_device);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverReceiver = mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverReceiver;

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPtr = mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemote;
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRequest = mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverPendingReceiver;


// Interface: DiscoverySessionStatusObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec, 'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_Params', [
      mojo.internal.StructField('arg_has_at_least_one_discovery_session', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onHasAtLeastOneDiscoverySessionChanged(arg_has_at_least_one_discovery_session) {
    return this.$.onHasAtLeastOneDiscoverySessionChanged(arg_has_at_least_one_discovery_session);
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.DiscoverySessionStatusObserver', [
      { explicit: null },
    ]);
  }

  onHasAtLeastOneDiscoverySessionChanged(arg_has_at_least_one_discovery_session) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec,
      null,
      [arg_has_at_least_one_discovery_session],
      false);
  }

};

mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.DiscoverySessionStatusObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.DiscoverySessionStatusObserver', [
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserver_OnHasAtLeastOneDiscoverySessionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHasAtLeastOneDiscoverySessionChanged');
          const result = this.impl.onHasAtLeastOneDiscoverySessionChanged(params.arg_has_at_least_one_discovery_session);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverReceiver = mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverReceiver;

mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPtr = mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemote;
mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRequest = mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverPendingReceiver;


// Interface: KeyEnteredHandler
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec, 'ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_Params', [
      mojo.internal.StructField('arg_num_keys_entered', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.KeyEnteredHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  handleKeyEntered(arg_num_keys_entered) {
    return this.$.handleKeyEntered(arg_num_keys_entered);
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.KeyEnteredHandler', [
      { explicit: null },
    ]);
  }

  handleKeyEntered(arg_num_keys_entered) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec,
      null,
      [arg_num_keys_entered],
      false);
  }

};

mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.KeyEnteredHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.KeyEnteredHandler', [
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandler_HandleKeyEntered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleKeyEntered');
          const result = this.impl.handleKeyEntered(params.arg_num_keys_entered);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerReceiver = mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerReceiver;

mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerPtr = mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerRemote;
mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerRequest = mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerPendingReceiver;


// Interface: DevicePairingDelegate
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParams', [
      mojo.internal.StructField('arg_pin_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParams', [
      mojo.internal.StructField('arg_passkey', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_Params', [
      mojo.internal.StructField('arg_pin_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_Params', [
      mojo.internal.StructField('arg_passkey', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.bluetooth_config.mojom.KeyEnteredHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_Params', [
      mojo.internal.StructField('arg_passkey', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParams', [
      mojo.internal.StructField('arg_confirmed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParams', [
      mojo.internal.StructField('arg_confirmed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.DevicePairingDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegatePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestPinCode() {
    return this.$.requestPinCode();
  }
  requestPasskey() {
    return this.$.requestPasskey();
  }
  displayPinCode(arg_pin_code, arg_handler) {
    return this.$.displayPinCode(arg_pin_code, arg_handler);
  }
  displayPasskey(arg_passkey, arg_handler) {
    return this.$.displayPasskey(arg_passkey, arg_handler);
  }
  confirmPasskey(arg_passkey) {
    return this.$.confirmPasskey(arg_passkey);
  }
  authorizePairing() {
    return this.$.authorizePairing();
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.DevicePairingDelegate', [
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
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec,
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec,
      [],
      false);
  }

  requestPasskey() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec,
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec,
      [],
      false);
  }

  displayPinCode(arg_pin_code, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec,
      null,
      [arg_pin_code, arg_handler],
      false);
  }

  displayPasskey(arg_passkey, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec,
      null,
      [arg_passkey, arg_handler],
      false);
  }

  confirmPasskey(arg_passkey) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec,
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec,
      [arg_passkey],
      false);
  }

  authorizePairing() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec,
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.DevicePairingDelegate',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.DevicePairingDelegate', [
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPinCode');
          const result = this.impl.requestPinCode();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPinCode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPinCode FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPasskey');
          const result = this.impl.requestPasskey();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_RequestPasskey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPasskey FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPinCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.displayPinCode');
          const result = this.impl.displayPinCode(params.arg_pin_code, params.arg_handler);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_DisplayPasskey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.displayPasskey');
          const result = this.impl.displayPasskey(params.arg_passkey, params.arg_handler);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.confirmPasskey');
          const result = this.impl.confirmPasskey(params.arg_passkey);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_ConfirmPasskey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ConfirmPasskey FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.authorizePairing');
          const result = this.impl.authorizePairing();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegate_AuthorizePairing_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AuthorizePairing FAILED:', e));
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

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegateReceiver = mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegateReceiver;

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegatePtr = mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegateRemote;
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegateRequest = mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegatePendingReceiver;


// Interface: DevicePairingHandler
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_delegate', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingDelegateRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.PairingResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_Params', [
      mojo.internal.StructField('arg_device_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec, 'ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParams', [
      mojo.internal.StructField('arg_device', 0, 0, mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.DevicePairingHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  pairDevice(arg_device_id, arg_delegate) {
    return this.$.pairDevice(arg_device_id, arg_delegate);
  }
  fetchDevice(arg_device_address) {
    return this.$.fetchDevice(arg_device_address);
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.DevicePairingHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  pairDevice(arg_device_id, arg_delegate) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec,
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec,
      [arg_device_id, arg_delegate],
      false);
  }

  fetchDevice(arg_device_address) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec,
      mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec,
      [arg_device_address],
      false);
  }

};

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.DevicePairingHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.DevicePairingHandler', [
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pairDevice');
          const result = this.impl.pairDevice(params.arg_device_id, params.arg_delegate);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_PairDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PairDevice FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchDevice');
          const result = this.impl.fetchDevice(params.arg_device_address);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandler_FetchDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FetchDevice FAILED:', e));
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

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerReceiver = mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerReceiver;

mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerPtr = mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerRemote;
mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerRequest = mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerPendingReceiver;


// Interface: BluetoothDiscoveryDelegate
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.bluetooth_config.mojom.DevicePairingHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec, 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_Params', [
      mojo.internal.StructField('arg_discovered_devices', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDevicePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onBluetoothDiscoveryStarted(arg_handler) {
    return this.$.onBluetoothDiscoveryStarted(arg_handler);
  }
  onBluetoothDiscoveryStopped() {
    return this.$.onBluetoothDiscoveryStopped();
  }
  onDiscoveredDevicesListChanged(arg_discovered_devices) {
    return this.$.onDiscoveredDevicesListChanged(arg_discovered_devices);
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onBluetoothDiscoveryStarted(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec,
      null,
      [arg_handler],
      false);
  }

  onBluetoothDiscoveryStopped() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec,
      null,
      [],
      false);
  }

  onDiscoveredDevicesListChanged(arg_discovered_devices) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec,
      null,
      [arg_discovered_devices],
      false);
  }

};

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate', [
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBluetoothDiscoveryStarted');
          const result = this.impl.onBluetoothDiscoveryStarted(params.arg_handler);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnBluetoothDiscoveryStopped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBluetoothDiscoveryStopped');
          const result = this.impl.onBluetoothDiscoveryStopped();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate_OnDiscoveredDevicesListChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDiscoveredDevicesListChanged');
          const result = this.impl.onDiscoveredDevicesListChanged(params.arg_discovered_devices);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateReceiver = mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateReceiver;

mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePtr = mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemote;
mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRequest = mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegatePendingReceiver;


// Interface: CrosBluetoothConfig
mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.bluetooth_config.mojom.SystemPropertiesObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDeviceStatusObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.bluetooth_config.mojom.DiscoverySessionStatusObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_Params', [
      mojo.internal.StructField('arg_is_using_bluetooth', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_Params', [
      mojo.internal.StructField('arg_delegate', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.bluetooth_config.mojom.BluetoothDiscoveryDelegateRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec, 'ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_nickname', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigRemote = class {
  static get $interfaceName() {
    return 'ash.bluetooth_config.mojom.CrosBluetoothConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  observeSystemProperties(arg_observer) {
    return this.$.observeSystemProperties(arg_observer);
  }
  observeDeviceStatusChanges(arg_observer) {
    return this.$.observeDeviceStatusChanges(arg_observer);
  }
  observeDiscoverySessionStatusChanges(arg_observer) {
    return this.$.observeDiscoverySessionStatusChanges(arg_observer);
  }
  setBluetoothEnabledState(arg_enabled) {
    return this.$.setBluetoothEnabledState(arg_enabled);
  }
  setBluetoothEnabledWithoutPersistence() {
    return this.$.setBluetoothEnabledWithoutPersistence();
  }
  setBluetoothHidDetectionInactive(arg_is_using_bluetooth) {
    return this.$.setBluetoothHidDetectionInactive(arg_is_using_bluetooth);
  }
  startDiscovery(arg_delegate) {
    return this.$.startDiscovery(arg_delegate);
  }
  connect(arg_device_id) {
    return this.$.connect(arg_device_id);
  }
  disconnect(arg_device_id) {
    return this.$.disconnect(arg_device_id);
  }
  forget(arg_device_id) {
    return this.$.forget(arg_device_id);
  }
  setDeviceNickname(arg_device_id, arg_nickname) {
    return this.$.setDeviceNickname(arg_device_id, arg_nickname);
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.CrosBluetoothConfig', [
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

  observeSystemProperties(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeDeviceStatusChanges(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  observeDiscoverySessionStatusChanges(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  setBluetoothEnabledState(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setBluetoothEnabledWithoutPersistence() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec,
      null,
      [],
      false);
  }

  setBluetoothHidDetectionInactive(arg_is_using_bluetooth) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec,
      null,
      [arg_is_using_bluetooth],
      false);
  }

  startDiscovery(arg_delegate) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec,
      null,
      [arg_delegate],
      false);
  }

  connect(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec,
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec,
      [arg_device_id],
      false);
  }

  disconnect(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec,
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec,
      [arg_device_id],
      false);
  }

  forget(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec,
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec,
      [arg_device_id],
      false);
  }

  setDeviceNickname(arg_device_id, arg_nickname) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec,
      null,
      [arg_device_id, arg_nickname],
      false);
  }

};

mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.bluetooth_config.mojom.CrosBluetoothConfig',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.bluetooth_config.mojom.CrosBluetoothConfig', [
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveSystemProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeSystemProperties');
          const result = this.impl.observeSystemProperties(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDeviceStatusChanges_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeDeviceStatusChanges');
          const result = this.impl.observeDeviceStatusChanges(params.arg_observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_ObserveDiscoverySessionStatusChanges_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.observeDiscoverySessionStatusChanges');
          const result = this.impl.observeDiscoverySessionStatusChanges(params.arg_observer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBluetoothEnabledState');
          const result = this.impl.setBluetoothEnabledState(params.arg_enabled);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothEnabledWithoutPersistence_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBluetoothEnabledWithoutPersistence');
          const result = this.impl.setBluetoothEnabledWithoutPersistence();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetBluetoothHidDetectionInactive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBluetoothHidDetectionInactive');
          const result = this.impl.setBluetoothHidDetectionInactive(params.arg_is_using_bluetooth);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_StartDiscovery_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDiscovery');
          const result = this.impl.startDiscovery(params.arg_delegate);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.arg_device_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Connect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Connect FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnect');
          const result = this.impl.disconnect(params.arg_device_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Disconnect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Disconnect FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forget');
          const result = this.impl.forget(params.arg_device_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_Forget_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Forget FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfig_SetDeviceNickname_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDeviceNickname');
          const result = this.impl.setDeviceNickname(params.arg_device_id, params.arg_nickname);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigReceiver = mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigReceiver;

mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigPtr = mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigRemote;
mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigRequest = mojo.internal.bindings.ash.bluetooth_config.mojom.CrosBluetoothConfigPendingReceiver;

