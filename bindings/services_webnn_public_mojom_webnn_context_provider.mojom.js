// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_context_provider.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};
var blink = blink || {};


// Enum: PowerPreference
webnn.mojom.mojom.PowerPreference = {
  kDefault: 0,
  kHighPerformance: 1,
  kLowPower: 2,
};
webnn.mojom.mojom.PowerPreferenceSpec = { $: mojo.internal.Enum() };

// Union: CreateContextResult
webnn.mojom.mojom.CreateContextResultSpec = { $: mojo.internal.Union(
    'webnn.mojom.CreateContextResult', {
      'success': {
        'ordinal': 0,
        'type': webnn.mojom.CreateContextSuccessSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': webnn.mojom.ErrorSpec,
      }},
    })
};

// Struct: CreateContextOptions
webnn.mojom.mojom.CreateContextOptionsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.CreateContextOptions',
      packedSize: 16,
      fields: [
        { name: 'kDefault', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CreateContextSuccess
webnn.mojom.mojom.CreateContextSuccessSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.CreateContextSuccess',
      packedSize: 48,
      fields: [
        { name: 'context_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(webnn.mojom.WebNNContextRemote), nullable: true, minVersion: 0 },
        { name: 'context_properties', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.ContextPropertiesSpec, nullable: false, minVersion: 0 },
        { name: 'context_handle', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.WebNNContextTokenSpec, nullable: false, minVersion: 0 },
        { name: 'write_tensor_producer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'read_tensor_consumer', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: WebNNContextProvider
webnn.mojom.mojom.WebNNContextProvider = {};

webnn.mojom.mojom.WebNNContextProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

webnn.mojom.mojom.WebNNContextProviderRemote = class {
  static get $interfaceName() {
    return 'webnn.mojom.WebNNContextProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      webnn.mojom.mojom.WebNNContextProviderPendingReceiver,
      handle);
    this.$ = new webnn.mojom.mojom.WebNNContextProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

webnn.mojom.mojom.WebNNContextProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWebNNContext(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      webnn.mojom.mojom.WebNNContextProvider_CreateWebNNContext_ParamsSpec,
      webnn.mojom.mojom.WebNNContextProvider_CreateWebNNContext_ResponseParamsSpec,
      [options]);
  }

};

webnn.mojom.mojom.WebNNContextProvider.getRemote = function() {
  let remote = new webnn.mojom.mojom.WebNNContextProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webnn.mojom.WebNNContextProvider',
    'context');
  return remote.$;
};

// ParamsSpec for CreateWebNNContext
webnn.mojom.mojom.WebNNContextProvider_CreateWebNNContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNContextProvider.CreateWebNNContext_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.CreateContextOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

webnn.mojom.mojom.WebNNContextProvider_CreateWebNNContext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.WebNNContextProvider.CreateWebNNContext_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: webnn.mojom.CreateContextResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
webnn.mojom.mojom.WebNNContextProviderPtr = webnn.mojom.mojom.WebNNContextProviderRemote;
webnn.mojom.mojom.WebNNContextProviderRequest = webnn.mojom.mojom.WebNNContextProviderPendingReceiver;

