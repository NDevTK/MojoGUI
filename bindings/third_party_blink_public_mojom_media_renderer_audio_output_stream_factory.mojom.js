// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/renderer_audio_output_stream_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: RendererAudioOutputStreamFactory
blink.mojom.mojom.RendererAudioOutputStreamFactory = {};

blink.mojom.mojom.RendererAudioOutputStreamFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.RendererAudioOutputStreamFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RendererAudioOutputStreamFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.RendererAudioOutputStreamFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.RendererAudioOutputStreamFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.RendererAudioOutputStreamFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestDeviceAuthorization(stream_provider_receiver, session_id, device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ParamsSpec,
      blink.mojom.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ResponseParamsSpec,
      [stream_provider_receiver, session_id, device_id]);
  }

};

blink.mojom.mojom.RendererAudioOutputStreamFactory.getRemote = function() {
  let remote = new blink.mojom.mojom.RendererAudioOutputStreamFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RendererAudioOutputStreamFactory',
    'context');
  return remote.$;
};

// ParamsSpec for RequestDeviceAuthorization
blink.mojom.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererAudioOutputStreamFactory.RequestDeviceAuthorization_Params',
      packedSize: 32,
      fields: [
        { name: 'stream_provider_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.AudioOutputStreamProviderRemote), nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'device_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererAudioOutputStreamFactory.RequestDeviceAuthorization_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: media.mojom.OutputDeviceStatusSpec, nullable: false, minVersion: 0 },
        { name: 'output_params', packedOffset: 8, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'matched_device_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.RendererAudioOutputStreamFactoryPtr = blink.mojom.mojom.RendererAudioOutputStreamFactoryRemote;
blink.mojom.mojom.RendererAudioOutputStreamFactoryRequest = blink.mojom.mojom.RendererAudioOutputStreamFactoryPendingReceiver;

