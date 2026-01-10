// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/cros_camera_client.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Interface: CameraHalClient
cros.mojom.mojom.CameraHalClient = {};

cros.mojom.mojom.CameraHalClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CameraHalClientRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraHalClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CameraHalClientPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CameraHalClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CameraHalClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setUpChannel(camera_module) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CameraHalClient_SetUpChannel_ParamsSpec,
      null,
      [camera_module]);
  }

};

cros.mojom.mojom.CameraHalClient.getRemote = function() {
  let remote = new cros.mojom.mojom.CameraHalClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraHalClient',
    'context');
  return remote.$;
};

// ParamsSpec for SetUpChannel
cros.mojom.mojom.CameraHalClient_SetUpChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CameraHalClient.SetUpChannel_Params',
      packedSize: 16,
      fields: [
        { name: 'camera_module', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CameraModuleRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CameraHalClientPtr = cros.mojom.mojom.CameraHalClientRemote;
cros.mojom.mojom.CameraHalClientRequest = cros.mojom.mojom.CameraHalClientPendingReceiver;

