// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/feature_observer/feature_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ObservedFeatureTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.ObservedFeature = {};
blink.mojom.ObservedFeature.$interfaceName = 'blink.mojom.ObservedFeature';
blink.mojom.FeatureObserver = {};
blink.mojom.FeatureObserver.$interfaceName = 'blink.mojom.FeatureObserver';
blink.mojom.FeatureObserver_Register_ParamsSpec = { $: {} };

// Enum: ObservedFeatureType
blink.mojom.ObservedFeatureType = {
  kWebLock: 0,
  kBlockingIndexedDBLock: 1,
};

// Interface: ObservedFeature
blink.mojom.ObservedFeaturePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ObservedFeatureRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ObservedFeature';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ObservedFeaturePendingReceiver,
      handle);
    this.$ = new blink.mojom.ObservedFeatureRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ObservedFeatureRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.ObservedFeature.getRemote = function() {
  let remote = new blink.mojom.ObservedFeatureRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ObservedFeature',
    'context');
  return remote.$;
};

blink.mojom.ObservedFeatureReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
      }
    }});
  }
};

blink.mojom.ObservedFeatureReceiver = blink.mojom.ObservedFeatureReceiver;

blink.mojom.ObservedFeaturePtr = blink.mojom.ObservedFeatureRemote;
blink.mojom.ObservedFeatureRequest = blink.mojom.ObservedFeaturePendingReceiver;


// Interface: FeatureObserver
mojo.internal.Struct(
    blink.mojom.FeatureObserver_Register_ParamsSpec, 'blink.mojom.FeatureObserver_Register_Params', [
      mojo.internal.StructField('feature', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ObservedFeatureSpec), null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, blink.mojom.ObservedFeatureTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.FeatureObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FeatureObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FeatureObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FeatureObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.FeatureObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FeatureObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(feature, type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FeatureObserver_Register_ParamsSpec,
      null,
      [feature, type],
      false);
  }

};

blink.mojom.FeatureObserver.getRemote = function() {
  let remote = new blink.mojom.FeatureObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FeatureObserver',
    'context');
  return remote.$;
};

blink.mojom.FeatureObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.FeatureObserver_Register_ParamsSpec.$.decode(message.payload);
          const result = this.impl.register(params.feature, params.type);
          break;
        }
      }
    }});
  }
};

blink.mojom.FeatureObserverReceiver = blink.mojom.FeatureObserverReceiver;

blink.mojom.FeatureObserverPtr = blink.mojom.FeatureObserverRemote;
blink.mojom.FeatureObserverRequest = blink.mojom.FeatureObserverPendingReceiver;

