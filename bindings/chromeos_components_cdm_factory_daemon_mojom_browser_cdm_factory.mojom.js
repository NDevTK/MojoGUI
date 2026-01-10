// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/browser_cdm_factory.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};
var chromeos = chromeos || {};
var components = components || {};
var chromeos = chromeos || {};
var components = components || {};
var chromeos = chromeos || {};
var components = components || {};
var ui = ui || {};
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
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('config_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParams', [
      mojo.internal.StructField('resolutions', 0, 0, mojo.internal.Array(gfx.mojom.SizeSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('status', 8, 0, chromeos.cdm.mojom.DecryptStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
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
      mojo.internal.StructField('offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('stream_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParams', [
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('slice_header', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
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
      [key_system]);
  }

  getOutputProtection(output_protection) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_GetOutputProtection_ParamsSpec,
      null,
      [output_protection]);
  }

  getHwConfigData() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ResponseParamsSpec,
      []);
  }

  getScreenResolutions() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParamsSpec,
      []);
  }

  getAndroidHwKeyData(key_id, hw_identifier) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ResponseParamsSpec,
      [key_id, hw_identifier]);
  }

  allocateSecureBuffer(size) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ResponseParamsSpec,
      [size]);
  }

  parseEncryptedSliceHeader(secure_handle, offset, stream_data) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParamsSpec,
      [secure_handle, offset, stream_data]);
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

chromeos.cdm.mojom.BrowserCdmFactoryPtr = chromeos.cdm.mojom.BrowserCdmFactoryRemote;
chromeos.cdm.mojom.BrowserCdmFactoryRequest = chromeos.cdm.mojom.BrowserCdmFactoryPendingReceiver;

