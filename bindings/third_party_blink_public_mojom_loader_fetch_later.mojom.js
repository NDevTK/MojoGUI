// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/fetch_later.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FetchLaterLoaderFactory
blink.mojom.mojom.FetchLaterLoaderFactory = {};

blink.mojom.mojom.FetchLaterLoaderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.FetchLaterLoaderFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FetchLaterLoaderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.FetchLaterLoaderFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.FetchLaterLoaderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.FetchLaterLoaderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createLoader(loader, request_id, options, request, traffic_annotation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.FetchLaterLoaderFactory_CreateLoader_ParamsSpec,
      null,
      [loader, request_id, options, request, traffic_annotation]);
  }

  clone(factory) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.FetchLaterLoaderFactory_Clone_ParamsSpec,
      null,
      [factory]);
  }

};

blink.mojom.mojom.FetchLaterLoaderFactory.getRemote = function() {
  let remote = new blink.mojom.mojom.FetchLaterLoaderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FetchLaterLoaderFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateLoader
blink.mojom.mojom.FetchLaterLoaderFactory_CreateLoader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchLaterLoaderFactory.CreateLoader_Params',
      packedSize: 40,
      fields: [
        { name: 'loader', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: network.mojom.URLRequestSpec, nullable: false, minVersion: 0 },
        { name: 'traffic_annotation', packedOffset: 8, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for Clone
blink.mojom.mojom.FetchLaterLoaderFactory_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchLaterLoaderFactory.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.FetchLaterLoaderFactoryPtr = blink.mojom.mojom.FetchLaterLoaderFactoryRemote;
blink.mojom.mojom.FetchLaterLoaderFactoryRequest = blink.mojom.mojom.FetchLaterLoaderFactoryPendingReceiver;


// Interface: FetchLaterLoader
blink.mojom.mojom.FetchLaterLoader = {};

blink.mojom.mojom.FetchLaterLoaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.FetchLaterLoaderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FetchLaterLoader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.FetchLaterLoaderPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.FetchLaterLoaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.FetchLaterLoaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendNow() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.FetchLaterLoader_SendNow_ParamsSpec,
      null,
      []);
  }

  cancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.FetchLaterLoader_Cancel_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.FetchLaterLoader.getRemote = function() {
  let remote = new blink.mojom.mojom.FetchLaterLoaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FetchLaterLoader',
    'context');
  return remote.$;
};

// ParamsSpec for SendNow
blink.mojom.mojom.FetchLaterLoader_SendNow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchLaterLoader.SendNow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Cancel
blink.mojom.mojom.FetchLaterLoader_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchLaterLoader.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.FetchLaterLoaderPtr = blink.mojom.mojom.FetchLaterLoaderRemote;
blink.mojom.mojom.FetchLaterLoaderRequest = blink.mojom.mojom.FetchLaterLoaderPendingReceiver;

