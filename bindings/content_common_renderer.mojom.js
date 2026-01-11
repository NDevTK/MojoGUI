// Auto-generated MojoJS binding
// Source: chromium_src/content/common/renderer.mojom
// Module: content.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var IPC = IPC || {};
var mojo_base = mojo_base || {};
var network = network || {};
var blink = blink || {};
var url = url || {};

content.mojom.RenderProcessVisibleStateSpec = { $: mojo.internal.Enum() };
content.mojom.UpdateScrollbarThemeParamsSpec = { $: {} };
content.mojom.UpdateSystemColorInfoParamsSpec = { $: {} };
content.mojom.Renderer = {};
content.mojom.Renderer.$interfaceName = 'content.mojom.Renderer';
content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec = { $: {} };
content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec = { $: {} };
content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec = { $: {} };
content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec = { $: {} };
content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec = { $: {} };
content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec = { $: {} };
content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec = { $: {} };
content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec = { $: {} };
content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec = { $: {} };
content.mojom.Renderer_PurgePluginListCache_ParamsSpec = { $: {} };
content.mojom.Renderer_PurgeResourceCache_ParamsSpec = { $: {} };
content.mojom.Renderer_PurgeResourceCache_ResponseParamsSpec = { $: {} };
content.mojom.Renderer_SetProcessState_ParamsSpec = { $: {} };
content.mojom.Renderer_SetIsLockedToSite_ParamsSpec = { $: {} };
content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec = { $: {} };
content.mojom.Renderer_WriteClangProfilingProfile_ResponseParamsSpec = { $: {} };
content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec = { $: {} };
content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec = { $: {} };
content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec = { $: {} };
content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec = { $: {} };
content.mojom.Renderer_InitializeRenderer_ParamsSpec = { $: {} };

// Enum: RenderProcessVisibleState
content.mojom.RenderProcessVisibleState = {
  kVisible: 0,
  kHidden: 1,
};

