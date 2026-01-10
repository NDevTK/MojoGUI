// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/sandbox_status_extension_android.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};

chrome.mojom.SandboxStatusExtension = {};
chrome.mojom.SandboxStatusExtension.$interfaceName = 'chrome.mojom.SandboxStatusExtension';
chrome.mojom.SandboxStatusExtension_AddSandboxStatusExtension_ParamsSpec = { $: {} };

// Interface: SandboxStatusExtension
mojo.internal.Struct(
    chrome.mojom.SandboxStatusExtension_AddSandboxStatusExtension_ParamsSpec, 'chrome.mojom.SandboxStatusExtension_AddSandboxStatusExtension_Params', [
    ],
    [[0, 8]]);

chrome.mojom.SandboxStatusExtensionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.SandboxStatusExtensionRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.SandboxStatusExtension';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.SandboxStatusExtensionPendingReceiver,
      handle);
    this.$ = new chrome.mojom.SandboxStatusExtensionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.SandboxStatusExtensionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addSandboxStatusExtension() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.SandboxStatusExtension_AddSandboxStatusExtension_ParamsSpec,
      null,
      [],
      false);
  }

};

chrome.mojom.SandboxStatusExtension.getRemote = function() {
  let remote = new chrome.mojom.SandboxStatusExtensionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.SandboxStatusExtension',
    'context');
  return remote.$;
};

chrome.mojom.SandboxStatusExtensionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.SandboxStatusExtension_AddSandboxStatusExtension_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addSandboxStatusExtension();
          break;
        }
      }
    }});
  }
};

chrome.mojom.SandboxStatusExtensionReceiver = chrome.mojom.SandboxStatusExtensionReceiver;

chrome.mojom.SandboxStatusExtensionPtr = chrome.mojom.SandboxStatusExtensionRemote;
chrome.mojom.SandboxStatusExtensionRequest = chrome.mojom.SandboxStatusExtensionPendingReceiver;

