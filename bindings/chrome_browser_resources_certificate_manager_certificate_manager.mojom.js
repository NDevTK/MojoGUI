// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/resources/certificate_manager/certificate_manager.mojom
// Module: certificate_manager.mojom

'use strict';

// Module namespace
var certificate_manager = certificate_manager || {};
certificate_manager.mojom = certificate_manager.mojom || {};


// Enum: CertificateSource
certificate_manager.mojom.mojom.CertificateSource = {
  kChromeRootStore: 0,
  kPlatformClientCert: 1,
  kEnterpriseTrustedCerts: 2,
  kEnterpriseIntermediateCerts: 3,
  kEnterpriseDistrustedCerts: 4,
  kUserTrustedCerts: 5,
  kUserIntermediateCerts: 6,
  kUserDistrustedCerts: 7,
};
certificate_manager.mojom.mojom.CertificateSourceSpec = { $: mojo.internal.Enum() };

// Enum: SuccessResult
certificate_manager.mojom.mojom.SuccessResult = {
  kSuccess: 0,
};
certificate_manager.mojom.mojom.SuccessResultSpec = { $: mojo.internal.Enum() };

// Union: ActionResult
certificate_manager.mojom.mojom.ActionResultSpec = { $: mojo.internal.Union(
    'certificate_manager.mojom.ActionResult', {
      'error': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'success': {
        'ordinal': 1,
        'type': certificate_manager.mojom.SuccessResultSpec,
      }},
    })
};

// Struct: SummaryCertInfo
certificate_manager.mojom.mojom.SummaryCertInfoSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.SummaryCertInfo',
      packedSize: 32,
      fields: [
        { name: 'sha256hash_hex', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_deletable', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CertManagementMetadata
certificate_manager.mojom.mojom.CertManagementMetadataSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertManagementMetadata',
      packedSize: 16,
      fields: [
        { name: 'include_system_trust_store', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'num_user_added_system_certs', packedOffset: 5, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'is_include_system_trust_store_managed', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'num_policy_certs', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'num_user_certs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'show_user_certs_ui', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: CertificateManagerPageHandlerFactory
certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactory = {};

certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'certificate_manager.mojom.CertificateManagerPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCertificateManagerPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactory.getRemote = function() {
  let remote = new certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'certificate_manager.mojom.CertificateManagerPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCertificateManagerPageHandler
certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandlerFactory.CreateCertificateManagerPageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactoryPtr = certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactoryRemote;
certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactoryRequest = certificate_manager.mojom.mojom.CertificateManagerPageHandlerFactoryPendingReceiver;


// Interface: CertificateManagerPageHandler
certificate_manager.mojom.mojom.CertificateManagerPageHandler = {};

certificate_manager.mojom.mojom.CertificateManagerPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

certificate_manager.mojom.mojom.CertificateManagerPageHandlerRemote = class {
  static get $interfaceName() {
    return 'certificate_manager.mojom.CertificateManagerPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      certificate_manager.mojom.mojom.CertificateManagerPageHandlerPendingReceiver,
      handle);
    this.$ = new certificate_manager.mojom.mojom.CertificateManagerPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

certificate_manager.mojom.mojom.CertificateManagerPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCertificates(source) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec,
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParamsSpec,
      [source]);
  }

  getCertManagementMetadata() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec,
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec,
      []);
  }

  viewCertificate(source, sha256_hash_hex) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec,
      null,
      [source, sha256_hash_hex]);
  }

  exportCertificates(source) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec,
      null,
      [source]);
  }

  importCertificate(source) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec,
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec,
      [source]);
  }

  importAndBindCertificate(source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec,
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec,
      [source]);
  }

  deleteCertificate(source, display_name, sha256_hash_hex) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec,
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec,
      [source, display_name, sha256_hash_hex]);
  }

  showNativeManageCertificates() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec,
      null,
      []);
  }

  setIncludeSystemTrustStore(include) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec,
      null,
      [include]);
  }

};

