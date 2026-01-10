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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindAutomation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAutomation (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.RendererAutomationRegistry_BindAutomation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindAutomation');
          const result = this.impl.bindAutomation(params.automation);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

extensions.mojom.RendererAutomationRegistryReceiver = extensions.mojom.RendererAutomationRegistryReceiver;

extensions.mojom.RendererAutomationRegistryPtr = extensions.mojom.RendererAutomationRegistryRemote;
extensions.mojom.RendererAutomationRegistryRequest = extensions.mojom.RendererAutomationRegistryPendingReceiver;

