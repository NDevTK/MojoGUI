// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/cros_camera_client.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};

cros.mojom.CameraHalClient = {};
cros.mojom.CameraHalClient.$interfaceName = 'cros.mojom.CameraHalClient';
cros.mojom.CameraHalClient_SetUpChannel_ParamsSpec = { $: {} };

// Interface: CameraHalClient
mojo.internal.Struct(
    cros.mojom.CameraHalClient_SetUpChannel_ParamsSpec, 'cros.mojom.CameraHalClient_SetUpChannel_Params', [
      mojo.internal.StructField('camera_module', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraModuleRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CameraHalClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraHalClientRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraHalClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraHalClientPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraHalClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CameraHalClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setUpChannel(camera_module) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CameraHalClient_SetUpChannel_ParamsSpec,
      null,
      [camera_module],
      false);
  }

};

cros.mojom.CameraHalClient.getRemote = function() {
  let remote = new cros.mojom.CameraHalClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraHalClient',
    'context');
  return remote.$;
};

cros.mojom.CameraHalClientReceiver = class {
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
          const params = cros.mojom.CameraHalClient_SetUpChannel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setUpChannel(params.camera_module);
          break;
        }
      }
    }});
  }
};

cros.mojom.CameraHalClientReceiver = cros.mojom.CameraHalClientReceiver;

cros.mojom.CameraHalClientPtr = cros.mojom.CameraHalClientRemote;
cros.mojom.CameraHalClientRequest = cros.mojom.CameraHalClientPendingReceiver;

