// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/bluetooth/public/mojom/web_bluetooth.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.BluetoothDeviceAccessProvider = {};
chromecast.mojom.BluetoothDeviceAccessProvider.$interfaceName = 'chromecast.mojom.BluetoothDeviceAccessProvider';
chromecast.mojom.BluetoothDeviceAccessProvider_RequestDeviceAccess_ParamsSpec = { $: {} };
chromecast.mojom.BluetoothDeviceAccessProviderClient = {};
chromecast.mojom.BluetoothDeviceAccessProviderClient.$interfaceName = 'chromecast.mojom.BluetoothDeviceAccessProviderClient';
chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccess_ParamsSpec = { $: {} };
chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccessToAllDevices_ParamsSpec = { $: {} };

// Interface: BluetoothDeviceAccessProvider
mojo.internal.Struct(
    chromecast.mojom.BluetoothDeviceAccessProvider_RequestDeviceAccess_ParamsSpec, 'chromecast.mojom.BluetoothDeviceAccessProvider_RequestDeviceAccess_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.BluetoothDeviceAccessProviderClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.BluetoothDeviceAccessProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.BluetoothDeviceAccessProviderRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.BluetoothDeviceAccessProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.BluetoothDeviceAccessProviderPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.BluetoothDeviceAccessProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.BluetoothDeviceAccessProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestDeviceAccess(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.BluetoothDeviceAccessProvider_RequestDeviceAccess_ParamsSpec,
      null,
      [client],
      false);
  }

};

chromecast.mojom.BluetoothDeviceAccessProvider.getRemote = function() {
  let remote = new chromecast.mojom.BluetoothDeviceAccessProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.BluetoothDeviceAccessProvider',
    'context');
  return remote.$;
};

chromecast.mojom.BluetoothDeviceAccessProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.BluetoothDeviceAccessProvider_RequestDeviceAccess_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestDeviceAccess(params.client);
          break;
        }
      }
    }});
  }
};

chromecast.mojom.BluetoothDeviceAccessProviderReceiver = chromecast.mojom.BluetoothDeviceAccessProviderReceiver;

chromecast.mojom.BluetoothDeviceAccessProviderPtr = chromecast.mojom.BluetoothDeviceAccessProviderRemote;
chromecast.mojom.BluetoothDeviceAccessProviderRequest = chromecast.mojom.BluetoothDeviceAccessProviderPendingReceiver;


// Interface: BluetoothDeviceAccessProviderClient
mojo.internal.Struct(
    chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccess_ParamsSpec, 'chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccess_Params', [
      mojo.internal.StructField('address', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccessToAllDevices_ParamsSpec, 'chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccessToAllDevices_Params', [
    ],
    [[0, 8]]);

chromecast.mojom.BluetoothDeviceAccessProviderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.BluetoothDeviceAccessProviderClientRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.BluetoothDeviceAccessProviderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.BluetoothDeviceAccessProviderClientPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.BluetoothDeviceAccessProviderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.BluetoothDeviceAccessProviderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  grantAccess(address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccess_ParamsSpec,
      null,
      [address],
      false);
  }

  grantAccessToAllDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccessToAllDevices_ParamsSpec,
      null,
      [],
      false);
  }

};

chromecast.mojom.BluetoothDeviceAccessProviderClient.getRemote = function() {
  let remote = new chromecast.mojom.BluetoothDeviceAccessProviderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.BluetoothDeviceAccessProviderClient',
    'context');
  return remote.$;
};

chromecast.mojom.BluetoothDeviceAccessProviderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccess_ParamsSpec.$.decode(message.payload);
          const result = this.impl.grantAccess(params.address);
          break;
        }
        case 1: {
          const params = chromecast.mojom.BluetoothDeviceAccessProviderClient_GrantAccessToAllDevices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.grantAccessToAllDevices();
          break;
        }
      }
    }});
  }
};

chromecast.mojom.BluetoothDeviceAccessProviderClientReceiver = chromecast.mojom.BluetoothDeviceAccessProviderClientReceiver;

chromecast.mojom.BluetoothDeviceAccessProviderClientPtr = chromecast.mojom.BluetoothDeviceAccessProviderClientRemote;
chromecast.mojom.BluetoothDeviceAccessProviderClientRequest = chromecast.mojom.BluetoothDeviceAccessProviderClientPendingReceiver;

