// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/peerconnection/peer_connection_tracker.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.DeviceThermalStateSpec = { $: mojo.internal.Enum() };
blink.mojom.PeerConnectionInfoSpec = { $: {} };
blink.mojom.PeerConnectionManager = {};
blink.mojom.PeerConnectionManager.$interfaceName = 'blink.mojom.PeerConnectionManager';
blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionTrackerHost = {};
blink.mojom.PeerConnectionTrackerHost.$interfaceName = 'blink.mojom.PeerConnectionTrackerHost';
blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec = { $: {} };
blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec = { $: {} };

blink.mojom.kSpeedLimitMax = 100;

// Enum: DeviceThermalState
blink.mojom.DeviceThermalState = {
  kUnknown: 0,
  kNominal: 1,
  kFair: 2,
  kSerious: 3,
  kCritical: 4,
};

// Struct: PeerConnectionInfo
mojo.internal.Struct(
    blink.mojom.PeerConnectionInfoSpec, 'blink.mojom.PeerConnectionInfo', [
      mojo.internal.StructField('rtc_configuration', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('lid', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PeerConnectionManager
mojo.internal.Struct(
    blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec, 'blink.mojom.PeerConnectionManager_OnSuspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec, 'blink.mojom.PeerConnectionManager_OnThermalStateChange_Params', [
      mojo.internal.StructField('thermal_state', 0, 0, blink.mojom.DeviceThermalStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec, 'blink.mojom.PeerConnectionManager_StartEventLog_Params', [
      mojo.internal.StructField('peer_connection_local_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('output_period_ms', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec, 'blink.mojom.PeerConnectionManager_StopEventLog_Params', [
      mojo.internal.StructField('peer_connection_local_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec, 'blink.mojom.PeerConnectionManager_StartDataChannelLog_Params', [
      mojo.internal.StructField('peer_connection_local_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec, 'blink.mojom.PeerConnectionManager_StopDataChannelLog_Params', [
      mojo.internal.StructField('peer_connection_local_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec, 'blink.mojom.PeerConnectionManager_GetStandardStats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec, 'blink.mojom.PeerConnectionManager_GetCurrentState_Params', [
    ],
    [[0, 8]]);

blink.mojom.PeerConnectionManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PeerConnectionManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PeerConnectionManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PeerConnectionManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.PeerConnectionManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSuspend() {
    return this.$.onSuspend();
  }
  onThermalStateChange(thermal_state) {
    return this.$.onThermalStateChange(thermal_state);
  }
  startEventLog(peer_connection_local_id, output_period_ms) {
    return this.$.startEventLog(peer_connection_local_id, output_period_ms);
  }
  stopEventLog(peer_connection_local_id) {
    return this.$.stopEventLog(peer_connection_local_id);
  }
  startDataChannelLog(peer_connection_local_id) {
    return this.$.startDataChannelLog(peer_connection_local_id);
  }
  stopDataChannelLog(peer_connection_local_id) {
    return this.$.stopDataChannelLog(peer_connection_local_id);
  }
  getStandardStats() {
    return this.$.getStandardStats();
  }
  getCurrentState() {
    return this.$.getCurrentState();
  }
};

blink.mojom.PeerConnectionManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PeerConnectionManager', [
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

  onSuspend() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec,
      null,
      [],
      false);
  }

  onThermalStateChange(thermal_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec,
      null,
      [thermal_state],
      false);
  }

  startEventLog(peer_connection_local_id, output_period_ms) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec,
      null,
      [peer_connection_local_id, output_period_ms],
      false);
  }

  stopEventLog(peer_connection_local_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec,
      null,
      [peer_connection_local_id],
      false);
  }

  startDataChannelLog(peer_connection_local_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec,
      null,
      [peer_connection_local_id],
      false);
  }

  stopDataChannelLog(peer_connection_local_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec,
      null,
      [peer_connection_local_id],
      false);
  }

  getStandardStats() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec,
      null,
      [],
      false);
  }

  getCurrentState() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.PeerConnectionManager.getRemote = function() {
  let remote = new blink.mojom.PeerConnectionManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PeerConnectionManager',
    'context');
  return remote.$;
};

