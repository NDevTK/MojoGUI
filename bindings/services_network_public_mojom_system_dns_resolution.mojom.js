// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/system_dns_resolution.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.SystemDnsResolver = {};
network.mojom.SystemDnsResolver.$interfaceName = 'network.mojom.SystemDnsResolver';
network.mojom.SystemDnsResolver_Resolve_ParamsSpec = { $: {} };
network.mojom.SystemDnsResolver_Resolve_ResponseParamsSpec = { $: {} };

// Interface: SystemDnsResolver
mojo.internal.Struct(
    network.mojom.SystemDnsResolver_Resolve_ParamsSpec, 'network.mojom.SystemDnsResolver_Resolve_Params', [
      mojo.internal.StructField('hostname', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('addr_family', 8, 0, network.mojom.AddressFamilySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('flags', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.SystemDnsResolver_Resolve_ResponseParamsSpec, 'network.mojom.SystemDnsResolver_Resolve_ResponseParams', [
      mojo.internal.StructField('addr_list', 0, 0, network.mojom.AddressListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('os_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('net_error', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.SystemDnsResolverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SystemDnsResolverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SystemDnsResolver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SystemDnsResolverPendingReceiver,
      handle);
    this.$ = new network.mojom.SystemDnsResolverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SystemDnsResolverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resolve(hostname, addr_family, flags, network) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SystemDnsResolver_Resolve_ParamsSpec,
      network.mojom.SystemDnsResolver_Resolve_ResponseParamsSpec,
      [hostname, addr_family, flags, network],
      false);
  }

};

network.mojom.SystemDnsResolver.getRemote = function() {
  let remote = new network.mojom.SystemDnsResolverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SystemDnsResolver',
    'context');
  return remote.$;
};

network.mojom.SystemDnsResolverReceiver = class {
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
        
        // Try Method 0: Resolve
        try {
             decoder.decodeStruct(network.mojom.SystemDnsResolver_Resolve_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resolve (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.SystemDnsResolver_Resolve_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resolve');
          const result = this.impl.resolve(params.hostname, params.addr_family, params.flags, params.network);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.SystemDnsResolver_Resolve_ResponseParamsSpec);
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

network.mojom.SystemDnsResolverReceiver = network.mojom.SystemDnsResolverReceiver;

network.mojom.SystemDnsResolverPtr = network.mojom.SystemDnsResolverRemote;
network.mojom.SystemDnsResolverRequest = network.mojom.SystemDnsResolverPendingReceiver;