// Struct: UpdateScrollbarThemeParams
mojo.internal.Struct(
    content.mojom.UpdateScrollbarThemeParamsSpec, 'content.mojom.UpdateScrollbarThemeParams', [
      mojo.internal.StructField('preferred_scroller_style', 0, 0, content.mojom.ScrollerStyleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initial_button_delay', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('autoscroll_button_delay', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('has_initial_button_delay', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_autoscroll_button_delay', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('jump_on_track_click', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('redraw', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('scroll_view_rubber_banding', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UpdateSystemColorInfoParams
mojo.internal.Struct(
    content.mojom.UpdateSystemColorInfoParamsSpec, 'content.mojom.UpdateSystemColorInfoParams', [
      mojo.internal.StructField('accent_color_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'accent_color_$flag', originalFieldName: 'accent_color' }),
      mojo.internal.StructField('accent_color_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'accent_color_$value', originalFieldName: 'accent_color' }),
    ],
    [[0, 16]]);

// Interface: Renderer
mojo.internal.Struct(
    content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec, 'content.mojom.Renderer_CreateAgentSchedulingGroup_Params', [
      mojo.internal.StructField('bootstrap', 0, 0, mojo.internal.InterfaceRequest(IPC.mojom.ChannelBootstrapRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec, 'content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_Params', [
      mojo.internal.StructField('agent_scheduling_group', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec, 'content.mojom.Renderer_TransferSharedLastForegroundTime_Params', [
      mojo.internal.StructField('last_foreground_time_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec, 'content.mojom.Renderer_OnNetworkConnectionChanged_Params', [
      mojo.internal.StructField('connection_type', 0, 0, content.mojom.NetworkConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_bandwidth_mbps', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec, 'content.mojom.Renderer_OnNetworkQualityChanged_Params', [
      mojo.internal.StructField('effective_connection_type', 0, 0, network.mojom.EffectiveConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('http_rtt', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transport_rtt', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bandwidth_kbps', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec, 'content.mojom.Renderer_SetWebKitSharedTimersSuspended_Params', [
      mojo.internal.StructField('suspend', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec, 'content.mojom.Renderer_UpdateScrollbarTheme_Params', [
      mojo.internal.StructField('params', 0, 0, content.mojom.UpdateScrollbarThemeParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec, 'content.mojom.Renderer_OnSystemColorsChanged_Params', [
      mojo.internal.StructField('aqua_color_variant', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec, 'content.mojom.Renderer_UpdateSystemColorInfo_Params', [
      mojo.internal.StructField('params', 0, 0, content.mojom.UpdateSystemColorInfoParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_PurgePluginListCache_ParamsSpec, 'content.mojom.Renderer_PurgePluginListCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.Renderer_PurgeResourceCache_ParamsSpec, 'content.mojom.Renderer_PurgeResourceCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.Renderer_PurgeResourceCache_ResponseParamsSpec, 'content.mojom.Renderer_PurgeResourceCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetProcessState_ParamsSpec, 'content.mojom.Renderer_SetProcessState_Params', [
      mojo.internal.StructField('process_priority', 0, 0, mojo_base.mojom.ProcessPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_state', 8, 0, content.mojom.RenderProcessVisibleStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetIsLockedToSite_ParamsSpec, 'content.mojom.Renderer_SetIsLockedToSite_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec, 'content.mojom.Renderer_WriteClangProfilingProfile_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.Renderer_WriteClangProfilingProfile_ResponseParamsSpec, 'content.mojom.Renderer_WriteClangProfilingProfile_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec, 'content.mojom.Renderer_SetIsCrossOriginIsolated_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec, 'content.mojom.Renderer_SetIsWebSecurityDisabled_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec, 'content.mojom.Renderer_SetIsIsolatedContext_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec, 'content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_Params', [
      mojo.internal.StructField('resource_map', 0, 0, mojo.internal.Map(url.mojom.UrlSpec.$, mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_InitializeRenderer_ParamsSpec, 'content.mojom.Renderer_InitializeRenderer_Params', [
      mojo.internal.StructField('user_agent', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, blink.mojom.UserAgentMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cors_exempt_header_list', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('origin_trials_settings', 24, 0, blink.mojom.OriginTrialsSettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cpu_performance_tier', 32, 0, blink.mojom.PerformanceTierSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 56]]);

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
  createAgentSchedulingGroup(bootstrap) {
    return this.$.createAgentSchedulingGroup(bootstrap);
  }
  createAssociatedAgentSchedulingGroup(agent_scheduling_group) {
    return this.$.createAssociatedAgentSchedulingGroup(agent_scheduling_group);
  }
  transferSharedLastForegroundTime(last_foreground_time_region) {
    return this.$.transferSharedLastForegroundTime(last_foreground_time_region);
  }
  onNetworkConnectionChanged(connection_type, max_bandwidth_mbps) {
    return this.$.onNetworkConnectionChanged(connection_type, max_bandwidth_mbps);
  }
  onNetworkQualityChanged(effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps) {
    return this.$.onNetworkQualityChanged(effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps);
  }
  setWebKitSharedTimersSuspended(suspend) {
    return this.$.setWebKitSharedTimersSuspended(suspend);
  }
  updateScrollbarTheme(params) {
    return this.$.updateScrollbarTheme(params);
  }
  onSystemColorsChanged(aqua_color_variant) {
    return this.$.onSystemColorsChanged(aqua_color_variant);
  }
  updateSystemColorInfo(params) {
    return this.$.updateSystemColorInfo(params);
  }
  purgePluginListCache() {
    return this.$.purgePluginListCache();
  }
  purgeResourceCache() {
    return this.$.purgeResourceCache();
  }
  setProcessState(process_priority, visible_state) {
    return this.$.setProcessState(process_priority, visible_state);
  }
  setIsLockedToSite() {
    return this.$.setIsLockedToSite();
  }
  writeClangProfilingProfile() {
    return this.$.writeClangProfilingProfile();
  }
  setIsCrossOriginIsolated(value) {
    return this.$.setIsCrossOriginIsolated(value);
  }
  setIsWebSecurityDisabled(value) {
    return this.$.setIsWebSecurityDisabled(value);
  }
  setIsIsolatedContext(value) {
    return this.$.setIsIsolatedContext(value);
  }
  setWebUIResourceUrlToCodeCacheMap(resource_map) {
    return this.$.setWebUIResourceUrlToCodeCacheMap(resource_map);
  }
  initializeRenderer(user_agent, metadata, cors_exempt_header_list, origin_trials_settings, cpu_performance_tier, trace_id) {
    return this.$.initializeRenderer(user_agent, metadata, cors_exempt_header_list, origin_trials_settings, cpu_performance_tier, trace_id);
  }
};

content.mojom.RendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Renderer', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createAgentSchedulingGroup(bootstrap) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec,
      null,
      [bootstrap],
      false);
  }

  createAssociatedAgentSchedulingGroup(agent_scheduling_group) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec,
      null,
      [agent_scheduling_group],
      false);
  }

  transferSharedLastForegroundTime(last_foreground_time_region) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec,
      null,
      [last_foreground_time_region],
      false);
  }

  onNetworkConnectionChanged(connection_type, max_bandwidth_mbps) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec,
      null,
      [connection_type, max_bandwidth_mbps],
      false);
  }

  onNetworkQualityChanged(effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec,
      null,
      [effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps],
      false);
  }

  setWebKitSharedTimersSuspended(suspend) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec,
      null,
      [suspend],
      false);
  }

  updateScrollbarTheme(params) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec,
      null,
      [params],
      false);
  }

  onSystemColorsChanged(aqua_color_variant) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec,
      null,
      [aqua_color_variant],
      false);
  }

  updateSystemColorInfo(params) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec,
      null,
      [params],
      false);
  }

  purgePluginListCache() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      content.mojom.Renderer_PurgePluginListCache_ParamsSpec,
      null,
      [],
      false);
  }

  purgeResourceCache() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      content.mojom.Renderer_PurgeResourceCache_ParamsSpec,
      content.mojom.Renderer_PurgeResourceCache_ResponseParamsSpec,
      [],
      false);
  }

  setProcessState(process_priority, visible_state) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      content.mojom.Renderer_SetProcessState_ParamsSpec,
      null,
      [process_priority, visible_state],
      false);
  }

  setIsLockedToSite() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      content.mojom.Renderer_SetIsLockedToSite_ParamsSpec,
      null,
      [],
      false);
  }

  writeClangProfilingProfile() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec,
      content.mojom.Renderer_WriteClangProfilingProfile_ResponseParamsSpec,
      [],
      false);
  }

  setIsCrossOriginIsolated(value) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec,
      null,
      [value],
      false);
  }

  setIsWebSecurityDisabled(value) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec,
      null,
      [value],
      false);
  }

  setIsIsolatedContext(value) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec,
      null,
      [value],
      false);
  }

  setWebUIResourceUrlToCodeCacheMap(resource_map) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec,
      null,
      [resource_map],
      false);
  }

  initializeRenderer(user_agent, metadata, cors_exempt_header_list, origin_trials_settings, cpu_performance_tier, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      content.mojom.Renderer_InitializeRenderer_ParamsSpec,
      null,
      [user_agent, metadata, cors_exempt_header_list, origin_trials_settings, cpu_performance_tier, trace_id],
      false);
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

