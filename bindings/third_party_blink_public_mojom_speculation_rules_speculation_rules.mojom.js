// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/speculation_rules/speculation_rules.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SpeculationAction
blink.mojom.SpeculationAction = {
  kPrefetch: 0,
  kPrerenderUntilScript: 1,
  kPrerender: 2,
};

// Enum: SpeculationTargetHint
blink.mojom.SpeculationTargetHint = {
  kNoHint: 0,
  kBlank: 1,
  kSelf: 2,
};

// Enum: SpeculationEagerness
blink.mojom.SpeculationEagerness = {
  kConservative: 0,
  kModerate: 1,
  kImmediate: 2,
  kEager: 3,
};

// Enum: SpeculationInjectionType
blink.mojom.SpeculationInjectionType = {
  kNone: 0,
  i: 1,
  statically: 2,
};

// Struct: SpeculationCandidate
blink.mojom.SpeculationCandidate = class {
  constructor(values = {}) {
    this.referrer = values.referrer !== undefined ? values.referrer : null;
    this.be = values.be !== undefined ? values.be : null;
    this.kNone = values.kNone !== undefined ? values.kNone : 0;
    this.rules = values.rules !== undefined ? values.rules : null;
    this.tags = values.tags !== undefined ? values.tags : "";
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Interface: SpeculationHost
blink.mojom.SpeculationHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SpeculationHost';
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  updateSpeculationCandidates(candidates, enable_cross_origin_prerender_iframes) {
    // Method: UpdateSpeculationCandidates
    // Call: UpdateSpeculationCandidates(candidates, enable_cross_origin_prerender_iframes)
  }

  onLCPPredicted() {
    // Method: OnLCPPredicted
    // Call: OnLCPPredicted()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  initiatePreview(url) {
    // Method: InitiatePreview
    // Call: InitiatePreview(url)
  }

};

blink.mojom.SpeculationHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
