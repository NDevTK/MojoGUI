// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: URLLoaderClientEndpoints
network.mojom.URLLoaderClientEndpointsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClientEndpoints',
      packedSize: 16,
      fields: [
        { name: 'url_loader_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: URLLoader
network.mojom.URLLoader = {};

network.mojom.URLLoaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.URLLoaderRemote = class {
  static get $interfaceName() {
    return 'network.mojom.URLLoader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.URLLoaderPendingReceiver,
      handle);
    this.$ = new network.mojom.URLLoaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.URLLoaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  followRedirect(removed_headers, modified_headers, modified_cors_exempt_headers, new_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.URLLoader_FollowRedirect_ParamsSpec,
      null,
      [removed_headers, modified_headers, modified_cors_exempt_headers, new_url]);
  }

  setPriority(priority, intra_priority_value) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.URLLoader_SetPriority_ParamsSpec,
      null,
      [priority, intra_priority_value]);
  }

};

network.mojom.URLLoader.getRemote = function() {
  let remote = new network.mojom.URLLoaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.URLLoader',
    'context');
  return remote.$;
};

// ParamsSpec for FollowRedirect
network.mojom.URLLoader_FollowRedirect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoader.FollowRedirect_Params',
      packedSize: 40,
      fields: [
        { name: 'removed_headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'modified_headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'modified_cors_exempt_headers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPriority
network.mojom.URLLoader_SetPriority_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoader.SetPriority_Params',
      packedSize: 24,
      fields: [
        { name: 'priority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'intra_priority_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.URLLoaderPtr = network.mojom.URLLoaderRemote;
network.mojom.URLLoaderRequest = network.mojom.URLLoaderPendingReceiver;


// Interface: URLLoaderClient
network.mojom.URLLoaderClient = {};

network.mojom.URLLoaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.URLLoaderClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.URLLoaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.URLLoaderClientPendingReceiver,
      handle);
    this.$ = new network.mojom.URLLoaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.URLLoaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReceiveEarlyHints(early_hints) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.URLLoaderClient_OnReceiveEarlyHints_ParamsSpec,
      null,
      [early_hints]);
  }

  onReceiveResponse(head, body, cached_metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec,
      null,
      [head, body, cached_metadata]);
  }

  onReceiveRedirect(redirect_info, head) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec,
      null,
      [redirect_info, head]);
  }

  onUploadProgress(current_position, total_size) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.URLLoaderClient_OnUploadProgress_ParamsSpec,
      null,
      [current_position, total_size]);
  }

  onTransferSizeUpdated(transfer_size_diff) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.URLLoaderClient_OnTransferSizeUpdated_ParamsSpec,
      null,
      [transfer_size_diff]);
  }

  onComplete(status) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.URLLoaderClient_OnComplete_ParamsSpec,
      null,
      [status]);
  }

};

network.mojom.URLLoaderClient.getRemote = function() {
  let remote = new network.mojom.URLLoaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.URLLoaderClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnReceiveEarlyHints
network.mojom.URLLoaderClient_OnReceiveEarlyHints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClient.OnReceiveEarlyHints_Params',
      packedSize: 16,
      fields: [
        { name: 'early_hints', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReceiveResponse
network.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClient.OnReceiveResponse_Params',
      packedSize: 32,
      fields: [
        { name: 'head', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'body', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'cached_metadata', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnReceiveRedirect
network.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClient.OnReceiveRedirect_Params',
      packedSize: 24,
      fields: [
        { name: 'redirect_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'head', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnUploadProgress
network.mojom.URLLoaderClient_OnUploadProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClient.OnUploadProgress_Params',
      packedSize: 24,
      fields: [
        { name: 'current_position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'total_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTransferSizeUpdated
network.mojom.URLLoaderClient_OnTransferSizeUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClient.OnTransferSizeUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'transfer_size_diff', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnComplete
network.mojom.URLLoaderClient_OnComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderClient.OnComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.URLLoaderClientPtr = network.mojom.URLLoaderClientRemote;
network.mojom.URLLoaderClientRequest = network.mojom.URLLoaderClientPendingReceiver;

