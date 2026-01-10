// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/importer/profile_import.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var url = url || {};


// Enum: Scheme
chrome.mojom.mojom.Scheme = {
  kHtml: 0,
  kBasic: 1,
};
chrome.mojom.mojom.SchemeSpec = { $: mojo.internal.Enum() };

// Struct: ImportedPasswordForm
chrome.mojom.mojom.ImportedPasswordFormSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ImportedPasswordForm',
      packedSize: 16,
      fields: [
        { name: 'kHtml', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: ProfileImportObserver
chrome.mojom.mojom.ProfileImportObserver = {};

chrome.mojom.mojom.ProfileImportObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.ProfileImportObserverRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ProfileImportObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.ProfileImportObserverPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.ProfileImportObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.ProfileImportObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onImportStart() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnImportStart_ParamsSpec,
      null,
      []);
  }

  onImportFinished(succeeded, error_msg) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec,
      null,
      [succeeded, error_msg]);
  }

  onImportItemStart(item) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec,
      null,
      [item]);
  }

  onImportItemFinished(item) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec,
      null,
      [item]);
  }

  onHistoryImportStart(total_history_rows_count) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec,
      null,
      [total_history_rows_count]);
  }

  onHistoryImportGroup(history_rows_group, visit_source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec,
      null,
      [history_rows_group, visit_source]);
  }

  onHomePageImportReady(home_page) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec,
      null,
      [home_page]);
  }

  onBookmarksImportStart(first_folder_name, total_bookmarks_count) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec,
      null,
      [first_folder_name, total_bookmarks_count]);
  }

  onBookmarksImportGroup(bookmarks_group) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec,
      null,
      [bookmarks_group]);
  }

  onFaviconsImportStart(total_favicons_count) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec,
      null,
      [total_favicons_count]);
  }

  onFaviconsImportGroup(favicons_group) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec,
      null,
      [favicons_group]);
  }

  onPasswordFormImportReady(form) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec,
      null,
      [form]);
  }

  onKeywordsImportReady(search_engines, unique_on_host_and_path) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec,
      null,
      [search_engines, unique_on_host_and_path]);
  }

  onAutofillFormDataImportStart(total_autofill_form_data_entry_count) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec,
      null,
      [total_autofill_form_data_entry_count]);
  }

  onAutofillFormDataImportGroup(autofill_form_data_entry_group) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      chrome.mojom.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec,
      null,
      [autofill_form_data_entry_group]);
  }

};

chrome.mojom.mojom.ProfileImportObserver.getRemote = function() {
  let remote = new chrome.mojom.mojom.ProfileImportObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ProfileImportObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnImportStart
chrome.mojom.mojom.ProfileImportObserver_OnImportStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnImportStart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnImportFinished
chrome.mojom.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnImportFinished_Params',
      packedSize: 24,
      fields: [
        { name: 'succeeded', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'error_msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnImportItemStart
chrome.mojom.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnImportItemStart_Params',
      packedSize: 16,
      fields: [
        { name: 'item', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.ImportItemSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnImportItemFinished
chrome.mojom.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnImportItemFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'item', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.ImportItemSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnHistoryImportStart
chrome.mojom.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnHistoryImportStart_Params',
      packedSize: 16,
      fields: [
        { name: 'total_history_rows_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnHistoryImportGroup
chrome.mojom.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnHistoryImportGroup_Params',
      packedSize: 24,
      fields: [
        { name: 'history_rows_group', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chrome.mojom.ImporterURLRowSpec, false), nullable: false, minVersion: 0 },
        { name: 'visit_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnHomePageImportReady
chrome.mojom.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnHomePageImportReady_Params',
      packedSize: 16,
      fields: [
        { name: 'home_page', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBookmarksImportStart
chrome.mojom.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnBookmarksImportStart_Params',
      packedSize: 24,
      fields: [
        { name: 'first_folder_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'total_bookmarks_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnBookmarksImportGroup
chrome.mojom.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnBookmarksImportGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'bookmarks_group', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chrome.mojom.ImportedBookmarkEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFaviconsImportStart
chrome.mojom.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnFaviconsImportStart_Params',
      packedSize: 16,
      fields: [
        { name: 'total_favicons_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFaviconsImportGroup
chrome.mojom.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnFaviconsImportGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'favicons_group', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.FaviconUsageDataListSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPasswordFormImportReady
chrome.mojom.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnPasswordFormImportReady_Params',
      packedSize: 16,
      fields: [
        { name: 'form', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.ImportedPasswordFormSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnKeywordsImportReady
chrome.mojom.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnKeywordsImportReady_Params',
      packedSize: 24,
      fields: [
        { name: 'search_engines', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chrome.mojom.SearchEngineInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'unique_on_host_and_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnAutofillFormDataImportStart
chrome.mojom.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnAutofillFormDataImportStart_Params',
      packedSize: 16,
      fields: [
        { name: 'total_autofill_form_data_entry_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAutofillFormDataImportGroup
chrome.mojom.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnAutofillFormDataImportGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'autofill_form_data_entry_group', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chrome.mojom.ImporterAutofillFormDataEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.ProfileImportObserverPtr = chrome.mojom.mojom.ProfileImportObserverRemote;
chrome.mojom.mojom.ProfileImportObserverRequest = chrome.mojom.mojom.ProfileImportObserverPendingReceiver;


// Interface: ProfileImport
chrome.mojom.mojom.ProfileImport = {};

chrome.mojom.mojom.ProfileImportPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.ProfileImportRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ProfileImport';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.ProfileImportPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.ProfileImportRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.ProfileImportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startImport(source_profile, items, localized_strings, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.ProfileImport_StartImport_ParamsSpec,
      null,
      [source_profile, items, localized_strings, observer]);
  }

  cancelImport() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.mojom.ProfileImport_CancelImport_ParamsSpec,
      null,
      []);
  }

  reportImportItemFinished(item) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec,
      null,
      [item]);
  }

};

chrome.mojom.mojom.ProfileImport.getRemote = function() {
  let remote = new chrome.mojom.mojom.ProfileImportRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ProfileImport',
    'context');
  return remote.$;
};

// ParamsSpec for StartImport
chrome.mojom.mojom.ProfileImport_StartImport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImport.StartImport_Params',
      packedSize: 32,
      fields: [
        { name: 'source_profile', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.SourceProfileSpec, nullable: false, minVersion: 0 },
        { name: 'items', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'localized_strings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint32, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for CancelImport
chrome.mojom.mojom.ProfileImport_CancelImport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImport.CancelImport_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ReportImportItemFinished
chrome.mojom.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImport.ReportImportItemFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'item', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.ImportItemSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.ProfileImportPtr = chrome.mojom.mojom.ProfileImportRemote;
chrome.mojom.mojom.ProfileImportRequest = chrome.mojom.mojom.ProfileImportPendingReceiver;

