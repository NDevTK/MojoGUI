// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/fetch_later.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FetchLaterLoaderFactory
blink.mojom.FetchLaterLoaderFactory = {};

blink.mojom.FetchLaterLoaderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FetchLaterLoaderFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FetchLaterLoaderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FetchLaterLoaderFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.FetchLaterLoaderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FetchLaterLoaderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createLoader(loader, request_id, options, request, traffic_annotation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FetchLaterLoaderFactory_CreateLoader_ParamsSpec.$,
      null,
      [loader, request_id, options, request, traffic_annotation]);
  }

  clone(factory) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FetchLaterLoaderFactory_Clone_ParamsSpec.$,
      null,
      [factory]);
  }

};

blink.mojom.FetchLaterLoaderFactory.getRemote = function() {
  let remote = new blink.mojom.FetchLaterLoaderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FetchLaterLoaderFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateLoader
blink.mojom.FetchLaterLoaderFactory_CreateLoader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchLaterLoaderFactory.CreateLoader_Params',
      packedSize: 48,
      fields: [
        { name: 'loader', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'request', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'traffic_annotation', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Clone
blink.mojom.FetchLaterLoaderFactory_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchLaterLoaderFactory.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FetchLaterLoaderFactoryPtr = blink.mojom.FetchLaterLoaderFactoryRemote;
blink.mojom.FetchLaterLoaderFactoryRequest = blink.mojom.FetchLaterLoaderFactoryPendingReceiver;


// Interface: FetchLaterLoader
blink.mojom.FetchLaterLoader = {};

blink.mojom.FetchLaterLoaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FetchLaterLoaderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FetchLaterLoader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FetchLaterLoaderPendingReceiver,
      handle);
    this.$ = new blink.mojom.FetchLaterLoaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FetchLaterLoaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendNow() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FetchLaterLoader_SendNow_ParamsSpec.$,
      null,
      []);
  }

  cancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FetchLaterLoader_Cancel_ParamsSpec.$,
      null,
      []);
  }

};

blink.mojom.FetchLaterLoader.getRemote = function() {
  let remote = new blink.mojom.FetchLaterLoaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FetchLaterLoader',
    'context');
  return remote.$;
};

// ParamsSpec for SendNow
blink.mojom.FetchLaterLoader_SendNow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchLaterLoader.SendNow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Cancel
blink.mojom.FetchLaterLoader_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchLaterLoader.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FetchLaterLoaderPtr = blink.mojom.FetchLaterLoaderRemote;
blink.mojom.FetchLaterLoaderRequest = blink.mojom.FetchLaterLoaderPendingReceiver;

