// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/file_system_access_context.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};
var blink = blink || {};


// Interface: FileSystemAccessContext
storage.mojom.mojom.FileSystemAccessContext = {};

storage.mojom.mojom.FileSystemAccessContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.FileSystemAccessContextRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.FileSystemAccessContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.FileSystemAccessContextPendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.FileSystemAccessContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.FileSystemAccessContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  serializeHandle(token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.mojom.FileSystemAccessContext_SerializeHandle_ParamsSpec,
      storage.mojom.mojom.FileSystemAccessContext_SerializeHandle_ResponseParamsSpec,
      [token]);
  }

  deserializeHandle(storage_key, bits, token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.mojom.FileSystemAccessContext_DeserializeHandle_ParamsSpec,
      null,
      [storage_key, bits, token]);
  }

  clone(receiever) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.mojom.FileSystemAccessContext_Clone_ParamsSpec,
      null,
      [receiever]);
  }

};

storage.mojom.mojom.FileSystemAccessContext.getRemote = function() {
  let remote = new storage.mojom.mojom.FileSystemAccessContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.FileSystemAccessContext',
    'context');
  return remote.$;
};

// ParamsSpec for SerializeHandle
storage.mojom.mojom.FileSystemAccessContext_SerializeHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.FileSystemAccessContext.SerializeHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.FileSystemAccessContext_SerializeHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.FileSystemAccessContext.SerializeHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bits', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeserializeHandle
storage.mojom.mojom.FileSystemAccessContext_DeserializeHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.FileSystemAccessContext.DeserializeHandle_Params',
      packedSize: 32,
      fields: [
        { name: 'storage_key', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false, minVersion: 0 },
        { name: 'bits', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Clone
storage.mojom.mojom.FileSystemAccessContext_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.FileSystemAccessContext.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiever', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
storage.mojom.mojom.FileSystemAccessContextPtr = storage.mojom.mojom.FileSystemAccessContextRemote;
storage.mojom.mojom.FileSystemAccessContextRequest = storage.mojom.mojom.FileSystemAccessContextPendingReceiver;

