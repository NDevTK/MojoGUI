// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/speculation_rules/speculation_rules.mojom
// Module: blink.mojom

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
  updateSpeculationCandidates(candidates, enable_cross_origin_prerender_iframes) {
    return this.$.updateSpeculationCandidates(candidates, enable_cross_origin_prerender_iframes);
  }
  onLCPPredicted() {
    return this.$.onLCPPredicted();
  }
  initiatePreview(url) {
    return this.$.initiatePreview(url);
  }
};

blink.mojom.SpeculationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeculationHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateSpeculationCandidates(candidates, enable_cross_origin_prerender_iframes) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SpeculationHost_UpdateSpeculationCandidates_ParamsSpec,
      null,
      [candidates, enable_cross_origin_prerender_iframes],
      false);
  }

  onLCPPredicted() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.SpeculationHost_OnLCPPredicted_ParamsSpec,
      null,
      [],
      false);
  }

  initiatePreview(url) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeculationHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeculationHost_UpdateSpeculationCandidates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeculationHost_OnLCPPredicted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeculationHost_InitiatePreview_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeculationHost_UpdateSpeculationCandidates_ParamsSpec.$.structSpec);
          const result = this.impl.updateSpeculationCandidates(params.candidates, params.enable_cross_origin_prerender_iframes);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeculationHost_OnLCPPredicted_ParamsSpec.$.structSpec);
          const result = this.impl.onLCPPredicted();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeculationHost_InitiatePreview_ParamsSpec.$.structSpec);
          const result = this.impl.initiatePreview(params.url);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.SpeculationHostReceiver = blink.mojom.SpeculationHostReceiver;

blink.mojom.SpeculationHostPtr = blink.mojom.SpeculationHostRemote;
blink.mojom.SpeculationHostRequest = blink.mojom.SpeculationHostPendingReceiver;

