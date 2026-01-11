// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/producer.mojom
// Module: video_capture.mojom

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};
var media = media || {};

video_capture.mojom.Producer = {};
video_capture.mojom.Producer.$interfaceName = 'video_capture.mojom.Producer';
video_capture.mojom.Producer_OnNewBuffer_ParamsSpec = { $: {} };
video_capture.mojom.Producer_OnNewBuffer_ResponseParamsSpec = { $: {} };
video_capture.mojom.Producer_OnBufferRetired_ParamsSpec = { $: {} };

// Interface: Producer
mojo.internal.Struct(
    video_capture.mojom.Producer_OnNewBuffer_ParamsSpec, 'video_capture.mojom.Producer_OnNewBuffer_Params', [
      mojo.internal.StructField('buffer_handle', 0, 0, media.mojom.VideoBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.Producer_OnNewBuffer_ResponseParamsSpec, 'video_capture.mojom.Producer_OnNewBuffer_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.Producer_OnBufferRetired_ParamsSpec, 'video_capture.mojom.Producer_OnBufferRetired_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

video_capture.mojom.ProducerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.ProducerRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.Producer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.ProducerPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.ProducerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onNewBuffer(buffer_id, buffer_handle) {
    return this.$.onNewBuffer(buffer_id, buffer_handle);
  }
  onBufferRetired(buffer_id) {
    return this.$.onBufferRetired(buffer_id);
  }
};

video_capture.mojom.ProducerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Producer', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onNewBuffer(buffer_id, buffer_handle) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.Producer_OnNewBuffer_ParamsSpec,
      video_capture.mojom.Producer_OnNewBuffer_ResponseParamsSpec,
      [buffer_id, buffer_handle],
      false);
  }

  onBufferRetired(buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      video_capture.mojom.Producer_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

};

video_capture.mojom.Producer.getRemote = function() {
  let remote = new video_capture.mojom.ProducerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.Producer',
    'context');
  return remote.$;
};

video_capture.mojom.ProducerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Producer', [
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
             decoder.decodeStructInline(video_capture.mojom.Producer_OnNewBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.Producer_OnBufferRetired_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.Producer_OnNewBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.onNewBuffer(params.buffer_id, params.buffer_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, video_capture.mojom.Producer_OnNewBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.Producer_OnBufferRetired_ParamsSpec.$.structSpec);
          const result = this.impl.onBufferRetired(params.buffer_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

video_capture.mojom.ProducerReceiver = video_capture.mojom.ProducerReceiver;

video_capture.mojom.ProducerPtr = video_capture.mojom.ProducerRemote;
video_capture.mojom.ProducerRequest = video_capture.mojom.ProducerPendingReceiver;

