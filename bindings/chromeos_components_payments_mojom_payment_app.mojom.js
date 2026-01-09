// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/payments/mojom/payment_app.mojom
// Module: chromeos.payments.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.payments = chromeos.payments || {};
chromeos.payments.mojom = chromeos.payments.mojom || {};


// Interface: PaymentAppInstance
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

};

chromeos.payments.mojom.PaymentAppInstance.getRemote = function() {
  let remote = new chromeos.payments.mojom.PaymentAppInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.payments.mojom.PaymentAppInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.payments.mojom.PaymentAppInstancePtr = chromeos.payments.mojom.PaymentAppInstanceRemote;
chromeos.payments.mojom.PaymentAppInstanceRequest = chromeos.payments.mojom.PaymentAppInstancePendingReceiver;

