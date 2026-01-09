// Auto-generated MojoJS binding
// Source: chromium_src/content/common/renderer.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Enum: RenderProcessVisibleState
content.mojom.RenderProcessVisibleState = {
  kVisible: 0,
  kHidden: 1,
};

// Struct: UpdateScrollbarThemeParams
content.mojom.UpdateScrollbarThemeParams = class {
  constructor(values = {}) {
    this.scroll_view_rubber_banding = values.scroll_view_rubber_banding !== undefined ? values.scroll_view_rubber_banding : 0;
  }
};

// Struct: UpdateSystemColorInfoParams
content.mojom.UpdateSystemColorInfoParams = class {
  constructor(values = {}) {
    this.accent_color = values.accent_color !== undefined ? values.accent_color : 0;
  }
};

// Interface: Renderer
content.mojom.RendererPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.Renderer';
  }

  createAgentSchedulingGroup(bootstrap) {
    // Method: CreateAgentSchedulingGroup
    // Call: CreateAgentSchedulingGroup(bootstrap)
  }

  createAssociatedAgentSchedulingGroup(agent_scheduling_group) {
    // Method: CreateAssociatedAgentSchedulingGroup
    // Call: CreateAssociatedAgentSchedulingGroup(agent_scheduling_group)
  }

  transferSharedLastForegroundTime(last_foreground_time_region) {
    // Method: TransferSharedLastForegroundTime
    // Call: TransferSharedLastForegroundTime(last_foreground_time_region)
  }

  onNetworkConnectionChanged(connection_type, max_bandwidth_mbps) {
    // Method: OnNetworkConnectionChanged
    // Call: OnNetworkConnectionChanged(connection_type, max_bandwidth_mbps)
  }

  onNetworkQualityChanged(effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps) {
    // Method: OnNetworkQualityChanged
    // Call: OnNetworkQualityChanged(effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps)
  }

  setWebKitSharedTimersSuspended(suspend) {
    // Method: SetWebKitSharedTimersSuspended
    // Call: SetWebKitSharedTimersSuspended(suspend)
  }

  updateScrollbarTheme(params) {
    // Method: UpdateScrollbarTheme
    // Call: UpdateScrollbarTheme(params)
  }

  onSystemColorsChanged(aqua_color_variant) {
    // Method: OnSystemColorsChanged
    // Call: OnSystemColorsChanged(aqua_color_variant)
  }

  updateSystemColorInfo(params) {
    // Method: UpdateSystemColorInfo
    // Call: UpdateSystemColorInfo(params)
  }

  purgePluginListCache() {
    // Method: PurgePluginListCache
    // Call: PurgePluginListCache()
  }

  purgeResourceCache() {
    // Method: PurgeResourceCache
    // Call: PurgeResourceCache()
  }

  setProcessState(process_priority, visible_state) {
    // Method: SetProcessState
    // Call: SetProcessState(process_priority, visible_state)
  }

  setIsLockedToSite() {
    // Method: SetIsLockedToSite
    // Call: SetIsLockedToSite()
  }

  writeClangProfilingProfile() {
    // Method: WriteClangProfilingProfile
    // Call: WriteClangProfilingProfile()
  }

  setIsCrossOriginIsolated(value) {
    // Method: SetIsCrossOriginIsolated
    // Call: SetIsCrossOriginIsolated(value)
  }

  setIsWebSecurityDisabled(value) {
    // Method: SetIsWebSecurityDisabled
    // Call: SetIsWebSecurityDisabled(value)
  }

  setIsIsolatedContext(value) {
    // Method: SetIsIsolatedContext
    // Call: SetIsIsolatedContext(value)
  }

  setWebUIResourceUrlToCodeCacheMap(resource_map) {
    // Method: SetWebUIResourceUrlToCodeCacheMap
    // Call: SetWebUIResourceUrlToCodeCacheMap(resource_map)
  }

  initializeRenderer(user_agent, metadata, cors_exempt_header_list, origin_trials_settings, cpu_performance_tier, trace_id) {
    // Method: InitializeRenderer
    // Call: InitializeRenderer(user_agent, metadata, cors_exempt_header_list, origin_trials_settings, cpu_performance_tier, trace_id)
  }

};

content.mojom.RendererRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
