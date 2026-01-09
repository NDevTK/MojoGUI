// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/print_spooler.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: PrintSessionHost
arc.mojom.PrintSessionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrintSessionHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSessionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrintSessionHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PrintSessionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PrintSessionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.PrintSessionHost.getRemote = function() {
  let remote = new arc.mojom.PrintSessionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSessionHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.PrintSessionHostPtr = arc.mojom.PrintSessionHostRemote;
arc.mojom.PrintSessionHostRequest = arc.mojom.PrintSessionHostPendingReceiver;


// Interface: PrintSessionInstance
arc.mojom.PrintSessionInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrintSessionInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSessionInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrintSessionInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PrintSessionInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PrintSessionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.PrintSessionInstance.getRemote = function() {
  let remote = new arc.mojom.PrintSessionInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSessionInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.PrintSessionInstancePtr = arc.mojom.PrintSessionInstanceRemote;
arc.mojom.PrintSessionInstanceRequest = arc.mojom.PrintSessionInstancePendingReceiver;


// Interface: PrintSpoolerHost
arc.mojom.PrintSpoolerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrintSpoolerHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSpoolerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrintSpoolerHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PrintSpoolerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PrintSpoolerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.PrintSpoolerHost.getRemote = function() {
  let remote = new arc.mojom.PrintSpoolerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSpoolerHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.PrintSpoolerHostPtr = arc.mojom.PrintSpoolerHostRemote;
arc.mojom.PrintSpoolerHostRequest = arc.mojom.PrintSpoolerHostPendingReceiver;


// Interface: PrintSpoolerInstance
arc.mojom.PrintSpoolerInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrintSpoolerInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSpoolerInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrintSpoolerInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PrintSpoolerInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PrintSpoolerInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.PrintSpoolerInstance.getRemote = function() {
  let remote = new arc.mojom.PrintSpoolerInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSpoolerInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.PrintSpoolerInstancePtr = arc.mojom.PrintSpoolerInstanceRemote;
arc.mojom.PrintSpoolerInstanceRequest = arc.mojom.PrintSpoolerInstancePendingReceiver;

