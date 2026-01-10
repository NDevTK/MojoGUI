// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/nfc_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.NFCProvider = {};
device.mojom.NFCProvider.$interfaceName = 'device.mojom.NFCProvider';
device.mojom.NFCProvider_GetNFCForHost_ParamsSpec = { $: {} };
device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec = { $: {} };
device.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec = { $: {} };

// Interface: NFCProvider
mojo.internal.Struct(
    device.mojom.NFCProvider_GetNFCForHost_ParamsSpec, 'device.mojom.NFCProvider_GetNFCForHost_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.NFCRemote), null, false, 0, undefined),
      mojo.internal.StructField('host_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec, 'device.mojom.NFCProvider_SuspendNFCOperations_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec, 'device.mojom.NFCProvider_ResumeNFCOperations_Params', [
    ],
    [[0, 8]]);

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
      device.mojom.NFCProvider_GetNFCForHost_ParamsSpec,
      null,
      [host_id, receiver],
      false);
  }

  suspendNFCOperations() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec,
      null,
      [],
      false);
  }

  resumeNFCOperations() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec,
      null,
      [],
      false);
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
};

device.mojom.NFCProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.NFCProvider_GetNFCForHost_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getNFCForHost(params.host_id, params.receiver);
          break;
        }
        case 1: {
          const params = device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec.$.decode(message.payload);
          const result = this.impl.suspendNFCOperations();
          break;
        }
        case 2: {
          const params = device.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resumeNFCOperations();
          break;
        }
      }
    }});
  }
};

device.mojom.NFCProviderReceiver = device.mojom.NFCProviderReceiver;

device.mojom.NFCProviderPtr = device.mojom.NFCProviderRemote;
device.mojom.NFCProviderRequest = device.mojom.NFCProviderPendingReceiver;

