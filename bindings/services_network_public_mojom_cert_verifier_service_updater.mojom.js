// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cert_verifier_service_updater.mojom
// Module: cert_verifier.mojom

'use strict';

// Module namespace
var cert_verifier = cert_verifier || {};
cert_verifier.mojom = cert_verifier.mojom || {};


// Struct: CIDR
cert_verifier.mojom.CIDRSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CIDR',
      packedSize: 24,
      fields: [
        { name: 'ip', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false },
        { name: 'mask', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CertWithConstraints
cert_verifier.mojom.CertWithConstraintsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertWithConstraints',
      packedSize: 32,
      fields: [
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'permitted_dns_names', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'permitted_cidrs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AdditionalCertificates
cert_verifier.mojom.AdditionalCertificatesSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.AdditionalCertificates',
      packedSize: 72,
      fields: [
        { name: 'all_certificates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'trust_anchors', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'trust_anchors_with_enforced_constraints', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'trust_anchors_with_additional_constraints', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'trust_anchors_and_leafs', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'trust_leafs', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'distrusted_spkis', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'include_system_trust_store', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: CertVerifierServiceUpdater
cert_verifier.mojom.CertVerifierServiceUpdater = {};

cert_verifier.mojom.CertVerifierServiceUpdaterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cert_verifier.mojom.CertVerifierServiceUpdaterRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.CertVerifierServiceUpdater';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cert_verifier.mojom.CertVerifierServiceUpdaterPendingReceiver,
      handle);
    this.$ = new cert_verifier.mojom.CertVerifierServiceUpdaterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cert_verifier.mojom.CertVerifierServiceUpdaterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateAdditionalCertificates(certificates) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cert_verifier.mojom.CertVerifierServiceUpdater_UpdateAdditionalCertificates_ParamsSpec,
      null,
      [certificates]);
  }

  waitUntilNextUpdateForTesting() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ParamsSpec,
      null,
      []);
  }

  setCTPolicy(ct_policy) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cert_verifier.mojom.CertVerifierServiceUpdater_SetCTPolicy_ParamsSpec,
      null,
      [ct_policy]);
  }

};

cert_verifier.mojom.CertVerifierServiceUpdater.getRemote = function() {
  let remote = new cert_verifier.mojom.CertVerifierServiceUpdaterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.CertVerifierServiceUpdater',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateAdditionalCertificates
cert_verifier.mojom.CertVerifierServiceUpdater_UpdateAdditionalCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceUpdater.UpdateAdditionalCertificates_Params',
      packedSize: 16,
      fields: [
        { name: 'certificates', packedOffset: 0, packedBitOffset: 0, type: cert_verifier.mojom.AdditionalCertificatesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WaitUntilNextUpdateForTesting
cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceUpdater.WaitUntilNextUpdateForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCTPolicy
cert_verifier.mojom.CertVerifierServiceUpdater_SetCTPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceUpdater.SetCTPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'ct_policy', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CTPolicySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
cert_verifier.mojom.CertVerifierServiceUpdaterPtr = cert_verifier.mojom.CertVerifierServiceUpdaterRemote;
cert_verifier.mojom.CertVerifierServiceUpdaterRequest = cert_verifier.mojom.CertVerifierServiceUpdaterPendingReceiver;

