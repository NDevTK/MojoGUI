// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/renderer_audio_output_stream_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var media = media || {};
var mojo_base = mojo_base || {};

blink.mojom.RendererAudioOutputStreamFactory = {};
blink.mojom.RendererAudioOutputStreamFactory.$interfaceName = 'blink.mojom.RendererAudioOutputStreamFactory';
blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ParamsSpec = { $: {} };
blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ResponseParamsSpec = { $: {} };

// Interface: RendererAudioOutputStreamFactory
mojo.internal.Struct(
    blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ParamsSpec, 'blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_Params', [
      mojo.internal.StructField('stream_provider_receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioOutputStreamProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('device_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ResponseParamsSpec, 'blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, media.mojom.OutputDeviceStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_params', 8, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('matched_device_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.RendererAudioOutputStreamFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RendererAudioOutputStreamFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RendererAudioOutputStreamFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RendererAudioOutputStreamFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.RendererAudioOutputStreamFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RendererAudioOutputStreamFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestDeviceAuthorization(stream_provider_receiver, session_id, device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ParamsSpec,
      blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ResponseParamsSpec,
      [stream_provider_receiver, session_id, device_id],
      false);
  }

};

blink.mojom.RendererAudioOutputStreamFactory.getRemote = function() {
  let remote = new blink.mojom.RendererAudioOutputStreamFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RendererAudioOutputStreamFactory',
    'context');
  return remote.$;
};

blink.mojom.RendererAudioOutputStreamFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RequestDeviceAuthorization
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestDeviceAuthorization (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestDeviceAuthorization');
          const result = this.impl.requestDeviceAuthorization(params.stream_provider_receiver, params.session_id, params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ResponseParamsSpec);
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

blink.mojom.RendererAudioOutputStreamFactoryReceiver = blink.mojom.RendererAudioOutputStreamFactoryReceiver;

blink.mojom.RendererAudioOutputStreamFactoryPtr = blink.mojom.RendererAudioOutputStreamFactoryRemote;
blink.mojom.RendererAudioOutputStreamFactoryRequest = blink.mojom.RendererAudioOutputStreamFactoryPendingReceiver;

