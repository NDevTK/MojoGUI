// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/speculation_rules/speculation_rules.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};
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
      mojo.internal.StructField('target_browsing_context_name_hint', 24, 0, blink.mojom.SpeculationTargetHintSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('eagerness', 32, 0, blink.mojom.SpeculationEagernessSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('no_vary_search_hint', 40, 0, network.mojom.NoVarySearchSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('injection_type', 48, 0, blink.mojom.SpeculationInjectionTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('tags', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('requires_anonymous_client_ip_when_cross_origin', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('form_submission', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SpeculationHost',
    'context');
  return remote.$;
};

blink.mojom.SpeculationHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.SpeculationHost_UpdateSpeculationCandidates_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.updateSpeculationCandidates');
          const result = this.impl.updateSpeculationCandidates(params.candidates, params.enable_cross_origin_prerender_iframes);
          break;
        }
        case 1: {
          const params = blink.mojom.SpeculationHost_OnLCPPredicted_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onLCPPredicted');
          const result = this.impl.onLCPPredicted();
          break;
        }
        case 2: {
          const params = blink.mojom.SpeculationHost_InitiatePreview_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.initiatePreview');
          const result = this.impl.initiatePreview(params.url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.SpeculationHostReceiver = blink.mojom.SpeculationHostReceiver;

blink.mojom.SpeculationHostPtr = blink.mojom.SpeculationHostRemote;
blink.mojom.SpeculationHostRequest = blink.mojom.SpeculationHostPendingReceiver;

