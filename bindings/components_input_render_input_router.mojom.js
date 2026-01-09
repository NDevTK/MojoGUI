// Auto-generated MojoJS binding
// Source: chromium_src/components/input/render_input_router.mojom
// Module: input.mojom

'use strict';

// Module namespace
var input = input || {};
input.mojom = input.mojom || {};


// Interface: RenderInputRouterDelegate
input.mojom.RenderInputRouterDelegate = {};

input.mojom.RenderInputRouterDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

input.mojom.RenderInputRouterDelegateRemote = class {
  static get $interfaceName() {
    return 'input.mojom.RenderInputRouterDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      input.mojom.RenderInputRouterDelegatePendingReceiver,
      handle);
    this.$ = new input.mojom.RenderInputRouterDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

input.mojom.RenderInputRouterDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  stateOnTouchTransfer(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec,
      null,
      null,
      [state],
      undefined,
      undefined
    );
  }

  forceEnableZoomStateChanged(force_enable_zoom, frame_sink_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec,
      null,
      null,
      [force_enable_zoom, frame_sink_id],
      undefined,
      undefined
    );
  }

  stopFlingingOnViz(frame_sink_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec,
      null,
      null,
      [frame_sink_id],
      undefined,
      undefined
    );
  }

  restartInputEventAckTimeoutIfNecessary(frame_sink_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec,
      null,
      null,
      [frame_sink_id],
      undefined,
      undefined
    );
  }

  notifyVisibilityChanged(frame_sink_id, is_hidden) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec,
      null,
      null,
      [frame_sink_id, is_hidden],
      undefined,
      undefined
    );
  }

  resetGestureDetection(root_widget_frame_sink_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec,
      null,
      null,
      [root_widget_frame_sink_id],
      undefined,
      undefined
    );
  }

};

input.mojom.RenderInputRouterDelegate.getRemote = function() {
  let remote = new input.mojom.RenderInputRouterDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'input.mojom.RenderInputRouterDelegate',
    'context');
  return remote.$;
};

// ParamsSpec for StateOnTouchTransfer
input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'input.mojom.RenderInputRouterDelegate.StateOnTouchTransfer_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ForceEnableZoomStateChanged
input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'input.mojom.RenderInputRouterDelegate.ForceEnableZoomStateChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'force_enable_zoom', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StopFlingingOnViz
input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec = {
  $: {
    structSpec: {
      name: 'input.mojom.RenderInputRouterDelegate.StopFlingingOnViz_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RestartInputEventAckTimeoutIfNecessary
input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'input.mojom.RenderInputRouterDelegate.RestartInputEventAckTimeoutIfNecessary_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyVisibilityChanged
input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'input.mojom.RenderInputRouterDelegate.NotifyVisibilityChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_hidden', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ResetGestureDetection
input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'input.mojom.RenderInputRouterDelegate.ResetGestureDetection_Params',
      packedSize: 16,
      fields: [
        { name: 'root_widget_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
input.mojom.RenderInputRouterDelegatePtr = input.mojom.RenderInputRouterDelegateRemote;
input.mojom.RenderInputRouterDelegateRequest = input.mojom.RenderInputRouterDelegatePendingReceiver;


// Interface: RenderInputRouterDelegateClient
input.mojom.RenderInputRouterDelegateClient = {};

input.mojom.RenderInputRouterDelegateClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

input.mojom.RenderInputRouterDelegateClientRemote = class {
  static get $interfaceName() {
    return 'input.mojom.RenderInputRouterDelegateClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      input.mojom.RenderInputRouterDelegateClientPendingReceiver,
      handle);
    this.$ = new input.mojom.RenderInputRouterDelegateClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

input.mojom.RenderInputRouterDelegateClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyObserversOfInputEvent(event, dispatched_to_renderer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec,
      null,
      null,
      [event, dispatched_to_renderer],
      undefined,
      undefined
    );
  }

  notifyObserversOfInputEventAcks(ack_source, ack_result, event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec,
      null,
      null,
      [ack_source, ack_result, event],
      undefined,
      undefined
    );
  }

  onInvalidInputEventSource() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  stateOnOverscrollTransfer(overscroll) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec,
      null,
      null,
      [overscroll],
      undefined,
      undefined
    );
  }

  rendererInputResponsivenessChanged(is_responsive, ack_timeout_ts) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec,
      null,
      null,
      [is_responsive, ack_timeout_ts],
      undefined,
      undefined
    );
  }

};

input.mojom.RenderInputRouterDelegateClient.getRemote = function() {
  let remote = new input.mojom.RenderInputRouterDelegateClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'input.mojom.RenderInputRouterDelegateClient',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyObserversOfInputEvent
input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'input.mojom.RenderInputRouterDelegateClient.NotifyObserversOfInputEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'dispatched_to_renderer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for NotifyObserversOfInputEventAcks
input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'input.mojom.RenderInputRouterDelegateClient.NotifyObserversOfInputEventAcks_Params',
      packedSize: 32,
      fields: [
        { name: 'ack_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ack_result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'event', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnInvalidInputEventSource
input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'input.mojom.RenderInputRouterDelegateClient.OnInvalidInputEventSource_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StateOnOverscrollTransfer
input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'input.mojom.RenderInputRouterDelegateClient.StateOnOverscrollTransfer_Params',
      packedSize: 16,
      fields: [
        { name: 'overscroll', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RendererInputResponsivenessChanged
input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'input.mojom.RenderInputRouterDelegateClient.RendererInputResponsivenessChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'is_responsive', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'ack_timeout_ts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
input.mojom.RenderInputRouterDelegateClientPtr = input.mojom.RenderInputRouterDelegateClientRemote;
input.mojom.RenderInputRouterDelegateClientRequest = input.mojom.RenderInputRouterDelegateClientPendingReceiver;

