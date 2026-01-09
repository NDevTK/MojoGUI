// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/automation_registry.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: RendererAutomationRegistry
extensions.mojom.RendererAutomationRegistry = {};

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
      [automation]);
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

// ParamsSpec for BindAutomation
extensions.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec = {
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
extensions.mojom.RendererAutomationRegistryPtr = extensions.mojom.RendererAutomationRegistryRemote;
extensions.mojom.RendererAutomationRegistryRequest = extensions.mojom.RendererAutomationRegistryPendingReceiver;

