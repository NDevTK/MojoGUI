// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/safe_archive_analyzer.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Struct: ObfuscatedFileUtilHeaderData
chrome.mojom.ObfuscatedFileUtilHeaderDataSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ObfuscatedFileUtilHeaderData',
      packedSize: 24,
      fields: [
        { name: 'derived_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'nonce_prefix', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: SafeArchiveAnalyzer
chrome.mojom.SafeArchiveAnalyzer = {};

chrome.mojom.SafeArchiveAnalyzerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.SafeArchiveAnalyzerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.SafeArchiveAnalyzer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.SafeArchiveAnalyzerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.SafeArchiveAnalyzerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.SafeArchiveAnalyzerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  analyzeZipFile(zip_file, password, temp_file_getter) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_ParamsSpec,
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_ResponseParamsSpec,
      [zip_file, password, temp_file_getter]);
  }

  analyzeDmgFile(dmg_file, temp_file_getter) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ParamsSpec,
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ResponseParamsSpec,
      [dmg_file, temp_file_getter]);
  }

  analyzeRarFile(rar_file, password, temp_file_getter) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ParamsSpec,
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ResponseParamsSpec,
      [rar_file, password, temp_file_getter]);
  }

  analyzeSevenZipFile(seven_zip_file, temp_file_getter) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ParamsSpec,
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ResponseParamsSpec,
      [seven_zip_file, temp_file_getter]);
  }

  analyzeObfuscatedZipFile(zip_file, password, header_data, temp_file_getter) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ParamsSpec,
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ResponseParamsSpec,
      [zip_file, password, header_data, temp_file_getter]);
  }

  analyzeObfuscatedRarFile(rar_file, password, header_data, temp_file_getter) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ParamsSpec,
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ResponseParamsSpec,
      [rar_file, password, header_data, temp_file_getter]);
  }

};

chrome.mojom.SafeArchiveAnalyzer.getRemote = function() {
  let remote = new chrome.mojom.SafeArchiveAnalyzerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.SafeArchiveAnalyzer',
    'context');
  return remote.$;
};

// ParamsSpec for AnalyzeZipFile
chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SafeArchiveAnalyzer.AnalyzeZipFile_Params',
      packedSize: 32,
      fields: [
        { name: 'zip_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'temp_file_getter', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SafeArchiveAnalyzer.AnalyzeZipFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AnalyzeDmgFile
chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SafeArchiveAnalyzer.AnalyzeDmgFile_Params',
      packedSize: 24,
      fields: [
        { name: 'dmg_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'temp_file_getter', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SafeArchiveAnalyzer.AnalyzeDmgFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AnalyzeRarFile
chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SafeArchiveAnalyzer.AnalyzeRarFile_Params',
      packedSize: 32,
      fields: [
        { name: 'rar_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'temp_file_getter', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SafeArchiveAnalyzer.AnalyzeRarFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AnalyzeSevenZipFile
chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SafeArchiveAnalyzer.AnalyzeSevenZipFile_Params',
      packedSize: 24,
      fields: [
        { name: 'seven_zip_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'temp_file_getter', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SafeArchiveAnalyzer.AnalyzeSevenZipFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AnalyzeObfuscatedZipFile
chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SafeArchiveAnalyzer.AnalyzeObfuscatedZipFile_Params',
      packedSize: 40,
      fields: [
        { name: 'zip_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'header_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'temp_file_getter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SafeArchiveAnalyzer.AnalyzeObfuscatedZipFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AnalyzeObfuscatedRarFile
chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SafeArchiveAnalyzer.AnalyzeObfuscatedRarFile_Params',
      packedSize: 40,
      fields: [
        { name: 'rar_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'password', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'header_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'temp_file_getter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.SafeArchiveAnalyzer.AnalyzeObfuscatedRarFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.SafeArchiveAnalyzerPtr = chrome.mojom.SafeArchiveAnalyzerRemote;
chrome.mojom.SafeArchiveAnalyzerRequest = chrome.mojom.SafeArchiveAnalyzerPendingReceiver;


// Interface: TemporaryFileGetter
chrome.mojom.TemporaryFileGetter = {};

chrome.mojom.TemporaryFileGetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.TemporaryFileGetterRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.TemporaryFileGetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.TemporaryFileGetterPendingReceiver,
      handle);
    this.$ = new chrome.mojom.TemporaryFileGetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.TemporaryFileGetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestTemporaryFile() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_ParamsSpec,
      chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_ResponseParamsSpec,
      []);
  }

};

chrome.mojom.TemporaryFileGetter.getRemote = function() {
  let remote = new chrome.mojom.TemporaryFileGetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.TemporaryFileGetter',
    'context');
  return remote.$;
};

// ParamsSpec for RequestTemporaryFile
chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.TemporaryFileGetter.RequestTemporaryFile_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.TemporaryFileGetter.RequestTemporaryFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'temp_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.TemporaryFileGetterPtr = chrome.mojom.TemporaryFileGetterRemote;
chrome.mojom.TemporaryFileGetterRequest = chrome.mojom.TemporaryFileGetterPendingReceiver;

