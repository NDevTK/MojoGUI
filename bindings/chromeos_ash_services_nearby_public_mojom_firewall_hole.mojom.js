// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/firewall_hole.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Interface: FirewallHole
sharing.mojom.mojom.FirewallHole = {};

sharing.mojom.mojom.FirewallHolePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.mojom.FirewallHoleRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.FirewallHole';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.mojom.FirewallHolePendingReceiver,
      handle);
    this.$ = new sharing.mojom.mojom.FirewallHoleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.mojom.FirewallHoleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

sharing.mojom.mojom.FirewallHole.getRemote = function() {
  let remote = new sharing.mojom.mojom.FirewallHoleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.FirewallHole',
    'context');
  return remote.$;
};

// Legacy compatibility
sharing.mojom.mojom.FirewallHolePtr = sharing.mojom.mojom.FirewallHoleRemote;
sharing.mojom.mojom.FirewallHoleRequest = sharing.mojom.mojom.FirewallHolePendingReceiver;


// Interface: FirewallHoleFactory
sharing.mojom.mojom.FirewallHoleFactory = {};

sharing.mojom.mojom.FirewallHoleFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.mojom.FirewallHoleFactoryRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.FirewallHoleFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.mojom.FirewallHoleFactoryPendingReceiver,
      handle);
    this.$ = new sharing.mojom.mojom.FirewallHoleFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.mojom.FirewallHoleFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openFirewallHole(port) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.mojom.FirewallHoleFactory_OpenFirewallHole_ParamsSpec,
      sharing.mojom.mojom.FirewallHoleFactory_OpenFirewallHole_ResponseParamsSpec,
      [port]);
  }

};

sharing.mojom.mojom.FirewallHoleFactory.getRemote = function() {
  let remote = new sharing.mojom.mojom.FirewallHoleFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.FirewallHoleFactory',
    'context');
  return remote.$;
};

// ParamsSpec for OpenFirewallHole
sharing.mojom.mojom.FirewallHoleFactory_OpenFirewallHole_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.FirewallHoleFactory.OpenFirewallHole_Params',
      packedSize: 16,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: sharing.mojom.TcpServerSocketPortSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

sharing.mojom.mojom.FirewallHoleFactory_OpenFirewallHole_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.FirewallHoleFactory.OpenFirewallHole_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'firewall_hole', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(sharing.mojom.FirewallHoleRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
sharing.mojom.mojom.FirewallHoleFactoryPtr = sharing.mojom.mojom.FirewallHoleFactoryRemote;
sharing.mojom.mojom.FirewallHoleFactoryRequest = sharing.mojom.mojom.FirewallHoleFactoryPendingReceiver;

