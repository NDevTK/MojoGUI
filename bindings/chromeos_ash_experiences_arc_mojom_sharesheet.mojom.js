// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/sharesheet.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: SharesheetHost
arc.mojom.SharesheetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.SharesheetHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SharesheetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.SharesheetHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.SharesheetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.SharesheetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.SharesheetHost.getRemote = function() {
  let remote = new arc.mojom.SharesheetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SharesheetHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.SharesheetHostPtr = arc.mojom.SharesheetHostRemote;
arc.mojom.SharesheetHostRequest = arc.mojom.SharesheetHostPendingReceiver;


// Interface: SharesheetInstance
arc.mojom.SharesheetInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.SharesheetInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SharesheetInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.SharesheetInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.SharesheetInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.SharesheetInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.SharesheetInstance.getRemote = function() {
  let remote = new arc.mojom.SharesheetInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SharesheetInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.SharesheetInstancePtr = arc.mojom.SharesheetInstanceRemote;
arc.mojom.SharesheetInstanceRequest = arc.mojom.SharesheetInstancePendingReceiver;

