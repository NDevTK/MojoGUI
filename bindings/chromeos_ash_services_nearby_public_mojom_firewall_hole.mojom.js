// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/firewall_hole.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var services = services || {};

sharing.mojom.FirewallHole = {};
sharing.mojom.FirewallHole.$interfaceName = 'sharing.mojom.FirewallHole';
sharing.mojom.FirewallHoleFactory = {};
sharing.mojom.FirewallHoleFactory.$interfaceName = 'sharing.mojom.FirewallHoleFactory';
sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ParamsSpec = { $: {} };
sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ResponseParamsSpec = { $: {} };

// Interface: FirewallHole
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

sharing.mojom.FirewallHolePtr = sharing.mojom.FirewallHoleRemote;
sharing.mojom.FirewallHoleRequest = sharing.mojom.FirewallHolePendingReceiver;


// Interface: FirewallHoleFactory
mojo.internal.Struct(
    sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ParamsSpec, 'sharing.mojom.FirewallHoleFactory_OpenFirewallHole_Params', [
      mojo.internal.StructField('port', 0, 0, sharing.mojom.TcpServerSocketPortSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ResponseParamsSpec, 'sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ResponseParams', [
      mojo.internal.StructField('firewall_hole', 0, 0, mojo.internal.InterfaceProxy(sharing.mojom.FirewallHoleRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ParamsSpec,
      sharing.mojom.FirewallHoleFactory_OpenFirewallHole_ResponseParamsSpec,
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

sharing.mojom.FirewallHoleFactoryPtr = sharing.mojom.FirewallHoleFactoryRemote;
sharing.mojom.FirewallHoleFactoryRequest = sharing.mojom.FirewallHoleFactoryPendingReceiver;

