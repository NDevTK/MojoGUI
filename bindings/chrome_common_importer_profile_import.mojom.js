// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/common/importer/profile_import.mojom
 // Module: chrome.mojom

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
 

 mojo.internal.bindings.chrome = mojo.internal.bindings.chrome || {};
mojo.internal.bindings.chrome.mojom = mojo.internal.bindings.chrome.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.chrome.mojom.ImportItemSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.SchemeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.ImportedBookmarkEntrySpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ImporterAutofillFormDataEntrySpec = { $: {} };
mojo.internal.bindings.chrome.mojom.SearchEngineInfoSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ImporterURLRowSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.SourceProfileSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.FaviconUsageDataListSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ImporterIE7PasswordInfoSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ImportedPasswordFormSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver = {};
mojo.internal.bindings.chrome.mojom.ProfileImportObserverSpec = { $ : {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver.$interfaceName = 'chrome.mojom.ProfileImportObserver';
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImport = {};
mojo.internal.bindings.chrome.mojom.ProfileImportSpec = { $ : {} };
mojo.internal.bindings.chrome.mojom.ProfileImport.$interfaceName = 'chrome.mojom.ProfileImport';
mojo.internal.bindings.chrome.mojom.ProfileImport_StartImport_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImport_CancelImport_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec = { $: {} };

// Enum: ImportItem
mojo.internal.bindings.chrome.mojom.ImportItem = {
};

// Enum: Scheme
mojo.internal.bindings.chrome.mojom.Scheme = {
  kHtml: 0,
  kBasic: 1,
};

// Struct: ImportedBookmarkEntry
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ImportedBookmarkEntrySpec, 'chrome.mojom.ImportedBookmarkEntry', [
    ],
    [[0, 8]]);

// Struct: ImporterAutofillFormDataEntry
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ImporterAutofillFormDataEntrySpec, 'chrome.mojom.ImporterAutofillFormDataEntry', [
    ],
    [[0, 8]]);

// Struct: SearchEngineInfo
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.SearchEngineInfoSpec, 'chrome.mojom.SearchEngineInfo', [
    ],
    [[0, 8]]);

// Struct: ImporterURLRow
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ImporterURLRowSpec, 'chrome.mojom.ImporterURLRow', [
    ],
    [[0, 8]]);

// Struct: SourceProfile
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.SourceProfileSpec, 'chrome.mojom.SourceProfile', [
    ],
    [[0, 8]]);

// Struct: FaviconUsageDataList
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.FaviconUsageDataListSpec, 'chrome.mojom.FaviconUsageDataList', [
    ],
    [[0, 8]]);

// Struct: ImporterIE7PasswordInfo
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ImporterIE7PasswordInfoSpec, 'chrome.mojom.ImporterIE7PasswordInfo', [
    ],
    [[0, 8]]);

