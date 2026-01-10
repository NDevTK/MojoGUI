// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('url_loader', 0, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderSpec), null, false, 0, undefined),
      mojo.internal.StructField('url_loader_client', 8, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: URLLoader
mojo.internal.Struct(
    network.mojom.URLLoader_FollowRedirect_ParamsSpec, 'network.mojom.URLLoader_FollowRedirect_Params', [
      mojo.internal.StructField('removed_headers', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('modified_headers', 8, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('modified_cors_exempt_headers', 16, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_url', 24, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.URLLoader_SetPriority_ParamsSpec, 'network.mojom.URLLoader_SetPriority_Params', [
      mojo.internal.StructField('priority', 0, 0, network.mojom.RequestPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('intra_priority_value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [removed_headers, modified_headers, modified_cors_exempt_headers, new_url],
      false);
  }

  setPriority(priority, intra_priority_value) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.URLLoader_SetPriority_ParamsSpec,
      null,
      [priority, intra_priority_value],
      false);
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

network.mojom.URLLoaderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.URLLoader_FollowRedirect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.followRedirect(params.removed_headers, params.modified_headers, params.modified_cors_exempt_headers, params.new_url);
          break;
        }
        case 1: {
          const params = network.mojom.URLLoader_SetPriority_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPriority(params.priority, params.intra_priority_value);
          break;
        }
      }
    }});
  }
};

network.mojom.URLLoaderReceiver = network.mojom.URLLoaderReceiver;

network.mojom.URLLoaderPtr = network.mojom.URLLoaderRemote;
network.mojom.URLLoaderRequest = network.mojom.URLLoaderPendingReceiver;


// Interface: URLLoaderClient
mojo.internal.Struct(
    network.mojom.URLLoaderClient_OnReceiveEarlyHints_ParamsSpec, 'network.mojom.URLLoaderClient_OnReceiveEarlyHints_Params', [
      mojo.internal.StructField('early_hints', 0, 0, network.mojom.EarlyHintsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec, 'network.mojom.URLLoaderClient_OnReceiveResponse_Params', [
      mojo.internal.StructField('head', 0, 0, network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('body', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('cached_metadata', 16, 0, mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec, 'network.mojom.URLLoaderClient_OnReceiveRedirect_Params', [
      mojo.internal.StructField('redirect_info', 0, 0, network.mojom.URLRequestRedirectInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('head', 8, 0, network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('status', 0, 0, network.mojom.URLLoaderCompletionStatusSpec.$, null, false, 0, undefined),
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
      [early_hints],
      false);
  }

  onReceiveResponse(head, body, cached_metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec,
      null,
      [head, body, cached_metadata],
      false);
  }

  onReceiveRedirect(redirect_info, head) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec,
      null,
      [redirect_info, head],
      false);
  }

  onUploadProgress(current_position, total_size) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.URLLoaderClient_OnUploadProgress_ParamsSpec,
      network.mojom.URLLoaderClient_OnUploadProgress_ResponseParamsSpec,
      [current_position, total_size],
      false);
  }

  onTransferSizeUpdated(transfer_size_diff) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.URLLoaderClient_OnTransferSizeUpdated_ParamsSpec,
      null,
      [transfer_size_diff],
      false);
  }

  onComplete(status) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.URLLoaderClient_OnComplete_ParamsSpec,
      null,
      [status],
      false);
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

network.mojom.URLLoaderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.URLLoaderClient_OnReceiveEarlyHints_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReceiveEarlyHints(params.early_hints);
          break;
        }
        case 1: {
          const params = network.mojom.URLLoaderClient_OnReceiveResponse_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReceiveResponse(params.head, params.body, params.cached_metadata);
          break;
        }
        case 2: {
          const params = network.mojom.URLLoaderClient_OnReceiveRedirect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReceiveRedirect(params.redirect_info, params.head);
          break;
        }
        case 3: {
          const params = network.mojom.URLLoaderClient_OnUploadProgress_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onUploadProgress(params.current_position, params.total_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.URLLoaderClient_OnUploadProgress_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = network.mojom.URLLoaderClient_OnTransferSizeUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTransferSizeUpdated(params.transfer_size_diff);
          break;
        }
        case 5: {
          const params = network.mojom.URLLoaderClient_OnComplete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onComplete(params.status);
          break;
        }
      }
    }});
  }
};

network.mojom.URLLoaderClientReceiver = network.mojom.URLLoaderClientReceiver;

network.mojom.URLLoaderClientPtr = network.mojom.URLLoaderClientRemote;
network.mojom.URLLoaderClientRequest = network.mojom.URLLoaderClientPendingReceiver;

