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
performance_manager.mojom.DocumentCoordinationUnitPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'performance_manager.mojom.DocumentCoordinationUnit';
  }

  setNetworkAlmostIdle() {
    // Method: SetNetworkAlmostIdle
    // Call: SetNetworkAlmostIdle()
  }

  setLifecycleState(state) {
    // Method: SetLifecycleState
    // Call: SetLifecycleState(state)
  }

  setHasNonEmptyBeforeUnload(has_nonempty_beforeunload) {
    // Method: SetHasNonEmptyBeforeUnload
    // Call: SetHasNonEmptyBeforeUnload(has_nonempty_beforeunload)
  }

  setHadFormInteraction() {
    // Method: SetHadFormInteraction
    // Call: SetHadFormInteraction()
  }

  setHadFormInteraction() {
    // Method: SetHadFormInteraction
    // Call: SetHadFormInteraction()
  }

  setHadUserEdits() {
    // Method: SetHadUserEdits
    // Call: SetHadUserEdits()
  }

  setHadUserEdits() {
    // Method: SetHadUserEdits
    // Call: SetHadUserEdits()
  }

  onStartedUsingWebRTC() {
    // Method: OnStartedUsingWebRTC
    // Call: OnStartedUsingWebRTC()
  }

  onStoppedUsingWebRTC() {
    // Method: OnStoppedUsingWebRTC
    // Call: OnStoppedUsingWebRTC()
  }

  setIsAdFrame(is_ad_frame) {
    // Method: SetIsAdFrame
    // Call: SetIsAdFrame(is_ad_frame)
  }

  onNonPersistentNotificationCreated() {
    // Method: OnNonPersistentNotificationCreated
    // Call: OnNonPersistentNotificationCreated()
  }

  onFirstContentfulPaint(time_since_navigation_start) {
    // Method: OnFirstContentfulPaint
    // Call: OnFirstContentfulPaint(time_since_navigation_start)
  }

  onWebMemoryMeasurementRequested(mode) {
    // Method: OnWebMemoryMeasurementRequested
    return new Promise((resolve) => {
      // Call: OnWebMemoryMeasurementRequested(mode)
      resolve({});
    });
  }

  onFreezingOriginTrialOptOut() {
    // Method: OnFreezingOriginTrialOptOut
    // Call: OnFreezingOriginTrialOptOut()
  }

};

performance_manager.mojom.DocumentCoordinationUnitRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ProcessCoordinationUnit
performance_manager.mojom.ProcessCoordinationUnitPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'performance_manager.mojom.ProcessCoordinationUnit';
  }

  setMainThreadTaskLoadIsLow(main_thread_task_load_is_low) {
    // Method: SetMainThreadTaskLoadIsLow
    // Call: SetMainThreadTaskLoadIsLow(main_thread_task_load_is_low)
  }

  executionContext() {
    // Method: ExecutionContext
    // Call: ExecutionContext()
  }

  contexts() {
    // Method: contexts
    // Call: contexts()
  }

  onV8ContextCreated(description, iframe_attribution_data) {
    // Method: OnV8ContextCreated
    // Call: OnV8ContextCreated(description, iframe_attribution_data)
  }

  executionContext(OnV8ContextCreated) {
    // Method: ExecutionContext
    // Call: ExecutionContext(OnV8ContextCreated)
  }

  v8Contexts(detached) {
    // Method: V8Contexts
    // Call: V8Contexts(detached)
  }

  onV8ContextDetached(v8_context_token) {
    // Method: OnV8ContextDetached
    // Call: OnV8ContextDetached(v8_context_token)
  }

  onV8ContextDestroyed(v8_context_token) {
    // Method: OnV8ContextDestroyed
    // Call: OnV8ContextDestroyed(v8_context_token)
  }

  onRemoteIframeAttached(parent_frame_token, remote_frame_token, iframe_attribution_data) {
    // Method: OnRemoteIframeAttached
    // Call: OnRemoteIframeAttached(parent_frame_token, remote_frame_token, iframe_attribution_data)
  }

  onRemoteIframeDetached(parent_frame_token, remote_frame_token) {
    // Method: OnRemoteIframeDetached
    // Call: OnRemoteIframeDetached(parent_frame_token, remote_frame_token)
  }

};

performance_manager.mojom.ProcessCoordinationUnitRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ChildProcessCoordinationUnit
performance_manager.mojom.ChildProcessCoordinationUnitPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'performance_manager.mojom.ChildProcessCoordinationUnit';
  }

  initializeChildProcessCoordination() {
    // Method: InitializeChildProcessCoordination
    return new Promise((resolve) => {
      // Call: InitializeChildProcessCoordination()
      resolve({});
    });
  }

};

performance_manager.mojom.ChildProcessCoordinationUnitRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
