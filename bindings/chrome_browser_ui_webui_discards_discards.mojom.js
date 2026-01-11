// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/discards/discards.mojom
 // Module: discards.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.discards = mojo.internal.bindings.discards || {};
mojo.internal.bindings.discards.mojom = mojo.internal.bindings.discards.mojom || {};
mojo.internal.bindings.mojom = mojo.internal.bindings.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.discards.mojom.LifecycleUnitVisibilitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.discards.mojom.CanFreezeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.discards.mojom.TabDiscardsInfoSpec = { $: {} };
mojo.internal.bindings.discards.mojom.PageInfoSpec = { $: {} };
mojo.internal.bindings.discards.mojom.FrameInfoSpec = { $: {} };
mojo.internal.bindings.discards.mojom.ProcessInfoSpec = { $: {} };
mojo.internal.bindings.discards.mojom.WorkerInfoSpec = { $: {} };
mojo.internal.bindings.discards.mojom.FavIconInfoSpec = { $: {} };
mojo.internal.bindings.discards.mojom.DetailsProvider = {};
mojo.internal.bindings.discards.mojom.DetailsProviderSpec = { $ : {} };
mojo.internal.bindings.discards.mojom.DetailsProvider.$interfaceName = 'discards.mojom.DetailsProvider';
mojo.internal.bindings.discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.DetailsProvider_DiscardById_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.DetailsProvider_DiscardById_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.DetailsProvider_FreezeById_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.DetailsProvider_LoadById_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.DetailsProvider_Discard_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.DetailsProvider_Discard_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.GraphChangeStream = {};
mojo.internal.bindings.discards.mojom.GraphChangeStreamSpec = { $ : {} };
mojo.internal.bindings.discards.mojom.GraphChangeStream.$interfaceName = 'discards.mojom.GraphChangeStream';
mojo.internal.bindings.discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.GraphChangeStream_PageCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.GraphChangeStream_PageChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.GraphDump = {};
mojo.internal.bindings.discards.mojom.GraphDumpSpec = { $ : {} };
mojo.internal.bindings.discards.mojom.GraphDump.$interfaceName = 'discards.mojom.GraphDump';
mojo.internal.bindings.discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec = { $: {} };
mojo.internal.bindings.discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec = { $: {} };

// Enum: LifecycleUnitVisibility
mojo.internal.bindings.discards.mojom.LifecycleUnitVisibility = {
  HIDDEN: 0,
  OCCLUDED: 1,
  VISIBLE: 2,
};

// Enum: CanFreeze
mojo.internal.bindings.discards.mojom.CanFreeze = {
  YES: 0,
  VARIES: 1,
  NO: 2,
};

