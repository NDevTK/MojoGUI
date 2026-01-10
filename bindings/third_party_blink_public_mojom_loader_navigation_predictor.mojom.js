// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/navigation_predictor.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};
var gfx = gfx || {};

blink.mojom.AnchorElementUserInteractionEventForMLModelTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.AnchorElementMetricsSpec = { $: {} };
blink.mojom.AnchorElementClickSpec = { $: {} };
blink.mojom.AnchorElementPointerDataOnHoverTimerFiredSpec = { $: {} };
blink.mojom.AnchorElementEnteredViewportSpec = { $: {} };
blink.mojom.AnchorElementLeftViewportSpec = { $: {} };
blink.mojom.AnchorElementPointerOverSpec = { $: {} };
blink.mojom.AnchorElementPointerOutSpec = { $: {} };
blink.mojom.AnchorElementPointerEventForMLModelSpec = { $: {} };
blink.mojom.AnchorElementPointerDownSpec = { $: {} };
blink.mojom.AnchorElementPositionUpdateSpec = { $: {} };
blink.mojom.AnchorElementMetricsHost = {};
blink.mojom.AnchorElementMetricsHost.$interfaceName = 'blink.mojom.AnchorElementMetricsHost';
blink.mojom.AnchorElementMetricsHost_ReportAnchorElementClick_ParamsSpec = { $: {} };
blink.mojom.AnchorElementMetricsHost_ReportNewAnchorElements_ParamsSpec = { $: {} };
blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsEnteredViewport_ParamsSpec = { $: {} };
blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsLeftViewport_ParamsSpec = { $: {} };
blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsPositionUpdate_ParamsSpec = { $: {} };
blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOver_ParamsSpec = { $: {} };
blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOut_ParamsSpec = { $: {} };
blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDown_ParamsSpec = { $: {} };
blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDataOnHoverTimerFired_ParamsSpec = { $: {} };
blink.mojom.AnchorElementMetricsHost_ProcessPointerEventUsingMLModel_ParamsSpec = { $: {} };
blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ParamsSpec = { $: {} };
blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ResponseParamsSpec = { $: {} };

// Enum: AnchorElementUserInteractionEventForMLModelType
blink.mojom.AnchorElementUserInteractionEventForMLModelType = {
  kPointerOver: 0,
  kPointerOut: 1,
  kEnteredViewport: 2,
  kLeftViewport: 3,
  kUnknown: 4,
};

