// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_decoder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: SupportedAudioDecoderConfig
media.mojom.SupportedAudioDecoderConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SupportedAudioDecoderConfig',
      packedSize: 16,
      fields: [
        { name: 'profile', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: AudioDecoder
media.mojom.AudioDecoder = {};

media.mojom.AudioDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioDecoderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioDecoderPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSupportedConfigs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec,
      media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParamsSpec,
      []);
  }

  construct(client, media_log) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioDecoder_Construct_ParamsSpec,
      null,
      [client, media_log]);
  }

  initialize(config, cdm_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.AudioDecoder_Initialize_ParamsSpec,
      media.mojom.AudioDecoder_Initialize_ResponseParamsSpec,
      [config, cdm_id]);
  }

  setDataSource(receive_pipe) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.AudioDecoder_SetDataSource_ParamsSpec,
      null,
      [receive_pipe]);
  }

  decode(buffer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.AudioDecoder_Decode_ParamsSpec,
      media.mojom.AudioDecoder_Decode_ResponseParamsSpec,
      [buffer]);
  }

  reset() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.AudioDecoder_Reset_ParamsSpec,
      null,
      []);
  }

};

media.mojom.AudioDecoder.getRemote = function() {
  let remote = new media.mojom.AudioDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioDecoder',
    'context');
  return remote.$;
};

// ParamsSpec for GetSupportedConfigs
media.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.GetSupportedConfigs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.GetSupportedConfigs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supported_configs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Construct
media.mojom.AudioDecoder_Construct_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.Construct_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'media_log', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Initialize
media.mojom.AudioDecoder_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.Initialize_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'cdm_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.AudioDecoder_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.Initialize_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'decoder_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'needs_bitstream_conversion', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetDataSource
media.mojom.AudioDecoder_SetDataSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.SetDataSource_Params',
      packedSize: 16,
      fields: [
        { name: 'receive_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Decode
media.mojom.AudioDecoder_Decode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.Decode_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.AudioDecoder_Decode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.Decode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Reset
media.mojom.AudioDecoder_Reset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoder.Reset_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioDecoderPtr = media.mojom.AudioDecoderRemote;
media.mojom.AudioDecoderRequest = media.mojom.AudioDecoderPendingReceiver;


// Interface: AudioDecoderClient
media.mojom.AudioDecoderClient = {};

media.mojom.AudioDecoderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioDecoderClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioDecoderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioDecoderClientPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioDecoderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioDecoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBufferDecoded(buffer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec,
      null,
      [buffer]);
  }

  onWaiting(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioDecoderClient_OnWaiting_ParamsSpec,
      null,
      [reason]);
  }

};

media.mojom.AudioDecoderClient.getRemote = function() {
  let remote = new media.mojom.AudioDecoderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioDecoderClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnBufferDecoded
media.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoderClient.OnBufferDecoded_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWaiting
media.mojom.AudioDecoderClient_OnWaiting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioDecoderClient.OnWaiting_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioDecoderClientPtr = media.mojom.AudioDecoderClientRemote;
media.mojom.AudioDecoderClientRequest = media.mojom.AudioDecoderClientPendingReceiver;

