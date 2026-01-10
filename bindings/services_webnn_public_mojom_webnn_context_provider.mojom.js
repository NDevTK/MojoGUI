// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/webnn_context_provider.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var blink = blink || {};

webnn.mojom.PowerPreferenceSpec = { $: mojo.internal.Enum() };
webnn.mojom.CreateContextResultSpec = { $: {} };
webnn.mojom.CreateContextOptionsSpec = { $: {} };
webnn.mojom.CreateContextSuccessSpec = { $: {} };
webnn.mojom.WebNNContextProvider = {};
webnn.mojom.WebNNContextProvider.$interfaceName = 'webnn.mojom.WebNNContextProvider';
webnn.mojom.WebNNContextProvider_CreateWebNNContext_ParamsSpec = { $: {} };
webnn.mojom.WebNNContextProvider_CreateWebNNContext_ResponseParamsSpec = { $: {} };

// Enum: PowerPreference
webnn.mojom.PowerPreference = {
  kDefault: 0,
  kHighPerformance: 1,
  kLowPower: 2,
};

// Union: CreateContextResult
mojo.internal.Union(
    webnn.mojom.CreateContextResultSpec, 'webnn.mojom.CreateContextResult', {
      'success': {
        'ordinal': 0,
        'type': webnn.mojom.CreateContextSuccessSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': webnn.mojom.ErrorSpec,
        'nullable': false,
      },
    });

// Struct: CreateContextOptions
mojo.internal.Struct(
    webnn.mojom.CreateContextOptionsSpec, 'webnn.mojom.CreateContextOptions', [
      mojo.internal.StructField('kDefault', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CreateContextSuccess
mojo.internal.Struct(
    webnn.mojom.CreateContextSuccessSpec, 'webnn.mojom.CreateContextSuccess', [
      mojo.internal.StructField('context_remote', 0, 0, mojo.internal.InterfaceProxy(webnn.mojom.WebNNContextRemote), null, true, 0, undefined),
      mojo.internal.StructField('context_properties', 8, 0, webnn.mojom.ContextPropertiesSpec, null, false, 0, undefined),
      mojo.internal.StructField('context_handle', 16, 0, blink.mojom.WebNNContextTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('write_tensor_producer', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('read_tensor_consumer', 32, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Interface: WebNNContextProvider
mojo.internal.Struct(
    webnn.mojom.WebNNContextProvider_CreateWebNNContext_ParamsSpec, 'webnn.mojom.WebNNContextProvider_CreateWebNNContext_Params', [
      mojo.internal.StructField('options', 0, 0, webnn.mojom.CreateContextOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    webnn.mojom.WebNNContextProvider_CreateWebNNContext_ResponseParamsSpec, 'webnn.mojom.WebNNContextProvider_CreateWebNNContext_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, webnn.mojom.CreateContextResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

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

webnn.mojom.WebNNContextProviderPtr = webnn.mojom.WebNNContextProviderRemote;
webnn.mojom.WebNNContextProviderRequest = webnn.mojom.WebNNContextProviderPendingReceiver;

