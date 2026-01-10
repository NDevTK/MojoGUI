// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/blob.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};

blink.mojom.BlobReaderClient = {};
blink.mojom.BlobReaderClient.$interfaceName = 'blink.mojom.BlobReaderClient';
blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec = { $: {} };
blink.mojom.BlobReaderClient_OnComplete_ParamsSpec = { $: {} };
blink.mojom.Blob = {};
blink.mojom.Blob.$interfaceName = 'blink.mojom.Blob';
blink.mojom.Blob_Clone_ParamsSpec = { $: {} };
blink.mojom.Blob_AsDataPipeGetter_ParamsSpec = { $: {} };
blink.mojom.Blob_ReadAll_ParamsSpec = { $: {} };
blink.mojom.Blob_ReadRange_ParamsSpec = { $: {} };
blink.mojom.Blob_Load_ParamsSpec = { $: {} };
blink.mojom.Blob_ReadSideData_ParamsSpec = { $: {} };
blink.mojom.Blob_ReadSideData_ResponseParamsSpec = { $: {} };
blink.mojom.Blob_CaptureSnapshot_ParamsSpec = { $: {} };
blink.mojom.Blob_CaptureSnapshot_ResponseParamsSpec = { $: {} };
blink.mojom.Blob_GetInternalUUID_ParamsSpec = { $: {} };
blink.mojom.Blob_GetInternalUUID_ResponseParamsSpec = { $: {} };

// Interface: BlobReaderClient
mojo.internal.Struct(
    blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec, 'blink.mojom.BlobReaderClient_OnCalculatedSize_Params', [
      mojo.internal.StructField('total_size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('expected_content_size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BlobReaderClient_OnComplete_ParamsSpec, 'blink.mojom.BlobReaderClient_OnComplete_Params', [
      mojo.internal.StructField('data_length', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.BlobReaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BlobReaderClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BlobReaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BlobReaderClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.BlobReaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BlobReaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCalculatedSize(total_size, expected_content_size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec,
      null,
      [total_size, expected_content_size],
      false);
  }

  onComplete(status, data_length) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BlobReaderClient_OnComplete_ParamsSpec,
      null,
      [status, data_length],
      false);
  }

};

blink.mojom.BlobReaderClient.getRemote = function() {
  let remote = new blink.mojom.BlobReaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BlobReaderClient',
    'context');
  return remote.$;
};

