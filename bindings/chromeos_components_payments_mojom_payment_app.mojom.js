// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/payments/mojom/payment_app.mojom
// Module: chromeos.payments.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromeos = chromeos || {};
chromeos.payments = chromeos.payments || {};
chromeos.payments.mojom = chromeos.payments.mojom || {};

chromeos.payments.mojom.PaymentAppInstance = {};
chromeos.payments.mojom.PaymentAppInstance.$interfaceName = 'chromeos.payments.mojom.PaymentAppInstance';
chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ParamsSpec = { $: {} };
chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ResponseParamsSpec = { $: {} };
chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ParamsSpec = { $: {} };
chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ResponseParamsSpec = { $: {} };
chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ParamsSpec = { $: {} };
chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ResponseParamsSpec = { $: {} };
chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ParamsSpec = { $: {} };
chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ResponseParamsSpec = { $: {} };

// Interface: PaymentAppInstance
mojo.internal.Struct(
    chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ParamsSpec, 'chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ResponseParamsSpec, 'chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, chromeos.payments.mojom.IsPaymentImplementedResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ParamsSpec, 'chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_Params', [
      mojo.internal.StructField('parameters', 0, 0, chromeos.payments.mojom.PaymentParametersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ResponseParamsSpec, 'chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, chromeos.payments.mojom.IsReadyToPayResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ParamsSpec, 'chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_Params', [
      mojo.internal.StructField('parameters', 0, 0, chromeos.payments.mojom.PaymentParametersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ResponseParamsSpec, 'chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, chromeos.payments.mojom.InvokePaymentAppResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ParamsSpec, 'chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_Params', [
      mojo.internal.StructField('request_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ResponseParamsSpec, 'chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ResponseParams', [
      mojo.internal.StructField('aborted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.payments.mojom.PaymentAppInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.payments.mojom.PaymentAppInstanceRemote = class {
  static get $interfaceName() {
    return 'chromeos.payments.mojom.PaymentAppInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.payments.mojom.PaymentAppInstancePendingReceiver,
      handle);
    this.$ = new chromeos.payments.mojom.PaymentAppInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  isPaymentImplemented(package_name) {
    return this.$.isPaymentImplemented(package_name);
  }
  isReadyToPay(parameters) {
    return this.$.isReadyToPay(parameters);
  }
  invokePaymentApp(parameters) {
    return this.$.invokePaymentApp(parameters);
  }
  abortPaymentApp(request_token) {
    return this.$.abortPaymentApp(request_token);
  }
};

chromeos.payments.mojom.PaymentAppInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PaymentAppInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  isPaymentImplemented(package_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ParamsSpec,
      chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ResponseParamsSpec,
      [package_name],
      false);
  }

  isReadyToPay(parameters) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ParamsSpec,
      chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ResponseParamsSpec,
      [parameters],
      false);
  }

  invokePaymentApp(parameters) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ParamsSpec,
      chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ResponseParamsSpec,
      [parameters],
      false);
  }

  abortPaymentApp(request_token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ParamsSpec,
      chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ResponseParamsSpec,
      [request_token],
      false);
  }

};

chromeos.payments.mojom.PaymentAppInstance.getRemote = function() {
  let remote = new chromeos.payments.mojom.PaymentAppInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.payments.mojom.PaymentAppInstance',
    'context');
  return remote.$;
};

chromeos.payments.mojom.PaymentAppInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PaymentAppInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ParamsSpec.$.structSpec);
          const result = this.impl.isPaymentImplemented(params.package_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ParamsSpec.$.structSpec);
          const result = this.impl.isReadyToPay(params.parameters);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ParamsSpec.$.structSpec);
          const result = this.impl.invokePaymentApp(params.parameters);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ParamsSpec.$.structSpec);
          const result = this.impl.abortPaymentApp(params.request_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.payments.mojom.PaymentAppInstanceReceiver = chromeos.payments.mojom.PaymentAppInstanceReceiver;

chromeos.payments.mojom.PaymentAppInstancePtr = chromeos.payments.mojom.PaymentAppInstanceRemote;
chromeos.payments.mojom.PaymentAppInstanceRequest = chromeos.payments.mojom.PaymentAppInstancePendingReceiver;

