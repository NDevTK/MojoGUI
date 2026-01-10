// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/autoplay/autoplay.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.AutoplayConfigurationClient = {};
blink.mojom.AutoplayConfigurationClient.$interfaceName = 'blink.mojom.AutoplayConfigurationClient';
blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec = { $: {} };

blink.mojom.kAutoplayFlagNone = 0x00000;

blink.mojom.kAutoplayFlagHighMediaEngagement = 0x00001;

blink.mojom.kAutoplayFlagForceAllow = 0x00002;

blink.mojom.kAutoplayFlagUserException = 0x00004;

// Interface: AutoplayConfigurationClient
mojo.internal.Struct(
    blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec, 'blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('flags', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AutoplayConfigurationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AutoplayConfigurationClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AutoplayConfigurationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AutoplayConfigurationClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.AutoplayConfigurationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AutoplayConfigurationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addAutoplayFlags(origin, flags) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec,
      null,
      [origin, flags],
      false);
  }

};

blink.mojom.AutoplayConfigurationClient.getRemote = function() {
  let remote = new blink.mojom.AutoplayConfigurationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AutoplayConfigurationClient',
    'context');
  return remote.$;
};

blink.mojom.AutoplayConfigurationClientReceiver = class {
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
        
        // Try Method 0: AddAutoplayFlags
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddAutoplayFlags (0)');
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
          const params = decoder.decodeStruct(blink.mojom.AutoplayConfigurationClient_AddAutoplayFlags_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addAutoplayFlags');
          const result = this.impl.addAutoplayFlags(params.origin, params.flags);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AutoplayConfigurationClientReceiver = blink.mojom.AutoplayConfigurationClientReceiver;

blink.mojom.AutoplayConfigurationClientPtr = blink.mojom.AutoplayConfigurationClientRemote;
blink.mojom.AutoplayConfigurationClientRequest = blink.mojom.AutoplayConfigurationClientPendingReceiver;

