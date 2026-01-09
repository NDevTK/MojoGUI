// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/fuchsia_media.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: VideoDecoderSecureMemoryMode
media.mojom.VideoDecoderSecureMemoryMode = {
  CLEAR: 0,
  SECURE: 1,
  SECURE_OUTPUT: 2,
};

// Struct: CdmRequest
media.mojom.CdmRequestSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmRequest',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StreamProcessorRequest
media.mojom.StreamProcessorRequestSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.StreamProcessorRequest',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: FuchsiaMediaCdmProvider
media.mojom.FuchsiaMediaCdmProvider = {};

media.mojom.FuchsiaMediaCdmProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.FuchsiaMediaCdmProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FuchsiaMediaCdmProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.FuchsiaMediaCdmProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.FuchsiaMediaCdmProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.FuchsiaMediaCdmProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCdm(key_system, cdm_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec,
      null,
      [key_system, cdm_request]);
  }

};

media.mojom.FuchsiaMediaCdmProvider.getRemote = function() {
  let remote = new media.mojom.FuchsiaMediaCdmProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FuchsiaMediaCdmProvider',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCdm
media.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FuchsiaMediaCdmProvider.CreateCdm_Params',
      packedSize: 24,
      fields: [
        { name: 'key_system', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'cdm_request', packedOffset: 8, packedBitOffset: 0, type: media.mojom.CdmRequestSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.FuchsiaMediaCdmProviderPtr = media.mojom.FuchsiaMediaCdmProviderRemote;
media.mojom.FuchsiaMediaCdmProviderRequest = media.mojom.FuchsiaMediaCdmProviderPendingReceiver;


// Interface: FuchsiaMediaCodecProvider
media.mojom.FuchsiaMediaCodecProvider = {};

media.mojom.FuchsiaMediaCodecProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.FuchsiaMediaCodecProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FuchsiaMediaCodecProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.FuchsiaMediaCodecProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.FuchsiaMediaCodecProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.FuchsiaMediaCodecProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createVideoDecoder(codec, secure_mode, stream_processor_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec,
      null,
      [codec, secure_mode, stream_processor_request]);
  }

  getSupportedVideoDecoderConfigs() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec,
      media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParamsSpec,
      []);
  }

};

media.mojom.FuchsiaMediaCodecProvider.getRemote = function() {
  let remote = new media.mojom.FuchsiaMediaCodecProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FuchsiaMediaCodecProvider',
    'context');
  return remote.$;
};

// ParamsSpec for CreateVideoDecoder
media.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FuchsiaMediaCodecProvider.CreateVideoDecoder_Params',
      packedSize: 32,
      fields: [
        { name: 'codec', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCodecSpec, nullable: false },
        { name: 'secure_mode', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VideoDecoderSecureMemoryModeSpec, nullable: false },
        { name: 'stream_processor_request', packedOffset: 16, packedBitOffset: 0, type: media.mojom.StreamProcessorRequestSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSupportedVideoDecoderConfigs
media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FuchsiaMediaCodecProvider.GetSupportedVideoDecoderConfigs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FuchsiaMediaCodecProvider.GetSupportedVideoDecoderConfigs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supported_configs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.FuchsiaMediaCodecProviderPtr = media.mojom.FuchsiaMediaCodecProviderRemote;
media.mojom.FuchsiaMediaCodecProviderRequest = media.mojom.FuchsiaMediaCodecProviderPendingReceiver;

