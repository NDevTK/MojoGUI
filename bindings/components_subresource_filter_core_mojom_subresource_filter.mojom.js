// Auto-generated MojoJS binding
// Source: chromium_src/components/subresource_filter/core/mojom/subresource_filter.mojom
// Module: subresource_filter.mojom

'use strict';

// Module namespace
var subresource_filter = subresource_filter || {};
subresource_filter.mojom = subresource_filter.mojom || {};


// Enum: ActivationLevel
subresource_filter.mojom.ActivationLevel = {
};

// Enum: AdsViolation
subresource_filter.mojom.AdsViolation = {
};

// Enum: SubresourceFilterDisabledReason
subresource_filter.mojom.SubresourceFilterDisabledReason = {
};

// Struct: ActivationState
subresource_filter.mojom.ActivationState = class {
  constructor(values = {}) {
    this.document = values.document !== undefined ? values.document : null;
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: DocumentLoadStatistics
subresource_filter.mojom.DocumentLoadStatistics = class {
  constructor(values = {}) {
    this.disallowed = values.disallowed !== undefined ? values.disallowed : null;
    this.evaluation_total_cpu_duration = values.evaluation_total_cpu_duration !== undefined ? values.evaluation_total_cpu_duration : 0;
  }
};

// Interface: SubresourceFilterRulesetObserver
subresource_filter.mojom.SubresourceFilterRulesetObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'subresource_filter.mojom.SubresourceFilterRulesetObserver';
  }

  setRulesetForProcess(ruleset_file) {
    // Method: SetRulesetForProcess
    // Call: SetRulesetForProcess(ruleset_file)
  }

};

subresource_filter.mojom.SubresourceFilterRulesetObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
