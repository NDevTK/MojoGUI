// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/render_frame_metadata.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};


// Enum: RootScrollOffsetUpdateFrequency
cc.mojom.RootScrollOffsetUpdateFrequency = {
};

// Struct: DelegatedInkBrowserMetadata
cc.mojom.DelegatedInkBrowserMetadata = class {
  constructor(values = {}) {
    this.soon = values.soon !== undefined ? values.soon : null;
    this.renderer = values.renderer !== undefined ? values.renderer : null;
    this.delegated_ink_is_hovering = values.delegated_ink_is_hovering !== undefined ? values.delegated_ink_is_hovering : false;
  }
};

// Struct: RenderFrameMetadata
cc.mojom.RenderFrameMetadata = class {
  constructor(values = {}) {
    this.root_scroll_offset = values.root_scroll_offset !== undefined ? values.root_scroll_offset : 0;
    this.is_scroll_offset_at_top = values.is_scroll_offset_at_top !== undefined ? values.is_scroll_offset_at_top : false;
    this.selection = values.selection !== undefined ? values.selection : null;
    this.is_mobile_optimized = values.is_mobile_optimized !== undefined ? values.is_mobile_optimized : false;
    this.page_scale_factor = values.page_scale_factor !== undefined ? values.page_scale_factor : 0;
    this.frame = values.frame !== undefined ? values.frame : null;
    this.external_page_scale_factor = values.external_page_scale_factor !== undefined ? values.external_page_scale_factor : 0;
    this.primary_main_frame_item_sequence_number = values.primary_main_frame_item_sequence_number !== undefined ? values.primary_main_frame_item_sequence_number : 0;
    this.has_transparent_background = values.has_transparent_background !== undefined ? values.has_transparent_background : 0;
  }
};

// Interface: RenderFrameMetadataObserver
cc.mojom.RenderFrameMetadataObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cc.mojom.RenderFrameMetadataObserver';
  }

  onRenderFrameMetadataChanged() {
    // Method: OnRenderFrameMetadataChanged
    // Call: OnRenderFrameMetadataChanged()
  }

  frame(example, changed) {
    // Method: frame
    // Call: frame(example, changed)
  }

  onRootScrollOffsetChanged() {
    // Method: OnRootScrollOffsetChanged
    // Call: OnRootScrollOffsetChanged()
  }

  onRootScrollOffsetChanged() {
    // Method: OnRootScrollOffsetChanged
    // Call: OnRootScrollOffsetChanged()
  }

  onRenderFrameMetadataChanged() {
    // Method: OnRenderFrameMetadataChanged
    // Call: OnRenderFrameMetadataChanged()
  }

  updateRootScrollOffsetUpdateFrequency(frequency) {
    // Method: UpdateRootScrollOffsetUpdateFrequency
    // Call: UpdateRootScrollOffsetUpdateFrequency(frequency)
  }

  reportAllFrameSubmissionsForTesting(enabled) {
    // Method: ReportAllFrameSubmissionsForTesting
    // Call: ReportAllFrameSubmissionsForTesting(enabled)
  }

};

cc.mojom.RenderFrameMetadataObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RenderFrameMetadataObserverClient
cc.mojom.RenderFrameMetadataObserverClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cc.mojom.RenderFrameMetadataObserverClient';
  }

  onRenderFrameMetadataChanged(frame_token, metadata) {
    // Method: OnRenderFrameMetadataChanged
    // Call: OnRenderFrameMetadataChanged(frame_token, metadata)
  }

  onFrameSubmissionForTesting(frame_token) {
    // Method: OnFrameSubmissionForTesting
    // Call: OnFrameSubmissionForTesting(frame_token)
  }

  updateRootScrollOffsetUpdateFrequency() {
    // Method: UpdateRootScrollOffsetUpdateFrequency
    // Call: UpdateRootScrollOffsetUpdateFrequency()
  }

  onRootScrollOffsetChanged(root_scroll_offset) {
    // Method: OnRootScrollOffsetChanged
    // Call: OnRootScrollOffsetChanged(root_scroll_offset)
  }

};

cc.mojom.RenderFrameMetadataObserverClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
