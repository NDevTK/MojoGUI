// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/shared_dictionary_access_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};
var url = url || {};


// Enum: Type
network.mojom.mojom.Type = {
  kRead: 0,
  kWrite: 1,
};
network.mojom.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Struct: SharedDictionaryAccessDetails
network.mojom.mojom.SharedDictionaryAccessDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedDictionaryAccessDetails',
      packedSize: 16,
      fields: [
        { name: 'kRead', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: SharedDictionaryAccessObserver
network.mojom.mojom.SharedDictionaryAccessObserver = {};

network.mojom.mojom.SharedDictionaryAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.SharedDictionaryAccessObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SharedDictionaryAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.SharedDictionaryAccessObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.SharedDictionaryAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.SharedDictionaryAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSharedDictionaryAccessed(details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_ParamsSpec,
      null,
      [details]);
  }

  clone(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.SharedDictionaryAccessObserver_Clone_ParamsSpec,
      null,
      [observer]);
  }

};

network.mojom.mojom.SharedDictionaryAccessObserver.getRemote = function() {
  let remote = new network.mojom.mojom.SharedDictionaryAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SharedDictionaryAccessObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnSharedDictionaryAccessed
network.mojom.mojom.SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedDictionaryAccessObserver.OnSharedDictionaryAccessed_Params',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SharedDictionaryAccessDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.mojom.SharedDictionaryAccessObserver_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedDictionaryAccessObserver.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.SharedDictionaryAccessObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.SharedDictionaryAccessObserverPtr = network.mojom.mojom.SharedDictionaryAccessObserverRemote;
network.mojom.mojom.SharedDictionaryAccessObserverRequest = network.mojom.mojom.SharedDictionaryAccessObserverPendingReceiver;

