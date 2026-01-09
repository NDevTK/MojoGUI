// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/renderer_audio_output_stream_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: RendererAudioOutputStreamFactory
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
      blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ParamsSpec.$,
      blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ResponseParamsSpec.$,
      [stream_provider_receiver, session_id, device_id]);
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

// ParamsSpec for RequestDeviceAuthorization
blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererAudioOutputStreamFactory.RequestDeviceAuthorization_Params',
      packedSize: 32,
      fields: [
        { name: 'stream_provider_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'device_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.RendererAudioOutputStreamFactory_RequestDeviceAuthorization_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererAudioOutputStreamFactory.RequestDeviceAuthorization_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'output_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'matched_device_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.RendererAudioOutputStreamFactoryPtr = blink.mojom.RendererAudioOutputStreamFactoryRemote;
blink.mojom.RendererAudioOutputStreamFactoryRequest = blink.mojom.RendererAudioOutputStreamFactoryPendingReceiver;

