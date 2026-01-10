// Auto-generated MojoJS binding
// Source: chromium_src/components/performance_manager/public/mojom/coordination_unit.mojom
// Module: performance_manager.mojom

'use strict';

// Module namespace
var performance_manager = performance_manager || {};
performance_manager.mojom = performance_manager.mojom || {};
var mojo_base = mojo_base || {};
var blink = blink || {};

performance_manager.mojom.CoordinationUnitTypeSpec = { $: mojo.internal.Enum() };
performance_manager.mojom.DocumentCoordinationUnit = {};
performance_manager.mojom.DocumentCoordinationUnit.$interfaceName = 'performance_manager.mojom.DocumentCoordinationUnit';
performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ResponseParamsSpec = { $: {} };
performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec = { $: {} };
performance_manager.mojom.ProcessCoordinationUnit = {};
performance_manager.mojom.ProcessCoordinationUnit.$interfaceName = 'performance_manager.mojom.ProcessCoordinationUnit';
performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec = { $: {} };
performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec = { $: {} };
performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec = { $: {} };
performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec = { $: {} };
performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec = { $: {} };
performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec = { $: {} };
performance_manager.mojom.ChildProcessCoordinationUnit = {};
performance_manager.mojom.ChildProcessCoordinationUnit.$interfaceName = 'performance_manager.mojom.ChildProcessCoordinationUnit';
performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec = { $: {} };
performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ResponseParamsSpec = { $: {} };

// Enum: CoordinationUnitType
performance_manager.mojom.CoordinationUnitType = {
  kFrame: 0,
  kPage: 1,
  kProcess: 2,
  kSystem: 3,
};

// Interface: DocumentCoordinationUnit
mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_Params', [
      mojo.internal.StructField('state', 0, 0, performance_manager.mojom.LifecycleStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_Params', [
      mojo.internal.StructField('has_nonempty_beforeunload', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_Params', [
      mojo.internal.StructField('is_ad_frame', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_Params', [
      mojo.internal.StructField('time_since_navigation_start', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_Params', [
      mojo.internal.StructField('mode', 0, 0, WebMemoryMeasurement.ModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ResponseParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ResponseParams', [
      mojo.internal.StructField('measurement', 0, 0, performance_manager.mojom.WebMemoryMeasurementSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec, 'performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_Params', [
    ],
    [[0, 8]]);

performance_manager.mojom.DocumentCoordinationUnitPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

performance_manager.mojom.DocumentCoordinationUnitRemote = class {
  static get $interfaceName() {
    return 'performance_manager.mojom.DocumentCoordinationUnit';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      performance_manager.mojom.DocumentCoordinationUnitPendingReceiver,
      handle);
    this.$ = new performance_manager.mojom.DocumentCoordinationUnitRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

performance_manager.mojom.DocumentCoordinationUnitRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setNetworkAlmostIdle() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec,
      null,
      [],
      false);
  }

  setLifecycleState(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec,
      null,
      [state],
      false);
  }

  setHasNonEmptyBeforeUnload(has_nonempty_beforeunload) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec,
      null,
      [has_nonempty_beforeunload],
      false);
  }

  setHadFormInteraction() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec,
      null,
      [],
      false);
  }

  setHadUserEdits() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec,
      null,
      [],
      false);
  }

  onStartedUsingWebRTC() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec,
      null,
      [],
      false);
  }

  onStoppedUsingWebRTC() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec,
      null,
      [],
      false);
  }

  setIsAdFrame(is_ad_frame) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec,
      null,
      [is_ad_frame],
      false);
  }

  onNonPersistentNotificationCreated() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec,
      null,
      [],
      false);
  }

  onFirstContentfulPaint(time_since_navigation_start) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec,
      null,
      [time_since_navigation_start],
      false);
  }

  onWebMemoryMeasurementRequested(mode) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec,
      performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ResponseParamsSpec,
      [mode],
      false);
  }

  onFreezingOriginTrialOptOut() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec,
      null,
      [],
      false);
  }

};

performance_manager.mojom.DocumentCoordinationUnit.getRemote = function() {
  let remote = new performance_manager.mojom.DocumentCoordinationUnitRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'performance_manager.mojom.DocumentCoordinationUnit',
    'context');
  return remote.$;
};

