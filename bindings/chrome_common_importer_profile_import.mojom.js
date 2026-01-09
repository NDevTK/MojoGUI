// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/importer/profile_import.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Enum: Scheme
chrome.mojom.Scheme = {
  kHtml: 0,
  kBasic: 1,
};

// Struct: ImportedPasswordForm
chrome.mojom.ImportedPasswordFormSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ImportedPasswordForm',
      packedSize: 16,
      fields: [
        { name: 'kHtml', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ProfileImportObserver
chrome.mojom.ProfileImportObserver = {};

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
      []);
  }

  onImportFinished(succeeded, error_msg) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec,
      null,
      [succeeded, error_msg]);
  }

  onImportItemStart(item) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec,
      null,
      [item]);
  }

  onImportItemFinished(item) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec,
      null,
      [item]);
  }

  onHistoryImportStart(total_history_rows_count) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec,
      null,
      [total_history_rows_count]);
  }

  onHistoryImportGroup(history_rows_group, visit_source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec,
      null,
      [history_rows_group, visit_source]);
  }

  onHomePageImportReady(home_page) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec,
      null,
      [home_page]);
  }

  onBookmarksImportStart(first_folder_name, total_bookmarks_count) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec,
      null,
      [first_folder_name, total_bookmarks_count]);
  }

  onBookmarksImportGroup(bookmarks_group) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec,
      null,
      [bookmarks_group]);
  }

  onFaviconsImportStart(total_favicons_count) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec,
      null,
      [total_favicons_count]);
  }

  onFaviconsImportGroup(favicons_group) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec,
      null,
      [favicons_group]);
  }

  onPasswordFormImportReady(form) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec,
      null,
      [form]);
  }

  onKeywordsImportReady(search_engines, unique_on_host_and_path) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec,
      null,
      [search_engines, unique_on_host_and_path]);
  }

  onAutofillFormDataImportStart(total_autofill_form_data_entry_count) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec,
      null,
      [total_autofill_form_data_entry_count]);
  }

  onAutofillFormDataImportGroup(autofill_form_data_entry_group) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec,
      null,
      [autofill_form_data_entry_group]);
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

// ParamsSpec for OnImportStart
chrome.mojom.ProfileImportObserver_OnImportStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnImportStart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnImportFinished
chrome.mojom.ProfileImportObserver_OnImportFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnImportFinished_Params',
      packedSize: 24,
      fields: [
        { name: 'succeeded', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'error_msg', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnImportItemStart
chrome.mojom.ProfileImportObserver_OnImportItemStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnImportItemStart_Params',
      packedSize: 16,
      fields: [
        { name: 'item', packedOffset: 8, packedBitOffset: 0, type: chrome.mojom.ImportItemSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnImportItemFinished
chrome.mojom.ProfileImportObserver_OnImportItemFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnImportItemFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'item', packedOffset: 8, packedBitOffset: 0, type: chrome.mojom.ImportItemSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHistoryImportStart
chrome.mojom.ProfileImportObserver_OnHistoryImportStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnHistoryImportStart_Params',
      packedSize: 16,
      fields: [
        { name: 'total_history_rows_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHistoryImportGroup
chrome.mojom.ProfileImportObserver_OnHistoryImportGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnHistoryImportGroup_Params',
      packedSize: 24,
      fields: [
        { name: 'history_rows_group', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'visit_source', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnHomePageImportReady
chrome.mojom.ProfileImportObserver_OnHomePageImportReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnHomePageImportReady_Params',
      packedSize: 16,
      fields: [
        { name: 'home_page', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBookmarksImportStart
chrome.mojom.ProfileImportObserver_OnBookmarksImportStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnBookmarksImportStart_Params',
      packedSize: 24,
      fields: [
        { name: 'first_folder_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'total_bookmarks_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBookmarksImportGroup
chrome.mojom.ProfileImportObserver_OnBookmarksImportGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnBookmarksImportGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'bookmarks_group', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFaviconsImportStart
chrome.mojom.ProfileImportObserver_OnFaviconsImportStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnFaviconsImportStart_Params',
      packedSize: 16,
      fields: [
        { name: 'total_favicons_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFaviconsImportGroup
chrome.mojom.ProfileImportObserver_OnFaviconsImportGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnFaviconsImportGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'favicons_group', packedOffset: 8, packedBitOffset: 0, type: chrome.mojom.FaviconUsageDataListSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPasswordFormImportReady
chrome.mojom.ProfileImportObserver_OnPasswordFormImportReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnPasswordFormImportReady_Params',
      packedSize: 16,
      fields: [
        { name: 'form', packedOffset: 8, packedBitOffset: 0, type: chrome.mojom.ImportedPasswordFormSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnKeywordsImportReady
chrome.mojom.ProfileImportObserver_OnKeywordsImportReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnKeywordsImportReady_Params',
      packedSize: 24,
      fields: [
        { name: 'search_engines', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'unique_on_host_and_path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAutofillFormDataImportStart
chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnAutofillFormDataImportStart_Params',
      packedSize: 16,
      fields: [
        { name: 'total_autofill_form_data_entry_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAutofillFormDataImportGroup
chrome.mojom.ProfileImportObserver_OnAutofillFormDataImportGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImportObserver.OnAutofillFormDataImportGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'autofill_form_data_entry_group', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.ProfileImportObserverPtr = chrome.mojom.ProfileImportObserverRemote;
chrome.mojom.ProfileImportObserverRequest = chrome.mojom.ProfileImportObserverPendingReceiver;


// Interface: ProfileImport
chrome.mojom.ProfileImport = {};

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
      [source_profile, items, localized_strings, observer]);
  }

  cancelImport() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.ProfileImport_CancelImport_ParamsSpec,
      null,
      []);
  }

  reportImportItemFinished(item) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec,
      null,
      [item]);
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

// ParamsSpec for StartImport
chrome.mojom.ProfileImport_StartImport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImport.StartImport_Params',
      packedSize: 40,
      fields: [
        { name: 'source_profile', packedOffset: 8, packedBitOffset: 0, type: chrome.mojom.SourceProfileSpec, nullable: false },
        { name: 'items', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'localized_strings', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'observer', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelImport
chrome.mojom.ProfileImport_CancelImport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImport.CancelImport_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReportImportItemFinished
chrome.mojom.ProfileImport_ReportImportItemFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProfileImport.ReportImportItemFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'item', packedOffset: 8, packedBitOffset: 0, type: chrome.mojom.ImportItemSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.ProfileImportPtr = chrome.mojom.ProfileImportRemote;
chrome.mojom.ProfileImportRequest = chrome.mojom.ProfileImportPendingReceiver;

