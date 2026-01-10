// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/file_chooser.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.ModeSpec = { $: mojo.internal.Enum() };
blink.mojom.FileChooserFileInfoSpec = { $: {} };
blink.mojom.FileChooserParamsSpec = { $: {} };
blink.mojom.NativeFileInfoSpec = { $: {} };
blink.mojom.FileSystemFileInfoSpec = { $: {} };
blink.mojom.FileChooserResultSpec = { $: {} };
blink.mojom.FileChooser = {};
blink.mojom.FileChooser.$interfaceName = 'blink.mojom.FileChooser';
blink.mojom.FileChooser_OpenFileChooser_ParamsSpec = { $: {} };
blink.mojom.FileChooser_OpenFileChooser_ResponseParamsSpec = { $: {} };
blink.mojom.FileChooser_EnumerateChosenDirectory_ParamsSpec = { $: {} };
blink.mojom.FileChooser_EnumerateChosenDirectory_ResponseParamsSpec = { $: {} };

// Enum: Mode
blink.mojom.Mode = {
  kOpen: 0,
  kOpenMultiple: 1,
  kUploadFolder: 2,
  kOpenDirectory: 3,
  kSave: 4,
};

// Union: FileChooserFileInfo
mojo.internal.Union(
    blink.mojom.FileChooserFileInfoSpec, 'blink.mojom.FileChooserFileInfo', {
      'native_file': {
        'ordinal': 0,
        'type': blink.mojom.NativeFileInfoSpec.$,
        'nullable': false,
      },
      'file_system': {
        'ordinal': 1,
        'type': blink.mojom.FileSystemFileInfoSpec.$,
        'nullable': false,
      },
    });

// Struct: FileChooserParams
mojo.internal.Struct(
    blink.mojom.FileChooserParamsSpec, 'blink.mojom.FileChooserParams', [
      mojo.internal.StructField('kOpen', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NativeFileInfo
mojo.internal.Struct(
    blink.mojom.NativeFileInfoSpec, 'blink.mojom.NativeFileInfo', [
      mojo.internal.StructField('file_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('base_subdirs', 16, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FileSystemFileInfo
mojo.internal.Struct(
    blink.mojom.FileSystemFileInfoSpec, 'blink.mojom.FileSystemFileInfo', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('modification_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('length', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FileChooserResult
mojo.internal.Struct(
    blink.mojom.FileChooserResultSpec, 'blink.mojom.FileChooserResult', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(blink.mojom.FileChooserFileInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('base_directory', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FileChooser
mojo.internal.Struct(
    blink.mojom.FileChooser_OpenFileChooser_ParamsSpec, 'blink.mojom.FileChooser_OpenFileChooser_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.FileChooserParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileChooser_OpenFileChooser_ResponseParamsSpec, 'blink.mojom.FileChooser_OpenFileChooser_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileChooserResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileChooser_EnumerateChosenDirectory_ParamsSpec, 'blink.mojom.FileChooser_EnumerateChosenDirectory_Params', [
      mojo.internal.StructField('directory_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileChooser_EnumerateChosenDirectory_ResponseParamsSpec, 'blink.mojom.FileChooser_EnumerateChosenDirectory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileChooserResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FileChooserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileChooserRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileChooser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileChooserPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileChooserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileChooserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openFileChooser(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileChooser_OpenFileChooser_ParamsSpec,
      blink.mojom.FileChooser_OpenFileChooser_ResponseParamsSpec,
      [params],
      false);
  }

  enumerateChosenDirectory(directory_path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileChooser_EnumerateChosenDirectory_ParamsSpec,
      blink.mojom.FileChooser_EnumerateChosenDirectory_ResponseParamsSpec,
      [directory_path],
      false);
  }

};

blink.mojom.FileChooser.getRemote = function() {
  let remote = new blink.mojom.FileChooserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileChooser',
    'context');
  return remote.$;
};

blink.mojom.FileChooserReceiver = class {
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
        
        // Try Method 0: OpenFileChooser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FileChooser_OpenFileChooser_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFileChooser (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: EnumerateChosenDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FileChooser_EnumerateChosenDirectory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnumerateChosenDirectory (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(blink.mojom.FileChooser_OpenFileChooser_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openFileChooser');
          const result = this.impl.openFileChooser(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileChooser_OpenFileChooser_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileChooser_EnumerateChosenDirectory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enumerateChosenDirectory');
          const result = this.impl.enumerateChosenDirectory(params.directory_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileChooser_EnumerateChosenDirectory_ResponseParamsSpec);
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

blink.mojom.FileChooserReceiver = blink.mojom.FileChooserReceiver;

blink.mojom.FileChooserPtr = blink.mojom.FileChooserRemote;
blink.mojom.FileChooserRequest = blink.mojom.FileChooserPendingReceiver;

