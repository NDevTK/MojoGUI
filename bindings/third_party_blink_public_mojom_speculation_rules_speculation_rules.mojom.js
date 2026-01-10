// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/speculation_rules/speculation_rules.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var blink = blink || {};
var url = url || {};

blink.mojom.SpeculationActionSpec = { $: mojo.internal.Enum() };
blink.mojom.SpeculationTargetHintSpec = { $: mojo.internal.Enum() };
blink.mojom.SpeculationEagernessSpec = { $: mojo.internal.Enum() };
blink.mojom.SpeculationInjectionTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.SpeculationCandidateSpec = { $: {} };
blink.mojom.SpeculationHost = {};
blink.mojom.SpeculationHost.$interfaceName = 'blink.mojom.SpeculationHost';
blink.mojom.SpeculationHost_UpdateSpeculationCandidates_ParamsSpec = { $: {} };
blink.mojom.SpeculationHost_OnLCPPredicted_ParamsSpec = { $: {} };
blink.mojom.SpeculationHost_InitiatePreview_ParamsSpec = { $: {} };

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
  kMainWorldScript: 1,
  kIsolatedWorldScript: 2,
  kAutoSpeculationRules: 3,
};

// Struct: SpeculationCandidate
mojo.internal.Struct(
    blink.mojom.SpeculationCandidateSpec, 'blink.mojom.SpeculationCandidate', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action', 8, 0, blink.mojom.SpeculationActionSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('referrer', 16, 0, blink.mojom.ReferrerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('requires_anonymous_client_ip_when_cross_origin', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('target_browsing_context_name_hint', 32, 0, blink.mojom.SpeculationTargetHintSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('eagerness', 40, 0, blink.mojom.SpeculationEagernessSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('no_vary_search_hint', 48, 0, network.mojom.NoVarySearchSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('injection_type', 56, 0, blink.mojom.SpeculationInjectionTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('tags', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('form_submission', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Interface: SpeculationHost
mojo.internal.Struct(
    blink.mojom.SpeculationHost_UpdateSpeculationCandidates_ParamsSpec, 'blink.mojom.SpeculationHost_UpdateSpeculationCandidates_Params', [
      mojo.internal.StructField('candidates', 0, 0, mojo.internal.Array(blink.mojom.SpeculationCandidateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('enable_cross_origin_prerender_iframes', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SpeculationHost_OnLCPPredicted_ParamsSpec, 'blink.mojom.SpeculationHost_OnLCPPredicted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SpeculationHost_InitiatePreview_ParamsSpec, 'blink.mojom.SpeculationHost_InitiatePreview_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [candidates, enable_cross_origin_prerender_iframes],
      false);
  }

  onLCPPredicted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SpeculationHost_OnLCPPredicted_ParamsSpec,
      null,
      [],
      false);
  }

  initiatePreview(url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SpeculationHost_InitiatePreview_ParamsSpec,
      null,
      [url],
      false);
  }

};

blink.mojom.SpeculationHost.getRemote = function() {
  let remote = new blink.mojom.SpeculationHostRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.SpeculationHost',
    'context');
  return remote.$;
};

blink.mojom.SpeculationHostPtr = blink.mojom.SpeculationHostRemote;
blink.mojom.SpeculationHostRequest = blink.mojom.SpeculationHostPendingReceiver;

