// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/content_decryption_module.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};


// Enum: EmeInitDataType
chromeos.cdm.mojom.EmeInitDataType = {
  UNKNOWN: 0,
  WEBM: 1,
  CENC: 2,
  KEYIDS: 3,
};

// Enum: CdmSessionType
chromeos.cdm.mojom.CdmSessionType = {
  kTemporary: 0,
  kPersistentLicense: 1,
};

// Enum: CdmMessageType
chromeos.cdm.mojom.CdmMessageType = {
  LICENSE_REQUEST: 0,
  LICENSE_RENEWAL: 1,
  LICENSE_RELEASE: 2,
  INDIVIDUALIZATION_REQUEST: 3,
};

// Enum: CdmKeyStatus
chromeos.cdm.mojom.CdmKeyStatus = {
  USABLE: 0,
  INTERNAL_ERROR: 1,
  EXPIRED: 2,
  OUTPUT_RESTRICTED: 3,
  OUTPUT_DOWNSCALED: 4,
  KEY_STATUS_PENDING: 5,
  RELEASED: 6,
};

// Enum: HdcpVersion
chromeos.cdm.mojom.HdcpVersion = {
  kHdcpVersionNone: 0,
  kHdcpVersion1_0: 1,
  kHdcpVersion1_1: 2,
  kHdcpVersion1_2: 3,
  kHdcpVersion1_3: 4,
  kHdcpVersion1_4: 5,
  kHdcpVersion2_0: 6,
  kHdcpVersion2_1: 7,
  kHdcpVersion2_2: 8,
  kHdcpVersion2_3: 9,
};

// Enum: PromiseException
chromeos.cdm.mojom.PromiseException = {
  NOT_SUPPORTED_ERROR: 0,
  INVALID_STATE_ERROR: 1,
  QUOTA_EXCEEDED_ERROR: 2,
  TYPE_ERROR: 3,
};

// Enum: EncryptionScheme
chromeos.cdm.mojom.EncryptionScheme = {
  kCenc: 0,
  kCbcs: 1,
};

// Enum: DecryptStatus
chromeos.cdm.mojom.DecryptStatus = {
  kSuccess: 0,
  kNoKey: 1,
  kFailure: 2,
};

// Interface: ContentDecryptionModule
chromeos.cdm.mojom.ContentDecryptionModulePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.ContentDecryptionModuleRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.ContentDecryptionModule';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.ContentDecryptionModulePendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.ContentDecryptionModuleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.mojom.ContentDecryptionModuleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.cdm.mojom.ContentDecryptionModule.getRemote = function() {
  let remote = new chromeos.cdm.mojom.ContentDecryptionModuleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.ContentDecryptionModule',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.cdm.mojom.ContentDecryptionModulePtr = chromeos.cdm.mojom.ContentDecryptionModuleRemote;
chromeos.cdm.mojom.ContentDecryptionModuleRequest = chromeos.cdm.mojom.ContentDecryptionModulePendingReceiver;


// Interface: ContentDecryptionModuleClient
chromeos.cdm.mojom.ContentDecryptionModuleClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.ContentDecryptionModuleClientRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.ContentDecryptionModuleClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.ContentDecryptionModuleClientPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.ContentDecryptionModuleClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.mojom.ContentDecryptionModuleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.cdm.mojom.ContentDecryptionModuleClient.getRemote = function() {
  let remote = new chromeos.cdm.mojom.ContentDecryptionModuleClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.ContentDecryptionModuleClient',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.cdm.mojom.ContentDecryptionModuleClientPtr = chromeos.cdm.mojom.ContentDecryptionModuleClientRemote;
chromeos.cdm.mojom.ContentDecryptionModuleClientRequest = chromeos.cdm.mojom.ContentDecryptionModuleClientPendingReceiver;

