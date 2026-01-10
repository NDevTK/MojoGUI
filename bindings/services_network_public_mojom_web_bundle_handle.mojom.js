// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/web_bundle_handle.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.WebBundleErrorTypeSpec = { $: mojo.internal.Enum() };
network.mojom.WebBundleHandle = {};
network.mojom.WebBundleHandle.$interfaceName = 'network.mojom.WebBundleHandle';
network.mojom.WebBundleHandle_Clone_ParamsSpec = { $: {} };
network.mojom.WebBundleHandle_OnWebBundleError_ParamsSpec = { $: {} };
network.mojom.WebBundleHandle_OnWebBundleLoadFinished_ParamsSpec = { $: {} };

// Enum: WebBundleErrorType
network.mojom.WebBundleErrorType = {
  kMetadataParseError: 0,
  kResponseParseError: 1,
  kResourceNotFound: 2,
  kMemoryQuotaExceeded: 3,
  kServingConstraintsNotMet: 4,
  kWebBundleFetchFailed: 5,
  kWebBundleRedirected: 6,
  kDeprecationWarning: 7,
};

// Interface: WebBundleHandle
mojo.internal.Struct(
    network.mojom.WebBundleHandle_Clone_ParamsSpec, 'network.mojom.WebBundleHandle_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.WebBundleHandleSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.WebBundleHandle_OnWebBundleError_ParamsSpec, 'network.mojom.WebBundleHandle_OnWebBundleError_Params', [
      mojo.internal.StructField('type', 0, 0, network.mojom.WebBundleErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.WebBundleHandle_OnWebBundleLoadFinished_ParamsSpec, 'network.mojom.WebBundleHandle_OnWebBundleLoadFinished_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.WebBundleHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.WebBundleHandleRemote = class {
  static get $interfaceName() {
    return 'network.mojom.WebBundleHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.WebBundleHandlePendingReceiver,
      handle);
    this.$ = new network.mojom.WebBundleHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.WebBundleHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clone(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.WebBundleHandle_Clone_ParamsSpec,
      null,
      [receiver],
      false);
  }

  onWebBundleError(type, message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.WebBundleHandle_OnWebBundleError_ParamsSpec,
      null,
      [type, message],
      false);
  }

  onWebBundleLoadFinished(success) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.WebBundleHandle_OnWebBundleLoadFinished_ParamsSpec,
      null,
      [success],
      false);
  }

};

network.mojom.WebBundleHandle.getRemote = function() {
  let remote = new network.mojom.WebBundleHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.WebBundleHandle',
    'context');
  return remote.$;
};

network.mojom.WebBundleHandleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.WebBundleHandle_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.receiver);
          break;
        }
        case 1: {
          const params = network.mojom.WebBundleHandle_OnWebBundleError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWebBundleError(params.type, params.message);
          break;
        }
        case 2: {
          const params = network.mojom.WebBundleHandle_OnWebBundleLoadFinished_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWebBundleLoadFinished(params.success);
          break;
        }
      }
    }});
  }
};

network.mojom.WebBundleHandleReceiver = network.mojom.WebBundleHandleReceiver;

network.mojom.WebBundleHandlePtr = network.mojom.WebBundleHandleRemote;
network.mojom.WebBundleHandleRequest = network.mojom.WebBundleHandlePendingReceiver;

