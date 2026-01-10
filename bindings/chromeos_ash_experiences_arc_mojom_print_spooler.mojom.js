// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/print_spooler.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: PrintSessionHost
arc.mojom.mojom.PrintSessionHost = {};

arc.mojom.mojom.PrintSessionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.PrintSessionHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSessionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.PrintSessionHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.PrintSessionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.PrintSessionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.mojom.PrintSessionHost.getRemote = function() {
  let remote = new arc.mojom.mojom.PrintSessionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSessionHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.mojom.PrintSessionHostPtr = arc.mojom.mojom.PrintSessionHostRemote;
arc.mojom.mojom.PrintSessionHostRequest = arc.mojom.mojom.PrintSessionHostPendingReceiver;


// Interface: PrintSessionInstance
arc.mojom.mojom.PrintSessionInstance = {};

arc.mojom.mojom.PrintSessionInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.PrintSessionInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSessionInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.PrintSessionInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.PrintSessionInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.PrintSessionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPrintPreviewClosed() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec,
      null,
      []);
  }

  createPreviewDocument(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec,
      arc.mojom.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParamsSpec,
      [request]);
  }

};

arc.mojom.mojom.PrintSessionInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.PrintSessionInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSessionInstance',
    'context');
  return remote.$;
};

// ParamsSpec for OnPrintPreviewClosed
arc.mojom.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintSessionInstance.OnPrintPreviewClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CreatePreviewDocument
arc.mojom.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintSessionInstance.CreatePreviewDocument_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.PrintDocumentRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintSessionInstance.CreatePreviewDocument_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'preview_document', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true, minVersion: 0 },
        { name: 'data_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.PrintSessionInstancePtr = arc.mojom.mojom.PrintSessionInstanceRemote;
arc.mojom.mojom.PrintSessionInstanceRequest = arc.mojom.mojom.PrintSessionInstancePendingReceiver;


// Interface: PrintSpoolerHost
arc.mojom.mojom.PrintSpoolerHost = {};

arc.mojom.mojom.PrintSpoolerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.PrintSpoolerHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSpoolerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.PrintSpoolerHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.PrintSpoolerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.PrintSpoolerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startPrintInCustomTab(scoped_handle, task_id, instance) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec,
      arc.mojom.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParamsSpec,
      [scoped_handle, task_id, instance]);
  }

};

arc.mojom.mojom.PrintSpoolerHost.getRemote = function() {
  let remote = new arc.mojom.mojom.PrintSpoolerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSpoolerHost',
    'context');
  return remote.$;
};

// ParamsSpec for StartPrintInCustomTab
arc.mojom.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintSpoolerHost.StartPrintInCustomTab_Params',
      packedSize: 24,
      fields: [
        { name: 'scoped_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'task_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'instance', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintSpoolerHost.StartPrintInCustomTab_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.PrintSpoolerHostPtr = arc.mojom.mojom.PrintSpoolerHostRemote;
arc.mojom.mojom.PrintSpoolerHostRequest = arc.mojom.mojom.PrintSpoolerHostPendingReceiver;


// Interface: PrintSpoolerInstance
arc.mojom.mojom.PrintSpoolerInstance = {};

arc.mojom.mojom.PrintSpoolerInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.PrintSpoolerInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSpoolerInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.PrintSpoolerInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.PrintSpoolerInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.PrintSpoolerInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.PrintSpoolerInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.PrintSpoolerInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.PrintSpoolerInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSpoolerInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.PrintSpoolerInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintSpoolerInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.PrintSpoolerInstancePtr = arc.mojom.mojom.PrintSpoolerInstanceRemote;
arc.mojom.mojom.PrintSpoolerInstanceRequest = arc.mojom.mojom.PrintSpoolerInstancePendingReceiver;