blink.mojom.PeerConnectionManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PeerConnectionManager', [
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec.$.structSpec);
          const result = this.impl.onSuspend();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec.$.structSpec);
          const result = this.impl.onThermalStateChange(params.thermal_state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec.$.structSpec);
          const result = this.impl.startEventLog(params.peer_connection_local_id, params.output_period_ms);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec.$.structSpec);
          const result = this.impl.stopEventLog(params.peer_connection_local_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec.$.structSpec);
          const result = this.impl.startDataChannelLog(params.peer_connection_local_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec.$.structSpec);
          const result = this.impl.stopDataChannelLog(params.peer_connection_local_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec.$.structSpec);
          const result = this.impl.getStandardStats();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec.$.structSpec);
          const result = this.impl.getCurrentState();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.PeerConnectionManagerReceiver = blink.mojom.PeerConnectionManagerReceiver;

blink.mojom.PeerConnectionManagerPtr = blink.mojom.PeerConnectionManagerRemote;
blink.mojom.PeerConnectionManagerRequest = blink.mojom.PeerConnectionManagerPendingReceiver;


// Interface: PeerConnectionTrackerHost
mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_Params', [
      mojo.internal.StructField('info', 0, 0, blink.mojom.PeerConnectionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_Params', [
      mojo.internal.StructField('lid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_Params', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lid', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetUserMedia_Params', [
      mojo.internal.StructField('audio_constraints', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('video_constraints', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('audio', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('video', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('audio_track_info', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('video_track_info', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_Params', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_Params', [
      mojo.internal.StructField('audio_constraints', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('video_constraints', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('audio', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('video', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('audio_track_info', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('video_track_info', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_Params', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_Params', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('lid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_Params', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('lid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_AddStandardStats_Params', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.PeerConnectionTrackerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PeerConnectionTrackerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PeerConnectionTrackerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PeerConnectionTrackerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.PeerConnectionTrackerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addPeerConnection(info) {
    return this.$.addPeerConnection(info);
  }
  removePeerConnection(lid) {
    return this.$.removePeerConnection(lid);
  }
  updatePeerConnection(lid, type, value) {
    return this.$.updatePeerConnection(lid, type, value);
  }
  onPeerConnectionSessionIdSet(lid, session_id) {
    return this.$.onPeerConnectionSessionIdSet(lid, session_id);
  }
  getUserMedia(request_id, audio, video, audio_constraints, video_constraints) {
    return this.$.getUserMedia(request_id, audio, video, audio_constraints, video_constraints);
  }
  getUserMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    return this.$.getUserMediaSuccess(request_id, stream_id, audio_track_info, video_track_info);
  }
  getUserMediaFailure(request_id, error, error_message) {
    return this.$.getUserMediaFailure(request_id, error, error_message);
  }
  getDisplayMedia(request_id, audio, video, audio_constraints, video_constraints) {
    return this.$.getDisplayMedia(request_id, audio, video, audio_constraints, video_constraints);
  }
  getDisplayMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    return this.$.getDisplayMediaSuccess(request_id, stream_id, audio_track_info, video_track_info);
  }
  getDisplayMediaFailure(request_id, error, error_message) {
    return this.$.getDisplayMediaFailure(request_id, error, error_message);
  }
  webRtcEventLogWrite(lid, output) {
    return this.$.webRtcEventLogWrite(lid, output);
  }
  webRtcDataChannelLogWrite(lid, output) {
    return this.$.webRtcDataChannelLogWrite(lid, output);
  }
  addStandardStats(lid, value) {
    return this.$.addStandardStats(lid, value);
  }
};

blink.mojom.PeerConnectionTrackerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PeerConnectionTrackerHost', [
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
      { explicit: null },
      { explicit: null },
    ]);
  }

  addPeerConnection(info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec,
      null,
      [info],
      false);
  }

  removePeerConnection(lid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec,
      null,
      [lid],
      false);
  }

  updatePeerConnection(lid, type, value) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec,
      null,
      [lid, type, value],
      false);
  }

  onPeerConnectionSessionIdSet(lid, session_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec,
      null,
      [lid, session_id],
      false);
  }

  getUserMedia(request_id, audio, video, audio_constraints, video_constraints) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec,
      null,
      [request_id, audio, video, audio_constraints, video_constraints],
      false);
  }

  getUserMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec,
      null,
      [request_id, stream_id, audio_track_info, video_track_info],
      false);
  }

  getUserMediaFailure(request_id, error, error_message) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec,
      null,
      [request_id, error, error_message],
      false);
  }

  getDisplayMedia(request_id, audio, video, audio_constraints, video_constraints) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec,
      null,
      [request_id, audio, video, audio_constraints, video_constraints],
      false);
  }

  getDisplayMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec,
      null,
      [request_id, stream_id, audio_track_info, video_track_info],
      false);
  }

  getDisplayMediaFailure(request_id, error, error_message) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec,
      null,
      [request_id, error, error_message],
      false);
  }

  webRtcEventLogWrite(lid, output) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec,
      null,
      [lid, output],
      false);
  }

  webRtcDataChannelLogWrite(lid, output) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec,
      null,
      [lid, output],
      false);
  }

  addStandardStats(lid, value) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec,
      null,
      [lid, value],
      false);
  }

};

