// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_access_observer.mojom
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
  kChange: 1,
};
network.mojom.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Struct: CookieAccessDetails
network.mojom.mojom.CookieAccessDetailsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieAccessDetails',
      packedSize: 16,
      fields: [
        { name: 'kRead', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: CookieAccessObserver
network.mojom.mojom.CookieAccessObserver = {};

network.mojom.mojom.CookieAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.CookieAccessObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CookieAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.CookieAccessObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.CookieAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.CookieAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCookiesAccessed(details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec,
      null,
      [details]);
  }

  clone(listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.CookieAccessObserver_Clone_ParamsSpec,
      null,
      [listener]);
  }

};

network.mojom.mojom.CookieAccessObserver.getRemote = function() {
  let remote = new network.mojom.mojom.CookieAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CookieAccessObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnCookiesAccessed
network.mojom.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieAccessObserver.OnCookiesAccessed_Params',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CookieAccessDetailsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.mojom.CookieAccessObserver_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieAccessObserver.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.CookieAccessObserverPtr = network.mojom.mojom.CookieAccessObserverRemote;
network.mojom.mojom.CookieAccessObserverRequest = network.mojom.mojom.CookieAccessObserverPendingReceiver;

