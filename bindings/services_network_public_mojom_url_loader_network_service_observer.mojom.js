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
};

// Enum: TransportType
network.mojom.TransportType = {
  but: 0,
};

// Struct: LoadInfo
network.mojom.LoadInfo = class {
  constructor(values = {}) {
    this.upload_size = values.upload_size !== undefined ? values.upload_size : 0;
  }
};

// Interface: ClientCertificateResponder
network.mojom.ClientCertificateResponderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.ClientCertificateResponder';
  }

  getProviderName() {
    // Method: GetProviderName
    // Call: GetProviderName()
  }

  getAlgorithmPreferences() {
    // Method: GetAlgorithmPreferences
    // Call: GetAlgorithmPreferences()
  }

  continueWithCertificate(x509_certificate, provider_name, algorithm_preferences, ssl_private_key) {
    // Method: ContinueWithCertificate
    // Call: ContinueWithCertificate(x509_certificate, provider_name, algorithm_preferences, ssl_private_key)
  }

  certificate(future) {
    // Method: certificate
    // Call: certificate(future)
  }

  continueWithCertificate() {
    // Method: ContinueWithCertificate
    // Call: ContinueWithCertificate()
  }

  continueWithoutCertificate() {
    // Method: ContinueWithoutCertificate
    // Call: ContinueWithoutCertificate()
  }

  cancelWithError() {
    // Method: CancelWithError
    // Call: CancelWithError()
  }

  cancelRequest() {
    // Method: CancelRequest
    // Call: CancelRequest()
  }

};

network.mojom.ClientCertificateResponderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SSLPrivateKey
network.mojom.SSLPrivateKeyPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.SSLPrivateKey';
  }

  sign(algorithm, input) {
    // Method: Sign
    return new Promise((resolve) => {
      // Call: Sign(algorithm, input)
      resolve({});
    });
  }

};

network.mojom.SSLPrivateKeyRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AuthChallengeResponder
network.mojom.AuthChallengeResponderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.AuthChallengeResponder';
  }

  onAuthCredentials(credentials) {
    // Method: OnAuthCredentials
    // Call: OnAuthCredentials(credentials)
  }

};

network.mojom.AuthChallengeResponderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: URLLoaderNetworkServiceObserver
network.mojom.URLLoaderNetworkServiceObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.URLLoaderNetworkServiceObserver';
  }

  onSSLCertificateError(url, net_error, ssl_info, fatal) {
    // Method: OnSSLCertificateError
    return new Promise((resolve) => {
      // Call: OnSSLCertificateError(url, net_error, ssl_info, fatal)
      resolve({});
    });
  }

  response(disconnect) {
    // Method: response
    // Call: response(disconnect)
  }

  onCertificateRequested(window_id, cert_info, cert_responder) {
    // Method: OnCertificateRequested
    // Call: OnCertificateRequested(window_id, cert_info, cert_responder)
  }

  onAuthRequired(window_id, request_id, url, first_auth_attempt, auth_info, head_headers, auth_challenge_responder) {
    // Method: OnAuthRequired
    // Call: OnAuthRequired(window_id, request_id, url, first_auth_attempt, auth_info, head_headers, auth_challenge_responder)
  }

  onLocalNetworkAccessPermissionRequired(transport_type, ip_address_space) {
    // Method: OnLocalNetworkAccessPermissionRequired
    return new Promise((resolve) => {
      // Call: OnLocalNetworkAccessPermissionRequired(transport_type, ip_address_space)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  concerns(booleans) {
    // Method: concerns
    // Call: concerns(booleans)
  }

  onClearSiteData(url, header_value, load_flags, cookie_partition_key, partitioned_state_allowed_only) {
    // Method: OnClearSiteData
    // Call: OnClearSiteData(url, header_value, load_flags, cookie_partition_key, partitioned_state_allowed_only)
  }

  onLoadingStateUpdate(info) {
    // Method: OnLoadingStateUpdate
    // Call: OnLoadingStateUpdate(info)
  }

  onDataUseUpdate(network_traffic_annotation_id_hash, recv_bytes, sent_bytes) {
    // Method: OnDataUseUpdate
    // Call: OnDataUseUpdate(network_traffic_annotation_id_hash, recv_bytes, sent_bytes)
  }

  header() {
    // Method: header
    // Call: header()
  }

  process(API) {
    // Method: process
    // Call: process(API)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  onSharedStorageHeaderReceived() {
    // Method: OnSharedStorageHeaderReceived
    // Call: OnSharedStorageHeaderReceived()
  }

  onSharedStorageHeaderReceived(request_origin, methods_with_options, with_lock) {
    // Method: OnSharedStorageHeaderReceived
    // Call: OnSharedStorageHeaderReceived(request_origin, methods_with_options, with_lock)
  }

  generateBid() {
    // Method: generateBid
    // Call: generateBid()
  }

  onAdAuctionEventRecordHeaderReceived(ad_auction_event_record, top_frame_origin) {
    // Method: OnAdAuctionEventRecordHeaderReceived
    // Call: OnAdAuctionEventRecordHeaderReceived(ad_auction_event_record, top_frame_origin)
  }

  clone(listener) {
    // Method: Clone
    // Call: Clone(listener)
  }

  onWebSocketConnectedToPrivateNetwork(request_url, ip_address_space) {
    // Method: OnWebSocketConnectedToPrivateNetwork
    // Call: OnWebSocketConnectedToPrivateNetwork(request_url, ip_address_space)
  }

  onUrlLoaderConnectedToPrivateNetwork(request_url, response_address_space, client_address_space, target_address_space) {
    // Method: OnUrlLoaderConnectedToPrivateNetwork
    // Call: OnUrlLoaderConnectedToPrivateNetwork(request_url, response_address_space, client_address_space, target_address_space)
  }

};

network.mojom.URLLoaderNetworkServiceObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
