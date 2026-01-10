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

chrome.mojom.SandboxStatusExtensionPtr = chrome.mojom.SandboxStatusExtensionRemote;
chrome.mojom.SandboxStatusExtensionRequest = chrome.mojom.SandboxStatusExtensionPendingReceiver;

