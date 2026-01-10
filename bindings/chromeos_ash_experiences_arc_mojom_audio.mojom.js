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
arc.mojom.AudioSwitchSpec = { $: mojo.internal.Enum() };

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
arc.mojom.AudioDeviceTypeSpec = { $: mojo.internal.Enum() };

// Interface: AudioHost
arc.mojom.AudioHost = {};

arc.mojom.AudioHost_ShowVolumeControls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioHost_ShowVolumeControls_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

  showVolumeControls() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.AudioHost_ShowVolumeControls_ParamsSpec,
      null,
      []);
  }

  onSystemVolumeUpdateRequest(percent) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_ParamsSpec,
      null,
      [percent]);
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

// ParamsSpec for ShowVolumeControls
arc.mojom.AudioHost_ShowVolumeControls_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioHost.ShowVolumeControls_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnSystemVolumeUpdateRequest
arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioHost.OnSystemVolumeUpdateRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.AudioHostPtr = arc.mojom.AudioHostRemote;
arc.mojom.AudioHostRequest = arc.mojom.AudioHostPendingReceiver;


// Interface: AudioInstance
arc.mojom.AudioInstance = {};

arc.mojom.AudioInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioInstance_Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.AudioHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AudioInstance_NotifySwitchState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioInstance_NotifySwitchState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AudioInstance_NotifyVolumeState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioInstance_NotifyVolumeState_Params',
      packedSize: 16,
      fields: [
        { name: 'volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'muted', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AudioInstance_NotifySpatialAudioState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioInstance_NotifySpatialAudioState_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AudioInstance_NotifyOutputDeviceInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioInstance_NotifyOutputDeviceInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'device_type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AudioDeviceTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

  init(host_remote) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.AudioInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  notifySwitchState(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.AudioInstance_NotifySwitchState_ParamsSpec,
      null,
      [state]);
  }

  notifyVolumeState(volume, muted) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.AudioInstance_NotifyVolumeState_ParamsSpec,
      null,
      [volume, muted]);
  }

  notifySpatialAudioState(enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.AudioInstance_NotifySpatialAudioState_ParamsSpec,
      null,
      [enabled]);
  }

  notifyOutputDeviceInfo(device_type) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.AudioInstance_NotifyOutputDeviceInfo_ParamsSpec,
      null,
      [device_type]);
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

// ParamsSpec for Init
arc.mojom.AudioInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.AudioHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifySwitchState
arc.mojom.AudioInstance_NotifySwitchState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioInstance.NotifySwitchState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyVolumeState
arc.mojom.AudioInstance_NotifyVolumeState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioInstance.NotifyVolumeState_Params',
      packedSize: 16,
      fields: [
        { name: 'volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'muted', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifySpatialAudioState
arc.mojom.AudioInstance_NotifySpatialAudioState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioInstance.NotifySpatialAudioState_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyOutputDeviceInfo
arc.mojom.AudioInstance_NotifyOutputDeviceInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AudioInstance.NotifyOutputDeviceInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'device_type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AudioDeviceTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.AudioInstancePtr = arc.mojom.AudioInstanceRemote;
arc.mojom.AudioInstanceRequest = arc.mojom.AudioInstancePendingReceiver;

