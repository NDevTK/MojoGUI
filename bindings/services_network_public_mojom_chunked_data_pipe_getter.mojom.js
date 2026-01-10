// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/chunked_data_pipe_getter.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.ChunkedDataPipeGetter = {};
network.mojom.ChunkedDataPipeGetter.$interfaceName = 'network.mojom.ChunkedDataPipeGetter';
network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec = { $: {} };
network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParamsSpec = { $: {} };
network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec = { $: {} };

// Interface: ChunkedDataPipeGetter
mojo.internal.Struct(
    network.mojom.ChunkedDataPipeGetter_GetSize_ParamsSpec, 'network.mojom.ChunkedDataPipeGetter_GetSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParamsSpec, 'network.mojom.ChunkedDataPipeGetter_GetSize_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec, 'network.mojom.ChunkedDataPipeGetter_StartReading_Params', [
      mojo.internal.StructField('pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  startReading(pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ChunkedDataPipeGetter_StartReading_ParamsSpec,
      null,
      [pipe],
      false);
  }

};

network.mojom.ChunkedDataPipeGetter.getRemote = function() {
  let remote = new network.mojom.ChunkedDataPipeGetterRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.ChunkedDataPipeGetter',
    'context');
  return remote.$;
};

network.mojom.ChunkedDataPipeGetterPtr = network.mojom.ChunkedDataPipeGetterRemote;
network.mojom.ChunkedDataPipeGetterRequest = network.mojom.ChunkedDataPipeGetterPendingReceiver;

