// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/p2p_trusted.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: P2PTrustedSocketManagerClient
network.mojom.P2PTrustedSocketManagerClient = {};

network.mojom.P2PTrustedSocketManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PTrustedSocketManagerClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PTrustedSocketManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PTrustedSocketManagerClientPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PTrustedSocketManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.P2PTrustedSocketManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  invalidSocketPortRangeRequested() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_ParamsSpec,
      null,
      []);
  }

  dumpPacket(packet_header, packet_length, incoming) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.P2PTrustedSocketManagerClient_DumpPacket_ParamsSpec,
      null,
      [packet_header, packet_length, incoming]);
  }

};

network.mojom.P2PTrustedSocketManagerClient.getRemote = function() {
  let remote = new network.mojom.P2PTrustedSocketManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PTrustedSocketManagerClient',
    'context');
  return remote.$;
};

// ParamsSpec for InvalidSocketPortRangeRequested
network.mojom.P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PTrustedSocketManagerClient.InvalidSocketPortRangeRequested_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DumpPacket
network.mojom.P2PTrustedSocketManagerClient_DumpPacket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PTrustedSocketManagerClient.DumpPacket_Params',
      packedSize: 32,
      fields: [
        { name: 'packet_header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'packet_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'incoming', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.P2PTrustedSocketManagerClientPtr = network.mojom.P2PTrustedSocketManagerClientRemote;
network.mojom.P2PTrustedSocketManagerClientRequest = network.mojom.P2PTrustedSocketManagerClientPendingReceiver;


// Interface: P2PTrustedSocketManager
network.mojom.P2PTrustedSocketManager = {};

network.mojom.P2PTrustedSocketManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PTrustedSocketManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PTrustedSocketManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PTrustedSocketManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PTrustedSocketManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.P2PTrustedSocketManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startRtpDump(incoming, outgoing) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.P2PTrustedSocketManager_StartRtpDump_ParamsSpec,
      null,
      [incoming, outgoing]);
  }

  stopRtpDump(incoming, outgoing) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.P2PTrustedSocketManager_StopRtpDump_ParamsSpec,
      null,
      [incoming, outgoing]);
  }

  pauseNetworkChangeNotifications() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.P2PTrustedSocketManager_PauseNetworkChangeNotifications_ParamsSpec,
      null,
      []);
  }

  resumeNetworkChangeNotifications() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.P2PTrustedSocketManager_ResumeNetworkChangeNotifications_ParamsSpec,
      null,
      []);
  }

};

network.mojom.P2PTrustedSocketManager.getRemote = function() {
  let remote = new network.mojom.P2PTrustedSocketManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PTrustedSocketManager',
    'context');
  return remote.$;
};

// ParamsSpec for StartRtpDump
network.mojom.P2PTrustedSocketManager_StartRtpDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PTrustedSocketManager.StartRtpDump_Params',
      packedSize: 16,
      fields: [
        { name: 'incoming', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'outgoing', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopRtpDump
network.mojom.P2PTrustedSocketManager_StopRtpDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PTrustedSocketManager.StopRtpDump_Params',
      packedSize: 16,
      fields: [
        { name: 'incoming', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'outgoing', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PauseNetworkChangeNotifications
network.mojom.P2PTrustedSocketManager_PauseNetworkChangeNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PTrustedSocketManager.PauseNetworkChangeNotifications_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResumeNetworkChangeNotifications
network.mojom.P2PTrustedSocketManager_ResumeNetworkChangeNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PTrustedSocketManager.ResumeNetworkChangeNotifications_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.P2PTrustedSocketManagerPtr = network.mojom.P2PTrustedSocketManagerRemote;
network.mojom.P2PTrustedSocketManagerRequest = network.mojom.P2PTrustedSocketManagerPendingReceiver;

