// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/history/history.mojom
// Module: history.mojom

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
var history = history || {};
history.mojom = history.mojom || {};
var url = url || {};

history.mojom.FilteringBehaviorSpec = { $: mojo.internal.Enum() };
history.mojom.QueryStateSpec = { $: {} };
history.mojom.HistoryQuerySpec = { $: {} };
history.mojom.DebugInfoSpec = { $: {} };
history.mojom.HistoryEntrySpec = { $: {} };
history.mojom.QueryResultSpec = { $: {} };
history.mojom.RemovalItemSpec = { $: {} };
history.mojom.AccountInfoSpec = { $: {} };
history.mojom.PageHandler = {};
history.mojom.PageHandler.$interfaceName = 'history.mojom.PageHandler';
history.mojom.PageHandler_SetPage_ParamsSpec = { $: {} };
history.mojom.PageHandler_QueryHistory_ParamsSpec = { $: {} };
history.mojom.PageHandler_QueryHistory_ResponseParamsSpec = { $: {} };
history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec = { $: {} };
history.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec = { $: {} };
history.mojom.PageHandler_RemoveVisits_ParamsSpec = { $: {} };
history.mojom.PageHandler_RemoveVisits_ResponseParamsSpec = { $: {} };
history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec = { $: {} };
history.mojom.PageHandler_RemoveBookmark_ParamsSpec = { $: {} };
history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec = { $: {} };
history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec = { $: {} };
history.mojom.PageHandler_RequestAccountInfo_ParamsSpec = { $: {} };
history.mojom.PageHandler_RequestAccountInfo_ResponseParamsSpec = { $: {} };
history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec = { $: {} };
history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec = { $: {} };
history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec = { $: {} };
history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec = { $: {} };
history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec = { $: {} };
history.mojom.Page = {};
history.mojom.Page.$interfaceName = 'history.mojom.Page';
history.mojom.Page_OnHistoryDeleted_ParamsSpec = { $: {} };
history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec = { $: {} };
history.mojom.Page_SendAccountInfo_ParamsSpec = { $: {} };

// Enum: FilteringBehavior
history.mojom.FilteringBehavior = {
  kUnknown: -1,
  kAllow: 0,
  kBlock: 2,
  kInvalid: 3,
};

