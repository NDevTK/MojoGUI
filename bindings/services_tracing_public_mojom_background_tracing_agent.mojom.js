// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/background_tracing_agent.mojom
// Module: tracing.mojom

'use strict';

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};


// Struct: BackgroundTracingRule
tracing.mojom.BackgroundTracingRule = class {
  constructor(values = {}) {
    this.rule_id = values.rule_id !== undefined ? values.rule_id : "";
  }
};

// Interface: BackgroundTracingAgentClient
tracing.mojom.BackgroundTracingAgentClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tracing.mojom.BackgroundTracingAgentClient';
  }

  onInitialized() {
    // Method: OnInitialized
    // Call: OnInitialized()
  }

  setUMACallback() {
    // Method: SetUMACallback
    // Call: SetUMACallback()
  }

  onTriggerBackgroundTrace(rule, histogram_value, flow_id) {
    // Method: OnTriggerBackgroundTrace
    // Call: OnTriggerBackgroundTrace(rule, histogram_value, flow_id)
  }

};

tracing.mojom.BackgroundTracingAgentClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BackgroundTracingAgent
tracing.mojom.BackgroundTracingAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tracing.mojom.BackgroundTracingAgent';
  }

  setUMACallback(rule, histogram_name, histogram_lower_value, histogram_upper_value) {
    // Method: SetUMACallback
    // Call: SetUMACallback(rule, histogram_name, histogram_lower_value, histogram_upper_value)
  }

  clearUMACallback(rule) {
    // Method: ClearUMACallback
    // Call: ClearUMACallback(rule)
  }

};

tracing.mojom.BackgroundTracingAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BackgroundTracingAgentProvider
tracing.mojom.BackgroundTracingAgentProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tracing.mojom.BackgroundTracingAgentProvider';
  }

  create(tracing_process_id, client, agent) {
    // Method: Create
    // Call: Create(tracing_process_id, client, agent)
  }

};

tracing.mojom.BackgroundTracingAgentProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
