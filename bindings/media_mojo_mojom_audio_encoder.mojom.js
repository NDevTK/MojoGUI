// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_encoder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('format', 0, 0, media.mojom.AacOutputFormatSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AudioEncoderConfig
mojo.internal.Struct(
    media.mojom.AudioEncoderConfigSpec, 'media.mojom.AudioEncoderConfig', [
      mojo.internal.StructField('codec', 0, 0, media.mojom.AudioCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('aac', 8, 0, media.mojom.AacAudioEncoderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('bitrate', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('channel_count', 24, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: EncodedAudioBuffer
mojo.internal.Struct(
    media.mojom.EncodedAudioBufferSpec, 'media.mojom.EncodedAudioBuffer', [
      mojo.internal.StructField('params', 0, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duration', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AudioEncoder
mojo.internal.Struct(
    media.mojom.AudioEncoder_Initialize_ParamsSpec, 'media.mojom.AudioEncoder_Initialize_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('config', 8, 0, media.mojom.AudioEncoderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioEncoder_Initialize_ResponseParamsSpec, 'media.mojom.AudioEncoder_Initialize_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.EncoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioEncoder_Encode_ParamsSpec, 'media.mojom.AudioEncoder_Encode_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.AudioBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioEncoder_Encode_ResponseParamsSpec, 'media.mojom.AudioEncoder_Encode_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.EncoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioEncoder_Flush_ParamsSpec, 'media.mojom.AudioEncoder_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioEncoder_Flush_ResponseParamsSpec, 'media.mojom.AudioEncoder_Flush_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.EncoderStatusSpec.$, null, false, 0, undefined),
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
      [client, config],
      false);
  }

  encode(buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioEncoder_Encode_ParamsSpec,
      media.mojom.AudioEncoder_Encode_ResponseParamsSpec,
      [buffer],
      false);
  }

  flush() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.AudioEncoder_Flush_ParamsSpec,
      media.mojom.AudioEncoder_Flush_ResponseParamsSpec,
      [],
      false);
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

media.mojom.AudioEncoderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.AudioEncoder_Initialize_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.client, params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioEncoder_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = media.mojom.AudioEncoder_Encode_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.encode');
          const result = this.impl.encode(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioEncoder_Encode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = media.mojom.AudioEncoder_Flush_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioEncoder_Flush_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.AudioEncoderReceiver = media.mojom.AudioEncoderReceiver;

media.mojom.AudioEncoderPtr = media.mojom.AudioEncoderRemote;
media.mojom.AudioEncoderRequest = media.mojom.AudioEncoderPendingReceiver;


// Interface: AudioEncoderClient
mojo.internal.Struct(
    media.mojom.AudioEncoderClient_OnEncodedBufferReady_ParamsSpec, 'media.mojom.AudioEncoderClient_OnEncodedBufferReady_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.EncodedAudioBufferSpec.$, null, false, 0, undefined),
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
      [buffer, description],
      false);
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

media.mojom.AudioEncoderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.AudioEncoderClient_OnEncodedBufferReady_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onEncodedBufferReady');
          const result = this.impl.onEncodedBufferReady(params.buffer, params.description);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.AudioEncoderClientReceiver = media.mojom.AudioEncoderClientReceiver;

media.mojom.AudioEncoderClientPtr = media.mojom.AudioEncoderClientRemote;
media.mojom.AudioEncoderClientRequest = media.mojom.AudioEncoderClientPendingReceiver;

