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

// Interface: Renderer
content.mojom.Renderer = {};

content.mojom.RendererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.RendererRemote = class {
  static get $interfaceName() {
    return 'content.mojom.Renderer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.RendererPendingReceiver,
      handle);
    this.$ = new content.mojom.RendererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.RendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createAgentSchedulingGroup(bootstrap) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec.$,
      null,
      [bootstrap]);
  }

  createAssociatedAgentSchedulingGroup(agent_scheduling_group) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec.$,
      null,
      [agent_scheduling_group]);
  }

  transferSharedLastForegroundTime(last_foreground_time_region) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec.$,
      null,
      [last_foreground_time_region]);
  }

  onNetworkConnectionChanged(connection_type, max_bandwidth_mbps) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec.$,
      null,
      [connection_type, max_bandwidth_mbps]);
  }

  onNetworkQualityChanged(effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec.$,
      null,
      [effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps]);
  }

  setWebKitSharedTimersSuspended(suspend) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec.$,
      null,
      [suspend]);
  }

  updateScrollbarTheme(params) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec.$,
      null,
      [params]);
  }

  onSystemColorsChanged(aqua_color_variant) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec.$,
      null,
      [aqua_color_variant]);
  }

  updateSystemColorInfo(params) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec.$,
      null,
      [params]);
  }

  purgePluginListCache() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.Renderer_PurgePluginListCache_ParamsSpec.$,
      null,
      []);
  }

  purgeResourceCache() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.Renderer_PurgeResourceCache_ParamsSpec.$,
      null,
      []);
  }

  setProcessState(process_priority, visible_state) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.Renderer_SetProcessState_ParamsSpec.$,
      null,
      [process_priority, visible_state]);
  }

  setIsLockedToSite() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.Renderer_SetIsLockedToSite_ParamsSpec.$,
      null,
      []);
  }

  writeClangProfilingProfile() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec.$,
      null,
      []);
  }

  setIsCrossOriginIsolated(value) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec.$,
      null,
      [value]);
  }

  setIsWebSecurityDisabled(value) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec.$,
      null,
      [value]);
  }

  setIsIsolatedContext(value) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec.$,
      null,
      [value]);
  }

  setWebUIResourceUrlToCodeCacheMap(resource_map) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec.$,
      null,
      [resource_map]);
  }

  initializeRenderer(user_agent, metadata, cors_exempt_header_list, origin_trials_settings, cpu_performance_tier, trace_id) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      content.mojom.Renderer_InitializeRenderer_ParamsSpec.$,
      null,
      [user_agent, metadata, cors_exempt_header_list, origin_trials_settings, cpu_performance_tier, trace_id]);
  }

};

content.mojom.Renderer.getRemote = function() {
  let remote = new content.mojom.RendererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.Renderer',
    'context');
  return remote.$;
};

// ParamsSpec for CreateAgentSchedulingGroup
content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.CreateAgentSchedulingGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'bootstrap', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateAssociatedAgentSchedulingGroup
content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.CreateAssociatedAgentSchedulingGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'agent_scheduling_group', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TransferSharedLastForegroundTime
content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.TransferSharedLastForegroundTime_Params',
      packedSize: 16,
      fields: [
        { name: 'last_foreground_time_region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNetworkConnectionChanged
content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.OnNetworkConnectionChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'connection_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'max_bandwidth_mbps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNetworkQualityChanged
content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.OnNetworkQualityChanged_Params',
      packedSize: 40,
      fields: [
        { name: 'effective_connection_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'http_rtt', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'transport_rtt', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'bandwidth_kbps', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetWebKitSharedTimersSuspended
content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.SetWebKitSharedTimersSuspended_Params',
      packedSize: 16,
      fields: [
        { name: 'suspend', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateScrollbarTheme
content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.UpdateScrollbarTheme_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSystemColorsChanged
content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.OnSystemColorsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'aqua_color_variant', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateSystemColorInfo
content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.UpdateSystemColorInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PurgePluginListCache
content.mojom.Renderer_PurgePluginListCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.PurgePluginListCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PurgeResourceCache
content.mojom.Renderer_PurgeResourceCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.PurgeResourceCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetProcessState
content.mojom.Renderer_SetProcessState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.SetProcessState_Params',
      packedSize: 24,
      fields: [
        { name: 'process_priority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'visible_state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetIsLockedToSite
content.mojom.Renderer_SetIsLockedToSite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.SetIsLockedToSite_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WriteClangProfilingProfile
content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.WriteClangProfilingProfile_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetIsCrossOriginIsolated
content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.SetIsCrossOriginIsolated_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetIsWebSecurityDisabled
content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.SetIsWebSecurityDisabled_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetIsIsolatedContext
content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.SetIsIsolatedContext_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetWebUIResourceUrlToCodeCacheMap
content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.SetWebUIResourceUrlToCodeCacheMap_Params',
      packedSize: 16,
      fields: [
        { name: 'resource_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InitializeRenderer
content.mojom.Renderer_InitializeRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.Renderer.InitializeRenderer_Params',
      packedSize: 56,
      fields: [
        { name: 'user_agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cors_exempt_header_list', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'origin_trials_settings', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cpu_performance_tier', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'trace_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.RendererPtr = content.mojom.RendererRemote;
content.mojom.RendererRequest = content.mojom.RendererPendingReceiver;

