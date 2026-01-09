// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/feature_manager.mojom
// Module: chromecast.shell.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.mojom = chromecast.shell.mojom || {};


// Struct: Feature
chromecast.shell.mojom.FeatureSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.Feature',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: FeatureManager
chromecast.shell.mojom.FeatureManager = {};

chromecast.shell.mojom.FeatureManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.shell.mojom.FeatureManagerRemote = class {
  static get $interfaceName() {
    return 'chromecast.shell.mojom.FeatureManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.shell.mojom.FeatureManagerPendingReceiver,
      handle);
    this.$ = new chromecast.shell.mojom.FeatureManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.shell.mojom.FeatureManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  configureFeatures(features) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.shell.mojom.FeatureManager_ConfigureFeatures_ParamsSpec,
      null,
      [features]);
  }

};

chromecast.shell.mojom.FeatureManager.getRemote = function() {
  let remote = new chromecast.shell.mojom.FeatureManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.shell.mojom.FeatureManager',
    'context');
  return remote.$;
};

// ParamsSpec for ConfigureFeatures
chromecast.shell.mojom.FeatureManager_ConfigureFeatures_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.shell.mojom.FeatureManager.ConfigureFeatures_Params',
      packedSize: 16,
      fields: [
        { name: 'features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.shell.mojom.FeatureManagerPtr = chromecast.shell.mojom.FeatureManagerRemote;
chromecast.shell.mojom.FeatureManagerRequest = chromecast.shell.mojom.FeatureManagerPendingReceiver;

