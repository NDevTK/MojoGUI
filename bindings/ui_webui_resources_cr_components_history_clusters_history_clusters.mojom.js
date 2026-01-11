// Auto-generated MojoJS binding
 // Source: chromium_src/ui/webui/resources/cr_components/history_clusters/history_clusters.mojom
 // Module: history_clusters.mojom

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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.history_clusters = mojo.internal.bindings.history_clusters || {};
mojo.internal.bindings.history_clusters.mojom = mojo.internal.bindings.history_clusters.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.history_clusters.mojom.ClusterActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.history_clusters.mojom.RelatedSearchActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.history_clusters.mojom.VisitActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.history_clusters.mojom.VisitTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.history_clusters.mojom.QueryResultSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler = {};
mojo.internal.bindings.history_clusters.mojom.PageHandler.$interfaceName = 'history_clusters.mojom.PageHandler';
mojo.internal.bindings.history_clusters.mojom.PageHandler_OpenHistoryUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_SetPage_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_ToggleVisibility_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_HideVisits_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_HideVisits_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisits_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordToggledVisibility_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.Page = {};
mojo.internal.bindings.history_clusters.mojom.Page.$interfaceName = 'history_clusters.mojom.Page';
mojo.internal.bindings.history_clusters.mojom.Page_OnClustersQueryResult_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec = { $: {} };
mojo.internal.bindings.history_clusters.mojom.Page_OnQueryChangedByUser_ParamsSpec = { $: {} };

// Enum: ClusterAction
mojo.internal.bindings.history_clusters.mojom.ClusterAction = {
  kDeleted: 0,
  kOpenedInTabGroup: 1,
  kRelatedSearchClicked: 2,
  kVisitClicked: 3,
};

// Enum: RelatedSearchAction
mojo.internal.bindings.history_clusters.mojom.RelatedSearchAction = {
  kClicked: 0,
};

// Enum: VisitAction
mojo.internal.bindings.history_clusters.mojom.VisitAction = {
  kClicked: 0,
  kHidden: 1,
  kDeleted: 2,
};

// Enum: VisitType
mojo.internal.bindings.history_clusters.mojom.VisitType = {
  kSRP: 0,
  kNonSRP: 1,
};