// Struct: AnchorElementMetrics
mojo.internal.Struct(
    blink.mojom.AnchorElementMetricsSpec, 'blink.mojom.AnchorElementMetrics', [
      mojo.internal.StructField('target_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('viewport_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('ratio_area', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('ratio_distance_top_to_visible_top', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('ratio_distance_root_top', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('font_size_px', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('font_weight', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_in_iframe', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('contains_image', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_same_host', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_url_incremented_by_one', 40, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_text_sibling', 40, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: AnchorElementClick
mojo.internal.Struct(
    blink.mojom.AnchorElementClickSpec, 'blink.mojom.AnchorElementClick', [
      mojo.internal.StructField('target_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_start_to_click', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AnchorElementPointerDataOnHoverTimerFired
mojo.internal.Struct(
    blink.mojom.AnchorElementPointerDataOnHoverTimerFiredSpec, 'blink.mojom.AnchorElementPointerDataOnHoverTimerFired', [
      mojo.internal.StructField('pointer_data', 0, 0, blink.mojom.AnchorElementPointerDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementEnteredViewport
mojo.internal.Struct(
    blink.mojom.AnchorElementEnteredViewportSpec, 'blink.mojom.AnchorElementEnteredViewport', [
      mojo.internal.StructField('navigation_start_to_entered_viewport', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementLeftViewport
mojo.internal.Struct(
    blink.mojom.AnchorElementLeftViewportSpec, 'blink.mojom.AnchorElementLeftViewport', [
      mojo.internal.StructField('time_in_viewport', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementPointerOver
mojo.internal.Struct(
    blink.mojom.AnchorElementPointerOverSpec, 'blink.mojom.AnchorElementPointerOver', [
      mojo.internal.StructField('navigation_start_to_pointer_over', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementPointerOut
mojo.internal.Struct(
    blink.mojom.AnchorElementPointerOutSpec, 'blink.mojom.AnchorElementPointerOut', [
      mojo.internal.StructField('hover_dwell_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementPointerEventForMLModel
mojo.internal.Struct(
    blink.mojom.AnchorElementPointerEventForMLModelSpec, 'blink.mojom.AnchorElementPointerEventForMLModel', [
      mojo.internal.StructField('user_interaction_event_type', 0, 0, blink.mojom.AnchorElementUserInteractionEventForMLModelTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_mouse', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementPointerDown
mojo.internal.Struct(
    blink.mojom.AnchorElementPointerDownSpec, 'blink.mojom.AnchorElementPointerDown', [
      mojo.internal.StructField('navigation_start_to_pointer_down', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementPositionUpdate
mojo.internal.Struct(
    blink.mojom.AnchorElementPositionUpdateSpec, 'blink.mojom.AnchorElementPositionUpdate', [
      mojo.internal.StructField('anchor_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('vertical_position_ratio', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('distance_from_pointer_down_ratio_$value', 8, 0, mojo.internal.Float, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'distance_from_pointer_down_ratio_$flag', originalFieldName: 'distance_from_pointer_down_ratio' }),
      mojo.internal.StructField('distance_from_pointer_down_ratio_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'distance_from_pointer_down_ratio_$value', originalFieldName: 'distance_from_pointer_down_ratio' }),
    ],
    [[0, 24]]);

// Interface: AnchorElementMetricsHost
mojo.internal.Struct(
    blink.mojom.AnchorElementMetricsHost_ReportAnchorElementClick_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementClick_Params', [
      mojo.internal.StructField('clicked', 0, 0, blink.mojom.AnchorElementClickSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementMetricsHost_ReportNewAnchorElements_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportNewAnchorElements_Params', [
      mojo.internal.StructField('metrics', 0, 0, mojo.internal.Array(blink.mojom.AnchorElementMetricsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('removed_elements', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsEnteredViewport_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsEnteredViewport_Params', [
      mojo.internal.StructField('elements', 0, 0, mojo.internal.Array(blink.mojom.AnchorElementEnteredViewportSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsLeftViewport_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsLeftViewport_Params', [
      mojo.internal.StructField('elements', 0, 0, mojo.internal.Array(blink.mojom.AnchorElementLeftViewportSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsPositionUpdate_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsPositionUpdate_Params', [
      mojo.internal.StructField('elements', 0, 0, mojo.internal.Array(blink.mojom.AnchorElementPositionUpdateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOver_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOver_Params', [
      mojo.internal.StructField('pointer_over_event', 0, 0, blink.mojom.AnchorElementPointerOverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOut_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOut_Params', [
      mojo.internal.StructField('hover_event', 0, 0, blink.mojom.AnchorElementPointerOutSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDown_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDown_Params', [
      mojo.internal.StructField('pointer_down_event', 0, 0, blink.mojom.AnchorElementPointerDownSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDataOnHoverTimerFired_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDataOnHoverTimerFired_Params', [
      mojo.internal.StructField('pointer_data', 0, 0, blink.mojom.AnchorElementPointerDataOnHoverTimerFiredSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementMetricsHost_ProcessPointerEventUsingMLModel_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ProcessPointerEventUsingMLModel_Params', [
      mojo.internal.StructField('pointer_event', 0, 0, blink.mojom.AnchorElementPointerEventForMLModelSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ResponseParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ResponseParams', [
      mojo.internal.StructField('should_skip_for_testing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.AnchorElementMetricsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AnchorElementMetricsHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AnchorElementMetricsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AnchorElementMetricsHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.AnchorElementMetricsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AnchorElementMetricsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  reportAnchorElementClick(clicked) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AnchorElementMetricsHost_ReportAnchorElementClick_ParamsSpec,
      null,
      [clicked],
      false);
  }

  reportNewAnchorElements(metrics, removed_elements) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AnchorElementMetricsHost_ReportNewAnchorElements_ParamsSpec,
      null,
      [metrics, removed_elements],
      false);
  }

  reportAnchorElementsEnteredViewport(elements) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsEnteredViewport_ParamsSpec,
      null,
      [elements],
      false);
  }

  reportAnchorElementsLeftViewport(elements) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsLeftViewport_ParamsSpec,
      null,
      [elements],
      false);
  }

  reportAnchorElementsPositionUpdate(elements) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsPositionUpdate_ParamsSpec,
      null,
      [elements],
      false);
  }

  reportAnchorElementPointerOver(pointer_over_event) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOver_ParamsSpec,
      null,
      [pointer_over_event],
      false);
  }

  reportAnchorElementPointerOut(hover_event) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOut_ParamsSpec,
      null,
      [hover_event],
      false);
  }

  reportAnchorElementPointerDown(pointer_down_event) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDown_ParamsSpec,
      null,
      [pointer_down_event],
      false);
  }

  reportAnchorElementPointerDataOnHoverTimerFired(pointer_data) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDataOnHoverTimerFired_ParamsSpec,
      null,
      [pointer_data],
      false);
  }

  processPointerEventUsingMLModel(pointer_event) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.AnchorElementMetricsHost_ProcessPointerEventUsingMLModel_ParamsSpec,
      null,
      [pointer_event],
      false);
  }

  shouldSkipUpdateDelays() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ParamsSpec,
      blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.AnchorElementMetricsHost.getRemote = function() {
  let remote = new blink.mojom.AnchorElementMetricsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AnchorElementMetricsHost',
    'context');
  return remote.$;
};

blink.mojom.AnchorElementMetricsHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.AnchorElementMetricsHost_ReportAnchorElementClick_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAnchorElementClick(params.clicked);
          break;
        }
        case 1: {
          const params = blink.mojom.AnchorElementMetricsHost_ReportNewAnchorElements_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportNewAnchorElements(params.metrics, params.removed_elements);
          break;
        }
        case 2: {
          const params = blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsEnteredViewport_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAnchorElementsEnteredViewport(params.elements);
          break;
        }
        case 3: {
          const params = blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsLeftViewport_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAnchorElementsLeftViewport(params.elements);
          break;
        }
        case 4: {
          const params = blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsPositionUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAnchorElementsPositionUpdate(params.elements);
          break;
        }
        case 5: {
          const params = blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAnchorElementPointerOver(params.pointer_over_event);
          break;
        }
        case 6: {
          const params = blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOut_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAnchorElementPointerOut(params.hover_event);
          break;
        }
        case 7: {
          const params = blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDown_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAnchorElementPointerDown(params.pointer_down_event);
          break;
        }
        case 8: {
          const params = blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDataOnHoverTimerFired_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAnchorElementPointerDataOnHoverTimerFired(params.pointer_data);
          break;
        }
        case 9: {
          const params = blink.mojom.AnchorElementMetricsHost_ProcessPointerEventUsingMLModel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.processPointerEventUsingMLModel(params.pointer_event);
          break;
        }
        case 10: {
          const params = blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ParamsSpec.$.decode(message.payload);
          const result = this.impl.shouldSkipUpdateDelays();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

blink.mojom.AnchorElementMetricsHostReceiver = blink.mojom.AnchorElementMetricsHostReceiver;

blink.mojom.AnchorElementMetricsHostPtr = blink.mojom.AnchorElementMetricsHostRemote;
blink.mojom.AnchorElementMetricsHostRequest = blink.mojom.AnchorElementMetricsHostPendingReceiver;

