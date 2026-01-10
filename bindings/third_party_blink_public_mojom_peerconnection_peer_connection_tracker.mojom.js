// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/peerconnection/peer_connection_tracker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


blink.mojom.mojom.kSpeedLimitMax = 100;

// Enum: DeviceThermalState
blink.mojom.mojom.DeviceThermalState = {
  kUnknown: 0,
  kNominal: 1,
  kFair: 2,
  kSerious: 3,
  kCritical: 4,
};
blink.mojom.mojom.DeviceThermalStateSpec = { $: mojo.internal.Enum() };

// Struct: PeerConnectionInfo
blink.mojom.mojom.PeerConnectionInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionInfo',
      packedSize: 32,
      fields: [
        { name: 'lid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'rtc_configuration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: PeerConnectionManager
blink.mojom.mojom.PeerConnectionManager = {};

blink.mojom.mojom.PeerConnectionManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.PeerConnectionManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PeerConnectionManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.PeerConnectionManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.PeerConnectionManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.PeerConnectionManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSuspend() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.PeerConnectionManager_OnSuspend_ParamsSpec,
      null,
      []);
  }

  onThermalStateChange(thermal_state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec,
      null,
      [thermal_state]);
  }

  startEventLog(peer_connection_local_id, output_period_ms) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.PeerConnectionManager_StartEventLog_ParamsSpec,
      null,
      [peer_connection_local_id, output_period_ms]);
  }

  stopEventLog(peer_connection_local_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.PeerConnectionManager_StopEventLog_ParamsSpec,
      null,
      [peer_connection_local_id]);
  }

  startDataChannelLog(peer_connection_local_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec,
      null,
      [peer_connection_local_id]);
  }

  stopDataChannelLog(peer_connection_local_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec,
      null,
      [peer_connection_local_id]);
  }

  getStandardStats() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec,
      null,
      []);
  }

  getCurrentState() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.PeerConnectionManager.getRemote = function() {
  let remote = new blink.mojom.mojom.PeerConnectionManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PeerConnectionManager',
    'context');
  return remote.$;
};

// ParamsSpec for OnSuspend
blink.mojom.mojom.PeerConnectionManager_OnSuspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.OnSuspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnThermalStateChange
blink.mojom.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.OnThermalStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'thermal_state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DeviceThermalStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartEventLog
blink.mojom.mojom.PeerConnectionManager_StartEventLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.StartEventLog_Params',
      packedSize: 16,
      fields: [
        { name: 'peer_connection_local_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'output_period_ms', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopEventLog
blink.mojom.mojom.PeerConnectionManager_StopEventLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.StopEventLog_Params',
      packedSize: 16,
      fields: [
        { name: 'peer_connection_local_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartDataChannelLog
blink.mojom.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.StartDataChannelLog_Params',
      packedSize: 16,
      fields: [
        { name: 'peer_connection_local_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopDataChannelLog
blink.mojom.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.StopDataChannelLog_Params',
      packedSize: 16,
      fields: [
        { name: 'peer_connection_local_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetStandardStats
blink.mojom.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.GetStandardStats_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetCurrentState
blink.mojom.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.GetCurrentState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.PeerConnectionManagerPtr = blink.mojom.mojom.PeerConnectionManagerRemote;
blink.mojom.mojom.PeerConnectionManagerRequest = blink.mojom.mojom.PeerConnectionManagerPendingReceiver;


// Interface: PeerConnectionTrackerHost
blink.mojom.mojom.PeerConnectionTrackerHost = {};

blink.mojom.mojom.PeerConnectionTrackerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.PeerConnectionTrackerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PeerConnectionTrackerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.PeerConnectionTrackerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.PeerConnectionTrackerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.PeerConnectionTrackerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addPeerConnection(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec,
      null,
      [info]);
  }

  removePeerConnection(lid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec,
      null,
      [lid]);
  }

  updatePeerConnection(lid, type, value) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec,
      null,
      [lid, type, value]);
  }

  onPeerConnectionSessionIdSet(lid, session_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec,
      null,
      [lid, session_id]);
  }

  getUserMedia(request_id, audio, video, audio_constraints, video_constraints) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec,
      null,
      [request_id, audio, video, audio_constraints, video_constraints]);
  }

  getUserMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec,
      null,
      [request_id, stream_id, audio_track_info, video_track_info]);
  }

  getUserMediaFailure(request_id, error, error_message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec,
      null,
      [request_id, error, error_message]);
  }

  getDisplayMedia(request_id, audio, video, audio_constraints, video_constraints) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec,
      null,
      [request_id, audio, video, audio_constraints, video_constraints]);
  }

  getDisplayMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec,
      null,
      [request_id, stream_id, audio_track_info, video_track_info]);
  }

  getDisplayMediaFailure(request_id, error, error_message) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec,
      null,
      [request_id, error, error_message]);
  }

  webRtcEventLogWrite(lid, output) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec,
      null,
      [lid, output]);
  }

  webRtcDataChannelLogWrite(lid, output) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec,
      null,
      [lid, output]);
  }

  addStandardStats(lid, value) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec,
      null,
      [lid, value]);
  }

};

