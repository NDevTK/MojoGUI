// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/plugins/plugin_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: PluginRegistry
blink.mojom.PluginRegistry = {};

blink.mojom.PluginRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PluginRegistryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PluginRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PluginRegistryPendingReceiver,
      handle);
    this.$ = new blink.mojom.PluginRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PluginRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPlugins() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PluginRegistry_GetPlugins_ParamsSpec.$,
      blink.mojom.PluginRegistry_GetPlugins_ResponseParamsSpec.$,
      []);
  }

};

blink.mojom.PluginRegistry.getRemote = function() {
  let remote = new blink.mojom.PluginRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PluginRegistry',
    'context');
  return remote.$;
};

// ParamsSpec for GetPlugins
blink.mojom.PluginRegistry_GetPlugins_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PluginRegistry.GetPlugins_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.PluginRegistry_GetPlugins_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PluginRegistry.GetPlugins_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'plugins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PluginRegistryPtr = blink.mojom.PluginRegistryRemote;
blink.mojom.PluginRegistryRequest = blink.mojom.PluginRegistryPendingReceiver;

