// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/safe_archive_analyzer.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Struct: ObfuscatedFileUtilHeaderData
chrome.mojom.ObfuscatedFileUtilHeaderData = class {
  constructor(values = {}) {
    this.nonce_prefix = values.nonce_prefix !== undefined ? values.nonce_prefix : 0;
  }
};

// Interface: SafeArchiveAnalyzer
chrome.mojom.SafeArchiveAnalyzerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.SafeArchiveAnalyzer';
  }

  analyzeZipFile(zip_file, password, temp_file_getter) {
    // Method: AnalyzeZipFile
    return new Promise((resolve) => {
      // Call: AnalyzeZipFile(zip_file, password, temp_file_getter)
      resolve({});
    });
  }

  analyzeDmgFile(dmg_file, temp_file_getter) {
    // Method: AnalyzeDmgFile
    return new Promise((resolve) => {
      // Call: AnalyzeDmgFile(dmg_file, temp_file_getter)
      resolve({});
    });
  }

  analyzeRarFile(rar_file, password, temp_file_getter) {
    // Method: AnalyzeRarFile
    return new Promise((resolve) => {
      // Call: AnalyzeRarFile(rar_file, password, temp_file_getter)
      resolve({});
    });
  }

  analyzeSevenZipFile(seven_zip_file, temp_file_getter) {
    // Method: AnalyzeSevenZipFile
    return new Promise((resolve) => {
      // Call: AnalyzeSevenZipFile(seven_zip_file, temp_file_getter)
      resolve({});
    });
  }

  analyzeObfuscatedZipFile(zip_file, password, header_data, temp_file_getter) {
    // Method: AnalyzeObfuscatedZipFile
    return new Promise((resolve) => {
      // Call: AnalyzeObfuscatedZipFile(zip_file, password, header_data, temp_file_getter)
      resolve({});
    });
  }

  analyzeObfuscatedRarFile(rar_file, password, header_data, temp_file_getter) {
    // Method: AnalyzeObfuscatedRarFile
    return new Promise((resolve) => {
      // Call: AnalyzeObfuscatedRarFile(rar_file, password, header_data, temp_file_getter)
      resolve({});
    });
  }

};

chrome.mojom.SafeArchiveAnalyzerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TemporaryFileGetter
chrome.mojom.TemporaryFileGetterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.TemporaryFileGetter';
  }

  requestTemporaryFile() {
    // Method: RequestTemporaryFile
    return new Promise((resolve) => {
      // Call: RequestTemporaryFile()
      resolve({});
    });
  }

};

chrome.mojom.TemporaryFileGetterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
