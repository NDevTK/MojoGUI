// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/drivefs/mojom/drivefs_native_messaging.mojom
// Module: drivefs.mojom

'use strict';

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
};

drivefs.mojom.NativeMessagingPortRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  postMessageToExtension(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(drivefs.mojom.NativeMessagingPort_PostMessageToExtension_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.postMessageToExtension');
          const result = this.impl.postMessageToExtension(params.message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

drivefs.mojom.NativeMessagingHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleMessageFromExtension(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(drivefs.mojom.NativeMessagingHost_HandleMessageFromExtension_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.handleMessageFromExtension');
          const result = this.impl.handleMessageFromExtension(params.message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

drivefs.mojom.NativeMessagingHostReceiver = drivefs.mojom.NativeMessagingHostReceiver;

drivefs.mojom.NativeMessagingHostPtr = drivefs.mojom.NativeMessagingHostRemote;
drivefs.mojom.NativeMessagingHostRequest = drivefs.mojom.NativeMessagingHostPendingReceiver;

