// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/automation_registry.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: RendererAutomationRegistry
extensions.mojom.mojom.RendererAutomationRegistry = {};

extensions.mojom.mojom.RendererAutomationRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.mojom.RendererAutomationRegistryRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.RendererAutomationRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.mojom.RendererAutomationRegistryPendingReceiver,
      handle);
    this.$ = new extensions.mojom.mojom.RendererAutomationRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.mojom.RendererAutomationRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindAutomation(automation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec,
      null,
      [automation]);
  }

};

extensions.mojom.mojom.RendererAutomationRegistry.getRemote = function() {
  let remote = new extensions.mojom.mojom.RendererAutomationRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.RendererAutomationRegistry',
    'context');
  return remote.$;
};

// ParamsSpec for BindAutomation
extensions.mojom.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.RendererAutomationRegistry.BindAutomation_Params',
      packedSize: 16,
      fields: [
        { name: 'automation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
extensions.mojom.mojom.RendererAutomationRegistryPtr = extensions.mojom.mojom.RendererAutomationRegistryRemote;
extensions.mojom.mojom.RendererAutomationRegistryRequest = extensions.mojom.mojom.RendererAutomationRegistryPendingReceiver;

