// Auto-generated MojoJS binding
// Source: chromium_src/codelabs/cpp101/solutions/services/math/public/mojom/math_service.mojom
// Module: math.mojom

'use strict';

// Module namespace
var math = math || {};
math.mojom = math.mojom || {};

math.mojom.MathService = {};
math.mojom.MathService.$interfaceName = 'math.mojom.MathService';
math.mojom.MathService_Divide_ParamsSpec = { $: {} };
math.mojom.MathService_Divide_ResponseParamsSpec = { $: {} };

// Interface: MathService
mojo.internal.Struct(
    math.mojom.MathService_Divide_ParamsSpec, 'math.mojom.MathService_Divide_Params', [
      mojo.internal.StructField('dividend', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('divisor', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    math.mojom.MathService_Divide_ResponseParamsSpec, 'math.mojom.MathService_Divide_ResponseParams', [
      mojo.internal.StructField('quotient', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

math.mojom.MathServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

math.mojom.MathServiceRemote = class {
  static get $interfaceName() {
    return 'math.mojom.MathService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      math.mojom.MathServicePendingReceiver,
      handle);
    this.$ = new math.mojom.MathServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

math.mojom.MathServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  divide(dividend, divisor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      math.mojom.MathService_Divide_ParamsSpec,
      math.mojom.MathService_Divide_ResponseParamsSpec,
      [dividend, divisor],
      false);
  }

};

math.mojom.MathService.getRemote = function() {
  let remote = new math.mojom.MathServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'math.mojom.MathService',
    'context');
  return remote.$;
};

math.mojom.MathServiceReceiver = class {
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
        
        // Try Method 0: Divide
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(math.mojom.MathService_Divide_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Divide (0)');
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
          const params = decoder.decodeStructInline(math.mojom.MathService_Divide_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.divide');
          const result = this.impl.divide(params.dividend, params.divisor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, math.mojom.MathService_Divide_ResponseParamsSpec);
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

math.mojom.MathServiceReceiver = math.mojom.MathServiceReceiver;

math.mojom.MathServicePtr = math.mojom.MathServiceRemote;
math.mojom.MathServiceRequest = math.mojom.MathServicePendingReceiver;

