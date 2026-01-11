// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/cdm_factory_daemon.mojom
// Module: chromeos.cdm.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  dEPRECATED_1(client, storage, cdm, output_protection) {
    return this.$.dEPRECATED_1(client, storage, cdm, output_protection);
  }
  createCdmDeprecated(client, storage, output_protection, host, cdm) {
    return this.$.createCdmDeprecated(client, storage, output_protection, host, cdm);
  }
  createCdm(client, storage, output_protection, host, cdm) {
    return this.$.createCdm(client, storage, output_protection, host, cdm);
  }
};

chromeos.cdm.mojom.CdmFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CdmFactory', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  dEPRECATED_1(client, storage, cdm, output_protection) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_ParamsSpec,
      null,
      [client, storage, cdm, output_protection],
      false);
  }

  createCdmDeprecated(client, storage, output_protection, host, cdm) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec,
      null,
      [client, storage, output_protection, host, cdm],
      false);
  }

  createCdm(client, storage, output_protection, host, cdm) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CdmFactory', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactory_CreateCdm_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactory_DEPRECATED_1_ParamsSpec.$.structSpec);
          const result = this.impl.dEPRECATED_1(params.client, params.storage, params.cdm, params.output_protection);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactory_CreateCdmDeprecated_ParamsSpec.$.structSpec);
          const result = this.impl.createCdmDeprecated(params.client, params.storage, params.output_protection, params.host, params.cdm);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactory_CreateCdm_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
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
  createFactory(key_system) {
    return this.$.createFactory(key_system);
  }
  removedMethod1() {
    return this.$.removedMethod1();
  }
  connectOemCrypto(oemcryptor, protected_buffer_manager, output_protection) {
    return this.$.connectOemCrypto(oemcryptor, protected_buffer_manager, output_protection);
  }
  removedMethod3() {
    return this.$.removedMethod3();
  }
  getHwConfigData() {
    return this.$.getHwConfigData();
  }
  removedMethod5() {
    return this.$.removedMethod5();
  }
  getHdcp14Key() {
    return this.$.getHdcp14Key();
  }
  getAndroidHwKeyData(key_id, hw_identifier) {
    return this.$.getAndroidHwKeyData(key_id, hw_identifier);
  }
  allocateSecureBuffer(size) {
    return this.$.allocateSecureBuffer(size);
  }
  parseEncryptedSliceHeader(secure_handle, offset, stream_data) {
    return this.$.parseEncryptedSliceHeader(secure_handle, offset, stream_data);
  }
};

chromeos.cdm.mojom.CdmFactoryDaemonRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CdmFactoryDaemon', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
    ]);
  }

  createFactory(key_system) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ResponseParamsSpec,
      [key_system],
      false);
  }

  removedMethod1() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec,
      null,
      [],
      false);
  }

  connectOemCrypto(oemcryptor, protected_buffer_manager, output_protection) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec,
      null,
      [oemcryptor, protected_buffer_manager, output_protection],
      false);
  }

  removedMethod3() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec,
      null,
      [],
      false);
  }

  getHwConfigData() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ResponseParamsSpec,
      [],
      false);
  }

  removedMethod5() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec,
      null,
      [],
      false);
  }

  getHdcp14Key() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ResponseParamsSpec,
      [],
      false);
  }

  getAndroidHwKeyData(key_id, hw_identifier) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ResponseParamsSpec,
      [key_id, hw_identifier],
      false);
  }

  allocateSecureBuffer(size) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec,
      chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ResponseParamsSpec,
      [size],
      false);
  }

  parseEncryptedSliceHeader(secure_handle, offset, stream_data) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CdmFactoryDaemon', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_CreateFactory_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod1_ParamsSpec.$.structSpec);
          const result = this.impl.removedMethod1();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_ConnectOemCrypto_ParamsSpec.$.structSpec);
          const result = this.impl.connectOemCrypto(params.oemcryptor, params.protected_buffer_manager, params.output_protection);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod3_ParamsSpec.$.structSpec);
          const result = this.impl.removedMethod3();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_GetHwConfigData_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_RemovedMethod5_ParamsSpec.$.structSpec);
          const result = this.impl.removedMethod5();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_GetHdcp14Key_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_GetAndroidHwKeyData_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_AllocateSecureBuffer_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cdm.mojom.CdmFactoryDaemon_ParseEncryptedSliceHeader_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
  }
};

chromeos.cdm.mojom.CdmFactoryDaemonReceiver = chromeos.cdm.mojom.CdmFactoryDaemonReceiver;

chromeos.cdm.mojom.CdmFactoryDaemonPtr = chromeos.cdm.mojom.CdmFactoryDaemonRemote;
chromeos.cdm.mojom.CdmFactoryDaemonRequest = chromeos.cdm.mojom.CdmFactoryDaemonPendingReceiver;

