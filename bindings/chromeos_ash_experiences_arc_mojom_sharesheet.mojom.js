// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/sharesheet.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: SharesheetHost
arc.mojom.mojom.SharesheetHost = {};

arc.mojom.mojom.SharesheetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.SharesheetHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SharesheetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.SharesheetHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.SharesheetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.SharesheetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.mojom.SharesheetHost.getRemote = function() {
  let remote = new arc.mojom.mojom.SharesheetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SharesheetHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.mojom.SharesheetHostPtr = arc.mojom.mojom.SharesheetHostRemote;
arc.mojom.mojom.SharesheetHostRequest = arc.mojom.mojom.SharesheetHostPendingReceiver;


// Interface: SharesheetInstance
arc.mojom.mojom.SharesheetInstance = {};

arc.mojom.mojom.SharesheetInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.SharesheetInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SharesheetInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.SharesheetInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.SharesheetInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.SharesheetInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.SharesheetInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.SharesheetInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.SharesheetInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SharesheetInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.SharesheetInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SharesheetInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.SharesheetHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.SharesheetInstancePtr = arc.mojom.mojom.SharesheetInstanceRemote;
arc.mojom.mojom.SharesheetInstanceRequest = arc.mojom.mojom.SharesheetInstancePendingReceiver;

