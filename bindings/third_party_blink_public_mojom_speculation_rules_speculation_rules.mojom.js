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
blink.mojom.SpeculationActionSpec = { $: mojo.internal.Enum() };

// Enum: SpeculationTargetHint
blink.mojom.SpeculationTargetHint = {
  kNoHint: 0,
  kBlank: 1,
  kSelf: 2,
};
blink.mojom.SpeculationTargetHintSpec = { $: mojo.internal.Enum() };

// Enum: SpeculationEagerness
blink.mojom.SpeculationEagerness = {
  kConservative: 0,
  kModerate: 1,
  kImmediate: 2,
  kEager: 3,
};
blink.mojom.SpeculationEagernessSpec = { $: mojo.internal.Enum() };

// Enum: SpeculationInjectionType
blink.mojom.SpeculationInjectionType = {
  kNone: 0,
  kMainWorldScript: 1,
  kIsolatedWorldScript: 2,
  kAutoSpeculationRules: 3,
};
blink.mojom.SpeculationInjectionTypeSpec = { $: mojo.internal.Enum() };

// Struct: SpeculationCandidate
blink.mojom.SpeculationCandidateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeculationCandidate',
      packedSize: 80,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SpeculationActionSpec, nullable: false, minVersion: 0 },
        { name: 'referrer', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ReferrerSpec, nullable: false, minVersion: 0 },
        { name: 'requires_anonymous_client_ip_when_cross_origin', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'target_browsing_context_name_hint', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.SpeculationTargetHintSpec, nullable: false, minVersion: 0 },
        { name: 'eagerness', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.SpeculationEagernessSpec, nullable: false, minVersion: 0 },
        { name: 'no_vary_search_hint', packedOffset: 48, packedBitOffset: 0, type: network.mojom.NoVarySearchSpec, nullable: true, minVersion: 0 },
        { name: 'injection_type', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.SpeculationInjectionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'tags', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'form_submission', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Interface: SpeculationHost
blink.mojom.SpeculationHost = {};

blink.mojom.SpeculationHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SpeculationHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SpeculationHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SpeculationHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.SpeculationHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SpeculationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateSpeculationCandidates(candidates, enable_cross_origin_prerender_iframes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SpeculationHost_UpdateSpeculationCandidates_ParamsSpec,
      null,
      [candidates, enable_cross_origin_prerender_iframes]);
  }

  onLCPPredicted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SpeculationHost_OnLCPPredicted_ParamsSpec,
      null,
      []);
  }

  initiatePreview(url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SpeculationHost_InitiatePreview_ParamsSpec,
      null,
      [url]);
  }

};

blink.mojom.SpeculationHost.getRemote = function() {
  let remote = new blink.mojom.SpeculationHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SpeculationHost',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateSpeculationCandidates
blink.mojom.SpeculationHost_UpdateSpeculationCandidates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeculationHost.UpdateSpeculationCandidates_Params',
      packedSize: 24,
      fields: [
        { name: 'candidates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SpeculationCandidateSpec, false), nullable: false, minVersion: 0 },
        { name: 'enable_cross_origin_prerender_iframes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnLCPPredicted
blink.mojom.SpeculationHost_OnLCPPredicted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeculationHost.OnLCPPredicted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for InitiatePreview
blink.mojom.SpeculationHost_InitiatePreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeculationHost.InitiatePreview_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.SpeculationHostPtr = blink.mojom.SpeculationHostRemote;
blink.mojom.SpeculationHostRequest = blink.mojom.SpeculationHostPendingReceiver;

