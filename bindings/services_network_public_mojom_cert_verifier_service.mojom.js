// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cert_verifier_service.mojom
// Module: cert_verifier.mojom

'use strict';

// Module namespace
var cert_verifier = cert_verifier || {};
cert_verifier.mojom = cert_verifier.mojom || {};
var services = services || {};
var services = services || {};

cert_verifier.mojom.RequestParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierConfigSpec = { $: {} };
cert_verifier.mojom.URLLoaderFactoryConnector = {};
cert_verifier.mojom.URLLoaderFactoryConnector.$interfaceName = 'cert_verifier.mojom.URLLoaderFactoryConnector';
cert_verifier.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierService = {};
cert_verifier.mojom.CertVerifierService.$interfaceName = 'cert_verifier.mojom.CertVerifierService';
cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierService_Verify_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierService_SetConfig_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceClient = {};
cert_verifier.mojom.CertVerifierServiceClient.$interfaceName = 'cert_verifier.mojom.CertVerifierServiceClient';
cert_verifier.mojom.CertVerifierServiceClient_OnCertVerifierChanged_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierRequest = {};
cert_verifier.mojom.CertVerifierRequest.$interfaceName = 'cert_verifier.mojom.CertVerifierRequest';
cert_verifier.mojom.CertVerifierRequest_Complete_ParamsSpec = { $: {} };

