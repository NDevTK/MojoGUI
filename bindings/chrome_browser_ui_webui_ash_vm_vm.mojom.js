// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/vm/vm.mojom
// Module: ash.vm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.vm = ash.vm || {};
ash.vm.mojom = ash.vm.mojom || {};
var guest_os = guest_os || {};

ash.vm.mojom.VmDiagnosticsProvider = {};
ash.vm.mojom.VmDiagnosticsProvider.$interfaceName = 'ash.vm.mojom.VmDiagnosticsProvider';
ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ParamsSpec = { $: {} };
ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ResponseParamsSpec = { $: {} };

// Interface: VmDiagnosticsProvider
mojo.internal.Struct(
    ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ParamsSpec, 'ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ResponseParamsSpec, 'ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ResponseParams', [
      mojo.internal.StructField('diagnostics', 0, 0, guest_os.mojom.DiagnosticsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.vm.mojom.VmDiagnosticsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.vm.mojom.VmDiagnosticsProviderRemote = class {
  static get $interfaceName() {
    return 'ash.vm.mojom.VmDiagnosticsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.vm.mojom.VmDiagnosticsProviderPendingReceiver,
      handle);
    this.$ = new ash.vm.mojom.VmDiagnosticsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.vm.mojom.VmDiagnosticsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPluginVmDiagnostics() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ParamsSpec,
      ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ResponseParamsSpec,
      [],
      false);
  }

};

ash.vm.mojom.VmDiagnosticsProvider.getRemote = function() {
  let remote = new ash.vm.mojom.VmDiagnosticsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.vm.mojom.VmDiagnosticsProvider',
    'context');
  return remote.$;
};

ash.vm.mojom.VmDiagnosticsProviderReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetPluginVmDiagnostics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPluginVmDiagnostics (0)');
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
          const params = decoder.decodeStruct(ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPluginVmDiagnostics');
          const result = this.impl.getPluginVmDiagnostics();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.vm.mojom.VmDiagnosticsProvider_GetPluginVmDiagnostics_ResponseParamsSpec);
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

ash.vm.mojom.VmDiagnosticsProviderReceiver = ash.vm.mojom.VmDiagnosticsProviderReceiver;

ash.vm.mojom.VmDiagnosticsProviderPtr = ash.vm.mojom.VmDiagnosticsProviderRemote;
ash.vm.mojom.VmDiagnosticsProviderRequest = ash.vm.mojom.VmDiagnosticsProviderPendingReceiver;

