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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var discards = discards || {};
discards.mojom = discards.mojom || {};
var mojom = mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

discards.mojom.LifecycleUnitVisibilitySpec = { $: mojo.internal.Enum() };
discards.mojom.CanFreezeSpec = { $: mojo.internal.Enum() };
discards.mojom.TabDiscardsInfoSpec = { $: {} };
discards.mojom.PageInfoSpec = { $: {} };
discards.mojom.FrameInfoSpec = { $: {} };
discards.mojom.ProcessInfoSpec = { $: {} };
discards.mojom.WorkerInfoSpec = { $: {} };
discards.mojom.FavIconInfoSpec = { $: {} };
discards.mojom.DetailsProvider = {};
discards.mojom.DetailsProvider.$interfaceName = 'discards.mojom.DetailsProvider';
discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec = { $: {} };
discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParamsSpec = { $: {} };
discards.mojom.DetailsProvider_DiscardById_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_DiscardById_ResponseParamsSpec = { $: {} };
discards.mojom.DetailsProvider_FreezeById_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_LoadById_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_Discard_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_Discard_ResponseParamsSpec = { $: {} };
discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream = {};
discards.mojom.GraphChangeStream.$interfaceName = 'discards.mojom.GraphChangeStream';
discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_PageCreated_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_PageChanged_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec = { $: {} };
discards.mojom.GraphDump = {};
discards.mojom.GraphDump.$interfaceName = 'discards.mojom.GraphDump';
discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec = { $: {} };
discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec = { $: {} };
discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec = { $: {} };

// Enum: LifecycleUnitVisibility
discards.mojom.LifecycleUnitVisibility = {
  HIDDEN: 0,
  OCCLUDED: 1,
  VISIBLE: 2,
};

// Enum: CanFreeze
discards.mojom.CanFreeze = {
  YES: 0,
  VARIES: 1,
  NO: 2,
};

