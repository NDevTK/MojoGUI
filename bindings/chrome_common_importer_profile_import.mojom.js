// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/importer/profile_import.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var url = url || {};

chrome.mojom.SchemeSpec = { $: mojo.internal.Enum() };
chrome.mojom.ImportedPasswordFormSpec = { $: {} };
chrome.mojom.ProfileImportObserver = {};
chrome.mojom.ProfileImportObserver.$interfaceName = 'chrome.mojom.ProfileImportObserver';
chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec = { $: {} };
chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec = { $: {} };
chrome.mojom.ProfileImport = {};
chrome.mojom.ProfileImport.$interfaceName = 'chrome.mojom.ProfileImport';
chrome.mojom.ProfileImport_StartImport_ParamsSpec = { $: {} };
chrome.mojom.ProfileImport_CancelImport_ParamsSpec = { $: {} };
chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec = { $: {} };

// Enum: Scheme
chrome.mojom.Scheme = {
  kHtml: 0,
  kBasic: 1,
};

// Struct: ImportedPasswordForm
mojo.internal.Struct(
    chrome.mojom.ImportedPasswordFormSpec, 'chrome.mojom.ImportedPasswordForm', [
      mojo.internal.StructField('kHtml', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ProfileImportObserver
mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnImportStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnImportFinished_Params', [
      mojo.internal.StructField('error_msg', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('succeeded', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnImportItemStart_Params', [
      mojo.internal.StructField('item', 0, 0, chrome.mojom.ImportItemSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnImportItemFinished_Params', [
      mojo.internal.StructField('item', 0, 0, chrome.mojom.ImportItemSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnHistoryImportStart_Params', [
      mojo.internal.StructField('total_history_rows_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_Params', [
      mojo.internal.StructField('history_rows_group', 0, 0, mojo.internal.Array(chrome.mojom.ImporterURLRowSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('visit_source', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnHomePageImportReady_Params', [
      mojo.internal.StructField('home_page', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_Params', [
      mojo.internal.StructField('first_folder_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('total_bookmarks_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_Params', [
      mojo.internal.StructField('bookmarks_group', 0, 0, mojo.internal.Array(chrome.mojom.ImportedBookmarkEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_Params', [
      mojo.internal.StructField('total_favicons_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_Params', [
      mojo.internal.StructField('favicons_group', 0, 0, chrome.mojom.FaviconUsageDataListSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_Params', [
      mojo.internal.StructField('form', 0, 0, chrome.mojom.ImportedPasswordFormSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_Params', [
      mojo.internal.StructField('search_engines', 0, 0, mojo.internal.Array(chrome.mojom.SearchEngineInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('unique_on_host_and_path', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_Params', [
      mojo.internal.StructField('total_autofill_form_data_entry_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec, 'chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_Params', [
      mojo.internal.StructField('autofill_form_data_entry_group', 0, 0, mojo.internal.Array(chrome.mojom.ImporterAutofillFormDataEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.ProfileImportObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.ProfileImportObserverRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ProfileImportObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.ProfileImportObserverPendingReceiver,
      handle);
    this.$ = new chrome.mojom.ProfileImportObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.ProfileImportObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onImportStart() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec,
      null,
      [],
      false);
  }

  onImportFinished(succeeded, error_msg) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec,
      null,
      [succeeded, error_msg],
      false);
  }

  onImportItemStart(item) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec,
      null,
      [item],
      false);
  }

  onImportItemFinished(item) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec,
      null,
      [item],
      false);
  }

  onHistoryImportStart(total_history_rows_count) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec,
      null,
      [total_history_rows_count],
      false);
  }

  onHistoryImportGroup(history_rows_group, visit_source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec,
      null,
      [history_rows_group, visit_source],
      false);
  }

  onHomePageImportReady(home_page) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec,
      null,
      [home_page],
      false);
  }

  onBookmarksImportStart(first_folder_name, total_bookmarks_count) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec,
      null,
      [first_folder_name, total_bookmarks_count],
      false);
  }

  onBookmarksImportGroup(bookmarks_group) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec,
      null,
      [bookmarks_group],
      false);
  }

  onFaviconsImportStart(total_favicons_count) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec,
      null,
      [total_favicons_count],
      false);
  }

  onFaviconsImportGroup(favicons_group) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec,
      null,
      [favicons_group],
      false);
  }

  onPasswordFormImportReady(form) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec,
      null,
      [form],
      false);
  }

  onKeywordsImportReady(search_engines, unique_on_host_and_path) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec,
      null,
      [search_engines, unique_on_host_and_path],
      false);
  }

  onAutofillFormDataImportStart(total_autofill_form_data_entry_count) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec,
      null,
      [total_autofill_form_data_entry_count],
      false);
  }

  onAutofillFormDataImportGroup(autofill_form_data_entry_group) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec,
      null,
      [autofill_form_data_entry_group],
      false);
  }

};

