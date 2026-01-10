// Auto-generated MojoJS binding
// Source: chromium_src/services/cert_verifier/public/mojom/cert_verifier_service_factory.mojom
// Module: cert_verifier.mojom

'use strict';

// Module namespace
var cert_verifier = cert_verifier || {};
cert_verifier.mojom = cert_verifier.mojom || {};


// Enum: CertificateTrust
cert_verifier.mojom.CertificateTrust = {
  kUnspecified: 0,
  kDistrusted: 1,
  kTrusted: 2,
};
cert_verifier.mojom.CertificateTrustSpec = { $: mojo.internal.Enum() };

// Struct: CertVerifierCreationParams
cert_verifier.mojom.CertVerifierCreationParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierCreationParams',
      packedSize: 32,
      fields: [
        { name: 'initial_additional_certificates', packedOffset: 0, packedBitOffset: 0, type: cert_verifier.mojom.AdditionalCertificatesSpec, nullable: true, minVersion: 0 },
        { name: 'wait_for_update', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ct_policy', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CTPolicySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ChromeRootCertInfo
cert_verifier.mojom.ChromeRootCertInfoSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.ChromeRootCertInfo',
      packedSize: 24,
      fields: [
        { name: 'sha256hash_hex', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cert', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ChromeRootMerkleTreeCertInfo
cert_verifier.mojom.ChromeRootMerkleTreeCertInfoSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.ChromeRootMerkleTreeCertInfo',
      packedSize: 32,
      fields: [
        { name: 'log_id_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'min_landmark_id_text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'last_landmark_id_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ChromeRootStoreInfo
cert_verifier.mojom.ChromeRootStoreInfoSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.ChromeRootStoreInfo',
      packedSize: 40,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'root_cert_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(cert_verifier.mojom.ChromeRootCertInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'mtc_metadata_update_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'root_mtc_info', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(cert_verifier.mojom.ChromeRootMerkleTreeCertInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: PlatformCertInfo
cert_verifier.mojom.PlatformCertInfoSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.PlatformCertInfo',
      packedSize: 24,
      fields: [
        { name: 'cert', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'trust_setting', packedOffset: 8, packedBitOffset: 0, type: cert_verifier.mojom.CertificateTrustSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PlatformRootStoreInfo
cert_verifier.mojom.PlatformRootStoreInfoSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.PlatformRootStoreInfo',
      packedSize: 16,
      fields: [
        { name: 'user_added_certs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(cert_verifier.mojom.PlatformCertInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: CertVerifierServiceFactory
cert_verifier.mojom.CertVerifierServiceFactory = {};

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
};

cert_verifier.mojom.CertVerifierServiceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getNewCertVerifier(receiver, updater, client, creation_params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec,
      null,
      [receiver, updater, client, creation_params]);
  }

  updateCRLSet(crl_set) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec,
      null,
      [crl_set]);
  }

  updateCtLogList(log_list, update_time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec,
      null,
      [log_list, update_time]);
  }

  disableCtEnforcement() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec,
      null,
      []);
  }

  updateChromeRootStore(new_root_store) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec,
      null,
      [new_root_store]);
  }

  updateMtcMetadata(new_mtc_metadata) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec,
      null,
      [new_mtc_metadata]);
  }

  setUseChromeRootStore(use_crs) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec,
      null,
      [use_crs]);
  }

  getChromeRootStoreInfo() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec,
      []);
  }

  getPlatformRootStoreInfo() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec,
      []);
  }

  updateNetworkTime(system_time, system_ticks, current_time) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec,
      null,
      [system_time, system_ticks, current_time]);
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

// ParamsSpec for GetNewCertVerifier
cert_verifier.mojom.CertVerifierServiceFactory_GetNewCertVerifier_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceFactory.GetNewCertVerifier_Params',
      packedSize: 32,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'updater', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'creation_params', packedOffset: 16, packedBitOffset: 0, type: cert_verifier.mojom.CertVerifierCreationParamsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for UpdateCRLSet
cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceFactory.UpdateCRLSet_Params',
      packedSize: 24,
      fields: [
        { name: 'crl_set', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateCtLogList
cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceFactory.UpdateCtLogList_Params',
      packedSize: 24,
      fields: [
        { name: 'log_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CTLogInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'update_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DisableCtEnforcement
cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceFactory.DisableCtEnforcement_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateChromeRootStore
cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceFactory.UpdateChromeRootStore_Params',
      packedSize: 16,
      fields: [
        { name: 'new_root_store', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateMtcMetadata
cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceFactory.UpdateMtcMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'new_mtc_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUseChromeRootStore
cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceFactory.SetUseChromeRootStore_Params',
      packedSize: 16,
      fields: [
        { name: 'use_crs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetChromeRootStoreInfo
cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceFactory.GetChromeRootStoreInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'root_store_info', packedOffset: 0, packedBitOffset: 0, type: cert_verifier.mojom.ChromeRootStoreInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPlatformRootStoreInfo
cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceFactory.GetPlatformRootStoreInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'root_store_info', packedOffset: 0, packedBitOffset: 0, type: cert_verifier.mojom.PlatformRootStoreInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateNetworkTime
cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceFactory.UpdateNetworkTime_Params',
      packedSize: 32,
      fields: [
        { name: 'system_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'system_ticks', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'current_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
cert_verifier.mojom.CertVerifierServiceFactoryPtr = cert_verifier.mojom.CertVerifierServiceFactoryRemote;
cert_verifier.mojom.CertVerifierServiceFactoryRequest = cert_verifier.mojom.CertVerifierServiceFactoryPendingReceiver;