certificate_manager.mojom.mojom.CertificateManagerPageHandler.getRemote = function() {
  let remote = new certificate_manager.mojom.mojom.CertificateManagerPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'certificate_manager.mojom.CertificateManagerPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetCertificates
certificate_manager.mojom.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.GetCertificates_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: certificate_manager.mojom.CertificateSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

certificate_manager.mojom.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.GetCertificates_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'certs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(certificate_manager.mojom.SummaryCertInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetCertManagementMetadata
certificate_manager.mojom.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.GetCertManagementMetadata_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

certificate_manager.mojom.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.GetCertManagementMetadata_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: certificate_manager.mojom.CertManagementMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ViewCertificate
certificate_manager.mojom.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ViewCertificate_Params',
      packedSize: 24,
      fields: [
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: certificate_manager.mojom.CertificateSourceSpec, nullable: false, minVersion: 0 },
        { name: 'sha256_hash_hex', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExportCertificates
certificate_manager.mojom.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ExportCertificates_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: certificate_manager.mojom.CertificateSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ImportCertificate
certificate_manager.mojom.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ImportCertificate_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: certificate_manager.mojom.CertificateSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

certificate_manager.mojom.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ImportCertificate_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: certificate_manager.mojom.ActionResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ImportAndBindCertificate
certificate_manager.mojom.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ImportAndBindCertificate_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: certificate_manager.mojom.CertificateSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

certificate_manager.mojom.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ImportAndBindCertificate_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: certificate_manager.mojom.ActionResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeleteCertificate
certificate_manager.mojom.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.DeleteCertificate_Params',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: certificate_manager.mojom.CertificateSourceSpec, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sha256_hash_hex', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

certificate_manager.mojom.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.DeleteCertificate_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: certificate_manager.mojom.ActionResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ShowNativeManageCertificates
certificate_manager.mojom.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ShowNativeManageCertificates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetIncludeSystemTrustStore
certificate_manager.mojom.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.SetIncludeSystemTrustStore_Params',
      packedSize: 16,
      fields: [
        { name: 'include', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
certificate_manager.mojom.mojom.CertificateManagerPageHandlerPtr = certificate_manager.mojom.mojom.CertificateManagerPageHandlerRemote;
certificate_manager.mojom.mojom.CertificateManagerPageHandlerRequest = certificate_manager.mojom.mojom.CertificateManagerPageHandlerPendingReceiver;


// Interface: CertificateManagerPage
certificate_manager.mojom.mojom.CertificateManagerPage = {};

certificate_manager.mojom.mojom.CertificateManagerPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

certificate_manager.mojom.mojom.CertificateManagerPageRemote = class {
  static get $interfaceName() {
    return 'certificate_manager.mojom.CertificateManagerPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      certificate_manager.mojom.mojom.CertificateManagerPagePendingReceiver,
      handle);
    this.$ = new certificate_manager.mojom.mojom.CertificateManagerPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

certificate_manager.mojom.mojom.CertificateManagerPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  askForImportPassword() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec,
      certificate_manager.mojom.mojom.CertificateManagerPage_AskForImportPassword_ResponseParamsSpec,
      []);
  }

  askForConfirmation(title, message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec,
      certificate_manager.mojom.mojom.CertificateManagerPage_AskForConfirmation_ResponseParamsSpec,
      [title, message]);
  }

  triggerReload(sources) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPage_TriggerReload_ParamsSpec,
      null,
      [sources]);
  }

  triggerMetadataUpdate() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      certificate_manager.mojom.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec,
      null,
      []);
  }

};

certificate_manager.mojom.mojom.CertificateManagerPage.getRemote = function() {
  let remote = new certificate_manager.mojom.mojom.CertificateManagerPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'certificate_manager.mojom.CertificateManagerPage',
    'context');
  return remote.$;
};

// ParamsSpec for AskForImportPassword
certificate_manager.mojom.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPage.AskForImportPassword_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

certificate_manager.mojom.mojom.CertificateManagerPage_AskForImportPassword_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPage.AskForImportPassword_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AskForConfirmation
certificate_manager.mojom.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPage.AskForConfirmation_Params',
      packedSize: 24,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

certificate_manager.mojom.mojom.CertificateManagerPage_AskForConfirmation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPage.AskForConfirmation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'confirmed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TriggerReload
certificate_manager.mojom.mojom.CertificateManagerPage_TriggerReload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPage.TriggerReload_Params',
      packedSize: 16,
      fields: [
        { name: 'sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(certificate_manager.mojom.CertificateSourceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TriggerMetadataUpdate
certificate_manager.mojom.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPage.TriggerMetadataUpdate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
certificate_manager.mojom.mojom.CertificateManagerPagePtr = certificate_manager.mojom.mojom.CertificateManagerPageRemote;
certificate_manager.mojom.mojom.CertificateManagerPageRequest = certificate_manager.mojom.mojom.CertificateManagerPagePendingReceiver;

