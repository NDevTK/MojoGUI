// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/cast_message_channel.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};

mirroring.mojom.CastMessageSpec = { $: {} };
mirroring.mojom.CastMessageChannel = {};
mirroring.mojom.CastMessageChannel.$interfaceName = 'mirroring.mojom.CastMessageChannel';
mirroring.mojom.CastMessageChannel_OnMessage_ParamsSpec = { $: {} };

mirroring.mojom.kRemotingNamespace = "urn:x-cast:com.google.cast.remoting";

mirroring.mojom.kWebRtcNamespace = "urn:x-cast:com.google.cast.webrtc";

// Struct: CastMessage
mojo.internal.Struct(
    mirroring.mojom.CastMessageSpec, 'mirroring.mojom.CastMessage', [
      mojo.internal.StructField('message_namespace', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('json_format_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CastMessageChannel
mojo.internal.Struct(
    mirroring.mojom.CastMessageChannel_OnMessage_ParamsSpec, 'mirroring.mojom.CastMessageChannel_OnMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mirroring.mojom.CastMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mirroring.mojom.CastMessageChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mirroring.mojom.CastMessageChannelRemote = class {
  static get $interfaceName() {
    return 'mirroring.mojom.CastMessageChannel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mirroring.mojom.CastMessageChannelPendingReceiver,
      handle);
    this.$ = new mirroring.mojom.CastMessageChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mirroring.mojom.CastMessageChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mirroring.mojom.CastMessageChannel_OnMessage_ParamsSpec,
      null,
      [message],
      false);
  }

};

mirroring.mojom.CastMessageChannel.getRemote = function() {
  let remote = new mirroring.mojom.CastMessageChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mirroring.mojom.CastMessageChannel',
    'context');
  return remote.$;
};

mirroring.mojom.CastMessageChannelReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mirroring.mojom.CastMessageChannel_OnMessage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMessage (0)');
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
          const params = decoder.decodeStructInline(mirroring.mojom.CastMessageChannel_OnMessage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onMessage');
          const result = this.impl.onMessage(params.message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mirroring.mojom.CastMessageChannelReceiver = mirroring.mojom.CastMessageChannelReceiver;

mirroring.mojom.CastMessageChannelPtr = mirroring.mojom.CastMessageChannelRemote;
mirroring.mojom.CastMessageChannelRequest = mirroring.mojom.CastMessageChannelPendingReceiver;

