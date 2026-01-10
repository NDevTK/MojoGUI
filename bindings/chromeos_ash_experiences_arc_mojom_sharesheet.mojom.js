// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/sharesheet.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.SharesheetHost = {};
arc.mojom.SharesheetHost.$interfaceName = 'arc.mojom.SharesheetHost';
arc.mojom.SharesheetInstance = {};
arc.mojom.SharesheetInstance.$interfaceName = 'arc.mojom.SharesheetInstance';
arc.mojom.SharesheetInstance_Init_ParamsSpec = { $: {} };
arc.mojom.SharesheetInstance_Init_ResponseParamsSpec = { $: {} };

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'arc.mojom.SharesheetHost',
    'context');
  return remote.$;
};

arc.mojom.SharesheetHostPtr = arc.mojom.SharesheetHostRemote;
arc.mojom.SharesheetHostRequest = arc.mojom.SharesheetHostPendingReceiver;


// Interface: SharesheetInstance
mojo.internal.Struct(
    arc.mojom.SharesheetInstance_Init_ParamsSpec, 'arc.mojom.SharesheetInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.SharesheetHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.SharesheetInstance_Init_ResponseParamsSpec, 'arc.mojom.SharesheetInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

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

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.SharesheetInstance_Init_ParamsSpec,
      arc.mojom.SharesheetInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.SharesheetInstance.getRemote = function() {
  let remote = new arc.mojom.SharesheetInstanceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'arc.mojom.SharesheetInstance',
    'context');
  return remote.$;
};

arc.mojom.SharesheetInstancePtr = arc.mojom.SharesheetInstanceRemote;
arc.mojom.SharesheetInstanceRequest = arc.mojom.SharesheetInstancePendingReceiver;