// Struct: QueryState
mojo.internal.Struct(
    history.mojom.QueryStateSpec, 'history.mojom.QueryState', [
      mojo.internal.StructField('search_term', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('after', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('incremental', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('querying', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HistoryQuery
mojo.internal.Struct(
    history.mojom.HistoryQuerySpec, 'history.mojom.HistoryQuery', [
      mojo.internal.StructField('term', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('finished', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DebugInfo
mojo.internal.Struct(
    history.mojom.DebugInfoSpec, 'history.mojom.DebugInfo', [
      mojo.internal.StructField('visit_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('typed_count', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_url_in_local_database', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HistoryEntry
mojo.internal.Struct(
    history.mojom.HistoryEntrySpec, 'history.mojom.HistoryEntry', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('domain', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fallback_favicon_text', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('time', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('all_timestamps', 40, 0, mojo.internal.Array(mojo.internal.Double, false), null, false, 0, undefined),
      mojo.internal.StructField('date_short', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_type', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('date_time_of_day', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('date_relative_day', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('readableTimestamp', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('snippet', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host_filtering_behavior', 104, 0, history.mojom.FilteringBehaviorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_icon_url_for_uma', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('debug', 120, 0, history.mojom.DebugInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('selected', 128, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('starred', 128, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('blocked_visit', 128, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_url_in_remote_user_data', 128, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_actor_visit', 128, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 144]]);

// Struct: QueryResult
mojo.internal.Struct(
    history.mojom.QueryResultSpec, 'history.mojom.QueryResult', [
      mojo.internal.StructField('info', 0, 0, history.mojom.HistoryQuerySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(history.mojom.HistoryEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RemovalItem
mojo.internal.Struct(
    history.mojom.RemovalItemSpec, 'history.mojom.RemovalItem', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timestamps', 8, 0, mojo.internal.Array(mojo.internal.Double, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AccountInfo
mojo.internal.Struct(
    history.mojom.AccountInfoSpec, 'history.mojom.AccountInfo', [
      mojo.internal.StructField('account_image_src', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('email', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandler
mojo.internal.Struct(
    history.mojom.PageHandler_SetPage_ParamsSpec, 'history.mojom.PageHandler_SetPage_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(history.mojom.PageSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_QueryHistory_ParamsSpec, 'history.mojom.PageHandler_QueryHistory_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('begin_time_$value', 8, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'begin_time_$flag', originalFieldName: 'begin_time' }),
      mojo.internal.StructField('max_results', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('begin_time_$flag', 20, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'begin_time_$value', originalFieldName: 'begin_time' }),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    history.mojom.PageHandler_QueryHistory_ResponseParamsSpec, 'history.mojom.PageHandler_QueryHistory_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, history.mojom.QueryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec, 'history.mojom.PageHandler_QueryHistoryContinuation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec, 'history.mojom.PageHandler_QueryHistoryContinuation_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, history.mojom.QueryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_RemoveVisits_ParamsSpec, 'history.mojom.PageHandler_RemoveVisits_Params', [
      mojo.internal.StructField('items', 0, 0, mojo.internal.Array(history.mojom.RemovalItemSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_RemoveVisits_ResponseParamsSpec, 'history.mojom.PageHandler_RemoveVisits_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec, 'history.mojom.PageHandler_OpenClearBrowsingDataDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_RemoveBookmark_ParamsSpec, 'history.mojom.PageHandler_RemoveBookmark_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec, 'history.mojom.PageHandler_SetLastSelectedTab_Params', [
      mojo.internal.StructField('last_tab', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec, 'history.mojom.PageHandler_ShowSidePanelUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_RequestAccountInfo_ParamsSpec, 'history.mojom.PageHandler_RequestAccountInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_RequestAccountInfo_ResponseParamsSpec, 'history.mojom.PageHandler_RequestAccountInfo_ResponseParams', [
      mojo.internal.StructField('account_info', 0, 0, history.mojom.AccountInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec, 'history.mojom.PageHandler_TurnOnHistorySync_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec, 'history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec, 'history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParams', [
      mojo.internal.StructField('should_show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec, 'history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec, 'history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_Params', [
    ],
    [[0, 8]]);

history.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'history.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new history.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setPage(page) {
    return this.$.setPage(page);
  }
  queryHistory(query, max_results, begin_time) {
    return this.$.queryHistory(query, max_results, begin_time);
  }
  queryHistoryContinuation() {
    return this.$.queryHistoryContinuation();
  }
  removeVisits(items) {
    return this.$.removeVisits(items);
  }
  openClearBrowsingDataDialog() {
    return this.$.openClearBrowsingDataDialog();
  }
  removeBookmark(url) {
    return this.$.removeBookmark(url);
  }
  setLastSelectedTab(last_tab) {
    return this.$.setLastSelectedTab(last_tab);
  }
  showSidePanelUI() {
    return this.$.showSidePanelUI();
  }
  requestAccountInfo() {
    return this.$.requestAccountInfo();
  }
  turnOnHistorySync() {
    return this.$.turnOnHistorySync();
  }
  shouldShowHistoryPageHistorySyncPromo() {
    return this.$.shouldShowHistoryPageHistorySyncPromo();
  }
  recordHistoryPageHistorySyncPromoDismissed() {
    return this.$.recordHistoryPageHistorySyncPromoDismissed();
  }
  incrementHistoryPageHistorySyncPromoShownCount() {
    return this.$.incrementHistoryPageHistorySyncPromoShownCount();
  }
};

history.mojom.PageHandlerRemoteCallHandler = class {
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
    ]);
  }

  setPage(page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page],
      false);
  }

  queryHistory(query, max_results, begin_time) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      history.mojom.PageHandler_QueryHistory_ParamsSpec,
      history.mojom.PageHandler_QueryHistory_ResponseParamsSpec,
      [query, max_results, begin_time],
      false);
  }

  queryHistoryContinuation() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec,
      history.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec,
      [],
      false);
  }

  removeVisits(items) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      history.mojom.PageHandler_RemoveVisits_ParamsSpec,
      history.mojom.PageHandler_RemoveVisits_ResponseParamsSpec,
      [items],
      false);
  }

  openClearBrowsingDataDialog() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec,
      null,
      [],
      false);
  }

  removeBookmark(url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      history.mojom.PageHandler_RemoveBookmark_ParamsSpec,
      null,
      [url],
      false);
  }

  setLastSelectedTab(last_tab) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec,
      null,
      [last_tab],
      false);
  }

  showSidePanelUI() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec,
      null,
      [],
      false);
  }

  requestAccountInfo() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      history.mojom.PageHandler_RequestAccountInfo_ParamsSpec,
      history.mojom.PageHandler_RequestAccountInfo_ResponseParamsSpec,
      [],
      false);
  }

  turnOnHistorySync() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec,
      null,
      [],
      false);
  }

  shouldShowHistoryPageHistorySyncPromo() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec,
      history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec,
      [],
      false);
  }

  recordHistoryPageHistorySyncPromoDismissed() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec,
      null,
      [],
      false);
  }

  incrementHistoryPageHistorySyncPromoShownCount() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec,
      null,
      [],
      false);
  }

};

history.mojom.PageHandler.getRemote = function() {
  let remote = new history.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history.mojom.PageHandler',
    'context');
  return remote.$;
};

