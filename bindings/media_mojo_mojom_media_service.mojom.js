// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: MediaService
media.mojom.MediaService = {};

media.mojom.MediaServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaServiceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaServicePendingReceiver,
      handle);
    this.$ = new media.mojom.MediaServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createInterfaceFactory(factory, frame_interfaces) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaService_CreateInterfaceFactory_ParamsSpec,
      null,
      [factory, frame_interfaces]);
  }

};

media.mojom.MediaService.getRemote = function() {
  let remote = new media.mojom.MediaServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaService',
    'context');
  return remote.$;
};

// ParamsSpec for CreateInterfaceFactory
media.mojom.MediaService_CreateInterfaceFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaService.CreateInterfaceFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'frame_interfaces', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.MediaServicePtr = media.mojom.MediaServiceRemote;
media.mojom.MediaServiceRequest = media.mojom.MediaServicePendingReceiver;

