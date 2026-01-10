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
        'type': certificate_manager.mojom.SuccessResultSpec.$,
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
      mojo.internal.StructField('num_user_certs', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('include_system_trust_store', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('num_user_added_system_certs', 5, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('is_include_system_trust_store_managed', 6, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('num_policy_certs', 7, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('show_user_certs_ui', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CertificateManagerPageHandlerFactory
mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(certificate_manager.mojom.CertificateManagerPageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(certificate_manager.mojom.CertificateManagerPageHandlerSpec), null, false, 0, undefined),
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
      [page, handler],
      false);
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

certificate_manager.mojom.CertificateManagerPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateCertificateManagerPageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCertificateManagerPageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandlerFactory_CreateCertificateManagerPageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createCertificateManagerPageHandler');
          const result = this.impl.createCertificateManagerPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

certificate_manager.mojom.CertificateManagerPageHandlerFactoryReceiver = certificate_manager.mojom.CertificateManagerPageHandlerFactoryReceiver;

certificate_manager.mojom.CertificateManagerPageHandlerFactoryPtr = certificate_manager.mojom.CertificateManagerPageHandlerFactoryRemote;
certificate_manager.mojom.CertificateManagerPageHandlerFactoryRequest = certificate_manager.mojom.CertificateManagerPageHandlerFactoryPendingReceiver;


// Interface: CertificateManagerPageHandler
mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_Params', [
      mojo.internal.StructField('source', 0, 0, certificate_manager.mojom.CertificateSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParams', [
      mojo.internal.StructField('certs', 0, 0, mojo.internal.Array(certificate_manager.mojom.SummaryCertInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParams', [
      mojo.internal.StructField('metadata', 0, 0, certificate_manager.mojom.CertManagementMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_Params', [
      mojo.internal.StructField('source', 0, 0, certificate_manager.mojom.CertificateSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sha256_hash_hex', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_Params', [
      mojo.internal.StructField('source', 0, 0, certificate_manager.mojom.CertificateSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_Params', [
      mojo.internal.StructField('source', 0, 0, certificate_manager.mojom.CertificateSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, certificate_manager.mojom.ActionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_Params', [
      mojo.internal.StructField('source', 0, 0, certificate_manager.mojom.CertificateSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, certificate_manager.mojom.ActionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_Params', [
      mojo.internal.StructField('source', 0, 0, certificate_manager.mojom.CertificateSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sha256_hash_hex', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, certificate_manager.mojom.ActionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_Params', [
    ],
    [[0, 8]]);

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
      [source],
      false);
  }

  getCertManagementMetadata() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec,
      certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec,
      [],
      false);
  }

  viewCertificate(source, sha256_hash_hex) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec,
      null,
      [source, sha256_hash_hex],
      false);
  }

  exportCertificates(source) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec,
      null,
      [source],
      false);
  }

  importCertificate(source) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec,
      certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec,
      [source],
      false);
  }

  importAndBindCertificate(source) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec,
      certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec,
      [source],
      false);
  }

  deleteCertificate(source, display_name, sha256_hash_hex) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec,
      certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec,
      [source, display_name, sha256_hash_hex],
      false);
  }

  showNativeManageCertificates() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec,
      null,
      [],
      false);
  }

  setIncludeSystemTrustStore(include) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec,
      null,
      [include],
      false);
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

certificate_manager.mojom.CertificateManagerPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCertificates (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetCertManagementMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCertManagementMetadata (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ViewCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ViewCertificate (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ExportCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExportCertificates (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ImportCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImportCertificate (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ImportAndBindCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImportAndBindCertificate (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DeleteCertificate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteCertificate (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ShowNativeManageCertificates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowNativeManageCertificates (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetIncludeSystemTrustStore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIncludeSystemTrustStore (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCertificates');
          const result = this.impl.getCertificates(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, certificate_manager.mojom.CertificateManagerPageHandler_GetCertificates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCertManagementMetadata');
          const result = this.impl.getCertManagementMetadata();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, certificate_manager.mojom.CertificateManagerPageHandler_GetCertManagementMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_ViewCertificate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.viewCertificate');
          const result = this.impl.viewCertificate(params.source, params.sha256_hash_hex);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_ExportCertificates_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.exportCertificates');
          const result = this.impl.exportCertificates(params.source);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.importCertificate');
          const result = this.impl.importCertificate(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, certificate_manager.mojom.CertificateManagerPageHandler_ImportCertificate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.importAndBindCertificate');
          const result = this.impl.importAndBindCertificate(params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, certificate_manager.mojom.CertificateManagerPageHandler_ImportAndBindCertificate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteCertificate');
          const result = this.impl.deleteCertificate(params.source, params.display_name, params.sha256_hash_hex);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, certificate_manager.mojom.CertificateManagerPageHandler_DeleteCertificate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_ShowNativeManageCertificates_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showNativeManageCertificates');
          const result = this.impl.showNativeManageCertificates();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPageHandler_SetIncludeSystemTrustStore_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setIncludeSystemTrustStore');
          const result = this.impl.setIncludeSystemTrustStore(params.include);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

certificate_manager.mojom.CertificateManagerPageHandlerReceiver = certificate_manager.mojom.CertificateManagerPageHandlerReceiver;

certificate_manager.mojom.CertificateManagerPageHandlerPtr = certificate_manager.mojom.CertificateManagerPageHandlerRemote;
certificate_manager.mojom.CertificateManagerPageHandlerRequest = certificate_manager.mojom.CertificateManagerPageHandlerPendingReceiver;


// Interface: CertificateManagerPage
mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_Params', [
    ],
    [[0, 8]]);

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
      mojo.internal.StructField('sources', 0, 0, mojo.internal.Array(certificate_manager.mojom.CertificateSourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec, 'certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  askForConfirmation(title, message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec,
      certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ResponseParamsSpec,
      [title, message],
      false);
  }

  triggerReload(sources) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      certificate_manager.mojom.CertificateManagerPage_TriggerReload_ParamsSpec,
      null,
      [sources],
      false);
  }

  triggerMetadataUpdate() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec,
      null,
      [],
      false);
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

certificate_manager.mojom.CertificateManagerPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AskForImportPassword
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AskForImportPassword (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AskForConfirmation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AskForConfirmation (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: TriggerReload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPage_TriggerReload_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerReload (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: TriggerMetadataUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TriggerMetadataUpdate (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.askForImportPassword');
          const result = this.impl.askForImportPassword();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, certificate_manager.mojom.CertificateManagerPage_AskForImportPassword_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.askForConfirmation');
          const result = this.impl.askForConfirmation(params.title, params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, certificate_manager.mojom.CertificateManagerPage_AskForConfirmation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPage_TriggerReload_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.triggerReload');
          const result = this.impl.triggerReload(params.sources);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(certificate_manager.mojom.CertificateManagerPage_TriggerMetadataUpdate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.triggerMetadataUpdate');
          const result = this.impl.triggerMetadataUpdate();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

certificate_manager.mojom.CertificateManagerPageReceiver = certificate_manager.mojom.CertificateManagerPageReceiver;

certificate_manager.mojom.CertificateManagerPagePtr = certificate_manager.mojom.CertificateManagerPageRemote;
certificate_manager.mojom.CertificateManagerPageRequest = certificate_manager.mojom.CertificateManagerPagePendingReceiver;

