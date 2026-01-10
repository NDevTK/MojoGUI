// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_engine.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};

ash.ime.mojom.InputChannel = {};
ash.ime.mojom.InputChannel.$interfaceName = 'ash.ime.mojom.InputChannel';
ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec = { $: {} };
ash.ime.mojom.InputChannel_ProcessMessage_ResponseParamsSpec = { $: {} };

// Interface: InputChannel
mojo.internal.Struct(
    ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec, 'ash.ime.mojom.InputChannel_ProcessMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputChannel_ProcessMessage_ResponseParamsSpec, 'ash.ime.mojom.InputChannel_ProcessMessage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.ime.mojom.InputChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.InputChannelRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.InputChannel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.InputChannelPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.InputChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.InputChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  processMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec,
      ash.ime.mojom.InputChannel_ProcessMessage_ResponseParamsSpec,
      [message],
      false);
  }

};

ash.ime.mojom.InputChannel.getRemote = function() {
  let remote = new ash.ime.mojom.InputChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputChannel',
    'context');
  return remote.$;
};

ash.ime.mojom.InputChannelReceiver = class {
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
        
        // Try Method 0: ProcessMessage
        try {
             decoder.decodeStruct(ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessMessage (0)');
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
          const params = decoder.decodeStruct(ash.ime.mojom.InputChannel_ProcessMessage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.processMessage');
          const result = this.impl.processMessage(params.message);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputChannel_ProcessMessage_ResponseParamsSpec);
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

ash.ime.mojom.InputChannelReceiver = ash.ime.mojom.InputChannelReceiver;

ash.ime.mojom.InputChannelPtr = ash.ime.mojom.InputChannelRemote;
ash.ime.mojom.InputChannelRequest = ash.ime.mojom.InputChannelPendingReceiver;

