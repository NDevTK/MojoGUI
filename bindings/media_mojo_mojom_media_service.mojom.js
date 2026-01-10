// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


media.mojom.mojom.kMediaSandbox = sandbox.mojom.Sandbox.kNoSandbox;

media.mojom.mojom.kMediaSandbox = sandbox.mojom.Sandbox.kGpu;

media.mojom.mojom.kMediaSandbox = sandbox.mojom.Sandbox.kService;

// Interface: MediaService
media.mojom.mojom.MediaService = {};

media.mojom.mojom.MediaServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.MediaServiceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.MediaServicePendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.MediaServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.MediaServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createInterfaceFactory(factory, frame_interfaces) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.MediaService_CreateInterfaceFactory_ParamsSpec,
      null,
      [factory, frame_interfaces]);
  }

};

media.mojom.mojom.MediaService.getRemote = function() {
  let remote = new media.mojom.mojom.MediaServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaService',
    'context');
  return remote.$;
};

// ParamsSpec for CreateInterfaceFactory
media.mojom.mojom.MediaService_CreateInterfaceFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaService.CreateInterfaceFactory_Params',
      packedSize: 24,
      fields: [
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.InterfaceFactoryRemote), nullable: false, minVersion: 0 },
        { name: 'frame_interfaces', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.FrameInterfaceFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.MediaServicePtr = media.mojom.mojom.MediaServiceRemote;
media.mojom.mojom.MediaServiceRequest = media.mojom.mojom.MediaServicePendingReceiver;

