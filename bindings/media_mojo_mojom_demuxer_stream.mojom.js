// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/demuxer_stream.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.DemuxerStream = {};
media.mojom.DemuxerStream.$interfaceName = 'media.mojom.DemuxerStream';
media.mojom.DemuxerStream_Initialize_ParamsSpec = { $: {} };
media.mojom.DemuxerStream_Initialize_ResponseParamsSpec = { $: {} };
media.mojom.DemuxerStream_Read_ParamsSpec = { $: {} };
media.mojom.DemuxerStream_Read_ResponseParamsSpec = { $: {} };
media.mojom.DemuxerStream_EnableBitstreamConverter_ParamsSpec = { $: {} };

// Interface: DemuxerStream
mojo.internal.Struct(
    media.mojom.DemuxerStream_Initialize_ParamsSpec, 'media.mojom.DemuxerStream_Initialize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.DemuxerStream_Initialize_ResponseParamsSpec, 'media.mojom.DemuxerStream_Initialize_ResponseParams', [
      mojo.internal.StructField('type', 0, 0, media.mojom.TypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('audio_config', 16, 0, media.mojom.AudioDecoderConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('video_config', 24, 0, media.mojom.VideoDecoderConfigSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media.mojom.DemuxerStream_Read_ParamsSpec, 'media.mojom.DemuxerStream_Read_Params', [
      mojo.internal.StructField('count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.DemuxerStream_Read_ResponseParamsSpec, 'media.mojom.DemuxerStream_Read_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.StatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('batch_buffers', 8, 0, mojo.internal.Array(media.mojom.DecoderBufferSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('audio_config', 16, 0, media.mojom.AudioDecoderConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('video_config', 24, 0, media.mojom.VideoDecoderConfigSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media.mojom.DemuxerStream_EnableBitstreamConverter_ParamsSpec, 'media.mojom.DemuxerStream_EnableBitstreamConverter_Params', [
    ],
    [[0, 8]]);

media.mojom.DemuxerStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.DemuxerStreamRemote = class {
  static get $interfaceName() {
    return 'media.mojom.DemuxerStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.DemuxerStreamPendingReceiver,
      handle);
    this.$ = new media.mojom.DemuxerStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize() {
    return this.$.initialize();
  }
  read(count) {
    return this.$.read(count);
  }
  enableBitstreamConverter() {
    return this.$.enableBitstreamConverter();
  }
};

media.mojom.DemuxerStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DemuxerStream', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.DemuxerStream_Initialize_ParamsSpec,
      media.mojom.DemuxerStream_Initialize_ResponseParamsSpec,
      [],
      false);
  }

  read(count) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.DemuxerStream_Read_ParamsSpec,
      media.mojom.DemuxerStream_Read_ResponseParamsSpec,
      [count],
      false);
  }

  enableBitstreamConverter() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.DemuxerStream_EnableBitstreamConverter_ParamsSpec,
      null,
      [],
      false);
  }

};

media.mojom.DemuxerStream.getRemote = function() {
  let remote = new media.mojom.DemuxerStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.DemuxerStream',
    'context');
  return remote.$;
};

media.mojom.DemuxerStreamReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DemuxerStream', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(media.mojom.DemuxerStream_Initialize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.DemuxerStream_Read_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.DemuxerStream_EnableBitstreamConverter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.DemuxerStream_Initialize_ParamsSpec.$.structSpec);
          const result = this.impl.initialize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.DemuxerStream_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.DemuxerStream_Read_ParamsSpec.$.structSpec);
          const result = this.impl.read(params.count);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.DemuxerStream_Read_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.DemuxerStream_EnableBitstreamConverter_ParamsSpec.$.structSpec);
          const result = this.impl.enableBitstreamConverter();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.DemuxerStreamReceiver = media.mojom.DemuxerStreamReceiver;

media.mojom.DemuxerStreamPtr = media.mojom.DemuxerStreamRemote;
media.mojom.DemuxerStreamRequest = media.mojom.DemuxerStreamPendingReceiver;

