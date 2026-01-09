// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/navigation_predictor.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AnchorElementUserInteractionEventForMLModelType
blink.mojom.AnchorElementUserInteractionEventForMLModelType = {
};

// Struct: AnchorElementMetrics
blink.mojom.AnchorElementMetrics = class {
  constructor(values = {}) {
    this.for = values.for !== undefined ? values.for : null;
    this.loads = values.loads !== undefined ? values.loads : null;
    this.careful = values.careful !== undefined ? values.careful : null;
    this.anchor_id = values.anchor_id !== undefined ? values.anchor_id : 0;
    this.ratio_area = values.ratio_area !== undefined ? values.ratio_area : 0;
    this.ratio_distance_top_to_visible_top = values.ratio_distance_top_to_visible_top !== undefined ? values.ratio_distance_top_to_visible_top : 0;
    this.is_same_host = values.is_same_host !== undefined ? values.is_same_host : 0;
    this.font_weight = values.font_weight !== undefined ? values.font_weight : 0;
    this.viewport_size = values.viewport_size !== undefined ? values.viewport_size : 0;
  }
};

// Struct: AnchorElementClick
blink.mojom.AnchorElementClick = class {
  constructor(values = {}) {
    this.navigation_start_to_click = values.navigation_start_to_click !== undefined ? values.navigation_start_to_click : 0;
  }
};

// Struct: AnchorElementPointerDataOnHoverTimerFired
blink.mojom.AnchorElementPointerDataOnHoverTimerFired = class {
  constructor(values = {}) {
    this.pointer_data = values.pointer_data !== undefined ? values.pointer_data : 0;
  }
};

// Struct: AnchorElementEnteredViewport
blink.mojom.AnchorElementEnteredViewport = class {
  constructor(values = {}) {
    this.navigation_start_to_entered_viewport = values.navigation_start_to_entered_viewport !== undefined ? values.navigation_start_to_entered_viewport : 0;
  }
};

// Struct: AnchorElementLeftViewport
blink.mojom.AnchorElementLeftViewport = class {
  constructor(values = {}) {
    this.time_in_viewport = values.time_in_viewport !== undefined ? values.time_in_viewport : 0;
  }
};

// Struct: AnchorElementPointerOver
blink.mojom.AnchorElementPointerOver = class {
  constructor(values = {}) {
    this.navigation_start_to_pointer_over = values.navigation_start_to_pointer_over !== undefined ? values.navigation_start_to_pointer_over : 0;
  }
};

// Struct: AnchorElementPointerOut
blink.mojom.AnchorElementPointerOut = class {
  constructor(values = {}) {
    this.hover_dwell_time = values.hover_dwell_time !== undefined ? values.hover_dwell_time : 0;
  }
};

// Struct: AnchorElementPointerEventForMLModel
blink.mojom.AnchorElementPointerEventForMLModel = class {
  constructor(values = {}) {
    this.user_interaction_event_type = values.user_interaction_event_type !== undefined ? values.user_interaction_event_type : 0;
  }
};

// Struct: AnchorElementPointerDown
blink.mojom.AnchorElementPointerDown = class {
  constructor(values = {}) {
    this.navigation_start_to_pointer_down = values.navigation_start_to_pointer_down !== undefined ? values.navigation_start_to_pointer_down : 0;
  }
};

// Struct: AnchorElementPositionUpdate
blink.mojom.AnchorElementPositionUpdate = class {
  constructor(values = {}) {
    this.distance_from_pointer_down_ratio = values.distance_from_pointer_down_ratio !== undefined ? values.distance_from_pointer_down_ratio : 0;
  }
};

// Interface: AnchorElementMetricsHost
blink.mojom.AnchorElementMetricsHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AnchorElementMetricsHost';
  }

  reportAnchorElementClick(clicked) {
    // Method: ReportAnchorElementClick
    // Call: ReportAnchorElementClick(clicked)
  }

  reportNewAnchorElements(metrics, removed_elements) {
    // Method: ReportNewAnchorElements
    // Call: ReportNewAnchorElements(metrics, removed_elements)
  }

  reportAnchorElementsEnteredViewport(elements) {
    // Method: ReportAnchorElementsEnteredViewport
    // Call: ReportAnchorElementsEnteredViewport(elements)
  }

  reportAnchorElementsLeftViewport(elements) {
    // Method: ReportAnchorElementsLeftViewport
    // Call: ReportAnchorElementsLeftViewport(elements)
  }

  reportAnchorElementsPositionUpdate(elements) {
    // Method: ReportAnchorElementsPositionUpdate
    // Call: ReportAnchorElementsPositionUpdate(elements)
  }

  reportAnchorElementPointerOver(pointer_over_event) {
    // Method: ReportAnchorElementPointerOver
    // Call: ReportAnchorElementPointerOver(pointer_over_event)
  }

  reportAnchorElementPointerOut(hover_event) {
    // Method: ReportAnchorElementPointerOut
    // Call: ReportAnchorElementPointerOut(hover_event)
  }

  reportAnchorElementPointerDown(pointer_down_event) {
    // Method: ReportAnchorElementPointerDown
    // Call: ReportAnchorElementPointerDown(pointer_down_event)
  }

  reportAnchorElementPointerDataOnHoverTimerFired(pointer_data) {
    // Method: ReportAnchorElementPointerDataOnHoverTimerFired
    // Call: ReportAnchorElementPointerDataOnHoverTimerFired(pointer_data)
  }

  processPointerEventUsingMLModel(pointer_event) {
    // Method: ProcessPointerEventUsingMLModel
    // Call: ProcessPointerEventUsingMLModel(pointer_event)
  }

  shouldSkipUpdateDelays() {
    // Method: ShouldSkipUpdateDelays
    return new Promise((resolve) => {
      // Call: ShouldSkipUpdateDelays()
      resolve({});
    });
  }

};

blink.mojom.AnchorElementMetricsHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
