// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/importer/profile_import.mojom
// Module: chrome.mojom

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
  onImportStart() {
    return this.$.onImportStart();
  }
  onImportFinished(succeeded, error_msg) {
    return this.$.onImportFinished(succeeded, error_msg);
  }
  onImportItemStart(item) {
    return this.$.onImportItemStart(item);
  }
  onImportItemFinished(item) {
    return this.$.onImportItemFinished(item);
  }
  onHistoryImportStart(total_history_rows_count) {
    return this.$.onHistoryImportStart(total_history_rows_count);
  }
  onHistoryImportGroup(history_rows_group, visit_source) {
    return this.$.onHistoryImportGroup(history_rows_group, visit_source);
  }
  onHomePageImportReady(home_page) {
    return this.$.onHomePageImportReady(home_page);
  }
  onBookmarksImportStart(first_folder_name, total_bookmarks_count) {
    return this.$.onBookmarksImportStart(first_folder_name, total_bookmarks_count);
  }
  onBookmarksImportGroup(bookmarks_group) {
    return this.$.onBookmarksImportGroup(bookmarks_group);
  }
  onFaviconsImportStart(total_favicons_count) {
    return this.$.onFaviconsImportStart(total_favicons_count);
  }
  onFaviconsImportGroup(favicons_group) {
    return this.$.onFaviconsImportGroup(favicons_group);
  }
  onPasswordFormImportReady(form) {
    return this.$.onPasswordFormImportReady(form);
  }
  onKeywordsImportReady(search_engines, unique_on_host_and_path) {
    return this.$.onKeywordsImportReady(search_engines, unique_on_host_and_path);
  }
  onAutofillFormDataImportStart(total_autofill_form_data_entry_count) {
    return this.$.onAutofillFormDataImportStart(total_autofill_form_data_entry_count);
  }
  onAutofillFormDataImportGroup(autofill_form_data_entry_group) {
    return this.$.onAutofillFormDataImportGroup(autofill_form_data_entry_group);
  }
};

chrome.mojom.ProfileImportObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProfileImportObserver', [
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
      chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec,
      null,
      [],
      false);
  }

  onImportFinished(succeeded, error_msg) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec,
      null,
      [succeeded, error_msg],
      false);
  }

  onImportItemStart(item) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec,
      null,
      [item],
      false);
  }

  onImportItemFinished(item) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec,
      null,
      [item],
      false);
  }

  onHistoryImportStart(total_history_rows_count) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec,
      null,
      [total_history_rows_count],
      false);
  }

  onHistoryImportGroup(history_rows_group, visit_source) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec,
      null,
      [history_rows_group, visit_source],
      false);
  }

  onHomePageImportReady(home_page) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec,
      null,
      [home_page],
      false);
  }

  onBookmarksImportStart(first_folder_name, total_bookmarks_count) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec,
      null,
      [first_folder_name, total_bookmarks_count],
      false);
  }

  onBookmarksImportGroup(bookmarks_group) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec,
      null,
      [bookmarks_group],
      false);
  }

  onFaviconsImportStart(total_favicons_count) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec,
      null,
      [total_favicons_count],
      false);
  }

  onFaviconsImportGroup(favicons_group) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec,
      null,
      [favicons_group],
      false);
  }

  onPasswordFormImportReady(form) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec,
      null,
      [form],
      false);
  }

  onKeywordsImportReady(search_engines, unique_on_host_and_path) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec,
      null,
      [search_engines, unique_on_host_and_path],
      false);
  }

  onAutofillFormDataImportStart(total_autofill_form_data_entry_count) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec,
      null,
      [total_autofill_form_data_entry_count],
      false);
  }

  onAutofillFormDataImportGroup(autofill_form_data_entry_group) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ProfileImportObserver', [
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec.$.structSpec);
          const result = this.impl.onImportStart();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec.$.structSpec);
          const result = this.impl.onImportFinished(params.succeeded, params.error_msg);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec.$.structSpec);
          const result = this.impl.onImportItemStart(params.item);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec.$.structSpec);
          const result = this.impl.onImportItemFinished(params.item);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec.$.structSpec);
          const result = this.impl.onHistoryImportStart(params.total_history_rows_count);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec.$.structSpec);
          const result = this.impl.onHistoryImportGroup(params.history_rows_group, params.visit_source);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec.$.structSpec);
          const result = this.impl.onHomePageImportReady(params.home_page);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec.$.structSpec);
          const result = this.impl.onBookmarksImportStart(params.first_folder_name, params.total_bookmarks_count);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec.$.structSpec);
          const result = this.impl.onBookmarksImportGroup(params.bookmarks_group);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec.$.structSpec);
          const result = this.impl.onFaviconsImportStart(params.total_favicons_count);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec.$.structSpec);
          const result = this.impl.onFaviconsImportGroup(params.favicons_group);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec.$.structSpec);
          const result = this.impl.onPasswordFormImportReady(params.form);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec.$.structSpec);
          const result = this.impl.onKeywordsImportReady(params.search_engines, params.unique_on_host_and_path);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec.$.structSpec);
          const result = this.impl.onAutofillFormDataImportStart(params.total_autofill_form_data_entry_count);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec.$.structSpec);
          const result = this.impl.onAutofillFormDataImportGroup(params.autofill_form_data_entry_group);
          break;
        }
      }
      } catch (err) {}
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
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(chrome.mojom.ProfileImportObserverRemote), null, false, 0, undefined),
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
  startImport(source_profile, items, localized_strings, observer) {
    return this.$.startImport(source_profile, items, localized_strings, observer);
  }
  cancelImport() {
    return this.$.cancelImport();
  }
  reportImportItemFinished(item) {
    return this.$.reportImportItemFinished(item);
  }
};

chrome.mojom.ProfileImportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProfileImport', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  startImport(source_profile, items, localized_strings, observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.ProfileImport_StartImport_ParamsSpec,
      null,
      [source_profile, items, localized_strings, observer],
      false);
  }

  cancelImport() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome.mojom.ProfileImport_CancelImport_ParamsSpec,
      null,
      [],
      false);
  }

  reportImportItemFinished(item) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ProfileImport', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImport_StartImport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImport_CancelImport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImport_StartImport_ParamsSpec.$.structSpec);
          const result = this.impl.startImport(params.source_profile, params.items, params.localized_strings, params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImport_CancelImport_ParamsSpec.$.structSpec);
          const result = this.impl.cancelImport();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec.$.structSpec);
          const result = this.impl.reportImportItemFinished(params.item);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.ProfileImportReceiver = chrome.mojom.ProfileImportReceiver;

chrome.mojom.ProfileImportPtr = chrome.mojom.ProfileImportRemote;
chrome.mojom.ProfileImportRequest = chrome.mojom.ProfileImportPendingReceiver;

