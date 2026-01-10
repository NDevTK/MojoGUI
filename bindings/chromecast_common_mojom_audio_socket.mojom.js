// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/audio_socket.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.AudioSocketBroker = {};
chromecast.mojom.AudioSocketBroker.$interfaceName = 'chromecast.mojom.AudioSocketBroker';
chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ParamsSpec = { $: {} };
chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ResponseParamsSpec = { $: {} };

// Interface: AudioSocketBroker
mojo.internal.Struct(
    chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ParamsSpec, 'chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ResponseParamsSpec, 'chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ResponseParams', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.AudioSocketBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.AudioSocketBrokerRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.AudioSocketBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.AudioSocketBrokerPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.AudioSocketBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.AudioSocketBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSocketDescriptor() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ParamsSpec,
      chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ResponseParamsSpec,
      [],
      false);
  }

};

chromecast.mojom.AudioSocketBroker.getRemote = function() {
  let remote = new chromecast.mojom.AudioSocketBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.AudioSocketBroker',
    'context');
  return remote.$;
};

chromecast.mojom.AudioSocketBrokerReceiver = class {
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
        
        // Try Method 0: GetSocketDescriptor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSocketDescriptor (0)');
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
          const params = decoder.decodeStruct(chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSocketDescriptor');
          const result = this.impl.getSocketDescriptor();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.mojom.AudioSocketBroker_GetSocketDescriptor_ResponseParamsSpec);
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

chromecast.mojom.AudioSocketBrokerReceiver = chromecast.mojom.AudioSocketBrokerReceiver;

chromecast.mojom.AudioSocketBrokerPtr = chromecast.mojom.AudioSocketBrokerRemote;
chromecast.mojom.AudioSocketBrokerRequest = chromecast.mojom.AudioSocketBrokerPendingReceiver;

