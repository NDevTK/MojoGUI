// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_encoder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.AacOutputFormatSpec = { $: mojo.internal.Enum() };
media.mojom.AacAudioEncoderConfigSpec = { $: {} };
media.mojom.AudioEncoderConfigSpec = { $: {} };
media.mojom.EncodedAudioBufferSpec = { $: {} };
media.mojom.AudioEncoder = {};
media.mojom.AudioEncoder.$interfaceName = 'media.mojom.AudioEncoder';
media.mojom.AudioEncoder_Initialize_ParamsSpec = { $: {} };
media.mojom.AudioEncoder_Initialize_ResponseParamsSpec = { $: {} };
media.mojom.AudioEncoder_Encode_ParamsSpec = { $: {} };
media.mojom.AudioEncoder_Encode_ResponseParamsSpec = { $: {} };
media.mojom.AudioEncoder_Flush_ParamsSpec = { $: {} };
media.mojom.AudioEncoder_Flush_ResponseParamsSpec = { $: {} };
media.mojom.AudioEncoderClient = {};
media.mojom.AudioEncoderClient.$interfaceName = 'media.mojom.AudioEncoderClient';
media.mojom.AudioEncoderClient_OnEncodedBufferReady_ParamsSpec = { $: {} };

// Enum: AacOutputFormat
media.mojom.AacOutputFormat = {
  kAAC: 0,
  kADTS: 1,
};

// Struct: AacAudioEncoderConfig
mojo.internal.Struct(
    media.mojom.AacAudioEncoderConfigSpec, 'media.mojom.AacAudioEncoderConfig', [
      mojo.internal.StructField('format', 0, 0, media.mojom.AacOutputFormatSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AudioEncoderConfig
mojo.internal.Struct(
    media.mojom.AudioEncoderConfigSpec, 'media.mojom.AudioEncoderConfig', [
      mojo.internal.StructField('codec', 0, 0, media.mojom.AudioCodecSpec, null, false, 0, undefined),
      mojo.internal.StructField('channel_count', 24, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('bitrate', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('aac', 8, 0, media.mojom.AacAudioEncoderConfigSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: EncodedAudioBuffer
mojo.internal.Struct(
    media.mojom.EncodedAudioBufferSpec, 'media.mojom.EncodedAudioBuffer', [
      mojo.internal.StructField('params', 0, 0, media.mojom.AudioParametersSpec, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('duration', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AudioEncoder
mojo.internal.Struct(
    media.mojom.AudioEncoder_Initialize_ParamsSpec, 'media.mojom.AudioEncoder_Initialize_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.AssociatedInterfaceProxy(media.mojom.AudioEncoderClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('config', 8, 0, media.mojom.AudioEncoderConfigSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioEncoder_Initialize_ResponseParamsSpec, 'media.mojom.AudioEncoder_Initialize_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.EncoderStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioEncoder_Encode_ParamsSpec, 'media.mojom.AudioEncoder_Encode_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.AudioBufferSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioEncoder_Encode_ResponseParamsSpec, 'media.mojom.AudioEncoder_Encode_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.EncoderStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioEncoder_Flush_ParamsSpec, 'media.mojom.AudioEncoder_Flush_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    media.mojom.AudioEncoder_Flush_ResponseParamsSpec, 'media.mojom.AudioEncoder_Flush_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.EncoderStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioEncoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioEncoderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioEncoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioEncoderPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioEncoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioEncoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(client, config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioEncoder_Initialize_ParamsSpec,
      media.mojom.AudioEncoder_Initialize_ResponseParamsSpec,
      [client, config]);
  }

  encode(buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioEncoder_Encode_ParamsSpec,
      media.mojom.AudioEncoder_Encode_ResponseParamsSpec,
      [buffer]);
  }

  flush() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.AudioEncoder_Flush_ParamsSpec,
      media.mojom.AudioEncoder_Flush_ResponseParamsSpec,
      []);
  }

};

media.mojom.AudioEncoder.getRemote = function() {
  let remote = new media.mojom.AudioEncoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioEncoder',
    'context');
  return remote.$;
};

media.mojom.AudioEncoderPtr = media.mojom.AudioEncoderRemote;
media.mojom.AudioEncoderRequest = media.mojom.AudioEncoderPendingReceiver;


// Interface: AudioEncoderClient
mojo.internal.Struct(
    media.mojom.AudioEncoderClient_OnEncodedBufferReady_ParamsSpec, 'media.mojom.AudioEncoderClient_OnEncodedBufferReady_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.EncodedAudioBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.AudioEncoderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioEncoderClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioEncoderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioEncoderClientPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioEncoderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioEncoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEncodedBufferReady(buffer, description) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioEncoderClient_OnEncodedBufferReady_ParamsSpec,
      null,
      [buffer, description]);
  }

};

media.mojom.AudioEncoderClient.getRemote = function() {
  let remote = new media.mojom.AudioEncoderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioEncoderClient',
    'context');
  return remote.$;
};

media.mojom.AudioEncoderClientPtr = media.mojom.AudioEncoderClientRemote;
media.mojom.AudioEncoderClientRequest = media.mojom.AudioEncoderClientPendingReceiver;

