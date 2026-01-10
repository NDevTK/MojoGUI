// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/peerconnection/peer_connection_tracker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('rtc_configuration', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('lid', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PeerConnectionManager
mojo.internal.Struct(
    blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec, 'blink.mojom.PeerConnectionManager_OnSuspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec, 'blink.mojom.PeerConnectionManager_OnThermalStateChange_Params', [
      mojo.internal.StructField('thermal_state', 0, 0, blink.mojom.DeviceThermalStateSpec.$, null, false, 0, undefined),
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
      [],
      false);
  }

  onThermalStateChange(thermal_state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec,
      null,
      [thermal_state],
      false);
  }

  startEventLog(peer_connection_local_id, output_period_ms) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec,
      null,
      [peer_connection_local_id, output_period_ms],
      false);
  }

  stopEventLog(peer_connection_local_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec,
      null,
      [peer_connection_local_id],
      false);
  }

  startDataChannelLog(peer_connection_local_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec,
      null,
      [peer_connection_local_id],
      false);
  }

  stopDataChannelLog(peer_connection_local_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec,
      null,
      [peer_connection_local_id],
      false);
  }

  getStandardStats() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec,
      null,
      [],
      false);
  }

  getCurrentState() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec,
      null,
      [],
      false);
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

