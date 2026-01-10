// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/automation_registry.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var ax = ax || {};

extensions.mojom.RendererAutomationRegistry = {};
extensions.mojom.RendererAutomationRegistry.$interfaceName = 'extensions.mojom.RendererAutomationRegistry';
extensions.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec = { $: {} };

// Interface: RendererAutomationRegistry
mojo.internal.Struct(
    extensions.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec, 'extensions.mojom.RendererAutomationRegistry_BindAutomation_Params', [
      mojo.internal.StructField('automation', 0, 0, pending_associated_remote<ax.mojom.Automation>Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

extensions.mojom.RendererAutomationRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.RendererAutomationRegistryRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.RendererAutomationRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.RendererAutomationRegistryPendingReceiver,
      handle);
    this.$ = new extensions.mojom.RendererAutomationRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.RendererAutomationRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindAutomation(automation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec,
      null,
      [automation],
      false);
  }

};

extensions.mojom.RendererAutomationRegistry.getRemote = function() {
  let remote = new extensions.mojom.RendererAutomationRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.RendererAutomationRegistry',
    'context');
  return remote.$;
};

extensions.mojom.RendererAutomationRegistryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = extensions.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindAutomation(params.automation);
          break;
        }
      }
    }});
  }
};

extensions.mojom.RendererAutomationRegistryReceiver = extensions.mojom.RendererAutomationRegistryReceiver;

extensions.mojom.RendererAutomationRegistryPtr = extensions.mojom.RendererAutomationRegistryRemote;
extensions.mojom.RendererAutomationRegistryRequest = extensions.mojom.RendererAutomationRegistryPendingReceiver;

