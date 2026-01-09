// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/policy_container.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: PolicyContainerPolicies
blink.mojom.PolicyContainerPolicies = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : 0;
  }
};

// Struct: PolicyContainer
blink.mojom.PolicyContainer = class {
  constructor(values = {}) {
    this.policies = values.policies !== undefined ? values.policies : null;
    this.remote = values.remote !== undefined ? values.remote : null;
  }
};

// Struct: PolicyContainerBindParams
blink.mojom.PolicyContainerBindParams = class {
  constructor(values = {}) {
    this.receiver = values.receiver !== undefined ? values.receiver : null;
  }
};

// Interface: PolicyContainerHost
blink.mojom.PolicyContainerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PolicyContainerHost';
  }

  setReferrerPolicy(referrer_policy) {
    // Method: SetReferrerPolicy
    // Call: SetReferrerPolicy(referrer_policy)
  }

  addContentSecurityPolicies(content_security_policies) {
    // Method: AddContentSecurityPolicies
    // Call: AddContentSecurityPolicies(content_security_policies)
  }

};

blink.mojom.PolicyContainerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
