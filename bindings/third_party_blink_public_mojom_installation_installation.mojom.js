// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/installation/installation.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: InstallationService
blink.mojom.InstallationService = {};

blink.mojom.InstallationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.InstallationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.InstallationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.InstallationServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.InstallationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.InstallationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInstall() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.InstallationService_OnInstall_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

blink.mojom.InstallationService.getRemote = function() {
  let remote = new blink.mojom.InstallationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.InstallationService',
    'context');
  return remote.$;
};

// ParamsSpec for OnInstall
blink.mojom.InstallationService_OnInstall_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InstallationService.OnInstall_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.InstallationServicePtr = blink.mojom.InstallationServiceRemote;
blink.mojom.InstallationServiceRequest = blink.mojom.InstallationServicePendingReceiver;

