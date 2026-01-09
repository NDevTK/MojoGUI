// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/layer_context.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: Type
viz.mojom.Type = {
};

// Struct: TransferableUIResourceRequest
viz.mojom.TransferableUIResourceRequest = class {
  constructor(values = {}) {
    this.kCreate = values.kCreate !== undefined ? values.kCreate : null;
  }
};

// Struct: LayerTreeUpdate
viz.mojom.LayerTreeUpdate = class {
  constructor(values = {}) {
    this.trace_id = values.trace_id !== undefined ? values.trace_id : 0;
    this.selection = values.selection !== undefined ? values.selection : 0;
    this.external_page_scale_factor = values.external_page_scale_factor !== undefined ? values.external_page_scale_factor : 0;
    this.painted_device_scale_factor = values.painted_device_scale_factor !== undefined ? values.painted_device_scale_factor : 0;
    this.display_color_spaces = values.display_color_spaces !== undefined ? values.display_color_spaces : null;
    this.current_local_surface_id = values.current_local_surface_id !== undefined ? values.current_local_surface_id : null;
    this.could = values.could !== undefined ? values.could : null;
    this.next_frame_token = values.next_frame_token !== undefined ? values.next_frame_token : 0;
    this.process = values.process !== undefined ? values.process : null;
    this.ui_resource_requests = values.ui_resource_requests !== undefined ? values.ui_resource_requests : 0;
    this.in = values.in !== undefined ? values.in : null;
    this.layers = values.layers !== undefined ? values.layers : [];
    this.null = values.null !== undefined ? values.null : null;
    this.ID = values.ID !== undefined ? values.ID : null;
    this.layer_order = values.layer_order !== undefined ? values.layer_order : 0;
    this.transform_tree_update = values.transform_tree_update !== undefined ? values.transform_tree_update : null;
    this.tilings = values.tilings !== undefined ? values.tilings : 0;
    this.surface_ranges = values.surface_ranges !== undefined ? values.surface_ranges : [];
    this.removed_animation_timelines = values.removed_animation_timelines !== undefined ? values.removed_animation_timelines : 0;
    this.is_viewport_mobile_optimized = values.is_viewport_mobile_optimized !== undefined ? values.is_viewport_mobile_optimized : 0;
  }
};

// Struct: PendingLayerContext
viz.mojom.PendingLayerContext = class {
  constructor(values = {}) {
    this.client = values.client !== undefined ? values.client : null;
  }
};

// Interface: LayerContext
viz.mojom.LayerContextPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.LayerContext';
  }

  setVisible(visible) {
    // Method: SetVisible
    // Call: SetVisible(visible)
  }

  updateDisplayTree(update) {
    // Method: UpdateDisplayTree
    // Call: UpdateDisplayTree(update)
  }

  updateDisplayTiling(tiling) {
    // Method: UpdateDisplayTiling
    // Call: UpdateDisplayTiling(tiling)
  }

};

viz.mojom.LayerContextRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LayerContextClient
viz.mojom.LayerContextClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.LayerContextClient';
  }

  onRequestCommitForFrame(args) {
    // Method: OnRequestCommitForFrame
    // Call: OnRequestCommitForFrame(args)
  }

  onTilingsReadyForCleanup(layer_id, tiling_scales_to_clean_up) {
    // Method: OnTilingsReadyForCleanup
    // Call: OnTilingsReadyForCleanup(layer_id, tiling_scales_to_clean_up)
  }

};

viz.mojom.LayerContextClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
