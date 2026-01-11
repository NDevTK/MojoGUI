// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cert_verifier_service_updater.mojom
// Module: cert_verifier.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  updateAdditionalCertificates(certificates) {
    return this.$.updateAdditionalCertificates(certificates);
  }
  waitUntilNextUpdateForTesting() {
    return this.$.waitUntilNextUpdateForTesting();
  }
  setCTPolicy(ct_policy) {
    return this.$.setCTPolicy(ct_policy);
  }
};

cert_verifier.mojom.CertVerifierServiceUpdaterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CertVerifierServiceUpdater', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateAdditionalCertificates(certificates) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cert_verifier.mojom.CertVerifierServiceUpdater_UpdateAdditionalCertificates_ParamsSpec,
      null,
      [certificates],
      false);
  }

  waitUntilNextUpdateForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ResponseParamsSpec,
      [],
      false);
  }

  setCTPolicy(ct_policy) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CertVerifierServiceUpdater', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceUpdater_UpdateAdditionalCertificates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceUpdater_SetCTPolicy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceUpdater_UpdateAdditionalCertificates_ParamsSpec.$.structSpec);
          const result = this.impl.updateAdditionalCertificates(params.certificates);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ParamsSpec.$.structSpec);
          const result = this.impl.waitUntilNextUpdateForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceUpdater_WaitUntilNextUpdateForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceUpdater_SetCTPolicy_ParamsSpec.$.structSpec);
          const result = this.impl.setCTPolicy(params.ct_policy);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

cert_verifier.mojom.CertVerifierServiceUpdaterReceiver = cert_verifier.mojom.CertVerifierServiceUpdaterReceiver;

cert_verifier.mojom.CertVerifierServiceUpdaterPtr = cert_verifier.mojom.CertVerifierServiceUpdaterRemote;
cert_verifier.mojom.CertVerifierServiceUpdaterRequest = cert_verifier.mojom.CertVerifierServiceUpdaterPendingReceiver;

