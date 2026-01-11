// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/nfc_provider.mojom
// Module: device.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  getNFCForHost(host_id, receiver) {
    return this.$.getNFCForHost(host_id, receiver);
  }
  suspendNFCOperations() {
    return this.$.suspendNFCOperations();
  }
  resumeNFCOperations() {
    return this.$.resumeNFCOperations();
  }
};

device.mojom.NFCProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NFCProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getNFCForHost(host_id, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.NFCProvider_GetNFCForHost_ParamsSpec,
      null,
      [host_id, receiver],
      false);
  }

  suspendNFCOperations() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec,
      null,
      [],
      false);
  }

  resumeNFCOperations() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NFCProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.NFCProvider_GetNFCForHost_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.NFCProvider_GetNFCForHost_ParamsSpec.$.structSpec);
          const result = this.impl.getNFCForHost(params.host_id, params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec.$.structSpec);
          const result = this.impl.suspendNFCOperations();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec.$.structSpec);
          const result = this.impl.resumeNFCOperations();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

device.mojom.NFCProviderReceiver = device.mojom.NFCProviderReceiver;

device.mojom.NFCProviderPtr = device.mojom.NFCProviderRemote;
device.mojom.NFCProviderRequest = device.mojom.NFCProviderPendingReceiver;

