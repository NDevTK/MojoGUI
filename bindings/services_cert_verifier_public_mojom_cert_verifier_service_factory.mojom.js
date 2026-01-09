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
      null,
      [receiver, updater, client, creation_params],
      undefined,
      undefined
    );
  }

  updateCRLSet(crl_set) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec,
      null,
      null,
      [crl_set],
      undefined,
      undefined
    );
  }

  updateCtLogList(log_list, update_time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateCtLogList_ParamsSpec,
      null,
      null,
      [log_list, update_time],
      undefined,
      undefined
    );
  }

  disableCtEnforcement() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_DisableCtEnforcement_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  updateChromeRootStore(new_root_store) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateChromeRootStore_ParamsSpec,
      null,
      null,
      [new_root_store],
      undefined,
      undefined
    );
  }

  updateMtcMetadata(new_mtc_metadata) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateMtcMetadata_ParamsSpec,
      null,
      null,
      [new_mtc_metadata],
      undefined,
      undefined
    );
  }

  setUseChromeRootStore(use_crs) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_SetUseChromeRootStore_ParamsSpec,
      null,
      null,
      [use_crs],
      undefined,
      undefined
    );
  }

  getChromeRootStoreInfo() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_GetChromeRootStoreInfo_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getPlatformRootStoreInfo() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec,
      cert_verifier.mojom.CertVerifierServiceFactory_GetPlatformRootStoreInfo_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  updateNetworkTime(system_time, system_ticks, current_time) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      cert_verifier.mojom.CertVerifierServiceFactory_UpdateNetworkTime_ParamsSpec,
      null,
      null,
      [system_time, system_ticks, current_time],
      undefined,
      undefined
    );
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
      packedSize: 40,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'updater', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'creation_params', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for UpdateCRLSet
cert_verifier.mojom.CertVerifierServiceFactory_UpdateCRLSet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cert_verifier.mojom.CertVerifierServiceFactory.UpdateCRLSet_Params',
      packedSize: 16,
      fields: [
        { name: 'crl_set', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'log_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'update_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'new_root_store', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'new_mtc_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'use_crs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      name: 'cert_verifier.mojom.CertVerifierServiceFactory.GetChromeRootStoreInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'root_store_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      name: 'cert_verifier.mojom.CertVerifierServiceFactory.GetPlatformRootStoreInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'root_store_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'system_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'system_ticks', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'current_time', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
cert_verifier.mojom.CertVerifierServiceFactoryPtr = cert_verifier.mojom.CertVerifierServiceFactoryRemote;
cert_verifier.mojom.CertVerifierServiceFactoryRequest = cert_verifier.mojom.CertVerifierServiceFactoryPendingReceiver;

