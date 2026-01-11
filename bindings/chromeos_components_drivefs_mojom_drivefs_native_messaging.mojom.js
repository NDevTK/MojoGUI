// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/drivefs/mojom/drivefs_native_messaging.mojom
// Module: drivefs.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var drivefs = drivefs || {};
drivefs.mojom = drivefs.mojom || {};

drivefs.mojom.ExtensionConnectionStatusSpec = { $: mojo.internal.Enum() };
drivefs.mojom.ExtensionConnectionParamsSpec = { $: {} };
drivefs.mojom.NativeMessagingPort = {};
drivefs.mojom.NativeMessagingPort.$interfaceName = 'drivefs.mojom.NativeMessagingPort';
drivefs.mojom.NativeMessagingPort_PostMessageToExtension_ParamsSpec = { $: {} };
drivefs.mojom.NativeMessagingHost = {};
drivefs.mojom.NativeMessagingHost.$interfaceName = 'drivefs.mojom.NativeMessagingHost';
drivefs.mojom.NativeMessagingHost_HandleMessageFromExtension_ParamsSpec = { $: {} };

// Enum: ExtensionConnectionStatus
drivefs.mojom.ExtensionConnectionStatus = {
  kSuccess: 0,
  kExtensionNotFound: 1,
  kFeatureNotEnabled: 2,
  kUnknownError: 3,
};

// Struct: ExtensionConnectionParams
mojo.internal.Struct(
    drivefs.mojom.ExtensionConnectionParamsSpec, 'drivefs.mojom.ExtensionConnectionParams', [
      mojo.internal.StructField('extension_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: NativeMessagingPort
mojo.internal.Struct(
    drivefs.mojom.NativeMessagingPort_PostMessageToExtension_ParamsSpec, 'drivefs.mojom.NativeMessagingPort_PostMessageToExtension_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

drivefs.mojom.NativeMessagingPortPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

drivefs.mojom.NativeMessagingPortRemote = class {
  static get $interfaceName() {
    return 'drivefs.mojom.NativeMessagingPort';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      drivefs.mojom.NativeMessagingPortPendingReceiver,
      handle);
    this.$ = new drivefs.mojom.NativeMessagingPortRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  postMessageToExtension(message) {
    return this.$.postMessageToExtension(message);
  }
};

drivefs.mojom.NativeMessagingPortRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NativeMessagingPort', [
      { explicit: 0 },
    ]);
  }

  postMessageToExtension(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      drivefs.mojom.NativeMessagingPort_PostMessageToExtension_ParamsSpec,
      null,
      [message],
      false);
  }

};

drivefs.mojom.NativeMessagingPort.getRemote = function() {
  let remote = new drivefs.mojom.NativeMessagingPortRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'drivefs.mojom.NativeMessagingPort',
    'context');
  return remote.$;
};

drivefs.mojom.NativeMessagingPortReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NativeMessagingPort', [
      { explicit: 0 },
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
             decoder.decodeStructInline(drivefs.mojom.NativeMessagingPort_PostMessageToExtension_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.NativeMessagingPort_PostMessageToExtension_ParamsSpec.$.structSpec);
          const result = this.impl.postMessageToExtension(params.message);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

drivefs.mojom.NativeMessagingPortReceiver = drivefs.mojom.NativeMessagingPortReceiver;

drivefs.mojom.NativeMessagingPortPtr = drivefs.mojom.NativeMessagingPortRemote;
drivefs.mojom.NativeMessagingPortRequest = drivefs.mojom.NativeMessagingPortPendingReceiver;


// Interface: NativeMessagingHost
mojo.internal.Struct(
    drivefs.mojom.NativeMessagingHost_HandleMessageFromExtension_ParamsSpec, 'drivefs.mojom.NativeMessagingHost_HandleMessageFromExtension_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

drivefs.mojom.NativeMessagingHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

drivefs.mojom.NativeMessagingHostRemote = class {
  static get $interfaceName() {
    return 'drivefs.mojom.NativeMessagingHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      drivefs.mojom.NativeMessagingHostPendingReceiver,
      handle);
    this.$ = new drivefs.mojom.NativeMessagingHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  handleMessageFromExtension(message) {
    return this.$.handleMessageFromExtension(message);
  }
};

drivefs.mojom.NativeMessagingHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NativeMessagingHost', [
      { explicit: 0 },
    ]);
  }

  handleMessageFromExtension(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      drivefs.mojom.NativeMessagingHost_HandleMessageFromExtension_ParamsSpec,
      null,
      [message],
      false);
  }

};

drivefs.mojom.NativeMessagingHost.getRemote = function() {
  let remote = new drivefs.mojom.NativeMessagingHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'drivefs.mojom.NativeMessagingHost',
    'context');
  return remote.$;
};

drivefs.mojom.NativeMessagingHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NativeMessagingHost', [
      { explicit: 0 },
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
             decoder.decodeStructInline(drivefs.mojom.NativeMessagingHost_HandleMessageFromExtension_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.NativeMessagingHost_HandleMessageFromExtension_ParamsSpec.$.structSpec);
          const result = this.impl.handleMessageFromExtension(params.message);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

drivefs.mojom.NativeMessagingHostReceiver = drivefs.mojom.NativeMessagingHostReceiver;

drivefs.mojom.NativeMessagingHostPtr = drivefs.mojom.NativeMessagingHostRemote;
drivefs.mojom.NativeMessagingHostRequest = drivefs.mojom.NativeMessagingHostPendingReceiver;

