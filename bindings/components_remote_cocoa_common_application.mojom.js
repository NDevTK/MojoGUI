// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/application.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};
var components = components || {};
var components = components || {};
var components = components || {};
var components = components || {};
var components = components || {};

remote_cocoa.mojom.CutCopyPasteCommandSpec = { $: mojo.internal.Enum() };
remote_cocoa.mojom.StubInterface = {};
remote_cocoa.mojom.StubInterface.$interfaceName = 'remote_cocoa.mojom.StubInterface';
remote_cocoa.mojom.Application = {};
remote_cocoa.mojom.Application.$interfaceName = 'remote_cocoa.mojom.Application';
remote_cocoa.mojom.Application_CreateAlert_ParamsSpec = { $: {} };
remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_ParamsSpec = { $: {} };
remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_ParamsSpec = { $: {} };
remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_ParamsSpec = { $: {} };
remote_cocoa.mojom.Application_CreateWebContentsNSView_ParamsSpec = { $: {} };
remote_cocoa.mojom.Application_ForwardCutCopyPaste_ParamsSpec = { $: {} };

// Enum: CutCopyPasteCommand
remote_cocoa.mojom.CutCopyPasteCommand = {
  kCut: 0,
  kCopy: 1,
  kPaste: 2,
};

// Interface: StubInterface
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

remote_cocoa.mojom.StubInterfacePtr = remote_cocoa.mojom.StubInterfaceRemote;
remote_cocoa.mojom.StubInterfaceRequest = remote_cocoa.mojom.StubInterfacePendingReceiver;


// Interface: Application
mojo.internal.Struct(
    remote_cocoa.mojom.Application_CreateAlert_ParamsSpec, 'remote_cocoa.mojom.Application_CreateAlert_Params', [
      mojo.internal.StructField('alert_bridge_receiver', 0, 0, mojo.internal.InterfaceRequest(remote_cocoa.mojom.AlertBridgeRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_ParamsSpec, 'remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_Params', [
      mojo.internal.StructField('bridge_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('window_receiver', 8, 0, mojo.internal.AssociatedInterfaceRequest(remote_cocoa.mojom.NativeWidgetNSWindowRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 16, 0, mojo.internal.AssociatedInterfaceProxy(remote_cocoa.mojom.NativeWidgetNSWindowHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('text_input_host', 24, 0, mojo.internal.AssociatedInterfaceProxy(remote_cocoa.mojom.TextInputHostRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_ParamsSpec, 'remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_Params', [
      mojo.internal.StructField('view_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.AssociatedInterfaceProxy(remote_cocoa.mojom.StubInterfaceRemote), null, false, 0, undefined),
      mojo.internal.StructField('view_receiver', 16, 0, mojo.internal.AssociatedInterfaceRequest(remote_cocoa.mojom.StubInterfaceRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_ParamsSpec, 'remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(system_media_controls.mojom.SystemMediaControlsRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.InterfaceProxy(system_media_controls.mojom.SystemMediaControlsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.Application_CreateWebContentsNSView_ParamsSpec, 'remote_cocoa.mojom.Application_CreateWebContentsNSView_Params', [
      mojo.internal.StructField('view_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.AssociatedInterfaceProxy(remote_cocoa.mojom.StubInterfaceRemote), null, false, 0, undefined),
      mojo.internal.StructField('view_receiver', 16, 0, mojo.internal.AssociatedInterfaceRequest(remote_cocoa.mojom.StubInterfaceRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remote_cocoa.mojom.Application_ForwardCutCopyPaste_ParamsSpec, 'remote_cocoa.mojom.Application_ForwardCutCopyPaste_Params', [
      mojo.internal.StructField('command', 0, 0, remote_cocoa.mojom.CutCopyPasteCommandSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [alert_bridge_receiver],
      false);
  }

  createNativeWidgetNSWindow(bridge_id, window_receiver, host, text_input_host) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.Application_CreateNativeWidgetNSWindow_ParamsSpec,
      null,
      [bridge_id, window_receiver, host, text_input_host],
      false);
  }

  createRenderWidgetHostNSView(view_id, host, view_receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.Application_CreateRenderWidgetHostNSView_ParamsSpec,
      null,
      [view_id, host, view_receiver],
      false);
  }

  createSystemMediaControlsBridge(receiver, host) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.Application_CreateSystemMediaControlsBridge_ParamsSpec,
      null,
      [receiver, host],
      false);
  }

  createWebContentsNSView(view_id, host, view_receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.Application_CreateWebContentsNSView_ParamsSpec,
      null,
      [view_id, host, view_receiver],
      false);
  }

  forwardCutCopyPaste(command) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.Application_ForwardCutCopyPaste_ParamsSpec,
      null,
      [command],
      false);
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

remote_cocoa.mojom.ApplicationPtr = remote_cocoa.mojom.ApplicationRemote;
remote_cocoa.mojom.ApplicationRequest = remote_cocoa.mojom.ApplicationPendingReceiver;

