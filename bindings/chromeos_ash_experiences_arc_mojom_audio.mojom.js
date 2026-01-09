// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/audio.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: AudioSwitch
arc.mojom.AudioSwitch = {
  SW_HEADPHONE_INSERT: 0,
  SW_MICROPHONE_INSERT: 1,
};

// Enum: AudioDeviceType
arc.mojom.AudioDeviceType = {
  HEADPHONE: 0,
  MIC: 1,
  USB: 2,
  BLUETOOTH: 3,
  BLUETOOTH_NB_MIC: 4,
  HDMI: 5,
  INTERNAL_SPEAKER: 6,
  INTERNAL_MIC: 7,
  FRONT_MIC: 8,
  REAR_MIC: 9,
  KEYBOARD_MIC: 10,
  HOTWORD: 11,
  LINEOUT: 12,
  POST_MIX_LOOPBACK: 13,
  POST_DSP_LOOPBACK: 14,
  ALSA_LOOPBACK: 15,
};

// Interface: AudioHost
arc.mojom.AudioHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.AudioHost';
  }

};

arc.mojom.AudioHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioInstance
arc.mojom.AudioInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.AudioInstance';
  }

};

arc.mojom.AudioInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
