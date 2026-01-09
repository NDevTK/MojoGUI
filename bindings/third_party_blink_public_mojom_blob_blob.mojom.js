// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/blob.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: BlobReaderClient
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
      blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec.$,
      null,
      [total_size, expected_content_size]);
  }

  onComplete(status, data_length) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BlobReaderClient_OnComplete_ParamsSpec.$,
      null,
      [status, data_length]);
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

// ParamsSpec for OnCalculatedSize
blink.mojom.BlobReaderClient_OnCalculatedSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobReaderClient.OnCalculatedSize_Params',
      packedSize: 24,
      fields: [
        { name: 'total_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'expected_content_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnComplete
blink.mojom.BlobReaderClient_OnComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlobReaderClient.OnComplete_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.BlobReaderClientPtr = blink.mojom.BlobReaderClientRemote;
blink.mojom.BlobReaderClientRequest = blink.mojom.BlobReaderClientPendingReceiver;


// Interface: Blob
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
      blink.mojom.Blob_Clone_ParamsSpec.$,
      null,
      [blob]);
  }

  asDataPipeGetter(data_pipe_getter) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.Blob_AsDataPipeGetter_ParamsSpec.$,
      null,
      [data_pipe_getter]);
  }

  readAll(pipe, client) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.Blob_ReadAll_ParamsSpec.$,
      null,
      [pipe, client]);
  }

  readRange(offset, length, pipe, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.Blob_ReadRange_ParamsSpec.$,
      null,
      [offset, length, pipe, client]);
  }

  load(loader, request_method, headers, client) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.Blob_Load_ParamsSpec.$,
      null,
      [loader, request_method, headers, client]);
  }

  readSideData() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.Blob_ReadSideData_ParamsSpec.$,
      blink.mojom.Blob_ReadSideData_ResponseParamsSpec.$,
      []);
  }

  captureSnapshot() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.Blob_CaptureSnapshot_ParamsSpec.$,
      blink.mojom.Blob_CaptureSnapshot_ResponseParamsSpec.$,
      []);
  }

  getInternalUUID() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.Blob_GetInternalUUID_ParamsSpec.$,
      blink.mojom.Blob_GetInternalUUID_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for Clone
blink.mojom.Blob_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Blob.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AsDataPipeGetter
blink.mojom.Blob_AsDataPipeGetter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Blob.AsDataPipeGetter_Params',
      packedSize: 16,
      fields: [
        { name: 'data_pipe_getter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadAll
blink.mojom.Blob_ReadAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Blob.ReadAll_Params',
      packedSize: 24,
      fields: [
        { name: 'pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadRange
blink.mojom.Blob_ReadRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Blob.ReadRange_Params',
      packedSize: 40,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pipe', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Load
blink.mojom.Blob_Load_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Blob.Load_Params',
      packedSize: 40,
      fields: [
        { name: 'loader', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'request_method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'headers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReadSideData
blink.mojom.Blob_ReadSideData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Blob.ReadSideData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.Blob_ReadSideData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Blob.ReadSideData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CaptureSnapshot
blink.mojom.Blob_CaptureSnapshot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Blob.CaptureSnapshot_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.Blob_CaptureSnapshot_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Blob.CaptureSnapshot_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'length', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'modification_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetInternalUUID
blink.mojom.Blob_GetInternalUUID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Blob.GetInternalUUID_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.Blob_GetInternalUUID_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Blob.GetInternalUUID_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.BlobPtr = blink.mojom.BlobRemote;
blink.mojom.BlobRequest = blink.mojom.BlobPendingReceiver;

