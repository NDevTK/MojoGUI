// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/file_util/public/mojom/zip_file_creator.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var filesystem = filesystem || {};
var mojo_base = mojo_base || {};

chrome.mojom.ZipListener = {};
chrome.mojom.ZipListener.$interfaceName = 'chrome.mojom.ZipListener';
chrome.mojom.ZipListener_OnProgress_ParamsSpec = { $: {} };
chrome.mojom.ZipListener_OnFinished_ParamsSpec = { $: {} };
chrome.mojom.ZipFileCreator = {};
chrome.mojom.ZipFileCreator.$interfaceName = 'chrome.mojom.ZipFileCreator';
chrome.mojom.ZipFileCreator_CreateZipFile_ParamsSpec = { $: {} };

// Interface: ZipListener
mojo.internal.Struct(
    chrome.mojom.ZipListener_OnProgress_ParamsSpec, 'chrome.mojom.ZipListener_OnProgress_Params', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('files', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('directories', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.ZipListener_OnFinished_ParamsSpec, 'chrome.mojom.ZipListener_OnFinished_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.ZipListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.ZipListenerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ZipListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.ZipListenerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.ZipListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.ZipListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProgress(bytes, files, directories) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.ZipListener_OnProgress_ParamsSpec,
      null,
      [bytes, files, directories],
      false);
  }

  onFinished(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.ZipListener_OnFinished_ParamsSpec,
      null,
      [success],
      false);
  }

};

chrome.mojom.ZipListener.getRemote = function() {
  let remote = new chrome.mojom.ZipListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ZipListener',
    'context');
  return remote.$;
};

chrome.mojom.ZipListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: OnProgress
        try {
             decoder.decodeStruct(chrome.mojom.ZipListener_OnProgress_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProgress (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnFinished
        try {
             decoder.decodeStruct(chrome.mojom.ZipListener_OnFinished_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFinished (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ZipListener_OnProgress_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onProgress');
          const result = this.impl.onProgress(params.bytes, params.files, params.directories);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ZipListener_OnFinished_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFinished');
          const result = this.impl.onFinished(params.success);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.ZipListenerReceiver = chrome.mojom.ZipListenerReceiver;

chrome.mojom.ZipListenerPtr = chrome.mojom.ZipListenerRemote;
chrome.mojom.ZipListenerRequest = chrome.mojom.ZipListenerPendingReceiver;


// Interface: ZipFileCreator
mojo.internal.Struct(
    chrome.mojom.ZipFileCreator_CreateZipFile_ParamsSpec, 'chrome.mojom.ZipFileCreator_CreateZipFile_Params', [
      mojo.internal.StructField('src_dir', 0, 0, mojo.internal.InterfaceProxy(filesystem.mojom.DirectoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('relative_paths', 8, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('zip_file', 16, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listener', 24, 0, mojo.internal.InterfaceProxy(chrome.mojom.ZipListenerSpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

chrome.mojom.ZipFileCreatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.ZipFileCreatorRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ZipFileCreator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.ZipFileCreatorPendingReceiver,
      handle);
    this.$ = new chrome.mojom.ZipFileCreatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.ZipFileCreatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createZipFile(src_dir, relative_paths, zip_file, listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.ZipFileCreator_CreateZipFile_ParamsSpec,
      null,
      [src_dir, relative_paths, zip_file, listener],
      false);
  }

};

chrome.mojom.ZipFileCreator.getRemote = function() {
  let remote = new chrome.mojom.ZipFileCreatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ZipFileCreator',
    'context');
  return remote.$;
};

chrome.mojom.ZipFileCreatorReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: CreateZipFile
        try {
             decoder.decodeStruct(chrome.mojom.ZipFileCreator_CreateZipFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateZipFile (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.ZipFileCreator_CreateZipFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createZipFile');
          const result = this.impl.createZipFile(params.src_dir, params.relative_paths, params.zip_file, params.listener);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.ZipFileCreatorReceiver = chrome.mojom.ZipFileCreatorReceiver;

chrome.mojom.ZipFileCreatorPtr = chrome.mojom.ZipFileCreatorRemote;
chrome.mojom.ZipFileCreatorRequest = chrome.mojom.ZipFileCreatorPendingReceiver;

