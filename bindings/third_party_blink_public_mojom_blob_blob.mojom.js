// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/blob.mojom
// Module: blink.mojom

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
  onCalculatedSize(total_size, expected_content_size) {
    return this.$.onCalculatedSize(total_size, expected_content_size);
  }
  onComplete(status, data_length) {
    return this.$.onComplete(status, data_length);
  }
};

blink.mojom.BlobReaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BlobReaderClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onCalculatedSize(total_size, expected_content_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec,
      null,
      [total_size, expected_content_size],
      false);
  }

  onComplete(status, data_length) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('BlobReaderClient', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BlobReaderClient_OnComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec.$.structSpec);
          const result = this.impl.onCalculatedSize(params.total_size, params.expected_content_size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BlobReaderClient_OnComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onComplete(params.status, params.data_length);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.BlobReaderClientReceiver = blink.mojom.BlobReaderClientReceiver;

blink.mojom.BlobReaderClientPtr = blink.mojom.BlobReaderClientRemote;
blink.mojom.BlobReaderClientRequest = blink.mojom.BlobReaderClientPendingReceiver;


// Interface: Blob
mojo.internal.Struct(
    blink.mojom.Blob_Clone_ParamsSpec, 'blink.mojom.Blob_Clone_Params', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobRemote), null, false, 0, undefined),
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
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobReaderClientRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.Blob_ReadRange_ParamsSpec, 'blink.mojom.Blob_ReadRange_Params', [
      mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('client', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobReaderClientRemote), null, true, 0, undefined),
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
  clone(blob) {
    return this.$.clone(blob);
  }
  asDataPipeGetter(data_pipe_getter) {
    return this.$.asDataPipeGetter(data_pipe_getter);
  }
  readAll(pipe, client) {
    return this.$.readAll(pipe, client);
  }
  readRange(offset, length, pipe, client) {
    return this.$.readRange(offset, length, pipe, client);
  }
  load(loader, request_method, headers, client) {
    return this.$.load(loader, request_method, headers, client);
  }
  readSideData() {
    return this.$.readSideData();
  }
  captureSnapshot() {
    return this.$.captureSnapshot();
  }
  getInternalUUID() {
    return this.$.getInternalUUID();
  }
};

blink.mojom.BlobRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Blob', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  clone(blob) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.Blob_Clone_ParamsSpec,
      null,
      [blob],
      false);
  }

  asDataPipeGetter(data_pipe_getter) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.Blob_AsDataPipeGetter_ParamsSpec,
      null,
      [data_pipe_getter],
      false);
  }

  readAll(pipe, client) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.Blob_ReadAll_ParamsSpec,
      null,
      [pipe, client],
      false);
  }

  readRange(offset, length, pipe, client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.Blob_ReadRange_ParamsSpec,
      null,
      [offset, length, pipe, client],
      false);
  }

  load(loader, request_method, headers, client) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.Blob_Load_ParamsSpec,
      null,
      [loader, request_method, headers, client],
      false);
  }

  readSideData() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.Blob_ReadSideData_ParamsSpec,
      blink.mojom.Blob_ReadSideData_ResponseParamsSpec,
      [],
      false);
  }

  captureSnapshot() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.Blob_CaptureSnapshot_ParamsSpec,
      blink.mojom.Blob_CaptureSnapshot_ResponseParamsSpec,
      [],
      false);
  }

  getInternalUUID() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Blob', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Blob_Clone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Blob_AsDataPipeGetter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Blob_ReadAll_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Blob_ReadRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Blob_Load_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Blob_ReadSideData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Blob_CaptureSnapshot_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Blob_GetInternalUUID_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Blob_Clone_ParamsSpec.$.structSpec);
          const result = this.impl.clone(params.blob);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Blob_AsDataPipeGetter_ParamsSpec.$.structSpec);
          const result = this.impl.asDataPipeGetter(params.data_pipe_getter);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Blob_ReadAll_ParamsSpec.$.structSpec);
          const result = this.impl.readAll(params.pipe, params.client);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Blob_ReadRange_ParamsSpec.$.structSpec);
          const result = this.impl.readRange(params.offset, params.length, params.pipe, params.client);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Blob_Load_ParamsSpec.$.structSpec);
          const result = this.impl.load(params.loader, params.request_method, params.headers, params.client);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Blob_ReadSideData_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.Blob_CaptureSnapshot_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.Blob_GetInternalUUID_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

blink.mojom.BlobReceiver = blink.mojom.BlobReceiver;

blink.mojom.BlobPtr = blink.mojom.BlobRemote;
blink.mojom.BlobRequest = blink.mojom.BlobPendingReceiver;