blink.mojom.BlobReaderClientReceiver = class {
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
        
        // Try Method 0: OnCalculatedSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCalculatedSize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.BlobReaderClient_OnComplete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnComplete (1)');
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
          const params = decoder.decodeStruct(blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCalculatedSize');
          const result = this.impl.onCalculatedSize(params.total_size, params.expected_content_size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BlobReaderClient_OnComplete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onComplete');
          const result = this.impl.onComplete(params.status, params.data_length);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.BlobReaderClientReceiver = blink.mojom.BlobReaderClientReceiver;

blink.mojom.BlobReaderClientPtr = blink.mojom.BlobReaderClientRemote;
blink.mojom.BlobReaderClientRequest = blink.mojom.BlobReaderClientPendingReceiver;


// Interface: Blob
mojo.internal.Struct(
    blink.mojom.Blob_Clone_ParamsSpec, 'blink.mojom.Blob_Clone_Params', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Blob_AsDataPipeGetter_ParamsSpec, 'blink.mojom.Blob_AsDataPipeGetter_Params', [
      mojo.internal.StructField('data_pipe_getter', 0, 0, mojo.internal.InterfaceRequest(network.mojom.DataPipeGetterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Blob_ReadAll_ParamsSpec, 'blink.mojom.Blob_ReadAll_Params', [
      mojo.internal.StructField('pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobReaderClientSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.Blob_ReadRange_ParamsSpec, 'blink.mojom.Blob_ReadRange_Params', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('client', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobReaderClientSpec), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.Blob_Load_ParamsSpec, 'blink.mojom.Blob_Load_Params', [
      mojo.internal.StructField('loader', 0, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderRemote), null, false, 0, undefined),
      mojo.internal.StructField('request_method', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('headers', 16, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 24, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderClientRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.Blob_ReadSideData_ParamsSpec, 'blink.mojom.Blob_ReadSideData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Blob_ReadSideData_ResponseParamsSpec, 'blink.mojom.Blob_ReadSideData_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Blob_CaptureSnapshot_ParamsSpec, 'blink.mojom.Blob_CaptureSnapshot_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Blob_CaptureSnapshot_ResponseParamsSpec, 'blink.mojom.Blob_CaptureSnapshot_ResponseParams', [
      mojo.internal.StructField('length', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('modification_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.Blob_GetInternalUUID_ParamsSpec, 'blink.mojom.Blob_GetInternalUUID_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Blob_GetInternalUUID_ResponseParamsSpec, 'blink.mojom.Blob_GetInternalUUID_ResponseParams', [
      mojo.internal.StructField('uuid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BlobPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BlobRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.Blob';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BlobPendingReceiver,
      handle);
    this.$ = new blink.mojom.BlobRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BlobRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clone(blob) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.Blob_Clone_ParamsSpec,
      null,
      [blob],
      false);
  }

  asDataPipeGetter(data_pipe_getter) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.Blob_AsDataPipeGetter_ParamsSpec,
      null,
      [data_pipe_getter],
      false);
  }

  readAll(pipe, client) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.Blob_ReadAll_ParamsSpec,
      null,
      [pipe, client],
      false);
  }

  readRange(offset, length, pipe, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.Blob_ReadRange_ParamsSpec,
      null,
      [offset, length, pipe, client],
      false);
  }

  load(loader, request_method, headers, client) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.Blob_Load_ParamsSpec,
      null,
      [loader, request_method, headers, client],
      false);
  }

  readSideData() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.Blob_ReadSideData_ParamsSpec,
      blink.mojom.Blob_ReadSideData_ResponseParamsSpec,
      [],
      false);
  }

  captureSnapshot() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.Blob_CaptureSnapshot_ParamsSpec,
      blink.mojom.Blob_CaptureSnapshot_ResponseParamsSpec,
      [],
      false);
  }

  getInternalUUID() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.Blob_GetInternalUUID_ParamsSpec,
      blink.mojom.Blob_GetInternalUUID_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.Blob.getRemote = function() {
  let remote = new blink.mojom.BlobRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.Blob',
    'context');
  return remote.$;
};

blink.mojom.BlobReceiver = class {
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
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
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
        
        // Try Method 0: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.Blob_Clone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: AsDataPipeGetter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.Blob_AsDataPipeGetter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AsDataPipeGetter (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: ReadAll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.Blob_ReadAll_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadAll (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: ReadRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.Blob_ReadRange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadRange (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: Load
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.Blob_Load_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Load (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: ReadSideData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.Blob_ReadSideData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadSideData (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: CaptureSnapshot
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.Blob_CaptureSnapshot_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CaptureSnapshot (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: GetInternalUUID
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.Blob_GetInternalUUID_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInternalUUID (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
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
          const params = decoder.decodeStruct(blink.mojom.Blob_Clone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.blob);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.Blob_AsDataPipeGetter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.asDataPipeGetter');
          const result = this.impl.asDataPipeGetter(params.data_pipe_getter);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.Blob_ReadAll_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readAll');
          const result = this.impl.readAll(params.pipe, params.client);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.Blob_ReadRange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readRange');
          const result = this.impl.readRange(params.offset, params.length, params.pipe, params.client);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.Blob_Load_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.load');
          const result = this.impl.load(params.loader, params.request_method, params.headers, params.client);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.Blob_ReadSideData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.readSideData');
          const result = this.impl.readSideData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.Blob_ReadSideData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.Blob_CaptureSnapshot_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.captureSnapshot');
          const result = this.impl.captureSnapshot();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.Blob_CaptureSnapshot_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.Blob_GetInternalUUID_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getInternalUUID');
          const result = this.impl.getInternalUUID();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.Blob_GetInternalUUID_ResponseParamsSpec);
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

blink.mojom.BlobReceiver = blink.mojom.BlobReceiver;

blink.mojom.BlobPtr = blink.mojom.BlobRemote;
blink.mojom.BlobRequest = blink.mojom.BlobPendingReceiver;

