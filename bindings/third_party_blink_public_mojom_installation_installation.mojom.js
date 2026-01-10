// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/installation/installation.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: InstallationService
blink.mojom.mojom.InstallationService = {};

blink.mojom.mojom.InstallationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.InstallationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.InstallationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.InstallationServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.InstallationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.InstallationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInstall() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.InstallationService_OnInstall_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.InstallationService.getRemote = function() {
  let remote = new blink.mojom.mojom.InstallationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.InstallationService',
    'context');
  return remote.$;
};

// ParamsSpec for OnInstall
blink.mojom.mojom.InstallationService_OnInstall_ParamsSpec = {
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
blink.mojom.mojom.InstallationServicePtr = blink.mojom.mojom.InstallationServiceRemote;
blink.mojom.mojom.InstallationServiceRequest = blink.mojom.mojom.InstallationServicePendingReceiver;

