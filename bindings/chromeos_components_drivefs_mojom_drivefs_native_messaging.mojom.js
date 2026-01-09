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

// Struct: ExtensionConnectionParams
drivefs.mojom.ExtensionConnectionParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.ExtensionConnectionParams',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: NativeMessagingPort
drivefs.mojom.NativeMessagingPort = {};

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

// Legacy compatibility
drivefs.mojom.NativeMessagingPortPtr = drivefs.mojom.NativeMessagingPortRemote;
drivefs.mojom.NativeMessagingPortRequest = drivefs.mojom.NativeMessagingPortPendingReceiver;


// Interface: NativeMessagingHost
drivefs.mojom.NativeMessagingHost = {};

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

// Legacy compatibility
drivefs.mojom.NativeMessagingHostPtr = drivefs.mojom.NativeMessagingHostRemote;
drivefs.mojom.NativeMessagingHostRequest = drivefs.mojom.NativeMessagingHostPendingReceiver;

