// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/feature_observer/feature_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ObservedFeatureType
blink.mojom.mojom.ObservedFeatureType = {
  kWebLock: 0,
  kBlockingIndexedDBLock: 1,
};
blink.mojom.mojom.ObservedFeatureTypeSpec = { $: mojo.internal.Enum() };

// Interface: ObservedFeature
blink.mojom.mojom.ObservedFeature = {};

blink.mojom.mojom.ObservedFeaturePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ObservedFeatureRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ObservedFeature';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ObservedFeaturePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ObservedFeatureRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ObservedFeatureRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.mojom.ObservedFeature.getRemote = function() {
  let remote = new blink.mojom.mojom.ObservedFeatureRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ObservedFeature',
    'context');
  return remote.$;
};

// Legacy compatibility
blink.mojom.mojom.ObservedFeaturePtr = blink.mojom.mojom.ObservedFeatureRemote;
blink.mojom.mojom.ObservedFeatureRequest = blink.mojom.mojom.ObservedFeaturePendingReceiver;


// Interface: FeatureObserver
blink.mojom.mojom.FeatureObserver = {};

blink.mojom.mojom.FeatureObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.FeatureObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FeatureObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.FeatureObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.FeatureObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.FeatureObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(feature, type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.FeatureObserver_Register_ParamsSpec,
      null,
      [feature, type]);
  }

};

blink.mojom.mojom.FeatureObserver.getRemote = function() {
  let remote = new blink.mojom.mojom.FeatureObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FeatureObserver',
    'context');
  return remote.$;
};

// ParamsSpec for Register
blink.mojom.mojom.FeatureObserver_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FeatureObserver.Register_Params',
      packedSize: 24,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.ObservedFeatureRemote), nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ObservedFeatureTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.FeatureObserverPtr = blink.mojom.mojom.FeatureObserverRemote;
blink.mojom.mojom.FeatureObserverRequest = blink.mojom.mojom.FeatureObserverPendingReceiver;

