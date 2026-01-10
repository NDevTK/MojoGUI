// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/feature_manager.mojom
// Module: chromecast.shell.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.mojom = chromecast.shell.mojom || {};

chromecast.shell.mojom.FeatureSpec = { $: {} };
chromecast.shell.mojom.FeatureManager = {};
chromecast.shell.mojom.FeatureManager.$interfaceName = 'chromecast.shell.mojom.FeatureManager';
chromecast.shell.mojom.FeatureManager_ConfigureFeatures_ParamsSpec = { $: {} };

// Struct: Feature
mojo.internal.Struct(
    chromecast.shell.mojom.FeatureSpec, 'chromecast.shell.mojom.Feature', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('config', 8, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FeatureManager
mojo.internal.Struct(
    chromecast.shell.mojom.FeatureManager_ConfigureFeatures_ParamsSpec, 'chromecast.shell.mojom.FeatureManager_ConfigureFeatures_Params', [
      mojo.internal.StructField('features', 0, 0, mojo.internal.Array(chromecast.shell.mojom.FeatureSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [features],
      false);
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

chromecast.shell.mojom.FeatureManagerPtr = chromecast.shell.mojom.FeatureManagerRemote;
chromecast.shell.mojom.FeatureManagerRequest = chromecast.shell.mojom.FeatureManagerPendingReceiver;

