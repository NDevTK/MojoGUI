// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/navigation_predictor.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};
var ui = ui || {};
var gfx = gfx || {};
var blink = blink || {};


// Enum: AnchorElementUserInteractionEventForMLModelType
blink.mojom.mojom.AnchorElementUserInteractionEventForMLModelType = {
  kPointerOver: 0,
  kPointerOut: 1,
  kEnteredViewport: 2,
  kLeftViewport: 3,
  kUnknown: 4,
};
blink.mojom.mojom.AnchorElementUserInteractionEventForMLModelTypeSpec = { $: mojo.internal.Enum() };

// Struct: AnchorElementMetrics
blink.mojom.mojom.AnchorElementMetricsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementMetrics',
      packedSize: 56,
      fields: [
        { name: 'anchor_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'ratio_area', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'ratio_distance_top_to_visible_top', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'ratio_distance_root_top', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'is_in_iframe', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'contains_image', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_same_host', packedOffset: 40, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_url_incremented_by_one', packedOffset: 40, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_text_sibling', packedOffset: 40, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'font_size_px', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'font_weight', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'target_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'viewport_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: AnchorElementClick
blink.mojom.mojom.AnchorElementClickSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementClick',
      packedSize: 32,
      fields: [
        { name: 'anchor_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'target_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'navigation_start_to_click', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AnchorElementPointerDataOnHoverTimerFired
blink.mojom.mojom.AnchorElementPointerDataOnHoverTimerFiredSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementPointerDataOnHoverTimerFired',
      packedSize: 24,
      fields: [
        { name: 'anchor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pointer_data', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AnchorElementPointerDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AnchorElementEnteredViewport
blink.mojom.mojom.AnchorElementEnteredViewportSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementEnteredViewport',
      packedSize: 24,
      fields: [
        { name: 'anchor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'navigation_start_to_entered_viewport', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AnchorElementLeftViewport
blink.mojom.mojom.AnchorElementLeftViewportSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementLeftViewport',
      packedSize: 24,
      fields: [
        { name: 'anchor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'time_in_viewport', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AnchorElementPointerOver
blink.mojom.mojom.AnchorElementPointerOverSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementPointerOver',
      packedSize: 24,
      fields: [
        { name: 'anchor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'navigation_start_to_pointer_over', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AnchorElementPointerOut
blink.mojom.mojom.AnchorElementPointerOutSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementPointerOut',
      packedSize: 24,
      fields: [
        { name: 'anchor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'hover_dwell_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AnchorElementPointerEventForMLModel
blink.mojom.mojom.AnchorElementPointerEventForMLModelSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementPointerEventForMLModel',
      packedSize: 24,
      fields: [
        { name: 'anchor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'is_mouse', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'user_interaction_event_type', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.AnchorElementUserInteractionEventForMLModelTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AnchorElementPointerDown
blink.mojom.mojom.AnchorElementPointerDownSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementPointerDown',
      packedSize: 24,
      fields: [
        { name: 'anchor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'navigation_start_to_pointer_down', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AnchorElementPositionUpdate
blink.mojom.mojom.AnchorElementPositionUpdateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementPositionUpdate',
      packedSize: 24,
      fields: [
        { name: 'anchor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'vertical_position_ratio', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'distance_from_pointer_down_ratio_$flag', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'distance_from_pointer_down_ratio_$value', originalFieldName: 'distance_from_pointer_down_ratio' } },
        { name: 'distance_from_pointer_down_ratio_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'distance_from_pointer_down_ratio_$flag', originalFieldName: 'distance_from_pointer_down_ratio' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: AnchorElementMetricsHost
blink.mojom.mojom.AnchorElementMetricsHost = {};

blink.mojom.mojom.AnchorElementMetricsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AnchorElementMetricsHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AnchorElementMetricsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AnchorElementMetricsHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AnchorElementMetricsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AnchorElementMetricsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  reportAnchorElementClick(clicked) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementClick_ParamsSpec,
      null,
      [clicked]);
  }

  reportNewAnchorElements(metrics, removed_elements) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AnchorElementMetricsHost_ReportNewAnchorElements_ParamsSpec,
      null,
      [metrics, removed_elements]);
  }

  reportAnchorElementsEnteredViewport(elements) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementsEnteredViewport_ParamsSpec,
      null,
      [elements]);
  }

  reportAnchorElementsLeftViewport(elements) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementsLeftViewport_ParamsSpec,
      null,
      [elements]);
  }

  reportAnchorElementsPositionUpdate(elements) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementsPositionUpdate_ParamsSpec,
      null,
      [elements]);
  }

  reportAnchorElementPointerOver(pointer_over_event) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOver_ParamsSpec,
      null,
      [pointer_over_event]);
  }

  reportAnchorElementPointerOut(hover_event) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOut_ParamsSpec,
      null,
      [hover_event]);
  }

  reportAnchorElementPointerDown(pointer_down_event) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDown_ParamsSpec,
      null,
      [pointer_down_event]);
  }

  reportAnchorElementPointerDataOnHoverTimerFired(pointer_data) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDataOnHoverTimerFired_ParamsSpec,
      null,
      [pointer_data]);
  }

  processPointerEventUsingMLModel(pointer_event) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.mojom.AnchorElementMetricsHost_ProcessPointerEventUsingMLModel_ParamsSpec,
      null,
      [pointer_event]);
  }

  shouldSkipUpdateDelays() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ParamsSpec,
      blink.mojom.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ResponseParamsSpec,
      []);
  }

};

