// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/installation/installation.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.InstallationService = {};
blink.mojom.InstallationService.$interfaceName = 'blink.mojom.InstallationService';
blink.mojom.InstallationService_OnInstall_ParamsSpec = { $: {} };

// Interface: InstallationService
mojo.internal.Struct(
    blink.mojom.InstallationService_OnInstall_ParamsSpec, 'blink.mojom.InstallationService_OnInstall_Params', [
    ],
    [[0, 8]]);

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
      []);
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

blink.mojom.InstallationServicePtr = blink.mojom.InstallationServiceRemote;
blink.mojom.InstallationServiceRequest = blink.mojom.InstallationServicePendingReceiver;