chrome.mojom.ProfileImportObserver.getRemote = function() {
  let remote = new chrome.mojom.ProfileImportObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ProfileImportObserver',
    'context');
  return remote.$;
};

chrome.mojom.ProfileImportObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnImportStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onImportStart');
          const result = this.impl.onImportStart();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onImportFinished');
          const result = this.impl.onImportFinished(params.succeeded, params.error_msg);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onImportItemStart');
          const result = this.impl.onImportItemStart(params.item);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onImportItemFinished');
          const result = this.impl.onImportItemFinished(params.item);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onHistoryImportStart');
          const result = this.impl.onHistoryImportStart(params.total_history_rows_count);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onHistoryImportGroup');
          const result = this.impl.onHistoryImportGroup(params.history_rows_group, params.visit_source);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onHomePageImportReady');
          const result = this.impl.onHomePageImportReady(params.home_page);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBookmarksImportStart');
          const result = this.impl.onBookmarksImportStart(params.first_folder_name, params.total_bookmarks_count);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBookmarksImportGroup');
          const result = this.impl.onBookmarksImportGroup(params.bookmarks_group);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFaviconsImportStart');
          const result = this.impl.onFaviconsImportStart(params.total_favicons_count);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFaviconsImportGroup');
          const result = this.impl.onFaviconsImportGroup(params.favicons_group);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPasswordFormImportReady');
          const result = this.impl.onPasswordFormImportReady(params.form);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKeywordsImportReady');
          const result = this.impl.onKeywordsImportReady(params.search_engines, params.unique_on_host_and_path);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAutofillFormDataImportStart');
          const result = this.impl.onAutofillFormDataImportStart(params.total_autofill_form_data_entry_count);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAutofillFormDataImportGroup');
          const result = this.impl.onAutofillFormDataImportGroup(params.autofill_form_data_entry_group);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.ProfileImportObserverReceiver = chrome.mojom.ProfileImportObserverReceiver;

chrome.mojom.ProfileImportObserverPtr = chrome.mojom.ProfileImportObserverRemote;
chrome.mojom.ProfileImportObserverRequest = chrome.mojom.ProfileImportObserverPendingReceiver;


// Interface: ProfileImport
mojo.internal.Struct(
    chrome.mojom.ProfileImport_StartImport_ParamsSpec, 'chrome.mojom.ProfileImport_StartImport_Params', [
      mojo.internal.StructField('source_profile', 0, 0, chrome.mojom.SourceProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('localized_strings', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(chrome.mojom.ProfileImportObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('items', 24, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImport_CancelImport_ParamsSpec, 'chrome.mojom.ProfileImport_CancelImport_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec, 'chrome.mojom.ProfileImport_ReportImportItemFinished_Params', [
      mojo.internal.StructField('item', 0, 0, chrome.mojom.ImportItemSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.ProfileImportPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.ProfileImportRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ProfileImport';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.ProfileImportPendingReceiver,
      handle);
    this.$ = new chrome.mojom.ProfileImportRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.ProfileImportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startImport(source_profile, items, localized_strings, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.ProfileImport_StartImport_ParamsSpec,
      null,
      [source_profile, items, localized_strings, observer],
      false);
  }

  cancelImport() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.ProfileImport_CancelImport_ParamsSpec,
      null,
      [],
      false);
  }

  reportImportItemFinished(item) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec,
      null,
      [item],
      false);
  }

};

chrome.mojom.ProfileImport.getRemote = function() {
  let remote = new chrome.mojom.ProfileImportRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ProfileImport',
    'context');
  return remote.$;
};

chrome.mojom.ProfileImportReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: StartImport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.ProfileImport_StartImport_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImport_CancelImport_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(chrome.mojom.ProfileImport_StartImport_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startImport');
          const result = this.impl.startImport(params.source_profile, params.items, params.localized_strings, params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImport_CancelImport_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelImport');
          const result = this.impl.cancelImport();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reportImportItemFinished');
          const result = this.impl.reportImportItemFinished(params.item);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.ProfileImportReceiver = chrome.mojom.ProfileImportReceiver;

chrome.mojom.ProfileImportPtr = chrome.mojom.ProfileImportRemote;
chrome.mojom.ProfileImportRequest = chrome.mojom.ProfileImportPendingReceiver;

