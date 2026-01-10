// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader_factory.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


network.mojom.mojom.kURLLoadOptionNone = 0;

network.mojom.mojom.kURLLoadOptionSendSSLInfoWithResponse = 1;

network.mojom.mojom.kURLLoadOptionSniffMimeType = 2;

network.mojom.mojom.kURLLoadOptionSynchronous = 4;

network.mojom.mojom.kURLLoadOptionSendSSLInfoForCertificateError = 8;

network.mojom.mojom.kURLLoadOptionUseHeaderClient = 16;

network.mojom.mojom.kURLLoadOptionBlockAllCookies = 32;

network.mojom.mojom.kURLLoadOptionBlockThirdPartyCookies = 64;

network.mojom.mojom.kURLLoadOptionAsCorsPreflight = 128;

network.mojom.mojom.kURLLoadOptionBlockLocalRequest = 256;

network.mojom.mojom.kURLLoadOptionReadAndDiscardBody = 512;

// Interface: URLLoaderFactory
network.mojom.mojom.URLLoaderFactory = {};

network.mojom.mojom.URLLoaderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.URLLoaderFactoryRemote = class {
  static get $interfaceName() {
    return 'network.mojom.URLLoaderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.URLLoaderFactoryPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.URLLoaderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.URLLoaderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createLoaderAndStart(loader, request_id, options, request, client, traffic_annotation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.URLLoaderFactory_CreateLoaderAndStart_ParamsSpec,
      null,
      [loader, request_id, options, request, client, traffic_annotation]);
  }

  clone(factory) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.URLLoaderFactory_Clone_ParamsSpec,
      null,
      [factory]);
  }

};

network.mojom.mojom.URLLoaderFactory.getRemote = function() {
  let remote = new network.mojom.mojom.URLLoaderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.URLLoaderFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateLoaderAndStart
network.mojom.mojom.URLLoaderFactory_CreateLoaderAndStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderFactory.CreateLoaderAndStart_Params',
      packedSize: 48,
      fields: [
        { name: 'loader', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.URLLoaderRemote), nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: network.mojom.URLRequestSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.URLLoaderClientRemote), nullable: false, minVersion: 0 },
        { name: 'traffic_annotation', packedOffset: 24, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.mojom.URLLoaderFactory_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLLoaderFactory.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.URLLoaderFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.URLLoaderFactoryPtr = network.mojom.mojom.URLLoaderFactoryRemote;
network.mojom.mojom.URLLoaderFactoryRequest = network.mojom.mojom.URLLoaderFactoryPendingReceiver;

