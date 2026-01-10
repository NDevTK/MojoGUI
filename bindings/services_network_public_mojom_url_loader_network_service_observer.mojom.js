// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader_network_service_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

network.mojom.LocalNetworkAccessResultSpec = { $: mojo.internal.Enum() };
network.mojom.TransportTypeSpec = { $: mojo.internal.Enum() };
network.mojom.LoadInfoSpec = { $: {} };
network.mojom.ClientCertificateResponder = {};
network.mojom.ClientCertificateResponder.$interfaceName = 'network.mojom.ClientCertificateResponder';
network.mojom.ClientCertificateResponder_ContinueWithCertificate_ParamsSpec = { $: {} };
network.mojom.ClientCertificateResponder_ContinueWithoutCertificate_ParamsSpec = { $: {} };
network.mojom.ClientCertificateResponder_CancelRequest_ParamsSpec = { $: {} };
network.mojom.SSLPrivateKey = {};
network.mojom.SSLPrivateKey.$interfaceName = 'network.mojom.SSLPrivateKey';
network.mojom.SSLPrivateKey_Sign_ParamsSpec = { $: {} };
network.mojom.SSLPrivateKey_Sign_ResponseParamsSpec = { $: {} };
network.mojom.AuthChallengeResponder = {};
network.mojom.AuthChallengeResponder.$interfaceName = 'network.mojom.AuthChallengeResponder';
network.mojom.AuthChallengeResponder_OnAuthCredentials_ParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver = {};
network.mojom.URLLoaderNetworkServiceObserver.$interfaceName = 'network.mojom.URLLoaderNetworkServiceObserver';
network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ResponseParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnCertificateRequested_ParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnAuthRequired_ParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ResponseParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ResponseParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ResponseParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnDataUseUpdate_ParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ResponseParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnAdAuctionEventRecordHeaderReceived_ParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_Clone_ParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnWebSocketConnectedToPrivateNetwork_ParamsSpec = { $: {} };
network.mojom.URLLoaderNetworkServiceObserver_OnUrlLoaderConnectedToPrivateNetwork_ParamsSpec = { $: {} };

// Enum: LocalNetworkAccessResult
network.mojom.LocalNetworkAccessResult = {
  kGranted: 0,
  kDenied: 1,
  kRetryDueToCache: 2,
};

// Enum: TransportType
network.mojom.TransportType = {
  kDirect: 0,
  kProxied: 1,
  kCached: 2,
  kCachedFromProxy: 3,
};

// Struct: LoadInfo
mojo.internal.Struct(
    network.mojom.LoadInfoSpec, 'network.mojom.LoadInfo', [
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state_param', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('upload_position', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('upload_size', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('load_state', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: ClientCertificateResponder
mojo.internal.Struct(
    network.mojom.ClientCertificateResponder_ContinueWithCertificate_ParamsSpec, 'network.mojom.ClientCertificateResponder_ContinueWithCertificate_Params', [
      mojo.internal.StructField('x509_certificate', 0, 0, network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('provider_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('algorithm_preferences', 16, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('ssl_private_key', 24, 0, mojo.internal.InterfaceProxy(network.mojom.SSLPrivateKeySpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.ClientCertificateResponder_ContinueWithoutCertificate_ParamsSpec, 'network.mojom.ClientCertificateResponder_ContinueWithoutCertificate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.ClientCertificateResponder_CancelRequest_ParamsSpec, 'network.mojom.ClientCertificateResponder_CancelRequest_Params', [
    ],
    [[0, 8]]);

network.mojom.ClientCertificateResponderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ClientCertificateResponderRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ClientCertificateResponder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ClientCertificateResponderPendingReceiver,
      handle);
    this.$ = new network.mojom.ClientCertificateResponderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ClientCertificateResponderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  continueWithCertificate(x509_certificate, provider_name, algorithm_preferences, ssl_private_key) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ClientCertificateResponder_ContinueWithCertificate_ParamsSpec,
      null,
      [x509_certificate, provider_name, algorithm_preferences, ssl_private_key],
      false);
  }

  continueWithoutCertificate() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ClientCertificateResponder_ContinueWithoutCertificate_ParamsSpec,
      null,
      [],
      false);
  }

  cancelRequest() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.ClientCertificateResponder_CancelRequest_ParamsSpec,
      null,
      [],
      false);
  }

};

