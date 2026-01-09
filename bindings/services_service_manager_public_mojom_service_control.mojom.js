// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service_control.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};


// Interface: ServiceControl
service_manager.mojom.ServiceControl = {};

service_manager.mojom.ServiceControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.ServiceControlRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.ServiceControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.ServiceControlPendingReceiver,
      handle);
    this.$ = new service_manager.mojom.ServiceControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

service_manager.mojom.ServiceControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestQuit() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

service_manager.mojom.ServiceControl.getRemote = function() {
  let remote = new service_manager.mojom.ServiceControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.ServiceControl',
    'context');
  return remote.$;
};

// ParamsSpec for RequestQuit
service_manager.mojom.ServiceControl_RequestQuit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.ServiceControl.RequestQuit_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
service_manager.mojom.ServiceControlPtr = service_manager.mojom.ServiceControlRemote;
service_manager.mojom.ServiceControlRequest = service_manager.mojom.ServiceControlPendingReceiver;

