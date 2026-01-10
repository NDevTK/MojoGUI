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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
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
        
        // Try Method 0: AnalyzeZipFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AnalyzeZipFile (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AnalyzeDmgFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AnalyzeDmgFile (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AnalyzeRarFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AnalyzeRarFile (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AnalyzeSevenZipFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AnalyzeSevenZipFile (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AnalyzeObfuscatedZipFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AnalyzeObfuscatedZipFile (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: AnalyzeObfuscatedRarFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AnalyzeObfuscatedRarFile (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStruct(chrome.mojom.SafeArchiveAnalyzer_AnalyzeZipFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.analyzeZipFile');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.SafeArchiveAnalyzer_AnalyzeDmgFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.analyzeDmgFile');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.SafeArchiveAnalyzer_AnalyzeRarFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.analyzeRarFile');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.SafeArchiveAnalyzer_AnalyzeSevenZipFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.analyzeSevenZipFile');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedZipFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.analyzeObfuscatedZipFile');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.SafeArchiveAnalyzer_AnalyzeObfuscatedRarFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.analyzeObfuscatedRarFile');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: RequestTemporaryFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestTemporaryFile (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(chrome.mojom.TemporaryFileGetter_RequestTemporaryFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestTemporaryFile');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.TemporaryFileGetterReceiver = chrome.mojom.TemporaryFileGetterReceiver;

chrome.mojom.TemporaryFileGetterPtr = chrome.mojom.TemporaryFileGetterRemote;
chrome.mojom.TemporaryFileGetterRequest = chrome.mojom.TemporaryFileGetterPendingReceiver;