network.mojom.ClientCertificateResponder.getRemote = function() {
  let remote = new network.mojom.ClientCertificateResponderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ClientCertificateResponder',
    'context');
  return remote.$;
};

network.mojom.ClientCertificateResponderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.ClientCertificateResponder_ContinueWithCertificate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.continueWithCertificate(params.x509_certificate, params.provider_name, params.algorithm_preferences, params.ssl_private_key);
          break;
        }
        case 1: {
          const params = network.mojom.ClientCertificateResponder_ContinueWithoutCertificate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.continueWithoutCertificate();
          break;
        }
        case 2: {
          const params = network.mojom.ClientCertificateResponder_CancelRequest_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelRequest();
          break;
        }
      }
    }});
  }
};

network.mojom.ClientCertificateResponderReceiver = network.mojom.ClientCertificateResponderReceiver;

network.mojom.ClientCertificateResponderPtr = network.mojom.ClientCertificateResponderRemote;
network.mojom.ClientCertificateResponderRequest = network.mojom.ClientCertificateResponderPendingReceiver;


// Interface: SSLPrivateKey
mojo.internal.Struct(
    network.mojom.SSLPrivateKey_Sign_ParamsSpec, 'network.mojom.SSLPrivateKey_Sign_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.SSLPrivateKey_Sign_ResponseParamsSpec, 'network.mojom.SSLPrivateKey_Sign_ResponseParams', [
      mojo.internal.StructField('signature', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.SSLPrivateKeyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SSLPrivateKeyRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SSLPrivateKey';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SSLPrivateKeyPendingReceiver,
      handle);
    this.$ = new network.mojom.SSLPrivateKeyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SSLPrivateKeyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sign(algorithm, input) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SSLPrivateKey_Sign_ParamsSpec,
      network.mojom.SSLPrivateKey_Sign_ResponseParamsSpec,
      [algorithm, input],
      false);
  }

};

network.mojom.SSLPrivateKey.getRemote = function() {
  let remote = new network.mojom.SSLPrivateKeyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SSLPrivateKey',
    'context');
  return remote.$;
};

network.mojom.SSLPrivateKeyReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.SSLPrivateKey_Sign_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sign(params.algorithm, params.input);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SSLPrivateKey_Sign_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

network.mojom.SSLPrivateKeyReceiver = network.mojom.SSLPrivateKeyReceiver;

network.mojom.SSLPrivateKeyPtr = network.mojom.SSLPrivateKeyRemote;
network.mojom.SSLPrivateKeyRequest = network.mojom.SSLPrivateKeyPendingReceiver;


// Interface: AuthChallengeResponder
mojo.internal.Struct(
    network.mojom.AuthChallengeResponder_OnAuthCredentials_ParamsSpec, 'network.mojom.AuthChallengeResponder_OnAuthCredentials_Params', [
      mojo.internal.StructField('credentials', 0, 0, network.mojom.AuthCredentialsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.AuthChallengeResponderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.AuthChallengeResponderRemote = class {
  static get $interfaceName() {
    return 'network.mojom.AuthChallengeResponder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.AuthChallengeResponderPendingReceiver,
      handle);
    this.$ = new network.mojom.AuthChallengeResponderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.AuthChallengeResponderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAuthCredentials(credentials) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.AuthChallengeResponder_OnAuthCredentials_ParamsSpec,
      null,
      [credentials],
      false);
  }

};

network.mojom.AuthChallengeResponder.getRemote = function() {
  let remote = new network.mojom.AuthChallengeResponderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.AuthChallengeResponder',
    'context');
  return remote.$;
};

network.mojom.AuthChallengeResponderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.AuthChallengeResponder_OnAuthCredentials_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAuthCredentials(params.credentials);
          break;
        }
      }
    }});
  }
};

network.mojom.AuthChallengeResponderReceiver = network.mojom.AuthChallengeResponderReceiver;

network.mojom.AuthChallengeResponderPtr = network.mojom.AuthChallengeResponderRemote;
network.mojom.AuthChallengeResponderRequest = network.mojom.AuthChallengeResponderPendingReceiver;


