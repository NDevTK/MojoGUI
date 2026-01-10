// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cert_verifier_service.mojom
// Module: cert_verifier.mojom

'use strict';

// Module namespace
var cert_verifier = cert_verifier || {};
cert_verifier.mojom = cert_verifier.mojom || {};


// Struct: RequestParams
cert_verifier.mojom.mojom.RequestParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.RequestParams',
      packedSize: 48,
      fields: [
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false, minVersion: 0 },
        { name: 'hostname', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'ocsp_response', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
        { name: 'sct_list', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: CertVerifierConfig
cert_verifier.mojom.mojom.CertVerifierConfigSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierConfig',
      packedSize: 16,
      fields: [
        { name: 'enable_rev_checking', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'require_rev_checking_local_anchors', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_sha1_local_anchors', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: URLLoaderFactoryConnector
cert_verifier.mojom.mojom.URLLoaderFactoryConnector = {};

cert_verifier.mojom.mojom.URLLoaderFactoryConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cert_verifier.mojom.mojom.URLLoaderFactoryConnectorRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.URLLoaderFactoryConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cert_verifier.mojom.mojom.URLLoaderFactoryConnectorPendingReceiver,
      handle);
    this.$ = new cert_verifier.mojom.mojom.URLLoaderFactoryConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cert_verifier.mojom.mojom.URLLoaderFactoryConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createURLLoaderFactory(url_loader_factory) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cert_verifier.mojom.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_ParamsSpec,
      null,
      [url_loader_factory]);
  }

};

cert_verifier.mojom.mojom.URLLoaderFactoryConnector.getRemote = function() {
  let remote = new cert_verifier.mojom.mojom.URLLoaderFactoryConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.URLLoaderFactoryConnector',
    'context');
  return remote.$;
};

// ParamsSpec for CreateURLLoaderFactory
cert_verifier.mojom.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.URLLoaderFactoryConnector.CreateURLLoaderFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'url_loader_factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cert_verifier.mojom.mojom.URLLoaderFactoryConnectorPtr = cert_verifier.mojom.mojom.URLLoaderFactoryConnectorRemote;
cert_verifier.mojom.mojom.URLLoaderFactoryConnectorRequest = cert_verifier.mojom.mojom.URLLoaderFactoryConnectorPendingReceiver;


// Interface: CertVerifierService
cert_verifier.mojom.mojom.CertVerifierService = {};

cert_verifier.mojom.mojom.CertVerifierServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cert_verifier.mojom.mojom.CertVerifierServiceRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.CertVerifierService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cert_verifier.mojom.mojom.CertVerifierServicePendingReceiver,
      handle);
    this.$ = new cert_verifier.mojom.mojom.CertVerifierServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cert_verifier.mojom.mojom.CertVerifierServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enableNetworkAccess(url_loader_factory, reconnector) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cert_verifier.mojom.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec,
      null,
      [url_loader_factory, reconnector]);
  }

  verify(params, net_log_source, cert_verifier_request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cert_verifier.mojom.mojom.CertVerifierService_Verify_ParamsSpec,
      null,
      [params, net_log_source, cert_verifier_request]);
  }

  verify2QwacBinding(binding, hostname, tls_certificate, net_log_source) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cert_verifier.mojom.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec,
      cert_verifier.mojom.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec,
      [binding, hostname, tls_certificate, net_log_source]);
  }

  setConfig(config) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cert_verifier.mojom.mojom.CertVerifierService_SetConfig_ParamsSpec,
      null,
      [config]);
  }

};

cert_verifier.mojom.mojom.CertVerifierService.getRemote = function() {
  let remote = new cert_verifier.mojom.mojom.CertVerifierServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.CertVerifierService',
    'context');
  return remote.$;
};

