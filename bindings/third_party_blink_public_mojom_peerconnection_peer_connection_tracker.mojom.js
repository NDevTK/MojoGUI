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

};

blink.mojom.PeerConnectionTrackerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