// Interface: URLLoaderNetworkServiceObserver
mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ssl_info', 8, 0, network.mojom.SSLInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('net_error', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('fatal', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ResponseParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnCertificateRequested_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnCertificateRequested_Params', [
      mojo.internal.StructField('window_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cert_info', 8, 0, network.mojom.SSLCertRequestInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cert_responder', 16, 0, mojo.internal.InterfaceProxy(network.mojom.ClientCertificateResponderSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnAuthRequired_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnAuthRequired_Params', [
      mojo.internal.StructField('window_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('auth_info', 16, 0, network.mojom.AuthChallengeInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('head_headers', 24, 0, network.mojom.HttpResponseHeadersSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('auth_challenge_responder', 32, 0, mojo.internal.InterfaceProxy(network.mojom.AuthChallengeResponderSpec), null, false, 0, undefined),
      mojo.internal.StructField('request_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('first_auth_attempt', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_Params', [
      mojo.internal.StructField('transport_type', 0, 0, network.mojom.TransportTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ip_address_space', 8, 0, network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ResponseParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, network.mojom.LocalNetworkAccessResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('header_value', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cookie_partition_key', 16, 0, network.mojom.CookiePartitionKeySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('load_flags', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('partitioned_state_allowed_only', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ResponseParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_Params', [
      mojo.internal.StructField('info', 0, 0, network.mojom.LoadInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ResponseParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnDataUseUpdate_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnDataUseUpdate_Params', [
      mojo.internal.StructField('recv_bytes', 0, 0, mojo_base.mojom.ByteSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sent_bytes', 8, 0, mojo_base.mojom.ByteSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_traffic_annotation_id_hash', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_Params', [
      mojo.internal.StructField('request_origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('methods_with_options', 8, 0, network.mojom.SharedStorageBatchUpdateMethodsArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('with_lock', 16, 0, network.mojom.LockNameSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ResponseParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnAdAuctionEventRecordHeaderReceived_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnAdAuctionEventRecordHeaderReceived_Params', [
      mojo.internal.StructField('ad_auction_event_record', 0, 0, network.mojom.AdAuctionEventRecordSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_frame_origin', 8, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_Clone_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_Clone_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderNetworkServiceObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnWebSocketConnectedToPrivateNetwork_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnWebSocketConnectedToPrivateNetwork_Params', [
      mojo.internal.StructField('request_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ip_address_space', 8, 0, network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.URLLoaderNetworkServiceObserver_OnUrlLoaderConnectedToPrivateNetwork_ParamsSpec, 'network.mojom.URLLoaderNetworkServiceObserver_OnUrlLoaderConnectedToPrivateNetwork_Params', [
      mojo.internal.StructField('request_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_address_space', 8, 0, network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_address_space', 16, 0, network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_address_space', 24, 0, network.mojom.IPAddressSpaceSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

network.mojom.URLLoaderNetworkServiceObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.URLLoaderNetworkServiceObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.URLLoaderNetworkServiceObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.URLLoaderNetworkServiceObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.URLLoaderNetworkServiceObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.URLLoaderNetworkServiceObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSSLCertificateError(url, net_error, ssl_info, fatal) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ParamsSpec,
      network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ResponseParamsSpec,
      [url, net_error, ssl_info, fatal],
      false);
  }

  onCertificateRequested(window_id, cert_info, cert_responder) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnCertificateRequested_ParamsSpec,
      null,
      [window_id, cert_info, cert_responder],
      false);
  }

  onAuthRequired(window_id, request_id, url, first_auth_attempt, auth_info, head_headers, auth_challenge_responder) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnAuthRequired_ParamsSpec,
      null,
      [window_id, request_id, url, first_auth_attempt, auth_info, head_headers, auth_challenge_responder],
      false);
  }

  onLocalNetworkAccessPermissionRequired(transport_type, ip_address_space) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ParamsSpec,
      network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ResponseParamsSpec,
      [transport_type, ip_address_space],
      false);
  }

  onClearSiteData(url, header_value, load_flags, cookie_partition_key, partitioned_state_allowed_only) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ParamsSpec,
      network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ResponseParamsSpec,
      [url, header_value, load_flags, cookie_partition_key, partitioned_state_allowed_only],
      false);
  }

  onLoadingStateUpdate(info) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ParamsSpec,
      network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ResponseParamsSpec,
      [info],
      false);
  }

  onDataUseUpdate(network_traffic_annotation_id_hash, recv_bytes, sent_bytes) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnDataUseUpdate_ParamsSpec,
      null,
      [network_traffic_annotation_id_hash, recv_bytes, sent_bytes],
      false);
  }

  onSharedStorageHeaderReceived(request_origin, methods_with_options, with_lock) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ParamsSpec,
      network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ResponseParamsSpec,
      [request_origin, methods_with_options, with_lock],
      false);
  }

  onAdAuctionEventRecordHeaderReceived(ad_auction_event_record, top_frame_origin) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnAdAuctionEventRecordHeaderReceived_ParamsSpec,
      null,
      [ad_auction_event_record, top_frame_origin],
      false);
  }

  clone(listener) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_Clone_ParamsSpec,
      null,
      [listener],
      false);
  }

  onWebSocketConnectedToPrivateNetwork(request_url, ip_address_space) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnWebSocketConnectedToPrivateNetwork_ParamsSpec,
      null,
      [request_url, ip_address_space],
      false);
  }

  onUrlLoaderConnectedToPrivateNetwork(request_url, response_address_space, client_address_space, target_address_space) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnUrlLoaderConnectedToPrivateNetwork_ParamsSpec,
      null,
      [request_url, response_address_space, client_address_space, target_address_space],
      false);
  }

};

