// Auto-generated MojoJS binding
// Source: chromium_src/components/input/render_input_router.mojom
// Module: input.mojom

'use strict';

// Module namespace
var input = input || {};
input.mojom = input.mojom || {};
var mojo_base = mojo_base || {};
var viz = viz || {};
var blink = blink || {};
var ui = ui || {};

input.mojom.RenderInputRouterConfigSpec = { $: {} };
input.mojom.TouchTransferStateSpec = { $: {} };
input.mojom.RenderInputRouterDelegate = {};
input.mojom.RenderInputRouterDelegate.$interfaceName = 'input.mojom.RenderInputRouterDelegate';
input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegateClient = {};
input.mojom.RenderInputRouterDelegateClient.$interfaceName = 'input.mojom.RenderInputRouterDelegateClient';
input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec = { $: {} };
input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec = { $: {} };

// Struct: RenderInputRouterConfig
mojo.internal.Struct(
    input.mojom.RenderInputRouterConfigSpec, 'input.mojom.RenderInputRouterConfig', [
      mojo.internal.StructField('rir_client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.RenderInputRouterClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('grouping_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('force_enable_zoom', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TouchTransferState
mojo.internal.Struct(
    input.mojom.TouchTransferStateSpec, 'input.mojom.TouchTransferState', [
      mojo.internal.StructField('down_time_ms', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('root_widget_frame_sink_id', 8, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('down_event', 16, 0, ui.mojom.CachedMotionEventAndroidSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('web_contents_y_offset_pix', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('dip_scale', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('browser_would_have_handled', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: RenderInputRouterDelegate
mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_Params', [
      mojo.internal.StructField('state', 0, 0, input.mojom.TouchTransferStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('force_enable_zoom', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_hidden', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_ResetGestureDetection_Params', [
      mojo.internal.StructField('root_widget_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [state],
      false);
  }

  forceEnableZoomStateChanged(force_enable_zoom, frame_sink_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec,
      null,
      [force_enable_zoom, frame_sink_id],
      false);
  }

  stopFlingingOnViz(frame_sink_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec,
      null,
      [frame_sink_id],
      false);
  }

  restartInputEventAckTimeoutIfNecessary(frame_sink_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec,
      null,
      [frame_sink_id],
      false);
  }

  notifyVisibilityChanged(frame_sink_id, is_hidden) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec,
      null,
      [frame_sink_id, is_hidden],
      false);
  }

  resetGestureDetection(root_widget_frame_sink_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec,
      null,
      [root_widget_frame_sink_id],
      false);
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

input.mojom.RenderInputRouterDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.stateOnTouchTransfer');
          const result = this.impl.stateOnTouchTransfer(params.state);
          break;
        }
        case 1: {
          const params = input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.forceEnableZoomStateChanged');
          const result = this.impl.forceEnableZoomStateChanged(params.force_enable_zoom, params.frame_sink_id);
          break;
        }
        case 2: {
          const params = input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.stopFlingingOnViz');
          const result = this.impl.stopFlingingOnViz(params.frame_sink_id);
          break;
        }
        case 3: {
          const params = input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.restartInputEventAckTimeoutIfNecessary');
          const result = this.impl.restartInputEventAckTimeoutIfNecessary(params.frame_sink_id);
          break;
        }
        case 4: {
          const params = input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.notifyVisibilityChanged');
          const result = this.impl.notifyVisibilityChanged(params.frame_sink_id, params.is_hidden);
          break;
        }
        case 5: {
          const params = input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.resetGestureDetection');
          const result = this.impl.resetGestureDetection(params.root_widget_frame_sink_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

input.mojom.RenderInputRouterDelegateReceiver = input.mojom.RenderInputRouterDelegateReceiver;

input.mojom.RenderInputRouterDelegatePtr = input.mojom.RenderInputRouterDelegateRemote;
input.mojom.RenderInputRouterDelegateRequest = input.mojom.RenderInputRouterDelegatePendingReceiver;


// Interface: RenderInputRouterDelegateClient
mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dispatched_to_renderer', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_Params', [
      mojo.internal.StructField('ack_source', 0, 0, blink.mojom.InputEventResultSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ack_result', 8, 0, blink.mojom.InputEventResultStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event', 16, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_Params', [
      mojo.internal.StructField('overscroll', 0, 0, blink.mojom.DidOverscrollParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_Params', [
      mojo.internal.StructField('ack_timeout_ts', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_responsive', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [event, dispatched_to_renderer],
      false);
  }

  notifyObserversOfInputEventAcks(ack_source, ack_result, event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec,
      null,
      [ack_source, ack_result, event],
      false);
  }

  onInvalidInputEventSource() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec,
      null,
      [],
      false);
  }

  stateOnOverscrollTransfer(overscroll) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec,
      null,
      [overscroll],
      false);
  }

  rendererInputResponsivenessChanged(is_responsive, ack_timeout_ts) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec,
      null,
      [is_responsive, ack_timeout_ts],
      false);
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

input.mojom.RenderInputRouterDelegateClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.notifyObserversOfInputEvent');
          const result = this.impl.notifyObserversOfInputEvent(params.event, params.dispatched_to_renderer);
          break;
        }
        case 1: {
          const params = input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.notifyObserversOfInputEventAcks');
          const result = this.impl.notifyObserversOfInputEventAcks(params.ack_source, params.ack_result, params.event);
          break;
        }
        case 2: {
          const params = input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onInvalidInputEventSource');
          const result = this.impl.onInvalidInputEventSource();
          break;
        }
        case 3: {
          const params = input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.stateOnOverscrollTransfer');
          const result = this.impl.stateOnOverscrollTransfer(params.overscroll);
          break;
        }
        case 4: {
          const params = input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.rendererInputResponsivenessChanged');
          const result = this.impl.rendererInputResponsivenessChanged(params.is_responsive, params.ack_timeout_ts);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

input.mojom.RenderInputRouterDelegateClientReceiver = input.mojom.RenderInputRouterDelegateClientReceiver;

input.mojom.RenderInputRouterDelegateClientPtr = input.mojom.RenderInputRouterDelegateClientRemote;
input.mojom.RenderInputRouterDelegateClientRequest = input.mojom.RenderInputRouterDelegateClientPendingReceiver;

