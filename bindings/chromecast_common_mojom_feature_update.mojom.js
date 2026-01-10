// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/feature_update.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: FeatureUpdateObserver
chromecast.mojom.mojom.FeatureUpdateObserver = {};

chromecast.mojom.mojom.FeatureUpdateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.FeatureUpdateObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.FeatureUpdateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.FeatureUpdateObserverPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.FeatureUpdateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.FeatureUpdateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFeaturesUpdated(features) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec,
      null,
      [features]);
  }

};

chromecast.mojom.mojom.FeatureUpdateObserver.getRemote = function() {
  let remote = new chromecast.mojom.mojom.FeatureUpdateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.FeatureUpdateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnFeaturesUpdated
chromecast.mojom.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.FeatureUpdateObserver.OnFeaturesUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.FeatureUpdateObserverPtr = chromecast.mojom.mojom.FeatureUpdateObserverRemote;
chromecast.mojom.mojom.FeatureUpdateObserverRequest = chromecast.mojom.mojom.FeatureUpdateObserverPendingReceiver;


// Interface: FeatureUpdateService
chromecast.mojom.mojom.FeatureUpdateService = {};

chromecast.mojom.mojom.FeatureUpdateServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.FeatureUpdateServiceRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.FeatureUpdateService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.FeatureUpdateServicePendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.FeatureUpdateServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.FeatureUpdateServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerFeatureUpdateObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec,
      null,
      [observer]);
  }

};

chromecast.mojom.mojom.FeatureUpdateService.getRemote = function() {
  let remote = new chromecast.mojom.mojom.FeatureUpdateServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.FeatureUpdateService',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterFeatureUpdateObserver
chromecast.mojom.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.FeatureUpdateService.RegisterFeatureUpdateObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromecast.mojom.FeatureUpdateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.FeatureUpdateServicePtr = chromecast.mojom.mojom.FeatureUpdateServiceRemote;
chromecast.mojom.mojom.FeatureUpdateServiceRequest = chromecast.mojom.mojom.FeatureUpdateServicePendingReceiver;

