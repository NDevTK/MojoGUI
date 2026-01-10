// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/browser_cdm_factory.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};
var sandbox = sandbox || {};
var gfx = gfx || {};

chromeos.cdm.mojom.BrowserCdmFactory = {};
chromeos.cdm.mojom.BrowserCdmFactory.$interfaceName = 'chromeos.cdm.mojom.BrowserCdmFactory';
chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetOutputProtection_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParamsSpec = { $: {} };

// Interface: BrowserCdmFactory
mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_Params', [
      mojo.internal.StructField('key_system', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ResponseParams', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceProxy(chromeos.cdm.mojom.CdmFactoryRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetOutputProtection_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetOutputProtection_Params', [
      mojo.internal.StructField('output_protection', 0, 0, mojo.internal.InterfaceRequest(chromeos.cdm.mojom.OutputProtectionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ResponseParams', [
      mojo.internal.StructField('config_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParams', [
      mojo.internal.StructField('resolutions', 0, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_Params', [
      mojo.internal.StructField('key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('hw_identifier', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, chromeos.cdm.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_Params', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ResponseParams', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_Params', [
      mojo.internal.StructField('secure_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('stream_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParams', [
      mojo.internal.StructField('slice_header', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos.cdm.mojom.BrowserCdmFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.BrowserCdmFactoryRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.BrowserCdmFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.BrowserCdmFactoryPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.BrowserCdmFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.mojom.BrowserCdmFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createFactory(key_system) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ResponseParamsSpec,
      [key_system],
      false);
  }

  getOutputProtection(output_protection) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_GetOutputProtection_ParamsSpec,
      null,
      [output_protection],
      false);
  }

  getHwConfigData() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ResponseParamsSpec,
      [],
      false);
  }

  getScreenResolutions() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParamsSpec,
      [],
      false);
  }

  getAndroidHwKeyData(key_id, hw_identifier) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ResponseParamsSpec,
      [key_id, hw_identifier],
      false);
  }

  allocateSecureBuffer(size) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ResponseParamsSpec,
      [size],
      false);
  }

  parseEncryptedSliceHeader(secure_handle, offset, stream_data) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParamsSpec,
      [secure_handle, offset, stream_data],
      false);
  }

};

chromeos.cdm.mojom.BrowserCdmFactory.getRemote = function() {
  let remote = new chromeos.cdm.mojom.BrowserCdmFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.BrowserCdmFactory',
    'context');
  return remote.$;
};

chromeos.cdm.mojom.BrowserCdmFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createFactory(params.key_system);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = chromeos.cdm.mojom.BrowserCdmFactory_GetOutputProtection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getOutputProtection(params.output_protection);
          break;
        }
        case 2: {
          const params = chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getHwConfigData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 3: {
          const params = chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getScreenResolutions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAndroidHwKeyData(params.key_id, params.hw_identifier);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 5: {
          const params = chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.allocateSecureBuffer(params.size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 6: {
          const params = chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ParamsSpec.$.decode(message.payload);
          const result = this.impl.parseEncryptedSliceHeader(params.secure_handle, params.offset, params.stream_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

chromeos.cdm.mojom.BrowserCdmFactoryReceiver = chromeos.cdm.mojom.BrowserCdmFactoryReceiver;

chromeos.cdm.mojom.BrowserCdmFactoryPtr = chromeos.cdm.mojom.BrowserCdmFactoryRemote;
chromeos.cdm.mojom.BrowserCdmFactoryRequest = chromeos.cdm.mojom.BrowserCdmFactoryPendingReceiver;

