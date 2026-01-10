// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/audio/public/mojom/cros_audio_config.mojom
// Module: ash.audio_config.mojom

'use strict';

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
  }

  onPropertiesUpdated(properties) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.audio_config.mojom.AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPropertiesUpdated(params.properties);
          break;
        }
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
  }

  observeAudioSystemProperties(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec,
      null,
      [observer],
      false);
  }

  setOutputMuted(muted) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetOutputMuted_ParamsSpec,
      null,
      [muted],
      false);
  }

  setOutputVolumePercent(volume) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetOutputVolumePercent_ParamsSpec,
      null,
      [volume],
      false);
  }

  setInputGainPercent(gain) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetInputGainPercent_ParamsSpec,
      null,
      [gain],
      false);
  }

  setActiveDevice(device) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetActiveDevice_ParamsSpec,
      null,
      [device],
      false);
  }

  setInputMuted(muted) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetInputMuted_ParamsSpec,
      null,
      [muted],
      false);
  }

  recordVoiceIsolationEnabledChange() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationEnabledChange_ParamsSpec,
      null,
      [],
      false);
  }

  recordVoiceIsolationPreferredEffectChange(preferred_effect) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationPreferredEffectChange_ParamsSpec,
      null,
      [preferred_effect],
      false);
  }

  setNoiseCancellationEnabled(enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setStyleTransferEnabled(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetStyleTransferEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setForceRespectUiGainsEnabled(enabled) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setHfpMicSrEnabled(enabled) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setSpatialAudioEnabled(enabled) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.audio_config.mojom.CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeAudioSystemProperties(params.observer);
          break;
        }
        case 1: {
          const params = ash.audio_config.mojom.CrosAudioConfig_SetOutputMuted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setOutputMuted(params.muted);
          break;
        }
        case 2: {
          const params = ash.audio_config.mojom.CrosAudioConfig_SetOutputVolumePercent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setOutputVolumePercent(params.volume);
          break;
        }
        case 3: {
          const params = ash.audio_config.mojom.CrosAudioConfig_SetInputGainPercent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setInputGainPercent(params.gain);
          break;
        }
        case 4: {
          const params = ash.audio_config.mojom.CrosAudioConfig_SetActiveDevice_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setActiveDevice(params.device);
          break;
        }
        case 5: {
          const params = ash.audio_config.mojom.CrosAudioConfig_SetInputMuted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setInputMuted(params.muted);
          break;
        }
        case 6: {
          const params = ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationEnabledChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordVoiceIsolationEnabledChange();
          break;
        }
        case 7: {
          const params = ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationPreferredEffectChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordVoiceIsolationPreferredEffectChange(params.preferred_effect);
          break;
        }
        case 8: {
          const params = ash.audio_config.mojom.CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setNoiseCancellationEnabled(params.enabled);
          break;
        }
        case 9: {
          const params = ash.audio_config.mojom.CrosAudioConfig_SetStyleTransferEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setStyleTransferEnabled(params.enabled);
          break;
        }
        case 10: {
          const params = ash.audio_config.mojom.CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setForceRespectUiGainsEnabled(params.enabled);
          break;
        }
        case 11: {
          const params = ash.audio_config.mojom.CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setHfpMicSrEnabled(params.enabled);
          break;
        }
        case 12: {
          const params = ash.audio_config.mojom.CrosAudioConfig_SetSpatialAudioEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSpatialAudioEnabled(params.enabled);
          break;
        }
      }
    }});
  }
};

ash.audio_config.mojom.CrosAudioConfigReceiver = ash.audio_config.mojom.CrosAudioConfigReceiver;

ash.audio_config.mojom.CrosAudioConfigPtr = ash.audio_config.mojom.CrosAudioConfigRemote;
ash.audio_config.mojom.CrosAudioConfigRequest = ash.audio_config.mojom.CrosAudioConfigPendingReceiver;

