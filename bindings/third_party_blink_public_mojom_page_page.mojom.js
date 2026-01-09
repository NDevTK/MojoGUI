// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/page.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: PagehideDispatch
blink.mojom.PagehideDispatch = {
};

// Struct: PageLifecycleState
blink.mojom.PageLifecycleState = class {
  constructor(values = {}) {
    this.pagehide_dispatch = values.pagehide_dispatch !== undefined ? values.pagehide_dispatch : false;
    this.eviction_enabled = values.eviction_enabled !== undefined ? values.eviction_enabled : false;
  }
};

// Struct: PageRestoreParams
blink.mojom.PageRestoreParams = class {
  constructor(values = {}) {
    this.view_transition_state = values.view_transition_state !== undefined ? values.view_transition_state : 0;
  }
};

// Struct: ColorProviderColorMaps
blink.mojom.ColorProviderColorMaps = class {
  constructor(values = {}) {
    this.forced_colors_map = values.forced_colors_map !== undefined ? values.forced_colors_map : {};
  }
};

// Struct: PrerenderPageActivationParams
blink.mojom.PrerenderPageActivationParams = class {
  constructor(values = {}) {
    this.view_transition_state = values.view_transition_state !== undefined ? values.view_transition_state : null;
  }
};

// Interface: PageBroadcast
blink.mojom.PageBroadcastPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PageBroadcast';
  }

  setPageLifecycleState(state, page_restore_params) {
    // Method: SetPageLifecycleState
    // Call: SetPageLifecycleState(state, page_restore_params)
  }

  audioStateChanged(is_audio_playing) {
    // Method: AudioStateChanged
    // Call: AudioStateChanged(is_audio_playing)
  }

  activatePrerenderedPage(prerender_page_activation_params) {
    // Method: ActivatePrerenderedPage
    // Call: ActivatePrerenderedPage(prerender_page_activation_params)
  }

  updateWebPreferences(preferences) {
    // Method: UpdateWebPreferences
    // Call: UpdateWebPreferences(preferences)
  }

  updateRendererPreferences(preferences) {
    // Method: UpdateRendererPreferences
    // Call: UpdateRendererPreferences(preferences)
  }

  setHistoryIndexAndLength(index, length) {
    // Method: SetHistoryIndexAndLength
    // Call: SetHistoryIndexAndLength(index, length)
  }

  setPageBaseBackgroundColor(color) {
    // Method: SetPageBaseBackgroundColor
    // Call: SetPageBaseBackgroundColor(color)
  }

  createRemoteMainFrame(token, opener_frame_token, replication_state, is_loading, devtools_frame_token, navigation_metrics_token, remote_frame_interfaces, remote_main_frame_interfaces) {
    // Method: CreateRemoteMainFrame
    // Call: CreateRemoteMainFrame(token, opener_frame_token, replication_state, is_loading, devtools_frame_token, navigation_metrics_token, remote_frame_interfaces, remote_main_frame_interfaces)
  }

  updatePageBrowsingContextGroup(browsing_context_group_token) {
    // Method: UpdatePageBrowsingContextGroup
    // Call: UpdatePageBrowsingContextGroup(browsing_context_group_token)
  }

  setPageAttributionSupport(support) {
    // Method: SetPageAttributionSupport
    // Call: SetPageAttributionSupport(support)
  }

  updateColorProviders(color_provider_colors) {
    // Method: UpdateColorProviders
    // Call: UpdateColorProviders(color_provider_colors)
  }

  setSupportsDraggableRegions(supports_draggable_regions) {
    // Method: SetSupportsDraggableRegions
    // Call: SetSupportsDraggableRegions(supports_draggable_regions)
  }

};

blink.mojom.PageBroadcastRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
