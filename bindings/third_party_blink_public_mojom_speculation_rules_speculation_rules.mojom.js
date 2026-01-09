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
  kMainWorldScript: 1,
  kIsolatedWorldScript: 2,
  kAutoSpeculationRules: 3,
};

// Interface: SpeculationHost
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
      blink.mojom.SpeculationHost_UpdateSpeculationCandidates_ParamsSpec.$,
      null,
      [candidates, enable_cross_origin_prerender_iframes]);
  }

  onLCPPredicted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SpeculationHost_OnLCPPredicted_ParamsSpec.$,
      null,
      []);
  }

  initiatePreview(url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SpeculationHost_InitiatePreview_ParamsSpec.$,
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
        { name: 'candidates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'enable_cross_origin_prerender_iframes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SpeculationHostPtr = blink.mojom.SpeculationHostRemote;
blink.mojom.SpeculationHostRequest = blink.mojom.SpeculationHostPendingReceiver;

