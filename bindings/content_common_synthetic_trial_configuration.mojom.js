// Auto-generated MojoJS binding
// Source: chromium_src/content/common/synthetic_trial_configuration.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Struct: SyntheticTrialGroup
content.mojom.SyntheticTrialGroup = class {
  constructor(values = {}) {
    this.group_name = values.group_name !== undefined ? values.group_name : "";
  }
};

// Interface: SyntheticTrialConfiguration
content.mojom.SyntheticTrialConfigurationPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.SyntheticTrialConfiguration';
  }

  addOrUpdateSyntheticTrialGroups(groups) {
    // Method: AddOrUpdateSyntheticTrialGroups
    // Call: AddOrUpdateSyntheticTrialGroups(groups)
  }

  removeSyntheticTrialGroups(groups) {
    // Method: RemoveSyntheticTrialGroups
    // Call: RemoveSyntheticTrialGroups(groups)
  }

};

content.mojom.SyntheticTrialConfigurationRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
