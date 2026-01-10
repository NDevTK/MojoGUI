// Auto-generated MojoJS binding
// Source: chromium_src/content/common/synthetic_trial_configuration.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.SyntheticTrialGroupSpec = { $: {} };
content.mojom.SyntheticTrialConfiguration = {};
content.mojom.SyntheticTrialConfiguration.$interfaceName = 'content.mojom.SyntheticTrialConfiguration';
content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_ParamsSpec = { $: {} };
content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_ParamsSpec = { $: {} };

// Struct: SyntheticTrialGroup
mojo.internal.Struct(
    content.mojom.SyntheticTrialGroupSpec, 'content.mojom.SyntheticTrialGroup', [
      mojo.internal.StructField('trial_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SyntheticTrialConfiguration
mojo.internal.Struct(
    content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_ParamsSpec, 'content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_Params', [
      mojo.internal.StructField('groups', 0, 0, mojo.internal.Array(content.mojom.SyntheticTrialGroupSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_ParamsSpec, 'content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_Params', [
      mojo.internal.StructField('groups', 0, 0, mojo.internal.Array(content.mojom.SyntheticTrialGroupSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.SyntheticTrialConfigurationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.SyntheticTrialConfigurationRemote = class {
  static get $interfaceName() {
    return 'content.mojom.SyntheticTrialConfiguration';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.SyntheticTrialConfigurationPendingReceiver,
      handle);
    this.$ = new content.mojom.SyntheticTrialConfigurationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.SyntheticTrialConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addOrUpdateSyntheticTrialGroups(groups) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_ParamsSpec,
      null,
      [groups],
      false);
  }

  removeSyntheticTrialGroups(groups) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_ParamsSpec,
      null,
      [groups],
      false);
  }

};

content.mojom.SyntheticTrialConfiguration.getRemote = function() {
  let remote = new content.mojom.SyntheticTrialConfigurationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.SyntheticTrialConfiguration',
    'context');
  return remote.$;
};

content.mojom.SyntheticTrialConfigurationPtr = content.mojom.SyntheticTrialConfigurationRemote;
content.mojom.SyntheticTrialConfigurationRequest = content.mojom.SyntheticTrialConfigurationPendingReceiver;

