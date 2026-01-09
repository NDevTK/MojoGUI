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
arc.mojom.AudioHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AudioHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AudioHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AudioHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.AudioHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AudioHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.AudioHost.getRemote = function() {
  let remote = new arc.mojom.AudioHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AudioHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.AudioHostPtr = arc.mojom.AudioHostRemote;
arc.mojom.AudioHostRequest = arc.mojom.AudioHostPendingReceiver;


// Interface: AudioInstance
arc.mojom.AudioInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AudioInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AudioInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AudioInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.AudioInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AudioInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.AudioInstance.getRemote = function() {
  let remote = new arc.mojom.AudioInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AudioInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.AudioInstancePtr = arc.mojom.AudioInstanceRemote;
arc.mojom.AudioInstanceRequest = arc.mojom.AudioInstancePendingReceiver;

