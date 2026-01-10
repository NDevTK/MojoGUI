// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/p2p_trusted.mojom
// Module: network.mojom

'use strict';

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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: InvalidSocketPortRangeRequested
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InvalidSocketPortRangeRequested (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: DumpPacket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.P2PTrustedSocketManagerClient_DumpPacket_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DumpPacket (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.invalidSocketPortRangeRequested');
          const result = this.impl.invalidSocketPortRangeRequested();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.P2PTrustedSocketManagerClient_DumpPacket_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dumpPacket');
          const result = this.impl.dumpPacket(params.packet_header, params.packet_length, params.incoming);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: StartRtpDump
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.P2PTrustedSocketManager_StartRtpDump_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartRtpDump (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: StopRtpDump
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.P2PTrustedSocketManager_StopRtpDump_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopRtpDump (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: PauseNetworkChangeNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.P2PTrustedSocketManager_PauseNetworkChangeNotifications_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PauseNetworkChangeNotifications (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: ResumeNetworkChangeNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.P2PTrustedSocketManager_ResumeNetworkChangeNotifications_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResumeNetworkChangeNotifications (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.P2PTrustedSocketManager_StartRtpDump_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startRtpDump');
          const result = this.impl.startRtpDump(params.incoming, params.outgoing);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.P2PTrustedSocketManager_StopRtpDump_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopRtpDump');
          const result = this.impl.stopRtpDump(params.incoming, params.outgoing);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.P2PTrustedSocketManager_PauseNetworkChangeNotifications_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.pauseNetworkChangeNotifications');
          const result = this.impl.pauseNetworkChangeNotifications();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.P2PTrustedSocketManager_ResumeNetworkChangeNotifications_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resumeNetworkChangeNotifications');
          const result = this.impl.resumeNetworkChangeNotifications();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.P2PTrustedSocketManagerReceiver = network.mojom.P2PTrustedSocketManagerReceiver;

network.mojom.P2PTrustedSocketManagerPtr = network.mojom.P2PTrustedSocketManagerRemote;
network.mojom.P2PTrustedSocketManagerRequest = network.mojom.P2PTrustedSocketManagerPendingReceiver;

