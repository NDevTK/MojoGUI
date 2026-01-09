// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/cros_camera_client.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Interface: CameraHalClient
cros.mojom.CameraHalClient = {};

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

// Legacy compatibility
cros.mojom.CameraHalClientPtr = cros.mojom.CameraHalClientRemote;
cros.mojom.CameraHalClientRequest = cros.mojom.CameraHalClientPendingReceiver;

