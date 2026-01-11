// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/audio.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.AudioSwitchSpec = { $: mojo.internal.Enum() };
arc.mojom.AudioDeviceTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.AudioHost = {};
arc.mojom.AudioHost.$interfaceName = 'arc.mojom.AudioHost';
arc.mojom.AudioHost_ShowVolumeControls_ParamsSpec = { $: {} };
arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_ParamsSpec = { $: {} };
arc.mojom.AudioInstance = {};
arc.mojom.AudioInstance.$interfaceName = 'arc.mojom.AudioInstance';
arc.mojom.AudioInstance_Init_ParamsSpec = { $: {} };
arc.mojom.AudioInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.AudioInstance_NotifySwitchState_ParamsSpec = { $: {} };
arc.mojom.AudioInstance_NotifyVolumeState_ParamsSpec = { $: {} };
arc.mojom.AudioInstance_NotifySpatialAudioState_ParamsSpec = { $: {} };
arc.mojom.AudioInstance_NotifyOutputDeviceInfo_ParamsSpec = { $: {} };

// Enum: AudioSwitch
arc.mojom.AudioSwitch = {
  SW_HEADPHONE_INSERT: 2,
  SW_MICROPHONE_INSERT: 4,
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
  OTHER: 16,
};

// Interface: AudioHost
mojo.internal.Struct(
    arc.mojom.AudioHost_ShowVolumeControls_ParamsSpec, 'arc.mojom.AudioHost_ShowVolumeControls_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_ParamsSpec, 'arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_Params', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
  showVolumeControls() {
    return this.$.showVolumeControls();
  }
  onSystemVolumeUpdateRequest(percent) {
    return this.$.onSystemVolumeUpdateRequest(percent);
  }
};

arc.mojom.AudioHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioHost', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  showVolumeControls() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.AudioHost_ShowVolumeControls_ParamsSpec,
      null,
      [],
      false);
  }

  onSystemVolumeUpdateRequest(percent) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_ParamsSpec,
      null,
      [percent],
      false);
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

arc.mojom.AudioHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioHost', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AudioHost_ShowVolumeControls_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AudioHost_ShowVolumeControls_ParamsSpec.$.structSpec);
          const result = this.impl.showVolumeControls();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AudioHost_OnSystemVolumeUpdateRequest_ParamsSpec.$.structSpec);
          const result = this.impl.onSystemVolumeUpdateRequest(params.percent);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.AudioHostReceiver = arc.mojom.AudioHostReceiver;

arc.mojom.AudioHostPtr = arc.mojom.AudioHostRemote;
arc.mojom.AudioHostRequest = arc.mojom.AudioHostPendingReceiver;


// Interface: AudioInstance
mojo.internal.Struct(
    arc.mojom.AudioInstance_Init_ParamsSpec, 'arc.mojom.AudioInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AudioHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AudioInstance_Init_ResponseParamsSpec, 'arc.mojom.AudioInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AudioInstance_NotifySwitchState_ParamsSpec, 'arc.mojom.AudioInstance_NotifySwitchState_Params', [
      mojo.internal.StructField('state', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AudioInstance_NotifyVolumeState_ParamsSpec, 'arc.mojom.AudioInstance_NotifyVolumeState_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('muted', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AudioInstance_NotifySpatialAudioState_ParamsSpec, 'arc.mojom.AudioInstance_NotifySpatialAudioState_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AudioInstance_NotifyOutputDeviceInfo_ParamsSpec, 'arc.mojom.AudioInstance_NotifyOutputDeviceInfo_Params', [
      mojo.internal.StructField('device_type', 0, 0, arc.mojom.AudioDeviceTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  init(host_remote) {
    return this.$.init(host_remote);
  }
  notifySwitchState(state) {
    return this.$.notifySwitchState(state);
  }
  notifyVolumeState(volume, muted) {
    return this.$.notifyVolumeState(volume, muted);
  }
  notifySpatialAudioState(enabled) {
    return this.$.notifySpatialAudioState(enabled);
  }
  notifyOutputDeviceInfo(device_type) {
    return this.$.notifyOutputDeviceInfo(device_type);
  }
};

arc.mojom.AudioInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioInstance', [
      { explicit: 3 },
      { explicit: 0 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 5 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.AudioInstance_Init_ParamsSpec,
      arc.mojom.AudioInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  notifySwitchState(state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.AudioInstance_NotifySwitchState_ParamsSpec,
      null,
      [state],
      false);
  }

  notifyVolumeState(volume, muted) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.AudioInstance_NotifyVolumeState_ParamsSpec,
      null,
      [volume, muted],
      false);
  }

  notifySpatialAudioState(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.AudioInstance_NotifySpatialAudioState_ParamsSpec,
      null,
      [enabled],
      false);
  }

  notifyOutputDeviceInfo(device_type) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.AudioInstance_NotifyOutputDeviceInfo_ParamsSpec,
      null,
      [device_type],
      false);
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

arc.mojom.AudioInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioInstance', [
      { explicit: 3 },
      { explicit: 0 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 5 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AudioInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AudioInstance_NotifySwitchState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AudioInstance_NotifyVolumeState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AudioInstance_NotifySpatialAudioState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AudioInstance_NotifyOutputDeviceInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AudioInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AudioInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AudioInstance_NotifySwitchState_ParamsSpec.$.structSpec);
          const result = this.impl.notifySwitchState(params.state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AudioInstance_NotifyVolumeState_ParamsSpec.$.structSpec);
          const result = this.impl.notifyVolumeState(params.volume, params.muted);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AudioInstance_NotifySpatialAudioState_ParamsSpec.$.structSpec);
          const result = this.impl.notifySpatialAudioState(params.enabled);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AudioInstance_NotifyOutputDeviceInfo_ParamsSpec.$.structSpec);
          const result = this.impl.notifyOutputDeviceInfo(params.device_type);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.AudioInstanceReceiver = arc.mojom.AudioInstanceReceiver;

arc.mojom.AudioInstancePtr = arc.mojom.AudioInstanceRemote;
arc.mojom.AudioInstanceRequest = arc.mojom.AudioInstancePendingReceiver;

