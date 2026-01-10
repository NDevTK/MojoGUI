// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/location_internals/location_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};
var services = services || {};

mojom.LocationInternalsHandler = {};
mojom.LocationInternalsHandler.$interfaceName = 'mojom.LocationInternalsHandler';
mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec = { $: {} };

// Interface: LocationInternalsHandler
mojo.internal.Struct(
    mojom.LocationInternalsHandler_BindInternalsInterface_ParamsSpec, 'mojom.LocationInternalsHandler_BindInternalsInterface_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationInternalsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [receiver],
      false);
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

mojom.LocationInternalsHandlerPtr = mojom.LocationInternalsHandlerRemote;
mojom.LocationInternalsHandlerRequest = mojom.LocationInternalsHandlerPendingReceiver;

