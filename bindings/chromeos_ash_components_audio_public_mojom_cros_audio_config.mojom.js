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
      null,
      [properties],
      undefined,
      undefined
    );
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
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      null,
      [observer],
      undefined,
      undefined
    );
  }

  setOutputMuted(muted) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetOutputMuted_ParamsSpec,
      null,
      null,
      [muted],
      undefined,
      undefined
    );
  }

  setOutputVolumePercent(volume) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetOutputVolumePercent_ParamsSpec,
      null,
      null,
      [volume],
      undefined,
      undefined
    );
  }

  setInputGainPercent(gain) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetInputGainPercent_ParamsSpec,
      null,
      null,
      [gain],
      undefined,
      undefined
    );
  }

  setActiveDevice(device) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetActiveDevice_ParamsSpec,
      null,
      null,
      [device],
      undefined,
      undefined
    );
  }

  setInputMuted(muted) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetInputMuted_ParamsSpec,
      null,
      null,
      [muted],
      undefined,
      undefined
    );
  }

  recordVoiceIsolationEnabledChange() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationEnabledChange_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  recordVoiceIsolationPreferredEffectChange(preferred_effect) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_RecordVoiceIsolationPreferredEffectChange_ParamsSpec,
      null,
      null,
      [preferred_effect],
      undefined,
      undefined
    );
  }

  setNoiseCancellationEnabled(enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetNoiseCancellationEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  setStyleTransferEnabled(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetStyleTransferEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  setForceRespectUiGainsEnabled(enabled) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetForceRespectUiGainsEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  setHfpMicSrEnabled(enabled) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetHfpMicSrEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  setSpatialAudioEnabled(enabled) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.audio_config.mojom.CrosAudioConfig_SetSpatialAudioEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
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
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'muted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'gain', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'muted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'preferred_effect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.audio_config.mojom.CrosAudioConfigPtr = ash.audio_config.mojom.CrosAudioConfigRemote;
ash.audio_config.mojom.CrosAudioConfigRequest = ash.audio_config.mojom.CrosAudioConfigPendingReceiver;

