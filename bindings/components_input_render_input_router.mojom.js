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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: StateOnTouchTransfer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StateOnTouchTransfer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ForceEnableZoomStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceEnableZoomStateChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StopFlingingOnViz
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopFlingingOnViz (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RestartInputEventAckTimeoutIfNecessary
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestartInputEventAckTimeoutIfNecessary (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: NotifyVisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyVisibilityChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ResetGestureDetection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetGestureDetection (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
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
          const params = decoder.decodeStructInline(input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.stateOnTouchTransfer');
          const result = this.impl.stateOnTouchTransfer(params.state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.forceEnableZoomStateChanged');
          const result = this.impl.forceEnableZoomStateChanged(params.force_enable_zoom, params.frame_sink_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.stopFlingingOnViz');
          const result = this.impl.stopFlingingOnViz(params.frame_sink_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.restartInputEventAckTimeoutIfNecessary');
          const result = this.impl.restartInputEventAckTimeoutIfNecessary(params.frame_sink_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.notifyVisibilityChanged');
          const result = this.impl.notifyVisibilityChanged(params.frame_sink_id, params.is_hidden);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec.$);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: NotifyObserversOfInputEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyObserversOfInputEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NotifyObserversOfInputEventAcks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyObserversOfInputEventAcks (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnInvalidInputEventSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInvalidInputEventSource (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StateOnOverscrollTransfer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StateOnOverscrollTransfer (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RendererInputResponsivenessChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RendererInputResponsivenessChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
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
          const params = decoder.decodeStructInline(input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.notifyObserversOfInputEvent');
          const result = this.impl.notifyObserversOfInputEvent(params.event, params.dispatched_to_renderer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.notifyObserversOfInputEventAcks');
          const result = this.impl.notifyObserversOfInputEventAcks(params.ack_source, params.ack_result, params.event);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onInvalidInputEventSource');
          const result = this.impl.onInvalidInputEventSource();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.stateOnOverscrollTransfer');
          const result = this.impl.stateOnOverscrollTransfer(params.overscroll);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec.$);
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

