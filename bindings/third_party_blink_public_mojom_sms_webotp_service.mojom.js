// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/sms/webotp_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SmsStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.WebOTPService = {};
blink.mojom.WebOTPService.$interfaceName = 'blink.mojom.WebOTPService';
blink.mojom.WebOTPService_Receive_ParamsSpec = { $: {} };
blink.mojom.WebOTPService_Receive_ResponseParamsSpec = { $: {} };
blink.mojom.WebOTPService_Abort_ParamsSpec = { $: {} };

// Enum: SmsStatus
blink.mojom.SmsStatus = {
  kSuccess: 0,
  kUnhandledRequest: 1,
  kCancelled: 2,
  kAborted: 3,
  kTimeout: 4,
  kBackendNotAvailable: 5,
};

// Interface: WebOTPService
mojo.internal.Struct(
    blink.mojom.WebOTPService_Receive_ParamsSpec, 'blink.mojom.WebOTPService_Receive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WebOTPService_Receive_ResponseParamsSpec, 'blink.mojom.WebOTPService_Receive_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.SmsStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('otp', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebOTPService_Abort_ParamsSpec, 'blink.mojom.WebOTPService_Abort_Params', [
    ],
    [[0, 8]]);

blink.mojom.WebOTPServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebOTPServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebOTPService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebOTPServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WebOTPServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebOTPServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  receive() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebOTPService_Receive_ParamsSpec,
      blink.mojom.WebOTPService_Receive_ResponseParamsSpec,
      [],
      false);
  }

  abort() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebOTPService_Abort_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.WebOTPService.getRemote = function() {
  let remote = new blink.mojom.WebOTPServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebOTPService',
    'context');
  return remote.$;
};

blink.mojom.WebOTPServiceReceiver = class {
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
        
        // Try Method 0: Receive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.WebOTPService_Receive_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Receive (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Abort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.WebOTPService_Abort_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Abort (1)');
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
          const params = decoder.decodeStruct(blink.mojom.WebOTPService_Receive_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.receive');
          const result = this.impl.receive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebOTPService_Receive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.WebOTPService_Abort_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.abort');
          const result = this.impl.abort();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.WebOTPServiceReceiver = blink.mojom.WebOTPServiceReceiver;

blink.mojom.WebOTPServicePtr = blink.mojom.WebOTPServiceRemote;
blink.mojom.WebOTPServiceRequest = blink.mojom.WebOTPServicePendingReceiver;