blink.mojom.mojom.AnchorElementMetricsHost.getRemote = function() {
  let remote = new blink.mojom.mojom.AnchorElementMetricsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AnchorElementMetricsHost',
    'context');
  return remote.$;
};

// ParamsSpec for ReportAnchorElementClick
blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementMetricsHost.ReportAnchorElementClick_Params',
      packedSize: 16,
      fields: [
        { name: 'clicked', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AnchorElementClickSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportNewAnchorElements
blink.mojom.mojom.AnchorElementMetricsHost_ReportNewAnchorElements_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementMetricsHost.ReportNewAnchorElements_Params',
      packedSize: 24,
      fields: [
        { name: 'metrics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AnchorElementMetricsSpec, false), nullable: false, minVersion: 0 },
        { name: 'removed_elements', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ReportAnchorElementsEnteredViewport
blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementsEnteredViewport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementMetricsHost.ReportAnchorElementsEnteredViewport_Params',
      packedSize: 16,
      fields: [
        { name: 'elements', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AnchorElementEnteredViewportSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAnchorElementsLeftViewport
blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementsLeftViewport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementMetricsHost.ReportAnchorElementsLeftViewport_Params',
      packedSize: 16,
      fields: [
        { name: 'elements', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AnchorElementLeftViewportSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAnchorElementsPositionUpdate
blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementsPositionUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementMetricsHost.ReportAnchorElementsPositionUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'elements', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AnchorElementPositionUpdateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAnchorElementPointerOver
blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementMetricsHost.ReportAnchorElementPointerOver_Params',
      packedSize: 16,
      fields: [
        { name: 'pointer_over_event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AnchorElementPointerOverSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAnchorElementPointerOut
blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementMetricsHost.ReportAnchorElementPointerOut_Params',
      packedSize: 16,
      fields: [
        { name: 'hover_event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AnchorElementPointerOutSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAnchorElementPointerDown
blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementMetricsHost.ReportAnchorElementPointerDown_Params',
      packedSize: 16,
      fields: [
        { name: 'pointer_down_event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AnchorElementPointerDownSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAnchorElementPointerDataOnHoverTimerFired
blink.mojom.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDataOnHoverTimerFired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementMetricsHost.ReportAnchorElementPointerDataOnHoverTimerFired_Params',
      packedSize: 16,
      fields: [
        { name: 'pointer_data', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AnchorElementPointerDataOnHoverTimerFiredSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ProcessPointerEventUsingMLModel
blink.mojom.mojom.AnchorElementMetricsHost_ProcessPointerEventUsingMLModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementMetricsHost.ProcessPointerEventUsingMLModel_Params',
      packedSize: 16,
      fields: [
        { name: 'pointer_event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AnchorElementPointerEventForMLModelSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShouldSkipUpdateDelays
blink.mojom.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementMetricsHost.ShouldSkipUpdateDelays_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AnchorElementMetricsHost.ShouldSkipUpdateDelays_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_skip_for_testing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AnchorElementMetricsHostPtr = blink.mojom.mojom.AnchorElementMetricsHostRemote;
blink.mojom.mojom.AnchorElementMetricsHostRequest = blink.mojom.mojom.AnchorElementMetricsHostPendingReceiver;

