// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/safe_archive_analyzer.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var mojo_base = mojo_base || {};

chrome.mojom.ObfuscatedFileUtilHeaderDataSpec = { $: {} };
chrome.mojom.SafeArchiveAnalyzer = {};
chrome.mojom.SafeArchiveAnalyzer.$interfaceName = 'chrome.mojom.SafeArchiveAnalyzer';
chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_ParamsSpec = { $: {} };
chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_ResponseParamsSpec = { $: {} };
chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ParamsSpec = { $: {} };
chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ResponseParamsSpec = { $: {} };
chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ParamsSpec = { $: {} };
chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ResponseParamsSpec = { $: {} };
chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ParamsSpec = { $: {} };
chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ResponseParamsSpec = { $: {} };
chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ParamsSpec = { $: {} };
chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ResponseParamsSpec = { $: {} };
chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ParamsSpec = { $: {} };
chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ResponseParamsSpec = { $: {} };
chrome.mojom.TemporaryFileGetter = {};
chrome.mojom.TemporaryFileGetter.$interfaceName = 'chrome.mojom.TemporaryFileGetter';
chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_ParamsSpec = { $: {} };
chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_ResponseParamsSpec = { $: {} };

// Struct: ObfuscatedFileUtilHeaderData
mojo.internal.Struct(
    chrome.mojom.ObfuscatedFileUtilHeaderDataSpec, 'chrome.mojom.ObfuscatedFileUtilHeaderData', [
      mojo.internal.StructField('derived_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('nonce_prefix', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SafeArchiveAnalyzer
mojo.internal.Struct(
    chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_ParamsSpec, 'chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_Params', [
      mojo.internal.StructField('zip_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('temp_file_getter', 16, 0, mojo.internal.InterfaceProxy(chrome.mojom.TemporaryFileGetterSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_ResponseParamsSpec, 'chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, chrome.mojom.SafeArchiveAnalyzerResultsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ParamsSpec, 'chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_Params', [
      mojo.internal.StructField('dmg_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('temp_file_getter', 8, 0, mojo.internal.InterfaceProxy(chrome.mojom.TemporaryFileGetterSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ResponseParamsSpec, 'chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, chrome.mojom.SafeArchiveAnalyzerResultsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ParamsSpec, 'chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_Params', [
      mojo.internal.StructField('rar_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('temp_file_getter', 16, 0, mojo.internal.InterfaceProxy(chrome.mojom.TemporaryFileGetterSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ResponseParamsSpec, 'chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, chrome.mojom.SafeArchiveAnalyzerResultsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ParamsSpec, 'chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_Params', [
      mojo.internal.StructField('seven_zip_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('temp_file_getter', 8, 0, mojo.internal.InterfaceProxy(chrome.mojom.TemporaryFileGetterSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ResponseParamsSpec, 'chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, chrome.mojom.SafeArchiveAnalyzerResultsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ParamsSpec, 'chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_Params', [
      mojo.internal.StructField('zip_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('header_data', 16, 0, chrome.mojom.ObfuscatedFileUtilHeaderDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('temp_file_getter', 24, 0, mojo.internal.InterfaceProxy(chrome.mojom.TemporaryFileGetterSpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ResponseParamsSpec, 'chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, chrome.mojom.SafeArchiveAnalyzerResultsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ParamsSpec, 'chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_Params', [
      mojo.internal.StructField('rar_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('header_data', 16, 0, chrome.mojom.ObfuscatedFileUtilHeaderDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('temp_file_getter', 24, 0, mojo.internal.InterfaceProxy(chrome.mojom.TemporaryFileGetterSpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ResponseParamsSpec, 'chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, chrome.mojom.SafeArchiveAnalyzerResultsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [zip_file, password, temp_file_getter],
      false);
  }

  analyzeDmgFile(dmg_file, temp_file_getter) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ParamsSpec,
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ResponseParamsSpec,
      [dmg_file, temp_file_getter],
      false);
  }

  analyzeRarFile(rar_file, password, temp_file_getter) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ParamsSpec,
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ResponseParamsSpec,
      [rar_file, password, temp_file_getter],
      false);
  }

  analyzeSevenZipFile(seven_zip_file, temp_file_getter) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ParamsSpec,
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ResponseParamsSpec,
      [seven_zip_file, temp_file_getter],
      false);
  }

  analyzeObfuscatedZipFile(zip_file, password, header_data, temp_file_getter) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ParamsSpec,
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ResponseParamsSpec,
      [zip_file, password, header_data, temp_file_getter],
      false);
  }

  analyzeObfuscatedRarFile(rar_file, password, header_data, temp_file_getter) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ParamsSpec,
      chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ResponseParamsSpec,
      [rar_file, password, header_data, temp_file_getter],
      false);
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

chrome.mojom.SafeArchiveAnalyzerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.analyzeZipFile(params.zip_file, params.password, params.temp_file_getter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.analyzeDmgFile(params.dmg_file, params.temp_file_getter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.analyzeRarFile(params.rar_file, params.password, params.temp_file_getter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.analyzeSevenZipFile(params.seven_zip_file, params.temp_file_getter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.analyzeObfuscatedZipFile(params.zip_file, params.password, params.header_data, params.temp_file_getter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.analyzeObfuscatedRarFile(params.rar_file, params.password, params.header_data, params.temp_file_getter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

chrome.mojom.SafeArchiveAnalyzerReceiver = chrome.mojom.SafeArchiveAnalyzerReceiver;

chrome.mojom.SafeArchiveAnalyzerPtr = chrome.mojom.SafeArchiveAnalyzerRemote;
chrome.mojom.SafeArchiveAnalyzerRequest = chrome.mojom.SafeArchiveAnalyzerPendingReceiver;


// Interface: TemporaryFileGetter
mojo.internal.Struct(
    chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_ParamsSpec, 'chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_ResponseParamsSpec, 'chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_ResponseParams', [
      mojo.internal.StructField('temp_file', 0, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
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

chrome.mojom.TemporaryFileGetterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestTemporaryFile();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

chrome.mojom.TemporaryFileGetterReceiver = chrome.mojom.TemporaryFileGetterReceiver;

chrome.mojom.TemporaryFileGetterPtr = chrome.mojom.TemporaryFileGetterRemote;
chrome.mojom.TemporaryFileGetterRequest = chrome.mojom.TemporaryFileGetterPendingReceiver;

