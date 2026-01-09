// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_context_provider.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};


// Enum: PowerPreference
webnn.mojom.PowerPreference = {
  kDefault: 0,
  kHighPerformance: 1,
  kLowPower: 2,
};

// Struct: CreateContextOptions
webnn.mojom.CreateContextOptionsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.CreateContextOptions',
      packedSize: 16,
      fields: [
        { name: 'kDefault', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CreateContextSuccess
webnn.mojom.CreateContextSuccessSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.CreateContextSuccess',
      packedSize: 48,
      fields: [
        { name: 'context_properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'context_handle', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WebNNContextTokenSpec, nullable: false },
        { name: 'write_tensor_producer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'read_tensor_consumer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'context_remote', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: WebNNContextProvider
webnn.mojom.WebNNContextProvider = {};

webnn.mojom.WebNNContextProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webnn.mojom.WebNNContextProviderRemote = class {
  static get $interfaceName() {
    return 'webnn.mojom.WebNNContextProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webnn.mojom.WebNNContextProviderPendingReceiver,
      handle);
    this.$ = new webnn.mojom.WebNNContextProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webnn.mojom.WebNNContextProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWebNNContext(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webnn.mojom.WebNNContextProvider_CreateWebNNContext_ParamsSpec,
      webnn.mojom.WebNNContextProvider_CreateWebNNContext_ResponseParamsSpec,
      [options]);
  }

};

webnn.mojom.WebNNContextProvider.getRemote = function() {
  let remote = new webnn.mojom.WebNNContextProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webnn.mojom.WebNNContextProvider',
    'context');
  return remote.$;
};

// ParamsSpec for CreateWebNNContext
webnn.mojom.WebNNContextProvider_CreateWebNNContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNContextProvider.CreateWebNNContext_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.CreateContextOptionsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

webnn.mojom.WebNNContextProvider_CreateWebNNContext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNContextProvider.CreateWebNNContext_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
webnn.mojom.WebNNContextProviderPtr = webnn.mojom.WebNNContextProviderRemote;
webnn.mojom.WebNNContextProviderRequest = webnn.mojom.WebNNContextProviderPendingReceiver;

