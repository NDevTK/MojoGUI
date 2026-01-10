// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_context_for_oopvd.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: DecryptStatus
media.mojom.DecryptStatus = {
  kSuccess: 0,
  kNoKey: 1,
  kFailure: 2,
};
media.mojom.DecryptStatusSpec = { $: mojo.internal.Enum() };

// Enum: CdmContextEvent
media.mojom.CdmContextEvent = {
  kHasAdditionalUsableKey: 0,
  kHardwareContextReset: 1,
};
media.mojom.CdmContextEventSpec = { $: mojo.internal.Enum() };

// Interface: CdmContextEventCallback
media.mojom.CdmContextEventCallback = {};

media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextEventCallback_EventCallback_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmContextEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

// ParamsSpec for EventCallback
media.mojom.CdmContextEventCallback_EventCallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextEventCallback.EventCallback_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmContextEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.CdmContextEventCallbackPtr = media.mojom.CdmContextEventCallbackRemote;
media.mojom.CdmContextEventCallbackRequest = media.mojom.CdmContextEventCallbackPendingReceiver;


// Interface: CdmContextForOOPVD
media.mojom.CdmContextForOOPVD = {};

media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD_GetHwKeyData_Params',
      packedSize: 24,
      fields: [
        { name: 'decrypt_config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecryptConfigSpec, nullable: false, minVersion: 0 },
        { name: 'hw_identifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD_RegisterEventCallback_Params',
      packedSize: 16,
      fields: [
        { name: 'callback', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.CdmContextEventCallbackRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD_GetHwConfigData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD_GetScreenResolutions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_Params',
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

media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_Params',
      packedSize: 32,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderBufferSpec, nullable: false, minVersion: 0 },
        { name: 'bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

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

// ParamsSpec for GetHwKeyData
media.mojom.CdmContextForOOPVD_GetHwKeyData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD.GetHwKeyData_Params',
      packedSize: 24,
      fields: [
        { name: 'decrypt_config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecryptConfigSpec, nullable: false, minVersion: 0 },
        { name: 'hw_identifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.CdmContextForOOPVD_GetHwKeyData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD.GetHwKeyData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: media.mojom.DecryptStatusSpec, nullable: false, minVersion: 0 },
        { name: 'key_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RegisterEventCallback
media.mojom.CdmContextForOOPVD_RegisterEventCallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD.RegisterEventCallback_Params',
      packedSize: 16,
      fields: [
        { name: 'callback', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.CdmContextEventCallbackRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetHwConfigData
media.mojom.CdmContextForOOPVD_GetHwConfigData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD.GetHwConfigData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.CdmContextForOOPVD_GetHwConfigData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD.GetHwConfigData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'config_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetScreenResolutions
media.mojom.CdmContextForOOPVD_GetScreenResolutions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD.GetScreenResolutions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.CdmContextForOOPVD_GetScreenResolutions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD.GetScreenResolutions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'resolutions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.SizeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AllocateSecureBuffer
media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD.AllocateSecureBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.CdmContextForOOPVD_AllocateSecureBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD.AllocateSecureBuffer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'secure_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ParseEncryptedSliceHeader
media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD.ParseEncryptedSliceHeader_Params',
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

media.mojom.CdmContextForOOPVD_ParseEncryptedSliceHeader_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD.ParseEncryptedSliceHeader_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'slice_header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DecryptVideoBuffer
media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD.DecryptVideoBuffer_Params',
      packedSize: 32,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderBufferSpec, nullable: false, minVersion: 0 },
        { name: 'bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

media.mojom.CdmContextForOOPVD_DecryptVideoBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmContextForOOPVD.DecryptVideoBuffer_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'status', packedOffset: 24, packedBitOffset: 0, type: media.mojom.DecryptStatusSpec, nullable: false, minVersion: 0 },
        { name: 'decoder_buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderBufferSpec, nullable: true, minVersion: 0 },
        { name: 'bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
media.mojom.CdmContextForOOPVDPtr = media.mojom.CdmContextForOOPVDRemote;
media.mojom.CdmContextForOOPVDRequest = media.mojom.CdmContextForOOPVDPendingReceiver;

