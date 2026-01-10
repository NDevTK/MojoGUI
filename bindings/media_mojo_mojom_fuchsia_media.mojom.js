// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/fuchsia_media.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: VideoDecoderSecureMemoryMode
media.mojom.mojom.VideoDecoderSecureMemoryMode = {
  CLEAR: 0,
  SECURE: 1,
  SECURE_OUTPUT: 2,
};
media.mojom.mojom.VideoDecoderSecureMemoryModeSpec = { $: mojo.internal.Enum() };

// Struct: CdmRequest
media.mojom.mojom.CdmRequestSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmRequest',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: StreamProcessorRequest
media.mojom.mojom.StreamProcessorRequestSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.StreamProcessorRequest',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: FuchsiaMediaCdmProvider
media.mojom.mojom.FuchsiaMediaCdmProvider = {};

media.mojom.mojom.FuchsiaMediaCdmProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.FuchsiaMediaCdmProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FuchsiaMediaCdmProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.FuchsiaMediaCdmProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.FuchsiaMediaCdmProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.FuchsiaMediaCdmProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCdm(key_system, cdm_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec,
      null,
      [key_system, cdm_request]);
  }

};

media.mojom.mojom.FuchsiaMediaCdmProvider.getRemote = function() {
  let remote = new media.mojom.mojom.FuchsiaMediaCdmProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FuchsiaMediaCdmProvider',
    'context');
  return remote.$;
};

// ParamsSpec for CreateCdm
media.mojom.mojom.FuchsiaMediaCdmProvider_CreateCdm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FuchsiaMediaCdmProvider.CreateCdm_Params',
      packedSize: 24,
      fields: [
        { name: 'key_system', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cdm_request', packedOffset: 8, packedBitOffset: 0, type: media.mojom.CdmRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.FuchsiaMediaCdmProviderPtr = media.mojom.mojom.FuchsiaMediaCdmProviderRemote;
media.mojom.mojom.FuchsiaMediaCdmProviderRequest = media.mojom.mojom.FuchsiaMediaCdmProviderPendingReceiver;


// Interface: FuchsiaMediaCodecProvider
media.mojom.mojom.FuchsiaMediaCodecProvider = {};

media.mojom.mojom.FuchsiaMediaCodecProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.FuchsiaMediaCodecProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.FuchsiaMediaCodecProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.FuchsiaMediaCodecProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.FuchsiaMediaCodecProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.FuchsiaMediaCodecProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createVideoDecoder(codec, secure_mode, stream_processor_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec,
      null,
      [codec, secure_mode, stream_processor_request]);
  }

  getSupportedVideoDecoderConfigs() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec,
      media.mojom.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParamsSpec,
      []);
  }

};

media.mojom.mojom.FuchsiaMediaCodecProvider.getRemote = function() {
  let remote = new media.mojom.mojom.FuchsiaMediaCodecProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.FuchsiaMediaCodecProvider',
    'context');
  return remote.$;
};

// ParamsSpec for CreateVideoDecoder
media.mojom.mojom.FuchsiaMediaCodecProvider_CreateVideoDecoder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FuchsiaMediaCodecProvider.CreateVideoDecoder_Params',
      packedSize: 32,
      fields: [
        { name: 'codec', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCodecSpec, nullable: false, minVersion: 0 },
        { name: 'secure_mode', packedOffset: 16, packedBitOffset: 0, type: media.mojom.VideoDecoderSecureMemoryModeSpec, nullable: false, minVersion: 0 },
        { name: 'stream_processor_request', packedOffset: 8, packedBitOffset: 0, type: media.mojom.StreamProcessorRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetSupportedVideoDecoderConfigs
media.mojom.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FuchsiaMediaCodecProvider.GetSupportedVideoDecoderConfigs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.mojom.FuchsiaMediaCodecProvider_GetSupportedVideoDecoderConfigs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.FuchsiaMediaCodecProvider.GetSupportedVideoDecoderConfigs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supported_configs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.SupportedVideoDecoderConfigSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.FuchsiaMediaCodecProviderPtr = media.mojom.mojom.FuchsiaMediaCodecProviderRemote;
media.mojom.mojom.FuchsiaMediaCodecProviderRequest = media.mojom.mojom.FuchsiaMediaCodecProviderPendingReceiver;

