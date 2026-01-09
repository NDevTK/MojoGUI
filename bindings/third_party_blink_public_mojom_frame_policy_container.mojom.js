// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/policy_container.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: PolicyContainerPolicies
blink.mojom.PolicyContainerPoliciesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PolicyContainerPolicies',
      packedSize: 56,
      fields: [
        { name: 'connection_allowlists', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cross_origin_embedder_policy', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'integrity_policy', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'integrity_policy_report_only', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'content_security_policies', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'is_credentialless', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'can_navigate_top_without_user_gesture', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'cross_origin_isolation_enabled_by_dip', packedOffset: 40, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PolicyContainer
blink.mojom.PolicyContainerSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PolicyContainer',
      packedSize: 24,
      fields: [
        { name: 'policies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PolicyContainerBindParams
blink.mojom.PolicyContainerBindParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PolicyContainerBindParams',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PolicyContainerHost
blink.mojom.PolicyContainerHost = {};

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
};

blink.mojom.PolicyContainerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setReferrerPolicy(referrer_policy) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PolicyContainerHost_SetReferrerPolicy_ParamsSpec,
      null,
      [referrer_policy]);
  }

  addContentSecurityPolicies(content_security_policies) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PolicyContainerHost_AddContentSecurityPolicies_ParamsSpec,
      null,
      [content_security_policies]);
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

// ParamsSpec for SetReferrerPolicy
blink.mojom.PolicyContainerHost_SetReferrerPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PolicyContainerHost.SetReferrerPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'referrer_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddContentSecurityPolicies
blink.mojom.PolicyContainerHost_AddContentSecurityPolicies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PolicyContainerHost.AddContentSecurityPolicies_Params',
      packedSize: 16,
      fields: [
        { name: 'content_security_policies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PolicyContainerHostPtr = blink.mojom.PolicyContainerHostRemote;
blink.mojom.PolicyContainerHostRequest = blink.mojom.PolicyContainerHostPendingReceiver;