// Struct: TabDiscardsInfo
mojo.internal.Struct(
    discards.mojom.TabDiscardsInfoSpec, 'discards.mojom.TabDiscardsInfo', [
      mojo.internal.StructField('tab_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('visibility', 16, 0, discards.mojom.LifecycleUnitVisibilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('loading_state', 24, 0, mojom.LifecycleUnitLoadingStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('state', 32, 0, mojom.LifecycleUnitStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cannot_discard_reasons', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('can_freeze', 48, 0, discards.mojom.CanFreezeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cannot_freeze_reasons', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('discard_reason', 64, 0, mojom.LifecycleUnitDiscardReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_engagement_score', 72, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('state_change_time', 80, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('discard_count', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('utility_rank', 92, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('last_active_seconds', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('id', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('can_discard', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_auto_discardable', 104, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_focus', 104, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: PageInfo
mojo.internal.Struct(
    discards.mojom.PageInfoSpec, 'discards.mojom.PageInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('main_frame_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('opener_frame_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('embedder_frame_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('description_json', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: FrameInfo
mojo.internal.Struct(
    discards.mojom.FrameInfoSpec, 'discards.mojom.FrameInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('parent_frame_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('process_id', 32, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('description_json', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ProcessInfo
mojo.internal.Struct(
    discards.mojom.ProcessInfoSpec, 'discards.mojom.ProcessInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('pid', 8, 0, mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('private_footprint_kb', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('description_json', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WorkerInfo
mojo.internal.Struct(
    discards.mojom.WorkerInfoSpec, 'discards.mojom.WorkerInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('process_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('client_frame_ids', 24, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('client_worker_ids', 32, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('child_worker_ids', 40, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('description_json', 48, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: FavIconInfo
mojo.internal.Struct(
    discards.mojom.FavIconInfoSpec, 'discards.mojom.FavIconInfo', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('icon_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DetailsProvider
mojo.internal.Struct(
    discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec, 'discards.mojom.DetailsProvider_GetTabDiscardsInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec, 'discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParams', [
      mojo.internal.StructField('infos', 0, 0, mojo.internal.Array(discards.mojom.TabDiscardsInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec, 'discards.mojom.DetailsProvider_SetAutoDiscardable_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_auto_discardable', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParamsSpec, 'discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_DiscardById_ParamsSpec, 'discards.mojom.DetailsProvider_DiscardById_Params', [
      mojo.internal.StructField('reason', 0, 0, mojom.LifecycleUnitDiscardReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_DiscardById_ResponseParamsSpec, 'discards.mojom.DetailsProvider_DiscardById_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_FreezeById_ParamsSpec, 'discards.mojom.DetailsProvider_FreezeById_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_LoadById_ParamsSpec, 'discards.mojom.DetailsProvider_LoadById_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_Discard_ParamsSpec, 'discards.mojom.DetailsProvider_Discard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_Discard_ResponseParamsSpec, 'discards.mojom.DetailsProvider_Discard_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec, 'discards.mojom.DetailsProvider_ToggleBatterySaverMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec, 'discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_Params', [
    ],
    [[0, 8]]);

discards.mojom.DetailsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discards.mojom.DetailsProviderRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.DetailsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discards.mojom.DetailsProviderPendingReceiver,
      handle);
    this.$ = new discards.mojom.DetailsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

discards.mojom.DetailsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DetailsProvider', [
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
      discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec,
      discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec,
      [],
      false);
  }

  setAutoDiscardable(tab_id, is_auto_discardable) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec,
      discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParamsSpec,
      [tab_id, is_auto_discardable],
      false);
  }

  discardById(tab_id, reason) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      discards.mojom.DetailsProvider_DiscardById_ParamsSpec,
      discards.mojom.DetailsProvider_DiscardById_ResponseParamsSpec,
      [tab_id, reason],
      false);
  }

  freezeById(tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      discards.mojom.DetailsProvider_FreezeById_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  loadById(tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      discards.mojom.DetailsProvider_LoadById_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  discard() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      discards.mojom.DetailsProvider_Discard_ParamsSpec,
      discards.mojom.DetailsProvider_Discard_ResponseParamsSpec,
      [],
      false);
  }

  toggleBatterySaverMode() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec,
      null,
      [],
      false);
  }

  refreshPerformanceTabCpuMeasurements() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec,
      null,
      [],
      false);
  }

};

discards.mojom.DetailsProvider.getRemote = function() {
  let remote = new discards.mojom.DetailsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.DetailsProvider',
    'context');
  return remote.$;
};

discards.mojom.DetailsProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DetailsProvider', [
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
             decoder.decodeStructInline(discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.DetailsProvider_DiscardById_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.DetailsProvider_FreezeById_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.DetailsProvider_LoadById_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.DetailsProvider_Discard_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec);
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
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabDiscardsInfo');
          const result = this.impl.getTabDiscardsInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setAutoDiscardable');
          const result = this.impl.setAutoDiscardable(params.tab_id, params.is_auto_discardable);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_DiscardById_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.discardById');
          const result = this.impl.discardById(params.tab_id, params.reason);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, discards.mojom.DetailsProvider_DiscardById_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_FreezeById_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.freezeById');
          const result = this.impl.freezeById(params.tab_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_LoadById_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.loadById');
          const result = this.impl.loadById(params.tab_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_Discard_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.discard');
          const result = this.impl.discard();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, discards.mojom.DetailsProvider_Discard_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.toggleBatterySaverMode');
          const result = this.impl.toggleBatterySaverMode();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec);
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

discards.mojom.DetailsProviderReceiver = discards.mojom.DetailsProviderReceiver;

discards.mojom.DetailsProviderPtr = discards.mojom.DetailsProviderRemote;
discards.mojom.DetailsProviderRequest = discards.mojom.DetailsProviderPendingReceiver;


// Interface: GraphChangeStream
mojo.internal.Struct(
    discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec, 'discards.mojom.GraphChangeStream_FrameCreated_Params', [
      mojo.internal.StructField('frame', 0, 0, discards.mojom.FrameInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_PageCreated_ParamsSpec, 'discards.mojom.GraphChangeStream_PageCreated_Params', [
      mojo.internal.StructField('pages', 0, 0, discards.mojom.PageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec, 'discards.mojom.GraphChangeStream_ProcessCreated_Params', [
      mojo.internal.StructField('process', 0, 0, discards.mojom.ProcessInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec, 'discards.mojom.GraphChangeStream_WorkerCreated_Params', [
      mojo.internal.StructField('worker', 0, 0, discards.mojom.WorkerInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec, 'discards.mojom.GraphChangeStream_FrameChanged_Params', [
      mojo.internal.StructField('frame', 0, 0, discards.mojom.FrameInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_PageChanged_ParamsSpec, 'discards.mojom.GraphChangeStream_PageChanged_Params', [
      mojo.internal.StructField('page', 0, 0, discards.mojom.PageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec, 'discards.mojom.GraphChangeStream_ProcessChanged_Params', [
      mojo.internal.StructField('process', 0, 0, discards.mojom.ProcessInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec, 'discards.mojom.GraphChangeStream_WorkerChanged_Params', [
      mojo.internal.StructField('worker', 0, 0, discards.mojom.WorkerInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec, 'discards.mojom.GraphChangeStream_FavIconDataAvailable_Params', [
      mojo.internal.StructField('favicon', 0, 0, discards.mojom.FavIconInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec, 'discards.mojom.GraphChangeStream_NodeDeleted_Params', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

discards.mojom.GraphChangeStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discards.mojom.GraphChangeStreamRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.GraphChangeStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discards.mojom.GraphChangeStreamPendingReceiver,
      handle);
    this.$ = new discards.mojom.GraphChangeStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

discards.mojom.GraphChangeStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GraphChangeStream', [
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

  frameCreated(frame) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec,
      null,
      [frame],
      false);
  }

  pageCreated(pages) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      discards.mojom.GraphChangeStream_PageCreated_ParamsSpec,
      null,
      [pages],
      false);
  }

  processCreated(process) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec,
      null,
      [process],
      false);
  }

  workerCreated(worker) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec,
      null,
      [worker],
      false);
  }

  frameChanged(frame) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec,
      null,
      [frame],
      false);
  }

  pageChanged(page) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      discards.mojom.GraphChangeStream_PageChanged_ParamsSpec,
      null,
      [page],
      false);
  }

  processChanged(process) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec,
      null,
      [process],
      false);
  }

  workerChanged(worker) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec,
      null,
      [worker],
      false);
  }

  favIconDataAvailable(favicon) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec,
      null,
      [favicon],
      false);
  }

  nodeDeleted(node_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec,
      null,
      [node_id],
      false);
  }

};

discards.mojom.GraphChangeStream.getRemote = function() {
  let remote = new discards.mojom.GraphChangeStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.GraphChangeStream',
    'context');
  return remote.$;
};

discards.mojom.GraphChangeStreamReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GraphChangeStream', [
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
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_PageCreated_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_PageChanged_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec);
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
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.frameCreated');
          const result = this.impl.frameCreated(params.frame);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_PageCreated_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.pageCreated');
          const result = this.impl.pageCreated(params.pages);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.processCreated');
          const result = this.impl.processCreated(params.process);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.workerCreated');
          const result = this.impl.workerCreated(params.worker);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.frameChanged');
          const result = this.impl.frameChanged(params.frame);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_PageChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.pageChanged');
          const result = this.impl.pageChanged(params.page);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.processChanged');
          const result = this.impl.processChanged(params.process);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.workerChanged');
          const result = this.impl.workerChanged(params.worker);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.favIconDataAvailable');
          const result = this.impl.favIconDataAvailable(params.favicon);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.nodeDeleted');
          const result = this.impl.nodeDeleted(params.node_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

discards.mojom.GraphChangeStreamReceiver = discards.mojom.GraphChangeStreamReceiver;

discards.mojom.GraphChangeStreamPtr = discards.mojom.GraphChangeStreamRemote;
discards.mojom.GraphChangeStreamRequest = discards.mojom.GraphChangeStreamPendingReceiver;


// Interface: GraphDump
mojo.internal.Struct(
    discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec, 'discards.mojom.GraphDump_SubscribeToChanges_Params', [
      mojo.internal.StructField('change_subscriber', 0, 0, mojo.internal.InterfaceProxy(discards.mojom.GraphChangeStreamSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec, 'discards.mojom.GraphDump_RequestNodeDescriptions_Params', [
      mojo.internal.StructField('node_ids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec, 'discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParams', [
      mojo.internal.StructField('node_descriptions_json', 0, 0, mojo.internal.Map(mojo.internal.Int64, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

discards.mojom.GraphDumpPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discards.mojom.GraphDumpRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.GraphDump';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discards.mojom.GraphDumpPendingReceiver,
      handle);
    this.$ = new discards.mojom.GraphDumpRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

discards.mojom.GraphDumpRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GraphDump', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  subscribeToChanges(change_subscriber) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec,
      null,
      [change_subscriber],
      false);
  }

  requestNodeDescriptions(node_ids) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec,
      discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec,
      [node_ids],
      false);
  }

};

discards.mojom.GraphDump.getRemote = function() {
  let remote = new discards.mojom.GraphDumpRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.GraphDump',
    'context');
  return remote.$;
};

discards.mojom.GraphDumpReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GraphDump', [
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
             decoder.decodeStructInline(discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec);
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
             decoder.decodeStructInline(discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec);
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
          const params = decoder.decodeStructInline(discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToChanges');
          const result = this.impl.subscribeToChanges(params.change_subscriber);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.requestNodeDescriptions');
          const result = this.impl.requestNodeDescriptions(params.node_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec);
               responder(response);
            });
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

discards.mojom.GraphDumpReceiver = discards.mojom.GraphDumpReceiver;

discards.mojom.GraphDumpPtr = discards.mojom.GraphDumpRemote;
discards.mojom.GraphDumpRequest = discards.mojom.GraphDumpPendingReceiver;

