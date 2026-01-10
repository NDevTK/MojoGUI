// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/p2p_trusted.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};

network.mojom.P2PTrustedSocketManagerClient = {};
network.mojom.P2PTrustedSocketManagerClient.$interfaceName = 'network.mojom.P2PTrustedSocketManagerClient';
network.mojom.P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_ParamsSpec = { $: {} };
network.mojom.P2PTrustedSocketManagerClient_DumpPacket_ParamsSpec = { $: {} };
network.mojom.P2PTrustedSocketManager = {};
network.mojom.P2PTrustedSocketManager.$interfaceName = 'network.mojom.P2PTrustedSocketManager';
network.mojom.P2PTrustedSocketManager_StartRtpDump_ParamsSpec = { $: {} };
network.mojom.P2PTrustedSocketManager_StopRtpDump_ParamsSpec = { $: {} };
network.mojom.P2PTrustedSocketManager_PauseNetworkChangeNotifications_ParamsSpec = { $: {} };
network.mojom.P2PTrustedSocketManager_ResumeNetworkChangeNotifications_ParamsSpec = { $: {} };

// Interface: P2PTrustedSocketManagerClient
mojo.internal.Struct(
    network.mojom.P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_ParamsSpec, 'network.mojom.P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.P2PTrustedSocketManagerClient_DumpPacket_ParamsSpec, 'network.mojom.P2PTrustedSocketManagerClient_DumpPacket_Params', [
      mojo.internal.StructField('packet_header', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('packet_length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('incoming', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [],
      false);
  }

  dumpPacket(packet_header, packet_length, incoming) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.P2PTrustedSocketManagerClient_DumpPacket_ParamsSpec,
      null,
      [packet_header, packet_length, incoming],
      false);
  }

};

network.mojom.P2PTrustedSocketManagerClient.getRemote = function() {
  let remote = new network.mojom.P2PTrustedSocketManagerClientRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.P2PTrustedSocketManagerClient',
    'context');
  return remote.$;
};

network.mojom.P2PTrustedSocketManagerClientPtr = network.mojom.P2PTrustedSocketManagerClientRemote;
network.mojom.P2PTrustedSocketManagerClientRequest = network.mojom.P2PTrustedSocketManagerClientPendingReceiver;


// Interface: P2PTrustedSocketManager
mojo.internal.Struct(
    network.mojom.P2PTrustedSocketManager_StartRtpDump_ParamsSpec, 'network.mojom.P2PTrustedSocketManager_StartRtpDump_Params', [
      mojo.internal.StructField('incoming', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('outgoing', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PTrustedSocketManager_StopRtpDump_ParamsSpec, 'network.mojom.P2PTrustedSocketManager_StopRtpDump_Params', [
      mojo.internal.StructField('incoming', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('outgoing', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PTrustedSocketManager_PauseNetworkChangeNotifications_ParamsSpec, 'network.mojom.P2PTrustedSocketManager_PauseNetworkChangeNotifications_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.P2PTrustedSocketManager_ResumeNetworkChangeNotifications_ParamsSpec, 'network.mojom.P2PTrustedSocketManager_ResumeNetworkChangeNotifications_Params', [
    ],
    [[0, 8]]);

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
      [incoming, outgoing],
      false);
  }

  stopRtpDump(incoming, outgoing) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.P2PTrustedSocketManager_StopRtpDump_ParamsSpec,
      null,
      [incoming, outgoing],
      false);
  }

  pauseNetworkChangeNotifications() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.P2PTrustedSocketManager_PauseNetworkChangeNotifications_ParamsSpec,
      null,
      [],
      false);
  }

  resumeNetworkChangeNotifications() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.P2PTrustedSocketManager_ResumeNetworkChangeNotifications_ParamsSpec,
      null,
      [],
      false);
  }

};

network.mojom.P2PTrustedSocketManager.getRemote = function() {
  let remote = new network.mojom.P2PTrustedSocketManagerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.P2PTrustedSocketManager',
    'context');
  return remote.$;
};

network.mojom.P2PTrustedSocketManagerPtr = network.mojom.P2PTrustedSocketManagerRemote;
network.mojom.P2PTrustedSocketManagerRequest = network.mojom.P2PTrustedSocketManagerPendingReceiver;

