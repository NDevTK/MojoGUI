// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/blob.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};

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

blink.mojom.BlobPtr = blink.mojom.BlobRemote;
blink.mojom.BlobRequest = blink.mojom.BlobPendingReceiver;

