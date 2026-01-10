// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/peerconnection/peer_connection_tracker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

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
      mojo.internal.StructField('lid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('rtc_configuration', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PeerConnectionManager
mojo.internal.Struct(
    blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec, 'blink.mojom.PeerConnectionManager_OnSuspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec, 'blink.mojom.PeerConnectionManager_OnThermalStateChange_Params', [
      mojo.internal.StructField('thermal_state', 0, 0, blink.mojom.DeviceThermalStateSpec, null, false, 0, undefined),
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
};

blink.mojom.PeerConnectionManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSuspend() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec,
      null,
      []);
  }

  onThermalStateChange(thermal_state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec,
      null,
      [thermal_state]);
  }

  startEventLog(peer_connection_local_id, output_period_ms) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec,
      null,
      [peer_connection_local_id, output_period_ms]);
  }

  stopEventLog(peer_connection_local_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec,
      null,
      [peer_connection_local_id]);
  }

  startDataChannelLog(peer_connection_local_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec,
      null,
      [peer_connection_local_id]);
  }

  stopDataChannelLog(peer_connection_local_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec,
      null,
      [peer_connection_local_id]);
  }

  getStandardStats() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec,
      null,
      []);
  }

  getCurrentState() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec,
      null,
      []);
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

blink.mojom.PeerConnectionManagerPtr = blink.mojom.PeerConnectionManagerRemote;
blink.mojom.PeerConnectionManagerRequest = blink.mojom.PeerConnectionManagerPendingReceiver;


// Interface: PeerConnectionTrackerHost
mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_Params', [
      mojo.internal.StructField('info', 0, 0, blink.mojom.PeerConnectionInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_Params', [
      mojo.internal.StructField('lid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_Params', [
      mojo.internal.StructField('lid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_Params', [
      mojo.internal.StructField('lid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetUserMedia_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('audio', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('video', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('audio_constraints', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('video_constraints', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('stream_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('audio_track_info', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('video_track_info', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('audio', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('video', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('audio_constraints', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('video_constraints', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('stream_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('audio_track_info', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('video_track_info', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_Params', [
      mojo.internal.StructField('lid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('output', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_Params', [
      mojo.internal.StructField('lid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('output', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_AddStandardStats_Params', [
      mojo.internal.StructField('lid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.ListValueSpec, null, false, 0, undefined),
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
};

blink.mojom.PeerConnectionTrackerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addPeerConnection(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec,
      null,
      [info]);
  }

  removePeerConnection(lid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec,
      null,
      [lid]);
  }

  updatePeerConnection(lid, type, value) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec,
      null,
      [lid, type, value]);
  }

  onPeerConnectionSessionIdSet(lid, session_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec,
      null,
      [lid, session_id]);
  }

  getUserMedia(request_id, audio, video, audio_constraints, video_constraints) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec,
      null,
      [request_id, audio, video, audio_constraints, video_constraints]);
  }

  getUserMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec,
      null,
      [request_id, stream_id, audio_track_info, video_track_info]);
  }

  getUserMediaFailure(request_id, error, error_message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec,
      null,
      [request_id, error, error_message]);
  }

  getDisplayMedia(request_id, audio, video, audio_constraints, video_constraints) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec,
      null,
      [request_id, audio, video, audio_constraints, video_constraints]);
  }

  getDisplayMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec,
      null,
      [request_id, stream_id, audio_track_info, video_track_info]);
  }

  getDisplayMediaFailure(request_id, error, error_message) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec,
      null,
      [request_id, error, error_message]);
  }

  webRtcEventLogWrite(lid, output) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec,
      null,
      [lid, output]);
  }

  webRtcDataChannelLogWrite(lid, output) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec,
      null,
      [lid, output]);
  }

  addStandardStats(lid, value) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec,
      null,
      [lid, value]);
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

blink.mojom.PeerConnectionTrackerHostPtr = blink.mojom.PeerConnectionTrackerHostRemote;
blink.mojom.PeerConnectionTrackerHostRequest = blink.mojom.PeerConnectionTrackerHostPendingReceiver;

