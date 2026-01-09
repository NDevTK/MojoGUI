// Auto-generated MojoJS binding
// Source: chromium_src/components/performance_manager/public/mojom/coordination_unit.mojom
// Module: performance_manager.mojom

'use strict';

// Module namespace
var performance_manager = performance_manager || {};
performance_manager.mojom = performance_manager.mojom || {};


// Enum: CoordinationUnitType
performance_manager.mojom.CoordinationUnitType = {
  kFrame: 0,
  kPage: 1,
  kProcess: 2,
  kSystem: 3,
};

// Interface: DocumentCoordinationUnit
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
      performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec.$,
      null,
      []);
  }

  setLifecycleState(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec.$,
      null,
      [state]);
  }

  setHasNonEmptyBeforeUnload(has_nonempty_beforeunload) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec.$,
      null,
      [has_nonempty_beforeunload]);
  }

  setHadFormInteraction() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec.$,
      null,
      []);
  }

  setHadUserEdits() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec.$,
      null,
      []);
  }

  onStartedUsingWebRTC() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec.$,
      null,
      []);
  }

  onStoppedUsingWebRTC() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec.$,
      null,
      []);
  }

  setIsAdFrame(is_ad_frame) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec.$,
      null,
      [is_ad_frame]);
  }

  onNonPersistentNotificationCreated() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec.$,
      null,
      []);
  }

  onFirstContentfulPaint(time_since_navigation_start) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec.$,
      null,
      [time_since_navigation_start]);
  }

  onWebMemoryMeasurementRequested(mode) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec.$,
      performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ResponseParamsSpec.$,
      [mode]);
  }

  onFreezingOriginTrialOptOut() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec.$,
      null,
      []);
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
}};

// ParamsSpec for SetNetworkAlmostIdle
performance_manager.mojom.DocumentCoordinationUnit_SetNetworkAlmostIdle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.DocumentCoordinationUnit.SetNetworkAlmostIdle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetLifecycleState
performance_manager.mojom.DocumentCoordinationUnit_SetLifecycleState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.DocumentCoordinationUnit.SetLifecycleState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetHasNonEmptyBeforeUnload
performance_manager.mojom.DocumentCoordinationUnit_SetHasNonEmptyBeforeUnload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.DocumentCoordinationUnit.SetHasNonEmptyBeforeUnload_Params',
      packedSize: 16,
      fields: [
        { name: 'has_nonempty_beforeunload', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetHadFormInteraction
performance_manager.mojom.DocumentCoordinationUnit_SetHadFormInteraction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.DocumentCoordinationUnit.SetHadFormInteraction_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetHadUserEdits
performance_manager.mojom.DocumentCoordinationUnit_SetHadUserEdits_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.DocumentCoordinationUnit.SetHadUserEdits_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnStartedUsingWebRTC
performance_manager.mojom.DocumentCoordinationUnit_OnStartedUsingWebRTC_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.DocumentCoordinationUnit.OnStartedUsingWebRTC_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnStoppedUsingWebRTC
performance_manager.mojom.DocumentCoordinationUnit_OnStoppedUsingWebRTC_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.DocumentCoordinationUnit.OnStoppedUsingWebRTC_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetIsAdFrame
performance_manager.mojom.DocumentCoordinationUnit_SetIsAdFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.DocumentCoordinationUnit.SetIsAdFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'is_ad_frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnNonPersistentNotificationCreated
performance_manager.mojom.DocumentCoordinationUnit_OnNonPersistentNotificationCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.DocumentCoordinationUnit.OnNonPersistentNotificationCreated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnFirstContentfulPaint
performance_manager.mojom.DocumentCoordinationUnit_OnFirstContentfulPaint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.DocumentCoordinationUnit.OnFirstContentfulPaint_Params',
      packedSize: 16,
      fields: [
        { name: 'time_since_navigation_start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnWebMemoryMeasurementRequested
performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.DocumentCoordinationUnit.OnWebMemoryMeasurementRequested_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

performance_manager.mojom.DocumentCoordinationUnit_OnWebMemoryMeasurementRequested_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.DocumentCoordinationUnit.OnWebMemoryMeasurementRequested_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'measurement', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnFreezingOriginTrialOptOut
performance_manager.mojom.DocumentCoordinationUnit_OnFreezingOriginTrialOptOut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.DocumentCoordinationUnit.OnFreezingOriginTrialOptOut_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
performance_manager.mojom.DocumentCoordinationUnitPtr = performance_manager.mojom.DocumentCoordinationUnitRemote;
performance_manager.mojom.DocumentCoordinationUnitRequest = performance_manager.mojom.DocumentCoordinationUnitPendingReceiver;


// Interface: ProcessCoordinationUnit
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
      performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec.$,
      null,
      [main_thread_task_load_is_low]);
  }

  onV8ContextCreated(description, iframe_attribution_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec.$,
      null,
      [description, iframe_attribution_data]);
  }

  onV8ContextDetached(v8_context_token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec.$,
      null,
      [v8_context_token]);
  }

  onV8ContextDestroyed(v8_context_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec.$,
      null,
      [v8_context_token]);
  }

  onRemoteIframeAttached(parent_frame_token, remote_frame_token, iframe_attribution_data) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec.$,
      null,
      [parent_frame_token, remote_frame_token, iframe_attribution_data]);
  }

  onRemoteIframeDetached(parent_frame_token, remote_frame_token) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec.$,
      null,
      [parent_frame_token, remote_frame_token]);
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
}};

