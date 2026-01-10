// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/drivefs/mojom/drivefs_native_messaging.mojom
// Module: drivefs.mojom

'use strict';

// Module namespace
var drivefs = drivefs || {};
drivefs.mojom = drivefs.mojom || {};


// Enum: ExtensionConnectionStatus
drivefs.mojom.ExtensionConnectionStatus = {
  kSuccess: 0,
  kExtensionNotFound: 1,
  kFeatureNotEnabled: 2,
};
drivefs.mojom.ExtensionConnectionStatusSpec = { $: mojo.internal.Enum() };

// Struct: ExtensionConnectionParams
drivefs.mojom.ExtensionConnectionParamsSpec = {
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
drivefs.mojom.NativeMessagingPort = {};

drivefs.mojom.NativeMessagingPort_PostMessageToExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.NativeMessagingPort_PostMessageToExtension_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [message]);
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

// ParamsSpec for PostMessageToExtension
drivefs.mojom.NativeMessagingPort_PostMessageToExtension_ParamsSpec = {
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
drivefs.mojom.NativeMessagingPortPtr = drivefs.mojom.NativeMessagingPortRemote;
drivefs.mojom.NativeMessagingPortRequest = drivefs.mojom.NativeMessagingPortPendingReceiver;


// Interface: NativeMessagingHost
drivefs.mojom.NativeMessagingHost = {};

drivefs.mojom.NativeMessagingHost_HandleMessageFromExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.NativeMessagingHost_HandleMessageFromExtension_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [message]);
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

// ParamsSpec for HandleMessageFromExtension
drivefs.mojom.NativeMessagingHost_HandleMessageFromExtension_ParamsSpec = {
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
drivefs.mojom.NativeMessagingHostPtr = drivefs.mojom.NativeMessagingHostRemote;
drivefs.mojom.NativeMessagingHostRequest = drivefs.mojom.NativeMessagingHostPendingReceiver;

