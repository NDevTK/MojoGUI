// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/drivefs/mojom/drivefs_native_messaging.mojom
// Module: drivefs.mojom

'use strict';

// Module namespace
var drivefs = drivefs || {};
drivefs.mojom = drivefs.mojom || {};


// Enum: ExtensionConnectionStatus
drivefs.mojom.mojom.ExtensionConnectionStatus = {
  kSuccess: 0,
  kExtensionNotFound: 1,
  kFeatureNotEnabled: 2,
};
drivefs.mojom.mojom.ExtensionConnectionStatusSpec = { $: mojo.internal.Enum() };

// Struct: ExtensionConnectionParams
drivefs.mojom.mojom.ExtensionConnectionParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.ExtensionConnectionParams',
      packedSize: 16,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: NativeMessagingPort
drivefs.mojom.mojom.NativeMessagingPort = {};

drivefs.mojom.mojom.NativeMessagingPortPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

drivefs.mojom.mojom.NativeMessagingPortRemote = class {
  static get $interfaceName() {
    return 'drivefs.mojom.NativeMessagingPort';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      drivefs.mojom.mojom.NativeMessagingPortPendingReceiver,
      handle);
    this.$ = new drivefs.mojom.mojom.NativeMessagingPortRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

drivefs.mojom.mojom.NativeMessagingPortRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  postMessageToExtension(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      drivefs.mojom.mojom.NativeMessagingPort_PostMessageToExtension_ParamsSpec,
      null,
      [message]);
  }

};

drivefs.mojom.mojom.NativeMessagingPort.getRemote = function() {
  let remote = new drivefs.mojom.mojom.NativeMessagingPortRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'drivefs.mojom.NativeMessagingPort',
    'context');
  return remote.$;
};

// ParamsSpec for PostMessageToExtension
drivefs.mojom.mojom.NativeMessagingPort_PostMessageToExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.NativeMessagingPort.PostMessageToExtension_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
drivefs.mojom.mojom.NativeMessagingPortPtr = drivefs.mojom.mojom.NativeMessagingPortRemote;
drivefs.mojom.mojom.NativeMessagingPortRequest = drivefs.mojom.mojom.NativeMessagingPortPendingReceiver;


// Interface: NativeMessagingHost
drivefs.mojom.mojom.NativeMessagingHost = {};

drivefs.mojom.mojom.NativeMessagingHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

drivefs.mojom.mojom.NativeMessagingHostRemote = class {
  static get $interfaceName() {
    return 'drivefs.mojom.NativeMessagingHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      drivefs.mojom.mojom.NativeMessagingHostPendingReceiver,
      handle);
    this.$ = new drivefs.mojom.mojom.NativeMessagingHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

drivefs.mojom.mojom.NativeMessagingHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleMessageFromExtension(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      drivefs.mojom.mojom.NativeMessagingHost_HandleMessageFromExtension_ParamsSpec,
      null,
      [message]);
  }

};

drivefs.mojom.mojom.NativeMessagingHost.getRemote = function() {
  let remote = new drivefs.mojom.mojom.NativeMessagingHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'drivefs.mojom.NativeMessagingHost',
    'context');
  return remote.$;
};

// ParamsSpec for HandleMessageFromExtension
drivefs.mojom.mojom.NativeMessagingHost_HandleMessageFromExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.NativeMessagingHost.HandleMessageFromExtension_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
drivefs.mojom.mojom.NativeMessagingHostPtr = drivefs.mojom.mojom.NativeMessagingHostRemote;
drivefs.mojom.mojom.NativeMessagingHostRequest = drivefs.mojom.mojom.NativeMessagingHostPendingReceiver;

