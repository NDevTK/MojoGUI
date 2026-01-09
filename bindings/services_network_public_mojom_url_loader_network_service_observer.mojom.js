// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader_network_service_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


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
network.mojom.LoadInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.LoadInfo',
      packedSize: 56,
      fields: [
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'load_state', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'state_param', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'upload_position', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'upload_size', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ClientCertificateResponder
network.mojom.ClientCertificateResponder = {};

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
      [x509_certificate, provider_name, algorithm_preferences, ssl_private_key]);
  }

  continueWithoutCertificate() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ClientCertificateResponder_ContinueWithoutCertificate_ParamsSpec,
      null,
      []);
  }

  cancelRequest() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.ClientCertificateResponder_CancelRequest_ParamsSpec,
      null,
      []);
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

// ParamsSpec for ContinueWithCertificate
network.mojom.ClientCertificateResponder_ContinueWithCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ClientCertificateResponder.ContinueWithCertificate_Params',
      packedSize: 40,
      fields: [
        { name: 'x509_certificate', packedOffset: 8, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false },
        { name: 'provider_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'algorithm_preferences', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'ssl_private_key', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ContinueWithoutCertificate
network.mojom.ClientCertificateResponder_ContinueWithoutCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ClientCertificateResponder.ContinueWithoutCertificate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelRequest
network.mojom.ClientCertificateResponder_CancelRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ClientCertificateResponder.CancelRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.ClientCertificateResponderPtr = network.mojom.ClientCertificateResponderRemote;
network.mojom.ClientCertificateResponderRequest = network.mojom.ClientCertificateResponderPendingReceiver;


// Interface: SSLPrivateKey
network.mojom.SSLPrivateKey = {};

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
      [algorithm, input]);
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

// ParamsSpec for Sign
network.mojom.SSLPrivateKey_Sign_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SSLPrivateKey.Sign_Params',
      packedSize: 24,
      fields: [
        { name: 'algorithm', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'input', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.SSLPrivateKey_Sign_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SSLPrivateKey.Sign_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'net_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'signature', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.SSLPrivateKeyPtr = network.mojom.SSLPrivateKeyRemote;
network.mojom.SSLPrivateKeyRequest = network.mojom.SSLPrivateKeyPendingReceiver;


// Interface: AuthChallengeResponder
network.mojom.AuthChallengeResponder = {};

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
      [credentials]);
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

// ParamsSpec for OnAuthCredentials
network.mojom.AuthChallengeResponder_OnAuthCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AuthChallengeResponder.OnAuthCredentials_Params',
      packedSize: 16,
      fields: [
        { name: 'credentials', packedOffset: 8, packedBitOffset: 0, type: network.mojom.AuthCredentialsSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.AuthChallengeResponderPtr = network.mojom.AuthChallengeResponderRemote;
network.mojom.AuthChallengeResponderRequest = network.mojom.AuthChallengeResponderPendingReceiver;


// Interface: URLLoaderNetworkServiceObserver
network.mojom.URLLoaderNetworkServiceObserver = {};

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
      [url, net_error, ssl_info, fatal]);
  }

  onCertificateRequested(window_id, cert_info, cert_responder) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnCertificateRequested_ParamsSpec,
      null,
      [window_id, cert_info, cert_responder]);
  }

  onAuthRequired(window_id, request_id, url, first_auth_attempt, auth_info, head_headers, auth_challenge_responder) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnAuthRequired_ParamsSpec,
      null,
      [window_id, request_id, url, first_auth_attempt, auth_info, head_headers, auth_challenge_responder]);
  }

  onLocalNetworkAccessPermissionRequired(transport_type, ip_address_space) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ParamsSpec,
      network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ResponseParamsSpec,
      [transport_type, ip_address_space]);
  }

  onClearSiteData(url, header_value, load_flags, cookie_partition_key, partitioned_state_allowed_only) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ParamsSpec,
      null,
      [url, header_value, load_flags, cookie_partition_key, partitioned_state_allowed_only]);
  }

  onLoadingStateUpdate(info) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ParamsSpec,
      null,
      [info]);
  }

  onDataUseUpdate(network_traffic_annotation_id_hash, recv_bytes, sent_bytes) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnDataUseUpdate_ParamsSpec,
      null,
      [network_traffic_annotation_id_hash, recv_bytes, sent_bytes]);
  }

  onSharedStorageHeaderReceived(request_origin, methods_with_options, with_lock) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ParamsSpec,
      null,
      [request_origin, methods_with_options, with_lock]);
  }

  onAdAuctionEventRecordHeaderReceived(ad_auction_event_record, top_frame_origin) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnAdAuctionEventRecordHeaderReceived_ParamsSpec,
      null,
      [ad_auction_event_record, top_frame_origin]);
  }

  clone(listener) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_Clone_ParamsSpec,
      null,
      [listener]);
  }

  onWebSocketConnectedToPrivateNetwork(request_url, ip_address_space) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnWebSocketConnectedToPrivateNetwork_ParamsSpec,
      null,
      [request_url, ip_address_space]);
  }

  onUrlLoaderConnectedToPrivateNetwork(request_url, response_address_space, client_address_space, target_address_space) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      network.mojom.URLLoaderNetworkServiceObserver_OnUrlLoaderConnectedToPrivateNetwork_ParamsSpec,
      null,
      [request_url, response_address_space, client_address_space, target_address_space]);
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

