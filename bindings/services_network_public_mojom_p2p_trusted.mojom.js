// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/p2p_trusted.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

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
  invalidSocketPortRangeRequested() {
    return this.$.invalidSocketPortRangeRequested();
  }
  dumpPacket(packet_header, packet_length, incoming) {
    return this.$.dumpPacket(packet_header, packet_length, incoming);
  }
};

network.mojom.P2PTrustedSocketManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('P2PTrustedSocketManagerClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  invalidSocketPortRangeRequested() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_ParamsSpec,
      null,
      [],
      false);
  }

  dumpPacket(packet_header, packet_length, incoming) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.P2PTrustedSocketManagerClient_DumpPacket_ParamsSpec,
      null,
      [packet_header, packet_length, incoming],
      false);
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

network.mojom.P2PTrustedSocketManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('P2PTrustedSocketManagerClient', [
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
             decoder.decodeStructInline(network.mojom.P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.P2PTrustedSocketManagerClient_DumpPacket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_ParamsSpec.$.structSpec);
          const result = this.impl.invalidSocketPortRangeRequested();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PTrustedSocketManagerClient_DumpPacket_ParamsSpec.$.structSpec);
          const result = this.impl.dumpPacket(params.packet_header, params.packet_length, params.incoming);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.P2PTrustedSocketManagerClientReceiver = network.mojom.P2PTrustedSocketManagerClientReceiver;

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
  startRtpDump(incoming, outgoing) {
    return this.$.startRtpDump(incoming, outgoing);
  }
  stopRtpDump(incoming, outgoing) {
    return this.$.stopRtpDump(incoming, outgoing);
  }
  pauseNetworkChangeNotifications() {
    return this.$.pauseNetworkChangeNotifications();
  }
  resumeNetworkChangeNotifications() {
    return this.$.resumeNetworkChangeNotifications();
  }
};

network.mojom.P2PTrustedSocketManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('P2PTrustedSocketManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  startRtpDump(incoming, outgoing) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.P2PTrustedSocketManager_StartRtpDump_ParamsSpec,
      null,
      [incoming, outgoing],
      false);
  }

  stopRtpDump(incoming, outgoing) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.P2PTrustedSocketManager_StopRtpDump_ParamsSpec,
      null,
      [incoming, outgoing],
      false);
  }

  pauseNetworkChangeNotifications() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.P2PTrustedSocketManager_PauseNetworkChangeNotifications_ParamsSpec,
      null,
      [],
      false);
  }

  resumeNetworkChangeNotifications() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      network.mojom.P2PTrustedSocketManager_ResumeNetworkChangeNotifications_ParamsSpec,
      null,
      [],
      false);
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

network.mojom.P2PTrustedSocketManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('P2PTrustedSocketManager', [
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
             decoder.decodeStructInline(network.mojom.P2PTrustedSocketManager_StartRtpDump_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.P2PTrustedSocketManager_StopRtpDump_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.P2PTrustedSocketManager_PauseNetworkChangeNotifications_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.P2PTrustedSocketManager_ResumeNetworkChangeNotifications_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PTrustedSocketManager_StartRtpDump_ParamsSpec.$.structSpec);
          const result = this.impl.startRtpDump(params.incoming, params.outgoing);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PTrustedSocketManager_StopRtpDump_ParamsSpec.$.structSpec);
          const result = this.impl.stopRtpDump(params.incoming, params.outgoing);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PTrustedSocketManager_PauseNetworkChangeNotifications_ParamsSpec.$.structSpec);
          const result = this.impl.pauseNetworkChangeNotifications();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.P2PTrustedSocketManager_ResumeNetworkChangeNotifications_ParamsSpec.$.structSpec);
          const result = this.impl.resumeNetworkChangeNotifications();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.P2PTrustedSocketManagerReceiver = network.mojom.P2PTrustedSocketManagerReceiver;

network.mojom.P2PTrustedSocketManagerPtr = network.mojom.P2PTrustedSocketManagerRemote;
network.mojom.P2PTrustedSocketManagerRequest = network.mojom.P2PTrustedSocketManagerPendingReceiver;

