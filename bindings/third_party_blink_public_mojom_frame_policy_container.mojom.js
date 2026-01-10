// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/policy_container.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: PolicyContainerPolicies
blink.mojom.mojom.PolicyContainerPoliciesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PolicyContainerPolicies',
      packedSize: 56,
      fields: [
        { name: 'connection_allowlists', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ConnectionAllowlistsSpec, nullable: false, minVersion: 0 },
        { name: 'cross_origin_embedder_policy', packedOffset: 8, packedBitOffset: 0, type: network.mojom.CrossOriginEmbedderPolicySpec, nullable: false, minVersion: 0 },
        { name: 'integrity_policy', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IntegrityPolicySpec, nullable: false, minVersion: 0 },
        { name: 'integrity_policy_report_only', packedOffset: 24, packedBitOffset: 0, type: network.mojom.IntegrityPolicySpec, nullable: false, minVersion: 0 },
        { name: 'content_security_policies', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ContentSecurityPolicySpec, false), nullable: false, minVersion: 0 },
        { name: 'is_credentialless', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'can_navigate_top_without_user_gesture', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cross_origin_isolation_enabled_by_dip', packedOffset: 40, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: PolicyContainer
blink.mojom.mojom.PolicyContainerSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PolicyContainer',
      packedSize: 24,
      fields: [
        { name: 'policies', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PolicyContainerPoliciesSpec, nullable: false, minVersion: 0 },
        { name: 'remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PolicyContainerBindParams
blink.mojom.mojom.PolicyContainerBindParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PolicyContainerBindParams',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: PolicyContainerHost
blink.mojom.mojom.PolicyContainerHost = {};

blink.mojom.mojom.PolicyContainerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.PolicyContainerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PolicyContainerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.PolicyContainerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.PolicyContainerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.PolicyContainerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setReferrerPolicy(referrer_policy) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.PolicyContainerHost_SetReferrerPolicy_ParamsSpec,
      null,
      [referrer_policy]);
  }

  addContentSecurityPolicies(content_security_policies) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.PolicyContainerHost_AddContentSecurityPolicies_ParamsSpec,
      null,
      [content_security_policies]);
  }

};

blink.mojom.mojom.PolicyContainerHost.getRemote = function() {
  let remote = new blink.mojom.mojom.PolicyContainerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PolicyContainerHost',
    'context');
  return remote.$;
};

// ParamsSpec for SetReferrerPolicy
blink.mojom.mojom.PolicyContainerHost_SetReferrerPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PolicyContainerHost.SetReferrerPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'referrer_policy', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ReferrerPolicySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddContentSecurityPolicies
blink.mojom.mojom.PolicyContainerHost_AddContentSecurityPolicies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PolicyContainerHost.AddContentSecurityPolicies_Params',
      packedSize: 16,
      fields: [
        { name: 'content_security_policies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ContentSecurityPolicySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.PolicyContainerHostPtr = blink.mojom.mojom.PolicyContainerHostRemote;
blink.mojom.mojom.PolicyContainerHostRequest = blink.mojom.mojom.PolicyContainerHostPendingReceiver;

