// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/data_element.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.DataElementSpec = { $: {} };
blink.mojom.DataElementBytesSpec = { $: {} };
blink.mojom.DataElementFileSpec = { $: {} };
blink.mojom.DataElementBlobSpec = { $: {} };
blink.mojom.BytesProvider = {};
blink.mojom.BytesProvider.$interfaceName = 'blink.mojom.BytesProvider';
blink.mojom.BytesProvider_RequestAsReply_ParamsSpec = { $: {} };
blink.mojom.BytesProvider_RequestAsReply_ResponseParamsSpec = { $: {} };
blink.mojom.BytesProvider_RequestAsStream_ParamsSpec = { $: {} };
blink.mojom.BytesProvider_RequestAsFile_ParamsSpec = { $: {} };
blink.mojom.BytesProvider_RequestAsFile_ResponseParamsSpec = { $: {} };

blink.mojom.kMaximumEmbeddedDataSize = 256000;

// Union: DataElement
mojo.internal.Union(
    blink.mojom.DataElementSpec, 'blink.mojom.DataElement', {
      'bytes': {
        'ordinal': 0,
        'type': blink.mojom.DataElementBytesSpec.$,
        'nullable': false,
      },
      'file': {
        'ordinal': 1,
        'type': blink.mojom.DataElementFileSpec.$,
        'nullable': false,
      },
      'blob': {
        'ordinal': 2,
        'type': blink.mojom.DataElementBlobSpec.$,
        'nullable': false,
      },
    });

// Struct: DataElementBytes
mojo.internal.Struct(
    blink.mojom.DataElementBytesSpec, 'blink.mojom.DataElementBytes', [
      mojo.internal.StructField('kMaximumEmbeddedDataSize', 0, 0, mojo.internal.Pointer, 256000, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('embedded_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('data', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.BytesProviderSpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DataElementFile
mojo.internal.Struct(
    blink.mojom.DataElementFileSpec, 'blink.mojom.DataElementFile', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('expected_modification_time', 24, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DataElementBlob
mojo.internal.Struct(
    blink.mojom.DataElementBlobSpec, 'blink.mojom.DataElementBlob', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: BytesProvider
mojo.internal.Struct(
    blink.mojom.BytesProvider_RequestAsReply_ParamsSpec, 'blink.mojom.BytesProvider_RequestAsReply_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BytesProvider_RequestAsReply_ResponseParamsSpec, 'blink.mojom.BytesProvider_RequestAsReply_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BytesProvider_RequestAsStream_ParamsSpec, 'blink.mojom.BytesProvider_RequestAsStream_Params', [
      mojo.internal.StructField('pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BytesProvider_RequestAsFile_ParamsSpec, 'blink.mojom.BytesProvider_RequestAsFile_Params', [
      mojo.internal.StructField('source_offset', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('source_size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('file', 16, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_offset', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.BytesProvider_RequestAsFile_ResponseParamsSpec, 'blink.mojom.BytesProvider_RequestAsFile_ResponseParams', [
      mojo.internal.StructField('time_file_modified', 0, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BytesProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BytesProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BytesProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BytesProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.BytesProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BytesProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestAsReply() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BytesProvider_RequestAsReply_ParamsSpec,
      blink.mojom.BytesProvider_RequestAsReply_ResponseParamsSpec,
      [],
      false);
  }

  requestAsStream(pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BytesProvider_RequestAsStream_ParamsSpec,
      null,
      [pipe],
      false);
  }

  requestAsFile(source_offset, source_size, file, file_offset) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BytesProvider_RequestAsFile_ParamsSpec,
      blink.mojom.BytesProvider_RequestAsFile_ResponseParamsSpec,
      [source_offset, source_size, file, file_offset],
      false);
  }

};

blink.mojom.BytesProvider.getRemote = function() {
  let remote = new blink.mojom.BytesProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BytesProvider',
    'context');
  return remote.$;
};

blink.mojom.BytesProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: RequestAsReply
        try {
             decoder.decodeStruct(blink.mojom.BytesProvider_RequestAsReply_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAsReply (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: RequestAsStream
        try {
             decoder.decodeStruct(blink.mojom.BytesProvider_RequestAsStream_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAsStream (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: RequestAsFile
        try {
             decoder.decodeStruct(blink.mojom.BytesProvider_RequestAsFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAsFile (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BytesProvider_RequestAsReply_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestAsReply');
          const result = this.impl.requestAsReply();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BytesProvider_RequestAsReply_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BytesProvider_RequestAsStream_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestAsStream');
          const result = this.impl.requestAsStream(params.pipe);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BytesProvider_RequestAsFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestAsFile');
          const result = this.impl.requestAsFile(params.source_offset, params.source_size, params.file, params.file_offset);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BytesProvider_RequestAsFile_ResponseParamsSpec);
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

blink.mojom.BytesProviderReceiver = blink.mojom.BytesProviderReceiver;

blink.mojom.BytesProviderPtr = blink.mojom.BytesProviderRemote;
blink.mojom.BytesProviderRequest = blink.mojom.BytesProviderPendingReceiver;

