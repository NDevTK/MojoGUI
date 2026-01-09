// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/data_element.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: BytesProvider
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
      blink.mojom.BytesProvider_RequestAsReply_ParamsSpec.$,
      blink.mojom.BytesProvider_RequestAsReply_ResponseParamsSpec.$,
      []);
  }

  requestAsStream(pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BytesProvider_RequestAsStream_ParamsSpec.$,
      null,
      [pipe]);
  }

  requestAsFile(source_offset, source_size, file, file_offset) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BytesProvider_RequestAsFile_ParamsSpec.$,
      blink.mojom.BytesProvider_RequestAsFile_ResponseParamsSpec.$,
      [source_offset, source_size, file, file_offset]);
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

// ParamsSpec for RequestAsReply
blink.mojom.BytesProvider_RequestAsReply_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BytesProvider.RequestAsReply_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.BytesProvider_RequestAsReply_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BytesProvider.RequestAsReply_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestAsStream
blink.mojom.BytesProvider_RequestAsStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BytesProvider.RequestAsStream_Params',
      packedSize: 16,
      fields: [
        { name: 'pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestAsFile
blink.mojom.BytesProvider_RequestAsFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BytesProvider.RequestAsFile_Params',
      packedSize: 40,
      fields: [
        { name: 'source_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'file', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'file_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.BytesProvider_RequestAsFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BytesProvider.RequestAsFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'time_file_modified', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.BytesProviderPtr = blink.mojom.BytesProviderRemote;
blink.mojom.BytesProviderRequest = blink.mojom.BytesProviderPendingReceiver;

