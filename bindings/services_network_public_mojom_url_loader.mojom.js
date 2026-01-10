// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


network.mojom.mojom.kClientDisconnectReason = 1;

// Struct: URLLoaderClientEndpoints
network.mojom.mojom.URLLoaderClientEndpointsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClientEndpoints',
      packedSize: 16,
      fields: [
        { name: 'url_loader', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'url_loader_client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: URLLoader
network.mojom.mojom.URLLoader = {};

network.mojom.mojom.URLLoaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.URLLoaderRemote = class {
  static get $interfaceName() {
    return 'network.mojom.URLLoader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.URLLoaderPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.URLLoaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.URLLoaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  followRedirect(removed_headers, modified_headers, modified_cors_exempt_headers, new_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.URLLoader_FollowRedirect_ParamsSpec,
      null,
      [removed_headers, modified_headers, modified_cors_exempt_headers, new_url]);
  }

  setPriority(priority, intra_priority_value) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.URLLoader_SetPriority_ParamsSpec,
      null,
      [priority, intra_priority_value]);
  }

};

network.mojom.mojom.URLLoader.getRemote = function() {
  let remote = new network.mojom.mojom.URLLoaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.URLLoader',
    'context');
  return remote.$;
};

// ParamsSpec for FollowRedirect
network.mojom.mojom.URLLoader_FollowRedirect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoader.FollowRedirect_Params',
      packedSize: 40,
      fields: [
        { name: 'removed_headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'modified_headers', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false, minVersion: 0 },
        { name: 'modified_cors_exempt_headers', packedOffset: 16, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false, minVersion: 0 },
        { name: 'new_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for SetPriority
network.mojom.mojom.URLLoader_SetPriority_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoader.SetPriority_Params',
      packedSize: 16,
      fields: [
        { name: 'priority', packedOffset: 0, packedBitOffset: 0, type: network.mojom.RequestPrioritySpec, nullable: false, minVersion: 0 },
        { name: 'intra_priority_value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.URLLoaderPtr = network.mojom.mojom.URLLoaderRemote;
network.mojom.mojom.URLLoaderRequest = network.mojom.mojom.URLLoaderPendingReceiver;


// Interface: URLLoaderClient
network.mojom.mojom.URLLoaderClient = {};

network.mojom.mojom.URLLoaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.URLLoaderClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.URLLoaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.URLLoaderClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.URLLoaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.URLLoaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReceiveEarlyHints(early_hints) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.URLLoaderClient_OnReceiveEarlyHints_ParamsSpec,
      null,
      [early_hints]);
  }

  onReceiveResponse(head, body, cached_metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec,
      null,
      [head, body, cached_metadata]);
  }

  onReceiveRedirect(redirect_info, head) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec,
      null,
      [redirect_info, head]);
  }

  onUploadProgress(current_position, total_size) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.mojom.URLLoaderClient_OnUploadProgress_ParamsSpec,
      null,
      [current_position, total_size]);
  }

  onTransferSizeUpdated(transfer_size_diff) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.mojom.URLLoaderClient_OnTransferSizeUpdated_ParamsSpec,
      null,
      [transfer_size_diff]);
  }

  onComplete(status) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.mojom.URLLoaderClient_OnComplete_ParamsSpec,
      null,
      [status]);
  }

};

network.mojom.mojom.URLLoaderClient.getRemote = function() {
  let remote = new network.mojom.mojom.URLLoaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.URLLoaderClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnReceiveEarlyHints
network.mojom.mojom.URLLoaderClient_OnReceiveEarlyHints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClient.OnReceiveEarlyHints_Params',
      packedSize: 16,
      fields: [
        { name: 'early_hints', packedOffset: 0, packedBitOffset: 0, type: network.mojom.EarlyHintsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnReceiveResponse
network.mojom.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClient.OnReceiveResponse_Params',
      packedSize: 40,
      fields: [
        { name: 'head', packedOffset: 16, packedBitOffset: 0, type: network.mojom.URLResponseHeadSpec, nullable: false, minVersion: 0 },
        { name: 'body', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'cached_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for OnReceiveRedirect
network.mojom.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClient.OnReceiveRedirect_Params',
      packedSize: 24,
      fields: [
        { name: 'redirect_info', packedOffset: 0, packedBitOffset: 0, type: network.mojom.URLRequestRedirectInfoSpec, nullable: false, minVersion: 0 },
        { name: 'head', packedOffset: 8, packedBitOffset: 0, type: network.mojom.URLResponseHeadSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnUploadProgress
network.mojom.mojom.URLLoaderClient_OnUploadProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClient.OnUploadProgress_Params',
      packedSize: 24,
      fields: [
        { name: 'current_position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'total_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnTransferSizeUpdated
network.mojom.mojom.URLLoaderClient_OnTransferSizeUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClient.OnTransferSizeUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'transfer_size_diff', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnComplete
network.mojom.mojom.URLLoaderClient_OnComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClient.OnComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: network.mojom.URLLoaderCompletionStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.URLLoaderClientPtr = network.mojom.mojom.URLLoaderClientRemote;
network.mojom.mojom.URLLoaderClientRequest = network.mojom.mojom.URLLoaderClientPendingReceiver;

