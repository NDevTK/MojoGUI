// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/payments/mojom/payment_app.mojom
// Module: chromeos.payments.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.payments = chromeos.payments || {};
chromeos.payments.mojom = chromeos.payments.mojom || {};


// Interface: PaymentAppInstance
chromeos.payments.mojom.PaymentAppInstance = {};

chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_Params',
      packedSize: 16,
      fields: [
        { name: 'parameters', packedOffset: 0, packedBitOffset: 0, type: chromeos.payments.mojom.PaymentParametersSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_Params',
      packedSize: 16,
      fields: [
        { name: 'parameters', packedOffset: 0, packedBitOffset: 0, type: chromeos.payments.mojom.PaymentParametersSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_Params',
      packedSize: 16,
      fields: [
        { name: 'request_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [package_name]);
  }

  isReadyToPay(parameters) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ParamsSpec,
      chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ResponseParamsSpec,
      [parameters]);
  }

  invokePaymentApp(parameters) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ParamsSpec,
      chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ResponseParamsSpec,
      [parameters]);
  }

  abortPaymentApp(request_token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ParamsSpec,
      chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ResponseParamsSpec,
      [request_token]);
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

// ParamsSpec for IsPaymentImplemented
chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.PaymentAppInstance.IsPaymentImplemented_Params',
      packedSize: 16,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.payments.mojom.PaymentAppInstance_IsPaymentImplemented_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.PaymentAppInstance.IsPaymentImplemented_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: chromeos.payments.mojom.IsPaymentImplementedResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for IsReadyToPay
chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.PaymentAppInstance.IsReadyToPay_Params',
      packedSize: 16,
      fields: [
        { name: 'parameters', packedOffset: 0, packedBitOffset: 0, type: chromeos.payments.mojom.PaymentParametersSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.payments.mojom.PaymentAppInstance_IsReadyToPay_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.PaymentAppInstance.IsReadyToPay_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: chromeos.payments.mojom.IsReadyToPayResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for InvokePaymentApp
chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.PaymentAppInstance.InvokePaymentApp_Params',
      packedSize: 16,
      fields: [
        { name: 'parameters', packedOffset: 0, packedBitOffset: 0, type: chromeos.payments.mojom.PaymentParametersSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.payments.mojom.PaymentAppInstance_InvokePaymentApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.PaymentAppInstance.InvokePaymentApp_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: chromeos.payments.mojom.InvokePaymentAppResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AbortPaymentApp
chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.PaymentAppInstance.AbortPaymentApp_Params',
      packedSize: 16,
      fields: [
        { name: 'request_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.payments.mojom.PaymentAppInstance_AbortPaymentApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.PaymentAppInstance.AbortPaymentApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'aborted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.payments.mojom.PaymentAppInstancePtr = chromeos.payments.mojom.PaymentAppInstanceRemote;
chromeos.payments.mojom.PaymentAppInstanceRequest = chromeos.payments.mojom.PaymentAppInstancePendingReceiver;

