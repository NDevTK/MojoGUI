// Auto-generated MojoJS binding
// Source: chromium_src/services/cert_verifier/public/mojom/cert_verifier_service_factory.mojom
// Module: cert_verifier.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var cert_verifier = cert_verifier || {};
cert_verifier.mojom = cert_verifier.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};

cert_verifier.mojom.CertificateTrustSpec = { $: mojo.internal.Enum() };
cert_verifier.mojom.CertVerifierCreationParamsSpec = { $: {} };
cert_verifier.mojom.ChromeRootCertInfoSpec = { $: {} };
cert_verifier.mojom.ChromeRootMerkleTreeCertInfoSpec = { $: {} };
cert_verifier.mojom.ChromeRootStoreInfoSpec = { $: {} };
cert_verifier.mojom.PlatformCertInfoSpec = { $: {} };
cert_verifier.mojom.PlatformRootStoreInfoSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory = {};
cert_verifier.mojom.CertVerifierServiceFactory.$interfaceName = 'cert_verifier.mojom.CertVerifierServiceFactory';
cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec = { $: {} };
cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec = { $: {} };

// Enum: CertificateTrust
cert_verifier.mojom.CertificateTrust = {
  kUnspecified: 0,
  kDistrusted: 1,
  kTrusted: 2,
};

