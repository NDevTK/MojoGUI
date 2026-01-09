// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/application.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: CutCopyPasteCommand
remote_cocoa.mojom.CutCopyPasteCommand = {
};

// Interface: StubInterface
remote_cocoa.mojom.StubInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.StubInterface';
  }

};

remote_cocoa.mojom.StubInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Application
remote_cocoa.mojom.ApplicationPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.Application';
  }

  createAlert(alert_bridge_receiver) {
    // Method: CreateAlert
    // Call: CreateAlert(alert_bridge_receiver)
  }

  createNativeWidgetNSWindow(bridge_id, window_receiver, host, text_input_host) {
    // Method: CreateNativeWidgetNSWindow
    // Call: CreateNativeWidgetNSWindow(bridge_id, window_receiver, host, text_input_host)
  }

  createRenderWidgetHostNSView(view_id, host, view_receiver) {
    // Method: CreateRenderWidgetHostNSView
    // Call: CreateRenderWidgetHostNSView(view_id, host, view_receiver)
  }

  createSystemMediaControlsBridge(receiver, host) {
    // Method: CreateSystemMediaControlsBridge
    // Call: CreateSystemMediaControlsBridge(receiver, host)
  }

  createWebContentsNSView(view_id, host, view_receiver) {
    // Method: CreateWebContentsNSView
    // Call: CreateWebContentsNSView(view_id, host, view_receiver)
  }

  forwardCutCopyPaste(command) {
    // Method: ForwardCutCopyPaste
    // Call: ForwardCutCopyPaste(command)
  }

};

remote_cocoa.mojom.ApplicationRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
