// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/installation/installation.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.InstallationService = {};
blink.mojom.InstallationService.$interfaceName = 'blink.mojom.InstallationService';
blink.mojom.InstallationService_OnInstall_ParamsSpec = { $: {} };

// Interface: InstallationService
mojo.internal.Struct(
    blink.mojom.InstallationService_OnInstall_ParamsSpec, 'blink.mojom.InstallationService_OnInstall_Params', [
    ],
    [[0, 8]]);

blink.mojom.InstallationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.InstallationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.InstallationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.InstallationServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.InstallationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.InstallationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInstall() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.InstallationService_OnInstall_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.InstallationService.getRemote = function() {
  let remote = new blink.mojom.InstallationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.InstallationService',
    'context');
  return remote.$;
};

blink.mojom.InstallationServiceReceiver = class {
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
        
        // Try Method 0: OnInstall
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.InstallationService_OnInstall_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInstall (0)');
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
          const params = decoder.decodeStruct(blink.mojom.InstallationService_OnInstall_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onInstall');
          const result = this.impl.onInstall();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.InstallationServiceReceiver = blink.mojom.InstallationServiceReceiver;

blink.mojom.InstallationServicePtr = blink.mojom.InstallationServiceRemote;
blink.mojom.InstallationServiceRequest = blink.mojom.InstallationServicePendingReceiver;

