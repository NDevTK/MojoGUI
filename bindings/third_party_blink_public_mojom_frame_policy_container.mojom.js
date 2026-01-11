// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/policy_container.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};

blink.mojom.PolicyContainerPoliciesSpec = { $: {} };
blink.mojom.PolicyContainerSpec = { $: {} };
blink.mojom.PolicyContainerBindParamsSpec = { $: {} };
blink.mojom.PolicyContainerHost = {};
blink.mojom.PolicyContainerHost.$interfaceName = 'blink.mojom.PolicyContainerHost';
blink.mojom.PolicyContainerHost_SetReferrerPolicy_ParamsSpec = { $: {} };
blink.mojom.PolicyContainerHost_AddContentSecurityPolicies_ParamsSpec = { $: {} };

// Struct: PolicyContainerPolicies
mojo.internal.Struct(
    blink.mojom.PolicyContainerPoliciesSpec, 'blink.mojom.PolicyContainerPolicies', [
      mojo.internal.StructField('connection_allowlists', 0, 0, network.mojom.ConnectionAllowlistsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cross_origin_embedder_policy', 8, 0, network.mojom.CrossOriginEmbedderPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('integrity_policy', 16, 0, network.mojom.IntegrityPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('integrity_policy_report_only', 24, 0, network.mojom.IntegrityPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_security_policies', 32, 0, mojo.internal.Array(network.mojom.ContentSecurityPolicySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_credentialless', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('can_navigate_top_without_user_gesture', 40, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('cross_origin_isolation_enabled_by_dip', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PolicyContainer
mojo.internal.Struct(
    blink.mojom.PolicyContainerSpec, 'blink.mojom.PolicyContainer', [
      mojo.internal.StructField('policies', 0, 0, blink.mojom.PolicyContainerPoliciesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PolicyContainerBindParams
mojo.internal.Struct(
    blink.mojom.PolicyContainerBindParamsSpec, 'blink.mojom.PolicyContainerBindParams', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PolicyContainerHost
mojo.internal.Struct(
    blink.mojom.PolicyContainerHost_SetReferrerPolicy_ParamsSpec, 'blink.mojom.PolicyContainerHost_SetReferrerPolicy_Params', [
      mojo.internal.StructField('referrer_policy', 0, 0, network.mojom.ReferrerPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PolicyContainerHost_AddContentSecurityPolicies_ParamsSpec, 'blink.mojom.PolicyContainerHost_AddContentSecurityPolicies_Params', [
      mojo.internal.StructField('content_security_policies', 0, 0, mojo.internal.Array(network.mojom.ContentSecurityPolicySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.PolicyContainerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PolicyContainerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PolicyContainerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PolicyContainerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.PolicyContainerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setReferrerPolicy(referrer_policy) {
    return this.$.setReferrerPolicy(referrer_policy);
  }
  addContentSecurityPolicies(content_security_policies) {
    return this.$.addContentSecurityPolicies(content_security_policies);
  }
};

blink.mojom.PolicyContainerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PolicyContainerHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setReferrerPolicy(referrer_policy) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.PolicyContainerHost_SetReferrerPolicy_ParamsSpec,
      null,
      [referrer_policy],
      false);
  }

  addContentSecurityPolicies(content_security_policies) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.PolicyContainerHost_AddContentSecurityPolicies_ParamsSpec,
      null,
      [content_security_policies],
      false);
  }

};

blink.mojom.PolicyContainerHost.getRemote = function() {
  let remote = new blink.mojom.PolicyContainerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PolicyContainerHost',
    'context');
  return remote.$;
};

blink.mojom.PolicyContainerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PolicyContainerHost', [
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
             decoder.decodeStructInline(blink.mojom.PolicyContainerHost_SetReferrerPolicy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PolicyContainerHost_AddContentSecurityPolicies_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PolicyContainerHost_SetReferrerPolicy_ParamsSpec.$.structSpec);
          const result = this.impl.setReferrerPolicy(params.referrer_policy);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PolicyContainerHost_AddContentSecurityPolicies_ParamsSpec.$.structSpec);
          const result = this.impl.addContentSecurityPolicies(params.content_security_policies);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.PolicyContainerHostReceiver = blink.mojom.PolicyContainerHostReceiver;

blink.mojom.PolicyContainerHostPtr = blink.mojom.PolicyContainerHostRemote;
blink.mojom.PolicyContainerHostRequest = blink.mojom.PolicyContainerHostPendingReceiver;

