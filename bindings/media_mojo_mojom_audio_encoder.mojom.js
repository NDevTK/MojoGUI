// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_encoder.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  initialize(client, config) {
    return this.$.initialize(client, config);
  }
  encode(buffer) {
    return this.$.encode(buffer);
  }
  flush() {
    return this.$.flush();
  }
};

media.mojom.AudioEncoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioEncoder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize(client, config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioEncoder_Initialize_ParamsSpec,
      media.mojom.AudioEncoder_Initialize_ResponseParamsSpec,
      [client, config],
      false);
  }

  encode(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.AudioEncoder_Encode_ParamsSpec,
      media.mojom.AudioEncoder_Encode_ResponseParamsSpec,
      [buffer],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioEncoder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioEncoder_Initialize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioEncoder_Encode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioEncoder_Flush_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioEncoder_Initialize_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioEncoder_Encode_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioEncoder_Flush_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
  onEncodedBufferReady(buffer, description) {
    return this.$.onEncodedBufferReady(buffer, description);
  }
};

media.mojom.AudioEncoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioEncoderClient', [
      { explicit: null },
    ]);
  }

  onEncodedBufferReady(buffer, description) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioEncoderClient', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioEncoderClient_OnEncodedBufferReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioEncoderClient_OnEncodedBufferReady_ParamsSpec.$.structSpec);
          const result = this.impl.onEncodedBufferReady(params.buffer, params.description);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.AudioEncoderClientReceiver = media.mojom.AudioEncoderClientReceiver;

media.mojom.AudioEncoderClientPtr = media.mojom.AudioEncoderClientRemote;
media.mojom.AudioEncoderClientRequest = media.mojom.AudioEncoderClientPendingReceiver;

