// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/resources/certificate_manager/certificate_manager.mojom
// Module: certificate_manager.mojom

'use strict';

// Module namespace
var certificate_manager = certificate_manager || {};
certificate_manager.mojom = certificate_manager.mojom || {};

certificate_manager.mojom.CertificateSourceSpec = { $: mojo.internal.Enum() };
certificate_manager.mojom.SuccessResultSpec = { $: mojo.internal.Enum() };
certificate_manager.mojom.ActionResultSpec = { $: {} };
certificate_manager.mojom.SummaryCertInfoSpec = { $: {} };
certificate_manager.mojom.CertManagementMetadataSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandlerFactory = {};
certificate_manager.mojom.CertificateManagerPageHandlerFactory.$interfaceName = 'certificate_manager.mojom.CertificateManagerPageHandlerFactory';
certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler = {};
certificate_manager.mojom.CertificateManagerPageHandler.$interfaceName = 'certificate_manager.mojom.CertificateManagerPageHandler';
certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPage = {};
certificate_manager.mojom.CertificateManagerPage.$interfaceName = 'certificate_manager.mojom.CertificateManagerPage';
certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ResponseParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ResponseParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPage_TriggerReload_ParamsSpec = { $: {} };
certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec = { $: {} };

// Enum: CertificateSource
certificate_manager.mojom.CertificateSource = {
  kChromeRootStore: 1,
  kPlatformClientCert: 2,
  kEnterpriseTrustedCerts: 3,
  kEnterpriseIntermediateCerts: 4,
  kEnterpriseDistrustedCerts: 5,
  kPlatformUserTrustedCerts: 6,
  kPlatformUserIntermediateCerts: 7,
  kPlatformUserDistrustedCerts: 8,
  EnableIf: 8,
  EnableIf: 8,
  kUserTrustedCerts: 9,
  kUserIntermediateCerts: 10,
  kUserDistrustedCerts: 11,
};

// Enum: SuccessResult
certificate_manager.mojom.SuccessResult = {
  kSuccess: 0,
};

// Union: ActionResult
mojo.internal.Union(
    certificate_manager.mojom.ActionResultSpec, 'certificate_manager.mojom.ActionResult', {
      'error': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'success': {
        'ordinal': 1,
        'type': certificate_manager.mojom.SuccessResultSpec,
        'nullable': false,
      },
    });

// Struct: SummaryCertInfo
mojo.internal.Struct(
    certificate_manager.mojom.SummaryCertInfoSpec, 'certificate_manager.mojom.SummaryCertInfo', [
      mojo.internal.StructField('sha256hash_hex', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_deletable', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CertManagementMetadata
mojo.internal.Struct(
    certificate_manager.mojom.CertManagementMetadataSpec, 'certificate_manager.mojom.CertManagementMetadata', [
      mojo.internal.StructField('include_system_trust_store', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('num_user_added_system_certs', 5, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('is_include_system_trust_store_managed', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('num_policy_certs', 6, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('num_user_certs', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('show_user_certs_ui', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CertificateManagerPageHandlerFactory
mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(certificate_manager.mojom.CertificateManagerPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(certificate_manager.mojom.CertificateManagerPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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

certificate_manager.mojom.CertificateManagerPageHandlerFactoryPtr = certificate_manager.mojom.CertificateManagerPageHandlerFactoryRemote;
certificate_manager.mojom.CertificateManagerPageHandlerFactoryRequest = certificate_manager.mojom.CertificateManagerPageHandlerFactoryPendingReceiver;


// Interface: CertificateManagerPageHandler
mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_Params', [
      mojo.internal.StructField('source', 0, 0, certificate_manager.mojom.CertificateSourceSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParams', [
      mojo.internal.StructField('certs', 0, 0, mojo.internal.Array(certificate_manager.mojom.SummaryCertInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParams', [
      mojo.internal.StructField('metadata', 0, 0, certificate_manager.mojom.CertManagementMetadataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_Params', [
      mojo.internal.StructField('source', 8, 0, certificate_manager.mojom.CertificateSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('sha256_hash_hex', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_Params', [
      mojo.internal.StructField('source', 0, 0, certificate_manager.mojom.CertificateSourceSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_Params', [
      mojo.internal.StructField('source', 0, 0, certificate_manager.mojom.CertificateSourceSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, certificate_manager.mojom.ActionResultSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_Params', [
      mojo.internal.StructField('source', 0, 0, certificate_manager.mojom.CertificateSourceSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, certificate_manager.mojom.ActionResultSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_Params', [
      mojo.internal.StructField('source', 16, 0, certificate_manager.mojom.CertificateSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sha256_hash_hex', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, certificate_manager.mojom.ActionResultSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_Params', [
      mojo.internal.StructField('include', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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

certificate_manager.mojom.CertificateManagerPageHandlerPtr = certificate_manager.mojom.CertificateManagerPageHandlerRemote;
certificate_manager.mojom.CertificateManagerPageHandlerRequest = certificate_manager.mojom.CertificateManagerPageHandlerPendingReceiver;


// Interface: CertificateManagerPage
mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ResponseParams', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ResponseParams', [
      mojo.internal.StructField('confirmed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPage_TriggerReload_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_TriggerReload_Params', [
      mojo.internal.StructField('sources', 0, 0, mojo.internal.Array(certificate_manager.mojom.CertificateSourceSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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

certificate_manager.mojom.CertificateManagerPagePtr = certificate_manager.mojom.CertificateManagerPageRemote;
certificate_manager.mojom.CertificateManagerPageRequest = certificate_manager.mojom.CertificateManagerPagePendingReceiver;