performance_manager.mojom.DocumentCoordinationUnitReceiver = class {
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
        
        // Try Method 0: SetNetworkAlmostIdle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNetworkAlmostIdle (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: SetLifecycleState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLifecycleState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: SetHasNonEmptyBeforeUnload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasNonEmptyBeforeUnload (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: SetHadFormInteraction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHadFormInteraction (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: SetHadUserEdits
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHadUserEdits (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: OnStartedUsingWebRTC
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStartedUsingWebRTC (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: OnStoppedUsingWebRTC
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStoppedUsingWebRTC (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: SetIsAdFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsAdFrame (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: OnNonPersistentNotificationCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNonPersistentNotificationCreated (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: OnFirstContentfulPaint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFirstContentfulPaint (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: OnWebMemoryMeasurementRequested
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWebMemoryMeasurementRequested (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: OnFreezingOriginTrialOptOut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFreezingOriginTrialOptOut (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
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
          const params = decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setNetworkAlmostIdle');
          const result = this.impl.setNetworkAlmostIdle();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setLifecycleState');
          const result = this.impl.setLifecycleState(params.state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHasNonEmptyBeforeUnload');
          const result = this.impl.setHasNonEmptyBeforeUnload(params.has_nonempty_beforeunload);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHadFormInteraction');
          const result = this.impl.setHadFormInteraction();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHadUserEdits');
          const result = this.impl.setHadUserEdits();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onStartedUsingWebRTC');
          const result = this.impl.onStartedUsingWebRTC();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onStoppedUsingWebRTC');
          const result = this.impl.onStoppedUsingWebRTC();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setIsAdFrame');
          const result = this.impl.setIsAdFrame(params.is_ad_frame);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNonPersistentNotificationCreated');
          const result = this.impl.onNonPersistentNotificationCreated();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFirstContentfulPaint');
          const result = this.impl.onFirstContentfulPaint(params.time_since_navigation_start);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWebMemoryMeasurementRequested');
          const result = this.impl.onWebMemoryMeasurementRequested(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFreezingOriginTrialOptOut');
          const result = this.impl.onFreezingOriginTrialOptOut();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

performance_manager.mojom.DocumentCoordinationUnitReceiver = performance_manager.mojom.DocumentCoordinationUnitReceiver;

performance_manager.mojom.DocumentCoordinationUnitPtr = performance_manager.mojom.DocumentCoordinationUnitRemote;
performance_manager.mojom.DocumentCoordinationUnitRequest = performance_manager.mojom.DocumentCoordinationUnitPendingReceiver;


// Interface: ProcessCoordinationUnit
mojo.internal.Struct(
    performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec, 'performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_Params', [
      mojo.internal.StructField('main_thread_task_load_is_low', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec, 'performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_Params', [
      mojo.internal.StructField('description', 0, 0, performance_manager.mojom.V8ContextDescriptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('iframe_attribution_data', 8, 0, performance_manager.mojom.IframeAttributionDataSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec, 'performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_Params', [
      mojo.internal.StructField('v8_context_token', 0, 0, blink.mojom.V8ContextTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec, 'performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_Params', [
      mojo.internal.StructField('v8_context_token', 0, 0, blink.mojom.V8ContextTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec, 'performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_Params', [
      mojo.internal.StructField('parent_frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_frame_token', 8, 0, blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('iframe_attribution_data', 16, 0, performance_manager.mojom.IframeAttributionDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec, 'performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_Params', [
      mojo.internal.StructField('parent_frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_frame_token', 8, 0, blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

performance_manager.mojom.ProcessCoordinationUnitPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

performance_manager.mojom.ProcessCoordinationUnitRemote = class {
  static get $interfaceName() {
    return 'performance_manager.mojom.ProcessCoordinationUnit';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      performance_manager.mojom.ProcessCoordinationUnitPendingReceiver,
      handle);
    this.$ = new performance_manager.mojom.ProcessCoordinationUnitRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

performance_manager.mojom.ProcessCoordinationUnitRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setMainThreadTaskLoadIsLow(main_thread_task_load_is_low) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec,
      null,
      [main_thread_task_load_is_low],
      false);
  }

  onV8ContextCreated(description, iframe_attribution_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec,
      null,
      [description, iframe_attribution_data],
      false);
  }

  onV8ContextDetached(v8_context_token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec,
      null,
      [v8_context_token],
      false);
  }

  onV8ContextDestroyed(v8_context_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec,
      null,
      [v8_context_token],
      false);
  }

  onRemoteIframeAttached(parent_frame_token, remote_frame_token, iframe_attribution_data) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec,
      null,
      [parent_frame_token, remote_frame_token, iframe_attribution_data],
      false);
  }

  onRemoteIframeDetached(parent_frame_token, remote_frame_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec,
      null,
      [parent_frame_token, remote_frame_token],
      false);
  }

};

performance_manager.mojom.ProcessCoordinationUnit.getRemote = function() {
  let remote = new performance_manager.mojom.ProcessCoordinationUnitRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'performance_manager.mojom.ProcessCoordinationUnit',
    'context');
  return remote.$;
};

performance_manager.mojom.ProcessCoordinationUnitReceiver = class {
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
        
        // Try Method 0: SetMainThreadTaskLoadIsLow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMainThreadTaskLoadIsLow (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnV8ContextCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnV8ContextCreated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: OnV8ContextDetached
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnV8ContextDetached (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: OnV8ContextDestroyed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnV8ContextDestroyed (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: OnRemoteIframeAttached
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRemoteIframeAttached (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: OnRemoteIframeDetached
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRemoteIframeDetached (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
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
          const params = decoder.decodeStruct(performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setMainThreadTaskLoadIsLow');
          const result = this.impl.setMainThreadTaskLoadIsLow(params.main_thread_task_load_is_low);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onV8ContextCreated');
          const result = this.impl.onV8ContextCreated(params.description, params.iframe_attribution_data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onV8ContextDetached');
          const result = this.impl.onV8ContextDetached(params.v8_context_token);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onV8ContextDestroyed');
          const result = this.impl.onV8ContextDestroyed(params.v8_context_token);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onRemoteIframeAttached');
          const result = this.impl.onRemoteIframeAttached(params.parent_frame_token, params.remote_frame_token, params.iframe_attribution_data);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onRemoteIframeDetached');
          const result = this.impl.onRemoteIframeDetached(params.parent_frame_token, params.remote_frame_token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

performance_manager.mojom.ProcessCoordinationUnitReceiver = performance_manager.mojom.ProcessCoordinationUnitReceiver;

performance_manager.mojom.ProcessCoordinationUnitPtr = performance_manager.mojom.ProcessCoordinationUnitRemote;
performance_manager.mojom.ProcessCoordinationUnitRequest = performance_manager.mojom.ProcessCoordinationUnitPendingReceiver;


// Interface: ChildProcessCoordinationUnit
mojo.internal.Struct(
    performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec, 'performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ResponseParamsSpec, 'performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ResponseParams', [
      mojo.internal.StructField('global_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('process_region', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

performance_manager.mojom.ChildProcessCoordinationUnitPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

performance_manager.mojom.ChildProcessCoordinationUnitRemote = class {
  static get $interfaceName() {
    return 'performance_manager.mojom.ChildProcessCoordinationUnit';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      performance_manager.mojom.ChildProcessCoordinationUnitPendingReceiver,
      handle);
    this.$ = new performance_manager.mojom.ChildProcessCoordinationUnitRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

performance_manager.mojom.ChildProcessCoordinationUnitRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initializeChildProcessCoordination() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec,
      performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ResponseParamsSpec,
      [],
      false);
  }

};

performance_manager.mojom.ChildProcessCoordinationUnit.getRemote = function() {
  let remote = new performance_manager.mojom.ChildProcessCoordinationUnitRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'performance_manager.mojom.ChildProcessCoordinationUnit',
    'context');
  return remote.$;
};

performance_manager.mojom.ChildProcessCoordinationUnitReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: InitializeChildProcessCoordination
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeChildProcessCoordination (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
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
          const params = decoder.decodeStruct(performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initializeChildProcessCoordination');
          const result = this.impl.initializeChildProcessCoordination();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

performance_manager.mojom.ChildProcessCoordinationUnitReceiver = performance_manager.mojom.ChildProcessCoordinationUnitReceiver;

performance_manager.mojom.ChildProcessCoordinationUnitPtr = performance_manager.mojom.ChildProcessCoordinationUnitRemote;
performance_manager.mojom.ChildProcessCoordinationUnitRequest = performance_manager.mojom.ChildProcessCoordinationUnitPendingReceiver;