network.mojom.URLLoaderNetworkServiceObserver.getRemote = function() {
  let remote = new network.mojom.URLLoaderNetworkServiceObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.URLLoaderNetworkServiceObserver',
    'context');
  return remote.$;
};

network.mojom.URLLoaderNetworkServiceObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSSLCertificateError(params.url, params.net_error, params.ssl_info, params.fatal);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = network.mojom.URLLoaderNetworkServiceObserver_OnCertificateRequested_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCertificateRequested(params.window_id, params.cert_info, params.cert_responder);
          break;
        }
        case 2: {
          const params = network.mojom.URLLoaderNetworkServiceObserver_OnAuthRequired_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAuthRequired(params.window_id, params.request_id, params.url, params.first_auth_attempt, params.auth_info, params.head_headers, params.auth_challenge_responder);
          break;
        }
        case 3: {
          const params = network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLocalNetworkAccessPermissionRequired(params.transport_type, params.ip_address_space);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onClearSiteData(params.url, params.header_value, params.load_flags, params.cookie_partition_key, params.partitioned_state_allowed_only);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLoadingStateUpdate(params.info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = network.mojom.URLLoaderNetworkServiceObserver_OnDataUseUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDataUseUpdate(params.network_traffic_annotation_id_hash, params.recv_bytes, params.sent_bytes);
          break;
        }
        case 7: {
          const params = network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSharedStorageHeaderReceived(params.request_origin, params.methods_with_options, params.with_lock);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = network.mojom.URLLoaderNetworkServiceObserver_OnAdAuctionEventRecordHeaderReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAdAuctionEventRecordHeaderReceived(params.ad_auction_event_record, params.top_frame_origin);
          break;
        }
        case 9: {
          const params = network.mojom.URLLoaderNetworkServiceObserver_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.listener);
          break;
        }
        case 10: {
          const params = network.mojom.URLLoaderNetworkServiceObserver_OnWebSocketConnectedToPrivateNetwork_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWebSocketConnectedToPrivateNetwork(params.request_url, params.ip_address_space);
          break;
        }
        case 11: {
          const params = network.mojom.URLLoaderNetworkServiceObserver_OnUrlLoaderConnectedToPrivateNetwork_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onUrlLoaderConnectedToPrivateNetwork(params.request_url, params.response_address_space, params.client_address_space, params.target_address_space);
          break;
        }
      }
    }});
  }
};

network.mojom.URLLoaderNetworkServiceObserverReceiver = network.mojom.URLLoaderNetworkServiceObserverReceiver;

network.mojom.URLLoaderNetworkServiceObserverPtr = network.mojom.URLLoaderNetworkServiceObserverRemote;
network.mojom.URLLoaderNetworkServiceObserverRequest = network.mojom.URLLoaderNetworkServiceObserverPendingReceiver;

