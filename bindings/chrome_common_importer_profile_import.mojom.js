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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onImportStart();
          break;
        }
        case 1: {
          const params = chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onImportFinished(params.succeeded, params.error_msg);
          break;
        }
        case 2: {
          const params = chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onImportItemStart(params.item);
          break;
        }
        case 3: {
          const params = chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onImportItemFinished(params.item);
          break;
        }
        case 4: {
          const params = chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onHistoryImportStart(params.total_history_rows_count);
          break;
        }
        case 5: {
          const params = chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onHistoryImportGroup(params.history_rows_group, params.visit_source);
          break;
        }
        case 6: {
          const params = chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onHomePageImportReady(params.home_page);
          break;
        }
        case 7: {
          const params = chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBookmarksImportStart(params.first_folder_name, params.total_bookmarks_count);
          break;
        }
        case 8: {
          const params = chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBookmarksImportGroup(params.bookmarks_group);
          break;
        }
        case 9: {
          const params = chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFaviconsImportStart(params.total_favicons_count);
          break;
        }
        case 10: {
          const params = chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFaviconsImportGroup(params.favicons_group);
          break;
        }
        case 11: {
          const params = chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPasswordFormImportReady(params.form);
          break;
        }
        case 12: {
          const params = chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onKeywordsImportReady(params.search_engines, params.unique_on_host_and_path);
          break;
        }
        case 13: {
          const params = chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAutofillFormDataImportStart(params.total_autofill_form_data_entry_count);
          break;
        }
        case 14: {
          const params = chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAutofillFormDataImportGroup(params.autofill_form_data_entry_group);
          break;
        }
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.ProfileImport_StartImport_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startImport(params.source_profile, params.items, params.localized_strings, params.observer);
          break;
        }
        case 1: {
          const params = chrome.mojom.ProfileImport_CancelImport_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelImport();
          break;
        }
        case 2: {
          const params = chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportImportItemFinished(params.item);
          break;
        }
      }
    }});
  }
};

chrome.mojom.ProfileImportReceiver = chrome.mojom.ProfileImportReceiver;

chrome.mojom.ProfileImportPtr = chrome.mojom.ProfileImportRemote;
chrome.mojom.ProfileImportRequest = chrome.mojom.ProfileImportPendingReceiver;

