// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_decoder.mojom
// Module: arc.mojom

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var sandbox = sandbox || {};

arc.mojom.DecoderStatusSpec = { $: mojo.internal.Enum() };
arc.mojom.DecoderBufferSpec = { $: {} };
arc.mojom.BufferSpec = { $: {} };
arc.mojom.VideoDecoderConfigSpec = { $: {} };
arc.mojom.VideoDecoder = {};
arc.mojom.VideoDecoder.$interfaceName = 'arc.mojom.VideoDecoder';
arc.mojom.VideoDecoder_Initialize_ParamsSpec = { $: {} };
arc.mojom.VideoDecoder_Initialize_ResponseParamsSpec = { $: {} };
arc.mojom.VideoDecoder_Decode_ParamsSpec = { $: {} };
arc.mojom.VideoDecoder_Decode_ResponseParamsSpec = { $: {} };
arc.mojom.VideoDecoder_Reset_ParamsSpec = { $: {} };
arc.mojom.VideoDecoder_Reset_ResponseParamsSpec = { $: {} };
arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec = { $: {} };
arc.mojom.VideoDecoderClient = {};
arc.mojom.VideoDecoderClient.$interfaceName = 'arc.mojom.VideoDecoderClient';
arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec = { $: {} };
arc.mojom.VideoDecoderClient_OnError_ParamsSpec = { $: {} };

// Enum: DecoderStatus
arc.mojom.DecoderStatus = {
  OK: 0,
  ABORTED: 1,
  FAILED: 2,
  INVALID_ARGUMENT: 3,
  CREATION_FAILED: 4,
};

// Union: DecoderBuffer
mojo.internal.Union(
    arc.mojom.DecoderBufferSpec, 'arc.mojom.DecoderBuffer', {
      'buffer': {
        'ordinal': 0,
        'type': arc.mojom.BufferSpec.$,
        'nullable': false,
      },
      'end_of_stream': {
        'ordinal': 1,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
    });

// Struct: Buffer
mojo.internal.Struct(
    arc.mojom.BufferSpec, 'arc.mojom.Buffer', [
      mojo.internal.StructField('timestamp', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('handle_fd', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VideoDecoderConfig
mojo.internal.Struct(
    arc.mojom.VideoDecoderConfigSpec, 'arc.mojom.VideoDecoderConfig', [
      mojo.internal.StructField('profile', 0, 0, arc.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('coded_size', 8, 0, arc.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: VideoDecoder
mojo.internal.Struct(
    arc.mojom.VideoDecoder_Initialize_ParamsSpec, 'arc.mojom.VideoDecoder_Initialize_Params', [
      mojo.internal.StructField('config', 0, 0, arc.mojom.VideoDecoderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(arc.mojom.VideoDecoderClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('video_frame_pool', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoder_Initialize_ResponseParamsSpec, 'arc.mojom.VideoDecoder_Initialize_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoder_Decode_ParamsSpec, 'arc.mojom.VideoDecoder_Decode_Params', [
      mojo.internal.StructField('buffer', 0, 0, arc.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoder_Decode_ResponseParamsSpec, 'arc.mojom.VideoDecoder_Decode_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoder_Reset_ParamsSpec, 'arc.mojom.VideoDecoder_Reset_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoder_Reset_ResponseParamsSpec, 'arc.mojom.VideoDecoder_Reset_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec, 'arc.mojom.VideoDecoder_ReleaseVideoFrame_Params', [
      mojo.internal.StructField('video_frame_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.VideoDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoDecoderRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoDecoderPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize(config, client, video_frame_pool) {
    return this.$.initialize(config, client, video_frame_pool);
  }
  decode(buffer) {
    return this.$.decode(buffer);
  }
  reset() {
    return this.$.reset();
  }
  releaseVideoFrame(video_frame_id) {
    return this.$.releaseVideoFrame(video_frame_id);
  }
};

arc.mojom.VideoDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoDecoder', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  initialize(config, client, video_frame_pool) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.VideoDecoder_Initialize_ParamsSpec,
      arc.mojom.VideoDecoder_Initialize_ResponseParamsSpec,
      [config, client, video_frame_pool],
      false);
  }

  decode(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.VideoDecoder_Decode_ParamsSpec,
      arc.mojom.VideoDecoder_Decode_ResponseParamsSpec,
      [buffer],
      false);
  }

  reset() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.VideoDecoder_Reset_ParamsSpec,
      arc.mojom.VideoDecoder_Reset_ResponseParamsSpec,
      [],
      false);
  }

  releaseVideoFrame(video_frame_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec,
      null,
      [video_frame_id],
      false);
  }

};

arc.mojom.VideoDecoder.getRemote = function() {
  let remote = new arc.mojom.VideoDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoDecoder',
    'context');
  return remote.$;
};

arc.mojom.VideoDecoderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoDecoder', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
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
             decoder.decodeStructInline(arc.mojom.VideoDecoder_Initialize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoDecoder_Decode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoDecoder_Reset_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoDecoder_Initialize_ParamsSpec.$.structSpec);
          const result = this.impl.initialize(params.config, params.client, params.video_frame_pool);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoDecoder_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoDecoder_Decode_ParamsSpec.$.structSpec);
          const result = this.impl.decode(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoDecoder_Decode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoDecoder_Reset_ParamsSpec.$.structSpec);
          const result = this.impl.reset();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoDecoder_Reset_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec.$.structSpec);
          const result = this.impl.releaseVideoFrame(params.video_frame_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.VideoDecoderReceiver = arc.mojom.VideoDecoderReceiver;

arc.mojom.VideoDecoderPtr = arc.mojom.VideoDecoderRemote;
arc.mojom.VideoDecoderRequest = arc.mojom.VideoDecoderPendingReceiver;


// Interface: VideoDecoderClient
mojo.internal.Struct(
    arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec, 'arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_Params', [
      mojo.internal.StructField('visible_rect', 0, 0, arc.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('video_frame_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoderClient_OnError_ParamsSpec, 'arc.mojom.VideoDecoderClient_OnError_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.VideoDecoderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoDecoderClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoDecoderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoDecoderClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoDecoderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onVideoFrameDecoded(video_frame_id, visible_rect, timestamp) {
    return this.$.onVideoFrameDecoded(video_frame_id, visible_rect, timestamp);
  }
  onError(status) {
    return this.$.onError(status);
  }
};

arc.mojom.VideoDecoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoDecoderClient', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onVideoFrameDecoded(video_frame_id, visible_rect, timestamp) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec,
      null,
      [video_frame_id, visible_rect, timestamp],
      false);
  }

  onError(status) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.VideoDecoderClient_OnError_ParamsSpec,
      null,
      [status],
      false);
  }

};

arc.mojom.VideoDecoderClient.getRemote = function() {
  let remote = new arc.mojom.VideoDecoderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoDecoderClient',
    'context');
  return remote.$;
};

arc.mojom.VideoDecoderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoDecoderClient', [
      { explicit: 0 },
      { explicit: 1 },
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
             decoder.decodeStructInline(arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoDecoderClient_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec.$.structSpec);
          const result = this.impl.onVideoFrameDecoded(params.video_frame_id, params.visible_rect, params.timestamp);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoDecoderClient_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.status);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.VideoDecoderClientReceiver = arc.mojom.VideoDecoderClientReceiver;

arc.mojom.VideoDecoderClientPtr = arc.mojom.VideoDecoderClientRemote;
arc.mojom.VideoDecoderClientRequest = arc.mojom.VideoDecoderClientPendingReceiver;

