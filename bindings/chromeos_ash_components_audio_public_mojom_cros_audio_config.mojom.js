// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/audio/public/mojom/cros_audio_config.mojom
// Module: ash.audio_config.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.audio_config = ash.audio_config || {};
ash.audio_config.mojom = ash.audio_config.mojom || {};


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
  kStyleTransfer: 3,
  kBeamforming: 4,
};

// Struct: VoiceIsolationUIAppearance
ash.audio_config.mojom.VoiceIsolationUIAppearanceSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.VoiceIsolationUIAppearance',
      packedSize: 32,
      fields: [
        { name: 'toggle_type', packedOffset: 8, packedBitOffset: 0, type: ash.audio_config.mojom.AudioEffectTypeSpec, nullable: false },
        { name: 'effect_mode_options', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'show_effect_fallback_message', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AudioDevice
ash.audio_config.mojom.AudioDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.AudioDevice',
      packedSize: 80,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'display_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_active', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'device_type', packedOffset: 32, packedBitOffset: 0, type: ash.audio_config.mojom.AudioDeviceTypeSpec, nullable: false },
        { name: 'noise_cancellation_state', packedOffset: 40, packedBitOffset: 0, type: ash.audio_config.mojom.AudioEffectStateSpec, nullable: false },
        { name: 'style_transfer_state', packedOffset: 48, packedBitOffset: 0, type: ash.audio_config.mojom.AudioEffectStateSpec, nullable: false },
        { name: 'force_respect_ui_gains_state', packedOffset: 56, packedBitOffset: 0, type: ash.audio_config.mojom.AudioEffectStateSpec, nullable: false },
        { name: 'hfp_mic_sr_state', packedOffset: 64, packedBitOffset: 0, type: ash.audio_config.mojom.AudioEffectStateSpec, nullable: false },
        { name: 'spatial_audio_state', packedOffset: 72, packedBitOffset: 0, type: ash.audio_config.mojom.AudioEffectStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AudioSystemProperties
ash.audio_config.mojom.AudioSystemPropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.AudioSystemProperties',
      packedSize: 56,
      fields: [
        { name: 'output_devices', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'output_volume_percent', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'input_gain_percent', packedOffset: 17, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'output_mute_state', packedOffset: 24, packedBitOffset: 0, type: ash.audio_config.mojom.MuteStateSpec, nullable: false },
        { name: 'input_devices', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'input_mute_state', packedOffset: 40, packedBitOffset: 0, type: ash.audio_config.mojom.MuteStateSpec, nullable: false },
        { name: 'voice_isolation_ui_appearance', packedOffset: 48, packedBitOffset: 0, type: ash.audio_config.mojom.VoiceIsolationUIAppearanceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: AudioSystemPropertiesObserver
ash.audio_config.mojom.AudioSystemPropertiesObserver = {};

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
      [properties]);
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

// ParamsSpec for OnPropertiesUpdated
ash.audio_config.mojom.AudioSystemPropertiesObserver_OnPropertiesUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.AudioSystemPropertiesObserver.OnPropertiesUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 8, packedBitOffset: 0, type: ash.audio_config.mojom.AudioSystemPropertiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.audio_config.mojom.AudioSystemPropertiesObserverPtr = ash.audio_config.mojom.AudioSystemPropertiesObserverRemote;
ash.audio_config.mojom.AudioSystemPropertiesObserverRequest = ash.audio_config.mojom.AudioSystemPropertiesObserverPendingReceiver;


// Interface: CrosAudioConfig
ash.audio_config.mojom.CrosAudioConfig = {};

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
      [observer]);
  }

  setOutputMuted(muted) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetOutputMuted_ParamsSpec,
      null,
      [muted]);
  }

  setOutputVolumePercent(volume) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetOutputVolumePercent_ParamsSpec,
      null,
      [volume]);
  }

  setInputGainPercent(gain) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetInputGainPercent_ParamsSpec,
      null,
      [gain]);
  }

  setActiveDevice(device) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetActiveDevice_ParamsSpec,
      null,
      [device]);
  }

  setInputMuted(muted) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetInputMuted_ParamsSpec,
      null,
      [muted]);
  }

  recordVoiceIsolationEnabledChange() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationEnabledChange_ParamsSpec,
      null,
      []);
  }

  recordVoiceIsolationPreferredEffectChange(preferred_effect) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationPreferredEffectChange_ParamsSpec,
      null,
      [preferred_effect]);
  }

  setNoiseCancellationEnabled(enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setStyleTransferEnabled(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetStyleTransferEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setForceRespectUiGainsEnabled(enabled) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setHfpMicSrEnabled(enabled) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setSpatialAudioEnabled(enabled) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetSpatialAudioEnabled_ParamsSpec,
      null,
      [enabled]);
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

// ParamsSpec for ObserveAudioSystemProperties
ash.audio_config.mojom.CrosAudioConfig_ObserveAudioSystemProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.CrosAudioConfig.ObserveAudioSystemProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetOutputMuted
ash.audio_config.mojom.CrosAudioConfig_SetOutputMuted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.CrosAudioConfig.SetOutputMuted_Params',
      packedSize: 16,
      fields: [
        { name: 'muted', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetOutputVolumePercent
ash.audio_config.mojom.CrosAudioConfig_SetOutputVolumePercent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.CrosAudioConfig.SetOutputVolumePercent_Params',
      packedSize: 16,
      fields: [
        { name: 'volume', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetInputGainPercent
ash.audio_config.mojom.CrosAudioConfig_SetInputGainPercent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.CrosAudioConfig.SetInputGainPercent_Params',
      packedSize: 16,
      fields: [
        { name: 'gain', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetActiveDevice
ash.audio_config.mojom.CrosAudioConfig_SetActiveDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.CrosAudioConfig.SetActiveDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetInputMuted
ash.audio_config.mojom.CrosAudioConfig_SetInputMuted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.CrosAudioConfig.SetInputMuted_Params',
      packedSize: 16,
      fields: [
        { name: 'muted', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordVoiceIsolationEnabledChange
ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationEnabledChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.CrosAudioConfig.RecordVoiceIsolationEnabledChange_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordVoiceIsolationPreferredEffectChange
ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationPreferredEffectChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.CrosAudioConfig.RecordVoiceIsolationPreferredEffectChange_Params',
      packedSize: 16,
      fields: [
        { name: 'preferred_effect', packedOffset: 8, packedBitOffset: 0, type: ash.audio_config.mojom.AudioEffectTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNoiseCancellationEnabled
ash.audio_config.mojom.CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.CrosAudioConfig.SetNoiseCancellationEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetStyleTransferEnabled
ash.audio_config.mojom.CrosAudioConfig_SetStyleTransferEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.CrosAudioConfig.SetStyleTransferEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetForceRespectUiGainsEnabled
ash.audio_config.mojom.CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.CrosAudioConfig.SetForceRespectUiGainsEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetHfpMicSrEnabled
ash.audio_config.mojom.CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.CrosAudioConfig.SetHfpMicSrEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSpatialAudioEnabled
ash.audio_config.mojom.CrosAudioConfig_SetSpatialAudioEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.audio_config.mojom.CrosAudioConfig.SetSpatialAudioEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.audio_config.mojom.CrosAudioConfigPtr = ash.audio_config.mojom.CrosAudioConfigRemote;
ash.audio_config.mojom.CrosAudioConfigRequest = ash.audio_config.mojom.CrosAudioConfigPendingReceiver;

