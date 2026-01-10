// Auto-generated MojoJS binding
// Source: chromium_src/content/common/synthetic_trial_configuration.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Struct: SyntheticTrialGroup
content.mojom.SyntheticTrialGroupSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticTrialGroup',
      packedSize: 24,
      fields: [
        { name: 'trial_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'group_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: SyntheticTrialConfiguration
content.mojom.SyntheticTrialConfiguration = {};

content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_Params',
      packedSize: 16,
      fields: [
        { name: 'groups', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(content.mojom.SyntheticTrialGroupSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_Params',
      packedSize: 16,
      fields: [
        { name: 'groups', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(content.mojom.SyntheticTrialGroupSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [groups]);
  }

  removeSyntheticTrialGroups(groups) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_ParamsSpec,
      null,
      [groups]);
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

// ParamsSpec for AddOrUpdateSyntheticTrialGroups
content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticTrialConfiguration.AddOrUpdateSyntheticTrialGroups_Params',
      packedSize: 16,
      fields: [
        { name: 'groups', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(content.mojom.SyntheticTrialGroupSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemoveSyntheticTrialGroups
content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SyntheticTrialConfiguration.RemoveSyntheticTrialGroups_Params',
      packedSize: 16,
      fields: [
        { name: 'groups', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(content.mojom.SyntheticTrialGroupSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.SyntheticTrialConfigurationPtr = content.mojom.SyntheticTrialConfigurationRemote;
content.mojom.SyntheticTrialConfigurationRequest = content.mojom.SyntheticTrialConfigurationPendingReceiver;

