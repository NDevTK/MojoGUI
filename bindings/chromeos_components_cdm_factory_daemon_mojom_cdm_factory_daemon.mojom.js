// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/cdm_factory_daemon.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.cdm.mojom = chromeos.cdm.cdm.mojom || {};


// Enum: CreateCdmStatus
chromeos.cdm.cdm.mojom.mojom.CreateCdmStatus = {
  kNoMoreInstances: 0,
  kInsufficientGpuResources: 1,
};
chromeos.cdm.cdm.mojom.mojom.CreateCdmStatusSpec = { $: mojo.internal.Enum() };

// Interface: CdmFactory
chromeos.cdm.cdm.mojom.mojom.CdmFactory = {};

chromeos.cdm.cdm.mojom.mojom.CdmFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.cdm.mojom.mojom.CdmFactoryRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.CdmFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.cdm.mojom.mojom.CdmFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.cdm.mojom.mojom.CdmFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dEPRECATED_1(client, storage, cdm, output_protection) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.CdmFactory_DEPRECATED_1_ParamsSpec,
      null,
      [client, storage, cdm, output_protection]);
  }

  createCdmDeprecated(client, storage, output_protection, host, cdm) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec,
      null,
      [client, storage, output_protection, host, cdm]);
  }

  createCdm(client, storage, output_protection, host, cdm) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.CdmFactory_CreateCdm_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.CdmFactory_CreateCdm_ResponseParamsSpec,
      [client, storage, output_protection, host, cdm]);
  }

};

chromeos.cdm.cdm.mojom.mojom.CdmFactory.getRemote = function() {
  let remote = new chromeos.cdm.cdm.mojom.mojom.CdmFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.CdmFactory',
    'context');
  return remote.$;
};

// ParamsSpec for DEPRECATED_1
chromeos.cdm.cdm.mojom.mojom.CdmFactory_DEPRECATED_1_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactory.DEPRECATED_1_Params',
      packedSize: 40,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(chromeos.cdm.mojom.ContentDecryptionModuleClientRemote), nullable: false, minVersion: 0 },
        { name: 'storage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(chromeos.cdm.mojom.CdmStorageRemote), nullable: false, minVersion: 0 },
        { name: 'cdm', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(chromeos.cdm.mojom.ContentDecryptionModuleRemote), nullable: false, minVersion: 0 },
        { name: 'output_protection', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.cdm.mojom.OutputProtectionRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for CreateCdmDeprecated
chromeos.cdm.cdm.mojom.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactory.CreateCdmDeprecated_Params',
      packedSize: 48,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(chromeos.cdm.mojom.ContentDecryptionModuleClientRemote), nullable: false, minVersion: 0 },
        { name: 'storage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(chromeos.cdm.mojom.CdmStorageRemote), nullable: false, minVersion: 0 },
        { name: 'output_protection', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.cdm.mojom.OutputProtectionRemote), nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cdm', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(chromeos.cdm.mojom.ContentDecryptionModuleRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for CreateCdm
chromeos.cdm.cdm.mojom.mojom.CdmFactory_CreateCdm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactory.CreateCdm_Params',
      packedSize: 48,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(chromeos.cdm.mojom.ContentDecryptionModuleClientRemote), nullable: false, minVersion: 0 },
        { name: 'storage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(chromeos.cdm.mojom.CdmStorageRemote), nullable: false, minVersion: 0 },
        { name: 'output_protection', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.cdm.mojom.OutputProtectionRemote), nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cdm', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(chromeos.cdm.mojom.ContentDecryptionModuleRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.CdmFactory_CreateCdm_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactory.CreateCdm_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.cdm.mojom.CreateCdmStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.cdm.cdm.mojom.mojom.CdmFactoryPtr = chromeos.cdm.cdm.mojom.mojom.CdmFactoryRemote;
chromeos.cdm.cdm.mojom.mojom.CdmFactoryRequest = chromeos.cdm.cdm.mojom.mojom.CdmFactoryPendingReceiver;


// Interface: CdmFactoryDaemon
chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon = {};

chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemonPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemonRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.CdmFactoryDaemon';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemonPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemonRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemonRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createFactory(key_system) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_CreateFactory_ResponseParamsSpec,
      [key_system]);
  }

  removedMethod1() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec,
      null,
      []);
  }

  connectOemCrypto(oemcryptor, protected_buffer_manager, output_protection) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec,
      null,
      [oemcryptor, protected_buffer_manager, output_protection]);
  }

  removedMethod3() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec,
      null,
      []);
  }

  getHwConfigData() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParamsSpec,
      []);
  }

  removedMethod5() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec,
      null,
      []);
  }

  getHdcp14Key() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParamsSpec,
      []);
  }

  getAndroidHwKeyData(key_id, hw_identifier) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParamsSpec,
      [key_id, hw_identifier]);
  }

  allocateSecureBuffer(size) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParamsSpec,
      [size]);
  }

  parseEncryptedSliceHeader(secure_handle, offset, stream_data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec,
      chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParamsSpec,
      [secure_handle, offset, stream_data]);
  }

};

chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon.getRemote = function() {
  let remote = new chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemonRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.CdmFactoryDaemon',
    'context');
  return remote.$;
};

// ParamsSpec for CreateFactory
chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.CreateFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'key_system', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_CreateFactory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.CreateFactory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.cdm.mojom.CdmFactoryRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemovedMethod1
chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.RemovedMethod1_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ConnectOemCrypto
chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.ConnectOemCrypto_Params',
      packedSize: 32,
      fields: [
        { name: 'oemcryptor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(arc.mojom.OemCryptoServiceRemote), nullable: false, minVersion: 0 },
        { name: 'protected_buffer_manager', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ProtectedBufferManagerRemote), nullable: false, minVersion: 0 },
        { name: 'output_protection', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.cdm.mojom.OutputProtectionRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for RemovedMethod3
chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.RemovedMethod3_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetHwConfigData
chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.GetHwConfigData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.GetHwConfigData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'config_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RemovedMethod5
chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.RemovedMethod5_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetHdcp14Key
chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.GetHdcp14Key_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.GetHdcp14Key_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'hdcp_key_base64', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAndroidHwKeyData
chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.GetAndroidHwKeyData_Params',
      packedSize: 24,
      fields: [
        { name: 'key_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'hw_identifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.GetAndroidHwKeyData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: chromeos.cdm.mojom.DecryptStatusSpec, nullable: false, minVersion: 0 },
        { name: 'key_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AllocateSecureBuffer
chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.AllocateSecureBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.AllocateSecureBuffer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ParseEncryptedSliceHeader
chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.ParseEncryptedSliceHeader_Params',
      packedSize: 32,
      fields: [
        { name: 'secure_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'stream_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cdm.mojom.CdmFactoryDaemon.ParseEncryptedSliceHeader_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'slice_header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemonPtr = chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemonRemote;
chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemonRequest = chromeos.cdm.cdm.mojom.mojom.CdmFactoryDaemonPendingReceiver;

