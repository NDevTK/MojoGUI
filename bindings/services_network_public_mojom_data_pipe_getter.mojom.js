// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/data_pipe_getter.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: DataPipeGetter
network.mojom.DataPipeGetter = {};

network.mojom.DataPipeGetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.DataPipeGetterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DataPipeGetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.DataPipeGetterPendingReceiver,
      handle);
    this.$ = new network.mojom.DataPipeGetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.DataPipeGetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read(pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.DataPipeGetter_Read_ParamsSpec,
      network.mojom.DataPipeGetter_Read_ResponseParamsSpec,
      network.mojom.DataPipeGetter_Read_ResponseParamsSpec,
      [pipe],
      undefined,
      undefined
    );
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DataPipeGetter_Clone_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

};

network.mojom.DataPipeGetter.getRemote = function() {
  let remote = new network.mojom.DataPipeGetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DataPipeGetter',
    'context');
  return remote.$;
};

// ParamsSpec for Read
network.mojom.DataPipeGetter_Read_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataPipeGetter.Read_Params',
      packedSize: 16,
      fields: [
        { name: 'pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.DataPipeGetter_Read_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataPipeGetter.Read_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.DataPipeGetter_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataPipeGetter.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.DataPipeGetterPtr = network.mojom.DataPipeGetterRemote;
network.mojom.DataPipeGetterRequest = network.mojom.DataPipeGetterPendingReceiver;