history.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: SetPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_SetPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: QueryHistory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_QueryHistory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueryHistory (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: QueryHistoryContinuation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueryHistoryContinuation (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RemoveVisits
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_RemoveVisits_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveVisits (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenClearBrowsingDataDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenClearBrowsingDataDialog (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RemoveBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_RemoveBookmark_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveBookmark (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetLastSelectedTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLastSelectedTab (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ShowSidePanelUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowSidePanelUI (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RequestAccountInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_RequestAccountInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAccountInfo (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: TurnOnHistorySync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TurnOnHistorySync (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ShouldShowHistoryPageHistorySyncPromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldShowHistoryPageHistorySyncPromo (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RecordHistoryPageHistorySyncPromoDismissed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordHistoryPageHistorySyncPromoDismissed (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: IncrementHistoryPageHistorySyncPromoShownCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IncrementHistoryPageHistorySyncPromoShownCount (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(history.mojom.PageHandler_SetPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPage');
          const result = this.impl.setPage(params.page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_QueryHistory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queryHistory');
          const result = this.impl.queryHistory(params.query, params.max_results, params.begin_time);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history.mojom.PageHandler_QueryHistory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] QueryHistory FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_QueryHistoryContinuation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queryHistoryContinuation');
          const result = this.impl.queryHistoryContinuation();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history.mojom.PageHandler_QueryHistoryContinuation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] QueryHistoryContinuation FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_RemoveVisits_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeVisits');
          const result = this.impl.removeVisits(params.items);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history.mojom.PageHandler_RemoveVisits_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoveVisits FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_OpenClearBrowsingDataDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openClearBrowsingDataDialog');
          const result = this.impl.openClearBrowsingDataDialog();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_RemoveBookmark_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeBookmark');
          const result = this.impl.removeBookmark(params.url);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_SetLastSelectedTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLastSelectedTab');
          const result = this.impl.setLastSelectedTab(params.last_tab);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_ShowSidePanelUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showSidePanelUI');
          const result = this.impl.showSidePanelUI();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_RequestAccountInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestAccountInfo');
          const result = this.impl.requestAccountInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history.mojom.PageHandler_RequestAccountInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestAccountInfo FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_TurnOnHistorySync_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.turnOnHistorySync');
          const result = this.impl.turnOnHistorySync();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldShowHistoryPageHistorySyncPromo');
          const result = this.impl.shouldShowHistoryPageHistorySyncPromo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, history.mojom.PageHandler_ShouldShowHistoryPageHistorySyncPromo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShouldShowHistoryPageHistorySyncPromo FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_RecordHistoryPageHistorySyncPromoDismissed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordHistoryPageHistorySyncPromoDismissed');
          const result = this.impl.recordHistoryPageHistorySyncPromoDismissed();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.PageHandler_IncrementHistoryPageHistorySyncPromoShownCount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.incrementHistoryPageHistorySyncPromoShownCount');
          const result = this.impl.incrementHistoryPageHistorySyncPromoShownCount();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

history.mojom.PageHandlerReceiver = history.mojom.PageHandlerReceiver;

history.mojom.PageHandlerPtr = history.mojom.PageHandlerRemote;
history.mojom.PageHandlerRequest = history.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    history.mojom.Page_OnHistoryDeleted_ParamsSpec, 'history.mojom.Page_OnHistoryDeleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec, 'history.mojom.Page_OnHasOtherFormsChanged_Params', [
      mojo.internal.StructField('has_other_forms', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    history.mojom.Page_SendAccountInfo_ParamsSpec, 'history.mojom.Page_SendAccountInfo_Params', [
      mojo.internal.StructField('account_info', 0, 0, history.mojom.AccountInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

history.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'history.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history.mojom.PagePendingReceiver,
      handle);
    this.$ = new history.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onHistoryDeleted() {
    return this.$.onHistoryDeleted();
  }
  onHasOtherFormsChanged(has_other_forms) {
    return this.$.onHasOtherFormsChanged(has_other_forms);
  }
  sendAccountInfo(account_info) {
    return this.$.sendAccountInfo(account_info);
  }
};

history.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onHistoryDeleted() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      history.mojom.Page_OnHistoryDeleted_ParamsSpec,
      null,
      [],
      false);
  }

  onHasOtherFormsChanged(has_other_forms) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec,
      null,
      [has_other_forms],
      false);
  }

  sendAccountInfo(account_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      history.mojom.Page_SendAccountInfo_ParamsSpec,
      null,
      [account_info],
      false);
  }

};

history.mojom.Page.getRemote = function() {
  let remote = new history.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history.mojom.Page',
    'context');
  return remote.$;
};

history.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        // Try Method 0: OnHistoryDeleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.Page_OnHistoryDeleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHistoryDeleted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnHasOtherFormsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHasOtherFormsChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SendAccountInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(history.mojom.Page_SendAccountInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendAccountInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(history.mojom.Page_OnHistoryDeleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHistoryDeleted');
          const result = this.impl.onHistoryDeleted();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.Page_OnHasOtherFormsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHasOtherFormsChanged');
          const result = this.impl.onHasOtherFormsChanged(params.has_other_forms);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(history.mojom.Page_SendAccountInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendAccountInfo');
          const result = this.impl.sendAccountInfo(params.account_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

history.mojom.PageReceiver = history.mojom.PageReceiver;

history.mojom.PagePtr = history.mojom.PageRemote;
history.mojom.PageRequest = history.mojom.PagePendingReceiver;

