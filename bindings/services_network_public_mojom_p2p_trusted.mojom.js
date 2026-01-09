// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/p2p_trusted.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: P2PTrustedSocketManagerClient
network.mojom.P2PTrustedSocketManagerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.P2PTrustedSocketManagerClient';
  }

  invalidSocketPortRangeRequested() {
    // Method: InvalidSocketPortRangeRequested
    // Call: InvalidSocketPortRangeRequested()
  }

  dumpPacket(packet_header, packet_length, incoming) {
    // Method: DumpPacket
    // Call: DumpPacket(packet_header, packet_length, incoming)
  }

};

network.mojom.P2PTrustedSocketManagerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: P2PTrustedSocketManager
network.mojom.P2PTrustedSocketManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.P2PTrustedSocketManager';
  }

  startRtpDump(incoming, outgoing) {
    // Method: StartRtpDump
    // Call: StartRtpDump(incoming, outgoing)
  }

  stopRtpDump(incoming, outgoing) {
    // Method: StopRtpDump
    // Call: StopRtpDump(incoming, outgoing)
  }

  pauseNetworkChangeNotifications() {
    // Method: PauseNetworkChangeNotifications
    // Call: PauseNetworkChangeNotifications()
  }

  resumeNetworkChangeNotifications() {
    // Method: ResumeNetworkChangeNotifications
    // Call: ResumeNetworkChangeNotifications()
  }

};

network.mojom.P2PTrustedSocketManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
