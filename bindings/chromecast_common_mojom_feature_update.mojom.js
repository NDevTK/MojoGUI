// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/feature_update.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: FeatureUpdateObserver
chromecast.mojom.FeatureUpdateObserver = {};

chromecast.mojom.FeatureUpdateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.FeatureUpdateObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.FeatureUpdateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.FeatureUpdateObserverPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.FeatureUpdateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.FeatureUpdateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFeaturesUpdated(features) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec,
      null,
      null,
      [features],
      undefined,
      undefined
    );
  }

};

chromecast.mojom.FeatureUpdateObserver.getRemote = function() {
  let remote = new chromecast.mojom.FeatureUpdateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.FeatureUpdateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnFeaturesUpdated
chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.FeatureUpdateObserver.OnFeaturesUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.FeatureUpdateObserverPtr = chromecast.mojom.FeatureUpdateObserverRemote;
chromecast.mojom.FeatureUpdateObserverRequest = chromecast.mojom.FeatureUpdateObserverPendingReceiver;


// Interface: FeatureUpdateService
chromecast.mojom.FeatureUpdateService = {};

chromecast.mojom.FeatureUpdateServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.FeatureUpdateServiceRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.FeatureUpdateService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.FeatureUpdateServicePendingReceiver,
      handle);
    this.$ = new chromecast.mojom.FeatureUpdateServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.FeatureUpdateServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerFeatureUpdateObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec,
      null,
      null,
      [observer],
      undefined,
      undefined
    );
  }

};

chromecast.mojom.FeatureUpdateService.getRemote = function() {
  let remote = new chromecast.mojom.FeatureUpdateServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.FeatureUpdateService',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterFeatureUpdateObserver
chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.FeatureUpdateService.RegisterFeatureUpdateObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.FeatureUpdateServicePtr = chromecast.mojom.FeatureUpdateServiceRemote;
chromecast.mojom.FeatureUpdateServiceRequest = chromecast.mojom.FeatureUpdateServicePendingReceiver;

