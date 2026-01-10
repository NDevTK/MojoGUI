// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_decoder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.SupportedAudioDecoderConfigSpec = { $: {} };
media.mojom.AudioDecoder = {};
media.mojom.AudioDecoder.$interfaceName = 'media.mojom.AudioDecoder';
media.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec = { $: {} };
media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParamsSpec = { $: {} };
media.mojom.AudioDecoder_Construct_ParamsSpec = { $: {} };
media.mojom.AudioDecoder_Initialize_ParamsSpec = { $: {} };
media.mojom.AudioDecoder_Initialize_ResponseParamsSpec = { $: {} };
media.mojom.AudioDecoder_SetDataSource_ParamsSpec = { $: {} };
media.mojom.AudioDecoder_Decode_ParamsSpec = { $: {} };
media.mojom.AudioDecoder_Decode_ResponseParamsSpec = { $: {} };
media.mojom.AudioDecoder_Reset_ParamsSpec = { $: {} };
media.mojom.AudioDecoder_Reset_ResponseParamsSpec = { $: {} };
media.mojom.AudioDecoderClient = {};
media.mojom.AudioDecoderClient.$interfaceName = 'media.mojom.AudioDecoderClient';
media.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec = { $: {} };
media.mojom.AudioDecoderClient_OnWaiting_ParamsSpec = { $: {} };

// Struct: SupportedAudioDecoderConfig
mojo.internal.Struct(
    media.mojom.SupportedAudioDecoderConfigSpec, 'media.mojom.SupportedAudioDecoderConfig', [
      mojo.internal.StructField('codec', 0, 0, media.mojom.AudioCodecSpec, null, false, 0, undefined),
      mojo.internal.StructField('profile', 8, 0, media.mojom.AudioCodecProfileSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: AudioDecoder
mojo.internal.Struct(
    media.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec, 'media.mojom.AudioDecoder_GetSupportedConfigs_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParamsSpec, 'media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParams', [
      mojo.internal.StructField('supported_configs', 0, 0, mojo.internal.Array(media.mojom.SupportedAudioDecoderConfigSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Construct_ParamsSpec, 'media.mojom.AudioDecoder_Construct_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.AssociatedInterfaceProxy(media.mojom.AudioDecoderClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('media_log', 8, 0, mojo.internal.InterfaceProxy(media.mojom.MediaLogRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Initialize_ParamsSpec, 'media.mojom.AudioDecoder_Initialize_Params', [
      mojo.internal.StructField('config', 0, 0, media.mojom.AudioDecoderConfigSpec, null, false, 0, undefined),
      mojo.internal.StructField('cdm_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Initialize_ResponseParamsSpec, 'media.mojom.AudioDecoder_Initialize_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, media.mojom.DecoderStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('needs_bitstream_conversion', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('decoder_type', 8, 0, media.mojom.AudioDecoderTypeSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_SetDataSource_ParamsSpec, 'media.mojom.AudioDecoder_SetDataSource_Params', [
      mojo.internal.StructField('receive_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Decode_ParamsSpec, 'media.mojom.AudioDecoder_Decode_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.DecoderBufferSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Decode_ResponseParamsSpec, 'media.mojom.AudioDecoder_Decode_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.DecoderStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Reset_ParamsSpec, 'media.mojom.AudioDecoder_Reset_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Reset_ResponseParamsSpec, 'media.mojom.AudioDecoder_Reset_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

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
      media.mojom.AudioDecoder_Reset_ResponseParamsSpec,
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

media.mojom.AudioDecoderPtr = media.mojom.AudioDecoderRemote;
media.mojom.AudioDecoderRequest = media.mojom.AudioDecoderPendingReceiver;


// Interface: AudioDecoderClient
mojo.internal.Struct(
    media.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec, 'media.mojom.AudioDecoderClient_OnBufferDecoded_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.AudioBufferSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoderClient_OnWaiting_ParamsSpec, 'media.mojom.AudioDecoderClient_OnWaiting_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.WaitingReasonSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

media.mojom.AudioDecoderClientPtr = media.mojom.AudioDecoderClientRemote;
media.mojom.AudioDecoderClientRequest = media.mojom.AudioDecoderClientPendingReceiver;

