// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_context_for_oopvd.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

media.mojom.DecryptStatusSpec = { $: mojo.internal.Enum() };
media.mojom.CdmContextEventSpec = { $: mojo.internal.Enum() };
media.mojom.CdmContextEventCallback = {};
media.mojom.CdmContextEventCallback.$interfaceName = 'media.mojom.CdmContextEventCallback';
media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD = {};
media.mojom.CdmContextForOOPVD.$interfaceName = 'media.mojom.CdmContextForOOPVD';
media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec = { $: {} };
media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParamsSpec = { $: {} };

// Enum: DecryptStatus
media.mojom.DecryptStatus = {
  kSuccess: 0,
  kNoKey: 1,
  kFailure: 2,
};

// Enum: CdmContextEvent
media.mojom.CdmContextEvent = {
  kHasAdditionalUsableKey: 0,
  kHardwareContextReset: 1,
};

// Interface: CdmContextEventCallback
mojo.internal.Struct(
    media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec, 'media.mojom.CdmContextEventCallback_EventCallback_Params', [
      mojo.internal.StructField('event', 0, 0, media.mojom.CdmContextEventSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.CdmContextEventCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmContextEventCallbackRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmContextEventCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmContextEventCallbackPendingReceiver,
      handle);
    this.$ = new media.mojom.CdmContextEventCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.CdmContextEventCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  eventCallback(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec,
      null,
      [event]);
  }

};

media.mojom.CdmContextEventCallback.getRemote = function() {
  let remote = new media.mojom.CdmContextEventCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmContextEventCallback',
    'context');
  return remote.$;
};

media.mojom.CdmContextEventCallbackPtr = media.mojom.CdmContextEventCallbackRemote;
media.mojom.CdmContextEventCallbackRequest = media.mojom.CdmContextEventCallbackPendingReceiver;


// Interface: CdmContextForOOPVD
mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec, 'media.mojom.CdmContextForOOPVD_GetHwKeyData_Params', [
      mojo.internal.StructField('decrypt_config', 0, 0, media.mojom.DecryptConfigSpec, null, false, 0, undefined),
      mojo.internal.StructField('hw_identifier', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParams', [
      mojo.internal.StructField('status', 8, 0, media.mojom.DecryptStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec, 'media.mojom.CdmContextForOOPVD_RegisterEventCallback_Params', [
      mojo.internal.StructField('callback', 0, 0, mojo.internal.InterfaceProxy(media.mojom.CdmContextEventCallbackRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec, 'media.mojom.CdmContextForOOPVD_GetHwConfigData_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParams', [
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('config_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec, 'media.mojom.CdmContextForOOPVD_GetScreenResolutions_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParams', [
      mojo.internal.StructField('resolutions', 0, 0, mojo.internal.Array(gfx.mojom.SizeSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec, 'media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_Params', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParams', [
      mojo.internal.StructField('secure_buffer', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec, 'media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_Params', [
      mojo.internal.StructField('secure_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('stream_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParams', [
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('slice_header', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec, 'media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.DecoderBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('bytes', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParamsSpec, 'media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParams', [
      mojo.internal.StructField('status', 24, 0, media.mojom.DecryptStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('decoder_buffer', 0, 0, media.mojom.DecoderBufferSpec, null, true, 0, undefined),
      mojo.internal.StructField('bytes', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

media.mojom.CdmContextForOOPVDPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.CdmContextForOOPVDRemote = class {
  static get $interfaceName() {
    return 'media.mojom.CdmContextForOOPVD';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.CdmContextForOOPVDPendingReceiver,
      handle);
    this.$ = new media.mojom.CdmContextForOOPVDRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.CdmContextForOOPVDRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getHwKeyData(decrypt_config, hw_identifier) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec,
      media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParamsSpec,
      [decrypt_config, hw_identifier]);
  }

  registerEventCallback(callback) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec,
      null,
      [callback]);
  }

  getHwConfigData() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec,
      media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParamsSpec,
      []);
  }

  getScreenResolutions() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec,
      media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParamsSpec,
      []);
  }

  allocateSecureBuffer(size) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec,
      media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParamsSpec,
      [size]);
  }

  parseEncryptedSliceHeader(secure_handle, offset, stream_data) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec,
      media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParamsSpec,
      [secure_handle, offset, stream_data]);
  }

  decryptVideoBuffer(buffer, bytes) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec,
      media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParamsSpec,
      [buffer, bytes]);
  }

};

media.mojom.CdmContextForOOPVD.getRemote = function() {
  let remote = new media.mojom.CdmContextForOOPVDRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.CdmContextForOOPVD',
    'context');
  return remote.$;
};

media.mojom.CdmContextForOOPVDPtr = media.mojom.CdmContextForOOPVDRemote;
media.mojom.CdmContextForOOPVDRequest = media.mojom.CdmContextForOOPVDPendingReceiver;

