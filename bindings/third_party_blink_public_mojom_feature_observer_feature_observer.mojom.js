// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/feature_observer/feature_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ObservedFeatureType
blink.mojom.ObservedFeatureType = {
  kWebLock: 0,
  kBlockingIndexedDBLock: 1,
};
blink.mojom.ObservedFeatureTypeSpec = { $: mojo.internal.Enum() };

// Interface: ObservedFeature
blink.mojom.ObservedFeature = {};

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

// Legacy compatibility
blink.mojom.ObservedFeaturePtr = blink.mojom.ObservedFeatureRemote;
blink.mojom.ObservedFeatureRequest = blink.mojom.ObservedFeaturePendingReceiver;


// Interface: FeatureObserver
blink.mojom.FeatureObserver = {};

blink.mojom.FeatureObserver_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FeatureObserver_Register_Params',
      packedSize: 24,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.ObservedFeatureRemote), nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ObservedFeatureTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [feature, type]);
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

// ParamsSpec for Register
blink.mojom.FeatureObserver_Register_ParamsSpec = {
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
blink.mojom.FeatureObserverPtr = blink.mojom.FeatureObserverRemote;
blink.mojom.FeatureObserverRequest = blink.mojom.FeatureObserverPendingReceiver;