blink.mojom.PeerConnectionManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
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
        
        // Try Method 0: OnSuspend
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSuspend (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnThermalStateChange
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnThermalStateChange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: StartEventLog
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartEventLog (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: StopEventLog
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopEventLog (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: StartDataChannelLog
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDataChannelLog (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: StopDataChannelLog
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopDataChannelLog (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: GetStandardStats
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStandardStats (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: GetCurrentState
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCurrentState (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionManager_OnSuspend_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSuspend');
          const result = this.impl.onSuspend();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionManager_OnThermalStateChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onThermalStateChange');
          const result = this.impl.onThermalStateChange(params.thermal_state);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionManager_StartEventLog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startEventLog');
          const result = this.impl.startEventLog(params.peer_connection_local_id, params.output_period_ms);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionManager_StopEventLog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopEventLog');
          const result = this.impl.stopEventLog(params.peer_connection_local_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionManager_StartDataChannelLog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startDataChannelLog');
          const result = this.impl.startDataChannelLog(params.peer_connection_local_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionManager_StopDataChannelLog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopDataChannelLog');
          const result = this.impl.stopDataChannelLog(params.peer_connection_local_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionManager_GetStandardStats_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getStandardStats');
          const result = this.impl.getStandardStats();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionManager_GetCurrentState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCurrentState');
          const result = this.impl.getCurrentState();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.PeerConnectionManagerReceiver = blink.mojom.PeerConnectionManagerReceiver;

blink.mojom.PeerConnectionManagerPtr = blink.mojom.PeerConnectionManagerRemote;
blink.mojom.PeerConnectionManagerRequest = blink.mojom.PeerConnectionManagerPendingReceiver;


// Interface: PeerConnectionTrackerHost
mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_Params', [
      mojo.internal.StructField('info', 0, 0, blink.mojom.PeerConnectionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_Params', [
      mojo.internal.StructField('lid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_Params', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lid', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetUserMedia_Params', [
      mojo.internal.StructField('audio_constraints', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('video_constraints', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('audio', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('video', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('audio_track_info', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('video_track_info', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_Params', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_Params', [
      mojo.internal.StructField('audio_constraints', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('video_constraints', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('audio', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('video', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_Params', [
      mojo.internal.StructField('stream_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('audio_track_info', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('video_track_info', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_Params', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_Params', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('lid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_Params', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('lid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec, 'blink.mojom.PeerConnectionTrackerHost_AddStandardStats_Params', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
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
      [info],
      false);
  }

  removePeerConnection(lid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec,
      null,
      [lid],
      false);
  }

  updatePeerConnection(lid, type, value) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec,
      null,
      [lid, type, value],
      false);
  }

  onPeerConnectionSessionIdSet(lid, session_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec,
      null,
      [lid, session_id],
      false);
  }

  getUserMedia(request_id, audio, video, audio_constraints, video_constraints) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec,
      null,
      [request_id, audio, video, audio_constraints, video_constraints],
      false);
  }

  getUserMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec,
      null,
      [request_id, stream_id, audio_track_info, video_track_info],
      false);
  }

  getUserMediaFailure(request_id, error, error_message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec,
      null,
      [request_id, error, error_message],
      false);
  }

  getDisplayMedia(request_id, audio, video, audio_constraints, video_constraints) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec,
      null,
      [request_id, audio, video, audio_constraints, video_constraints],
      false);
  }

  getDisplayMediaSuccess(request_id, stream_id, audio_track_info, video_track_info) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec,
      null,
      [request_id, stream_id, audio_track_info, video_track_info],
      false);
  }

  getDisplayMediaFailure(request_id, error, error_message) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec,
      null,
      [request_id, error, error_message],
      false);
  }

  webRtcEventLogWrite(lid, output) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec,
      null,
      [lid, output],
      false);
  }

  webRtcDataChannelLogWrite(lid, output) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec,
      null,
      [lid, output],
      false);
  }

  addStandardStats(lid, value) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec,
      null,
      [lid, value],
      false);
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

blink.mojom.PeerConnectionTrackerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
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
        
        // Try Method 0: AddPeerConnection
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPeerConnection (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: RemovePeerConnection
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemovePeerConnection (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: UpdatePeerConnection
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePeerConnection (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: OnPeerConnectionSessionIdSet
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPeerConnectionSessionIdSet (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: GetUserMedia
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserMedia (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: GetUserMediaSuccess
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserMediaSuccess (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: GetUserMediaFailure
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserMediaFailure (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: GetDisplayMedia
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDisplayMedia (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: GetDisplayMediaSuccess
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDisplayMediaSuccess (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: GetDisplayMediaFailure
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDisplayMediaFailure (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: WebRtcEventLogWrite
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WebRtcEventLogWrite (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: WebRtcDataChannelLogWrite
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WebRtcDataChannelLogWrite (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 12: AddStandardStats
        try {
             decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddStandardStats (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_AddPeerConnection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addPeerConnection');
          const result = this.impl.addPeerConnection(params.info);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_RemovePeerConnection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removePeerConnection');
          const result = this.impl.removePeerConnection(params.lid);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_UpdatePeerConnection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updatePeerConnection');
          const result = this.impl.updatePeerConnection(params.lid, params.type, params.value);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_OnPeerConnectionSessionIdSet_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPeerConnectionSessionIdSet');
          const result = this.impl.onPeerConnectionSessionIdSet(params.lid, params.session_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_GetUserMedia_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUserMedia');
          const result = this.impl.getUserMedia(params.request_id, params.audio, params.video, params.audio_constraints, params.video_constraints);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_GetUserMediaSuccess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUserMediaSuccess');
          const result = this.impl.getUserMediaSuccess(params.request_id, params.stream_id, params.audio_track_info, params.video_track_info);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_GetUserMediaFailure_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUserMediaFailure');
          const result = this.impl.getUserMediaFailure(params.request_id, params.error, params.error_message);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_GetDisplayMedia_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDisplayMedia');
          const result = this.impl.getDisplayMedia(params.request_id, params.audio, params.video, params.audio_constraints, params.video_constraints);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaSuccess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDisplayMediaSuccess');
          const result = this.impl.getDisplayMediaSuccess(params.request_id, params.stream_id, params.audio_track_info, params.video_track_info);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_GetDisplayMediaFailure_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDisplayMediaFailure');
          const result = this.impl.getDisplayMediaFailure(params.request_id, params.error, params.error_message);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_WebRtcEventLogWrite_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.webRtcEventLogWrite');
          const result = this.impl.webRtcEventLogWrite(params.lid, params.output);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_WebRtcDataChannelLogWrite_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.webRtcDataChannelLogWrite');
          const result = this.impl.webRtcDataChannelLogWrite(params.lid, params.output);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PeerConnectionTrackerHost_AddStandardStats_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addStandardStats');
          const result = this.impl.addStandardStats(params.lid, params.value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.PeerConnectionTrackerHostReceiver = blink.mojom.PeerConnectionTrackerHostReceiver;

blink.mojom.PeerConnectionTrackerHostPtr = blink.mojom.PeerConnectionTrackerHostRemote;
blink.mojom.PeerConnectionTrackerHostRequest = blink.mojom.PeerConnectionTrackerHostPendingReceiver;

