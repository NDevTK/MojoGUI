// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/firewall_hole.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Interface: FirewallHole
sharing.mojom.FirewallHole = {};

sharing.mojom.FirewallHolePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.FirewallHoleRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.FirewallHole';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.FirewallHolePendingReceiver,
      handle);
    this.$ = new sharing.mojom.FirewallHoleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.FirewallHoleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

sharing.mojom.FirewallHole.getRemote = function() {
  let remote = new sharing.mojom.FirewallHoleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.FirewallHole',
    'context');
  return remote.$;
};

// Legacy compatibility
sharing.mojom.FirewallHolePtr = sharing.mojom.FirewallHoleRemote;
sharing.mojom.FirewallHoleRequest = sharing.mojom.FirewallHolePendingReceiver;


// Interface: FirewallHoleFactory
sharing.mojom.FirewallHoleFactory = {};

sharing.mojom.FirewallHoleFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.FirewallHoleFactoryRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.FirewallHoleFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.FirewallHoleFactoryPendingReceiver,
      handle);
    this.$ = new sharing.mojom.FirewallHoleFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.FirewallHoleFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openFirewallHole(port) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ParamsSpec.$,
      sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ResponseParamsSpec.$,
      [port]);
  }

};

sharing.mojom.FirewallHoleFactory.getRemote = function() {
  let remote = new sharing.mojom.FirewallHoleFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.FirewallHoleFactory',
    'context');
  return remote.$;
};

// ParamsSpec for OpenFirewallHole
sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.FirewallHoleFactory.OpenFirewallHole_Params',
      packedSize: 16,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.FirewallHoleFactory.OpenFirewallHole_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'firewall_hole', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
sharing.mojom.FirewallHoleFactoryPtr = sharing.mojom.FirewallHoleFactoryRemote;
sharing.mojom.FirewallHoleFactoryRequest = sharing.mojom.FirewallHoleFactoryPendingReceiver;

