// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/cdm_factory_daemon.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};
var arc = arc || {};

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
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('storage', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('cdm', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('output_protection', 24, 0, mojo.internal.InterfaceProxy(chromeos.cdm.mojom.OutputProtectionRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec, 'chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('storage', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('output_protection', 16, 0, mojo.internal.InterfaceProxy(chromeos.cdm.mojom.OutputProtectionRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cdm', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactory_CreateCdm_ParamsSpec, 'chromeos.cdm.mojom.CdmFactory_CreateCdm_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('storage', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('output_protection', 16, 0, mojo.internal.InterfaceProxy(chromeos.cdm.mojom.OutputProtectionRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cdm', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactory_CreateCdm_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactory_CreateCdm_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.cdm.mojom.CreateCdmStatusSpec.$, null, false, 0, undefined),
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
      [client, storage, cdm, output_protection],
      false);
  }

  createCdmDeprecated(client, storage, output_protection, host, cdm) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec,
      null,
      [client, storage, output_protection, host, cdm],
      false);
  }

  createCdm(client, storage, output_protection, host, cdm) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.mojom.CdmFactory_CreateCdm_ParamsSpec,
      chromeos.cdm.mojom.CdmFactory_CreateCdm_ResponseParamsSpec,
      [client, storage, output_protection, host, cdm],
      false);
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

chromeos.cdm.mojom.CdmFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 1: {
          const params = chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dEPRECATED_1(params.client, params.storage, params.cdm, params.output_protection);
          break;
        }
        case 2: {
          const params = chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createCdmDeprecated(params.client, params.storage, params.output_protection, params.host, params.cdm);
          break;
        }
        case 3: {
          const params = chromeos.cdm.mojom.CdmFactory_CreateCdm_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createCdm(params.client, params.storage, params.output_protection, params.host, params.cdm);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmFactory_CreateCdm_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

chromeos.cdm.mojom.CdmFactoryReceiver = chromeos.cdm.mojom.CdmFactoryReceiver;

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
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceProxy(chromeos.cdm.mojom.CdmFactorySpec), null, true, 0, undefined),
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
      mojo.internal.StructField('config_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
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
      mojo.internal.StructField('status', 0, 0, chromeos.cdm.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('stream_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParams', [
      mojo.internal.StructField('slice_header', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
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
      [key_system],
      false);
  }

  removedMethod1() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec,
      null,
      [],
      false);
  }

  connectOemCrypto(oemcryptor, protected_buffer_manager, output_protection) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec,
      null,
      [oemcryptor, protected_buffer_manager, output_protection],
      false);
  }

  removedMethod3() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec,
      null,
      [],
      false);
  }

  getHwConfigData() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParamsSpec,
      [],
      false);
  }

  removedMethod5() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec,
      null,
      [],
      false);
  }

  getHdcp14Key() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParamsSpec,
      [],
      false);
  }

  getAndroidHwKeyData(key_id, hw_identifier) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParamsSpec,
      [key_id, hw_identifier],
      false);
  }

  allocateSecureBuffer(size) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParamsSpec,
      [size],
      false);
  }

  parseEncryptedSliceHeader(secure_handle, offset, stream_data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParamsSpec,
      [secure_handle, offset, stream_data],
      false);
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

chromeos.cdm.mojom.CdmFactoryDaemonReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createFactory(params.key_system);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removedMethod1();
          break;
        }
        case 2: {
          const params = chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connectOemCrypto(params.oemcryptor, params.protected_buffer_manager, params.output_protection);
          break;
        }
        case 3: {
          const params = chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removedMethod3();
          break;
        }
        case 4: {
          const params = chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getHwConfigData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removedMethod5();
          break;
        }
        case 6: {
          const params = chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getHdcp14Key();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAndroidHwKeyData(params.key_id, params.hw_identifier);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.allocateSecureBuffer(params.size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec.$.decode(message.payload);
          const result = this.impl.parseEncryptedSliceHeader(params.secure_handle, params.offset, params.stream_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

chromeos.cdm.mojom.CdmFactoryDaemonReceiver = chromeos.cdm.mojom.CdmFactoryDaemonReceiver;

chromeos.cdm.mojom.CdmFactoryDaemonPtr = chromeos.cdm.mojom.CdmFactoryDaemonRemote;
chromeos.cdm.mojom.CdmFactoryDaemonRequest = chromeos.cdm.mojom.CdmFactoryDaemonPendingReceiver;

