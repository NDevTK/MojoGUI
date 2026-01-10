// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/plugins/plugin_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('description', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_extensions', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PluginInfo
mojo.internal.Struct(
    blink.mojom.PluginInfoSpec, 'blink.mojom.PluginInfo', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('filename', 16, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mime_types', 24, 0, mojo.internal.Array(blink.mojom.PluginMimeTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('background_color', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('may_use_external_handler', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: PluginRegistry
mojo.internal.Struct(
    blink.mojom.PluginRegistry_GetPlugins_ParamsSpec, 'blink.mojom.PluginRegistry_GetPlugins_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PluginRegistry_GetPlugins_ResponseParamsSpec, 'blink.mojom.PluginRegistry_GetPlugins_ResponseParams', [
      mojo.internal.StructField('plugins', 0, 0, mojo.internal.Array(blink.mojom.PluginInfoSpec.$, false), null, false, 0, undefined),
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

blink.mojom.PluginRegistryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PluginRegistry_GetPlugins_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getPlugins');
          const result = this.impl.getPlugins();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PluginRegistry_GetPlugins_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.PluginRegistryReceiver = blink.mojom.PluginRegistryReceiver;

blink.mojom.PluginRegistryPtr = blink.mojom.PluginRegistryRemote;
blink.mojom.PluginRegistryRequest = blink.mojom.PluginRegistryPendingReceiver;

