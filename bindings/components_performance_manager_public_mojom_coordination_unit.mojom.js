// Auto-generated MojoJS binding
// Source: chromium_src/components/performance_manager/public/mojom/coordination_unit.mojom
// Module: performance_manager.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  setNetworkAlmostIdle() {
    return this.$.setNetworkAlmostIdle();
  }
  setLifecycleState(state) {
    return this.$.setLifecycleState(state);
  }
  setHasNonEmptyBeforeUnload(has_nonempty_beforeunload) {
    return this.$.setHasNonEmptyBeforeUnload(has_nonempty_beforeunload);
  }
  setHadFormInteraction() {
    return this.$.setHadFormInteraction();
  }
  setHadUserEdits() {
    return this.$.setHadUserEdits();
  }
  onStartedUsingWebRTC() {
    return this.$.onStartedUsingWebRTC();
  }
  onStoppedUsingWebRTC() {
    return this.$.onStoppedUsingWebRTC();
  }
  setIsAdFrame(is_ad_frame) {
    return this.$.setIsAdFrame(is_ad_frame);
  }
  onNonPersistentNotificationCreated() {
    return this.$.onNonPersistentNotificationCreated();
  }
  onFirstContentfulPaint(time_since_navigation_start) {
    return this.$.onFirstContentfulPaint(time_since_navigation_start);
  }
  onWebMemoryMeasurementRequested(mode) {
    return this.$.onWebMemoryMeasurementRequested(mode);
  }
  onFreezingOriginTrialOptOut() {
    return this.$.onFreezingOriginTrialOptOut();
  }
};

performance_manager.mojom.DocumentCoordinationUnitRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DocumentCoordinationUnit', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setNetworkAlmostIdle() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec,
      null,
      [],
      false);
  }

  setLifecycleState(state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec,
      null,
      [state],
      false);
  }

  setHasNonEmptyBeforeUnload(has_nonempty_beforeunload) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec,
      null,
      [has_nonempty_beforeunload],
      false);
  }

  setHadFormInteraction() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec,
      null,
      [],
      false);
  }

  setHadUserEdits() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec,
      null,
      [],
      false);
  }

  onStartedUsingWebRTC() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec,
      null,
      [],
      false);
  }

  onStoppedUsingWebRTC() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec,
      null,
      [],
      false);
  }

  setIsAdFrame(is_ad_frame) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec,
      null,
      [is_ad_frame],
      false);
  }

  onNonPersistentNotificationCreated() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec,
      null,
      [],
      false);
  }

  onFirstContentfulPaint(time_since_navigation_start) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec,
      null,
      [time_since_navigation_start],
      false);
  }

  onWebMemoryMeasurementRequested(mode) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec,
      performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ResponseParamsSpec,
      [mode],
      false);
  }

  onFreezingOriginTrialOptOut() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DocumentCoordinationUnit', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec.$.structSpec);
          const result = this.impl.setNetworkAlmostIdle();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec.$.structSpec);
          const result = this.impl.setLifecycleState(params.state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec.$.structSpec);
          const result = this.impl.setHasNonEmptyBeforeUnload(params.has_nonempty_beforeunload);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec.$.structSpec);
          const result = this.impl.setHadFormInteraction();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec.$.structSpec);
          const result = this.impl.setHadUserEdits();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec.$.structSpec);
          const result = this.impl.onStartedUsingWebRTC();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec.$.structSpec);
          const result = this.impl.onStoppedUsingWebRTC();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec.$.structSpec);
          const result = this.impl.setIsAdFrame(params.is_ad_frame);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec.$.structSpec);
          const result = this.impl.onNonPersistentNotificationCreated();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec.$.structSpec);
          const result = this.impl.onFirstContentfulPaint(params.time_since_navigation_start);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec.$.structSpec);
          const result = this.impl.onFreezingOriginTrialOptOut();
          break;
        }
      }
      } catch (err) {}
    });
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
  setMainThreadTaskLoadIsLow(main_thread_task_load_is_low) {
    return this.$.setMainThreadTaskLoadIsLow(main_thread_task_load_is_low);
  }
  onV8ContextCreated(description, iframe_attribution_data) {
    return this.$.onV8ContextCreated(description, iframe_attribution_data);
  }
  onV8ContextDetached(v8_context_token) {
    return this.$.onV8ContextDetached(v8_context_token);
  }
  onV8ContextDestroyed(v8_context_token) {
    return this.$.onV8ContextDestroyed(v8_context_token);
  }
  onRemoteIframeAttached(parent_frame_token, remote_frame_token, iframe_attribution_data) {
    return this.$.onRemoteIframeAttached(parent_frame_token, remote_frame_token, iframe_attribution_data);
  }
  onRemoteIframeDetached(parent_frame_token, remote_frame_token) {
    return this.$.onRemoteIframeDetached(parent_frame_token, remote_frame_token);
  }
};

performance_manager.mojom.ProcessCoordinationUnitRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProcessCoordinationUnit', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setMainThreadTaskLoadIsLow(main_thread_task_load_is_low) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec,
      null,
      [main_thread_task_load_is_low],
      false);
  }

  onV8ContextCreated(description, iframe_attribution_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec,
      null,
      [description, iframe_attribution_data],
      false);
  }

  onV8ContextDetached(v8_context_token) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec,
      null,
      [v8_context_token],
      false);
  }

  onV8ContextDestroyed(v8_context_token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec,
      null,
      [v8_context_token],
      false);
  }

  onRemoteIframeAttached(parent_frame_token, remote_frame_token, iframe_attribution_data) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec,
      null,
      [parent_frame_token, remote_frame_token, iframe_attribution_data],
      false);
  }

  onRemoteIframeDetached(parent_frame_token, remote_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ProcessCoordinationUnit', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec.$.structSpec);
          const result = this.impl.setMainThreadTaskLoadIsLow(params.main_thread_task_load_is_low);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec.$.structSpec);
          const result = this.impl.onV8ContextCreated(params.description, params.iframe_attribution_data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec.$.structSpec);
          const result = this.impl.onV8ContextDetached(params.v8_context_token);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec.$.structSpec);
          const result = this.impl.onV8ContextDestroyed(params.v8_context_token);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec.$.structSpec);
          const result = this.impl.onRemoteIframeAttached(params.parent_frame_token, params.remote_frame_token, params.iframe_attribution_data);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec.$.structSpec);
          const result = this.impl.onRemoteIframeDetached(params.parent_frame_token, params.remote_frame_token);
          break;
        }
      }
      } catch (err) {}
    });
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
  initializeChildProcessCoordination() {
    return this.$.initializeChildProcessCoordination();
  }
};

performance_manager.mojom.ChildProcessCoordinationUnitRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChildProcessCoordinationUnit', [
      { explicit: null },
    ]);
  }

  initializeChildProcessCoordination() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ChildProcessCoordinationUnit', [
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
             decoder.decodeStructInline(performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
  }
};

performance_manager.mojom.ChildProcessCoordinationUnitReceiver = performance_manager.mojom.ChildProcessCoordinationUnitReceiver;

performance_manager.mojom.ChildProcessCoordinationUnitPtr = performance_manager.mojom.ChildProcessCoordinationUnitRemote;
performance_manager.mojom.ChildProcessCoordinationUnitRequest = performance_manager.mojom.ChildProcessCoordinationUnitPendingReceiver;

