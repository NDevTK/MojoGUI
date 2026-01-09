// Auto-generated MojoJS binding
// Source: chromium_src/components/optimization_guide/public/mojom/model_broker.mojom
// Module: optimization_guide.mojom

'use strict';

// Module namespace
var optimization_guide = optimization_guide || {};
optimization_guide.mojom = optimization_guide.mojom || {};


// Enum: OnDeviceFeature
optimization_guide.mojom.OnDeviceFeature = {
};

// Enum: ModelUnavailableReason
optimization_guide.mojom.ModelUnavailableReason = {
};

// Struct: ModelSolutionConfig
optimization_guide.mojom.ModelSolutionConfig = class {
  constructor(values = {}) {
    this.max_tokens = values.max_tokens !== undefined ? values.max_tokens : 0;
  }
};

// Struct: ModelSubscriptionOptions
optimization_guide.mojom.ModelSubscriptionOptions = class {
  constructor(values = {}) {
    this.mark_used = values.mark_used !== undefined ? values.mark_used : false;
  }
};

// Interface: ModelSolution
optimization_guide.mojom.ModelSolutionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'optimization_guide.mojom.ModelSolution';
  }

  createSession(session, params) {
    // Method: CreateSession
    // Call: CreateSession(session, params)
  }

  createTextSafetySession(session) {
    // Method: CreateTextSafetySession
    // Call: CreateTextSafetySession(session)
  }

  reportHealthyCompletion() {
    // Method: ReportHealthyCompletion
    // Call: ReportHealthyCompletion()
  }

};

optimization_guide.mojom.ModelSolutionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ModelSubscriber
optimization_guide.mojom.ModelSubscriberPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'optimization_guide.mojom.ModelSubscriber';
  }

  unavailable(reason) {
    // Method: Unavailable
    // Call: Unavailable(reason)
  }

  available(config, solution) {
    // Method: Available
    // Call: Available(config, solution)
  }

};

optimization_guide.mojom.ModelSubscriberRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ModelBroker
optimization_guide.mojom.ModelBrokerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'optimization_guide.mojom.ModelBroker';
  }

  subscribe(options, subcriber) {
    // Method: Subscribe
    // Call: Subscribe(options, subcriber)
  }

};

optimization_guide.mojom.ModelBrokerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
