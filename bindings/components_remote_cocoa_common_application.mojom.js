// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/application.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: CutCopyPasteCommand
remote_cocoa.mojom.CutCopyPasteCommand = {
  kCut: 0,
  kCopy: 1,
  kPaste: 2,
};

// Interface: StubInterface
remote_cocoa.mojom.StubInterface = {};

remote_cocoa.mojom.StubInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.StubInterfaceRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.StubInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.StubInterfacePendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.StubInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.StubInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

remote_cocoa.mojom.StubInterface.getRemote = function() {
  let remote = new remote_cocoa.mojom.StubInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.StubInterface',
    'context');
  return remote.$;
};

// Legacy compatibility
remote_cocoa.mojom.StubInterfacePtr = remote_cocoa.mojom.StubInterfaceRemote;
remote_cocoa.mojom.StubInterfaceRequest = remote_cocoa.mojom.StubInterfacePendingReceiver;


// Interface: Application
remote_cocoa.mojom.Application = {};

remote_cocoa.mojom.ApplicationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.ApplicationRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.Application';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.ApplicationPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.ApplicationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.ApplicationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createAlert(alert_bridge_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.Application_CreateAlert_ParamsSpec,
      null,
      [alert_bridge_receiver]);
  }

  createNativeWidgetNSWindow(bridge_id, window_receiver, host, text_input_host) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_ParamsSpec,
      null,
      [bridge_id, window_receiver, host, text_input_host]);
  }

  createRenderWidgetHostNSView(view_id, host, view_receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_ParamsSpec,
      null,
      [view_id, host, view_receiver]);
  }

  createSystemMediaControlsBridge(receiver, host) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_ParamsSpec,
      null,
      [receiver, host]);
  }

  createWebContentsNSView(view_id, host, view_receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.Application_CreateWebContentsNSView_ParamsSpec,
      null,
      [view_id, host, view_receiver]);
  }

  forwardCutCopyPaste(command) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.Application_ForwardCutCopyPaste_ParamsSpec,
      null,
      [command]);
  }

};

remote_cocoa.mojom.Application.getRemote = function() {
  let remote = new remote_cocoa.mojom.ApplicationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.Application',
    'context');
  return remote.$;
};

// ParamsSpec for CreateAlert
remote_cocoa.mojom.Application_CreateAlert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.Application.CreateAlert_Params',
      packedSize: 16,
      fields: [
        { name: 'alert_bridge_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateNativeWidgetNSWindow
remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.Application.CreateNativeWidgetNSWindow_Params',
      packedSize: 32,
      fields: [
        { name: 'bridge_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'window_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'host', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'text_input_host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateRenderWidgetHostNSView
remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.Application.CreateRenderWidgetHostNSView_Params',
      packedSize: 24,
      fields: [
        { name: 'view_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'view_receiver', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateSystemMediaControlsBridge
remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.Application.CreateSystemMediaControlsBridge_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'host', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateWebContentsNSView
remote_cocoa.mojom.Application_CreateWebContentsNSView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.Application.CreateWebContentsNSView_Params',
      packedSize: 24,
      fields: [
        { name: 'view_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
        { name: 'view_receiver', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForwardCutCopyPaste
remote_cocoa.mojom.Application_ForwardCutCopyPaste_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.Application.ForwardCutCopyPaste_Params',
      packedSize: 16,
      fields: [
        { name: 'command', packedOffset: 0, packedBitOffset: 0, type: remote_cocoa.mojom.CutCopyPasteCommandSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.ApplicationPtr = remote_cocoa.mojom.ApplicationRemote;
remote_cocoa.mojom.ApplicationRequest = remote_cocoa.mojom.ApplicationPendingReceiver;

