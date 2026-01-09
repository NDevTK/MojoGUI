// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/peerconnection/peer_connection_tracker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: DeviceThermalState
blink.mojom.DeviceThermalState = {
  kUnknown: 0,
  kNominal: 1,
  kFair: 2,
  kSerious: 3,
  kCritical: 4,
};

// Interface: PeerConnectionManager
blink.mojom.PeerConnectionManager = {};

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
      blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec.$,
      null,
      []);
  }

  onThermalStateChange(thermal_state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec.$,
      null,
      [thermal_state]);
  }

  startEventLog(peer_connection_local_id, output_period_ms) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec.$,
      null,
      [peer_connection_local_id, output_period_ms]);
  }

  stopEventLog(peer_connection_local_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec.$,
      null,
      [peer_connection_local_id]);
  }

  startDataChannelLog(peer_connection_local_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec.$,
      null,
      [peer_connection_local_id]);
  }

  stopDataChannelLog(peer_connection_local_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec.$,
      null,
      [peer_connection_local_id]);
  }

  getStandardStats() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec.$,
      null,
      []);
  }

  getCurrentState() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec.$,
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

// ParamsSpec for OnSuspend
blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.OnSuspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnThermalStateChange
blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.OnThermalStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'thermal_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartEventLog
blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.StartEventLog_Params',
      packedSize: 24,
      fields: [
        { name: 'peer_connection_local_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'output_period_ms', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopEventLog
blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.StopEventLog_Params',
      packedSize: 16,
      fields: [
        { name: 'peer_connection_local_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartDataChannelLog
blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.StartDataChannelLog_Params',
      packedSize: 16,
      fields: [
        { name: 'peer_connection_local_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopDataChannelLog
blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.StopDataChannelLog_Params',
      packedSize: 16,
      fields: [
        { name: 'peer_connection_local_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetStandardStats
blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.GetStandardStats_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCurrentState
blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionManager.GetCurrentState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PeerConnectionManagerPtr = blink.mojom.PeerConnectionManagerRemote;
blink.mojom.PeerConnectionManagerRequest = blink.mojom.PeerConnectionManagerPendingReceiver;


// Interface: PeerConnectionTrackerHost
blink.mojom.PeerConnectionTrackerHost = {};

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
      blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec.$,
      null,
      [info]);
  }

  removePeerConnection(lid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec.$,
      null,
      [lid]);
  }

  updatePeerConnection(lid, type, value) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec.$,
      null,
      [lid, type, value]);
  }

  onPeerConnectionSessionIdSet(lid, session_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec.$,
      null,
      [lid, session_id]);
  }

  getUserMedia(request_id, audio, video, audio_constraints, video_constraints) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec.$,
      null,
      [request_id, audio, video, audio_constraints, video_constraints]);
  }

  getUserMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec.$,
      null,
      [request_id, stream_id, audio_track_info, video_track_info]);
  }

  getUserMediaFailure(request_id, error, error_message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec.$,
      null,
      [request_id, error, error_message]);
  }

  getDisplayMedia(request_id, audio, video, audio_constraints, video_constraints) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec.$,
      null,
      [request_id, audio, video, audio_constraints, video_constraints]);
  }

  getDisplayMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec.$,
      null,
      [request_id, stream_id, audio_track_info, video_track_info]);
  }

  getDisplayMediaFailure(request_id, error, error_message) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec.$,
      null,
      [request_id, error, error_message]);
  }

  webRtcEventLogWrite(lid, output) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec.$,
      null,
      [lid, output]);
  }

  webRtcDataChannelLogWrite(lid, output) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec.$,
      null,
      [lid, output]);
  }

  addStandardStats(lid, value) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec.$,
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

// ParamsSpec for AddPeerConnection
blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.AddPeerConnection_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemovePeerConnection
blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.RemovePeerConnection_Params',
      packedSize: 16,
      fields: [
        { name: 'lid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdatePeerConnection
blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.UpdatePeerConnection_Params',
      packedSize: 32,
      fields: [
        { name: 'lid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPeerConnectionSessionIdSet
blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.OnPeerConnectionSessionIdSet_Params',
      packedSize: 24,
      fields: [
        { name: 'lid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUserMedia
blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.GetUserMedia_Params',
      packedSize: 48,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'audio', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'video', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'audio_constraints', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'video_constraints', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUserMediaSuccess
blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.GetUserMediaSuccess_Params',
      packedSize: 40,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'stream_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'audio_track_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'video_track_info', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUserMediaFailure
blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.GetUserMediaFailure_Params',
      packedSize: 32,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDisplayMedia
blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.GetDisplayMedia_Params',
      packedSize: 48,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'audio', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'video', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'audio_constraints', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'video_constraints', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDisplayMediaSuccess
blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.GetDisplayMediaSuccess_Params',
      packedSize: 40,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'stream_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'audio_track_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'video_track_info', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDisplayMediaFailure
blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.GetDisplayMediaFailure_Params',
      packedSize: 32,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WebRtcEventLogWrite
blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.WebRtcEventLogWrite_Params',
      packedSize: 24,
      fields: [
        { name: 'lid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'output', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WebRtcDataChannelLogWrite
blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.WebRtcDataChannelLogWrite_Params',
      packedSize: 24,
      fields: [
        { name: 'lid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'output', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddStandardStats
blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeerConnectionTrackerHost.AddStandardStats_Params',
      packedSize: 24,
      fields: [
        { name: 'lid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PeerConnectionTrackerHostPtr = blink.mojom.PeerConnectionTrackerHostRemote;
blink.mojom.PeerConnectionTrackerHostRequest = blink.mojom.PeerConnectionTrackerHostPendingReceiver;