// ParamsSpec for OnSSLCertificateError
network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.OnSSLCertificateError_Params',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'net_error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'ssl_info', packedOffset: 24, packedBitOffset: 0, type: network.mojom.SSLInfoSpec, nullable: false },
        { name: 'fatal', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.URLLoaderNetworkServiceObserver_OnSSLCertificateError_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.OnSSLCertificateError_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'net_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCertificateRequested
network.mojom.URLLoaderNetworkServiceObserver_OnCertificateRequested_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.OnCertificateRequested_Params',
      packedSize: 32,
      fields: [
        { name: 'window_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'cert_info', packedOffset: 16, packedBitOffset: 0, type: network.mojom.SSLCertRequestInfoSpec, nullable: false },
        { name: 'cert_responder', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAuthRequired
network.mojom.URLLoaderNetworkServiceObserver_OnAuthRequired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.OnAuthRequired_Params',
      packedSize: 64,
      fields: [
        { name: 'window_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'first_auth_attempt', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'auth_info', packedOffset: 40, packedBitOffset: 0, type: network.mojom.AuthChallengeInfoSpec, nullable: false },
        { name: 'head_headers', packedOffset: 48, packedBitOffset: 0, type: network.mojom.HttpResponseHeadersSpec, nullable: true },
        { name: 'auth_challenge_responder', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLocalNetworkAccessPermissionRequired
network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.OnLocalNetworkAccessPermissionRequired_Params',
      packedSize: 24,
      fields: [
        { name: 'transport_type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.TransportTypeSpec, nullable: false },
        { name: 'ip_address_space', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.URLLoaderNetworkServiceObserver_OnLocalNetworkAccessPermissionRequired_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.OnLocalNetworkAccessPermissionRequired_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: network.mojom.LocalNetworkAccessResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnClearSiteData
network.mojom.URLLoaderNetworkServiceObserver_OnClearSiteData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.OnClearSiteData_Params',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'header_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'load_flags', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'cookie_partition_key', packedOffset: 32, packedBitOffset: 0, type: network.mojom.CookiePartitionKeySpec, nullable: true },
        { name: 'partitioned_state_allowed_only', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLoadingStateUpdate
network.mojom.URLLoaderNetworkServiceObserver_OnLoadingStateUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.OnLoadingStateUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 8, packedBitOffset: 0, type: network.mojom.LoadInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDataUseUpdate
network.mojom.URLLoaderNetworkServiceObserver_OnDataUseUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.OnDataUseUpdate_Params',
      packedSize: 32,
      fields: [
        { name: 'network_traffic_annotation_id_hash', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'recv_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ByteSizeSpec, nullable: false },
        { name: 'sent_bytes', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.ByteSizeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSharedStorageHeaderReceived
network.mojom.URLLoaderNetworkServiceObserver_OnSharedStorageHeaderReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.OnSharedStorageHeaderReceived_Params',
      packedSize: 32,
      fields: [
        { name: 'request_origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'methods_with_options', packedOffset: 16, packedBitOffset: 0, type: network.mojom.SharedStorageBatchUpdateMethodsArgumentSpec, nullable: false },
        { name: 'with_lock', packedOffset: 24, packedBitOffset: 0, type: network.mojom.LockNameSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAdAuctionEventRecordHeaderReceived
network.mojom.URLLoaderNetworkServiceObserver_OnAdAuctionEventRecordHeaderReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.OnAdAuctionEventRecordHeaderReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'ad_auction_event_record', packedOffset: 8, packedBitOffset: 0, type: network.mojom.AdAuctionEventRecordSpec, nullable: false },
        { name: 'top_frame_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.URLLoaderNetworkServiceObserver_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWebSocketConnectedToPrivateNetwork
network.mojom.URLLoaderNetworkServiceObserver_OnWebSocketConnectedToPrivateNetwork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.OnWebSocketConnectedToPrivateNetwork_Params',
      packedSize: 24,
      fields: [
        { name: 'request_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'ip_address_space', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnUrlLoaderConnectedToPrivateNetwork
network.mojom.URLLoaderNetworkServiceObserver_OnUrlLoaderConnectedToPrivateNetwork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderNetworkServiceObserver.OnUrlLoaderConnectedToPrivateNetwork_Params',
      packedSize: 40,
      fields: [
        { name: 'request_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'response_address_space', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
        { name: 'client_address_space', packedOffset: 24, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
        { name: 'target_address_space', packedOffset: 32, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.URLLoaderNetworkServiceObserverPtr = network.mojom.URLLoaderNetworkServiceObserverRemote;
network.mojom.URLLoaderNetworkServiceObserverRequest = network.mojom.URLLoaderNetworkServiceObserverPendingReceiver;

