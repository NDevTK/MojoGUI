// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/resources/certificate_manager/certificate_manager.mojom
// Module: certificate_manager.mojom

'use strict';

// Module namespace
var certificate_manager = certificate_manager || {};
certificate_manager.mojom = certificate_manager.mojom || {};


// Enum: CertificateSource
certificate_manager.mojom.CertificateSource = {
  kChromeRootStore: 0,
  kPlatformClientCert: 1,
  kEnterpriseTrustedCerts: 2,
  kEnterpriseIntermediateCerts: 3,
  kEnterpriseDistrustedCerts: 4,
  kUserTrustedCerts: 5,
  kUserIntermediateCerts: 6,
  kUserDistrustedCerts: 7,
};

// Enum: SuccessResult
certificate_manager.mojom.SuccessResult = {
  kSuccess: 0,
};

// Interface: CertificateManagerPageHandlerFactory
certificate_manager.mojom.CertificateManagerPageHandlerFactory = {};

certificate_manager.mojom.CertificateManagerPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

certificate_manager.mojom.CertificateManagerPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'certificate_manager.mojom.CertificateManagerPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      certificate_manager.mojom.CertificateManagerPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new certificate_manager.mojom.CertificateManagerPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

certificate_manager.mojom.CertificateManagerPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCertificateManagerPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

certificate_manager.mojom.CertificateManagerPageHandlerFactory.getRemote = function() {
  let remote = new certificate_manager.mojom.CertificateManagerPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'certificate_manager.mojom.CertificateManagerPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCertificateManagerPageHandler
certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandlerFactory.CreateCertificateManagerPageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
certificate_manager.mojom.CertificateManagerPageHandlerFactoryPtr = certificate_manager.mojom.CertificateManagerPageHandlerFactoryRemote;
certificate_manager.mojom.CertificateManagerPageHandlerFactoryRequest = certificate_manager.mojom.CertificateManagerPageHandlerFactoryPendingReceiver;


// Interface: CertificateManagerPageHandler
certificate_manager.mojom.CertificateManagerPageHandler = {};

certificate_manager.mojom.CertificateManagerPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

certificate_manager.mojom.CertificateManagerPageHandlerRemote = class {
  static get $interfaceName() {
    return 'certificate_manager.mojom.CertificateManagerPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      certificate_manager.mojom.CertificateManagerPageHandlerPendingReceiver,
      handle);
    this.$ = new certificate_manager.mojom.CertificateManagerPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

certificate_manager.mojom.CertificateManagerPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCertificates(source) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec,
      certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParamsSpec,
      [source]);
  }

  getCertManagementMetadata() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec,
      certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec,
      []);
  }

  viewCertificate(source, sha256_hash_hex) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec,
      null,
      [source, sha256_hash_hex]);
  }

  exportCertificates(source) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec,
      null,
      [source]);
  }

  importCertificate(source) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec,
      certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec,
      [source]);
  }

  importAndBindCertificate(source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec,
      certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec,
      [source]);
  }

  deleteCertificate(source, display_name, sha256_hash_hex) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec,
      certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec,
      [source, display_name, sha256_hash_hex]);
  }

  showNativeManageCertificates() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec,
      null,
      []);
  }

  setIncludeSystemTrustStore(include) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec,
      null,
      [include]);
  }

};

certificate_manager.mojom.CertificateManagerPageHandler.getRemote = function() {
  let remote = new certificate_manager.mojom.CertificateManagerPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'certificate_manager.mojom.CertificateManagerPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetCertificates
certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.GetCertificates_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.GetCertificates_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'certs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCertManagementMetadata
certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.GetCertManagementMetadata_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.GetCertManagementMetadata_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ViewCertificate
certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ViewCertificate_Params',
      packedSize: 24,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sha256_hash_hex', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExportCertificates
certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ExportCertificates_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ImportCertificate
certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ImportCertificate_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ImportCertificate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ImportAndBindCertificate
certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ImportAndBindCertificate_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ImportAndBindCertificate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteCertificate
certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.DeleteCertificate_Params',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'sha256_hash_hex', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.DeleteCertificate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowNativeManageCertificates
certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.ShowNativeManageCertificates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetIncludeSystemTrustStore
certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPageHandler.SetIncludeSystemTrustStore_Params',
      packedSize: 16,
      fields: [
        { name: 'include', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
certificate_manager.mojom.CertificateManagerPageHandlerPtr = certificate_manager.mojom.CertificateManagerPageHandlerRemote;
certificate_manager.mojom.CertificateManagerPageHandlerRequest = certificate_manager.mojom.CertificateManagerPageHandlerPendingReceiver;


// Interface: CertificateManagerPage
certificate_manager.mojom.CertificateManagerPage = {};

certificate_manager.mojom.CertificateManagerPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

certificate_manager.mojom.CertificateManagerPageRemote = class {
  static get $interfaceName() {
    return 'certificate_manager.mojom.CertificateManagerPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      certificate_manager.mojom.CertificateManagerPagePendingReceiver,
      handle);
    this.$ = new certificate_manager.mojom.CertificateManagerPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

certificate_manager.mojom.CertificateManagerPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  askForImportPassword() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec,
      certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ResponseParamsSpec,
      []);
  }

  askForConfirmation(title, message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec,
      certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ResponseParamsSpec,
      [title, message]);
  }

  triggerReload(sources) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      certificate_manager.mojom.CertificateManagerPage_TriggerReload_ParamsSpec,
      null,
      [sources]);
  }

  triggerMetadataUpdate() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec,
      null,
      []);
  }

};

certificate_manager.mojom.CertificateManagerPage.getRemote = function() {
  let remote = new certificate_manager.mojom.CertificateManagerPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'certificate_manager.mojom.CertificateManagerPage',
    'context');
  return remote.$;
};

// ParamsSpec for AskForImportPassword
certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPage.AskForImportPassword_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPage.AskForImportPassword_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AskForConfirmation
certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPage.AskForConfirmation_Params',
      packedSize: 24,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPage.AskForConfirmation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'confirmed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TriggerReload
certificate_manager.mojom.CertificateManagerPage_TriggerReload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPage.TriggerReload_Params',
      packedSize: 16,
      fields: [
        { name: 'sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TriggerMetadataUpdate
certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'certificate_manager.mojom.CertificateManagerPage.TriggerMetadataUpdate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
certificate_manager.mojom.CertificateManagerPagePtr = certificate_manager.mojom.CertificateManagerPageRemote;
certificate_manager.mojom.CertificateManagerPageRequest = certificate_manager.mojom.CertificateManagerPagePendingReceiver;

