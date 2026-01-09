// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/shared_dictionary_access_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: Type
network.mojom.Type = {
  kRead: 0,
  kWrite: 1,
};

// Struct: SharedDictionaryAccessDetails
network.mojom.SharedDictionaryAccessDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedDictionaryAccessDetails',
      packedSize: 16,
      fields: [
        { name: 'kRead', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: SharedDictionaryAccessObserver
network.mojom.SharedDictionaryAccessObserver = {};

network.mojom.SharedDictionaryAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SharedDictionaryAccessObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SharedDictionaryAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SharedDictionaryAccessObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.SharedDictionaryAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SharedDictionaryAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSharedDictionaryAccessed(details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_ParamsSpec,
      null,
      [details]);
  }

  clone(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.SharedDictionaryAccessObserver_Clone_ParamsSpec,
      null,
      [observer]);
  }

};

network.mojom.SharedDictionaryAccessObserver.getRemote = function() {
  let remote = new network.mojom.SharedDictionaryAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SharedDictionaryAccessObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnSharedDictionaryAccessed
network.mojom.SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedDictionaryAccessObserver.OnSharedDictionaryAccessed_Params',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.SharedDictionaryAccessObserver_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedDictionaryAccessObserver.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.SharedDictionaryAccessObserverPtr = network.mojom.SharedDictionaryAccessObserverRemote;
network.mojom.SharedDictionaryAccessObserverRequest = network.mojom.SharedDictionaryAccessObserverPendingReceiver;

