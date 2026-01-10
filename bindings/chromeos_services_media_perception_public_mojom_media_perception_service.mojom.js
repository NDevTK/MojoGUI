// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/media_perception/public/mojom/media_perception_service.mojom
// Module: chromeos.media_perception.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.media_perception = chromeos.media_perception || {};
chromeos.media_perception.mojom = chromeos.media_perception.mojom || {};


// Interface: MediaPerceptionService
chromeos.media_perception.mojom.MediaPerceptionService = {};

chromeos.media_perception.mojom.MediaPerceptionService_GetController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.media_perception.mojom.MediaPerceptionService_GetController_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.media_perception.mojom.MediaPerceptionControllerRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.media_perception.mojom.MediaPerceptionControllerClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.media_perception.mojom.MediaPerceptionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.media_perception.mojom.MediaPerceptionServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.media_perception.mojom.MediaPerceptionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.media_perception.mojom.MediaPerceptionServicePendingReceiver,
      handle);
    this.$ = new chromeos.media_perception.mojom.MediaPerceptionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.media_perception.mojom.MediaPerceptionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getController(receiver, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.media_perception.mojom.MediaPerceptionService_GetController_ParamsSpec,
      null,
      [receiver, client]);
  }

};

chromeos.media_perception.mojom.MediaPerceptionService.getRemote = function() {
  let remote = new chromeos.media_perception.mojom.MediaPerceptionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.media_perception.mojom.MediaPerceptionService',
    'context');
  return remote.$;
};

// ParamsSpec for GetController
chromeos.media_perception.mojom.MediaPerceptionService_GetController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.media_perception.mojom.MediaPerceptionService.GetController_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.media_perception.mojom.MediaPerceptionControllerRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.media_perception.mojom.MediaPerceptionControllerClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromeos.media_perception.mojom.MediaPerceptionServicePtr = chromeos.media_perception.mojom.MediaPerceptionServiceRemote;
chromeos.media_perception.mojom.MediaPerceptionServiceRequest = chromeos.media_perception.mojom.MediaPerceptionServicePendingReceiver;


// Interface: MediaPerceptionController
chromeos.media_perception.mojom.MediaPerceptionController = {};

chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.media_perception.mojom.MediaPerceptionRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerRemote = class {
  static get $interfaceName() {
    return 'chromeos.media_perception.mojom.MediaPerceptionController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.media_perception.mojom.MediaPerceptionControllerPendingReceiver,
      handle);
    this.$ = new chromeos.media_perception.mojom.MediaPerceptionControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  activateMediaPerception(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_ParamsSpec,
      null,
      [receiver]);
  }

};

chromeos.media_perception.mojom.MediaPerceptionController.getRemote = function() {
  let remote = new chromeos.media_perception.mojom.MediaPerceptionControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.media_perception.mojom.MediaPerceptionController',
    'context');
  return remote.$;
};

// ParamsSpec for ActivateMediaPerception
chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.media_perception.mojom.MediaPerceptionController.ActivateMediaPerception_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.media_perception.mojom.MediaPerceptionRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.media_perception.mojom.MediaPerceptionControllerPtr = chromeos.media_perception.mojom.MediaPerceptionControllerRemote;
chromeos.media_perception.mojom.MediaPerceptionControllerRequest = chromeos.media_perception.mojom.MediaPerceptionControllerPendingReceiver;


// Interface: MediaPerceptionControllerClient
chromeos.media_perception.mojom.MediaPerceptionControllerClient = {};

chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(video_capture.mojom.VideoSourceProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerClientRemote = class {
  static get $interfaceName() {
    return 'chromeos.media_perception.mojom.MediaPerceptionControllerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.media_perception.mojom.MediaPerceptionControllerClientPendingReceiver,
      handle);
    this.$ = new chromeos.media_perception.mojom.MediaPerceptionControllerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToVideoCaptureService(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_ParamsSpec,
      null,
      [receiver]);
  }

};

chromeos.media_perception.mojom.MediaPerceptionControllerClient.getRemote = function() {
  let remote = new chromeos.media_perception.mojom.MediaPerceptionControllerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.media_perception.mojom.MediaPerceptionControllerClient',
    'context');
  return remote.$;
};

// ParamsSpec for ConnectToVideoCaptureService
chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.media_perception.mojom.MediaPerceptionControllerClient.ConnectToVideoCaptureService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(video_capture.mojom.VideoSourceProviderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.media_perception.mojom.MediaPerceptionControllerClientPtr = chromeos.media_perception.mojom.MediaPerceptionControllerClientRemote;
chromeos.media_perception.mojom.MediaPerceptionControllerClientRequest = chromeos.media_perception.mojom.MediaPerceptionControllerClientPendingReceiver;

