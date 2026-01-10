// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/feature_manager.mojom
// Module: chromecast.shell.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.shell.mojom = chromecast.shell.shell.mojom || {};


// Struct: Feature
chromecast.shell.shell.mojom.mojom.FeatureSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.Feature',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: FeatureManager
chromecast.shell.shell.mojom.mojom.FeatureManager = {};

chromecast.shell.shell.mojom.mojom.FeatureManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.shell.shell.mojom.mojom.FeatureManagerRemote = class {
  static get $interfaceName() {
    return 'chromecast.shell.mojom.FeatureManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.shell.shell.mojom.mojom.FeatureManagerPendingReceiver,
      handle);
    this.$ = new chromecast.shell.shell.mojom.mojom.FeatureManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.shell.shell.mojom.mojom.FeatureManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  configureFeatures(features) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.shell.shell.mojom.mojom.FeatureManager_ConfigureFeatures_ParamsSpec,
      null,
      [features]);
  }

};

chromecast.shell.shell.mojom.mojom.FeatureManager.getRemote = function() {
  let remote = new chromecast.shell.shell.mojom.mojom.FeatureManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.shell.mojom.FeatureManager',
    'context');
  return remote.$;
};

// ParamsSpec for ConfigureFeatures
chromecast.shell.shell.mojom.mojom.FeatureManager_ConfigureFeatures_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.FeatureManager.ConfigureFeatures_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromecast.shell.mojom.FeatureSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.shell.shell.mojom.mojom.FeatureManagerPtr = chromecast.shell.shell.mojom.mojom.FeatureManagerRemote;
chromecast.shell.shell.mojom.mojom.FeatureManagerRequest = chromecast.shell.shell.mojom.mojom.FeatureManagerPendingReceiver;