// Struct: QueryResult
mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.QueryResultSpec, 'history_clusters.mojom.QueryResult', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_clusters', 8, 0, mojo.internal.Array(mojo.internal.bindings.history_clusters.mojom.ClusterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_can_load_more', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_continuation', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_OpenHistoryUrl_ParamsSpec, 'history_clusters.mojom.PageHandler_OpenHistoryUrl_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_click_modifiers', 8, 0, mojo.internal.bindings.ui.mojom.ClickModifiersSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_SetPage_ParamsSpec, 'history_clusters.mojom.PageHandler_SetPage_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.history_clusters.mojom.PageSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec, 'history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_Params', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_point', 8, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec, 'history_clusters.mojom.PageHandler_ShowContextMenuForURL_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_point', 8, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec, 'history_clusters.mojom.PageHandler_ShowSidePanelUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec, 'history_clusters.mojom.PageHandler_ToggleVisibility_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_ToggleVisibility_ResponseParamsSpec, 'history_clusters.mojom.PageHandler_ToggleVisibility_ResponseParams', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec, 'history_clusters.mojom.PageHandler_StartQueryClusters_Params', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_begin_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_recluster', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec, 'history_clusters.mojom.PageHandler_LoadMoreClusters_Params', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_HideVisits_ParamsSpec, 'history_clusters.mojom.PageHandler_HideVisits_Params', [
      mojo.internal.StructField('arg_visits', 0, 0, mojo.internal.Array(mojo.internal.bindings.history_clusters.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_HideVisits_ResponseParamsSpec, 'history_clusters.mojom.PageHandler_HideVisits_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec, 'history_clusters.mojom.PageHandler_RemoveVisits_Params', [
      mojo.internal.StructField('arg_visits', 0, 0, mojo.internal.Array(mojo.internal.bindings.history_clusters.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisits_ResponseParamsSpec, 'history_clusters.mojom.PageHandler_RemoveVisits_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec, 'history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec, 'history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec, 'history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_Params', [
      mojo.internal.StructField('arg_visits', 0, 0, mojo.internal.Array(mojo.internal.bindings.history_clusters.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_group_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec, 'history_clusters.mojom.PageHandler_RecordVisitAction_Params', [
      mojo.internal.StructField('arg_visit_action', 0, 0, mojo.internal.bindings.history_clusters.mojom.VisitActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visit_type', 8, 0, mojo.internal.bindings.history_clusters.mojom.VisitTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visit_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec, 'history_clusters.mojom.PageHandler_RecordRelatedSearchAction_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.bindings.history_clusters.mojom.RelatedSearchActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visit_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec, 'history_clusters.mojom.PageHandler_RecordClusterAction_Params', [
      mojo.internal.StructField('arg_cluster_action', 0, 0, mojo.internal.bindings.history_clusters.mojom.ClusterActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cluster_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordToggledVisibility_ParamsSpec, 'history_clusters.mojom.PageHandler_RecordToggledVisibility_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.history_clusters.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.history_clusters.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'history_clusters.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.history_clusters.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.history_clusters.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  openHistoryUrl(arg_url, arg_click_modifiers) {
    return this.$.openHistoryUrl(arg_url, arg_click_modifiers);
  }
  setPage(arg_page) {
    return this.$.setPage(arg_page);
  }
  showContextMenuForSearchbox(arg_query, arg_point) {
    return this.$.showContextMenuForSearchbox(arg_query, arg_point);
  }
  showContextMenuForURL(arg_url, arg_point) {
    return this.$.showContextMenuForURL(arg_url, arg_point);
  }
  showSidePanelUI() {
    return this.$.showSidePanelUI();
  }
  toggleVisibility(arg_visible) {
    return this.$.toggleVisibility(arg_visible);
  }
  startQueryClusters(arg_query, arg_begin_time, arg_recluster) {
    return this.$.startQueryClusters(arg_query, arg_begin_time, arg_recluster);
  }
  loadMoreClusters(arg_query) {
    return this.$.loadMoreClusters(arg_query);
  }
  hideVisits(arg_visits) {
    return this.$.hideVisits(arg_visits);
  }
  removeVisits(arg_visits) {
    return this.$.removeVisits(arg_visits);
  }
  removeVisitByUrlAndTime(arg_url, arg_timestamp) {
    return this.$.removeVisitByUrlAndTime(arg_url, arg_timestamp);
  }
  openVisitUrlsInTabGroup(arg_visits, arg_tab_group_name) {
    return this.$.openVisitUrlsInTabGroup(arg_visits, arg_tab_group_name);
  }
  recordVisitAction(arg_visit_action, arg_visit_index, arg_visit_type) {
    return this.$.recordVisitAction(arg_visit_action, arg_visit_index, arg_visit_type);
  }
  recordRelatedSearchAction(arg_action, arg_visit_index) {
    return this.$.recordRelatedSearchAction(arg_action, arg_visit_index);
  }
  recordClusterAction(arg_cluster_action, arg_cluster_index) {
    return this.$.recordClusterAction(arg_cluster_action, arg_cluster_index);
  }
  recordToggledVisibility(arg_visible) {
    return this.$.recordToggledVisibility(arg_visible);
  }
};

mojo.internal.bindings.history_clusters.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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

  openHistoryUrl(arg_url, arg_click_modifiers) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_OpenHistoryUrl_ParamsSpec,
      null,
      [arg_url, arg_click_modifiers],
      false);
  }

  setPage(arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [arg_page],
      false);
  }

  showContextMenuForSearchbox(arg_query, arg_point) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec,
      null,
      [arg_query, arg_point],
      false);
  }

  showContextMenuForURL(arg_url, arg_point) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec,
      null,
      [arg_url, arg_point],
      false);
  }

  showSidePanelUI() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec,
      null,
      [],
      false);
  }

  toggleVisibility(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec,
      mojo.internal.bindings.history_clusters.mojom.PageHandler_ToggleVisibility_ResponseParamsSpec,
      [arg_visible],
      false);
  }

  startQueryClusters(arg_query, arg_begin_time, arg_recluster) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec,
      null,
      [arg_query, arg_begin_time, arg_recluster],
      false);
  }

  loadMoreClusters(arg_query) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec,
      null,
      [arg_query],
      false);
  }

  hideVisits(arg_visits) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_HideVisits_ParamsSpec,
      mojo.internal.bindings.history_clusters.mojom.PageHandler_HideVisits_ResponseParamsSpec,
      [arg_visits],
      false);
  }

  removeVisits(arg_visits) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec,
      mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisits_ResponseParamsSpec,
      [arg_visits],
      false);
  }

  removeVisitByUrlAndTime(arg_url, arg_timestamp) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec,
      mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec,
      [arg_url, arg_timestamp],
      false);
  }

  openVisitUrlsInTabGroup(arg_visits, arg_tab_group_name) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec,
      null,
      [arg_visits, arg_tab_group_name],
      false);
  }

  recordVisitAction(arg_visit_action, arg_visit_index, arg_visit_type) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec,
      null,
      [arg_visit_action, arg_visit_index, arg_visit_type],
      false);
  }

  recordRelatedSearchAction(arg_action, arg_visit_index) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec,
      null,
      [arg_action, arg_visit_index],
      false);
  }

  recordClusterAction(arg_cluster_action, arg_cluster_index) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec,
      null,
      [arg_cluster_action, arg_cluster_index],
      false);
  }

  recordToggledVisibility(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordToggledVisibility_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

};

