// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var url = url || {};

network.mojom.URLLoaderClientEndpointsSpec = { $: {} };
network.mojom.URLLoader = {};
network.mojom.URLLoader.$interfaceName = 'network.mojom.URLLoader';
network.mojom.URLLoader_FollowRedirect_ParamsSpec = { $: {} };
network.mojom.URLLoader_SetPriority_ParamsSpec = { $: {} };
network.mojom.URLLoaderClient = {};
network.mojom.URLLoaderClient.$interfaceName = 'network.mojom.URLLoaderClient';
network.mojom.URLLoaderClient_OnReceiveEarlyHints_ParamsSpec = { $: {} };
network.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec = { $: {} };
network.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec = { $: {} };
network.mojom.URLLoaderClient_OnUploadProgress_ParamsSpec = { $: {} };
network.mojom.URLLoaderClient_OnUploadProgress_ResponseParamsSpec = { $: {} };
network.mojom.URLLoaderClient_OnTransferSizeUpdated_ParamsSpec = { $: {} };
network.mojom.URLLoaderClient_OnComplete_ParamsSpec = { $: {} };

network.mojom.kClientDisconnectReason = 1;

// Struct: URLLoaderClientEndpoints
mojo.internal.Struct(
    network.mojom.URLLoaderClientEndpointsSpec, 'network.mojom.URLLoaderClientEndpoints', [
      mojo.internal.StructField('url_loader', 0, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderRemote), null, false, 0, undefined),
      mojo.internal.StructField('url_loader_client', 8, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: URLLoader
mojo.internal.Struct(
    network.mojom.URLLoader_FollowRedirect_ParamsSpec, 'network.mojom.URLLoader_FollowRedirect_Params', [
      mojo.internal.StructField('removed_headers', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('modified_headers', 8, 0, network.mojom.HttpRequestHeadersSpec, null, false, 0, undefined),
      mojo.internal.StructField('modified_cors_exempt_headers', 16, 0, network.mojom.HttpRequestHeadersSpec, null, false, 0, undefined),
      mojo.internal.StructField('new_url', 24, 0, url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.URLLoader_SetPriority_ParamsSpec, 'network.mojom.URLLoader_SetPriority_Params', [
      mojo.internal.StructField('priority', 0, 0, network.mojom.RequestPrioritySpec, null, false, 0, undefined),
      mojo.internal.StructField('intra_priority_value', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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

network.mojom.URLLoaderPtr = network.mojom.URLLoaderRemote;
network.mojom.URLLoaderRequest = network.mojom.URLLoaderPendingReceiver;


// Interface: URLLoaderClient
mojo.internal.Struct(
    network.mojom.URLLoaderClient_OnReceiveEarlyHints_ParamsSpec, 'network.mojom.URLLoaderClient_OnReceiveEarlyHints_Params', [
      mojo.internal.StructField('early_hints', 0, 0, network.mojom.EarlyHintsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec, 'network.mojom.URLLoaderClient_OnReceiveResponse_Params', [
      mojo.internal.StructField('head', 16, 0, network.mojom.URLResponseHeadSpec, null, false, 0, undefined),
      mojo.internal.StructField('body', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('cached_metadata', 0, 0, mojo_base.mojom.BigBufferSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec, 'network.mojom.URLLoaderClient_OnReceiveRedirect_Params', [
      mojo.internal.StructField('redirect_info', 0, 0, network.mojom.URLRequestRedirectInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('head', 8, 0, network.mojom.URLResponseHeadSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.URLLoaderClient_OnUploadProgress_ParamsSpec, 'network.mojom.URLLoaderClient_OnUploadProgress_Params', [
      mojo.internal.StructField('current_position', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('total_size', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.URLLoaderClient_OnUploadProgress_ResponseParamsSpec, 'network.mojom.URLLoaderClient_OnUploadProgress_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.URLLoaderClient_OnTransferSizeUpdated_ParamsSpec, 'network.mojom.URLLoaderClient_OnTransferSizeUpdated_Params', [
      mojo.internal.StructField('transfer_size_diff', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.URLLoaderClient_OnComplete_ParamsSpec, 'network.mojom.URLLoaderClient_OnComplete_Params', [
      mojo.internal.StructField('status', 0, 0, network.mojom.URLLoaderCompletionStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      network.mojom.URLLoaderClient_OnUploadProgress_ResponseParamsSpec,
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

network.mojom.URLLoaderClientPtr = network.mojom.URLLoaderClientRemote;
network.mojom.URLLoaderClientRequest = network.mojom.URLLoaderClientPendingReceiver;

