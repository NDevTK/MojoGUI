// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_decoder.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('codec', 0, 0, media.mojom.AudioCodecSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('profile', 8, 0, media.mojom.AudioCodecProfileSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: AudioDecoder
mojo.internal.Struct(
    media.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec, 'media.mojom.AudioDecoder_GetSupportedConfigs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParamsSpec, 'media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParams', [
      mojo.internal.StructField('supported_configs', 0, 0, mojo.internal.Array(media.mojom.SupportedAudioDecoderConfigSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Construct_ParamsSpec, 'media.mojom.AudioDecoder_Construct_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('media_log', 8, 0, mojo.internal.InterfaceProxy(media.mojom.MediaLogRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Initialize_ParamsSpec, 'media.mojom.AudioDecoder_Initialize_Params', [
      mojo.internal.StructField('config', 0, 0, media.mojom.AudioDecoderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cdm_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Initialize_ResponseParamsSpec, 'media.mojom.AudioDecoder_Initialize_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, media.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decoder_type', 8, 0, media.mojom.AudioDecoderTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('needs_bitstream_conversion', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_SetDataSource_ParamsSpec, 'media.mojom.AudioDecoder_SetDataSource_Params', [
      mojo.internal.StructField('receive_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Decode_ParamsSpec, 'media.mojom.AudioDecoder_Decode_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Decode_ResponseParamsSpec, 'media.mojom.AudioDecoder_Decode_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Reset_ParamsSpec, 'media.mojom.AudioDecoder_Reset_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioDecoder_Reset_ResponseParamsSpec, 'media.mojom.AudioDecoder_Reset_ResponseParams', [
    ],
    [[0, 8]]);

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
  getSupportedConfigs() {
    return this.$.getSupportedConfigs();
  }
  construct(client, media_log) {
    return this.$.construct(client, media_log);
  }
  initialize(config, cdm_id) {
    return this.$.initialize(config, cdm_id);
  }
  setDataSource(receive_pipe) {
    return this.$.setDataSource(receive_pipe);
  }
  decode(buffer) {
    return this.$.decode(buffer);
  }
  reset() {
    return this.$.reset();
  }
};

media.mojom.AudioDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioDecoder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getSupportedConfigs() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec,
      media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParamsSpec,
      [],
      false);
  }

  construct(client, media_log) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.AudioDecoder_Construct_ParamsSpec,
      null,
      [client, media_log],
      false);
  }

  initialize(config, cdm_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.AudioDecoder_Initialize_ParamsSpec,
      media.mojom.AudioDecoder_Initialize_ResponseParamsSpec,
      [config, cdm_id],
      false);
  }

  setDataSource(receive_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.AudioDecoder_SetDataSource_ParamsSpec,
      null,
      [receive_pipe],
      false);
  }

  decode(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.AudioDecoder_Decode_ParamsSpec,
      media.mojom.AudioDecoder_Decode_ResponseParamsSpec,
      [buffer],
      false);
  }

  reset() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.AudioDecoder_Reset_ParamsSpec,
      media.mojom.AudioDecoder_Reset_ResponseParamsSpec,
      [],
      false);
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

media.mojom.AudioDecoderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioDecoder', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioDecoder_Construct_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioDecoder_Initialize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioDecoder_SetDataSource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioDecoder_Decode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioDecoder_Reset_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioDecoder_GetSupportedConfigs_ParamsSpec.$.structSpec);
          const result = this.impl.getSupportedConfigs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioDecoder_GetSupportedConfigs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioDecoder_Construct_ParamsSpec.$.structSpec);
          const result = this.impl.construct(params.client, params.media_log);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioDecoder_Initialize_ParamsSpec.$.structSpec);
          const result = this.impl.initialize(params.config, params.cdm_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioDecoder_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioDecoder_SetDataSource_ParamsSpec.$.structSpec);
          const result = this.impl.setDataSource(params.receive_pipe);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioDecoder_Decode_ParamsSpec.$.structSpec);
          const result = this.impl.decode(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioDecoder_Decode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioDecoder_Reset_ParamsSpec.$.structSpec);
          const result = this.impl.reset();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioDecoder_Reset_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.AudioDecoderReceiver = media.mojom.AudioDecoderReceiver;

media.mojom.AudioDecoderPtr = media.mojom.AudioDecoderRemote;
media.mojom.AudioDecoderRequest = media.mojom.AudioDecoderPendingReceiver;


// Interface: AudioDecoderClient
mojo.internal.Struct(
    media.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec, 'media.mojom.AudioDecoderClient_OnBufferDecoded_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.AudioBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioDecoderClient_OnWaiting_ParamsSpec, 'media.mojom.AudioDecoderClient_OnWaiting_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.WaitingReasonSpec.$, null, false, 0, undefined),
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
  onBufferDecoded(buffer) {
    return this.$.onBufferDecoded(buffer);
  }
  onWaiting(reason) {
    return this.$.onWaiting(reason);
  }
};

media.mojom.AudioDecoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioDecoderClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onBufferDecoded(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec,
      null,
      [buffer],
      false);
  }

  onWaiting(reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.AudioDecoderClient_OnWaiting_ParamsSpec,
      null,
      [reason],
      false);
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

media.mojom.AudioDecoderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioDecoderClient', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioDecoderClient_OnWaiting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioDecoderClient_OnBufferDecoded_ParamsSpec.$.structSpec);
          const result = this.impl.onBufferDecoded(params.buffer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioDecoderClient_OnWaiting_ParamsSpec.$.structSpec);
          const result = this.impl.onWaiting(params.reason);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.AudioDecoderClientReceiver = media.mojom.AudioDecoderClientReceiver;

media.mojom.AudioDecoderClientPtr = media.mojom.AudioDecoderClientRemote;
media.mojom.AudioDecoderClientRequest = media.mojom.AudioDecoderClientPendingReceiver;

