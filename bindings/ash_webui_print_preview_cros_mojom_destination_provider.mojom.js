// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/print_preview_cros/mojom/destination_provider.mojom
// Module: ash.printing.print_preview.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.printing = ash.printing || {};
ash.printing.print_preview = ash.printing.print_preview || {};
ash.printing.print_preview.mojom = ash.printing.print_preview.mojom || {};
var printing = printing || {};

ash.printing.print_preview.mojom.DestinationProvider = {};
ash.printing.print_preview.mojom.DestinationProvider.$interfaceName = 'ash.printing.print_preview.mojom.DestinationProvider';
ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ParamsSpec = { $: {} };
ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ResponseParamsSpec = { $: {} };

// Interface: DestinationProvider
mojo.internal.Struct(
    ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ParamsSpec, 'ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_Params', [
      mojo.internal.StructField('destination_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('printer_type', 8, 0, printing.mojom.PrinterTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ResponseParamsSpec, 'ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, ash.printing.print_preview.mojom.CapabilitiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.printing.print_preview.mojom.DestinationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.printing.print_preview.mojom.DestinationProviderRemote = class {
  static get $interfaceName() {
    return 'ash.printing.print_preview.mojom.DestinationProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.printing.print_preview.mojom.DestinationProviderPendingReceiver,
      handle);
    this.$ = new ash.printing.print_preview.mojom.DestinationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.printing.print_preview.mojom.DestinationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fetchCapabilities(destination_id, printer_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ParamsSpec,
      ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ResponseParamsSpec,
      [destination_id, printer_type],
      false);
  }

};

ash.printing.print_preview.mojom.DestinationProvider.getRemote = function() {
  let remote = new ash.printing.print_preview.mojom.DestinationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.printing.print_preview.mojom.DestinationProvider',
    'context');
  return remote.$;
};

ash.printing.print_preview.mojom.DestinationProviderReceiver = class {
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
        
        // Try Method 0: FetchCapabilities
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchCapabilities (0)');
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
          const params = decoder.decodeStruct(ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fetchCapabilities');
          const result = this.impl.fetchCapabilities(params.destination_id, params.printer_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.printing.print_preview.mojom.DestinationProvider_FetchCapabilities_ResponseParamsSpec);
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

ash.printing.print_preview.mojom.DestinationProviderReceiver = ash.printing.print_preview.mojom.DestinationProviderReceiver;

ash.printing.print_preview.mojom.DestinationProviderPtr = ash.printing.print_preview.mojom.DestinationProviderRemote;
ash.printing.print_preview.mojom.DestinationProviderRequest = ash.printing.print_preview.mojom.DestinationProviderPendingReceiver;

