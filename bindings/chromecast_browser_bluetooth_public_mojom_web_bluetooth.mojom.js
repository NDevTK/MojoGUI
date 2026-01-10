// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/bluetooth/public/mojom/web_bluetooth.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: BluetoothDeviceAccessProvider
chromecast.mojom.mojom.BluetoothDeviceAccessProvider = {};

chromecast.mojom.mojom.BluetoothDeviceAccessProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.BluetoothDeviceAccessProviderRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.BluetoothDeviceAccessProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.BluetoothDeviceAccessProviderPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.BluetoothDeviceAccessProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.BluetoothDeviceAccessProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestDeviceAccess(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.BluetoothDeviceAccessProvider_RequestDeviceAccess_ParamsSpec,
      null,
      [client]);
  }

};

chromecast.mojom.mojom.BluetoothDeviceAccessProvider.getRemote = function() {
  let remote = new chromecast.mojom.mojom.BluetoothDeviceAccessProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.BluetoothDeviceAccessProvider',
    'context');
  return remote.$;
};

// ParamsSpec for RequestDeviceAccess
chromecast.mojom.mojom.BluetoothDeviceAccessProvider_RequestDeviceAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.BluetoothDeviceAccessProvider.RequestDeviceAccess_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromecast.mojom.BluetoothDeviceAccessProviderClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.BluetoothDeviceAccessProviderPtr = chromecast.mojom.mojom.BluetoothDeviceAccessProviderRemote;
chromecast.mojom.mojom.BluetoothDeviceAccessProviderRequest = chromecast.mojom.mojom.BluetoothDeviceAccessProviderPendingReceiver;


// Interface: BluetoothDeviceAccessProviderClient
chromecast.mojom.mojom.BluetoothDeviceAccessProviderClient = {};

chromecast.mojom.mojom.BluetoothDeviceAccessProviderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.BluetoothDeviceAccessProviderClientRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.BluetoothDeviceAccessProviderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.BluetoothDeviceAccessProviderClientPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.BluetoothDeviceAccessProviderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.BluetoothDeviceAccessProviderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  grantAccess(address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.BluetoothDeviceAccessProviderClient_GrantAccess_ParamsSpec,
      null,
      [address]);
  }

  grantAccessToAllDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.mojom.BluetoothDeviceAccessProviderClient_GrantAccessToAllDevices_ParamsSpec,
      null,
      []);
  }

};

chromecast.mojom.mojom.BluetoothDeviceAccessProviderClient.getRemote = function() {
  let remote = new chromecast.mojom.mojom.BluetoothDeviceAccessProviderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.BluetoothDeviceAccessProviderClient',
    'context');
  return remote.$;
};

// ParamsSpec for GrantAccess
chromecast.mojom.mojom.BluetoothDeviceAccessProviderClient_GrantAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.BluetoothDeviceAccessProviderClient.GrantAccess_Params',
      packedSize: 16,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GrantAccessToAllDevices
chromecast.mojom.mojom.BluetoothDeviceAccessProviderClient_GrantAccessToAllDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.BluetoothDeviceAccessProviderClient.GrantAccessToAllDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.BluetoothDeviceAccessProviderClientPtr = chromecast.mojom.mojom.BluetoothDeviceAccessProviderClientRemote;
chromecast.mojom.mojom.BluetoothDeviceAccessProviderClientRequest = chromecast.mojom.mojom.BluetoothDeviceAccessProviderClientPendingReceiver;

