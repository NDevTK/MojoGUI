// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/print_spooler.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: PrintSessionHost
arc.mojom.PrintSessionHost = {};

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
arc.mojom.PrintSessionInstance = {};

arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintSessionInstance_CreatePreviewDocument_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.PrintDocumentRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

  onPrintPreviewClosed() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec,
      null,
      []);
  }

  createPreviewDocument(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec,
      arc.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParamsSpec,
      [request]);
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

// ParamsSpec for OnPrintPreviewClosed
arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec = {
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
arc.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec = {
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

arc.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParamsSpec = {
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
arc.mojom.PrintSessionInstancePtr = arc.mojom.PrintSessionInstanceRemote;
arc.mojom.PrintSessionInstanceRequest = arc.mojom.PrintSessionInstancePendingReceiver;


// Interface: PrintSpoolerHost
arc.mojom.PrintSpoolerHost = {};

arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_Params',
      packedSize: 24,
      fields: [
        { name: 'scoped_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'task_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'instance', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.PrintSessionInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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

  startPrintInCustomTab(scoped_handle, task_id, instance) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec,
      arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParamsSpec,
      [scoped_handle, task_id, instance]);
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

// ParamsSpec for StartPrintInCustomTab
arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintSpoolerHost.StartPrintInCustomTab_Params',
      packedSize: 24,
      fields: [
        { name: 'scoped_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'task_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'instance', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.PrintSessionInstanceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintSpoolerHost.StartPrintInCustomTab_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.PrintSessionHostRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.PrintSpoolerHostPtr = arc.mojom.PrintSpoolerHostRemote;
arc.mojom.PrintSpoolerHostRequest = arc.mojom.PrintSpoolerHostPendingReceiver;


// Interface: PrintSpoolerInstance
arc.mojom.PrintSpoolerInstance = {};

arc.mojom.PrintSpoolerInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintSpoolerInstance_Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.PrintSpoolerHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.PrintSpoolerInstance_Init_ParamsSpec,
      null,
      [host_remote]);
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

// ParamsSpec for Init
arc.mojom.PrintSpoolerInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintSpoolerInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.PrintSpoolerHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.PrintSpoolerInstancePtr = arc.mojom.PrintSpoolerInstanceRemote;
arc.mojom.PrintSpoolerInstanceRequest = arc.mojom.PrintSpoolerInstancePendingReceiver;

