// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/data_pipe_getter.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.DataPipeGetter = {};
network.mojom.DataPipeGetter.$interfaceName = 'network.mojom.DataPipeGetter';
network.mojom.DataPipeGetter_Read_ParamsSpec = { $: {} };
network.mojom.DataPipeGetter_Read_ResponseParamsSpec = { $: {} };
network.mojom.DataPipeGetter_Clone_ParamsSpec = { $: {} };

// Interface: DataPipeGetter
mojo.internal.Struct(
    network.mojom.DataPipeGetter_Read_ParamsSpec, 'network.mojom.DataPipeGetter_Read_Params', [
      mojo.internal.StructField('pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.DataPipeGetter_Read_ResponseParamsSpec, 'network.mojom.DataPipeGetter_Read_ResponseParams', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.DataPipeGetter_Clone_ParamsSpec, 'network.mojom.DataPipeGetter_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.DataPipeGetterSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [pipe],
      false);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DataPipeGetter_Clone_ParamsSpec,
      null,
      [receiver],
      false);
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

network.mojom.DataPipeGetterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.DataPipeGetter_Read_ParamsSpec.$.decode(message.payload);
          const result = this.impl.read(params.pipe);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.DataPipeGetter_Read_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = network.mojom.DataPipeGetter_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.receiver);
          break;
        }
      }
    });
  }
};

network.mojom.DataPipeGetterReceiver = network.mojom.DataPipeGetterReceiver;

network.mojom.DataPipeGetterPtr = network.mojom.DataPipeGetterRemote;
network.mojom.DataPipeGetterRequest = network.mojom.DataPipeGetterPendingReceiver;

