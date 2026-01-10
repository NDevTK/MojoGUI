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
        
        // Try Method 0: AddSandboxStatusExtension
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.SandboxStatusExtension_AddSandboxStatusExtension_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddSandboxStatusExtension (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(chrome.mojom.SandboxStatusExtension_AddSandboxStatusExtension_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addSandboxStatusExtension');
          const result = this.impl.addSandboxStatusExtension();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.SandboxStatusExtensionReceiver = chrome.mojom.SandboxStatusExtensionReceiver;

chrome.mojom.SandboxStatusExtensionPtr = chrome.mojom.SandboxStatusExtensionRemote;
chrome.mojom.SandboxStatusExtensionRequest = chrome.mojom.SandboxStatusExtensionPendingReceiver;

