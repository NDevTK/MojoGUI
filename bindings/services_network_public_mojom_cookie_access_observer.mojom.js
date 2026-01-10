// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_access_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.TypeSpec = { $: mojo.internal.Enum() };
network.mojom.CookieAccessDetailsSpec = { $: {} };
network.mojom.CookieAccessObserver = {};
network.mojom.CookieAccessObserver.$interfaceName = 'network.mojom.CookieAccessObserver';
network.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec = { $: {} };
network.mojom.CookieAccessObserver_Clone_ParamsSpec = { $: {} };

// Enum: Type
network.mojom.Type = {
  kRead: 0,
  kChange: 1,
};

// Struct: CookieAccessDetails
mojo.internal.Struct(
    network.mojom.CookieAccessDetailsSpec, 'network.mojom.CookieAccessDetails', [
      mojo.internal.StructField('kRead', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CookieAccessObserver
mojo.internal.Struct(
    network.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec, 'network.mojom.CookieAccessObserver_OnCookiesAccessed_Params', [
      mojo.internal.StructField('details', 0, 0, mojo.internal.Array(network.mojom.CookieAccessDetailsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.CookieAccessObserver_Clone_ParamsSpec, 'network.mojom.CookieAccessObserver_Clone_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceRequest(network.mojom.CookieAccessObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [details],
      false);
  }

  clone(listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.CookieAccessObserver_Clone_ParamsSpec,
      null,
      [listener],
      false);
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

network.mojom.CookieAccessObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.CookieAccessObserver_OnCookiesAccessed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCookiesAccessed(params.details);
          break;
        }
        case 1: {
          const params = network.mojom.CookieAccessObserver_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.listener);
          break;
        }
      }
    });
  }
};

network.mojom.CookieAccessObserverReceiver = network.mojom.CookieAccessObserverReceiver;

network.mojom.CookieAccessObserverPtr = network.mojom.CookieAccessObserverRemote;
network.mojom.CookieAccessObserverRequest = network.mojom.CookieAccessObserverPendingReceiver;

