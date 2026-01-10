// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/first_party_sets_access_delegate.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.FirstPartySetsAccessDelegateParamsSpec = { $: {} };
network.mojom.FirstPartySetsReadyEventSpec = { $: {} };
network.mojom.FirstPartySetsAccessDelegate = {};
network.mojom.FirstPartySetsAccessDelegate.$interfaceName = 'network.mojom.FirstPartySetsAccessDelegate';
network.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec = { $: {} };
network.mojom.FirstPartySetsAccessDelegate_SetEnabled_ParamsSpec = { $: {} };

// Struct: FirstPartySetsAccessDelegateParams
mojo.internal.Struct(
    network.mojom.FirstPartySetsAccessDelegateParamsSpec, 'network.mojom.FirstPartySetsAccessDelegateParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FirstPartySetsReadyEvent
mojo.internal.Struct(
    network.mojom.FirstPartySetsReadyEventSpec, 'network.mojom.FirstPartySetsReadyEvent', [
      mojo.internal.StructField('config', 0, 0, network.mojom.FirstPartySetsContextConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cache_filter', 8, 0, network.mojom.FirstPartySetsCacheFilterSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FirstPartySetsAccessDelegate
mojo.internal.Struct(
    network.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec, 'network.mojom.FirstPartySetsAccessDelegate_NotifyReady_Params', [
      mojo.internal.StructField('ready_event', 0, 0, network.mojom.FirstPartySetsReadyEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.FirstPartySetsAccessDelegate_SetEnabled_ParamsSpec, 'network.mojom.FirstPartySetsAccessDelegate_SetEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.FirstPartySetsAccessDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.FirstPartySetsAccessDelegateRemote = class {
  static get $interfaceName() {
    return 'network.mojom.FirstPartySetsAccessDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.FirstPartySetsAccessDelegatePendingReceiver,
      handle);
    this.$ = new network.mojom.FirstPartySetsAccessDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.FirstPartySetsAccessDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyReady(ready_event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec,
      null,
      [ready_event],
      false);
  }

  setEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.FirstPartySetsAccessDelegate_SetEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

};

network.mojom.FirstPartySetsAccessDelegate.getRemote = function() {
  let remote = new network.mojom.FirstPartySetsAccessDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.FirstPartySetsAccessDelegate',
    'context');
  return remote.$;
};

network.mojom.FirstPartySetsAccessDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: NotifyReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyReady (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.FirstPartySetsAccessDelegate_SetEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEnabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(network.mojom.FirstPartySetsAccessDelegate_NotifyReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyReady');
          const result = this.impl.notifyReady(params.ready_event);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.FirstPartySetsAccessDelegate_SetEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setEnabled');
          const result = this.impl.setEnabled(params.enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.FirstPartySetsAccessDelegateReceiver = network.mojom.FirstPartySetsAccessDelegateReceiver;

network.mojom.FirstPartySetsAccessDelegatePtr = network.mojom.FirstPartySetsAccessDelegateRemote;
network.mojom.FirstPartySetsAccessDelegateRequest = network.mojom.FirstPartySetsAccessDelegatePendingReceiver;

