// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_access_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: Type
network.mojom.Type = {
  kRead: 0,
  kChange: 1,
};

// Interface: CookieAccessObserver
network.mojom.CookieAccessObserver = {};

network.mojom.CookieAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CookieAccessObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CookieAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CookieAccessObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.CookieAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.CookieAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCookiesAccessed(details) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec,
      null,
      null,
      [details],
      undefined,
      undefined
    );
  }

  clone(listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.CookieAccessObserver_Clone_ParamsSpec,
      null,
      null,
      [listener],
      undefined,
      undefined
    );
  }

};

network.mojom.CookieAccessObserver.getRemote = function() {
  let remote = new network.mojom.CookieAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CookieAccessObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnCookiesAccessed
network.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieAccessObserver.OnCookiesAccessed_Params',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.CookieAccessObserver_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieAccessObserver.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.CookieAccessObserverPtr = network.mojom.CookieAccessObserverRemote;
network.mojom.CookieAccessObserverRequest = network.mojom.CookieAccessObserverPendingReceiver;

