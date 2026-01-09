// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cert_verifier_service.mojom
// Module: cert_verifier.mojom

'use strict';

// Module namespace
var cert_verifier = cert_verifier || {};
cert_verifier.mojom = cert_verifier.mojom || {};


// Struct: RequestParams
cert_verifier.mojom.RequestParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.RequestParams',
      packedSize: 48,
      fields: [
        { name: 'certificate', packedOffset: 8, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false },
        { name: 'hostname', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'flags', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'ocsp_response', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false },
        { name: 'sct_list', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CertVerifierConfig
cert_verifier.mojom.CertVerifierConfigSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierConfig',
      packedSize: 16,
      fields: [
        { name: 'enable_rev_checking', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'require_rev_checking_local_anchors', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_sha1_local_anchors', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: URLLoaderFactoryConnector
cert_verifier.mojom.URLLoaderFactoryConnector = {};

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
      [url_loader_factory]);
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

// ParamsSpec for CreateURLLoaderFactory
cert_verifier.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.URLLoaderFactoryConnector.CreateURLLoaderFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'url_loader_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
cert_verifier.mojom.URLLoaderFactoryConnectorPtr = cert_verifier.mojom.URLLoaderFactoryConnectorRemote;
cert_verifier.mojom.URLLoaderFactoryConnectorRequest = cert_verifier.mojom.URLLoaderFactoryConnectorPendingReceiver;


// Interface: CertVerifierService
cert_verifier.mojom.CertVerifierService = {};

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
      [url_loader_factory, reconnector]);
  }

  verify(params, net_log_source, cert_verifier_request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cert_verifier.mojom.CertVerifierService_Verify_ParamsSpec,
      null,
      [params, net_log_source, cert_verifier_request]);
  }

  verify2QwacBinding(binding, hostname, tls_certificate, net_log_source) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec,
      cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec,
      [binding, hostname, tls_certificate, net_log_source]);
  }

  setConfig(config) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cert_verifier.mojom.CertVerifierService_SetConfig_ParamsSpec,
      null,
      [config]);
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

// ParamsSpec for EnableNetworkAccess
cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierService.EnableNetworkAccess_Params',
      packedSize: 16,
      fields: [
        { name: 'url_loader_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'reconnector', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Verify
cert_verifier.mojom.CertVerifierService_Verify_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierService.Verify_Params',
      packedSize: 32,
      fields: [
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: cert_verifier.mojom.RequestParamsSpec, nullable: false },
        { name: 'net_log_source', packedOffset: 16, packedBitOffset: 0, type: network.mojom.NetLogSourceSpec, nullable: false },
        { name: 'cert_verifier_request', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Verify2QwacBinding
cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierService.Verify2QwacBinding_Params',
      packedSize: 40,
      fields: [
        { name: 'binding', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'hostname', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'tls_certificate', packedOffset: 24, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false },
        { name: 'net_log_source', packedOffset: 32, packedBitOffset: 0, type: network.mojom.NetLogSourceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierService.Verify2QwacBinding_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'verified_cert', packedOffset: 8, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetConfig
cert_verifier.mojom.CertVerifierService_SetConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierService.SetConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: cert_verifier.mojom.CertVerifierConfigSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
cert_verifier.mojom.CertVerifierServicePtr = cert_verifier.mojom.CertVerifierServiceRemote;
cert_verifier.mojom.CertVerifierServiceRequest = cert_verifier.mojom.CertVerifierServicePendingReceiver;


// Interface: CertVerifierServiceClient
cert_verifier.mojom.CertVerifierServiceClient = {};

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
      []);
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

// ParamsSpec for OnCertVerifierChanged
cert_verifier.mojom.CertVerifierServiceClient_OnCertVerifierChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceClient.OnCertVerifierChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
cert_verifier.mojom.CertVerifierServiceClientPtr = cert_verifier.mojom.CertVerifierServiceClientRemote;
cert_verifier.mojom.CertVerifierServiceClientRequest = cert_verifier.mojom.CertVerifierServiceClientPendingReceiver;


// Interface: CertVerifierRequest
cert_verifier.mojom.CertVerifierRequest = {};

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
      [result, net_error]);
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

// ParamsSpec for Complete
cert_verifier.mojom.CertVerifierRequest_Complete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierRequest.Complete_Params',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: network.mojom.CertVerifyResultSpec, nullable: false },
        { name: 'net_error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
cert_verifier.mojom.CertVerifierRequestPtr = cert_verifier.mojom.CertVerifierRequestRemote;
cert_verifier.mojom.CertVerifierRequestRequest = cert_verifier.mojom.CertVerifierRequestPendingReceiver;

