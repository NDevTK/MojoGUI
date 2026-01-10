// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_decoder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: SupportedAudioDecoderConfig
media.mojom.mojom.SupportedAudioDecoderConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SupportedAudioDecoderConfig',
      packedSize: 24,
      fields: [
        { name: 'codec', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioCodecSpec, nullable: false, minVersion: 0 },
        { name: 'profile', packedOffset: 8, packedBitOffset: 0, type: media.mojom.AudioCodecProfileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: AudioDecoder
media.mojom.mojom.AudioDecoder = {};

media.mojom.mojom.AudioDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AudioDecoderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AudioDecoderPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AudioDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AudioDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSupportedConfigs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec,
      media.mojom.mojom.AudioDecoder_GetSupportedConfigs_ResponseParamsSpec,
      []);
  }

  construct(client, media_log) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.AudioDecoder_Construct_ParamsSpec,
      null,
      [client, media_log]);
  }

  initialize(config, cdm_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.AudioDecoder_Initialize_ParamsSpec,
      media.mojom.mojom.AudioDecoder_Initialize_ResponseParamsSpec,
      [config, cdm_id]);
  }

  setDataSource(receive_pipe) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.AudioDecoder_SetDataSource_ParamsSpec,
      null,
      [receive_pipe]);
  }

  decode(buffer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.mojom.AudioDecoder_Decode_ParamsSpec,
      media.mojom.mojom.AudioDecoder_Decode_ResponseParamsSpec,
      [buffer]);
  }

  reset() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.mojom.AudioDecoder_Reset_ParamsSpec,
      null,
      []);
  }

};

media.mojom.mojom.AudioDecoder.getRemote = function() {
  let remote = new media.mojom.mojom.AudioDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioDecoder',
    'context');
  return remote.$;
};

// ParamsSpec for GetSupportedConfigs
media.mojom.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.GetSupportedConfigs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.mojom.AudioDecoder_GetSupportedConfigs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.GetSupportedConfigs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supported_configs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.SupportedAudioDecoderConfigSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Construct
media.mojom.mojom.AudioDecoder_Construct_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.Construct_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(media.mojom.AudioDecoderClientRemote), nullable: false, minVersion: 0 },
        { name: 'media_log', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.MediaLogRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Initialize
media.mojom.mojom.AudioDecoder_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.Initialize_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioDecoderConfigSpec, nullable: false, minVersion: 0 },
        { name: 'cdm_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.mojom.AudioDecoder_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.Initialize_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderStatusSpec, nullable: false, minVersion: 0 },
        { name: 'needs_bitstream_conversion', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'decoder_type', packedOffset: 8, packedBitOffset: 0, type: media.mojom.AudioDecoderTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetDataSource
media.mojom.mojom.AudioDecoder_SetDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.SetDataSource_Params',
      packedSize: 16,
      fields: [
        { name: 'receive_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Decode
media.mojom.mojom.AudioDecoder_Decode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.Decode_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.mojom.AudioDecoder_Decode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.Decode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Reset
media.mojom.mojom.AudioDecoder_Reset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.Reset_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AudioDecoderPtr = media.mojom.mojom.AudioDecoderRemote;
media.mojom.mojom.AudioDecoderRequest = media.mojom.mojom.AudioDecoderPendingReceiver;


// Interface: AudioDecoderClient
media.mojom.mojom.AudioDecoderClient = {};

media.mojom.mojom.AudioDecoderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AudioDecoderClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioDecoderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AudioDecoderClientPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AudioDecoderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AudioDecoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBufferDecoded(buffer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec,
      null,
      [buffer]);
  }

  onWaiting(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.AudioDecoderClient_OnWaiting_ParamsSpec,
      null,
      [reason]);
  }

};

media.mojom.mojom.AudioDecoderClient.getRemote = function() {
  let remote = new media.mojom.mojom.AudioDecoderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioDecoderClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnBufferDecoded
media.mojom.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoderClient.OnBufferDecoded_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnWaiting
media.mojom.mojom.AudioDecoderClient_OnWaiting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoderClient.OnWaiting_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: media.mojom.WaitingReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AudioDecoderClientPtr = media.mojom.mojom.AudioDecoderClientRemote;
media.mojom.mojom.AudioDecoderClientRequest = media.mojom.mojom.AudioDecoderClientPendingReceiver;