content.mojom.RendererReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Renderer', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: CreateAgentSchedulingGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAgentSchedulingGroup (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateAssociatedAgentSchedulingGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAssociatedAgentSchedulingGroup (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: TransferSharedLastForegroundTime
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TransferSharedLastForegroundTime (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnNetworkConnectionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkConnectionChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnNetworkQualityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkQualityChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetWebKitSharedTimersSuspended
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWebKitSharedTimersSuspended (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: UpdateScrollbarTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateScrollbarTheme (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnSystemColorsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSystemColorsChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: UpdateSystemColorInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateSystemColorInfo (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: PurgePluginListCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_PurgePluginListCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PurgePluginListCache (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: PurgeResourceCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_PurgeResourceCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PurgeResourceCache (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetProcessState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetProcessState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProcessState (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetIsLockedToSite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetIsLockedToSite_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsLockedToSite (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: WriteClangProfilingProfile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteClangProfilingProfile (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetIsCrossOriginIsolated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsCrossOriginIsolated (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetIsWebSecurityDisabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsWebSecurityDisabled (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetIsIsolatedContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsIsolatedContext (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SetWebUIResourceUrlToCodeCacheMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWebUIResourceUrlToCodeCacheMap (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: InitializeRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_InitializeRenderer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeRenderer (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
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
          const params = decoder.decodeStructInline(content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createAgentSchedulingGroup');
          const result = this.impl.createAgentSchedulingGroup(params.bootstrap);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createAssociatedAgentSchedulingGroup');
          const result = this.impl.createAssociatedAgentSchedulingGroup(params.agent_scheduling_group);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.transferSharedLastForegroundTime');
          const result = this.impl.transferSharedLastForegroundTime(params.last_foreground_time_region);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkConnectionChanged');
          const result = this.impl.onNetworkConnectionChanged(params.connection_type, params.max_bandwidth_mbps);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNetworkQualityChanged');
          const result = this.impl.onNetworkQualityChanged(params.effective_connection_type, params.http_rtt, params.transport_rtt, params.bandwidth_kbps);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWebKitSharedTimersSuspended');
          const result = this.impl.setWebKitSharedTimersSuspended(params.suspend);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateScrollbarTheme');
          const result = this.impl.updateScrollbarTheme(params.params);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSystemColorsChanged');
          const result = this.impl.onSystemColorsChanged(params.aqua_color_variant);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateSystemColorInfo');
          const result = this.impl.updateSystemColorInfo(params.params);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_PurgePluginListCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.purgePluginListCache');
          const result = this.impl.purgePluginListCache();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_PurgeResourceCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.purgeResourceCache');
          const result = this.impl.purgeResourceCache();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.Renderer_PurgeResourceCache_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PurgeResourceCache FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetProcessState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProcessState');
          const result = this.impl.setProcessState(params.process_priority, params.visible_state);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetIsLockedToSite_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsLockedToSite');
          const result = this.impl.setIsLockedToSite();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeClangProfilingProfile');
          const result = this.impl.writeClangProfilingProfile();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.Renderer_WriteClangProfilingProfile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WriteClangProfilingProfile FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsCrossOriginIsolated');
          const result = this.impl.setIsCrossOriginIsolated(params.value);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsWebSecurityDisabled');
          const result = this.impl.setIsWebSecurityDisabled(params.value);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsIsolatedContext');
          const result = this.impl.setIsIsolatedContext(params.value);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWebUIResourceUrlToCodeCacheMap');
          const result = this.impl.setWebUIResourceUrlToCodeCacheMap(params.resource_map);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_InitializeRenderer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializeRenderer');
          const result = this.impl.initializeRenderer(params.user_agent, params.metadata, params.cors_exempt_header_list, params.origin_trials_settings, params.cpu_performance_tier, params.trace_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.RendererReceiver = content.mojom.RendererReceiver;

content.mojom.RendererPtr = content.mojom.RendererRemote;
content.mojom.RendererRequest = content.mojom.RendererPendingReceiver;

