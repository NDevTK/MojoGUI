// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_encoder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: AacOutputFormat
media.mojom.AacOutputFormat = {
  kAAC: 0,
  kADTS: 1,
};
media.mojom.AacOutputFormatSpec = { $: mojo.internal.Enum() };

// Struct: AacAudioEncoderConfig
media.mojom.AacAudioEncoderConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AacAudioEncoderConfig',
      packedSize: 16,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AacOutputFormatSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AudioEncoderConfig
media.mojom.AudioEncoderConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioEncoderConfig',
      packedSize: 40,
      fields: [
        { name: 'codec', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioCodecSpec, nullable: false, minVersion: 0 },
        { name: 'channel_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'sample_rate', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'bitrate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'aac', packedOffset: 24, packedBitOffset: 0, type: media.mojom.AacAudioEncoderConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: EncodedAudioBuffer
media.mojom.EncodedAudioBufferSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.EncodedAudioBuffer',
      packedSize: 40,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: AudioEncoder
media.mojom.AudioEncoder = {};

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

// ParamsSpec for Initialize
media.mojom.AudioEncoder_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioEncoder.Initialize_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: media.mojom.AudioEncoderConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.AudioEncoder_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.EncoderStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Encode
media.mojom.AudioEncoder_Encode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioEncoder.Encode_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.AudioEncoder_Encode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.EncoderStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Flush
media.mojom.AudioEncoder_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioEncoder.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.AudioEncoder_Flush_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.EncoderStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioEncoderPtr = media.mojom.AudioEncoderRemote;
media.mojom.AudioEncoderRequest = media.mojom.AudioEncoderPendingReceiver;


// Interface: AudioEncoderClient
media.mojom.AudioEncoderClient = {};

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

// ParamsSpec for OnEncodedBufferReady
media.mojom.AudioEncoderClient_OnEncodedBufferReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioEncoderClient.OnEncodedBufferReady_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.EncodedAudioBufferSpec, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioEncoderClientPtr = media.mojom.AudioEncoderClientRemote;
media.mojom.AudioEncoderClientRequest = media.mojom.AudioEncoderClientPendingReceiver;