// Struct: TabDiscardsInfo
mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.TabDiscardsInfoSpec, 'discards.mojom.TabDiscardsInfo', [
      mojo.internal.StructField('arg_tab_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_visibility', 16, 0, mojo.internal.bindings.discards.mojom.LifecycleUnitVisibilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_loading_state', 24, 0, mojo.internal.bindings.mojom.LifecycleUnitLoadingStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 32, 0, mojo.internal.bindings.mojom.LifecycleUnitStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cannot_discard_reasons', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_can_freeze', 48, 0, mojo.internal.bindings.discards.mojom.CanFreezeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cannot_freeze_reasons', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_discard_reason', 64, 0, mojo.internal.bindings.mojom.LifecycleUnitDiscardReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_site_engagement_score', 72, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_state_change_time', 80, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_discard_count', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_utility_rank', 92, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_last_active_seconds', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_id', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_can_discard', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_auto_discardable', 104, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_focus', 104, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: PageInfo
mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.PageInfoSpec, 'discards.mojom.PageInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_main_frame_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_opener_frame_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_embedder_frame_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_description_json', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: FrameInfo
mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.FrameInfoSpec, 'discards.mojom.FrameInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_parent_frame_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_process_id', 32, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_description_json', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ProcessInfo
mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.ProcessInfoSpec, 'discards.mojom.ProcessInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pid', 8, 0, mojo.internal.bindings.mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_private_footprint_kb', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_description_json', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WorkerInfo
mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.WorkerInfoSpec, 'discards.mojom.WorkerInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_process_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_client_frame_ids', 24, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_client_worker_ids', 32, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_child_worker_ids', 40, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_description_json', 48, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: FavIconInfo
mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.FavIconInfoSpec, 'discards.mojom.FavIconInfo', [
      mojo.internal.StructField('arg_node_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_icon_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DetailsProvider
mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec, 'discards.mojom.DetailsProvider_GetTabDiscardsInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec, 'discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParams', [
      mojo.internal.StructField('arg_infos', 0, 0, mojo.internal.Array(mojo.internal.bindings.discards.mojom.TabDiscardsInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec, 'discards.mojom.DetailsProvider_SetAutoDiscardable_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_auto_discardable', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParamsSpec, 'discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.DetailsProvider_DiscardById_ParamsSpec, 'discards.mojom.DetailsProvider_DiscardById_Params', [
      mojo.internal.StructField('arg_reason', 0, 0, mojo.internal.bindings.mojom.LifecycleUnitDiscardReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.DetailsProvider_DiscardById_ResponseParamsSpec, 'discards.mojom.DetailsProvider_DiscardById_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.DetailsProvider_FreezeById_ParamsSpec, 'discards.mojom.DetailsProvider_FreezeById_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.DetailsProvider_LoadById_ParamsSpec, 'discards.mojom.DetailsProvider_LoadById_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.DetailsProvider_Discard_ParamsSpec, 'discards.mojom.DetailsProvider_Discard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.DetailsProvider_Discard_ResponseParamsSpec, 'discards.mojom.DetailsProvider_Discard_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec, 'discards.mojom.DetailsProvider_ToggleBatterySaverMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec, 'discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.discards.mojom.DetailsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.discards.mojom.DetailsProviderRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.DetailsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.discards.mojom.DetailsProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.discards.mojom.DetailsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getTabDiscardsInfo() {
    return this.$.getTabDiscardsInfo();
  }
  setAutoDiscardable(arg_tab_id, arg_is_auto_discardable) {
    return this.$.setAutoDiscardable(arg_tab_id, arg_is_auto_discardable);
  }
  discardById(arg_tab_id, arg_reason) {
    return this.$.discardById(arg_tab_id, arg_reason);
  }
  freezeById(arg_tab_id) {
    return this.$.freezeById(arg_tab_id);
  }
  loadById(arg_tab_id) {
    return this.$.loadById(arg_tab_id);
  }
  discard() {
    return this.$.discard();
  }
  toggleBatterySaverMode() {
    return this.$.toggleBatterySaverMode();
  }
  refreshPerformanceTabCpuMeasurements() {
    return this.$.refreshPerformanceTabCpuMeasurements();
  }
};

mojo.internal.bindings.discards.mojom.DetailsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('discards.mojom.DetailsProvider', [
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

  getTabDiscardsInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec,
      mojo.internal.bindings.discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec,
      [],
      false);
  }

  setAutoDiscardable(arg_tab_id, arg_is_auto_discardable) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec,
      mojo.internal.bindings.discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParamsSpec,
      [arg_tab_id, arg_is_auto_discardable],
      false);
  }

  discardById(arg_tab_id, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.discards.mojom.DetailsProvider_DiscardById_ParamsSpec,
      mojo.internal.bindings.discards.mojom.DetailsProvider_DiscardById_ResponseParamsSpec,
      [arg_tab_id, arg_reason],
      false);
  }

  freezeById(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.discards.mojom.DetailsProvider_FreezeById_ParamsSpec,
      null,
      [arg_tab_id],
      false);
  }

  loadById(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.discards.mojom.DetailsProvider_LoadById_ParamsSpec,
      null,
      [arg_tab_id],
      false);
  }

  discard() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.discards.mojom.DetailsProvider_Discard_ParamsSpec,
      mojo.internal.bindings.discards.mojom.DetailsProvider_Discard_ResponseParamsSpec,
      [],
      false);
  }

  toggleBatterySaverMode() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec,
      null,
      [],
      false);
  }

  refreshPerformanceTabCpuMeasurements() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.discards.mojom.DetailsProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.discards.mojom.DetailsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.DetailsProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.discards.mojom.DetailsProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('discards.mojom.DetailsProvider', [
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
        
        // Try Method 0: GetTabDiscardsInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabDiscardsInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetAutoDiscardable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAutoDiscardable (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DiscardById
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_DiscardById_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DiscardById (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: FreezeById
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_FreezeById_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FreezeById (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: LoadById
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_LoadById_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadById (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Discard
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_Discard_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Discard (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ToggleBatterySaverMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleBatterySaverMode (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RefreshPerformanceTabCpuMeasurements
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshPerformanceTabCpuMeasurements (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabDiscardsInfo');
          const result = this.impl.getTabDiscardsInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTabDiscardsInfo FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAutoDiscardable');
          const result = this.impl.setAutoDiscardable(params.arg_tab_id, params.arg_is_auto_discardable);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetAutoDiscardable FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_DiscardById_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.discardById');
          const result = this.impl.discardById(params.arg_tab_id, params.arg_reason);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.discards.mojom.DetailsProvider_DiscardById_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DiscardById FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_FreezeById_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.freezeById');
          const result = this.impl.freezeById(params.arg_tab_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_LoadById_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadById');
          const result = this.impl.loadById(params.arg_tab_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_Discard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.discard');
          const result = this.impl.discard();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.discards.mojom.DetailsProvider_Discard_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Discard FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.toggleBatterySaverMode');
          const result = this.impl.toggleBatterySaverMode();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.refreshPerformanceTabCpuMeasurements');
          const result = this.impl.refreshPerformanceTabCpuMeasurements();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.discards.mojom.DetailsProviderReceiver = mojo.internal.bindings.discards.mojom.DetailsProviderReceiver;

mojo.internal.bindings.discards.mojom.DetailsProviderPtr = mojo.internal.bindings.discards.mojom.DetailsProviderRemote;
mojo.internal.bindings.discards.mojom.DetailsProviderRequest = mojo.internal.bindings.discards.mojom.DetailsProviderPendingReceiver;


// Interface: GraphChangeStream
mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec, 'discards.mojom.GraphChangeStream_FrameCreated_Params', [
      mojo.internal.StructField('arg_frame', 0, 0, mojo.internal.bindings.discards.mojom.FrameInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.GraphChangeStream_PageCreated_ParamsSpec, 'discards.mojom.GraphChangeStream_PageCreated_Params', [
      mojo.internal.StructField('arg_pages', 0, 0, mojo.internal.bindings.discards.mojom.PageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec, 'discards.mojom.GraphChangeStream_ProcessCreated_Params', [
      mojo.internal.StructField('arg_process', 0, 0, mojo.internal.bindings.discards.mojom.ProcessInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec, 'discards.mojom.GraphChangeStream_WorkerCreated_Params', [
      mojo.internal.StructField('arg_worker', 0, 0, mojo.internal.bindings.discards.mojom.WorkerInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec, 'discards.mojom.GraphChangeStream_FrameChanged_Params', [
      mojo.internal.StructField('arg_frame', 0, 0, mojo.internal.bindings.discards.mojom.FrameInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.GraphChangeStream_PageChanged_ParamsSpec, 'discards.mojom.GraphChangeStream_PageChanged_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.bindings.discards.mojom.PageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec, 'discards.mojom.GraphChangeStream_ProcessChanged_Params', [
      mojo.internal.StructField('arg_process', 0, 0, mojo.internal.bindings.discards.mojom.ProcessInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec, 'discards.mojom.GraphChangeStream_WorkerChanged_Params', [
      mojo.internal.StructField('arg_worker', 0, 0, mojo.internal.bindings.discards.mojom.WorkerInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec, 'discards.mojom.GraphChangeStream_FavIconDataAvailable_Params', [
      mojo.internal.StructField('arg_favicon', 0, 0, mojo.internal.bindings.discards.mojom.FavIconInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec, 'discards.mojom.GraphChangeStream_NodeDeleted_Params', [
      mojo.internal.StructField('arg_node_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.discards.mojom.GraphChangeStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.discards.mojom.GraphChangeStreamRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.GraphChangeStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.discards.mojom.GraphChangeStreamPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.discards.mojom.GraphChangeStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  frameCreated(arg_frame) {
    return this.$.frameCreated(arg_frame);
  }
  pageCreated(arg_pages) {
    return this.$.pageCreated(arg_pages);
  }
  processCreated(arg_process) {
    return this.$.processCreated(arg_process);
  }
  workerCreated(arg_worker) {
    return this.$.workerCreated(arg_worker);
  }
  frameChanged(arg_frame) {
    return this.$.frameChanged(arg_frame);
  }
  pageChanged(arg_page) {
    return this.$.pageChanged(arg_page);
  }
  processChanged(arg_process) {
    return this.$.processChanged(arg_process);
  }
  workerChanged(arg_worker) {
    return this.$.workerChanged(arg_worker);
  }
  favIconDataAvailable(arg_favicon) {
    return this.$.favIconDataAvailable(arg_favicon);
  }
  nodeDeleted(arg_node_id) {
    return this.$.nodeDeleted(arg_node_id);
  }
};

mojo.internal.bindings.discards.mojom.GraphChangeStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('discards.mojom.GraphChangeStream', [
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

  frameCreated(arg_frame) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec,
      null,
      [arg_frame],
      false);
  }

  pageCreated(arg_pages) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.discards.mojom.GraphChangeStream_PageCreated_ParamsSpec,
      null,
      [arg_pages],
      false);
  }

  processCreated(arg_process) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec,
      null,
      [arg_process],
      false);
  }

  workerCreated(arg_worker) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec,
      null,
      [arg_worker],
      false);
  }

  frameChanged(arg_frame) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec,
      null,
      [arg_frame],
      false);
  }

  pageChanged(arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.discards.mojom.GraphChangeStream_PageChanged_ParamsSpec,
      null,
      [arg_page],
      false);
  }

  processChanged(arg_process) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec,
      null,
      [arg_process],
      false);
  }

  workerChanged(arg_worker) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec,
      null,
      [arg_worker],
      false);
  }

  favIconDataAvailable(arg_favicon) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec,
      null,
      [arg_favicon],
      false);
  }

  nodeDeleted(arg_node_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec,
      null,
      [arg_node_id],
      false);
  }

};

mojo.internal.bindings.discards.mojom.GraphChangeStream.getRemote = function() {
  let remote = new mojo.internal.bindings.discards.mojom.GraphChangeStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.GraphChangeStream',
    'context');
  return remote.$;
};

mojo.internal.bindings.discards.mojom.GraphChangeStreamReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('discards.mojom.GraphChangeStream', [
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
        
        // Try Method 0: FrameCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FrameCreated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PageCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_PageCreated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PageCreated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ProcessCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessCreated (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: WorkerCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WorkerCreated (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: FrameChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FrameChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: PageChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_PageChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PageChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ProcessChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: WorkerChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WorkerChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: FavIconDataAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FavIconDataAvailable (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: NodeDeleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NodeDeleted (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.frameCreated');
          const result = this.impl.frameCreated(params.arg_frame);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_PageCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pageCreated');
          const result = this.impl.pageCreated(params.arg_pages);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.processCreated');
          const result = this.impl.processCreated(params.arg_process);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.workerCreated');
          const result = this.impl.workerCreated(params.arg_worker);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.frameChanged');
          const result = this.impl.frameChanged(params.arg_frame);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_PageChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pageChanged');
          const result = this.impl.pageChanged(params.arg_page);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.processChanged');
          const result = this.impl.processChanged(params.arg_process);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.workerChanged');
          const result = this.impl.workerChanged(params.arg_worker);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.favIconDataAvailable');
          const result = this.impl.favIconDataAvailable(params.arg_favicon);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.nodeDeleted');
          const result = this.impl.nodeDeleted(params.arg_node_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.discards.mojom.GraphChangeStreamReceiver = mojo.internal.bindings.discards.mojom.GraphChangeStreamReceiver;

mojo.internal.bindings.discards.mojom.GraphChangeStreamPtr = mojo.internal.bindings.discards.mojom.GraphChangeStreamRemote;
mojo.internal.bindings.discards.mojom.GraphChangeStreamRequest = mojo.internal.bindings.discards.mojom.GraphChangeStreamPendingReceiver;


// Interface: GraphDump
mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec, 'discards.mojom.GraphDump_SubscribeToChanges_Params', [
      mojo.internal.StructField('arg_change_subscriber', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.discards.mojom.GraphChangeStreamRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec, 'discards.mojom.GraphDump_RequestNodeDescriptions_Params', [
      mojo.internal.StructField('arg_node_ids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec, 'discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParams', [
      mojo.internal.StructField('arg_node_descriptions_json', 0, 0, mojo.internal.Map(mojo.internal.Int64, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.discards.mojom.GraphDumpPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.discards.mojom.GraphDumpRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.GraphDump';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.discards.mojom.GraphDumpPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.discards.mojom.GraphDumpRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  subscribeToChanges(arg_change_subscriber) {
    return this.$.subscribeToChanges(arg_change_subscriber);
  }
  requestNodeDescriptions(arg_node_ids) {
    return this.$.requestNodeDescriptions(arg_node_ids);
  }
};

mojo.internal.bindings.discards.mojom.GraphDumpRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('discards.mojom.GraphDump', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  subscribeToChanges(arg_change_subscriber) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec,
      null,
      [arg_change_subscriber],
      false);
  }

  requestNodeDescriptions(arg_node_ids) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec,
      mojo.internal.bindings.discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec,
      [arg_node_ids],
      false);
  }

};

mojo.internal.bindings.discards.mojom.GraphDump.getRemote = function() {
  let remote = new mojo.internal.bindings.discards.mojom.GraphDumpRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.GraphDump',
    'context');
  return remote.$;
};

mojo.internal.bindings.discards.mojom.GraphDumpReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('discards.mojom.GraphDump', [
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
        
        // Try Method 0: SubscribeToChanges
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubscribeToChanges (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestNodeDescriptions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestNodeDescriptions (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToChanges');
          const result = this.impl.subscribeToChanges(params.arg_change_subscriber);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestNodeDescriptions');
          const result = this.impl.requestNodeDescriptions(params.arg_node_ids);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestNodeDescriptions FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.discards.mojom.GraphDumpReceiver = mojo.internal.bindings.discards.mojom.GraphDumpReceiver;

mojo.internal.bindings.discards.mojom.GraphDumpPtr = mojo.internal.bindings.discards.mojom.GraphDumpRemote;
mojo.internal.bindings.discards.mojom.GraphDumpRequest = mojo.internal.bindings.discards.mojom.GraphDumpPendingReceiver;

