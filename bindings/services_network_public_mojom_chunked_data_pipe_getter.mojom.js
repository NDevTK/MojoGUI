// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/chunked_data_pipe_getter.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: ChunkedDataPipeGetter
network.mojom.ChunkedDataPipeGetter = {};

network.mojom.ChunkedDataPipeGetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ChunkedDataPipeGetterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ChunkedDataPipeGetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ChunkedDataPipeGetterPendingReceiver,
      handle);
    this.$ = new network.mojom.ChunkedDataPipeGetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ChunkedDataPipeGetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSize() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec,
      network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParamsSpec,
      []);
  }

  startReading(pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec,
      null,
      [pipe]);
  }

};

network.mojom.ChunkedDataPipeGetter.getRemote = function() {
  let remote = new network.mojom.ChunkedDataPipeGetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ChunkedDataPipeGetter',
    'context');
  return remote.$;
};

// ParamsSpec for GetSize
network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ChunkedDataPipeGetter.GetSize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ChunkedDataPipeGetter.GetSize_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for StartReading
network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ChunkedDataPipeGetter.StartReading_Params',
      packedSize: 16,
      fields: [
        { name: 'pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.ChunkedDataPipeGetterPtr = network.mojom.ChunkedDataPipeGetterRemote;
network.mojom.ChunkedDataPipeGetterRequest = network.mojom.ChunkedDataPipeGetterPendingReceiver;

