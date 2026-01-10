// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/location_internals/location_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Interface: LocationInternalsHandler
mojom.LocationInternalsHandler = {};

mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.LocationInternalsHandler_BindInternalsInterface_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(device.mojom.GeolocationInternalsRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

mojom.LocationInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.LocationInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.LocationInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.LocationInternalsHandlerPendingReceiver,
      handle);
    this.$ = new mojom.LocationInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.LocationInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindInternalsInterface(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec,
      null,
      [receiver]);
  }

};

mojom.LocationInternalsHandler.getRemote = function() {
  let remote = new mojom.LocationInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.LocationInternalsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for BindInternalsInterface
mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.LocationInternalsHandler.BindInternalsInterface_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(device.mojom.GeolocationInternalsRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mojom.LocationInternalsHandlerPtr = mojom.LocationInternalsHandlerRemote;
mojom.LocationInternalsHandlerRequest = mojom.LocationInternalsHandlerPendingReceiver;

