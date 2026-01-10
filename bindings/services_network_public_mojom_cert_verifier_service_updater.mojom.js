// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cert_verifier_service_updater.mojom
// Module: cert_verifier.mojom

'use strict';

// Module namespace
var cert_verifier = cert_verifier || {};
cert_verifier.mojom = cert_verifier.mojom || {};
var network = network || {};

cert_verifier.mojom.CIDRSpec = { $: {} };
cert_verifier.mojom.CertWithConstraintsSpec = { $: {} };
cert_verifier.mojom.AdditionalCertificatesSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceUpdater = {};
cert_verifier.mojom.CertVerifierServiceUpdater.$interfaceName = 'cert_verifier.mojom.CertVerifierServiceUpdater';
cert_verifier.mojom.CertVerifierServiceUpdater_UpdateAdditionalCertificates_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceUpdater_SetCTPolicy_ParamsSpec = { $: {} };

// Struct: CIDR
mojo.internal.Struct(
    cert_verifier.mojom.CIDRSpec, 'cert_verifier.mojom.CIDR', [
      mojo.internal.StructField('ip', 0, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mask', 8, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CertWithConstraints
mojo.internal.Struct(
    cert_verifier.mojom.CertWithConstraintsSpec, 'cert_verifier.mojom.CertWithConstraints', [
      mojo.internal.StructField('certificate', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('permitted_dns_names', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('permitted_cidrs', 16, 0, mojo.internal.Array(cert_verifier.mojom.CIDRSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AdditionalCertificates
mojo.internal.Struct(
    cert_verifier.mojom.AdditionalCertificatesSpec, 'cert_verifier.mojom.AdditionalCertificates', [
      mojo.internal.StructField('all_certificates', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('trust_anchors', 8, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('trust_anchors_with_enforced_constraints', 16, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('trust_anchors_with_additional_constraints', 24, 0, mojo.internal.Array(cert_verifier.mojom.CertWithConstraintsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('trust_anchors_and_leafs', 32, 0, mojo.internal.Array(cert_verifier.mojom.CertWithConstraintsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('trust_leafs', 40, 0, mojo.internal.Array(cert_verifier.mojom.CertWithConstraintsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('distrusted_spkis', 48, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('include_system_trust_store', 56, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: CertVerifierServiceUpdater
mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceUpdater_UpdateAdditionalCertificates_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceUpdater_UpdateAdditionalCertificates_Params', [
      mojo.internal.StructField('certificates', 0, 0, cert_verifier.mojom.AdditionalCertificatesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceUpdater_SetCTPolicy_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceUpdater_SetCTPolicy_Params', [
      mojo.internal.StructField('ct_policy', 0, 0, network.mojom.CTPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [certificates],
      false);
  }

  waitUntilNextUpdateForTesting() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ResponseParamsSpec,
      [],
      false);
  }

  setCTPolicy(ct_policy) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cert_verifier.mojom.CertVerifierServiceUpdater_SetCTPolicy_ParamsSpec,
      null,
      [ct_policy],
      false);
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

cert_verifier.mojom.CertVerifierServiceUpdaterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = cert_verifier.mojom.CertVerifierServiceUpdater_UpdateAdditionalCertificates_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateAdditionalCertificates(params.certificates);
          break;
        }
        case 1: {
          const params = cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.waitUntilNextUpdateForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = cert_verifier.mojom.CertVerifierServiceUpdater_SetCTPolicy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCTPolicy(params.ct_policy);
          break;
        }
      }
    });
  }
};

cert_verifier.mojom.CertVerifierServiceUpdaterReceiver = cert_verifier.mojom.CertVerifierServiceUpdaterReceiver;

cert_verifier.mojom.CertVerifierServiceUpdaterPtr = cert_verifier.mojom.CertVerifierServiceUpdaterRemote;
cert_verifier.mojom.CertVerifierServiceUpdaterRequest = cert_verifier.mojom.CertVerifierServiceUpdaterPendingReceiver;

