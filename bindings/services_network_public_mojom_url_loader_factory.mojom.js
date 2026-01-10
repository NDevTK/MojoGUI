// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader_factory.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};

network.mojom.URLLoaderFactory = {};
network.mojom.URLLoaderFactory.$interfaceName = 'network.mojom.URLLoaderFactory';
network.mojom.URLLoaderFactory_CreateLoaderAndStart_ParamsSpec = { $: {} };
network.mojom.URLLoaderFactory_Clone_ParamsSpec = { $: {} };

network.mojom.kURLLoadOptionNone = 0;

network.mojom.kURLLoadOptionSendSSLInfoWithResponse = 1;

network.mojom.kURLLoadOptionSniffMimeType = 2;

network.mojom.kURLLoadOptionSynchronous = 4;

network.mojom.kURLLoadOptionSendSSLInfoForCertificateError = 8;

network.mojom.kURLLoadOptionUseHeaderClient = 16;

network.mojom.kURLLoadOptionBlockAllCookies = 32;

network.mojom.kURLLoadOptionBlockThirdPartyCookies = 64;

network.mojom.kURLLoadOptionAsCorsPreflight = 128;

network.mojom.kURLLoadOptionBlockLocalRequest = 256;

network.mojom.kURLLoadOptionReadAndDiscardBody = 512;

// Interface: URLLoaderFactory
mojo.internal.Struct(
    network.mojom.URLLoaderFactory_CreateLoaderAndStart_ParamsSpec, 'network.mojom.URLLoaderFactory_CreateLoaderAndStart_Params', [
      mojo.internal.StructField('loader', 0, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderRemote), null, false, 0, undefined),
      mojo.internal.StructField('request_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('options', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('request', 16, 0, network.mojom.URLRequestSpec, null, false, 0, undefined),
      mojo.internal.StructField('client', 24, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 32, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.URLLoaderFactory_Clone_ParamsSpec, 'network.mojom.URLLoaderFactory_Clone_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.URLLoaderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.URLLoaderFactoryRemote = class {
  static get $interfaceName() {
    return 'network.mojom.URLLoaderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.URLLoaderFactoryPendingReceiver,
      handle);
    this.$ = new network.mojom.URLLoaderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.URLLoaderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createLoaderAndStart(loader, request_id, options, request, client, traffic_annotation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.URLLoaderFactory_CreateLoaderAndStart_ParamsSpec,
      null,
      [loader, request_id, options, request, client, traffic_annotation]);
  }

  clone(factory) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.URLLoaderFactory_Clone_ParamsSpec,
      null,
      [factory]);
  }

};

network.mojom.URLLoaderFactory.getRemote = function() {
  let remote = new network.mojom.URLLoaderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.URLLoaderFactory',
    'context');
  return remote.$;
};

network.mojom.URLLoaderFactoryPtr = network.mojom.URLLoaderFactoryRemote;
network.mojom.URLLoaderFactoryRequest = network.mojom.URLLoaderFactoryPendingReceiver;

