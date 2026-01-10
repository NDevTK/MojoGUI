// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/media_perception/public/mojom/media_perception_service.mojom
// Module: chromeos.media_perception.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.media_perception = chromeos.media_perception || {};
chromeos.media_perception.mojom = chromeos.media_perception.mojom || {};
var video_capture = video_capture || {};

chromeos.media_perception.mojom.MediaPerceptionService = {};
chromeos.media_perception.mojom.MediaPerceptionService.$interfaceName = 'chromeos.media_perception.mojom.MediaPerceptionService';
chromeos.media_perception.mojom.MediaPerceptionService_GetController_ParamsSpec = { $: {} };
chromeos.media_perception.mojom.MediaPerceptionController = {};
chromeos.media_perception.mojom.MediaPerceptionController.$interfaceName = 'chromeos.media_perception.mojom.MediaPerceptionController';
chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_ParamsSpec = { $: {} };
chromeos.media_perception.mojom.MediaPerceptionControllerClient = {};
chromeos.media_perception.mojom.MediaPerceptionControllerClient.$interfaceName = 'chromeos.media_perception.mojom.MediaPerceptionControllerClient';
chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_ParamsSpec = { $: {} };

// Interface: MediaPerceptionService
mojo.internal.Struct(
    chromeos.media_perception.mojom.MediaPerceptionService_GetController_ParamsSpec, 'chromeos.media_perception.mojom.MediaPerceptionService_GetController_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.media_perception.mojom.MediaPerceptionControllerSpec), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(chromeos.media_perception.mojom.MediaPerceptionControllerClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [receiver, client],
      false);
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

chromeos.media_perception.mojom.MediaPerceptionServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.media_perception.mojom.MediaPerceptionService_GetController_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getController(params.receiver, params.client);
          break;
        }
      }
    }});
  }
};

chromeos.media_perception.mojom.MediaPerceptionServiceReceiver = chromeos.media_perception.mojom.MediaPerceptionServiceReceiver;

chromeos.media_perception.mojom.MediaPerceptionServicePtr = chromeos.media_perception.mojom.MediaPerceptionServiceRemote;
chromeos.media_perception.mojom.MediaPerceptionServiceRequest = chromeos.media_perception.mojom.MediaPerceptionServicePendingReceiver;


// Interface: MediaPerceptionController
mojo.internal.Struct(
    chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_ParamsSpec, 'chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.media_perception.mojom.MediaPerceptionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [receiver],
      false);
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

chromeos.media_perception.mojom.MediaPerceptionControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.media_perception.mojom.MediaPerceptionController_ActivateMediaPerception_ParamsSpec.$.decode(message.payload);
          const result = this.impl.activateMediaPerception(params.receiver);
          break;
        }
      }
    }});
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerReceiver = chromeos.media_perception.mojom.MediaPerceptionControllerReceiver;

chromeos.media_perception.mojom.MediaPerceptionControllerPtr = chromeos.media_perception.mojom.MediaPerceptionControllerRemote;
chromeos.media_perception.mojom.MediaPerceptionControllerRequest = chromeos.media_perception.mojom.MediaPerceptionControllerPendingReceiver;


// Interface: MediaPerceptionControllerClient
mojo.internal.Struct(
    chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_ParamsSpec, 'chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(video_capture.mojom.VideoSourceProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [receiver],
      false);
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

chromeos.media_perception.mojom.MediaPerceptionControllerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.media_perception.mojom.MediaPerceptionControllerClient_ConnectToVideoCaptureService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connectToVideoCaptureService(params.receiver);
          break;
        }
      }
    }});
  }
};

chromeos.media_perception.mojom.MediaPerceptionControllerClientReceiver = chromeos.media_perception.mojom.MediaPerceptionControllerClientReceiver;

chromeos.media_perception.mojom.MediaPerceptionControllerClientPtr = chromeos.media_perception.mojom.MediaPerceptionControllerClientRemote;
chromeos.media_perception.mojom.MediaPerceptionControllerClientRequest = chromeos.media_perception.mojom.MediaPerceptionControllerClientPendingReceiver;

