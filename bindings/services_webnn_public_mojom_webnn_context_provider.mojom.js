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
      webnn.mojom.WebNNContextProvider_CreateWebNNContext_ResponseParamsSpec,
      [options],
      undefined,
      undefined
    );
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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
webnn.mojom.WebNNContextProviderPtr = webnn.mojom.WebNNContextProviderRemote;
webnn.mojom.WebNNContextProviderRequest = webnn.mojom.WebNNContextProviderPendingReceiver;