blink.mojom.PeerConnectionTrackerHost.getRemote = function() {
  let remote = new blink.mojom.PeerConnectionTrackerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PeerConnectionTrackerHost',
    'context');
  return remote.$;
};

blink.mojom.PeerConnectionTrackerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PeerConnectionTrackerHost', [
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
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec.$.structSpec);
          const result = this.impl.addPeerConnection(params.info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec.$.structSpec);
          const result = this.impl.removePeerConnection(params.lid);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec.$.structSpec);
          const result = this.impl.updatePeerConnection(params.lid, params.type, params.value);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec.$.structSpec);
          const result = this.impl.onPeerConnectionSessionIdSet(params.lid, params.session_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec.$.structSpec);
          const result = this.impl.getUserMedia(params.request_id, params.audio, params.video, params.audio_constraints, params.video_constraints);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec.$.structSpec);
          const result = this.impl.getUserMediaSuccess(params.request_id, params.stream_id, params.audio_track_info, params.video_track_info);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec.$.structSpec);
          const result = this.impl.getUserMediaFailure(params.request_id, params.error, params.error_message);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec.$.structSpec);
          const result = this.impl.getDisplayMedia(params.request_id, params.audio, params.video, params.audio_constraints, params.video_constraints);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec.$.structSpec);
          const result = this.impl.getDisplayMediaSuccess(params.request_id, params.stream_id, params.audio_track_info, params.video_track_info);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec.$.structSpec);
          const result = this.impl.getDisplayMediaFailure(params.request_id, params.error, params.error_message);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec.$.structSpec);
          const result = this.impl.webRtcEventLogWrite(params.lid, params.output);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec.$.structSpec);
          const result = this.impl.webRtcDataChannelLogWrite(params.lid, params.output);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec.$.structSpec);
          const result = this.impl.addStandardStats(params.lid, params.value);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.PeerConnectionTrackerHostReceiver = blink.mojom.PeerConnectionTrackerHostReceiver;

blink.mojom.PeerConnectionTrackerHostPtr = blink.mojom.PeerConnectionTrackerHostRemote;
blink.mojom.PeerConnectionTrackerHostRequest = blink.mojom.PeerConnectionTrackerHostPendingReceiver;

