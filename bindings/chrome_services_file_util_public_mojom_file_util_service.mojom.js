// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/file_util_service.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: FileUtilService
chrome.mojom.FileUtilServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.FileUtilService';
  }

  bindZipFileCreator(receiver) {
    // Method: BindZipFileCreator
    // Call: BindZipFileCreator(receiver)
  }

  bindSafeArchiveAnalyzer(receiver) {
    // Method: BindSafeArchiveAnalyzer
    // Call: BindSafeArchiveAnalyzer(receiver)
  }

  bindSingleFileTarFileExtractor(receiver) {
    // Method: BindSingleFileTarFileExtractor
    // Call: BindSingleFileTarFileExtractor(receiver)
  }

  bindSingleFileTarXzFileExtractor(receiver) {
    // Method: BindSingleFileTarXzFileExtractor
    // Call: BindSingleFileTarXzFileExtractor(receiver)
  }

};

chrome.mojom.FileUtilServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
