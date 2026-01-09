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
};

// Enum: AudioEffectState
ash.audio_config.mojom.AudioEffectState = {
};

// Enum: MuteState
ash.audio_config.mojom.MuteState = {
};

// Enum: AudioEffectType
ash.audio_config.mojom.AudioEffectType = {
};

// Struct: VoiceIsolationUIAppearance
ash.audio_config.mojom.VoiceIsolationUIAppearance = class {
  constructor(values = {}) {
    this.toggle_type = values.toggle_type !== undefined ? values.toggle_type : null;
    this.show_effect_fallback_message = values.show_effect_fallback_message !== undefined ? values.show_effect_fallback_message : 0;
  }
};

// Struct: AudioDevice
ash.audio_config.mojom.AudioDevice = class {
  constructor(values = {}) {
    this.display_name = values.display_name !== undefined ? values.display_name : 0;
    this.one = values.one !== undefined ? values.one : null;
    this.style_transfer_state = values.style_transfer_state !== undefined ? values.style_transfer_state : false;
    this.spatial_audio_state = values.spatial_audio_state !== undefined ? values.spatial_audio_state : null;
  }
};

// Struct: AudioSystemProperties
ash.audio_config.mojom.AudioSystemProperties = class {
  constructor(values = {}) {
    this.voice_isolation_ui_appearance = values.voice_isolation_ui_appearance !== undefined ? values.voice_isolation_ui_appearance : 0;
  }
};

// Interface: AudioSystemPropertiesObserver
ash.audio_config.mojom.AudioSystemPropertiesObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.audio_config.mojom.AudioSystemPropertiesObserver';
  }

  onPropertiesUpdated(properties) {
    // Method: OnPropertiesUpdated
    // Call: OnPropertiesUpdated(properties)
  }

};

ash.audio_config.mojom.AudioSystemPropertiesObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosAudioConfig
ash.audio_config.mojom.CrosAudioConfigPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.audio_config.mojom.CrosAudioConfig';
  }

  observeAudioSystemProperties(observer) {
    // Method: ObserveAudioSystemProperties
    // Call: ObserveAudioSystemProperties(observer)
  }

  setOutputMuted(muted) {
    // Method: SetOutputMuted
    // Call: SetOutputMuted(muted)
  }

  setOutputVolumePercent(volume) {
    // Method: SetOutputVolumePercent
    // Call: SetOutputVolumePercent(volume)
  }

  setInputGainPercent(gain) {
    // Method: SetInputGainPercent
    // Call: SetInputGainPercent(gain)
  }

  setActiveDevice(device) {
    // Method: SetActiveDevice
    // Call: SetActiveDevice(device)
  }

  setInputMuted(muted) {
    // Method: SetInputMuted
    // Call: SetInputMuted(muted)
  }

  recordVoiceIsolationEnabledChange() {
    // Method: RecordVoiceIsolationEnabledChange
    // Call: RecordVoiceIsolationEnabledChange()
  }

  recordVoiceIsolationPreferredEffectChange(preferred_effect) {
    // Method: RecordVoiceIsolationPreferredEffectChange
    // Call: RecordVoiceIsolationPreferredEffectChange(preferred_effect)
  }

  setNoiseCancellationEnabled(enabled) {
    // Method: SetNoiseCancellationEnabled
    // Call: SetNoiseCancellationEnabled(enabled)
  }

  setStyleTransferEnabled(enabled) {
    // Method: SetStyleTransferEnabled
    // Call: SetStyleTransferEnabled(enabled)
  }

  setForceRespectUiGainsEnabled(enabled) {
    // Method: SetForceRespectUiGainsEnabled
    // Call: SetForceRespectUiGainsEnabled(enabled)
  }

  setHfpMicSrEnabled(enabled) {
    // Method: SetHfpMicSrEnabled
    // Call: SetHfpMicSrEnabled(enabled)
  }

  setSpatialAudioEnabled(enabled) {
    // Method: SetSpatialAudioEnabled
    // Call: SetSpatialAudioEnabled(enabled)
  }

};

ash.audio_config.mojom.CrosAudioConfigRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
