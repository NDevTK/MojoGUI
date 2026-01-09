// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/importer/profile_import.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Enum: Scheme
chrome.mojom.Scheme = {
};

// Struct: ImportedPasswordForm
chrome.mojom.ImportedPasswordForm = class {
  constructor(values = {}) {
    this.kHtml = values.kHtml !== undefined ? values.kHtml : null;
  }
};

// Interface: ProfileImportObserver
chrome.mojom.ProfileImportObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.ProfileImportObserver';
  }

  onImportStart() {
    // Method: OnImportStart
    // Call: OnImportStart()
  }

  onImportFinished(succeeded, error_msg) {
    // Method: OnImportFinished
    // Call: OnImportFinished(succeeded, error_msg)
  }

  onImportItemStart(item) {
    // Method: OnImportItemStart
    // Call: OnImportItemStart(item)
  }

  onImportItemFinished(item) {
    // Method: OnImportItemFinished
    // Call: OnImportItemFinished(item)
  }

  onHistoryImportStart(total_history_rows_count) {
    // Method: OnHistoryImportStart
    // Call: OnHistoryImportStart(total_history_rows_count)
  }

  onHistoryImportGroup(history_rows_group, visit_source) {
    // Method: OnHistoryImportGroup
    // Call: OnHistoryImportGroup(history_rows_group, visit_source)
  }

  onHomePageImportReady(home_page) {
    // Method: OnHomePageImportReady
    // Call: OnHomePageImportReady(home_page)
  }

  onBookmarksImportStart(first_folder_name, total_bookmarks_count) {
    // Method: OnBookmarksImportStart
    // Call: OnBookmarksImportStart(first_folder_name, total_bookmarks_count)
  }

  onBookmarksImportGroup(bookmarks_group) {
    // Method: OnBookmarksImportGroup
    // Call: OnBookmarksImportGroup(bookmarks_group)
  }

  onFaviconsImportStart(total_favicons_count) {
    // Method: OnFaviconsImportStart
    // Call: OnFaviconsImportStart(total_favicons_count)
  }

  onFaviconsImportGroup(favicons_group) {
    // Method: OnFaviconsImportGroup
    // Call: OnFaviconsImportGroup(favicons_group)
  }

  onPasswordFormImportReady(form) {
    // Method: OnPasswordFormImportReady
    // Call: OnPasswordFormImportReady(form)
  }

  onKeywordsImportReady(search_engines, unique_on_host_and_path) {
    // Method: OnKeywordsImportReady
    // Call: OnKeywordsImportReady(search_engines, unique_on_host_and_path)
  }

  onAutofillFormDataImportStart(total_autofill_form_data_entry_count) {
    // Method: OnAutofillFormDataImportStart
    // Call: OnAutofillFormDataImportStart(total_autofill_form_data_entry_count)
  }

  onAutofillFormDataImportGroup(autofill_form_data_entry_group) {
    // Method: OnAutofillFormDataImportGroup
    // Call: OnAutofillFormDataImportGroup(autofill_form_data_entry_group)
  }

};

chrome.mojom.ProfileImportObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ProfileImport
chrome.mojom.ProfileImportPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.ProfileImport';
  }

  startImport(source_profile, items, localized_strings, observer) {
    // Method: StartImport
    // Call: StartImport(source_profile, items, localized_strings, observer)
  }

  cancelImport() {
    // Method: CancelImport
    // Call: CancelImport()
  }

  reportImportItemFinished(item) {
    // Method: ReportImportItemFinished
    // Call: ReportImportItemFinished(item)
  }

};

chrome.mojom.ProfileImportRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