// ParamsSpec for SetMainThreadTaskLoadIsLow
performance_manager.mojom.ProcessCoordinationUnit_SetMainThreadTaskLoadIsLow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.ProcessCoordinationUnit.SetMainThreadTaskLoadIsLow_Params',
      packedSize: 16,
      fields: [
        { name: 'main_thread_task_load_is_low', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnV8ContextCreated
performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.ProcessCoordinationUnit.OnV8ContextCreated_Params',
      packedSize: 24,
      fields: [
        { name: 'description', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'iframe_attribution_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnV8ContextDetached
performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDetached_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.ProcessCoordinationUnit.OnV8ContextDetached_Params',
      packedSize: 16,
      fields: [
        { name: 'v8_context_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnV8ContextDestroyed
performance_manager.mojom.ProcessCoordinationUnit_OnV8ContextDestroyed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.ProcessCoordinationUnit.OnV8ContextDestroyed_Params',
      packedSize: 16,
      fields: [
        { name: 'v8_context_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnRemoteIframeAttached
performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeAttached_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.ProcessCoordinationUnit.OnRemoteIframeAttached_Params',
      packedSize: 32,
      fields: [
        { name: 'parent_frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'remote_frame_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'iframe_attribution_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnRemoteIframeDetached
performance_manager.mojom.ProcessCoordinationUnit_OnRemoteIframeDetached_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.ProcessCoordinationUnit.OnRemoteIframeDetached_Params',
      packedSize: 24,
      fields: [
        { name: 'parent_frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'remote_frame_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
performance_manager.mojom.ProcessCoordinationUnitPtr = performance_manager.mojom.ProcessCoordinationUnitRemote;
performance_manager.mojom.ProcessCoordinationUnitRequest = performance_manager.mojom.ProcessCoordinationUnitPendingReceiver;


// Interface: ChildProcessCoordinationUnit
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
      performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec.$,
      performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ResponseParamsSpec.$,
      []);
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
}};

// ParamsSpec for InitializeChildProcessCoordination
performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.ChildProcessCoordinationUnit.InitializeChildProcessCoordination_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

performance_manager.mojom.ChildProcessCoordinationUnit_InitializeChildProcessCoordination_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'performance_manager.mojom.ChildProcessCoordinationUnit.InitializeChildProcessCoordination_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'global_region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'process_region', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
performance_manager.mojom.ChildProcessCoordinationUnitPtr = performance_manager.mojom.ChildProcessCoordinationUnitRemote;
performance_manager.mojom.ChildProcessCoordinationUnitRequest = performance_manager.mojom.ChildProcessCoordinationUnitPendingReceiver;