blink.mojom.mojom.PeerConnectionTrackerHost.getRemote = function() {
  let remote = new blink.mojom.mojom.PeerConnectionTrackerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PeerConnectionTrackerHost',
    'context');
  return remote.$;
};

// ParamsSpec for AddPeerConnection
blink.mojom.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.AddPeerConnection_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PeerConnectionInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemovePeerConnection
blink.mojom.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.RemovePeerConnection_Params',
      packedSize: 16,
      fields: [
        { name: 'lid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdatePeerConnection
blink.mojom.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.UpdatePeerConnection_Params',
      packedSize: 32,
      fields: [
        { name: 'lid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnPeerConnectionSessionIdSet
blink.mojom.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.OnPeerConnectionSessionIdSet_Params',
      packedSize: 24,
      fields: [
        { name: 'lid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetUserMedia
blink.mojom.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.GetUserMedia_Params',
      packedSize: 32,
      fields: [
        { name: 'request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'audio', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'video', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'audio_constraints', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'video_constraints', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetUserMediaSuccess
blink.mojom.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.GetUserMediaSuccess_Params',
      packedSize: 40,
      fields: [
        { name: 'request_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'audio_track_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'video_track_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for GetUserMediaFailure
blink.mojom.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.GetUserMediaFailure_Params',
      packedSize: 32,
      fields: [
        { name: 'request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetDisplayMedia
blink.mojom.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.GetDisplayMedia_Params',
      packedSize: 32,
      fields: [
        { name: 'request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'audio', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'video', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'audio_constraints', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'video_constraints', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetDisplayMediaSuccess
blink.mojom.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.GetDisplayMediaSuccess_Params',
      packedSize: 40,
      fields: [
        { name: 'request_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'stream_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'audio_track_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'video_track_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for GetDisplayMediaFailure
blink.mojom.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.GetDisplayMediaFailure_Params',
      packedSize: 32,
      fields: [
        { name: 'request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for WebRtcEventLogWrite
blink.mojom.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.WebRtcEventLogWrite_Params',
      packedSize: 24,
      fields: [
        { name: 'lid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for WebRtcDataChannelLogWrite
blink.mojom.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.WebRtcDataChannelLogWrite_Params',
      packedSize: 24,
      fields: [
        { name: 'lid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'output', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddStandardStats
blink.mojom.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.AddStandardStats_Params',
      packedSize: 24,
      fields: [
        { name: 'lid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.PeerConnectionTrackerHostPtr = blink.mojom.mojom.PeerConnectionTrackerHostRemote;
blink.mojom.mojom.PeerConnectionTrackerHostRequest = blink.mojom.mojom.PeerConnectionTrackerHostPendingReceiver;

