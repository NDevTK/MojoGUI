// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/cdm_factory_daemon.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
var chromeos = chromeos || {};
var components = components || {};
var chromeos = chromeos || {};
var components = components || {};
var chromeos = chromeos || {};
var components = components || {};

chromeos.cdm.mojom.CreateCdmStatusSpec = { $: mojo.internal.Enum() };
chromeos.cdm.mojom.CdmFactory = {};
chromeos.cdm.mojom.CdmFactory.$interfaceName = 'chromeos.cdm.mojom.CdmFactory';
chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactory_CreateCdm_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactory_CreateCdm_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon = {};
chromeos.cdm.mojom.CdmFactoryDaemon.$interfaceName = 'chromeos.cdm.mojom.CdmFactoryDaemon';
chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParamsSpec = { $: {} };

// Enum: CreateCdmStatus
chromeos.cdm.mojom.CreateCdmStatus = {
  kSuccess: 0,
  kNoMoreInstances: 1,
  kInsufficientGpuResources: 2,
};

// Interface: CdmFactory
mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_ParamsSpec, 'chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.AssociatedInterfaceProxy(chromeos.cdm.mojom.ContentDecryptionModuleClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('storage', 8, 0, mojo.internal.AssociatedInterfaceProxy(chromeos.cdm.mojom.CdmStorageRemote), null, false, 0, undefined),
      mojo.internal.StructField('cdm', 16, 0, mojo.internal.AssociatedInterfaceRequest(chromeos.cdm.mojom.ContentDecryptionModuleRemote), null, false, 0, undefined),
      mojo.internal.StructField('output_protection', 24, 0, mojo.internal.InterfaceProxy(chromeos.cdm.mojom.OutputProtectionRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec, 'chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.AssociatedInterfaceProxy(chromeos.cdm.mojom.ContentDecryptionModuleClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('storage', 8, 0, mojo.internal.AssociatedInterfaceProxy(chromeos.cdm.mojom.CdmStorageRemote), null, false, 0, undefined),
      mojo.internal.StructField('output_protection', 16, 0, mojo.internal.InterfaceProxy(chromeos.cdm.mojom.OutputProtectionRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cdm', 32, 0, mojo.internal.AssociatedInterfaceRequest(chromeos.cdm.mojom.ContentDecryptionModuleRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactory_CreateCdm_ParamsSpec, 'chromeos.cdm.mojom.CdmFactory_CreateCdm_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.AssociatedInterfaceProxy(chromeos.cdm.mojom.ContentDecryptionModuleClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('storage', 8, 0, mojo.internal.AssociatedInterfaceProxy(chromeos.cdm.mojom.CdmStorageRemote), null, false, 0, undefined),
      mojo.internal.StructField('output_protection', 16, 0, mojo.internal.InterfaceProxy(chromeos.cdm.mojom.OutputProtectionRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cdm', 32, 0, mojo.internal.AssociatedInterfaceRequest(chromeos.cdm.mojom.ContentDecryptionModuleRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactory_CreateCdm_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactory_CreateCdm_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.cdm.mojom.CreateCdmStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.cdm.mojom.CdmFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.CdmFactoryRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.CdmFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.CdmFactoryPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.CdmFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.mojom.CdmFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dEPRECATED_1(client, storage, cdm, output_protection) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_ParamsSpec,
      null,
      [client, storage, cdm, output_protection]);
  }

  createCdmDeprecated(client, storage, output_protection, host, cdm) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec,
      null,
      [client, storage, output_protection, host, cdm]);
  }

  createCdm(client, storage, output_protection, host, cdm) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.mojom.CdmFactory_CreateCdm_ParamsSpec,
      chromeos.cdm.mojom.CdmFactory_CreateCdm_ResponseParamsSpec,
      [client, storage, output_protection, host, cdm]);
  }

};

chromeos.cdm.mojom.CdmFactory.getRemote = function() {
  let remote = new chromeos.cdm.mojom.CdmFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.CdmFactory',
    'context');
  return remote.$;
};

chromeos.cdm.mojom.CdmFactoryPtr = chromeos.cdm.mojom.CdmFactoryRemote;
chromeos.cdm.mojom.CdmFactoryRequest = chromeos.cdm.mojom.CdmFactoryPendingReceiver;


// Interface: CdmFactoryDaemon
mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_Params', [
      mojo.internal.StructField('key_system', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ResponseParams', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceProxy(chromeos.cdm.mojom.CdmFactoryRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_Params', [
      mojo.internal.StructField('oemcryptor', 0, 0, mojo.internal.InterfaceRequest(arc.mojom.OemCryptoServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('protected_buffer_manager', 8, 0, mojo.internal.InterfaceProxy(arc.mojom.ProtectedBufferManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('output_protection', 16, 0, mojo.internal.InterfaceProxy(chromeos.cdm.mojom.OutputProtectionRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('config_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParams', [
      mojo.internal.StructField('hdcp_key_base64', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_Params', [
      mojo.internal.StructField('key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('hw_identifier', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, chromeos.cdm.mojom.DecryptStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_Params', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParams', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_Params', [
      mojo.internal.StructField('secure_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('stream_data', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('slice_header', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos.cdm.mojom.CdmFactoryDaemonPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.CdmFactoryDaemonRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.CdmFactoryDaemon';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.CdmFactoryDaemonPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.CdmFactoryDaemonRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.mojom.CdmFactoryDaemonRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createFactory(key_system) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ResponseParamsSpec,
      [key_system]);
  }

  removedMethod1() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec,
      null,
      []);
  }

  connectOemCrypto(oemcryptor, protected_buffer_manager, output_protection) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec,
      null,
      [oemcryptor, protected_buffer_manager, output_protection]);
  }

  removedMethod3() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec,
      null,
      []);
  }

  getHwConfigData() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParamsSpec,
      []);
  }

  removedMethod5() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec,
      null,
      []);
  }

  getHdcp14Key() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParamsSpec,
      []);
  }

  getAndroidHwKeyData(key_id, hw_identifier) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParamsSpec,
      [key_id, hw_identifier]);
  }

  allocateSecureBuffer(size) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParamsSpec,
      [size]);
  }

  parseEncryptedSliceHeader(secure_handle, offset, stream_data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParamsSpec,
      [secure_handle, offset, stream_data]);
  }

};

chromeos.cdm.mojom.CdmFactoryDaemon.getRemote = function() {
  let remote = new chromeos.cdm.mojom.CdmFactoryDaemonRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.CdmFactoryDaemon',
    'context');
  return remote.$;
};

chromeos.cdm.mojom.CdmFactoryDaemonPtr = chromeos.cdm.mojom.CdmFactoryDaemonRemote;
chromeos.cdm.mojom.CdmFactoryDaemonRequest = chromeos.cdm.mojom.CdmFactoryDaemonPendingReceiver;

