// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/nfc_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: NFCProvider
device.mojom.mojom.NFCProvider = {};

device.mojom.mojom.NFCProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.NFCProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.NFCProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.NFCProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.NFCProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.NFCProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getNFCForHost(host_id, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.NFCProvider_GetNFCForHost_ParamsSpec,
      null,
      [host_id, receiver]);
  }

  suspendNFCOperations() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec,
      null,
      []);
  }

  resumeNFCOperations() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec,
      null,
      []);
  }

};

device.mojom.mojom.NFCProvider.getRemote = function() {
  let remote = new device.mojom.mojom.NFCProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.NFCProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetNFCForHost
device.mojom.mojom.NFCProvider_GetNFCForHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFCProvider.GetNFCForHost_Params',
      packedSize: 24,
      fields: [
        { name: 'host_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(device.mojom.NFCRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SuspendNFCOperations
device.mojom.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFCProvider.SuspendNFCOperations_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ResumeNFCOperations
device.mojom.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.NFCProvider.ResumeNFCOperations_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.NFCProviderPtr = device.mojom.mojom.NFCProviderRemote;
device.mojom.mojom.NFCProviderRequest = device.mojom.mojom.NFCProviderPendingReceiver;