mojo.internal.bindings.history_clusters.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.history_clusters.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_clusters.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.history_clusters.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        
        // Try Method 0: OpenHistoryUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_OpenHistoryUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenHistoryUrl (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_SetPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPage (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ShowContextMenuForSearchbox
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowContextMenuForSearchbox (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ShowContextMenuForURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowContextMenuForURL (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ShowSidePanelUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowSidePanelUI (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ToggleVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleVisibility (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: StartQueryClusters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartQueryClusters (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: LoadMoreClusters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadMoreClusters (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: HideVisits
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_HideVisits_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HideVisits (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RemoveVisits
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveVisits (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RemoveVisitByUrlAndTime
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveVisitByUrlAndTime (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OpenVisitUrlsInTabGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenVisitUrlsInTabGroup (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: RecordVisitAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordVisitAction (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RecordRelatedSearchAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordRelatedSearchAction (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RecordClusterAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordClusterAction (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: RecordToggledVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordToggledVisibility_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordToggledVisibility (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_OpenHistoryUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openHistoryUrl');
          const result = this.impl.openHistoryUrl(params.arg_url, params.arg_click_modifiers);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_SetPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPage');
          const result = this.impl.setPage(params.arg_page);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowContextMenuForSearchbox_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showContextMenuForSearchbox');
          const result = this.impl.showContextMenuForSearchbox(params.arg_query, params.arg_point);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showContextMenuForURL');
          const result = this.impl.showContextMenuForURL(params.arg_url, params.arg_point);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_ShowSidePanelUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showSidePanelUI');
          const result = this.impl.showSidePanelUI();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_ToggleVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.toggleVisibility');
          const result = this.impl.toggleVisibility(params.arg_visible);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.history_clusters.mojom.PageHandler_ToggleVisibility_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ToggleVisibility FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_StartQueryClusters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startQueryClusters');
          const result = this.impl.startQueryClusters(params.arg_query, params.arg_begin_time, params.arg_recluster);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_LoadMoreClusters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadMoreClusters');
          const result = this.impl.loadMoreClusters(params.arg_query);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_HideVisits_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hideVisits');
          const result = this.impl.hideVisits(params.arg_visits);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.history_clusters.mojom.PageHandler_HideVisits_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HideVisits FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisits_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeVisits');
          const result = this.impl.removeVisits(params.arg_visits);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisits_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoveVisits FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeVisitByUrlAndTime');
          const result = this.impl.removeVisitByUrlAndTime(params.arg_url, params.arg_timestamp);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.history_clusters.mojom.PageHandler_RemoveVisitByUrlAndTime_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoveVisitByUrlAndTime FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_OpenVisitUrlsInTabGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openVisitUrlsInTabGroup');
          const result = this.impl.openVisitUrlsInTabGroup(params.arg_visits, params.arg_tab_group_name);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordVisitAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordVisitAction');
          const result = this.impl.recordVisitAction(params.arg_visit_action, params.arg_visit_index, params.arg_visit_type);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordRelatedSearchAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordRelatedSearchAction');
          const result = this.impl.recordRelatedSearchAction(params.arg_action, params.arg_visit_index);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordClusterAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordClusterAction');
          const result = this.impl.recordClusterAction(params.arg_cluster_action, params.arg_cluster_index);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.PageHandler_RecordToggledVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordToggledVisibility');
          const result = this.impl.recordToggledVisibility(params.arg_visible);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.history_clusters.mojom.PageHandlerReceiver = mojo.internal.bindings.history_clusters.mojom.PageHandlerReceiver;

mojo.internal.bindings.history_clusters.mojom.PageHandlerPtr = mojo.internal.bindings.history_clusters.mojom.PageHandlerRemote;
mojo.internal.bindings.history_clusters.mojom.PageHandlerRequest = mojo.internal.bindings.history_clusters.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.Page_OnClustersQueryResult_ParamsSpec, 'history_clusters.mojom.Page_OnClustersQueryResult_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.history_clusters.mojom.QueryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec, 'history_clusters.mojom.Page_OnClusterImageUpdated_Params', [
      mojo.internal.StructField('arg_image_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cluster_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec, 'history_clusters.mojom.Page_OnVisitsHidden_Params', [
      mojo.internal.StructField('arg_hidden_visits', 0, 0, mojo.internal.Array(mojo.internal.bindings.history_clusters.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec, 'history_clusters.mojom.Page_OnVisitsRemoved_Params', [
      mojo.internal.StructField('arg_removed_visits', 0, 0, mojo.internal.Array(mojo.internal.bindings.history_clusters.mojom.URLVisitSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec, 'history_clusters.mojom.Page_OnHistoryDeleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_clusters.mojom.Page_OnQueryChangedByUser_ParamsSpec, 'history_clusters.mojom.Page_OnQueryChangedByUser_Params', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.history_clusters.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.history_clusters.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'history_clusters.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.history_clusters.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.history_clusters.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onClustersQueryResult(arg_result) {
    return this.$.onClustersQueryResult(arg_result);
  }
  onClusterImageUpdated(arg_cluster_index, arg_image_url) {
    return this.$.onClusterImageUpdated(arg_cluster_index, arg_image_url);
  }
  onVisitsHidden(arg_hidden_visits) {
    return this.$.onVisitsHidden(arg_hidden_visits);
  }
  onVisitsRemoved(arg_removed_visits) {
    return this.$.onVisitsRemoved(arg_removed_visits);
  }
  onHistoryDeleted() {
    return this.$.onHistoryDeleted();
  }
  onQueryChangedByUser(arg_query) {
    return this.$.onQueryChangedByUser(arg_query);
  }
};

mojo.internal.bindings.history_clusters.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onClustersQueryResult(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.Page_OnClustersQueryResult_ParamsSpec,
      null,
      [arg_result],
      false);
  }

  onClusterImageUpdated(arg_cluster_index, arg_image_url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec,
      null,
      [arg_cluster_index, arg_image_url],
      false);
  }

  onVisitsHidden(arg_hidden_visits) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec,
      null,
      [arg_hidden_visits],
      false);
  }

  onVisitsRemoved(arg_removed_visits) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec,
      null,
      [arg_removed_visits],
      false);
  }

  onHistoryDeleted() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec,
      null,
      [],
      false);
  }

  onQueryChangedByUser(arg_query) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.history_clusters.mojom.Page_OnQueryChangedByUser_ParamsSpec,
      null,
      [arg_query],
      false);
  }

};

mojo.internal.bindings.history_clusters.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.history_clusters.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_clusters.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.history_clusters.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        // Try Method 0: OnClustersQueryResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.Page_OnClustersQueryResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClustersQueryResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnClusterImageUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClusterImageUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnVisitsHidden
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVisitsHidden (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnVisitsRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVisitsRemoved (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnHistoryDeleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHistoryDeleted (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnQueryChangedByUser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.Page_OnQueryChangedByUser_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnQueryChangedByUser (5)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.Page_OnClustersQueryResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClustersQueryResult');
          const result = this.impl.onClustersQueryResult(params.arg_result);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.Page_OnClusterImageUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClusterImageUpdated');
          const result = this.impl.onClusterImageUpdated(params.arg_cluster_index, params.arg_image_url);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.Page_OnVisitsHidden_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVisitsHidden');
          const result = this.impl.onVisitsHidden(params.arg_hidden_visits);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.Page_OnVisitsRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVisitsRemoved');
          const result = this.impl.onVisitsRemoved(params.arg_removed_visits);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.Page_OnHistoryDeleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHistoryDeleted');
          const result = this.impl.onHistoryDeleted();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_clusters.mojom.Page_OnQueryChangedByUser_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onQueryChangedByUser');
          const result = this.impl.onQueryChangedByUser(params.arg_query);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.history_clusters.mojom.PageReceiver = mojo.internal.bindings.history_clusters.mojom.PageReceiver;

mojo.internal.bindings.history_clusters.mojom.PagePtr = mojo.internal.bindings.history_clusters.mojom.PageRemote;
mojo.internal.bindings.history_clusters.mojom.PageRequest = mojo.internal.bindings.history_clusters.mojom.PagePendingReceiver;

