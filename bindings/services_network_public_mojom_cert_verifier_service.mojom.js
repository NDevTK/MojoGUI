// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cert_verifier_service.mojom
// Module: cert_verifier.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var cert_verifier = cert_verifier || {};
cert_verifier.mojom = cert_verifier.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};

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
      mojo.internal.StructField('certificate', 0, 0, network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hostname', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ocsp_response', 16, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sct_list', 24, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('flags', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
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
  createURLLoaderFactory(url_loader_factory) {
    return this.$.createURLLoaderFactory(url_loader_factory);
  }
};

cert_verifier.mojom.URLLoaderFactoryConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('URLLoaderFactoryConnector', [
      { explicit: null },
    ]);
  }

  createURLLoaderFactory(url_loader_factory) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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

cert_verifier.mojom.URLLoaderFactoryConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('URLLoaderFactoryConnector', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.URLLoaderFactoryConnector_CreateURLLoaderFactory_ParamsSpec.$.structSpec);
          const result = this.impl.createURLLoaderFactory(params.url_loader_factory);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

cert_verifier.mojom.URLLoaderFactoryConnectorReceiver = cert_verifier.mojom.URLLoaderFactoryConnectorReceiver;

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
      mojo.internal.StructField('params', 0, 0, cert_verifier.mojom.RequestParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('net_log_source', 8, 0, network.mojom.NetLogSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cert_verifier_request', 16, 0, mojo.internal.InterfaceProxy(cert_verifier.mojom.CertVerifierRequestRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec, 'cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_Params', [
      mojo.internal.StructField('binding', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('hostname', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tls_certificate', 16, 0, network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('net_log_source', 24, 0, network.mojom.NetLogSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParams', [
      mojo.internal.StructField('verified_cert', 0, 0, network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierService_SetConfig_ParamsSpec, 'cert_verifier.mojom.CertVerifierService_SetConfig_Params', [
      mojo.internal.StructField('config', 0, 0, cert_verifier.mojom.CertVerifierConfigSpec.$, null, false, 0, undefined),
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
  enableNetworkAccess(url_loader_factory, reconnector) {
    return this.$.enableNetworkAccess(url_loader_factory, reconnector);
  }
  verify(params, net_log_source, cert_verifier_request) {
    return this.$.verify(params, net_log_source, cert_verifier_request);
  }
  verify2QwacBinding(binding, hostname, tls_certificate, net_log_source) {
    return this.$.verify2QwacBinding(binding, hostname, tls_certificate, net_log_source);
  }
  setConfig(config) {
    return this.$.setConfig(config);
  }
};

cert_verifier.mojom.CertVerifierServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CertVerifierService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  enableNetworkAccess(url_loader_factory, reconnector) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec,
      null,
      [url_loader_factory, reconnector],
      false);
  }

  verify(params, net_log_source, cert_verifier_request) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      cert_verifier.mojom.CertVerifierService_Verify_ParamsSpec,
      null,
      [params, net_log_source, cert_verifier_request],
      false);
  }

  verify2QwacBinding(binding, hostname, tls_certificate, net_log_source) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec,
      cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec,
      [binding, hostname, tls_certificate, net_log_source],
      false);
  }

  setConfig(config) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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

cert_verifier.mojom.CertVerifierServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CertVerifierService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierService_Verify_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierService_SetConfig_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierService_EnableNetworkAccess_ParamsSpec.$.structSpec);
          const result = this.impl.enableNetworkAccess(params.url_loader_factory, params.reconnector);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierService_Verify_ParamsSpec.$.structSpec);
          const result = this.impl.verify(params.params, params.net_log_source, params.cert_verifier_request);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ParamsSpec.$.structSpec);
          const result = this.impl.verify2QwacBinding(params.binding, params.hostname, params.tls_certificate, params.net_log_source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierService_Verify2QwacBinding_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierService_SetConfig_ParamsSpec.$.structSpec);
          const result = this.impl.setConfig(params.config);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

cert_verifier.mojom.CertVerifierServiceReceiver = cert_verifier.mojom.CertVerifierServiceReceiver;

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
  onCertVerifierChanged() {
    return this.$.onCertVerifierChanged();
  }
};

cert_verifier.mojom.CertVerifierServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CertVerifierServiceClient', [
      { explicit: null },
    ]);
  }

  onCertVerifierChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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

cert_verifier.mojom.CertVerifierServiceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CertVerifierServiceClient', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceClient_OnCertVerifierChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceClient_OnCertVerifierChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onCertVerifierChanged();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

cert_verifier.mojom.CertVerifierServiceClientReceiver = cert_verifier.mojom.CertVerifierServiceClientReceiver;

cert_verifier.mojom.CertVerifierServiceClientPtr = cert_verifier.mojom.CertVerifierServiceClientRemote;
cert_verifier.mojom.CertVerifierServiceClientRequest = cert_verifier.mojom.CertVerifierServiceClientPendingReceiver;


// Interface: CertVerifierRequest
mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierRequest_Complete_ParamsSpec, 'cert_verifier.mojom.CertVerifierRequest_Complete_Params', [
      mojo.internal.StructField('result', 0, 0, network.mojom.CertVerifyResultSpec.$, null, false, 0, undefined),
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
  complete(result, net_error) {
    return this.$.complete(result, net_error);
  }
};

cert_verifier.mojom.CertVerifierRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CertVerifierRequest', [
      { explicit: null },
    ]);
  }

  complete(result, net_error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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

cert_verifier.mojom.CertVerifierRequestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CertVerifierRequest', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierRequest_Complete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierRequest_Complete_ParamsSpec.$.structSpec);
          const result = this.impl.complete(params.result, params.net_error);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

cert_verifier.mojom.CertVerifierRequestReceiver = cert_verifier.mojom.CertVerifierRequestReceiver;

cert_verifier.mojom.CertVerifierRequestPtr = cert_verifier.mojom.CertVerifierRequestRemote;
cert_verifier.mojom.CertVerifierRequestRequest = cert_verifier.mojom.CertVerifierRequestPendingReceiver;

