// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/peerconnection/peer_connection_tracker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: DeviceThermalState
blink.mojom.DeviceThermalState = {
};

// Struct: PeerConnectionInfo
blink.mojom.PeerConnectionInfo = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : 0;
  }
};

// Interface: PeerConnectionManager
blink.mojom.PeerConnectionManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PeerConnectionManager';
  }

  onSuspend() {
    // Method: OnSuspend
    // Call: OnSuspend()
  }

  onThermalStateChange(thermal_state) {
    // Method: OnThermalStateChange
    // Call: OnThermalStateChange(thermal_state)
  }

  startEventLog(peer_connection_local_id, output_period_ms) {
    // Method: StartEventLog
    // Call: StartEventLog(peer_connection_local_id, output_period_ms)
  }

  stopEventLog(peer_connection_local_id) {
    // Method: StopEventLog
    // Call: StopEventLog(peer_connection_local_id)
  }

  startDataChannelLog(peer_connection_local_id) {
    // Method: StartDataChannelLog
    // Call: StartDataChannelLog(peer_connection_local_id)
  }

  stopDataChannelLog(peer_connection_local_id) {
    // Method: StopDataChannelLog
    // Call: StopDataChannelLog(peer_connection_local_id)
  }

  getStandardStats() {
    // Method: GetStandardStats
    // Call: GetStandardStats()
  }

  getCurrentState() {
    // Method: GetCurrentState
    // Call: GetCurrentState()
  }

};

blink.mojom.PeerConnectionManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PeerConnectionTrackerHost
blink.mojom.PeerConnectionTrackerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PeerConnectionTrackerHost';
  }

  addPeerConnection(info) {
    // Method: AddPeerConnection
    // Call: AddPeerConnection(info)
  }

  removePeerConnection(lid) {
    // Method: RemovePeerConnection
    // Call: RemovePeerConnection(lid)
  }

  updatePeerConnection(lid, type, value) {
    // Method: UpdatePeerConnection
    // Call: UpdatePeerConnection(lid, type, value)
  }

  onPeerConnectionSessionIdSet(lid, session_id) {
    // Method: OnPeerConnectionSessionIdSet
    // Call: OnPeerConnectionSessionIdSet(lid, session_id)
  }

  getUserMedia(request_id, audio, video, audio_constraints, video_constraints) {
    // Method: GetUserMedia
    // Call: GetUserMedia(request_id, audio, video, audio_constraints, video_constraints)
  }

  getUserMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    // Method: GetUserMediaSuccess
    // Call: GetUserMediaSuccess(request_id, stream_id, audio_track_info, video_track_info)
  }

  getUserMediaFailure(request_id, error, error_message) {
    // Method: GetUserMediaFailure
    // Call: GetUserMediaFailure(request_id, error, error_message)
  }

  getDisplayMedia(request_id, audio, video, audio_constraints, video_constraints) {
    // Method: GetDisplayMedia
    // Call: GetDisplayMedia(request_id, audio, video, audio_constraints, video_constraints)
  }

  getDisplayMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    // Method: GetDisplayMediaSuccess
    // Call: GetDisplayMediaSuccess(request_id, stream_id, audio_track_info, video_track_info)
  }

  getDisplayMediaFailure(request_id, error, error_message) {
    // Method: GetDisplayMediaFailure
    // Call: GetDisplayMediaFailure(request_id, error, error_message)
  }

  webRtcEventLogWrite(lid, output) {
    // Method: WebRtcEventLogWrite
    // Call: WebRtcEventLogWrite(lid, output)
  }

  webRtcDataChannelLogWrite(lid, output) {
    // Method: WebRtcDataChannelLogWrite
    // Call: WebRtcDataChannelLogWrite(lid, output)
  }

  addStandardStats(lid, value) {
    // Method: AddStandardStats
    // Call: AddStandardStats(lid, value)
  }

};

blink.mojom.PeerConnectionTrackerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
