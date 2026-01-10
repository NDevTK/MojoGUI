// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/feature_update.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.FeatureUpdateObserver = {};
chromecast.mojom.FeatureUpdateObserver.$interfaceName = 'chromecast.mojom.FeatureUpdateObserver';
chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec = { $: {} };
chromecast.mojom.FeatureUpdateService = {};
chromecast.mojom.FeatureUpdateService.$interfaceName = 'chromecast.mojom.FeatureUpdateService';
chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec = { $: {} };

// Interface: FeatureUpdateObserver
mojo.internal.Struct(
    chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec, 'chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_Params', [
      mojo.internal.StructField('features', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [features],
      false);
  }

};

chromecast.mojom.FeatureUpdateObserver.getRemote = function() {
  let remote = new chromecast.mojom.FeatureUpdateObserverRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chromecast.mojom.FeatureUpdateObserver',
    'context');
  return remote.$;
};

chromecast.mojom.FeatureUpdateObserverPtr = chromecast.mojom.FeatureUpdateObserverRemote;
chromecast.mojom.FeatureUpdateObserverRequest = chromecast.mojom.FeatureUpdateObserverPendingReceiver;


// Interface: FeatureUpdateService
mojo.internal.Struct(
    chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec, 'chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.FeatureUpdateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [observer],
      false);
  }

};

chromecast.mojom.FeatureUpdateService.getRemote = function() {
  let remote = new chromecast.mojom.FeatureUpdateServiceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chromecast.mojom.FeatureUpdateService',
    'context');
  return remote.$;
};

chromecast.mojom.FeatureUpdateServicePtr = chromecast.mojom.FeatureUpdateServiceRemote;
chromecast.mojom.FeatureUpdateServiceRequest = chromecast.mojom.FeatureUpdateServicePendingReceiver;

