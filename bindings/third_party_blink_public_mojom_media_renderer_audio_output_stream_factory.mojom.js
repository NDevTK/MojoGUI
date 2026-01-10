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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

blink.mojom.RendererAudioOutputStreamFactoryReceiver = blink.mojom.RendererAudioOutputStreamFactoryReceiver;

blink.mojom.RendererAudioOutputStreamFactoryPtr = blink.mojom.RendererAudioOutputStreamFactoryRemote;
blink.mojom.RendererAudioOutputStreamFactoryRequest = blink.mojom.RendererAudioOutputStreamFactoryPendingReceiver;

