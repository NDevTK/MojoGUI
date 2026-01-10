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
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.WebBundleHandleRemote), null, false, 0, undefined),
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

network.mojom.WebBundleHandlePtr = network.mojom.WebBundleHandleRemote;
network.mojom.WebBundleHandleRequest = network.mojom.WebBundleHandlePendingReceiver;

