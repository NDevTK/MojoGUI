// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/web_bundle_handle.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


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
network.mojom.WebBundleErrorTypeSpec = { $: mojo.internal.Enum() };

// Interface: WebBundleHandle
network.mojom.WebBundleHandle = {};

network.mojom.WebBundleHandle_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebBundleHandle_Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.WebBundleHandleRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.WebBundleHandle_OnWebBundleError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebBundleHandle_OnWebBundleError_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.WebBundleErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

network.mojom.WebBundleHandle_OnWebBundleLoadFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebBundleHandle_OnWebBundleLoadFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [receiver]);
  }

  onWebBundleError(type, message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.WebBundleHandle_OnWebBundleError_ParamsSpec,
      null,
      [type, message]);
  }

  onWebBundleLoadFinished(success) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.WebBundleHandle_OnWebBundleLoadFinished_ParamsSpec,
      null,
      [success]);
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

// ParamsSpec for Clone
network.mojom.WebBundleHandle_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebBundleHandle.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.WebBundleHandleRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnWebBundleError
network.mojom.WebBundleHandle_OnWebBundleError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebBundleHandle.OnWebBundleError_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.WebBundleErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnWebBundleLoadFinished
network.mojom.WebBundleHandle_OnWebBundleLoadFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebBundleHandle.OnWebBundleLoadFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.WebBundleHandlePtr = network.mojom.WebBundleHandleRemote;
network.mojom.WebBundleHandleRequest = network.mojom.WebBundleHandlePendingReceiver;