// Struct: CertVerifierCreationParams
mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierCreationParamsSpec, 'cert_verifier.mojom.CertVerifierCreationParams', [
      mojo.internal.StructField('initial_additional_certificates', 0, 0, cert_verifier.mojom.AdditionalCertificatesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ct_policy', 8, 0, network.mojom.CTPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('wait_for_update', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ChromeRootCertInfo
mojo.internal.Struct(
    cert_verifier.mojom.ChromeRootCertInfoSpec, 'cert_verifier.mojom.ChromeRootCertInfo', [
      mojo.internal.StructField('sha256hash_hex', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cert', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ChromeRootMerkleTreeCertInfo
mojo.internal.Struct(
    cert_verifier.mojom.ChromeRootMerkleTreeCertInfoSpec, 'cert_verifier.mojom.ChromeRootMerkleTreeCertInfo', [
      mojo.internal.StructField('log_id_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('min_landmark_id_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_landmark_id_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ChromeRootStoreInfo
mojo.internal.Struct(
    cert_verifier.mojom.ChromeRootStoreInfoSpec, 'cert_verifier.mojom.ChromeRootStoreInfo', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('root_cert_info', 8, 0, mojo.internal.Array(cert_verifier.mojom.ChromeRootCertInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('mtc_metadata_update_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('root_mtc_info', 24, 0, mojo.internal.Array(cert_verifier.mojom.ChromeRootMerkleTreeCertInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PlatformCertInfo
mojo.internal.Struct(
    cert_verifier.mojom.PlatformCertInfoSpec, 'cert_verifier.mojom.PlatformCertInfo', [
      mojo.internal.StructField('cert', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('trust_setting', 8, 0, cert_verifier.mojom.CertificateTrustSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PlatformRootStoreInfo
mojo.internal.Struct(
    cert_verifier.mojom.PlatformRootStoreInfoSpec, 'cert_verifier.mojom.PlatformRootStoreInfo', [
      mojo.internal.StructField('user_added_certs', 0, 0, mojo.internal.Array(cert_verifier.mojom.PlatformCertInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CertVerifierServiceFactory
mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(cert_verifier.mojom.CertVerifierServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('updater', 8, 0, mojo.internal.InterfaceRequest(cert_verifier.mojom.CertVerifierServiceUpdaterRemote), null, true, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(cert_verifier.mojom.CertVerifierServiceClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('creation_params', 24, 0, cert_verifier.mojom.CertVerifierCreationParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_Params', [
      mojo.internal.StructField('crl_set', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_Params', [
      mojo.internal.StructField('log_list', 0, 0, mojo.internal.Array(network.mojom.CTLogInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('update_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_Params', [
      mojo.internal.StructField('new_root_store', 0, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_Params', [
      mojo.internal.StructField('new_mtc_metadata', 0, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_Params', [
      mojo.internal.StructField('use_crs', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParams', [
      mojo.internal.StructField('root_store_info', 0, 0, cert_verifier.mojom.ChromeRootStoreInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParams', [
      mojo.internal.StructField('root_store_info', 0, 0, cert_verifier.mojom.PlatformRootStoreInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec, 'cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_Params', [
      mojo.internal.StructField('system_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('system_ticks', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('current_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

cert_verifier.mojom.CertVerifierServiceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cert_verifier.mojom.CertVerifierServiceFactoryRemote = class {
  static get $interfaceName() {
    return 'cert_verifier.mojom.CertVerifierServiceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cert_verifier.mojom.CertVerifierServiceFactoryPendingReceiver,
      handle);
    this.$ = new cert_verifier.mojom.CertVerifierServiceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getNewCertVerifier(receiver, updater, client, creation_params) {
    return this.$.getNewCertVerifier(receiver, updater, client, creation_params);
  }
  updateCRLSet(crl_set) {
    return this.$.updateCRLSet(crl_set);
  }
  updateCtLogList(log_list, update_time) {
    return this.$.updateCtLogList(log_list, update_time);
  }
  disableCtEnforcement() {
    return this.$.disableCtEnforcement();
  }
  updateChromeRootStore(new_root_store) {
    return this.$.updateChromeRootStore(new_root_store);
  }
  updateMtcMetadata(new_mtc_metadata) {
    return this.$.updateMtcMetadata(new_mtc_metadata);
  }
  setUseChromeRootStore(use_crs) {
    return this.$.setUseChromeRootStore(use_crs);
  }
  getChromeRootStoreInfo() {
    return this.$.getChromeRootStoreInfo();
  }
  getPlatformRootStoreInfo() {
    return this.$.getPlatformRootStoreInfo();
  }
  updateNetworkTime(system_time, system_ticks, current_time) {
    return this.$.updateNetworkTime(system_time, system_ticks, current_time);
  }
};

cert_verifier.mojom.CertVerifierServiceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CertVerifierServiceFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getNewCertVerifier(receiver, updater, client, creation_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec,
      null,
      [receiver, updater, client, creation_params],
      false);
  }

  updateCRLSet(crl_set) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParamsSpec,
      [crl_set],
      false);
  }

  updateCtLogList(log_list, update_time) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParamsSpec,
      [log_list, update_time],
      false);
  }

  disableCtEnforcement() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParamsSpec,
      [],
      false);
  }

  updateChromeRootStore(new_root_store) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParamsSpec,
      [new_root_store],
      false);
  }

  updateMtcMetadata(new_mtc_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParamsSpec,
      [new_mtc_metadata],
      false);
  }

  setUseChromeRootStore(use_crs) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParamsSpec,
      [use_crs],
      false);
  }

  getChromeRootStoreInfo() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec,
      [],
      false);
  }

  getPlatformRootStoreInfo() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec,
      [],
      false);
  }

  updateNetworkTime(system_time, system_ticks, current_time) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec,
      null,
      [system_time, system_ticks, current_time],
      false);
  }

};

cert_verifier.mojom.CertVerifierServiceFactory.getRemote = function() {
  let remote = new cert_verifier.mojom.CertVerifierServiceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cert_verifier.mojom.CertVerifierServiceFactory',
    'context');
  return remote.$;
};

cert_verifier.mojom.CertVerifierServiceFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CertVerifierServiceFactory', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec.$.structSpec);
          const result = this.impl.getNewCertVerifier(params.receiver, params.updater, params.client, params.creation_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec.$.structSpec);
          const result = this.impl.updateCRLSet(params.crl_set);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec.$.structSpec);
          const result = this.impl.updateCtLogList(params.log_list, params.update_time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec.$.structSpec);
          const result = this.impl.disableCtEnforcement();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec.$.structSpec);
          const result = this.impl.updateChromeRootStore(params.new_root_store);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec.$.structSpec);
          const result = this.impl.updateMtcMetadata(params.new_mtc_metadata);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec.$.structSpec);
          const result = this.impl.setUseChromeRootStore(params.use_crs);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getChromeRootStoreInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getPlatformRootStoreInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec.$.structSpec);
          const result = this.impl.updateNetworkTime(params.system_time, params.system_ticks, params.current_time);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

cert_verifier.mojom.CertVerifierServiceFactoryReceiver = cert_verifier.mojom.CertVerifierServiceFactoryReceiver;

cert_verifier.mojom.CertVerifierServiceFactoryPtr = cert_verifier.mojom.CertVerifierServiceFactoryRemote;
cert_verifier.mojom.CertVerifierServiceFactoryRequest = cert_verifier.mojom.CertVerifierServiceFactoryPendingReceiver;

