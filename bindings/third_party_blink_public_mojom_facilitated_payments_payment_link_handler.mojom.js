// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/facilitated_payments/payment_link_handler.mojom
// Module: payments.facilitated.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.facilitated = payments.facilitated || {};
payments.facilitated.mojom = payments.facilitated.mojom || {};
var url = url || {};

payments.facilitated.mojom.PaymentLinkHandler = {};
payments.facilitated.mojom.PaymentLinkHandler.$interfaceName = 'payments.facilitated.mojom.PaymentLinkHandler';
payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec = { $: {} };

// Interface: PaymentLinkHandler
mojo.internal.Struct(
    payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec, 'payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

payments.facilitated.mojom.PaymentLinkHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.facilitated.mojom.PaymentLinkHandlerRemote = class {
  static get $interfaceName() {
    return 'payments.facilitated.mojom.PaymentLinkHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.facilitated.mojom.PaymentLinkHandlerPendingReceiver,
      handle);
    this.$ = new payments.facilitated.mojom.PaymentLinkHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.facilitated.mojom.PaymentLinkHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handlePaymentLink(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec,
      null,
      [url],
      false);
  }

};

payments.facilitated.mojom.PaymentLinkHandler.getRemote = function() {
  let remote = new payments.facilitated.mojom.PaymentLinkHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.facilitated.mojom.PaymentLinkHandler',
    'context');
  return remote.$;
};

payments.facilitated.mojom.PaymentLinkHandlerReceiver = class {
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
        
        // Try Method 0: HandlePaymentLink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandlePaymentLink (0)');
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
          const params = decoder.decodeStruct(payments.facilitated.mojom.PaymentLinkHandler_HandlePaymentLink_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.handlePaymentLink');
          const result = this.impl.handlePaymentLink(params.url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

payments.facilitated.mojom.PaymentLinkHandlerReceiver = payments.facilitated.mojom.PaymentLinkHandlerReceiver;

payments.facilitated.mojom.PaymentLinkHandlerPtr = payments.facilitated.mojom.PaymentLinkHandlerRemote;
payments.facilitated.mojom.PaymentLinkHandlerRequest = payments.facilitated.mojom.PaymentLinkHandlerPendingReceiver;