// Struct: RequestParams
mojo.internal.Struct(
    cert_verifier.mojom.RequestParamsSpec, 'cert_verifier.mojom.RequestParams', [
      mojo.internal.StructField('certificate', 0, 0, network.mojom.X509CertificateSpec, null, false, 0, undefined),
      mojo.internal.StructField('hostname', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('flags', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('ocsp_response', 24, 0, mojo_base.mojom.ByteStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('sct_list', 32, 0, mojo_base.mojom.ByteStringSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: CertVerifierConfig
mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierConfigSpec, 'cert_verifier.mojom.CertVerifierConfig', [
      mojo.internal.StructField('enable_rev_checking', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_rev_checking_local_anchors', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_sha1_local_anchors', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: URLLoaderFactoryConnector
mojo.internal.Struct(
    cert_verifier.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_ParamsSpec, 'cert_verifier.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_Params', [
      mojo.internal.StructField('url_loader_factory', 0, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

cert_verifier.mojom.URLLoaderFactoryConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cert_verifier.mojom.URLLoaderFactoryConnectorRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.URLLoaderFactoryConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cert_verifier.mojom.URLLoaderFactoryConnectorPendingReceiver,
      handle);
    this.$ = new cert_verifier.mojom.URLLoaderFactoryConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cert_verifier.mojom.URLLoaderFactoryConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createURLLoaderFactory(url_loader_factory) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cert_verifier.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_ParamsSpec,
      null,
      [url_loader_factory],
      false);
  }

};

cert_verifier.mojom.URLLoaderFactoryConnector.getRemote = function() {
  let remote = new cert_verifier.mojom.URLLoaderFactoryConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.URLLoaderFactoryConnector',
    'context');
  return remote.$;
};

cert_verifier.mojom.URLLoaderFactoryConnectorPtr = cert_verifier.mojom.URLLoaderFactoryConnectorRemote;
cert_verifier.mojom.URLLoaderFactoryConnectorRequest = cert_verifier.mojom.URLLoaderFactoryConnectorPendingReceiver;


// Interface: CertVerifierService
mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec, 'cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_Params', [
      mojo.internal.StructField('url_loader_factory', 0, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('reconnector', 8, 0, mojo.internal.InterfaceProxy(cert_verifier.mojom.URLLoaderFactoryConnectorRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierService_Verify_ParamsSpec, 'cert_verifier.mojom.CertVerifierService_Verify_Params', [
      mojo.internal.StructField('params', 0, 0, cert_verifier.mojom.RequestParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('net_log_source', 8, 0, network.mojom.NetLogSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('cert_verifier_request', 16, 0, mojo.internal.InterfaceProxy(cert_verifier.mojom.CertVerifierRequestRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec, 'cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_Params', [
      mojo.internal.StructField('binding', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('hostname', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tls_certificate', 16, 0, network.mojom.X509CertificateSpec, null, false, 0, undefined),
      mojo.internal.StructField('net_log_source', 24, 0, network.mojom.NetLogSourceSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParams', [
      mojo.internal.StructField('verified_cert', 0, 0, network.mojom.X509CertificateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierService_SetConfig_ParamsSpec, 'cert_verifier.mojom.CertVerifierService_SetConfig_Params', [
      mojo.internal.StructField('config', 0, 0, cert_verifier.mojom.CertVerifierConfigSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

cert_verifier.mojom.CertVerifierServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cert_verifier.mojom.CertVerifierServiceRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.CertVerifierService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cert_verifier.mojom.CertVerifierServicePendingReceiver,
      handle);
    this.$ = new cert_verifier.mojom.CertVerifierServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cert_verifier.mojom.CertVerifierServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableNetworkAccess(url_loader_factory, reconnector) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec,
      null,
      [url_loader_factory, reconnector],
      false);
  }

  verify(params, net_log_source, cert_verifier_request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cert_verifier.mojom.CertVerifierService_Verify_ParamsSpec,
      null,
      [params, net_log_source, cert_verifier_request],
      false);
  }

  verify2QwacBinding(binding, hostname, tls_certificate, net_log_source) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec,
      cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec,
      [binding, hostname, tls_certificate, net_log_source],
      false);
  }

  setConfig(config) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cert_verifier.mojom.CertVerifierService_SetConfig_ParamsSpec,
      null,
      [config],
      false);
  }

};

cert_verifier.mojom.CertVerifierService.getRemote = function() {
  let remote = new cert_verifier.mojom.CertVerifierServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.CertVerifierService',
    'context');
  return remote.$;
};

cert_verifier.mojom.CertVerifierServicePtr = cert_verifier.mojom.CertVerifierServiceRemote;
cert_verifier.mojom.CertVerifierServiceRequest = cert_verifier.mojom.CertVerifierServicePendingReceiver;


// Interface: CertVerifierServiceClient
mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceClient_OnCertVerifierChanged_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceClient_OnCertVerifierChanged_Params', [
    ],
    [[0, 8]]);

cert_verifier.mojom.CertVerifierServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cert_verifier.mojom.CertVerifierServiceClientRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.CertVerifierServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cert_verifier.mojom.CertVerifierServiceClientPendingReceiver,
      handle);
    this.$ = new cert_verifier.mojom.CertVerifierServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cert_verifier.mojom.CertVerifierServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCertVerifierChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cert_verifier.mojom.CertVerifierServiceClient_OnCertVerifierChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

cert_verifier.mojom.CertVerifierServiceClient.getRemote = function() {
  let remote = new cert_verifier.mojom.CertVerifierServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.CertVerifierServiceClient',
    'context');
  return remote.$;
};

cert_verifier.mojom.CertVerifierServiceClientPtr = cert_verifier.mojom.CertVerifierServiceClientRemote;
cert_verifier.mojom.CertVerifierServiceClientRequest = cert_verifier.mojom.CertVerifierServiceClientPendingReceiver;


// Interface: CertVerifierRequest
mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierRequest_Complete_ParamsSpec, 'cert_verifier.mojom.CertVerifierRequest_Complete_Params', [
      mojo.internal.StructField('result', 0, 0, network.mojom.CertVerifyResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

cert_verifier.mojom.CertVerifierRequestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cert_verifier.mojom.CertVerifierRequestRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.CertVerifierRequest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cert_verifier.mojom.CertVerifierRequestPendingReceiver,
      handle);
    this.$ = new cert_verifier.mojom.CertVerifierRequestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cert_verifier.mojom.CertVerifierRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  complete(result, net_error) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cert_verifier.mojom.CertVerifierRequest_Complete_ParamsSpec,
      null,
      [result, net_error],
      false);
  }

};

cert_verifier.mojom.CertVerifierRequest.getRemote = function() {
  let remote = new cert_verifier.mojom.CertVerifierRequestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.CertVerifierRequest',
    'context');
  return remote.$;
};

cert_verifier.mojom.CertVerifierRequestPtr = cert_verifier.mojom.CertVerifierRequestRemote;
cert_verifier.mojom.CertVerifierRequestRequest = cert_verifier.mojom.CertVerifierRequestPendingReceiver;

