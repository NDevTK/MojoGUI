// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/payments/mojom/payment_app.mojom
// Module: chromeos.payments.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.payments = chromeos.payments || {};
chromeos.payments.mojom = chromeos.payments.mojom || {};
var chromeos = chromeos || {};
var components = components || {};

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
};

chromeos.payments.mojom.PaymentAppInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isPaymentImplemented(package_name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ParamsSpec,
      chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ResponseParamsSpec,
      [package_name],
      false);
  }

  isReadyToPay(parameters) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ParamsSpec,
      chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ResponseParamsSpec,
      [parameters],
      false);
  }

  invokePaymentApp(parameters) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ParamsSpec,
      chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ResponseParamsSpec,
      [parameters],
      false);
  }

  abortPaymentApp(request_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ParamsSpec,
      chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ResponseParamsSpec,
      [request_token],
      false);
  }

};

chromeos.payments.mojom.PaymentAppInstance.getRemote = function() {
  let remote = new chromeos.payments.mojom.PaymentAppInstanceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chromeos.payments.mojom.PaymentAppInstance',
    'context');
  return remote.$;
};

chromeos.payments.mojom.PaymentAppInstancePtr = chromeos.payments.mojom.PaymentAppInstanceRemote;
chromeos.payments.mojom.PaymentAppInstanceRequest = chromeos.payments.mojom.PaymentAppInstancePendingReceiver;