// ParamsSpec for EnableNetworkAccess
cert_verifier.mojom.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierService.EnableNetworkAccess_Params',
      packedSize: 16,
      fields: [
        { name: 'url_loader_factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'reconnector', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Verify
cert_verifier.mojom.mojom.CertVerifierService_Verify_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierService.Verify_Params',
      packedSize: 32,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: cert_verifier.mojom.RequestParamsSpec, nullable: false, minVersion: 0 },
        { name: 'net_log_source', packedOffset: 8, packedBitOffset: 0, type: network.mojom.NetLogSourceSpec, nullable: false, minVersion: 0 },
        { name: 'cert_verifier_request', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Verify2QwacBinding
cert_verifier.mojom.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierService.Verify2QwacBinding_Params',
      packedSize: 40,
      fields: [
        { name: 'binding', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'hostname', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'tls_certificate', packedOffset: 16, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false, minVersion: 0 },
        { name: 'net_log_source', packedOffset: 24, packedBitOffset: 0, type: network.mojom.NetLogSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

cert_verifier.mojom.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierService.Verify2QwacBinding_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'verified_cert', packedOffset: 0, packedBitOffset: 0, type: network.mojom.X509CertificateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetConfig
cert_verifier.mojom.mojom.CertVerifierService_SetConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierService.SetConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: cert_verifier.mojom.CertVerifierConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cert_verifier.mojom.mojom.CertVerifierServicePtr = cert_verifier.mojom.mojom.CertVerifierServiceRemote;
cert_verifier.mojom.mojom.CertVerifierServiceRequest = cert_verifier.mojom.mojom.CertVerifierServicePendingReceiver;


// Interface: CertVerifierServiceClient
cert_verifier.mojom.mojom.CertVerifierServiceClient = {};

cert_verifier.mojom.mojom.CertVerifierServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cert_verifier.mojom.mojom.CertVerifierServiceClientRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.CertVerifierServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cert_verifier.mojom.mojom.CertVerifierServiceClientPendingReceiver,
      handle);
    this.$ = new cert_verifier.mojom.mojom.CertVerifierServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cert_verifier.mojom.mojom.CertVerifierServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCertVerifierChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cert_verifier.mojom.mojom.CertVerifierServiceClient_OnCertVerifierChanged_ParamsSpec,
      null,
      []);
  }

};

cert_verifier.mojom.mojom.CertVerifierServiceClient.getRemote = function() {
  let remote = new cert_verifier.mojom.mojom.CertVerifierServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.CertVerifierServiceClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnCertVerifierChanged
cert_verifier.mojom.mojom.CertVerifierServiceClient_OnCertVerifierChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceClient.OnCertVerifierChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
cert_verifier.mojom.mojom.CertVerifierServiceClientPtr = cert_verifier.mojom.mojom.CertVerifierServiceClientRemote;
cert_verifier.mojom.mojom.CertVerifierServiceClientRequest = cert_verifier.mojom.mojom.CertVerifierServiceClientPendingReceiver;


// Interface: CertVerifierRequest
cert_verifier.mojom.mojom.CertVerifierRequest = {};

cert_verifier.mojom.mojom.CertVerifierRequestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cert_verifier.mojom.mojom.CertVerifierRequestRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.CertVerifierRequest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cert_verifier.mojom.mojom.CertVerifierRequestPendingReceiver,
      handle);
    this.$ = new cert_verifier.mojom.mojom.CertVerifierRequestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cert_verifier.mojom.mojom.CertVerifierRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  complete(result, net_error) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cert_verifier.mojom.mojom.CertVerifierRequest_Complete_ParamsSpec,
      null,
      [result, net_error]);
  }

};

cert_verifier.mojom.mojom.CertVerifierRequest.getRemote = function() {
  let remote = new cert_verifier.mojom.mojom.CertVerifierRequestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.CertVerifierRequest',
    'context');
  return remote.$;
};

// ParamsSpec for Complete
cert_verifier.mojom.mojom.CertVerifierRequest_Complete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierRequest.Complete_Params',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CertVerifyResultSpec, nullable: false, minVersion: 0 },
        { name: 'net_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
cert_verifier.mojom.mojom.CertVerifierRequestPtr = cert_verifier.mojom.mojom.CertVerifierRequestRemote;
cert_verifier.mojom.mojom.CertVerifierRequestRequest = cert_verifier.mojom.mojom.CertVerifierRequestPendingReceiver;

