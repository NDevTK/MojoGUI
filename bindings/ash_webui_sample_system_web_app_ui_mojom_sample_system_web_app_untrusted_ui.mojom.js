// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sample_system_web_app_ui/mojom/sample_system_web_app_untrusted_ui.mojom
// Module: ash.mojom.sample_swa

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.mojom.sample_swa = ash.mojom.mojom.sample_swa || {};


// Interface: UntrustedPageInterfacesFactory
ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactory = {};

ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.UntrustedPageInterfacesFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactoryPendingReceiver,
      handle);
    this.$ = new ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createParentPage(child_page, parent_page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactory_CreateParentPage_ParamsSpec,
      null,
      [child_page, parent_page]);
  }

};

ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactory.getRemote = function() {
  let remote = new ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.UntrustedPageInterfacesFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateParentPage
ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactory_CreateParentPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.sample_swa.UntrustedPageInterfacesFactory.CreateParentPage_Params',
      packedSize: 16,
      fields: [
        { name: 'child_page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'parent_page', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactoryPtr = ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactoryRemote;
ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactoryRequest = ash.mojom.mojom.sample_swa.sample_swa.UntrustedPageInterfacesFactoryPendingReceiver;

