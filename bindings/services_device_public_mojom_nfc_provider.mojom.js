// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/nfc_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: NFCProvider
device.mojom.NFCProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.NFCProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.NFCProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.NFCProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.NFCProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.NFCProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getNFCForHost(host_id, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.NFCProvider_GetNFCForHost_ParamsSpec.$,
      null,
      [host_id, receiver]);
  }

  suspendNFCOperations() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec.$,
      null,
      []);
  }

  resumeNFCOperations() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec.$,
      null,
      []);
  }

};

device.mojom.NFCProvider.getRemote = function() {
  let remote = new device.mojom.NFCProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.NFCProvider',
    'context');
  return remote.$;
}};

// ParamsSpec for GetNFCForHost
device.mojom.NFCProvider_GetNFCForHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFCProvider.GetNFCForHost_Params',
      packedSize: 24,
      fields: [
        { name: 'host_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SuspendNFCOperations
device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFCProvider.SuspendNFCOperations_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ResumeNFCOperations
device.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFCProvider.ResumeNFCOperations_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
device.mojom.NFCProviderPtr = device.mojom.NFCProviderRemote;
device.mojom.NFCProviderRequest = device.mojom.NFCProviderPendingReceiver;

