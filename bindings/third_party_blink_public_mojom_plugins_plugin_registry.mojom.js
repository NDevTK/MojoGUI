// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/plugins/plugin_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.PluginMimeTypeSpec = { $: {} };
blink.mojom.PluginInfoSpec = { $: {} };
blink.mojom.PluginRegistry = {};
blink.mojom.PluginRegistry.$interfaceName = 'blink.mojom.PluginRegistry';
blink.mojom.PluginRegistry_GetPlugins_ParamsSpec = { $: {} };
blink.mojom.PluginRegistry_GetPlugins_ResponseParamsSpec = { $: {} };

// Struct: PluginMimeType
mojo.internal.Struct(
    blink.mojom.PluginMimeTypeSpec, 'blink.mojom.PluginMimeType', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('file_extensions', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PluginInfo
mojo.internal.Struct(
    blink.mojom.PluginInfoSpec, 'blink.mojom.PluginInfo', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('filename', 16, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('background_color', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mime_types', 32, 0, mojo.internal.Array(blink.mojom.PluginMimeTypeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('may_use_external_handler', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: PluginRegistry
mojo.internal.Struct(
    blink.mojom.PluginRegistry_GetPlugins_ParamsSpec, 'blink.mojom.PluginRegistry_GetPlugins_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PluginRegistry_GetPlugins_ResponseParamsSpec, 'blink.mojom.PluginRegistry_GetPlugins_ResponseParams', [
      mojo.internal.StructField('plugins', 0, 0, mojo.internal.Array(blink.mojom.PluginInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      blink.mojom.PluginRegistry_GetPlugins_ParamsSpec,
      blink.mojom.PluginRegistry_GetPlugins_ResponseParamsSpec,
      [],
      false);
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

blink.mojom.PluginRegistryPtr = blink.mojom.PluginRegistryRemote;
blink.mojom.PluginRegistryRequest = blink.mojom.PluginRegistryPendingReceiver;