// Struct: ImportedPasswordForm
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ImportedPasswordFormSpec, 'chrome.mojom.ImportedPasswordForm', [
      mojo.internal.StructField('arg_kHtml', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ProfileImportObserver
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnImportStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnImportFinished_Params', [
      mojo.internal.StructField('arg_error_msg', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_succeeded', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnImportItemStart_Params', [
      mojo.internal.StructField('arg_item', 0, 0, mojo.internal.bindings.chrome.mojom.ImportItemSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnImportItemFinished_Params', [
      mojo.internal.StructField('arg_item', 0, 0, mojo.internal.bindings.chrome.mojom.ImportItemSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnHistoryImportStart_Params', [
      mojo.internal.StructField('arg_total_history_rows_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_Params', [
      mojo.internal.StructField('arg_history_rows_group', 0, 0, mojo.internal.Array(mojo.internal.bindings.chrome.mojom.ImporterURLRowSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_visit_source', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnHomePageImportReady_Params', [
      mojo.internal.StructField('arg_home_page', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_Params', [
      mojo.internal.StructField('arg_first_folder_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_total_bookmarks_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_Params', [
      mojo.internal.StructField('arg_bookmarks_group', 0, 0, mojo.internal.Array(mojo.internal.bindings.chrome.mojom.ImportedBookmarkEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_Params', [
      mojo.internal.StructField('arg_total_favicons_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_Params', [
      mojo.internal.StructField('arg_favicons_group', 0, 0, mojo.internal.bindings.chrome.mojom.FaviconUsageDataListSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_Params', [
      mojo.internal.StructField('arg_form', 0, 0, mojo.internal.bindings.chrome.mojom.ImportedPasswordFormSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_Params', [
      mojo.internal.StructField('arg_search_engines', 0, 0, mojo.internal.Array(mojo.internal.bindings.chrome.mojom.SearchEngineInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_unique_on_host_and_path', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_Params', [
      mojo.internal.StructField('arg_total_autofill_form_data_entry_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_Params', [
      mojo.internal.StructField('arg_autofill_form_data_entry_group', 0, 0, mojo.internal.Array(mojo.internal.bindings.chrome.mojom.ImporterAutofillFormDataEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chrome.mojom.ProfileImportObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.ProfileImportObserverRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ProfileImportObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.ProfileImportObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.ProfileImportObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onImportStart() {
    return this.$.onImportStart();
  }
  onImportFinished(arg_succeeded, arg_error_msg) {
    return this.$.onImportFinished(arg_succeeded, arg_error_msg);
  }
  onImportItemStart(arg_item) {
    return this.$.onImportItemStart(arg_item);
  }
  onImportItemFinished(arg_item) {
    return this.$.onImportItemFinished(arg_item);
  }
  onHistoryImportStart(arg_total_history_rows_count) {
    return this.$.onHistoryImportStart(arg_total_history_rows_count);
  }
  onHistoryImportGroup(arg_history_rows_group, arg_visit_source) {
    return this.$.onHistoryImportGroup(arg_history_rows_group, arg_visit_source);
  }
  onHomePageImportReady(arg_home_page) {
    return this.$.onHomePageImportReady(arg_home_page);
  }
  onBookmarksImportStart(arg_first_folder_name, arg_total_bookmarks_count) {
    return this.$.onBookmarksImportStart(arg_first_folder_name, arg_total_bookmarks_count);
  }
  onBookmarksImportGroup(arg_bookmarks_group) {
    return this.$.onBookmarksImportGroup(arg_bookmarks_group);
  }
  onFaviconsImportStart(arg_total_favicons_count) {
    return this.$.onFaviconsImportStart(arg_total_favicons_count);
  }
  onFaviconsImportGroup(arg_favicons_group) {
    return this.$.onFaviconsImportGroup(arg_favicons_group);
  }
  onPasswordFormImportReady(arg_form) {
    return this.$.onPasswordFormImportReady(arg_form);
  }
  onKeywordsImportReady(arg_search_engines, arg_unique_on_host_and_path) {
    return this.$.onKeywordsImportReady(arg_search_engines, arg_unique_on_host_and_path);
  }
  onAutofillFormDataImportStart(arg_total_autofill_form_data_entry_count) {
    return this.$.onAutofillFormDataImportStart(arg_total_autofill_form_data_entry_count);
  }
  onAutofillFormDataImportGroup(arg_autofill_form_data_entry_group) {
    return this.$.onAutofillFormDataImportGroup(arg_autofill_form_data_entry_group);
  }
};

mojo.internal.bindings.chrome.mojom.ProfileImportObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.ProfileImportObserver', [
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

  onImportStart() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec,
      null,
      [],
      false);
  }

  onImportFinished(arg_succeeded, arg_error_msg) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec,
      null,
      [arg_succeeded, arg_error_msg],
      false);
  }

  onImportItemStart(arg_item) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec,
      null,
      [arg_item],
      false);
  }

  onImportItemFinished(arg_item) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec,
      null,
      [arg_item],
      false);
  }

  onHistoryImportStart(arg_total_history_rows_count) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec,
      null,
      [arg_total_history_rows_count],
      false);
  }

  onHistoryImportGroup(arg_history_rows_group, arg_visit_source) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec,
      null,
      [arg_history_rows_group, arg_visit_source],
      false);
  }

  onHomePageImportReady(arg_home_page) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec,
      null,
      [arg_home_page],
      false);
  }

  onBookmarksImportStart(arg_first_folder_name, arg_total_bookmarks_count) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec,
      null,
      [arg_first_folder_name, arg_total_bookmarks_count],
      false);
  }

  onBookmarksImportGroup(arg_bookmarks_group) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec,
      null,
      [arg_bookmarks_group],
      false);
  }

  onFaviconsImportStart(arg_total_favicons_count) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec,
      null,
      [arg_total_favicons_count],
      false);
  }

  onFaviconsImportGroup(arg_favicons_group) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec,
      null,
      [arg_favicons_group],
      false);
  }

  onPasswordFormImportReady(arg_form) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec,
      null,
      [arg_form],
      false);
  }

  onKeywordsImportReady(arg_search_engines, arg_unique_on_host_and_path) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec,
      null,
      [arg_search_engines, arg_unique_on_host_and_path],
      false);
  }

  onAutofillFormDataImportStart(arg_total_autofill_form_data_entry_count) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec,
      null,
      [arg_total_autofill_form_data_entry_count],
      false);
  }

  onAutofillFormDataImportGroup(arg_autofill_form_data_entry_group) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec,
      null,
      [arg_autofill_form_data_entry_group],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.ProfileImportObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.ProfileImportObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ProfileImportObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.ProfileImportObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.ProfileImportObserver', [
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
        
        // Try Method 0: OnImportStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImportStart (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnImportFinished
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImportFinished (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnImportItemStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImportItemStart (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnImportItemFinished
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImportItemFinished (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnHistoryImportStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHistoryImportStart (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnHistoryImportGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHistoryImportGroup (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnHomePageImportReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHomePageImportReady (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnBookmarksImportStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBookmarksImportStart (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnBookmarksImportGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBookmarksImportGroup (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnFaviconsImportStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFaviconsImportStart (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnFaviconsImportGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFaviconsImportGroup (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnPasswordFormImportReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPasswordFormImportReady (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnKeywordsImportReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeywordsImportReady (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OnAutofillFormDataImportStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAutofillFormDataImportStart (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OnAutofillFormDataImportGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAutofillFormDataImportGroup (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImportStart');
          const result = this.impl.onImportStart();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImportFinished');
          const result = this.impl.onImportFinished(params.arg_succeeded, params.arg_error_msg);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImportItemStart');
          const result = this.impl.onImportItemStart(params.arg_item);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImportItemFinished');
          const result = this.impl.onImportItemFinished(params.arg_item);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHistoryImportStart');
          const result = this.impl.onHistoryImportStart(params.arg_total_history_rows_count);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHistoryImportGroup');
          const result = this.impl.onHistoryImportGroup(params.arg_history_rows_group, params.arg_visit_source);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHomePageImportReady');
          const result = this.impl.onHomePageImportReady(params.arg_home_page);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBookmarksImportStart');
          const result = this.impl.onBookmarksImportStart(params.arg_first_folder_name, params.arg_total_bookmarks_count);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBookmarksImportGroup');
          const result = this.impl.onBookmarksImportGroup(params.arg_bookmarks_group);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFaviconsImportStart');
          const result = this.impl.onFaviconsImportStart(params.arg_total_favicons_count);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFaviconsImportGroup');
          const result = this.impl.onFaviconsImportGroup(params.arg_favicons_group);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPasswordFormImportReady');
          const result = this.impl.onPasswordFormImportReady(params.arg_form);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKeywordsImportReady');
          const result = this.impl.onKeywordsImportReady(params.arg_search_engines, params.arg_unique_on_host_and_path);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAutofillFormDataImportStart');
          const result = this.impl.onAutofillFormDataImportStart(params.arg_total_autofill_form_data_entry_count);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAutofillFormDataImportGroup');
          const result = this.impl.onAutofillFormDataImportGroup(params.arg_autofill_form_data_entry_group);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chrome.mojom.ProfileImportObserverReceiver = mojo.internal.bindings.chrome.mojom.ProfileImportObserverReceiver;

mojo.internal.bindings.chrome.mojom.ProfileImportObserverPtr = mojo.internal.bindings.chrome.mojom.ProfileImportObserverRemote;
mojo.internal.bindings.chrome.mojom.ProfileImportObserverRequest = mojo.internal.bindings.chrome.mojom.ProfileImportObserverPendingReceiver;


// Interface: ProfileImport
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImport_StartImport_ParamsSpec, 'chrome.mojom.ProfileImport_StartImport_Params', [
      mojo.internal.StructField('arg_source_profile', 0, 0, mojo.internal.bindings.chrome.mojom.SourceProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_localized_strings', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chrome.mojom.ProfileImportObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_items', 24, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImport_CancelImport_ParamsSpec, 'chrome.mojom.ProfileImport_CancelImport_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec, 'chrome.mojom.ProfileImport_ReportImportItemFinished_Params', [
      mojo.internal.StructField('arg_item', 0, 0, mojo.internal.bindings.chrome.mojom.ImportItemSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chrome.mojom.ProfileImportPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.ProfileImportRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ProfileImport';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.ProfileImportPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.ProfileImportRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startImport(arg_source_profile, arg_items, arg_localized_strings, arg_observer) {
    return this.$.startImport(arg_source_profile, arg_items, arg_localized_strings, arg_observer);
  }
  cancelImport() {
    return this.$.cancelImport();
  }
  reportImportItemFinished(arg_item) {
    return this.$.reportImportItemFinished(arg_item);
  }
};

mojo.internal.bindings.chrome.mojom.ProfileImportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.ProfileImport', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  startImport(arg_source_profile, arg_items, arg_localized_strings, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImport_StartImport_ParamsSpec,
      null,
      [arg_source_profile, arg_items, arg_localized_strings, arg_observer],
      false);
  }

  cancelImport() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImport_CancelImport_ParamsSpec,
      null,
      [],
      false);
  }

  reportImportItemFinished(arg_item) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec,
      null,
      [arg_item],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.ProfileImport.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.ProfileImportRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ProfileImport',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.ProfileImportReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.ProfileImport', [
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
        
        // Try Method 0: StartImport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImport_StartImport_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartImport (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CancelImport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImport_CancelImport_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelImport (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReportImportItemFinished
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportImportItemFinished (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImport_StartImport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startImport');
          const result = this.impl.startImport(params.arg_source_profile, params.arg_items, params.arg_localized_strings, params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImport_CancelImport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelImport');
          const result = this.impl.cancelImport();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportImportItemFinished');
          const result = this.impl.reportImportItemFinished(params.arg_item);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chrome.mojom.ProfileImportReceiver = mojo.internal.bindings.chrome.mojom.ProfileImportReceiver;

mojo.internal.bindings.chrome.mojom.ProfileImportPtr = mojo.internal.bindings.chrome.mojom.ProfileImportRemote;
mojo.internal.bindings.chrome.mojom.ProfileImportRequest = mojo.internal.bindings.chrome.mojom.ProfileImportPendingReceiver;

